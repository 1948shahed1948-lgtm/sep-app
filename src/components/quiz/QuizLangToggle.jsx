import React from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { Languages } from 'lucide-react';

export default function QuizLangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      onClick={toggleLang}
      title={lang === 'ar' ? 'English' : 'عربي'}
      className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors"
    >
      <Languages className="w-4 h-4 text-slate-500" />
      <span className="text-[9px] font-bold text-slate-500 leading-none mt-0.5">{lang === 'ar' ? 'EN' : 'AR'}</span>
    </button>
  );
}