import React from 'react';
import TextbookBankRunner from '@/components/math/TextbookBankRunner';
import { MATH1_S2_CHAPTERS } from '@/lib/mathG1S2TextbookBank';

const BANNER = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80';

export default function MathGrade1S2() {
  return (
    <TextbookBankRunner
      chapters={MATH1_S2_CHAPTERS}
      subjectTitleAr="رياضيات الصف الأول — الفصل الثاني"
      subjectTitleEn="Grade 1 Math — Semester 2"
      bannerImage={BANNER}
      backTo="/question-bank/grade_1/second"
    />
  );
}