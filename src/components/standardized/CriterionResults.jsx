import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

const PASS_THRESHOLD = 75;

export default function CriterionResults({ results, exercises, lang, onRetry, backTo }) {
  const total = exercises.length;
  const correctCount = results.filter((r) => r.isCorrect).length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;
  const passed = percentage >= PASS_THRESHOLD;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className={`rounded-2xl p-8 text-center text-white ${passed ? 'bg-gradient-to-br from-blue-500 to-indigo-600' : 'bg-gradient-to-br from-slate-500 to-slate-700'}`}>
        <ResultScoreRing percentage={percentage} />
        <div className="flex items-center justify-center gap-2 mt-4 mb-2">
          {passed ? <CheckCircle2 className="w-7 h-7" /> : <XCircle className="w-7 h-7" />}
          <h2 className="text-2xl font-heading font-bold">
            {passed
              ? (lang === 'ar' ? 'اجتاز المعيار' : 'Standard Passed')
              : (lang === 'ar' ? 'لم يجتز المعيار' : 'Standard Not Passed')}
          </h2>
        </div>
        <p className="text-white/80">
          {correctCount} / {total} · {lang === 'ar' ? `معيار الاجتياز ${PASS_THRESHOLD}%` : `Passing standard ${PASS_THRESHOLD}%`}
        </p>
      </div>

      <div className="space-y-3">
        {exercises.map((ex, i) => {
          const r = results.find((res) => res.index === i);
          if (!r) return null;
          const question = lang === 'ar' ? ex.question_ar : ex.question_en;
          return (
            <div key={i} className={`rounded-xl border p-4 flex items-start gap-2 ${r.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
              {r.isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
              <p className="text-sm text-slate-700">{question}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1">{lang === 'ar' ? 'إعادة المحاولة' : 'Try Again'}</Button>
        <Link to={backTo} className="flex-1"><Button className="w-full">{lang === 'ar' ? 'العودة' : 'Back'}</Button></Link>
      </div>
    </div>
  );
}