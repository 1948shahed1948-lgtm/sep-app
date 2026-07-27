// بنك علوم الصف الخامس — الفصل الدراسي الثاني
// المصدر: كتاب وزارة التعليم ١٤٤٧هـ
// ٥ وحدات · ٩ دروس · ٤٥٠ سؤالاً تفاعلياً

import { generateLessonQuestions } from './generator';
import {
  UNIT1_LESSON1, UNIT1_LESSON2,
} from './unit1_diversity';
import {
  UNIT2_LESSON1, UNIT2_LESSON2,
} from './unit2_reproduction';
import {
  UNIT3_LESSON1, UNIT3_LESSON2,
} from './unit3_ecosystems';
import {
  UNIT4_LESSON1, UNIT4_LESSON2, UNIT5_LESSON1, UNIT5_LESSON2,
} from './unit4_cycles';

const rawLessons = [
  UNIT1_LESSON1, UNIT1_LESSON2,
  UNIT2_LESSON1, UNIT2_LESSON2,
  UNIT3_LESSON1, UNIT3_LESSON2,
  UNIT4_LESSON1, UNIT4_LESSON2,
  UNIT5_LESSON1, UNIT5_LESSON2,
];

// دمج الدروس في وحدات
const UNIT_DEFS = [
  {
    id: 'u1',
    title_ar: 'تنوع الحياة',
    subtitle_ar: 'تصنيف المخلوقات الحية · النباتات',
    color: 'from-emerald-700 to-green-500',
    icon: '🌿',
    lessons: [UNIT1_LESSON1, UNIT1_LESSON2],
  },
  {
    id: 'u2',
    title_ar: 'الآباء والأبناء',
    subtitle_ar: 'التكاثر · دورات الحياة',
    color: 'from-rose-700 to-pink-500',
    icon: '🧬',
    lessons: [UNIT2_LESSON1, UNIT2_LESSON2],
  },
  {
    id: 'u3',
    title_ar: 'الأنظمة البيئية',
    subtitle_ar: 'العلاقات الغذائية · التكيف والبقاء',
    color: 'from-teal-700 to-cyan-500',
    icon: '🌍',
    lessons: [UNIT3_LESSON1, UNIT3_LESSON2],
  },
  {
    id: 'u4',
    title_ar: 'الدورات والتغيرات البيئية',
    subtitle_ar: 'دورة الماء والكربون · التعاقب البيئي',
    color: 'from-sky-700 to-blue-500',
    icon: '🔄',
    lessons: [UNIT4_LESSON1, UNIT4_LESSON2],
  },
  {
    id: 'u5',
    title_ar: 'الأرض ومواردها',
    subtitle_ar: 'التربة · الموارد الطبيعية · المحافظة',
    color: 'from-amber-700 to-orange-500',
    icon: '⛏️',
    lessons: [UNIT5_LESSON1, UNIT5_LESSON2],
  },
];

// توليد الأسئلة لكل درس وتحضير الوحدات للعرض
export const SCIENCE_G5_S2_UNITS = UNIT_DEFS.map((unit) => ({
  ...unit,
  lessons: unit.lessons.map((lesson) => ({
    ...lesson,
    count: 50,
    getQuestions: () => generateLessonQuestions(lesson, lesson.id),
  })),
}));

export const SCIENCE_G5_S2_TOTAL = SCIENCE_G5_S2_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0),
  0
);