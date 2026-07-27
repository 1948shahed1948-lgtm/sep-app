// بنك لغتي الصف الرابع - مُجمع الدروس
// مرجع: كتاب لغتي للصف الرابع الابتدائي، وزارة التعليم السعودية

import { UNIT1_LESSONS_PART1 } from './unit1_health';
import { UNIT1_LESSONS_PART2 } from './unit1_spelling';
import { UNIT1_LESSONS_PART3 } from './unit1_grammar';
import { UNIT2_LESSONS_PART1 } from './unit2_environment';
import { UNIT2_LESSONS_PART2 } from './unit2_poetry';

export const LUGHATI_G4_UNITS = [
  {
    id: 'unit1',
    title_ar: 'الوحدة الأولى: صحتي وبيئتي',
    subtitle_ar: 'النصوص والإملاء والنحو (الدروس 1-10)',
    icon: '🌱',
    color: 'from-emerald-500 to-teal-600',
    lessons: [...UNIT1_LESSONS_PART1, ...UNIT1_LESSONS_PART2, ...UNIT1_LESSONS_PART3]
  },
  {
    id: 'unit2',
    title_ar: 'الوحدة الثانية: البيئة والطبيعة',
    subtitle_ar: 'الفاعل والمفعول به والنص الشعري والتواصل (ص 103-158)',
    icon: '🦋',
    color: 'from-blue-500 to-purple-600',
    lessons: [...UNIT2_LESSONS_PART1, ...UNIT2_LESSONS_PART2]
  }
];

export const LUGHATI_G4_TOTAL = LUGHATI_G4_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((s, l) => s + l.getQuestions().length, 0),
  0
);