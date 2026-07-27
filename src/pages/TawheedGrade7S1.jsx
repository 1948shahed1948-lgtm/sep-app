import React, { useState, useMemo, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen, ArrowRight as BackIcon } from 'lucide-react';
import { KeyRound, Heart, Feather, BookOpen as BookIcon, Users, Sunrise, Scale, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import MatchingQuestion from '@/components/standardized/MatchingQuestion';
import ClassifyQuestion from '@/components/standardized/ClassifyQuestion';
import OrderingQuestion from '@/components/standardized/OrderingQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';

const LESSON_ICONS = { KeyRound, Heart, Feather, BookOpen: BookIcon, Users, Sunrise, Scale, Sparkles };
import { TAWHEED_G7_S1_UNITS, TAWHEED_BANNER, TOTAL_LESSONS_TAWHEED_G7, TOTAL_QUESTIONS_TAWHEED_G7 } from '@/lib/tawheedGrade7S1';
import { withQuestionImages } from '@/lib/bankImagePools';

const TYPE_BADGE = {
  multiple_choice: { label: 'اختيار', color: 'bg-teal-100 text-teal-700' },
  true_false: { label: 'صح / خطأ', color: 'bg-emerald-100 text-emerald-700' },
  matching: { label: 'وصل', color: 'bg-blue-100 text-blue-700' },
  classify: { label: 'تصنيف', color: 'bg-violet-100 text-violet-700' },
  ordering: { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
};

const UNIT_THEME = [
  { bar: 'bg-teal-500', headFrom: 'from-teal-50', iconBg: 'bg-teal-100', iconText: 'text-teal-700', tile: 'bg-teal-50', tileText: 'text-teal-700', tileBorder: 'border-teal-200', hover: 'hover:border-teal-400', chip: 'bg-teal-100 text-teal-700', num: 'text-teal-600' },
  { bar: 'bg-amber-500', headFrom: 'from-amber-50', iconBg: 'bg-amber-100', iconText: 'text-amber-700', tile: 'bg-amber-50', tileText: 'text-amber-700', tileBorder: 'border-amber-200', hover: 'hover:border-amber-400', chip: 'bg-amber-100 text-amber-700', num: 'text-amber-600' },
];

const toArabicNumber = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function LessonIcon({ name, className }) {
  const Icon = LESSON_ICONS[name] || BookIcon;
  return <Icon className={className} />;
}

function MCRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  const handlePick = (i) => {
    if (isAnswered || checked) return;
    setPicked(i);
  };
  const handleCheck = () => {
    setChecked(true);
    onAnswer(picked === exercise.correct ? '1' : '0');
  };

  return (
    <div className="p-5 space-y-3">
      <div className="space-y-2.5">
        {exercise.options_ar.map((opt, i) => {
          const isCorrect = i === exercise.correct;
          const isPicked = i === picked;
          let cls = 'w-full text-right px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/40';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return (
            <button key={i} className={cls} onClick={() => handlePick(i)}>
              {opt}
            </button>
          );
        })}
      </div>
      {!isAnswered && !checked && (
        <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">تحقق من الإجابة</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {picked === exercise.correct
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">إجابة صحيحة!</span></>
            : <><span className="text-red-600">إجابة غير صحيحة</span></>}
        </div>
      )}
    </div>
  );
}

function TrueFalseRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const opts = [{ label: 'صحيح', value: 'true' }, { label: 'خطأ', value: 'false' }];

  const handlePick = (v) => { if (isAnswered || checked) return; setPicked(v); };
  const handleCheck = () => { setChecked(true); onAnswer(picked === exercise.correct ? '1' : '0'); };

  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-2 gap-2.5">
        {opts.map((o) => {
          const isCorrect = o.value === exercise.correct;
          const isPicked = o.value === picked;
          let cls = 'px-4 py-3 rounded-xl border-2 transition-all text-sm font-bold ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/40';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return (
            <button key={o.value} className={cls} onClick={() => handlePick(o.value)}>{o.label}</button>
          );
        })}
      </div>
      {!isAnswered && !checked && (
        <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">تحقق من الإجابة</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {picked === exercise.correct
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">إجابة صحيحة!</span></>
            : <><span className="text-red-600">إجابة غير صحيحة</span></>}
        </div>
      )}
    </div>
  );
}

function ExerciseRenderer({ exercise, isAnswered, onAnswer }) {
  const ImageBlock = exercise.image_url ? (
    <div className="rounded-xl overflow-hidden border border-slate-200 mx-4 mt-4">
      <img src={exercise.image_url} alt="صورة السؤال" className="w-full h-40 object-cover" />
    </div>
  ) : null;
  if (exercise.type === 'matching') return <>{ImageBlock}<MatchingQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'classify') return <>{ImageBlock}<ClassifyQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'ordering') return <>{ImageBlock}<OrderingQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'true_false') return <>{ImageBlock}<TrueFalseRenderer exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  return <>{ImageBlock}<MCRenderer exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
}

export default function TawheedGrade7S1() {
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
    const u = TAWHEED_G7_S1_UNITS[active.unitIdx];
    return withQuestionImages(u.lessons[active.lessonIdx].questions, 'tawheed');
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
    const u = TAWHEED_G7_S1_UNITS[unitIdx];
    if (lessonIdx < u.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < TAWHEED_G7_S1_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActive(null);
  };
  const backToOverview = () => { setActive(null); setDone(false); };

  // ====== شاشة السؤال ======
  if (active && !done && exercise) {
    const unit = TAWHEED_G7_S1_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const th = UNIT_THEME[active.unitIdx] || UNIT_THEME[0];
    const progress = (exIdx / exercises.length) * 100;
    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`درس ${lesson.title_ar} — وحدة ${unit.title_ar}`}
          subtitle={`تمرين ${toArabicNumber(exIdx + 1)} من ${toArabicNumber(exercises.length)}`}
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'كتاب التوحيد — المتوسط ف١', path: '/tawheed-grade7-s1' }, { label: lesson.title_ar }]}
        />
        <div className="max-w-2xl mx-auto space-y-5">
          <div ref={topRef} />
          <button onClick={backToOverview} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            <BackIcon className="w-4 h-4 rotate-180" /> عودة لكل الدروس
          </button>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${th.iconBg} flex items-center justify-center flex-shrink-0`}>
              <LessonIcon name={lesson.icon} className={`w-6 h-6 ${th.iconText}`} />
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
                <WrongAnswerTeacher explanation={exercise.explanation_ar} goldenRule={exercise.golden_rule_ar} lang="ar" isRTL />
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

  // ====== شاشة النتيجة ======
  if (active && done) {
    const unit = TAWHEED_G7_S1_UNITS[active.unitIdx];
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
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">إعادة الدرس</Button>
          <Button onClick={nextLesson} className="flex-1 gap-2">الدرس التالي<Arrow className="w-4 h-4" /></Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">عودة لكل الدروس</Button>
      </motion.div>
    );
  }

  // ====== شاشة تصفّح الوحدات والدروس ======
  const renderLessonTile = (l, li, th, onClick) => {
    const theme = th || UNIT_THEME[0];
    return (
      <button onClick={onClick} className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${theme.tileBorder} ${theme.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
        <div className={`w-16 h-16 rounded-2xl ${theme.tile} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <LessonIcon name={l.icon} className={`w-8 h-8 ${theme.iconText}`} />
        </div>
        <div className="text-center">
          <div className={`text-xs font-bold ${theme.num}`}>الدرس {toArabicNumber(li + 1)}</div>
          <h3 className="text-sm font-heading font-bold text-slate-800 mt-0.5 leading-tight">{l.title_ar}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">{toArabicNumber(l.questions.length)} سؤال</p>
        </div>
      </button>
    );
  };

  return (
    <InteractiveBankBrowser
      units={TAWHEED_G7_S1_UNITS}
      unitTheme={UNIT_THEME}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner={TAWHEED_BANNER}
      title="كتاب التوحيد — الصف الأول المتوسط"
      subtitle={`بنك أسئلة تفاعلي وفق الكتاب الرسمي · الفصل الأول (${toArabicNumber(TAWHEED_G7_S1_UNITS.length)} وحدات · ${toArabicNumber(TOTAL_LESSONS_TAWHEED_G7)} دروس · ${toArabicNumber(TOTAL_QUESTIONS_TAWHEED_G7)} سؤالًا)`}
      bankLabel="كتاب التوحيد — المتوسط ف١"
      homeLabel={t('home')}
      backTo="/"
      toAr={toArabicNumber}
      stats={[
        { n: toArabicNumber(TAWHEED_G7_S1_UNITS.length), l: 'وحدات' },
        { n: toArabicNumber(TOTAL_LESSONS_TAWHEED_G7), l: 'درسًا' },
        { n: toArabicNumber(TOTAL_QUESTIONS_TAWHEED_G7), l: 'سؤال' },
      ]}
      renderLessonTile={renderLessonTile}
    />
  );
}