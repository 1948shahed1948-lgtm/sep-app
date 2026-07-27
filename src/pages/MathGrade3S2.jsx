import React from 'react';
import TextbookBankRunner from '@/components/math/TextbookBankRunner';
import { MATH3_S2_DIVISION_CHAPTERS, MATH3_S2_TOTAL_CHAPTERS, MATH3_S2_TOTAL_LESSONS } from '@/lib/mathG3S2Bank_Division';

const BANNER = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80';

export default function MathGrade3S2() {
  return (
    <TextbookBankRunner
      chapters={MATH3_S2_DIVISION_CHAPTERS}
      banner={BANNER}
      title="الرياضيات — الصف الثالث الابتدائي · ف٢"
      subtitle={`القسمة (١) و(٢) — وفق الكتاب الرسمي (${MATH3_S2_TOTAL_CHAPTERS} فصول · ${MATH3_S2_TOTAL_LESSONS} دروس)`}
      backTo="/question-bank/grade_3/second"
    />
  );
}