import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH11_UNITS, MATH_G5_S2_CH11_TOTAL } from '@/lib/mathGrade5S2_Ch11';

const theme = {
  pageBg: 'from-sky-50 to-indigo-50',
  heroGradient: 'linear-gradient(135deg, #0369a1 0%, #0284c7 60%, #4f46e5 100%)',
  btn: 'bg-sky-600 hover:bg-sky-700',
  progress: 'bg-sky-500',
  accent: 'bg-sky-500',
  accentText: 'text-sky-600',
  lightBg: 'bg-sky-50',
  lightBorder: 'border-sky-200',
  darkText: 'text-sky-900',
  badgeBg: 'bg-sky-100',
  badgeText: 'text-sky-700',
  starColor: 'text-sky-400',
  tfHover: 'hover:border-sky-400',
  matchActive: 'border-sky-500 bg-sky-50',
  matchHover: 'hover:border-sky-300',
};

export default function MathGrade5S2Ch11() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH11_UNITS}
      total={MATH_G5_S2_CH11_TOTAL}
      title="رياضيات — الفصل الحادي عشر"
      subtitle="الحجم"
      emoji="📦"
      theme={theme}
    />
  );
}