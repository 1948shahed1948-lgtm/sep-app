import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH2_UNITS, MATH_G5_S2_CH2_TOTAL } from '@/lib/mathGrade5S2_Ch2';

const theme = {
  pageBg: 'from-cyan-50 to-blue-50',
  heroGradient: 'linear-gradient(135deg, #0e7490 0%, #0284c7 60%, #1d4ed8 100%)',
  btn: 'bg-cyan-600 hover:bg-cyan-700',
  progress: 'bg-cyan-500',
  accent: 'bg-cyan-500',
  accentText: 'text-cyan-600',
  lightBg: 'bg-cyan-50',
  lightBorder: 'border-cyan-200',
  darkText: 'text-cyan-900',
  badgeBg: 'bg-cyan-100',
  badgeText: 'text-cyan-700',
  starColor: 'text-cyan-400',
  tfHover: 'hover:border-cyan-400',
  matchActive: 'border-cyan-500 bg-cyan-50',
  matchHover: 'hover:border-cyan-300',
};

export default function MathGrade5S2Ch2() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH2_UNITS}
      total={MATH_G5_S2_CH2_TOTAL}
      title="رياضيات — الفصل الثاني"
      subtitle="جمع الأعداد العشرية وطرحها"
      emoji="🧮"
      theme={theme}
    />
  );
}