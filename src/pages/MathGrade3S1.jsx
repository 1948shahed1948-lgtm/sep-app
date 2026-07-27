import React from 'react';
import TextbookBankRunner from '@/components/math/TextbookBankRunner';
import { MATH3_S1_CHAPTERS, MATH3_S1_TOTAL_CHAPTERS, MATH3_S1_TOTAL_LESSONS, MATH3_S1_TOTAL_QUESTIONS } from '@/lib/mathGrade3S1';

const BANNER = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80';

export default function MathGrade3S1() {
  return (
    <TextbookBankRunner
      chapters={MATH3_S1_CHAPTERS}
      banner={BANNER}
      title="الرياضيات — الصف الثالث الابتدائي · ف١"
      subtitle={`القيمة المنزلية والضرب — وفق الكتاب الرسمي (${MATH3_S1_TOTAL_CHAPTERS} فصول · ${MATH3_S1_TOTAL_LESSONS} درس · ${MATH3_S1_TOTAL_QUESTIONS} سؤال)`}
      backTo="/question-bank/grade_3/first"
    />
  );
}