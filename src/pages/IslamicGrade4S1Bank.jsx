import React, { useState, useMemo, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen,
  Star, Heart, Droplets, Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import MatchingQuestion from '@/components/standardized/MatchingQuestion';
import ClassifyQuestion from '@/components/standardized/ClassifyQuestion';
import OrderingQuestion from '@/components/standardized/OrderingQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';
import {
  ISLAMIC_G4_UNITS, ISLAMIC_G4_BANNER,
  TOTAL_QUESTIONS_G4, TOTAL_LESSONS_G4
} from '@/lib/islamicGrade4S1/index';

const UNIT_THEME = [
  { bar: 'bg-blue-700', headFrom: 'from-blue-50', iconBg: 'bg-blue-100', iconText: 'text-blue-700', tile: 'bg-blue-50', tileText: 'text-blue-700', tileBorder: 'border-blue-200', hover: 'hover:border-blue-400', chip: 'bg-blue-100 text-blue-700', num: 'text-blue-600' },
  { bar: 'bg-emerald-700', headFrom: 'from-emerald-50', iconBg: 'bg-emerald-100', iconText: 'text-emerald-700', tile: 'bg-emerald-50', tileText: 'text-emerald-700', tileBorder: 'border-emerald-200', hover: 'hover:border-emerald-400', chip: 'bg-emerald-100 text-emerald-700', num: 'text-emerald-600' },
  { bar: 'bg-violet-700', headFrom: 'from-violet-50', iconBg: 'bg-violet-100', iconText: 'text-violet-700', tile: 'bg-violet-50', tileText: 'text-violet-700', tileBorder: 'border-violet-200', hover: 'hover:border-violet-400', chip: 'bg-violet-100 text-violet-700', num: 'text-violet-600' },
  { bar: 'bg-teal-700', headFrom: 'from-teal-50', iconBg: 'bg-teal-100', iconText: 'text-teal-700', tile: 'bg-teal-50', tileText: 'text-teal-700', tileBorder: 'border-teal-200', hover: 'hover:border-teal-400', chip: 'bg-teal-100 text-teal-700', num: 'text-teal-600' },
];

const UNIT_ICONS = [Star, Heart, BookOpen, Droplets];

const TYPE_BADGE = {
  multipleChoice: { label: 'اختيار', color: 'bg-teal-100 text-teal-700' },
  trueFalse:      { label: 'صح / خطأ', color: 'bg-emerald-100 text-emerald-700' },
  matching:       { label: 'وصل', color: 'bg-blue-100 text-blue-700' },
  classify:       { label: 'تصنيف', color: 'bg-violet-100 text-violet-700' },
  ordering:       { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
  fillBlank:      { label: 'ملء فراغ', color: 'bg-rose-100 text-rose-700' },
};

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// ── MC Question ───────────────────────────────────────────────────────────────
function MCRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
  const LETTERS = ['أ', 'ب', 'ج', 'د'];

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
          let cls = 'w-full text-right px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium flex items-center gap-3 ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300 hover:bg-teal-50/40';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return (
            <button key={i} className={cls} onClick={() => !checked && setPicked(i)}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                style={{ background: COLORS[i] }}>
                {LETTERS[i]}
              </span>
              <span className="flex-1">{opt}</span>
              {checked && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
      {!checked && (
        <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">
          تحقق من الإجابة
        </Button>
      )}
    </div>
  );
}

// ── True/False Renderer ───────────────────────────────────────────────────────
function TrueFalseRenderer({ exercise, isAnswered, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const opts = [{ label: 'صح ✓', value: 'true' }, { label: 'خطأ ✗', value: 'false' }];

  const handleCheck = () => {
    setChecked(true);
    onAnswer(picked === exercise.correct ? '1' : '0');
  };

  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {opts.map((o) => {
          const isCorrect = o.value === exercise.correct;
          const isPicked = o.value === picked;
          let cls = 'px-4 py-4 rounded-xl border-2 transition-all font-bold text-base ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-800';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return <button key={o.value} className={cls} onClick={() => !checked && setPicked(o.value)}>{o.label}</button>;
        })}
      </div>
      {!checked && (
        <Button onClick={handleCheck} disabled={picked === null} className="w-full gap-2">
          تحقق من الإجابة
        </Button>
      )}
    </div>
  );
}

// ── Fill Blank Renderer ───────────────────────────────────────────────────────
function FillBlankRenderer({ exercise, onAnswer }) {
  const [filled, setFilled] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = filled === exercise.blanks[0];

  return (
    <div className="p-5 space-y-3">
      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm leading-8 text-center font-medium">
        {exercise.question_ar.replace('_____', '___')}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {exercise.wordBank.map((w, i) => (
          <button key={i} disabled={submitted}
            onClick={() => !submitted && setFilled(w)}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${filled === w ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white hover:border-teal-300'} disabled:opacity-60`}>
            {w}
          </button>
        ))}
      </div>
      {filled && !submitted && (
        <Button onClick={() => { setSubmitted(true); onAnswer(isCorrect ? '1' : '0'); }} className="w-full">
          تحقق من الإجابة
        </Button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? '✓ إجابة صحيحة!' : `✗ الإجابة الصحيحة: ${exercise.blanks[0]}`}
        </div>
      )}
    </div>
  );
}

// ── Exercise Renderer ─────────────────────────────────────────────────────────
function ExerciseRenderer({ exercise, isAnswered, onAnswer }) {
  if (exercise.type === 'matching')
    return <MatchingQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'classify')
    return <ClassifyQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'ordering')
    return <OrderingQuestion exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'trueFalse')
    return <TrueFalseRenderer exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
  if (exercise.type === 'fillBlank')
    return <FillBlankRenderer exercise={exercise} onAnswer={onAnswer} />;
  return <MCRenderer exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} />;
}

// ── Feedback Question ─────────────────────────────────────────────────────────
function FeedbackQuestion({ fq }) {
  const [ans, setAns] = useState(null);
  const COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
  const LETTERS = ['أ', 'ب', 'ج', 'د'];

  if (!fq) return null;
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 mt-3">
      <p className="font-bold text-blue-800 text-sm mb-2">💡 سؤال مشابه للتدريب</p>
      <p className="mb-3 text-slate-700 text-sm font-medium">{fq.question_ar}</p>
      <div className="space-y-2">
        {fq.options_ar.map((opt, i) => {
          const isCorrect = i === fq.correct;
          const isPicked = i === ans;
          let cls = 'w-full text-right px-3 py-2.5 rounded-xl border-2 transition-all text-sm flex items-center gap-2.5 ';
          if (!ans) cls += 'border-slate-200 bg-white hover:border-blue-300';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50';
          else if (isPicked) cls += 'border-red-400 bg-red-50';
          else cls += 'border-slate-100 bg-slate-50 opacity-60';
          return (
            <button key={i} className={cls} disabled={!!ans} onClick={() => setAns(i)}>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-xs"
                style={{ background: COLORS[i] }}>{LETTERS[i]}</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {ans !== null && (
        <p className="mt-2 text-xs text-slate-600 bg-white rounded-xl p-2.5 border">{fq.explanation_ar}</p>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function IslamicGrade4S1Bank() {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [active, setActive] = useState(null); // { unitIdx, lessonIdx }
  const [exIdx, setExIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const topRef = useScrollTopOnChange(exIdx);

  const exercises = useMemo(() => {
    if (!active) return [];
    return ISLAMIC_G4_UNITS[active.unitIdx].lessons[active.lessonIdx].questions;
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
    if (ok) setScore(s => s + 1);
  }, []);

  const next = () => {
    if (exIdx < exercises.length - 1) { setExIdx(i => i + 1); setAnswered(false); setCorrect(false); }
    else setDone(true);
  };

  const nextLesson = () => {
    if (!active) return;
    const { unitIdx, lessonIdx } = active;
    const u = ISLAMIC_G4_UNITS[unitIdx];
    if (lessonIdx < u.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < ISLAMIC_G4_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActive(null);
  };

  const backToOverview = () => { setActive(null); setDone(false); };

  // ── Running Lesson ──────────────────────────────────────────────────────────
  if (active && !done && exercise) {
    const unit = ISLAMIC_G4_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const th = UNIT_THEME[active.unitIdx] || UNIT_THEME[0];
    const progress = (exIdx / exercises.length) * 100;
    const typeBadge = TYPE_BADGE[exercise.type] || { label: 'تمرين', color: 'bg-slate-100 text-slate-700' };

    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`${lesson.title_ar} — ${unit.title_ar}`}
          subtitle={`سؤال ${toAr(exIdx + 1)} من ${toAr(exercises.length)} · ص ${toAr(lesson.page)}`}
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: 'الدراسات الإسلامية — الصف الرابع', path: '/islamic-grade4-s1' },
            { label: lesson.title_ar }
          ]}
        />
        <div className="max-w-2xl mx-auto space-y-5">
          <div ref={topRef} />
          <button onClick={backToOverview} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowRight className="w-4 h-4" /> عودة لكل الدروس
          </button>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className={`h-full ${th.bar}`} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
                <span>السؤال {toAr(exIdx + 1)} / {toAr(exercises.length)}</span>
                <span>النتيجة: {toAr(score)}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeBadge.color}`}>{typeBadge.label}</span>
          </div>

          {/* Textbook reference */}
          <div className={`rounded-xl ${th.tile} border ${th.tileBorder} px-4 py-2.5`}>
            <div className="flex items-start gap-2">
              <BookOpen className={`w-4 h-4 ${th.iconText} flex-shrink-0 mt-0.5`} />
              <div>
                <p className="text-xs text-slate-400 mb-0.5">من الكتاب — ص {toAr(lesson.page)}</p>
                <p className={`text-sm font-medium ${th.tileText} leading-relaxed`}>{exercise.paragraph}</p>
              </div>
            </div>
          </div>

          {/* Golden seal */}
          <div className="relative">
            <div className="absolute left-0 top-0 z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
              style={{ background: 'linear-gradient(135deg,#c9a227,#f4d03f,#c9a227)' }}>
              ⭐⭐
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div key={`${active.unitIdx}-${active.lessonIdx}-${exIdx}`}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-5 pt-5 pb-2">
                <p className="font-body font-bold text-base text-slate-900 leading-relaxed pl-12">
                  {exercise.question_ar}
                </p>
              </div>
              <ExerciseRenderer exercise={exercise} isAnswered={answered} onAnswer={onAnswer} />
            </motion.div>
          </AnimatePresence>

          {/* Feedback */}
          {answered && (
            <>
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">إجابة صحيحة! أحسنت 🌟</span>
                </motion.div>
              ) : (
                <WrongAnswerTeacher
                  explanation={exercise.explanation_ar}
                  goldenRule={exercise.golden_rule_ar}
                  lang="ar" isRTL
                />
              )}

              {/* Golden rule box */}
              {exercise.golden_rule_ar && (
                <div className="rounded-xl p-4 border-2" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fff8dc)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Crown className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
                    <Crown className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-slate-800 text-sm font-medium">{exercise.golden_rule_ar}</p>
                </div>
              )}

              {/* Feedback question */}
              {!correct && exercise.feedbackQuestion && (
                <FeedbackQuestion fq={exercise.feedbackQuestion} />
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

  // ── Done Screen ─────────────────────────────────────────────────────────────
  if (active && done) {
    const unit = ISLAMIC_G4_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto space-y-5 pt-8" dir="rtl">
        <div className="rounded-2xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #1a5276, #2e86c1)' }}>
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{toAr(score)} / {toAr(exercises.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل المراجعة 💪' : 'يحتاج مراجعة 📖'}</p>
          <div className="mt-2 text-sm text-white/70">{lesson.title_ar} — {unit.title_ar}</div>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">
            إعادة الدرس
          </Button>
          <Button onClick={nextLesson} className="flex-1 gap-2">
            الدرس التالي <Arrow className="w-4 h-4" />
          </Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">
          عودة لكل الدروس
        </Button>
      </motion.div>
    );
  }

  // ── Overview (Unit/Lesson Browser) ─────────────────────────────────────────
  const renderLessonTile = (lesson, li, th, onClick) => {
    const theme = th || UNIT_THEME[0];
    return (
      <button onClick={onClick}
        className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${theme.tileBorder} ${theme.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
        <div className={`w-14 h-14 rounded-2xl ${theme.tile} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <BookOpen className={`w-7 h-7 ${theme.iconText}`} />
        </div>
        <div className="text-center">
          <div className={`text-xs font-bold ${theme.num}`}>الدرس {toAr(li + 1)}</div>
          <h3 className="text-sm font-heading font-bold text-slate-800 mt-0.5 leading-tight">{lesson.title_ar}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">ص {toAr(lesson.page)} · {toAr(lesson.questions.length)} سؤال</p>
        </div>
      </button>
    );
  };

  return (
    <InteractiveBankBrowser
      units={ISLAMIC_G4_UNITS}
      unitTheme={UNIT_THEME}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner={ISLAMIC_G4_BANNER}
      title="الدراسات الإسلامية — الصف الرابع الابتدائي"
      subtitle={`بنك أسئلة تفاعلي وفق الكتاب الرسمي (وزارة التعليم 1447هـ/2025م) · ${toAr(ISLAMIC_G4_UNITS.length)} وحدات · ${toAr(TOTAL_LESSONS_G4)} درساً · ${toAr(TOTAL_QUESTIONS_G4)} سؤالاً`}
      bankLabel="الدراسات الإسلامية — الصف الرابع"
      homeLabel={t('home')}
      backTo="/question-bank/grade_4/first"
      toAr={toAr}
      stats={[
        { n: toAr(ISLAMIC_G4_UNITS.length), l: 'وحدات' },
        { n: toAr(TOTAL_LESSONS_G4), l: 'درساً' },
        { n: toAr(TOTAL_QUESTIONS_G4), l: 'سؤال' },
      ]}
      renderLessonTile={renderLessonTile}
    />
  );
}