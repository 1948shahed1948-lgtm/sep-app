import React, { useState, useMemo, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen, ArrowRight as BackIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import MatchingQuestion from '@/components/standardized/MatchingQuestion';
import ClassifyQuestion from '@/components/standardized/ClassifyQuestion';
import OrderingQuestion from '@/components/standardized/OrderingQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';
import {
  SCIENCE_G3_S2_SOUND_LIGHT_UNITS,
  TOTAL_UNITS_SCI_G3S2_SL,
  TOTAL_LESSONS_SCI_G3S2_SL,
  TOTAL_QUESTIONS_SCI_G3S2_SL,
} from '@/lib/scienceGrade3S2_Sound_Light';




const TYPE_BADGE = {
  multiple_choice:  { label: 'اختيار', color: 'bg-teal-100 text-teal-700' },
  true_false:       { label: 'صح / خطأ', color: 'bg-emerald-100 text-emerald-700' },
  matching:         { label: 'وصل', color: 'bg-blue-100 text-blue-700' },
  classify:         { label: 'تصنيف', color: 'bg-violet-100 text-violet-700' },
  ordering:         { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
};

const UNIT_THEME = [
  { bar: 'bg-indigo-500', iconBg: 'bg-indigo-100', iconText: 'text-indigo-700', tile: 'bg-indigo-50', tileText: 'text-indigo-700', tileBorder: 'border-indigo-200', hover: 'hover:border-indigo-400', num: 'text-indigo-600' },
];

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function normalize(exercise) {
  const e = { ...exercise };
  if (exercise.type === 'matching' && exercise.pairs_ar) {
    e.matching_pairs_ar = exercise.pairs_ar;
    e.matching_pairs_en = exercise.pairs_en;
  }
  if (exercise.type === 'ordering' && exercise.items_ar) {
    e.ordering_items_ar = exercise.items_ar;
    e.ordering_items_en = exercise.items_en;
  }
  if (exercise.type === 'classify') {
    e.classify_categories_ar = exercise.categories_ar;
    e.classify_categories_en = exercise.categories_en;
    const cats = exercise.correct_categories || [];
    e.classify_items_ar = (exercise.items_ar || []).map((item, i) => ({ item, correct_category: cats[i] }));
    e.classify_items_en = (exercise.items_en || []).map((item, i) => ({ item, correct_category: cats[i] }));
  }
  return e;
}

function MCRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const handlePick = (i) => { if (isAnswered || checked) return; setPicked(i); };
  const handleCheck = () => { setChecked(true); onAnswer(picked === exercise.correct ? '1' : '0'); };
  return (
    <div className="p-5 space-y-3">
      {exercise.image_url && (
        <div className="rounded-xl overflow-hidden border border-slate-200 mb-3">
          <img src={exercise.image_url} alt="صورة السؤال" className="w-full h-48 sm:h-56 object-cover" />
        </div>
      )}
      <div className="space-y-2.5">
        {exercise.options_ar.map((opt, i) => {
          const isCorrect = i === exercise.correct, isPicked = i === picked;
          let cls = 'w-full text-right px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/40';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return <button key={i} className={cls} onClick={() => handlePick(i)}>{opt}</button>;
        })}
      </div>
      {!isAnswered && !checked && <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">تحقق من الإجابة</Button>}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {picked === exercise.correct
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">إجابة صحيحة!</span></>
            : <span className="text-red-600">إجابة غير صحيحة</span>}
        </div>
      )}
    </div>
  );
}

function TrueFalseRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const opts = [{ label: 'صح ✓', value: 'true' }, { label: 'خطأ ✗', value: 'false' }];
  const handlePick = (v) => { if (isAnswered || checked) return; setPicked(v); };
  const handleCheck = () => { setChecked(true); onAnswer(picked === exercise.correct ? '1' : '0'); };
  return (
    <div className="p-5 space-y-3">
      {exercise.image_url && (
        <div className="rounded-xl overflow-hidden border border-slate-200 mb-3">
          <img src={exercise.image_url} alt="صورة السؤال" className="w-full h-48 object-cover" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-2.5">
        {opts.map((o) => {
          const isCorrect = o.value === exercise.correct, isPicked = o.value === picked;
          let cls = 'px-4 py-3 rounded-xl border-2 transition-all text-sm font-bold ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/40';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return <button key={o.value} className={cls} onClick={() => handlePick(o.value)}>{o.label}</button>;
        })}
      </div>
      {!isAnswered && !checked && <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">تحقق من الإجابة</Button>}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {picked === exercise.correct
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">إجابة صحيحة!</span></>
            : <span className="text-red-600">إجابة غير صحيحة</span>}
        </div>
      )}
    </div>
  );
}

function ExerciseRenderer({ exercise, isAnswered, onAnswer }) {
  const ex = normalize(exercise);
  // For matching/classify/ordering, show image above if present
  const ImageBlock = ex.image_url && (
    <div className="rounded-xl overflow-hidden border border-slate-200 mx-4 mt-4">
      <img src={ex.image_url} alt="صورة السؤال" className="w-full h-48 object-cover" />
    </div>
  );
  if (ex.type === 'matching')  return <><>{ImageBlock}</><MatchingQuestion exercise={ex} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (ex.type === 'classify')  return <><>{ImageBlock}</><ClassifyQuestion exercise={ex} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (ex.type === 'ordering')  return <><>{ImageBlock}</><OrderingQuestion exercise={ex} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (ex.type === 'true_false') return <TrueFalseRenderer exercise={ex} isAnswered={isAnswered} onAnswer={onAnswer} />;
  return <MCRenderer exercise={ex} isAnswered={isAnswered} onAnswer={onAnswer} />;
}

export default function ScienceGrade3S2SoundLight() {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [active, setActive] = useState(null);
  const [exIdx, setExIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const topRef = useScrollTopOnChange(exIdx);

  const exercises = useMemo(() => {
    if (!active) return [];
    return SCIENCE_G3_S2_SOUND_LIGHT_UNITS[active.unitIdx].lessons[active.lessonIdx].questions;
  }, [active]);
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
    const u = SCIENCE_G3_S2_SOUND_LIGHT_UNITS[unitIdx];
    if (lessonIdx < u.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < SCIENCE_G3_S2_SOUND_LIGHT_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActive(null);
  };
  const backToOverview = () => { setActive(null); setDone(false); };

  if (active && !done && exercise) {
    const unit = SCIENCE_G3_S2_SOUND_LIGHT_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const th = UNIT_THEME[active.unitIdx % UNIT_THEME.length];
    const progress = (exIdx / exercises.length) * 100;
    const badge = TYPE_BADGE[exercise.type] || TYPE_BADGE.multiple_choice;

    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`${lesson.title_ar} — ${unit.title_ar}`}
          subtitle={`سؤال ${toAr(exIdx + 1)} من ${toAr(exercises.length)}`}
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: 'علوم الصف الثالث ف٢ — الصوت والضوء', path: '/science-grade3-s2-sound-light' },
            { label: lesson.title_ar },
          ]}
        />
        <div className="max-w-2xl mx-auto space-y-5">
          <div ref={topRef} />
          <button onClick={backToOverview} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            <BackIcon className="w-4 h-4 rotate-180" /> عودة لكل الدروس
          </button>

          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${th.iconBg} flex items-center justify-center flex-shrink-0`}>
              <BookOpen className={`w-6 h-6 ${th.iconText}`} />
            </div>
            <div className="flex-1">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className={`h-full ${th.bar}`} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
                <span>السؤال {toAr(exIdx + 1)} / {toAr(exercises.length)}</span>
                <span>النتيجة: {toAr(score)}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${badge.color}`}>{badge.label}</span>
          </div>

          <div className={`rounded-2xl ${th.tile} border ${th.tileBorder} px-4 py-3 flex items-start gap-2`}>
            <BookOpen className={`w-4 h-4 ${th.iconText} flex-shrink-0 mt-0.5`} />
            <p className={`text-sm font-medium ${th.tileText} leading-relaxed`}>{exercise.question_ar}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.unitIdx}-${active.lessonIdx}-${exIdx}`}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden"
            >
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
                <WrongAnswerTeacher explanation={exercise.explanation_ar} goldenRule={exercise.golden_rule_ar} lang="ar" isRTL />
              )}
              <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold">
                {exIdx < exercises.length - 1 ? 'السؤال التالي' : 'إنهاء الدرس'}
                <Arrow className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (active && done) {
    const unit = SCIENCE_G3_S2_SOUND_LIGHT_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto space-y-5 pt-8" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{toAr(score)} / {toAr(exercises.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل المراجعة 💪' : 'يحتاج مراجعة، أعد المحاولة 📖'}</p>
          <div className="mt-3 text-sm text-white/70">{lesson.title_ar} — {unit.title_ar}</div>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">إعادة الدرس</Button>
          <Button onClick={nextLesson} className="flex-1 gap-2">الدرس التالي<Arrow className="w-4 h-4" /></Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">عودة لكل الدروس</Button>
      </motion.div>
    );
  }

  const renderLessonTile = (l, li, th, onClick) => {
    const theme = th || UNIT_THEME[0];
    return (
      <button onClick={onClick} className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${theme.tileBorder} ${theme.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
        <div className={`w-16 h-16 rounded-2xl ${theme.tile} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <BookOpen className={`w-8 h-8 ${theme.iconText}`} />
        </div>
        <div className="text-center">
          <div className={`text-xs font-bold ${theme.num}`}>الدرس {toAr(li + 1)}</div>
          <h3 className="text-sm font-heading font-bold text-slate-800 mt-0.5 leading-tight">{l.title_ar}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">{toAr(l.questions.length)} سؤال</p>
        </div>
      </button>
    );
  };

  return (
    <InteractiveBankBrowser
      units={SCIENCE_G3_S2_SOUND_LIGHT_UNITS}
      unitTheme={UNIT_THEME}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80"
      title="العلوم — الصف الثالث · الوحدة الخامسة"
      subtitle={`الصوت والضوء والكهرباء — أسئلة مع صور (${toAr(TOTAL_LESSONS_SCI_G3S2_SL)} دروس · ${toAr(TOTAL_QUESTIONS_SCI_G3S2_SL)} سؤالًا)`}
      bankLabel="علوم الصف الثالث — الصوت والضوء"
      homeLabel={t('home')}
      backTo="/question-bank/grade_3/second"
      toAr={toAr}
      stats={[
        { n: toAr(TOTAL_UNITS_SCI_G3S2_SL), l: 'وحدات' },
        { n: toAr(TOTAL_LESSONS_SCI_G3S2_SL), l: 'دروس' },
        { n: toAr(TOTAL_QUESTIONS_SCI_G3S2_SL), l: 'سؤال · 200 صورة' },
      ]}
      renderLessonTile={renderLessonTile}
    />
  );
}