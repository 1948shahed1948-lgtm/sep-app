import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

const levelLabels = {
  easy: { ar: 'مبتدئ', en: 'Beginner' },
  medium: { ar: 'متوسط', en: 'Intermediate' },
  hard: { ar: 'متقدم', en: 'Advanced' },
};

export default function AdaptiveResults({ results, exercises, finalDifficulty, lang, onRetry, backTo }) {
  const total = exercises.length;
  const correctCount = results.filter((r) => r.isCorrect).length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;
  const level = levelLabels[finalDifficulty] || levelLabels.medium;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <ResultScoreRing percentage={percentage} />
        <div className="flex items-center justify-center gap-2 mt-4 mb-2">
          <TrendingUp className="w-6 h-6" />
          <h2 className="text-2xl font-heading font-bold">
            {lang === 'ar' ? 'المستوى الذي تم الوصول إليه' : 'Level Reached'}: {lang === 'ar' ? level.ar : level.en}
          </h2>
        </div>
        <p className="text-white/80">{correctCount} / {total} {lang === 'ar' ? 'صحيحة' : 'correct'}</p>
      </div>

      <div className="space-y-3">
        {exercises.map((ex, i) => {
          const r = results.find((res) => res.index === i);
          if (!r) return null;
          const question = lang === 'ar' ? ex.question_ar : ex.question_en;
          return (
            <div key={i} className={`rounded-xl border p-4 flex items-center justify-between gap-2 ${r.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
              <p className="text-sm text-slate-700">{question}</p>
              <span className="text-xs font-bold text-slate-400 flex-shrink-0">
                {levelLabels[ex.difficulty] ? (lang === 'ar' ? levelLabels[ex.difficulty].ar : levelLabels[ex.difficulty].en) : ''}
              </span>
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