export function getMasteryLevel(percentage) {
  const p = percentage || 0;
  if (p >= 90) return { key: 'mastered', label_ar: 'متقن', label_en: 'Mastered' };
  if (p >= 70) return { key: 'proficient', label_ar: 'جيد', label_en: 'Proficient' };
  if (p >= 40) return { key: 'developing', label_ar: 'متوسط', label_en: 'Developing' };
  return { key: 'weak', label_ar: 'يحتاج تركيز', label_en: 'Needs Focus' };
}

export const LEVEL_STYLES = {
  mastered: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500' },
  proficient: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  developing: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' },
  weak: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', dot: 'bg-red-500' },
};