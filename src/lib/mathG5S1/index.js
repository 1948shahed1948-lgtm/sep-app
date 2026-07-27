// مجمّع بنك رياضيات الصف الخامس الفصل الأول — يغطي الكتاب كاملاً (ص١–٢٠٩)
import { MATH_G5_S1_CH1 } from './ch1_numbers';
import { MATH_G5_S1_CH2 } from './ch2_operations';
import { MATH_G5_S1_CH3 } from './ch3_multiplication';
import { MATH_G5_S1_CH4 } from './ch4_division';
import { MATH_G5_S1_CH5 } from './ch5_algebra';
import { MATH_G5_S1_CH6 } from './ch6_fractions';

export const MATH_G5_S1_UNITS = [
  ...MATH_G5_S1_CH1,
  ...MATH_G5_S1_CH2,
  ...MATH_G5_S1_CH3,
  ...MATH_G5_S1_CH4,
  ...MATH_G5_S1_CH5,
  ...MATH_G5_S1_CH6,
];

let total = 0;
const lessonCount = MATH_G5_S1_UNITS.reduce((acc, u) => {
  const ul = u.lessons.reduce((s, l) => { total += l.count; return s + 1; }, 0);
  return acc + ul;
}, 0);

export const MATH_G5_S1_LESSONS_COUNT = lessonCount;
export const MATH_G5_S1_TOTAL = total;