import { useRef, useEffect } from 'react';

/**
 * يُرجع ref تضعه أعلى منطقة السؤال؛ وعند تغيّر قيمة `dep`
 * (مثل فهرس السؤال) يتم التمرير لأعلى تلك المنطقة فوراً
 * بدل بقاء الصفحة في الأسفل (قسم التواصل/التذييل).
 */
export function useScrollTopOnChange(dep, offset = 90) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    }
  }, [dep]);
  return ref;
}