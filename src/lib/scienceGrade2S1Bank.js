// العلوم - الصف الثاني الابتدائي - الفصل الأول
// بنك أسئلة شامل: 3 وحدات - النباتات والحيوانات | المواطن | أرضنا
// مستخرج من كتاب الطالب 1447هـ / 2025م

import { U1_QUESTIONS } from './scienceG2S1_Unit1';
import { U2_QUESTIONS } from './scienceG2S1_Unit2';
import { U3_QUESTIONS } from './scienceG2S1_Unit3';

export const META = {
  title: 'بنك أسئلة العلوم',
  subject: 'العلوم',
  grade: 'الصف الثاني الابتدائي',
  term: 'الفصل الأول',
  publisher: 'وزارة التعليم — المملكة العربية السعودية',
  book: 'العلوم 1447هـ / 2025م',
};

export const UNITS = [
  {
    id: 'u1',
    title: 'الوحدة الأولى: النباتات والحيوانات',
    color: '#16a34a',
    icon: '🌱',
    lessons: [
      { id: 'u1l1', title: 'حاجات المخلوقات الحية', page: 30, unitId: 'u1' },
      { id: 'u1l2', title: 'كيف تصنع النباتات غذاءها', page: 34, unitId: 'u1' },
      { id: 'u1l3', title: 'تكاثر النباتات', page: 29, unitId: 'u1' },
      { id: 'u1l4', title: 'تصنيف الحيوانات', page: 55, unitId: 'u1' },
      { id: 'u1l5', title: 'الحيوانات اللافقارية', page: 56, unitId: 'u1' },
      { id: 'u1l6', title: 'دورة حياة الحيوانات', page: 62, unitId: 'u1' },
    ],
  },
  {
    id: 'u2',
    title: 'الوحدة الثانية: المواطن',
    color: '#d97706',
    icon: '🌍',
    lessons: [
      { id: 'u2l1', title: 'ما المواطن؟', page: 76, unitId: 'u2' },
      { id: 'u2l2', title: 'الصحراء الحارة', page: 82, unitId: 'u2' },
      { id: 'u2l3', title: 'الغابة المطيرة', page: 90, unitId: 'u2' },
      { id: 'u2l4', title: 'المنطقة القطبية', page: 98, unitId: 'u2' },
      { id: 'u2l5', title: 'تكيف الكائنات في مواطنها', page: 106, unitId: 'u2' },
    ],
  },
  {
    id: 'u3',
    title: 'الوحدة الثالثة: أرضنا',
    color: '#0891b2',
    icon: '🗺️',
    lessons: [
      { id: 'u3l1', title: 'اليابسة', page: 116, unitId: 'u3' },
      { id: 'u3l2', title: 'الماء على الأرض', page: 124, unitId: 'u3' },
      { id: 'u3l3', title: 'الصخور والمعادن', page: 128, unitId: 'u3' },
      { id: 'u3l4', title: 'التربة', page: 146, unitId: 'u3' },
    ],
  },
];

export const BLOOM_LABELS = {
  remember: 'تذكُّر', understand: 'فهم', apply: 'تطبيق',
  analyze: 'تحليل', create: 'تركيب', evaluate: 'تقويم',
};
export const DIFFICULTY_LABELS = { easy: 'سهل', medium: 'متوسط', hard: 'صعب' };

export const ALL_QUESTIONS = [
  ...U1_QUESTIONS,
  ...U2_QUESTIONS,
  ...U3_QUESTIONS,
];