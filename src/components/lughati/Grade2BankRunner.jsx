import React, { useState, useMemo, useCallback } from 'react';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen, ArrowRight as BackIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import LughatiMatching from '@/components/lughati/LughatiMatching';
import LughatiClassify from '@/components/lughati/LughatiClassify';
import LughatiOrdering from '@/components/lughati/LughatiOrdering';
import InteractiveMCQuestion from '@/components/lughati/InteractiveMCQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import AdaptiveChallenge from '@/components/lughati/AdaptiveChallenge';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';

const TYPE_BADGE = {
  matching: { label: 'وصل', color: 'bg-blue-100 text-blue-700' },
  classify: { label: 'تصنيف', color: 'bg-violet-100 text-violet-700' },
  ordering: { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
  yesno: { label: 'نعم / لا', color: 'bg-emerald-100 text-emerald-700' },
  identify: { label: 'ما هذا؟', color: 'bg-rose-100 text-rose-700' },
  count: { label: 'كم عدد؟', color: 'bg-cyan-100 text-cyan-700' },
  info: { label: 'معلومة', color: 'bg-sky-100 text-sky-700' },
};
const toArabicNumber = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function ExerciseRenderer({ exercise, isAnswered, onAnswer }) {
  if (exercise.type === 'matching') return <LughatiMatching exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'classify') return <LughatiClassify exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'ordering') return <LughatiOrdering exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (['yesno', 'identify', 'count', 'info'].includes(exercise.type)) return <InteractiveMCQuestion exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
  return null;
}

// مشغّل بنك تفاعلي موحّد لكل مواد الصف الثاني (علوم / مهارات / لغتي)
export default function Grade2BankRunner({ units, wordEmoji, banner, title, subtitle, bankLabel, bankPath, unitTheme, getExercises, getAdaptiveLadder, totalLessons, totalQuestions }) {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [active, setActive] = useState(null);
  const [exIdx, setExIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const exercises = useMemo(() => (active ? getExercises(active.unitIdx, active.lessonIdx) : []), [active]);
  const exercise = exercises[exIdx];

  const openLesson = (unitIdx, lessonIdx) => {
    setActive({ unitIdx, lessonIdx });
    setExIdx(0); setAnswered(false); setCorrect(false); setScore(0); setDone(false);
  };
  const onAnswer = useCallback((val) => {
    setAnswered(true);
    const ok = val === '1';
    setCorrect(ok);
    if (ok) setScore((s) => s + 1);
  }, []);
  const next = () => {
    if (exIdx < exercises.length - 1) { setExIdx((i) => i + 1); setAnswered(false); setCorrect(false); }
    else setDone(true);
  };
  const nextLesson = () => {
    if (!active) return;
    const { unitIdx, lessonIdx } = active;
    const u = units[unitIdx];
    if (lessonIdx < u.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < units.length - 1) openLesson(unitIdx + 1, 0);
    else setActive(null);
  };
  const backToOverview = () => { setActive(null); setDone(false); };

  if (active && !done && exercise) {
    const unit = units[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const th = unitTheme[active.unitIdx];
    const progress = (exIdx / exercises.length) * 100;
    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`درس ${lesson.title_ar} — وحدة ${unit.title_ar}`}
          subtitle={`تمرين ${toArabicNumber(exIdx + 1)} من ${toArabicNumber(exercises.length)}`}
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: bankLabel, path: bankPath }, { label: lesson.title_ar }]}
        />
        <div className="max-w-2xl mx-auto space-y-5">
          <button onClick={backToOverview} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            <BackIcon className="w-4 h-4 rotate-180" /> عودة لكل الدروس
          </button>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${th.tile} flex items-center justify-center flex-shrink-0`}>
              <span className="text-2xl leading-none">{wordEmoji[lesson.words[0]]}</span>
            </div>
            <div className="flex-1">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className={`h-full ${th.bar}`} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
                <span>السؤال {toArabicNumber(exIdx + 1)} / {toArabicNumber(exercises.length)}</span>
                <span>النتيجة: {toArabicNumber(score)}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${TYPE_BADGE[exercise.type].color}`}>{TYPE_BADGE[exercise.type].label}</span>
          </div>
          <div className={`rounded-2xl ${th.tile} border ${th.tileBorder} px-4 py-2.5 flex items-center gap-2`}>
            <BookOpen className={`w-4 h-4 ${th.iconText} flex-shrink-0`} />
            <p className={`text-sm font-medium ${th.tileText}`}>{exercise.question_ar}</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={`${active.unitIdx}-${active.lessonIdx}-${exIdx}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
              <ExerciseRenderer exercise={exercise} isAnswered={answered} onAnswer={onAnswer} />
            </motion.div>
          </AnimatePresence>
          {answered && (
            <>
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">إجابة صحيحة! أحسنت 🌟</span>
                </motion.div>
              ) : (
                <WrongAnswerTeacher
                  explanation={exercise.explanation_ar}
                  detail={exercise.detail_ar}
                  goldenRule={exercise.golden_rule_ar}
                  advice={exercise.advice_ar}
                  followup={exercise.followup}
                  lang="ar"
                  isRTL
                />
              )}
              <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold">
                {exIdx < exercises.length - 1 ? 'التمرين التالي' : 'إنهاء الدرس'}
                <Arrow className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (active && done) {
    const unit = units[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto space-y-5 pt-8" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#263D84] to-[#3E57A4] text-white">
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{toArabicNumber(score)} / {toArabicNumber(exercises.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل المراجعة 💪' : 'يحتاج مراجعة، أعد المحاولة 📖'}</p>
          <div className="mt-3 text-sm text-white/70">درس {lesson.title_ar} — وحدة {unit.title_ar}</div>
        </div>
        <AdaptiveChallenge getLadder={getAdaptiveLadder} unitIdx={active.unitIdx} lessonIdx={active.lessonIdx} />
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">إعادة الدرس</Button>
          <Button onClick={nextLesson} className="flex-1 gap-2">الدرس التالي<Arrow className="w-4 h-4" /></Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">عودة لكل الدروس</Button>
      </motion.div>
    );
  }

  const renderLessonTile = (l, li, th, onClick) => (
    <button onClick={onClick} className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${th.tileBorder} ${th.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
      <div className={`w-16 h-16 rounded-2xl ${th.tile} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <span className="text-4xl leading-none">{wordEmoji[l.words[0]]}</span>
      </div>
      <div className="text-center">
        <div className={`text-xs font-bold ${th.num}`}>الدرس {toArabicNumber(li + 1)}</div>
        <h3 className="text-sm font-heading font-bold text-slate-800 mt-0.5 leading-tight">{l.title_ar}</h3>
        <div className="flex items-center gap-1 justify-center flex-wrap mt-1">
          {l.words.slice(0, 4).map((w, wi) => <span key={wi} className="text-xl leading-none" title={w}>{wordEmoji[w]}</span>)}
        </div>
      </div>
    </button>
  );

  return (
    <InteractiveBankBrowser
      units={units}
      unitTheme={unitTheme}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner={banner}
      title={title}
      subtitle={subtitle}
      bankLabel={bankLabel}
      homeLabel={t('home')}
      toAr={toArabicNumber}
      stats={[
        { n: toArabicNumber(units.length), l: 'وحدات' },
        { n: toArabicNumber(totalLessons), l: 'درسًا' },
        { n: toArabicNumber(totalQuestions), l: 'سؤال' },
      ]}
      renderLessonTile={renderLessonTile}
    />
  );
}