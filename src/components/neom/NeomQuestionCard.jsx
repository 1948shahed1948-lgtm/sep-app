import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/i18n';

export default function NeomQuestionCard({ question, index, total, onAnswer, onNext, isAnswered, selectedAnswer, badgeLabel, gradientClass }) {
  const { lang } = useLang();
  const [showExplanation, setShowExplanation] = useState(false);
  const isRTL = lang === 'ar';
  const options = lang === 'ar' ? question.options_ar : question.options_en;
  const qText = lang === 'ar' ? question.question_ar : question.question_en;
  const explanation = lang === 'ar' ? question.explanation_ar : question.explanation_en;

  const handleSelect = (i) => {
    if (isAnswered) return;
    setShowExplanation(true);
    onAnswer(i);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className={`rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm`}>
        {question.image_url && (
          <div className="relative w-full h-44 sm:h-56 bg-slate-100">
            <img src={question.image_url} alt={isRTL ? 'صورة تعليمية' : 'Educational image'} className="w-full h-full object-cover" />
            <span className="absolute top-2 start-2 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-black/50 text-white text-xs font-medium">
              <ImageIcon className="w-3 h-3" /> {isRTL ? 'انظر إلى الصورة' : 'Look at the image'}
            </span>
          </div>
        )}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white`}>{badgeLabel}</span>
            <span className="text-xs text-slate-400 font-medium">{index + 1} / {total}</span>
          </div>
          <p className="text-base sm:text-lg font-heading font-bold text-slate-900 leading-relaxed">{qText}</p>
          <div className="grid gap-2.5">
            {options.map((opt, i) => {
              const isCorrect = String(i) === String(question.correct_answer);
              const isPicked = String(i) === String(selectedAnswer);
              let stateClass = 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50';
              if (isAnswered) {
                if (isCorrect) stateClass = 'border-emerald-400 bg-emerald-50';
                else if (isPicked) stateClass = 'border-red-400 bg-red-50';
                else stateClass = 'border-slate-200 bg-slate-50 opacity-60';
              }
              return (
                <button key={i} type="button" onClick={() => handleSelect(i)} disabled={isAnswered} className={`flex items-center gap-3 text-start rounded-xl border-2 px-4 py-3 transition-all ${stateClass}`}>
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {isAnswered && isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : isAnswered && isPicked ? <XCircle className="w-5 h-5 text-red-500" /> : (isRTL ? ['أ','ب','ج','د'][i] : ['A','B','C','D'][i])}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isAnswered && showExplanation && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="text-xs font-bold text-amber-700 mb-1">{isRTL ? '💡 الشرح' : '💡 Explanation'}</p>
            <p className="text-sm text-slate-700 leading-relaxed">{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {isAnswered && (
        <Button onClick={onNext} className="w-full py-5 text-base font-bold gap-2">
          {index + 1 < total ? (isRTL ? 'السؤال التالي' : 'Next Question') : (isRTL ? 'عرض النتيجة' : 'Show Results')}
        </Button>
      )}
    </motion.div>
  );
}