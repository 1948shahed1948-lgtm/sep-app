// بنك رياضيات الصف الثالث الابتدائي — الفصل الأول
// ٥ فصول من الكتاب الرسمي (١٤٤٧هـ) مرفقة بصور الكتاب (PDF)
import { UNIT1_LESSONS, BOOK_PDF_CH1 } from './unit1_placeValue';
import { UNIT2_LESSONS, BOOK_PDF_CH2 } from './unit2_addition';
import { UNIT3_LESSONS, BOOK_PDF_CH3 } from './unit2_subtraction';
import { UNIT4_LESSONS, BOOK_PDF_CH4 } from './unit4_multiplication1';
import { UNIT5_LESSONS, BOOK_PDF_CH5 } from './unit5_multiplication2';
import { UNIT6_LESSONS, BOOK_PDF_CH5_EXT } from './unit6_multiplicationPatterns';

export { BOOK_PDF_CH1, BOOK_PDF_CH2, BOOK_PDF_CH3, BOOK_PDF_CH4, BOOK_PDF_CH5, BOOK_PDF_CH5_EXT };

export const MATH3_S1_CHAPTERS = [
  {
    id: 'ch1',
    title_ar: 'الفصل الأول: القيمة المنزلية',
    title_en: 'Chapter 1: Place Value',
    color: '#3b82f6',
    bookPdf: BOOK_PDF_CH1,
    pageRange: 'ص ٢١–٤٠',
    lessons: UNIT1_LESSONS,
  },
  {
    id: 'ch2',
    title_ar: 'الفصل الثاني: الجمع',
    title_en: 'Chapter 2: Addition',
    color: '#0891b2',
    bookPdf: BOOK_PDF_CH2,
    pageRange: 'ص ٤٢–٧٧',
    lessons: UNIT2_LESSONS,
  },
  {
    id: 'ch3',
    title_ar: 'الفصل الثالث: الطرح',
    title_en: 'Chapter 3: Subtraction',
    color: '#dc2626',
    bookPdf: BOOK_PDF_CH3,
    pageRange: 'ص ٧٨–١١٤',
    lessons: UNIT3_LESSONS,
  },
  {
    id: 'ch4',
    title_ar: 'الفصل الرابع: الضرب (١)',
    title_en: 'Chapter 4: Multiplication (1)',
    color: '#16a34a',
    bookPdf: BOOK_PDF_CH4,
    pageRange: 'ص ١١٧–١٣٥',
    lessons: UNIT4_LESSONS,
  },
  {
    id: 'ch5a',
    title_ar: 'الفصل الخامس: الضرب (٢) — الجزء الأول',
    title_en: 'Chapter 5: Multiplication (2) — Part 1',
    color: '#7c3aed',
    bookPdf: BOOK_PDF_CH5,
    pageRange: 'ص ١٣٧–١٥٢',
    lessons: UNIT5_LESSONS,
  },
  {
    id: 'ch5b',
    title_ar: 'الفصل الخامس: الضرب (٢) — الجزء الثاني',
    title_en: 'Chapter 5: Multiplication (2) — Part 2',
    color: '#d97706',
    bookPdf: BOOK_PDF_CH5_EXT,
    pageRange: 'ص ١٥٣–١٦٧',
    lessons: UNIT6_LESSONS,
  },
];

export const MATH3_S1_TOTAL_CHAPTERS = MATH3_S1_CHAPTERS.length;
export const MATH3_S1_TOTAL_LESSONS = MATH3_S1_CHAPTERS.reduce((n, c) => n + c.lessons.length, 0);
export const MATH3_S1_TOTAL_QUESTIONS = MATH3_S1_CHAPTERS.reduce(
  (n, c) => n + c.lessons.reduce((s, l) => s + l.questions.length, 0),
  0
);