import React, { useState, useMemo } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const LEVEL_META = [
  { key: 'hard', label: 'سؤال صعب', label_en: 'Hard', color: 'bg-rose-600' },
  { key: 'medium', label: 'سؤال متوسط', label_en: 'Medium', color: 'bg-amber-500' },
  { key: 'easy', label: 'سؤال سهل', label_en: 'Easy', color: 'bg-emerald-500' },
];

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// تحدٍّ تكيفي: يبدأ بسؤال صعب، فإن أخطأ الطالب يقدّم أسهل فأسهل حتى يُجيب.
export default function AdaptiveChallenge({ getLadder, unitIdx, lessonIdx, dir = 'rtl', lang = 'ar' }) {
  const [started, setStarted] = useState(false);
  const [levelIdx, setLevelIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [solved, setSolved] = useState(false);
  const topRef = useScrollTopOnChange(levelIdx);

  const ladder = useMemo(() => getLadder(unitIdx, lessonIdx), [getLadder, unitIdx, lessonIdx]);
  const current = ladder[levelIdx];

  const options = useMemo(() => {
    if (!current) return [];
    const arr = [...current.options_ar];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelIdx, started]);

  if (!started) {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border-2 border-dashed border-slate-300 p-4 text-center" dir={dir}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <p className="text-sm font-bold text-slate-700">{lang === 'en' ? 'Adaptive Challenge' : 'تحدٍّ تكيفي'}</p>
        </div>
        <p className="text-xs text-slate-500 mb-3">{lang === 'en' ? 'Starts with a hard question, then gets easier until you answer.' : 'يبدأ بسؤال صعب، فإن لم تُجب يقدّم لك أسهل فأسهل حتى تُجيب.'}</p>
        <Button onClick={() => { setStarted(true); setLevelIdx(0); }} className="gap-2">{lang === 'en' ? 'Start Challenge' : 'ابدأ التحدي التكيفي'}</Button>
      </motion.div>
    );
  }

  if (solved) {
    const msg = levelIdx === 0 ? (lang === 'en' ? 'Excellent! You got the hard one! 🏆' : 'إتقان عالٍ! أجبت السؤال الصعب من أول مرة 🏆')
      : levelIdx === 1 ? (lang === 'en' ? 'Well done! You got it! 🌟' : 'أحسنت! وصلت للإجابة 🌟')
      : (lang === 'en' ? 'Keep learning, you got it! 💪' : 'واصل التعلّم، لقد وصلت للإجابة 💪');
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-6 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200" dir={dir}>
        <Trophy className="w-9 h-9 mx-auto mb-2 text-amber-500" />
        <p className="text-base font-bold text-emerald-800">{msg}</p>
        <p className="text-xs text-slate-500 mt-1">{lang === 'en' ? 'You completed at level: ' : 'أنهيت التحدي عند المستوى: '}{lang === 'en' ? LEVEL_META[levelIdx].label_en : LEVEL_META[levelIdx].label}</p>
      </motion.div>
    );
  }

  const isCorrect = selected === current.correct_value;
  const onSelect = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === current.correct_value) setSolved(true);
  };
  const goEasier = () => {
    setAnswered(false);
    setSelected(null);
    setLevelIdx((i) => Math.min(i + 1, ladder.length - 1));
  };
  const retry = () => {
    setAnswered(false);
    setSelected(null);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5" dir={dir}>
      <div ref={topRef} />
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-bold text-white px-2.5 py-1 rounded-full ${LEVEL_META[levelIdx].color}`}>{lang === 'en' ? LEVEL_META[levelIdx].label_en : LEVEL_META[levelIdx].label}</span>
          <span className="text-[11px] text-slate-400">{lang === 'en' ? 'Level ' + (levelIdx + 1) + ' / ' + ladder.length : 'المستوى ' + toAr(levelIdx + 1) + ' / ' + toAr(ladder.length)}</span>
        </div>
        <Sparkles className="w-4 h-4 text-amber-500" />
      </div>

      <p className="text-sm font-bold text-slate-800 mb-3">{current.question_ar}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt, i) => {
          const correct = opt === current.correct_value;
          const cls = !answered ? 'border-slate-200 hover:border-slate-400 bg-white'
            : correct ? 'border-emerald-400 bg-emerald-50'
            : selected === opt ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white opacity-70';
          return (
            <button key={i} onClick={() => onSelect(opt)} disabled={answered}
              className={`px-3 py-2.5 rounded-xl border-2 transition-all ${cls} ${opt.length <= 3 ? 'text-3xl py-3' : 'text-sm font-medium'}`}>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-3">
          {isCorrect ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="w-5 h-5" /> {lang === 'en' ? 'Correct!' : 'إجابة صحيحة!'}
            </motion.div>
          ) : (
            <>
              <WrongAnswerTeacher explanation={current.explanation_ar} detail={current.detail_ar} goldenRule={current.golden_rule_ar} advice={current.advice_ar} followup={current.followup} lang={lang} isRTL={dir === 'rtl'} />
              {levelIdx < ladder.length - 1 ? (
                <Button onClick={goEasier} className="w-full mt-3 gap-2">{lang === 'en' ? 'Try an easier question' : 'جرّب سؤالًا أسهل'}</Button>
              ) : (
                <Button onClick={retry} variant="outline" className="w-full mt-3">{lang === 'en' ? 'Try again' : 'أعد المحاولة'}</Button>
              )}
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}