import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH3_UNITS, MATH_G5_S2_CH3_TOTAL } from '@/lib/mathGrade5S2_Ch3';

const theme = {
  pageBg: 'from-purple-50 to-violet-50',
  heroGradient: 'linear-gradient(135deg, #6b21a8 0%, #7c3aed 60%, #8b5cf6 100%)',
  btn: 'bg-purple-600 hover:bg-purple-700',
  progress: 'bg-purple-500',
  accent: 'bg-purple-500',
  accentText: 'text-purple-600',
  lightBg: 'bg-purple-50',
  lightBorder: 'border-purple-200',
  darkText: 'text-purple-900',
  badgeBg: 'bg-purple-100',
  badgeText: 'text-purple-700',
  starColor: 'text-purple-400',
  tfHover: 'hover:border-purple-400',
  matchActive: 'border-purple-500 bg-purple-50',
  matchHover: 'hover:border-purple-300',
};

export default function MathGrade5S2Ch3() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH3_UNITS}
      total={MATH_G5_S2_CH3_TOTAL}
      title="رياضيات — الفصل الثالث"
      subtitle="ضرب الأعداد العشرية"
      emoji="✖️"
      theme={theme}
    />
  );
}