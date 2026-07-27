import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH10_UNITS, MATH_G5_S2_CH10_TOTAL } from '@/lib/mathGrade5S2_Ch10';

const theme = {
  pageBg: 'from-indigo-50 to-blue-50',
  heroGradient: 'linear-gradient(135deg, #3730a3 0%, #4f46e5 60%, #6366f1 100%)',
  btn: 'bg-indigo-600 hover:bg-indigo-700',
  progress: 'bg-indigo-500',
  accent: 'bg-indigo-500',
  accentText: 'text-indigo-600',
  lightBg: 'bg-indigo-50',
  lightBorder: 'border-indigo-200',
  darkText: 'text-indigo-900',
  badgeBg: 'bg-indigo-100',
  badgeText: 'text-indigo-700',
  starColor: 'text-indigo-400',
  tfHover: 'hover:border-indigo-400',
  matchActive: 'border-indigo-500 bg-indigo-50',
  matchHover: 'hover:border-indigo-300',
};

export default function MathGrade5S2Ch10() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH10_UNITS}
      total={MATH_G5_S2_CH10_TOTAL}
      title="رياضيات — الفصل العاشر"
      subtitle="ضرب الكسور وقسمتها"
      emoji="🔢"
      theme={theme}
    />
  );
}