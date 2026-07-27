import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH6_UNITS, MATH_G5_S2_CH6_TOTAL } from '@/lib/mathGrade5S2_Ch6';

const theme = {
  pageBg: 'from-blue-50 to-cyan-50',
  heroGradient: 'linear-gradient(135deg, #1e40af 0%, #0284c7 60%, #06b6d4 100%)',
  btn: 'bg-blue-600 hover:bg-blue-700',
  progress: 'bg-blue-500',
  accent: 'bg-blue-500',
  accentText: 'text-blue-600',
  lightBg: 'bg-blue-50',
  lightBorder: 'border-blue-200',
  darkText: 'text-blue-900',
  badgeBg: 'bg-blue-100',
  badgeText: 'text-blue-700',
  starColor: 'text-blue-400',
  tfHover: 'hover:border-blue-400',
  matchActive: 'border-blue-500 bg-blue-50',
  matchHover: 'hover:border-blue-300',
};

export default function MathGrade5S2Ch6() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH6_UNITS}
      total={MATH_G5_S2_CH6_TOTAL}
      title="رياضيات — الفصل السادس"
      subtitle="المساحة"
      emoji="📐"
      theme={theme}
    />
  );
}