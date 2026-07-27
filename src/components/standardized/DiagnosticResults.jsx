import React from 'react';
import { Link } from 'react-router-dom';
import { Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

export default function DiagnosticResults({ results, exercises, lang, onRetry, backTo }) {
  const total = exercises.length;
  const correctCount = results.filter((r) => r.isCorrect).length;
  const percentage = total ? Math.round((correctCount / total) * 100) : 0;

  const byTopic = {};
  results.forEach((r) => {
    const ex = exercises[r.index];
    if (!ex) return;
    const key = lang === 'ar' ? (ex.topic_ar || '-') : (ex.topic_en || '-');
    if (!byTopic[key]) byTopic[key] = { correct: 0, total: 0 };
    byTopic[key].total += 1;
    if (r.isCorrect) byTopic[key].correct += 1;
  });

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-rose-500 to-orange-500 text-white">
        <ResultScoreRing percentage={percentage} />
        <h2 className="text-2xl font-heading font-bold mt-4 mb-2">
          {lang === 'ar' ? 'نتيجة التقرير التشخيصي' : 'Diagnostic Report Result'}
        </h2>
        <p className="text-white/80">{correctCount} / {total} {lang === 'ar' ? 'صحيحة' : 'correct'}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-rose-500" />
          {lang === 'ar' ? 'تحليل المهارات' : 'Skill Breakdown'}
        </h3>
        {Object.entries(byTopic).map(([topic, stat]) => {
          const pct = Math.round((stat.correct / stat.total) * 100);
          return (
            <div key={topic} className="rounded-xl border border-slate-100 p-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{topic}</span>
                <span className={`font-bold ${pct >= 70 ? 'text-emerald-600' : pct >= 40 ? 'text-amber-600' : 'text-red-600'}`}>{pct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
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