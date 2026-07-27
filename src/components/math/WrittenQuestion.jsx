import React, { useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MATH2_S1_TYPE_LABELS } from '@/lib/mathG2S1TextbookBank';
import MathText from '@/components/shared/MathText';

// عرض الأسئلة الكتابية: mc / tf / fill / compute / word
export default function WrittenQuestion({ question, onAnswer, isAnswered, result }) {
  const q = question;
  const label = MATH2_S1_TYPE_LABELS[q.type] || q.type;
  const isReveal = q.type === 'fill' || q.type === 'compute' || q.type === 'word';

  const handleOption = (idx) => {
    if (isAnswered) return;
    onAnswer(idx);
  };
  const handleReveal = () => {
    if (isAnswered) return;
    onAnswer('reveal');
  };

  return (
    <div className="p-5 space-y-4">
      <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{label}</span>
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed"><MathText text={q.q_ar} /></p>
      {q.q_en && <p className="text-sm text-slate-400">{q.q_en}</p>}
      {q.image && (
        <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
          <img src={q.image} alt="" className="w-full max-h-48 object-contain" />
        </div>
      )}

      {/* اختيار من متعدد */}
      {q.type === 'mc' && (
        <div className="grid gap-2.5">
          {q.options_ar.map((opt, idx) => {
            const isCorrect = String(idx) === q.correct;
            const isPicked = result === idx;
            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOption(idx)}
                className={`w-full text-right py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-between gap-2 ${
                  isAnswered && isCorrect ? 'border-emerald-400 bg-emerald-50' :
                  isAnswered && isPicked && !isCorrect ? 'border-red-400 bg-red-50' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span className="text-base text-slate-700"><MathText text={opt} /></span>
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                {isAnswered && isPicked && !isCorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      )}

      {/* صح / خطأ */}
      {q.type === 'tf' && (
        <div className="grid grid-cols-2 gap-3">
          {q.options_ar.map((opt, idx) => {
            const isCorrect = String(idx) === q.correct;
            const isPicked = result === idx;
            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOption(idx)}
                className={`py-4 rounded-xl border-2 font-heading font-bold text-lg transition-all ${
                  isAnswered && isCorrect ? 'border-emerald-400 bg-emerald-50 text-emerald-700' :
                  isAnswered && isPicked && !isCorrect ? 'border-red-400 bg-red-50 text-red-600' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 text-slate-700'
                }`}
              >
                <MathText text={opt} />
              </button>
            );
          })}
        </div>
      )}

      {/* أكمل / أوجد / مسألة (إظهار الإجابة) */}
      {isReveal && (
        <div>
          {!isAnswered ? (
            <Button onClick={handleReveal} variant="outline" className="gap-2">
              <Eye className="w-4 h-4" /> أظهر الإجابة
            </Button>
          ) : (
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4">
              <p className="text-xs text-emerald-700 font-bold mb-1">الإجابة</p>
              <p className="text-2xl font-heading font-bold text-emerald-800"><MathText text={q.answer_ar} /></p>
              {q.answer_en && <p className="text-sm text-emerald-600 mt-1">{q.answer_en}</p>}
            </div>
          )}
        </div>
      )}

      {/* الشرح بعد الإجابة */}
      {isAnswered && (
        <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 p-3">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 leading-relaxed"><MathText text={q.explanation_ar} /></p>
        </div>
      )}
    </div>
  );
}