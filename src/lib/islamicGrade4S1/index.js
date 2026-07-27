// الدراسات الإسلامية - الصف الرابع الابتدائي
// الجزء الأول: التوحيد، العبادة، الحديث والسيرة، الفقه
import { TAWHEED_UNIT } from './tawheed';
import { IBADAH_UNIT } from './ibadah';
import { SEERAH_UNIT } from './seerah';
import { FIQH_UNIT } from './fiqh';

export const ISLAMIC_G4_UNITS = [
  TAWHEED_UNIT,
  IBADAH_UNIT,
  SEERAH_UNIT,
  FIQH_UNIT,
];

export const ISLAMIC_G4_BANNER = {
  title: 'الدراسات الإسلامية',
  subtitle: 'الصف الرابع الابتدائي',
  publisher: 'وزارة التعليم — المملكة العربية السعودية 1447هـ / 2025م',
  coverImage: 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/9734b3d8d________1-10.pdf',
  color: '#1a5276',
  accentColor: '#c9a227',
};

export const TOTAL_QUESTIONS_G4 = ISLAMIC_G4_UNITS.reduce(
  (total, unit) => total + unit.lessons.reduce(
    (lt, lesson) => lt + lesson.questions.length, 0
  ), 0
);

export const TOTAL_LESSONS_G4 = ISLAMIC_G4_UNITS.reduce(
  (total, unit) => total + unit.lessons.length, 0
);