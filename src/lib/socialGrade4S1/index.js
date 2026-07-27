// الدراسات الاجتماعية للصف الرابع الابتدائي - الفهرس الرئيسي
import { UNIT1_LESSONS } from './unit1_citizenship';
import { UNIT2_LESSONS } from './unit2_history';
import { UNIT3_LESSONS } from './unit3_geography';
import { UNIT4_LESSONS } from './unit4_economy';

export const SOCIAL_G4_UNITS = [
  {
    id: 'unit1',
    title_ar: 'الوحدة الأولى: المواطنة',
    subtitle_ar: 'الدروس 1-4 | ص 10-37',
    icon: '🇸🇦',
    color: 'from-teal-500 to-emerald-600',
    lessons: UNIT1_LESSONS
  },
  {
    id: 'unit2',
    title_ar: 'الوحدة الثانية: التاريخ',
    subtitle_ar: 'الدروس 5-8 | ص 38-61',
    icon: '📜',
    color: 'from-amber-600 to-orange-700',
    lessons: UNIT2_LESSONS
  },
  {
    id: 'unit3',
    title_ar: 'الوحدة الثالثة: الجغرافيا',
    subtitle_ar: 'الدروس 9-13 | ص 62-89',
    icon: '🗺️',
    color: 'from-orange-500 to-red-600',
    lessons: UNIT3_LESSONS
  },
  {
    id: 'unit4',
    title_ar: 'الوحدة الرابعة: الاقتصاد',
    subtitle_ar: 'الدروس 14-16 | ص 90-109',
    icon: '💰',
    color: 'from-violet-500 to-purple-700',
    lessons: UNIT4_LESSONS
  }
];

export const SOCIAL_G4_TOTAL = SOCIAL_G4_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((s, l) => s + l.getQuestions().length, 0),
  0
);