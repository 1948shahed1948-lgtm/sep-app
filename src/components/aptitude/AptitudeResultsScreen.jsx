import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

export default function AptitudeResultsScreen({ results, exercises, lang, t, onRetry, backTo }) {
  const correctCount = results.filter((r) => r.isCorrect).length;
  const total = exercises.length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className={`rounded-2xl p-8 text-center ${percentage >= 70 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'} text-white`}>
        <div className="text-4xl mb-3">{percentage >= 70 ? '🎉' : '💪'}</div>
        <ResultScoreRing percentage={percentage} />
        <h2 className="text-2xl font-heading font-bold mt-4 mb-2">
          {percentage >= 70 ? t('congratulations') : t('keepPracticing')}
        </h2>
        <p className="text-white/80">{correctCount} {t('correct')} · {total - correctCount} {t('wrong')}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-red-500" />
          {t('errorAnalysis')}
        </h3>
        {results.map((result, i) => {
          const ex = exercises[result.index];
          if (!ex) return null;
          const question = lang === 'ar' ? ex.question_ar : ex.question_en;
          const explanation = lang === 'ar' ? ex.explanation_ar : ex.explanation_en;
          const options = lang === 'ar' ? (ex.options_ar || []) : (ex.options_en || []);
          return (
            <div key={i} className={`rounded-xl border p-4 ${result.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start gap-2">
                {result.isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                <div className="space-y-1">
                  <p className="font-medium text-sm text-slate-800">{question}</p>
                  {!result.isCorrect && (
                    <>
                      <p className="text-xs text-red-600">{t('yourAnswer')}: {options[result.answer]}</p>
                      <p className="text-xs text-emerald-600">{t('correctAnswer')}: {options[parseInt(ex.correct_answer)]}</p>
                    </>
                  )}
                  <p className="text-xs text-slate-500">{explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1">{t('tryAgain')}</Button>
        <Link to={backTo} className="flex-1"><Button className="w-full">{lang === 'ar' ? 'العودة' : 'Back'}</Button></Link>
      </div>
    </div>
  );
}