import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackActivity } from '@/lib/studentActivity';

// مسارات الاختبارات/التدريب التي تُسجَّل كـ "دخول اختبار"
const TEST_PATTERNS = [
  /\/standardized\//,
  /\/aptitude/,
  /\/question-bank\//,
  /\/practice/,
  /\/quiz/,
  /\/preschool-bank/,
  /\/play-learn/,
  /\/bloom-pyramid/,
  /\/performance-bank/,
  /\/genius-challenge/,
  /\/curriculum\//,
];

export default function useActivityTracking() {
  const loc = useLocation();
  const loggedLogin = useRef(false);

  // تسجيل دخول مرة واحدة لكل جلسة
  useEffect(() => {
    if (loggedLogin.current) return;
    loggedLogin.current = true;
    trackActivity({
      activity_type: 'login',
      label_ar: 'تسجيل دخول للمنصة',
      label_en: 'Login',
      route: loc.pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // تسجيل الدخول إلى اختبار/تدريب
  useEffect(() => {
    const p = loc.pathname;
    if (TEST_PATTERNS.some((re) => re.test(p))) {
      trackActivity({
        activity_type: 'test_started',
        label_ar: 'دخول اختبار / تدريب',
        label_en: 'Entered test / practice',
        route: p,
      });
    }
  }, [loc.pathname]);
}