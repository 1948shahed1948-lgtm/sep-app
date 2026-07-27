// لغتي - الصف الثالث الابتدائي - الفصل الأول
// الوحدة 1: التّعَامُلُ مَعَ الْآخَرِينَ | الوحدة 2: رُبُوعٌ، مِنْ بِلَادِي
import { UNIT1_QUESTIONS } from './lughatiGrade3S1/unit1';
import { UNIT2_QUESTIONS } from './lughatiGrade3S1/unit2';
import { UNIT3_QUESTIONS } from './lughatiGrade3S1/unit3';
import { UNIT4_QUESTIONS } from './lughatiGrade3S1/unit4';

export const META = {
  title: 'بنك أسئلة لغتي',
  subject: 'لغتي',
  grade: 'الصف الثالث الابتدائي',
  term: 'الفصل الأول',
  publisher: 'وزارة التعليم - المملكة العربية السعودية',
  book: 'لغتي 1447هـ / 2025م',
  icon: '📖',
};

export const UNITS = [
  {
    id: 'unit1',
    title: 'الوحدة ١: التّعَامُلُ مَعَ الْآخَرِينَ',
    color: '#3a57e8',
    icon: '🤝',
    lessons: [
      { id: 'u1l1', title: 'مُرَاجَعَةُ الْمُكْتَسَبَاتِ السَّابِقَة', page: 7, unitId: 'unit1' },
      { id: 'u1l2', title: 'أَتَعَلَّمُ فَنَّ الْخَط', page: 12, unitId: 'unit1' },
      { id: 'u1l3', title: 'نَشَاطَاتُ التَّهْتِئَةِ', page: 15, unitId: 'unit1' },
      { id: 'u1l4', title: 'شُكْرًا يَا جَارَتِي', page: 16, unitId: 'unit1' },
      { id: 'u1l5', title: 'آدَابُ الْحَدِيث', page: 21, unitId: 'unit1' },
      { id: 'u1l6', title: 'عَادِلُ فِي الطَّائِرَةِ', page: 22, unitId: 'unit1' },
      { id: 'u1l7', title: 'عَامُ دِرَاسَتِّي، جَدِيدُ', page: 34, unitId: 'unit1' },
      { id: 'u1l8', title: 'نَمُوذَج اخْتِبَار (١)', page: 44, unitId: 'unit1' },
    ],
  },
  {
    id: 'unit2',
    title: 'الوحدة ٢: رُبُوعٌ، مِنْ بِلَادِي',
    color: '#059669',
    icon: '🏞️',
    lessons: [
      { id: 'u2l1', title: 'مِنْ مَعَالِمِ بِلَادِي (استماع)', page: 58, unitId: 'unit2' },
      { id: 'u2l2', title: 'النَّشِيد: تَا بِلَادِي', page: 61, unitId: 'unit2' },
      { id: 'u2l3', title: 'الرِّيَاضُ وَالْمَلِكُ الشَّجَاعُ', page: 62, unitId: 'unit2' },
      { id: 'u2l4', title: 'مَصَاتِفُنَا', page: 72, unitId: 'unit2' },
    ],
  },
  {
    id: 'unit3',
    title: 'الوحدة ٣: أَخْلَاقُ الْمُسْلِمِ',
    color: '#7c3aed',
    icon: '🤲',
    lessons: [
      { id: 'u3intro', title: 'مَدْخَلُ الْوَحْدَة', page: 88, unitId: 'unit3' },
      { id: 'u3l1', title: 'الصِّدْق', page: 90, unitId: 'unit3' },
      { id: 'u3l2', title: 'الْأَمَانَة', page: 96, unitId: 'unit3' },
    ],
  },
  {
    id: 'unit4',
    title: 'الوحدة ٤: وَسَائِلُ الِاتِّصَالَاتِ',
    color: '#dc2626',
    icon: '📡',
    lessons: [
      { id: 'u4intro', title: 'مَدْخَلُ الْوَحْدَة', page: 104, unitId: 'unit4' },
      { id: 'u4l1', title: 'وَسَائِلُ الِاتِّصَالِ قَدِيمًا', page: 106, unitId: 'unit4' },
      { id: 'u4l2', title: 'وَسَائِلُ الِاتِّصَالِ حَدِيثًا', page: 112, unitId: 'unit4' },
    ],
  },
];

export const BLOOM_LABELS = {
  remember: 'تذكُّر', understand: 'فهم', apply: 'تطبيق',
  analyze: 'تحليل', create: 'تركيب', evaluate: 'تقويم',
};
export const DIFFICULTY_LABELS = { easy: 'سهل', medium: 'متوسط', hard: 'صعب' };

export const ALL_QUESTIONS = [...UNIT1_QUESTIONS, ...UNIT2_QUESTIONS, ...UNIT3_QUESTIONS, ...UNIT4_QUESTIONS];

export function getQuestionsByLesson(lessonId) {
  return ALL_QUESTIONS.filter(q => q.lesson === lessonId);
}