// بنك رياضيات الصف الرابع الفصل الأول — مُجمع الفصول
// مرجع: كتاب الرياضيات الصف الرابع الابتدائي، وزارة التعليم السعودية

import { UNIT1_LESSONS } from './unit1_placeValue';
import { UNIT2_LESSONS } from './unit2_addSubtract';
import { UNIT3_LESSONS } from './unit3_data';
import { UNIT4_LESSONS } from './unit4_patterns';
import { UNIT5_LESSONS } from './unit5_multiplication';

export const MATH_G4_S1_UNITS = [
  {
    id: 'unit1',
    title_ar: 'الفصل الأول: القيمة المنزلية',
    subtitle_ar: 'قراءة وكتابة ومقارنة وترتيب الأعداد',
    icon: '🔢',
    color: 'from-blue-600 to-indigo-700',
    lessons: UNIT1_LESSONS
  },
  {
    id: 'unit2',
    title_ar: 'الفصل الثاني: الجمع والطرح',
    subtitle_ar: 'خصائص وتقدير وحساب مع إعادة التجميع',
    icon: '➕',
    color: 'from-teal-600 to-cyan-700',
    lessons: UNIT2_LESSONS
  },
  {
    id: 'unit3',
    title_ar: 'الفصل الثالث: تنظيم البيانات',
    subtitle_ar: 'جمع وعرض وتفسير البيانات والاحتمال',
    icon: '📊',
    color: 'from-cyan-600 to-blue-700',
    lessons: UNIT3_LESSONS
  },
  {
    id: 'unit4',
    title_ar: 'الفصل الرابع: الأنماط والجبر',
    subtitle_ar: 'العبارات والجمل والجداول والاستدلال',
    icon: '🔍',
    color: 'from-indigo-600 to-purple-700',
    lessons: UNIT4_LESSONS
  },
  {
    id: 'unit5',
    title_ar: 'الفصل الخامس: الضرب',
    subtitle_ar: 'الضرب في رقم واحد ورقمين مع التحميل',
    icon: '✖️',
    color: 'from-emerald-600 to-teal-700',
    lessons: UNIT5_LESSONS
  }
];

export const MATH_G4_S1_TOTAL = MATH_G4_S1_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((s, l) => s + l.getQuestions().length, 0),
  0
);