export const TRIAL_MS = 48 * 60 * 60 * 1000; // 48 ساعة بالجهاز

const DEVICE_ID_KEY = 'sqg_device_id';
const TRIAL_START_KEY = 'sqg_trial_start';

export function getDeviceId() {
  try {
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = 'dev_' + Date.now() + '_' + Math.random().toString(36).slice(2, 11);
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  } catch { return null; }
}

export function getTrialStartMs() {
  try {
    let start = localStorage.getItem(TRIAL_START_KEY);
    if (!start) {
      start = Date.now().toString();
      localStorage.setItem(TRIAL_START_KEY, start);
    }
    return parseInt(start);
  } catch { return Date.now(); }
}

export function computeAccess(user, subscription, serverTrialStartMs) {
  if (user?.role === 'admin') return 'full';
  if (subscription && subscription.status === 'active') {
    const end = subscription.current_period_end ? new Date(subscription.current_period_end).getTime() : 0;
    if (!end || end > Date.now()) return 'full';
  }
  // الضيوف (غير المسجّلين بالبريد) يتصفّحون المنصة بحرية
  if (!user) return 'full';
  // المسجّلون بالبريد: تجربة يومين لكل حساب ثم معاينة محدودة
  let trialStart = getTrialStartMs();
  if (serverTrialStartMs) {
    const serverMs = new Date(serverTrialStartMs).getTime() || 0;
    if (serverMs) {
      trialStart = serverMs;
      try { localStorage.setItem(TRIAL_START_KEY, String(serverMs)); } catch {}
    }
  }
  if (Date.now() - trialStart < TRIAL_MS) return 'trial';
  return 'preview';
}

export function trialEndsAt() {
  return new Date(getTrialStartMs() + TRIAL_MS);
}

export function trialRemainingMs() {
  const trialStart = getTrialStartMs();
  return Math.max(0, trialStart + TRIAL_MS - Date.now());
}

export function formatRemaining(ms, ar = true) {
  if (ms <= 0) return ar ? 'انتهت' : 'Ended';
  const totalMin = Math.floor(ms / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  if (ar) {
    const parts = [];
    if (days > 0) parts.push(`${days} يوم`);
    if (hours > 0) parts.push(`${hours} ساعة`);
    if (mins > 0 && days === 0) parts.push(`${mins} دقيقة`);
    return parts.join(' و') || 'أقل من دقيقة';
  }
  const parts = [];
  if (days > 0) parts.push(`${days} day${days > 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours}h`);
  if (mins > 0 && days === 0) parts.push(`${mins}m`);
  return parts.join(' ') || '<1m';
}

// بعد انتهاء اليومين: الصفان 1-2 فقط، بثلاث مواد (علوم، لغتي، إنجليزي) — الباقي معاينة (أيقونات فقط)
const PREVIEW_ALLOWED_GRADE_PAGES = [
  // علوم — Science (الصفان الأول والثاني)
  '/science-grade1-s1', '/science-grade1-s2',
  '/science-grade2-s1', '/science-grade2-s2',
  // لغتي — Arabic (الصفان الأول والثاني)
  '/lughati-grade1-s1',
  '/lughati-grade2-s1', '/lughati-grade2-s2', '/lughati-grade2-s1-new',
  // إنجليزي — English (الصفان الأول والثاني)
  '/english-grade1-s1', '/english-grade1-s2',
  '/english-grade2-s1-wecan'
];

// كشف الصفوف 4 فأعلى — ممنوعة تماماً بعد انتهاء التجربة
export function isGrade4PlusPath(pathname) {
  // مسارات بنك الأسئلة والمناهج: grade_4, grade_5 ... grade_12
  if (/grade[_]?(4|5|6|7|8|9|1[0-2])\b/i.test(pathname)) return true;
  // الصفحات المحددة للصفوف 4+: math-grade5, science-grade6, tawheed-grade7 ...
  if (/(grade5|grade6|grade7|grade8|grade9|grade10|grade11|grade12)/i.test(pathname)) return true;
  // بنك الصفين 3-4 المختلط (يحتوي صف 4)
  if (/grade-3-4-bank/i.test(pathname)) return true;
  return false;
}

// كشف كل البنوك والاختبارات خارج بنوك الأسئلة — ممنوعة بعد انتهاء التجربة
export function isTestBankPath(pathname) {
  // اختبارات القدرات والتحصيل الجامعي
  if (/^\/aptitude(-landing|-university-2)?(\b|\/)/i.test(pathname)) return true;
  // الاختبارات المعيارية والتشخيصية
  if (/^\/standardized\b/i.test(pathname)) return true;
  // تحدي العباقرة
  if (/^\/genius-challenge\b/i.test(pathname)) return true;
  // البنوك الخاصة المتقدمة
  if (/^\/(neom-curriculum|international-standardized|bloom-pyramid|performance-bank|play-learn|preschool-bank|curriculum-in-life|dahir)\b/i.test(pathname)) return true;
  return false;
}

export function isPreviewAllowedPath(pathname) {
  // منع الصفوف 4 فأعلى صراحةً — حتى لو كانت في القائمة
  if (isGrade4PlusPath(pathname)) return false;
  // منع بنوك الاختبارات (القدرات والتحصيل والعباقرة) بعد التجربة
  if (isTestBankPath(pathname)) return false;
  // مسارات بنك الأسئلة للصفين 1-2 (صفحات الاختيار تظهر الأيقونات كمعاينة)
  if (/\/question-bank\/grade_[12]\b/.test(pathname)) return true;
  // مسارات المناهج للصفين 1-2
  if (/\/curriculum\/[^/]+\/grade_[12]\b/.test(pathname)) return true;
  return PREVIEW_ALLOWED_GRADE_PAGES.some(p => pathname === p || pathname.startsWith(p + '/'));
}