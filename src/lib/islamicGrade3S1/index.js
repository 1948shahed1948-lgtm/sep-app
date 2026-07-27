// التربية الإسلامية — الصف الثالث الابتدائي — الفصل الأول
// فهرس البنك الشامل — المصدر: كتاب التوحيد والفقه والسلوك 1447هـ
import { TAWHEED_UNIT1_QUESTIONS } from './tawheed_unit1';
import { TAWHEED_UNIT2_QUESTIONS } from './tawheed_unit2';
import { FIQH_UNIT1_QUESTIONS } from './fiqh_unit1';
import { FIQH_UNIT2_QUESTIONS } from './fiqh_unit2';
import { FIQH_UNIT3_QUESTIONS } from './fiqh_unit3';
import { FIQH_UNIT4_QUESTIONS } from './fiqh_unit4';
import { FIQH_UNIT5_QUESTIONS } from './fiqh_unit5';

export const ISLAMIC3_BANNER = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/21bcfe7d0_generated_image.png';

export const ISLAMIC3_UNITS = [
  /* ══════════════════════════════════════════
     التوحيد — الوحدة الأولى: مراتب الدين
  ══════════════════════════════════════════ */
  {
    id: 'tawheed1',
    section: 'tawheed',
    sectionLabel: 'التوحيد',
    title_ar: 'مراتب الدين',
    subtitle_ar: 'الإسلام والإيمان والإحسان',
    color: '#0d9488',
    emoji: '🕌',
    pageRange: 'ص ٦–١١',
    lessons: [
      {
        id: 't1l1',
        title_ar: 'مراتب الدين: الإسلام والإيمان والإحسان',
        page: 6,
        questions: TAWHEED_UNIT1_QUESTIONS,
      },
    ],
  },
  /* ══════════════════════════════════════════
     التوحيد — الوحدة الثانية: أركان الإسلام
  ══════════════════════════════════════════ */
  {
    id: 'tawheed2',
    section: 'tawheed',
    sectionLabel: 'التوحيد',
    title_ar: 'أركان الإسلام',
    subtitle_ar: 'الشهادتان والصلاة والزكاة والصوم والحج',
    color: '#2563eb',
    emoji: '🌙',
    pageRange: 'ص ١٢–٣٨',
    lessons: [
      { id: 't2l1', title_ar: 'أركان الإسلام الخمسة', page: 12, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l1') },
      { id: 't2l2', title_ar: 'الشهادتان', page: 13, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l2') },
      { id: 't2l3', title_ar: 'الصلاة', page: 22, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l3') },
      { id: 't2l4', title_ar: 'الزكاة', page: 28, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l4') },
      { id: 't2l5', title_ar: 'الصوم', page: 34, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l5') },
      { id: 't2l6', title_ar: 'الحج', page: 37, questions: TAWHEED_UNIT2_QUESTIONS.filter(q => q.lesson === 't2l6') },
    ],
  },
  /* ══════════════════════════════════════════
     الفقه والسلوك — الوحدة الأولى: آداب قضاء الحاجة
  ══════════════════════════════════════════ */
  {
    id: 'fiqh1',
    section: 'fiqh',
    sectionLabel: 'الفقه والسلوك',
    title_ar: 'آداب قضاء الحاجة',
    subtitle_ar: 'الدعاء والاستنجاء وإزالة النجاسة',
    color: '#7c3aed',
    emoji: '🚿',
    pageRange: 'ص ٣٩–٥٥',
    lessons: [
      { id: 'f1l1', title_ar: 'الدعاء عند دخول الخلاء والخروج منه', page: 39, questions: FIQH_UNIT1_QUESTIONS.filter(q => q.lesson === 'f1l1') },
      { id: 'f1l2', title_ar: 'آداب قضاء الحاجة في الفضاء', page: 41, questions: FIQH_UNIT1_QUESTIONS.filter(q => q.lesson === 'f1l2') },
      { id: 'f1l3', title_ar: 'الاستنجاء والاستجمار', page: 44, questions: FIQH_UNIT1_QUESTIONS.filter(q => q.lesson === 'f1l3') },
      { id: 'f1l4', title_ar: 'إزالة النجاسة عن البدن والثوب والمكان', page: 49, questions: FIQH_UNIT1_QUESTIONS.filter(q => q.lesson === 'f1l4') },
    ],
  },
  /* ══════════════════════════════════════════
     الفقه والسلوك — الوحدة الثانية: التيمم
  ══════════════════════════════════════════ */
  {
    id: 'fiqh2',
    section: 'fiqh',
    sectionLabel: 'الفقه والسلوك',
    title_ar: 'التيمم',
    subtitle_ar: 'تعريفه وحكمه وصفته',
    color: '#d97706',
    emoji: '🏜️',
    pageRange: 'ص ٥٦–٥٧',
    lessons: [
      { id: 'f2l1', title_ar: 'التيمم: تعريفه وحكمه وكيفيته', page: 56, questions: FIQH_UNIT2_QUESTIONS },
    ],
  },
  /* ══════════════════════════════════════════
     الفقه والسلوك — الوحدة الثالثة: مكان الصلاة وشروطها
  ══════════════════════════════════════════ */
  {
    id: 'fiqh3',
    section: 'fiqh',
    sectionLabel: 'الفقه والسلوك',
    title_ar: 'مكان الصلاة وشروطها',
    subtitle_ar: 'الشروط التسعة لصحة الصلاة',
    color: '#059669',
    emoji: '🕍',
    pageRange: 'ص ٥٨–٧٠',
    lessons: [
      { id: 'f3l1', title_ar: 'الشروط الأولى: الإسلام والعقل والتمييز', page: 58, questions: FIQH_UNIT3_QUESTIONS.filter(q => q.lesson === 'f3l1') },
      { id: 'f3l2', title_ar: 'الشروط الوسطى: الطهارة وستر العورة', page: 60, questions: FIQH_UNIT3_QUESTIONS.filter(q => q.lesson === 'f3l2') },
      { id: 'f3l3', title_ar: 'الشروط الأخيرة: الوقت والقبلة والنية', page: 66, questions: FIQH_UNIT3_QUESTIONS.filter(q => q.lesson === 'f3l3') },
    ],
  },
  /* ══════════════════════════════════════════
     الفقه والسلوك — الوحدة الرابعة: آداب دخول المسجد
  ══════════════════════════════════════════ */
  {
    id: 'fiqh4',
    section: 'fiqh',
    sectionLabel: 'الفقه والسلوك',
    title_ar: 'آداب دخول المسجد والخروج منه',
    subtitle_ar: 'فضل المسجد والهدوء والنظافة',
    color: '#dc2626',
    emoji: '🕌',
    pageRange: 'ص ٧١–٧٦',
    lessons: [
      { id: 'f4l1', title_ar: 'الدخول والخروج وتحية المسجد', page: 72, questions: FIQH_UNIT4_QUESTIONS.filter(q => q.lesson === 'f4l1') },
      { id: 'f4l2', title_ar: 'الهدوء والمحافظة على نظافة المسجد', page: 73, questions: FIQH_UNIT4_QUESTIONS.filter(q => q.lesson === 'f4l2') },
    ],
  },
  /* ══════════════════════════════════════════
     الفقه والسلوك — الوحدة الخامسة: صلاة الجماعة
  ══════════════════════════════════════════ */
  {
    id: 'fiqh5',
    section: 'fiqh',
    sectionLabel: 'الفقه والسلوك',
    title_ar: 'صلاة الجماعة',
    subtitle_ar: 'فضلها وحكمها للرجال',
    color: '#0891b2',
    emoji: '👥',
    pageRange: 'ص ٧٧–٨٠',
    lessons: [
      { id: 'f5l1', title_ar: 'فضل صلاة الجماعة', page: 78, questions: FIQH_UNIT5_QUESTIONS.filter(q => q.lesson === 'f5l1') },
      { id: 'f5l2', title_ar: 'حكم صلاة الجماعة للرجال', page: 79, questions: FIQH_UNIT5_QUESTIONS.filter(q => q.lesson === 'f5l2') },
    ],
  },
];

// جميع الأسئلة
export const ALL_ISLAMIC3_QUESTIONS = [
  ...TAWHEED_UNIT1_QUESTIONS,
  ...TAWHEED_UNIT2_QUESTIONS,
  ...FIQH_UNIT1_QUESTIONS,
  ...FIQH_UNIT2_QUESTIONS,
  ...FIQH_UNIT3_QUESTIONS,
  ...FIQH_UNIT4_QUESTIONS,
  ...FIQH_UNIT5_QUESTIONS,
];

export const TOTAL_UNITS = ISLAMIC3_UNITS.length;
export const TOTAL_LESSONS = ISLAMIC3_UNITS.reduce((n, u) => n + u.lessons.length, 0);
export const TOTAL_QUESTIONS = ALL_ISLAMIC3_QUESTIONS.length;