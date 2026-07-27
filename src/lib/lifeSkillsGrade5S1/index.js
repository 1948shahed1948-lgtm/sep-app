// تجميع الوحدات الخمس لبنك المهارات الحياتية والأسرية — الصف الخامس ف١
import { UNIT1 } from './unit1';
import { UNIT2 } from './unit2';
import { UNIT3 } from './unit3';
import { UNIT4 } from './unit4';
import { UNIT5 } from './unit5';

export const LIFE_SKILLS_G5_S1 = {
  subject: 'المهارات الحياتية والأسرية',
  grade: 'الصف الخامس الابتدائي',
  semester: 'الفصل الأول 1447هـ',
  units: [UNIT1, UNIT2, UNIT3, UNIT4, UNIT5]
};

export const LIFE_SKILLS_TOTAL = LIFE_SKILLS_G5_S1.units
  .flatMap(u => u.lessons)
  .reduce((s, l) => s + l.questions.length, 0);

// إعادة تصدير الوحدات للاستخدام الفردي
export { UNIT1, UNIT2, UNIT3, UNIT4, UNIT5 };