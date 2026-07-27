// التربية الفنية للصف الرابع الابتدائي - الفهرس الرئيسي
// كتاب وزارة التعليم 1447هـ | 4 وحدات | 8 موضوعات | 420+ سؤال
import { UNIT1_LESSONS } from './unit1_drawing';
import { UNIT2_LESSONS } from './unit2_decoration';
import { UNIT3_LESSONS } from './unit3_printing';
import { UNIT4_LESSONS } from './unit4_pottery';

export const ART_G4_UNITS = [
  {
    id: 'unit1',
    title_ar: 'الوحدة الأولى: مجال الرسم',
    subtitle_ar: '3 موضوعات | ص 15-36',
    icon: '🎨',
    color: 'from-yellow-500 to-amber-600',
    lessons: UNIT1_LESSONS
  },
  {
    id: 'unit2',
    title_ar: 'الوحدة الثانية: مجال الزخرفة',
    subtitle_ar: '2 موضوعات | ص 39-52',
    icon: '🕌',
    color: 'from-purple-600 to-indigo-700',
    lessons: UNIT2_LESSONS
  },
  {
    id: 'unit3',
    title_ar: 'الوحدة الثالثة: مجال الطباعة',
    subtitle_ar: '2 موضوعات | ص 55-69',
    icon: '🖼️',
    color: 'from-pink-600 to-rose-700',
    lessons: UNIT3_LESSONS
  },
  {
    id: 'unit4',
    title_ar: 'الوحدة الرابعة: مجال الخزف',
    subtitle_ar: '2 موضوعات | ص 72-90',
    icon: '🏺',
    color: 'from-amber-700 to-yellow-800',
    lessons: UNIT4_LESSONS
  }
];

export const ART_G4_TOTAL = ART_G4_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((s, l) => s + l.getQuestions().length, 0),
  0
);