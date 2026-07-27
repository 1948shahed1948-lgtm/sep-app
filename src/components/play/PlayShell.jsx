import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function PlayShell({ titleAr, titleEn, onBack, score, total, children }) {
  const { lang, isRTL } = useLang();
  const Back = isRTL ? ChevronLeft : ChevronRight;
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-amber-300 hover:bg-amber-50 transition-colors"
        >
          <Back className="w-5 h-5 text-slate-500" />
        </button>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 text-center">
          {lang === 'ar' ? titleAr : titleEn}
        </h2>
        <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center">
          <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
        </div>
      </div>

      {typeof score === 'number' && (
        <div className="flex items-center justify-center gap-2 text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 w-fit mx-auto">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
          {score} / {total}
        </div>
      )}

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        {children}
      </motion.div>
    </div>
  );
}