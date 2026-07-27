// المهارات الرقمية للصف الرابع الابتدائي - الفهرس الرئيسي
// كتاب وزارة التعليم 1447هـ | 4 وحدات | 8 دروس | 480+ سؤال
import { UNIT1_LESSONS } from './unit1_computer';
import { UNIT2_LESSONS } from './unit2_word';
import { UNIT3_LESSONS } from './unit3_internet';
import { UNIT4_LESSONS } from './unit4_scratch';

export const COMPUTER_G4_UNITS = [
  {
    id: 'unit1',
    title_ar: 'الوحدة الأولى: تعلم الأساسيات',
    subtitle_ar: '3 دروس | ص 12-41',
    icon: '🖥️',
    color: 'from-blue-600 to-cyan-700',
    lessons: UNIT1_LESSONS
  },
  {
    id: 'unit2',
    title_ar: 'الوحدة الثانية: العمل على النص',
    subtitle_ar: '4 دروس | ص 42-85',
    icon: '⌨️',
    color: 'from-emerald-600 to-teal-700',
    lessons: UNIT2_LESSONS
  },
  {
    id: 'unit3',
    title_ar: 'الوحدة الثالثة: عالمي المتصل',
    subtitle_ar: '4 دروس | ص 86-117',
    icon: '🌐',
    color: 'from-blue-500 to-indigo-700',
    lessons: UNIT3_LESSONS
  },
  {
    id: 'unit4',
    title_ar: 'الوحدة الرابعة: العمل مع البرمجة باستخدام سكراتش',
    subtitle_ar: '4 دروس | ص 118-159',
    icon: '🐱',
    color: 'from-orange-500 to-amber-600',
    lessons: UNIT4_LESSONS
  }
];

export const COMPUTER_G4_TOTAL = COMPUTER_G4_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((s, l) => s + l.getQuestions().length, 0),
  0
);