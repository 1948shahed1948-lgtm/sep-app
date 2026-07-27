import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH5_UNITS, MATH_G5_S2_CH5_TOTAL } from '@/lib/mathGrade5S2_Ch5';

const theme = {
  pageBg: 'from-green-50 to-emerald-50',
  heroGradient: 'linear-gradient(135deg, #15803d 0%, #059669 60%, #10b981 100%)',
  btn: 'bg-green-600 hover:bg-green-700',
  progress: 'bg-green-500',
  accent: 'bg-green-500',
  accentText: 'text-green-600',
  lightBg: 'bg-green-50',
  lightBorder: 'border-green-200',
  darkText: 'text-green-900',
  badgeBg: 'bg-green-100',
  badgeText: 'text-green-700',
  starColor: 'text-green-400',
  tfHover: 'hover:border-green-400',
  matchActive: 'border-green-500 bg-green-50',
  matchHover: 'hover:border-green-300',
};

export default function MathGrade5S2Ch5() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH5_UNITS}
      total={MATH_G5_S2_CH5_TOTAL}
      title="رياضيات — الفصل الخامس"
      subtitle="النسبة المئوية"
      emoji="％"
      theme={theme}
    />
  );
}