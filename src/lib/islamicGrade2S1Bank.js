// التربية الإسلامية - الصف الثاني الابتدائي - الفصل الأول
// بنك أسئلة شامل لكتاب الدراسات الإسلامية 1447هـ / 2025م
// ثلاثة أقسام: التوحيد + الفقه والسلوك + القرآن الكريم

import { TAWHEED_U1 } from './islamicG2S1_TawheedU1';
import { TAWHEED_U2 } from './islamicG2S1_TawheedU2';
import { ADAB_L1 } from './islamicG2S1_AdabL1';
import { ADAB_L2 } from './islamicG2S1_AdabL2';
import { ADAB_L3 } from './islamicG2S1_AdabL3';
import { ADHKAR_L1 } from './islamicG2S1_AdhkarL1';
import { ADHKAR_L2 } from './islamicG2S1_AdhkarL2';
import { FIQH_U3 } from './islamicG2S1_FiqhU3';
import { FIQH_U4 } from './islamicG2S1_FiqhU4';
import { FIQH_U5 } from './islamicG2S1_FiqhU5';
import { QURAN_UNIT } from './islamicG2S1_QuranUnit';

export const META = {
  title: 'بنك أسئلة الدراسات الإسلامية',
  subject: 'الدراسات الإسلامية',
  grade: 'الصف الثاني الابتدائي',
  term: 'الفصل الأول',
  publisher: 'وزارة التعليم — المملكة العربية السعودية',
  book: 'الدراسات الإسلامية 1447هـ / 2025م',
};

export const UNITS = [
  // ─── كتاب التوحيد ──────────────────────────────────────────────
  {
    id: 'tw1',
    title: 'التوحيد — الوحدة الأولى: أسماء الله وصفاته',
    color: '#0f5132',
    icon: '🤲',
    section: 'التوحيد',
    lessons: [
      { id: 'tw1l1', title: 'الدرس الأول: الله الواحد', page: 6, unitId: 'tw1' },
      { id: 'tw1l2', title: 'الدرس الثاني: الله الرحمن الرحيم', page: 10, unitId: 'tw1' },
      { id: 'tw1l3', title: 'الدرس الثالث: الله السميع البصير', page: 14, unitId: 'tw1' },
    ],
  },
  {
    id: 'tw2',
    title: 'التوحيد — الوحدة الثانية: العبادة وما يضادها من الشرك',
    color: '#0d4a2f',
    icon: '🕋',
    section: 'التوحيد',
    lessons: [
      { id: 'tw2l1', title: 'الدرس الرابع: لماذا خلقنا الله؟', page: 18, unitId: 'tw2' },
      { id: 'tw2l2', title: 'الدرس الخامس: العبادة', page: 22, unitId: 'tw2' },
      { id: 'tw2l3', title: 'الدرس السادس: عبادة الله وحده', page: 26, unitId: 'tw2' },
      { id: 'tw2l4', title: 'الدرس السابع: عبادة غير الله شرك', page: 30, unitId: 'tw2' },
    ],
  },
  // ─── كتاب الفقه والسلوك — 5 وحدات ─────────────────────────────
  {
    id: 'u4',
    title: 'الفقه والسلوك — الوحدة الأولى: التعامل مع الناس',
    color: '#0891b2',
    icon: '🤝',
    section: 'الفقه والسلوك',
    lessons: [
      { id: 'u4l1', title: 'الدرس الأول: الآداب (1)', page: 34, unitId: 'u4' },
      { id: 'u4l2', title: 'الدرس الثاني: الآداب (2)', page: 36, unitId: 'u4' },
      { id: 'u4l3', title: 'الدرس الثالث: الآداب (3)', page: 42, unitId: 'u4' },
    ],
  },
  {
    id: 'u5',
    title: 'الفقه والسلوك — الوحدة الثانية: الأذكار والأدعية',
    color: '#059669',
    icon: '📿',
    section: 'الفقه والسلوك',
    lessons: [
      { id: 'u5l1', title: 'الدرس الرابع: أذكار الصباح والمساء', page: 46, unitId: 'u5' },
      { id: 'u5l2', title: 'الدرس الخامس: أذكار العطاس والنوم', page: 50, unitId: 'u5' },
    ],
  },
  {
    id: 'u3',
    title: 'الفقه والسلوك — الوحدة الثالثة: آداب النظافة',
    color: '#16a34a',
    icon: '🧼',
    section: 'الفقه والسلوك',
    lessons: [
      { id: 'u3l1', title: 'الدرس السادس: نظافة البدن', page: 54, unitId: 'u3' },
      { id: 'u3l2', title: 'الدرس السابع: نظافة الملابس والمكان', page: 56, unitId: 'u3' },
    ],
  },
  {
    id: 'u4a',
    title: 'الفقه والسلوك — الوحدة الرابعة: آداب الأكل والشرب',
    color: '#d97706',
    icon: '🍽️',
    section: 'الفقه والسلوك',
    lessons: [
      { id: 'u4l1a', title: 'الدرس الثامن: آداب الأكل والشرب (1) و (2)', page: 58, unitId: 'u4a' },
    ],
  },
  {
    id: 'u5a',
    title: 'الفقه والسلوك — الوحدة الخامسة: المحافظة على الممتلكات',
    color: '#b45309',
    icon: '🏛️',
    section: 'الفقه والسلوك',
    lessons: [
      { id: 'u5l1a', title: 'الدرس العاشر: الممتلكات الخاصة وحقوق الآخرين', page: 62, unitId: 'u5a' },
      { id: 'u5l2a', title: 'الدرس الحادي عشر: المحافظة على البيئة', page: 64, unitId: 'u5a' },
      { id: 'u5l3a', title: 'الدرس الثاني عشر: المحافظة على الممتلكات العامة', page: 66, unitId: 'u5a' },
    ],
  },
  // ─── القرآن الكريم ─────────────────────────────────────────────
  {
    id: 'quran',
    title: 'القرآن الكريم — سور البلد والفجر والغاشية',
    color: '#1e40af',
    icon: '📖',
    section: 'القرآن الكريم',
    lessons: [
      { id: 'quran_l1', title: 'سورة البلد (آيات 1-20)', page: 2, unitId: 'quran' },
      { id: 'quran_l2', title: 'سورة الفجر (آيات 1-30)', page: 6, unitId: 'quran' },
      { id: 'quran_l3', title: 'سورة الغاشية (آيات 1-26)', page: 12, unitId: 'quran' },
    ],
  },
];

export const BLOOM_LABELS = {
  remember: 'تذكُّر', understand: 'فهم', apply: 'تطبيق',
  analyze: 'تحليل', create: 'تركيب', evaluate: 'تقويم',
};
export const DIFFICULTY_LABELS = { easy: 'سهل', medium: 'متوسط', hard: 'صعب' };

export const ALL_QUESTIONS = [
  ...TAWHEED_U1,
  ...TAWHEED_U2,
  ...ADAB_L1,
  ...ADAB_L2,
  ...ADAB_L3,
  ...ADHKAR_L1,
  ...ADHKAR_L2,
  ...FIQH_U3,
  ...FIQH_U4,
  ...FIQH_U5,
  ...QURAN_UNIT,
];