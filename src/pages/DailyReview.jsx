import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Sparkles, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { getNextReviewDate } from '@/lib/spacedRepetition';
import WhatsAppReportButton from '@/components/review/WhatsAppReportButton';

export default function DailyReview() {
  const { lang, isRTL } = useLang();
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pos, setPos] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [session, setSession] = useState({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  const today = new Date().toISOString().slice(0, 10);

  const load = async () => {
    setLoading(true);
    try {
      const user = await base44.auth.me();
      if (!user) { setLoading(false); return; }
      const all = await base44.entities.MistakeEntry.filter({ user_id: user.id });
      const due = all.filter((e) => !e.is_resolved && (!e.next_review_date || e.next_review_date <= today));
      due.sort((a, b) => (a.next_review_date || '').localeCompare(b.next_review_date || ''));
      setQueue(due);
    } catch (e) { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const current = queue[pos];

  const handleAnswer = async (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = String(idx) === String(current.correct_answer);
    setSession((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), wrong: s.wrong + (isCorrect ? 0 : 1) }));
    try {
      if (isCorrect) {
        const newCount = (current.review_count || 0) + 1;
        const mastered = newCount >= 5;
        await base44.entities.MistakeEntry.update(current.id, {
          review_count: newCount,
          is_resolved: mastered,
          next_review_date: getNextReviewDate(newCount)
        });
      } else {
        await base44.entities.MistakeEntry.update(current.id, { review_count: 0, next_review_date: getNextReviewDate(0) });
      }
    } catch (e) { /* ignore */ }
  };

  const next = () => {
    if (pos + 1 >= queue.length) { setFinished(true); return; }
    setPos(pos + 1);
    setSelected(null);
    setAnswered(false);
  };

  const restart = () => { load(); setPos(0); setSelected(null); setAnswered(false); setSession({ correct: 0, wrong: 0 }); setFinished(false); };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-[#263D84] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (queue.length === 0 && !finished) {
    return (
      <div className="space-y-8">
        <PageHeader title={lang === 'ar' ? 'المراجعة اليومية' : 'Daily Review'} subtitle={lang === 'ar' ? 'راجع أخطاءك المستحقة بتقنية التكرار المتباعد' : 'Review your due mistakes with spaced repetition'} backTo="/" />
        <div className="text-center py-20 space-y-3">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
          <p className="text-slate-700 font-bold text-lg">{lang === 'ar' ? 'لا مراجعات مستحقة اليوم!' : 'No reviews due today!'}</p>
          <p className="text-slate-500">{lang === 'ar' ? 'عد لاحقاً أو تدرّب في بنك الأسئلة لجمع أخطاء جديدة.' : 'Come back later or practice to collect new mistakes.'}</p>
          <Button onClick={() => window.location.href = '/question-bank'} variant="outline" className="gap-2 mt-2">
            {lang === 'ar' ? 'تدرّب الآن' : 'Practice now'}
          </Button>
        </div>
      </div>
    );
  }

  if (finished) {
    const total = session.correct + session.wrong;
    const pct = total ? Math.round((session.correct / total) * 100) : 0;
    return (
      <div className="space-y-8">
        <PageHeader title={lang === 'ar' ? 'المراجعة اليومية' : 'Daily Review'} backTo="/mistake-journal" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center bg-white rounded-3xl border border-slate-100 p-8 space-y-4 shadow-sm">
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${pct >= 70 ? 'bg-emerald-100' : 'bg-amber-100'}`}>
            <Trophy className={`w-10 h-10 ${pct >= 70 ? 'text-emerald-500' : 'text-amber-500'}`} />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900">{lang === 'ar' ? 'انتهت الجلسة!' : 'Session complete!'}</h2>
          <div className="flex justify-center gap-6">
            <div><div className="text-3xl font-bold text-emerald-600">{session.correct}</div><div className="text-xs text-slate-500">{lang === 'ar' ? 'صحيحة' : 'Correct'}</div></div>
            <div><div className="text-3xl font-bold text-red-500">{session.wrong}</div><div className="text-xs text-slate-500">{lang === 'ar' ? 'خاطئة' : 'Wrong'}</div></div>
            <div><div className="text-3xl font-bold text-[#263D84]">{pct}%</div><div className="text-xs text-slate-500">{lang === 'ar' ? 'الدقة' : 'Accuracy'}</div></div>
          </div>
          <div className="space-y-2.5">
            <WhatsAppReportButton session={session} />
            <Button onClick={restart} variant="outline" className="w-full gap-2"><RotateCcw className="w-4 h-4" />{lang === 'ar' ? 'جلسة جديدة' : 'New session'}</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const options = lang === 'ar' ? (current.options_ar || []) : (current.options_en || []);
  const isCorrect = answered && String(selected) === String(current.correct_answer);

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'المراجعة اليومية' : 'Daily Review'}
        subtitle={lang === 'ar' ? `سؤال ${pos + 1} من ${queue.length}` : `Question ${pos + 1} of ${queue.length}`}
        backTo="/mistake-journal"
      />

      <div className="max-w-2xl mx-auto space-y-5">
        <div className="flex gap-1">
          {queue.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i < pos ? 'bg-emerald-500' : i === pos ? 'bg-[#263D84]' : 'bg-slate-200'}`} />
          ))}
        </div>

        <motion.div key={pos} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            {current.subject_name && <span className="text-xs font-bold bg-slate-100 text-slate-600 rounded-full px-2 py-0.5">{current.subject_name}</span>}
            {current.grade && <span className="text-xs text-slate-400">{current.grade}</span>}
            {current.confidence >= 3 && <span className="text-xs font-bold text-red-600 flex items-center gap-1"><AlertTriangle className="w-3 h-3" />{lang === 'ar' ? 'واثق لكن مخطئ' : 'Confident but wrong'}</span>}
          </div>
          <p className="text-lg font-medium text-slate-900 leading-relaxed">{lang === 'ar' ? current.question_ar : current.question_en}</p>

          <div className="space-y-2.5">
            {options.map((opt, oi) => {
              const isSel = String(oi) === String(selected);
              const isAns = String(oi) === String(current.correct_answer);
              let cls = 'bg-white border-slate-200 hover:border-slate-300';
              if (answered) {
                if (isAns) cls = 'bg-emerald-50 border-emerald-300';
                else if (isSel) cls = 'bg-red-50 border-red-300';
                else cls = 'bg-white border-slate-100 opacity-60';
              }
              return (
                <button
                  key={oi}
                  disabled={answered}
                  onClick={() => handleAnswer(oi)}
                  className={`w-full text-start p-3.5 rounded-xl border-2 transition-all flex items-center gap-3 ${cls}`}
                >
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">{String.fromCharCode(65 + oi)}</span>
                  <span className="text-sm text-slate-800 flex-1">{opt}</span>
                  {answered && isAns && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {answered && isSel && !isAns && <AlertTriangle className="w-5 h-5 text-red-500" />}
                </button>
              );
            })}
          </div>

          {answered && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-3">
              <div className={`rounded-xl p-4 ${isCorrect ? 'bg-emerald-50' : 'bg-red-50'} flex items-center gap-2`}>
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <AlertTriangle className="w-5 h-5 text-red-500" />}
                <span className={`font-bold text-sm ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                  {isCorrect ? (lang === 'ar' ? 'إجابة صحيحة! تُجدول المراجعة التالية.' : 'Correct! Next review scheduled.') : (lang === 'ar' ? 'إجابة خاطئة. يُعاد جدولة هذا السؤال غداً.' : 'Wrong. This question is rescheduled for tomorrow.')}
                </span>
              </div>
              {(lang === 'ar' ? current.explanation_ar : current.explanation_en) && (
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800">
                  <span className="font-bold">{lang === 'ar' ? 'الشرح: ' : 'Explanation: '}</span>
                  {lang === 'ar' ? current.explanation_ar : current.explanation_en}
                </div>
              )}
              <Button onClick={next} className="w-full gap-2">
                {pos + 1 >= queue.length ? (lang === 'ar' ? 'إنهاء الجلسة' : 'Finish session') : (lang === 'ar' ? 'السؤال التالي' : 'Next question')}
                <Sparkles className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}