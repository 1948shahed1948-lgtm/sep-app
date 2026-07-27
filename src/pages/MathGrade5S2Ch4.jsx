import React from 'react';
import MathChapterRunner from '@/components/math/MathChapterRunner';
import { MATH_G5_S2_CH4_UNITS, MATH_G5_S2_CH4_TOTAL } from '@/lib/mathGrade5S2_Ch4';

const theme = {
  pageBg: 'from-rose-50 to-pink-50',
  heroGradient: 'linear-gradient(135deg, #be123c 0%, #e11d48 60%, #ec4899 100%)',
  btn: 'bg-rose-600 hover:bg-rose-700',
  progress: 'bg-rose-500',
  accent: 'bg-rose-500',
  accentText: 'text-rose-600',
  lightBg: 'bg-rose-50',
  lightBorder: 'border-rose-200',
  darkText: 'text-rose-900',
  badgeBg: 'bg-rose-100',
  badgeText: 'text-rose-700',
  starColor: 'text-rose-400',
  tfHover: 'hover:border-rose-400',
  matchActive: 'border-rose-500 bg-rose-50',
  matchHover: 'hover:border-rose-300',
};

export default function MathGrade5S2Ch4() {
  return (
    <MathChapterRunner
      units={MATH_G5_S2_CH4_UNITS}
      total={MATH_G5_S2_CH4_TOTAL}
      title="رياضيات — الفصل الرابع"
      subtitle="قسمة الأعداد العشرية"
      emoji="➗"
      theme={theme}
    />
  );
}