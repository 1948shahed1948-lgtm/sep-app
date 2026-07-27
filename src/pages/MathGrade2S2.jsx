import React from 'react';
import TextbookBankRunner from '@/components/math/TextbookBankRunner';
import { MATH2_S2_CHAPTERS, TOTAL_CHAPTERS, TOTAL_LESSONS } from '@/lib/mathG2S2TextbookBank';

const BANNER = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/5cb0f7907_generated_image.png';

export default function MathGrade2S2() {
  return (
    <TextbookBankRunner
      chapters={MATH2_S2_CHAPTERS}
      banner={BANNER}
      title="الرياضيات — الصف الثاني الابتدائي · ف٢"
      subtitle={`بنك أسئلة وفق الكتاب الرسمي (${TOTAL_CHAPTERS} فصول · ${TOTAL_LESSONS} دروس)`}
      backTo="/question-bank/grade_2/second"
    />
  );
}