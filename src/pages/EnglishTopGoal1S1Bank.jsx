import React, { useState, useMemo, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import MatchingQuestion from '@/components/standardized/MatchingQuestion';
import ClassifyQuestion from '@/components/standardized/ClassifyQuestion';
import OrderingQuestion from '@/components/standardized/OrderingQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';
import { TG1_UNITS, TG1_BANNER, TG1_TOTAL_QUESTIONS, TG1_TOTAL_LESSONS } from '@/lib/englishTopGoal1S1/index';

const UNIT_THEME = [
  { bar: 'bg-indigo-600', headFrom: 'from-indigo-50', iconBg: 'bg-indigo-100', iconText: 'text-indigo-700', tile: 'bg-indigo-50', tileText: 'text-indigo-700', tileBorder: 'border-indigo-200', hover: 'hover:border-indigo-400', chip: 'bg-indigo-100 text-indigo-700', num: 'text-indigo-600' },
  { bar: 'bg-sky-600', headFrom: 'from-sky-50', iconBg: 'bg-sky-100', iconText: 'text-sky-700', tile: 'bg-sky-50', tileText: 'text-sky-700', tileBorder: 'border-sky-200', hover: 'hover:border-sky-400', chip: 'bg-sky-100 text-sky-700', num: 'text-sky-600' },
  { bar: 'bg-emerald-600', headFrom: 'from-emerald-50', iconBg: 'bg-emerald-100', iconText: 'text-emerald-700', tile: 'bg-emerald-50', tileText: 'text-emerald-700', tileBorder: 'border-emerald-200', hover: 'hover:border-emerald-400', chip: 'bg-emerald-100 text-emerald-700', num: 'text-emerald-600' },
  { bar: 'bg-amber-600', headFrom: 'from-amber-50', iconBg: 'bg-amber-100', iconText: 'text-amber-700', tile: 'bg-amber-50', tileText: 'text-amber-700', tileBorder: 'border-amber-200', hover: 'hover:border-amber-400', chip: 'bg-amber-100 text-amber-700', num: 'text-amber-600' },
  { bar: 'bg-rose-600', headFrom: 'from-rose-50', iconBg: 'bg-rose-100', iconText: 'text-rose-700', tile: 'bg-rose-50', tileText: 'text-rose-700', tileBorder: 'border-rose-200', hover: 'hover:border-rose-400', chip: 'bg-rose-100 text-rose-700', num: 'text-rose-600' },
];

const TYPE_BADGE = {
  multipleChoice: { label: 'MCQ', color: 'bg-teal-100 text-teal-700' },
  trueFalse: { label: 'T/F', color: 'bg-emerald-100 text-emerald-700' },
  matching: { label: 'Match', color: 'bg-blue-100 text-blue-700' },
  classify: { label: 'Classify', color: 'bg-violet-100 text-violet-700' },
  ordering: { label: 'Order', color: 'bg-amber-100 text-amber-700' },
  fillBlank: { label: 'Fill', color: 'bg-rose-100 text-rose-700' },
};

const OPTION_COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

// ── MC Renderer ────────────────────────────────────────────────────────────────
function MCRenderer({ exercise, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
    onAnswer(picked === exercise.correct ? '1' : '0');
  };

  return (
    <div className="p-5 space-y-3">
      <div className="space-y-2.5">
        {exercise.options_en.map((opt, i) => {
          const isCorrect = i === exercise.correct;
          const isPicked = i === picked;
          let cls = 'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium flex items-center gap-3 ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50';
          else if (isPicked) cls += 'border-red-400 bg-red-50';
          else cls += 'border-slate-100 bg-slate-50 opacity-50';
          return (
            <button key={i} className={cls} onClick={() => !checked && setPicked(i)}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
                style={{ background: OPTION_COLORS[i] }}>
                {OPTION_LETTERS[i]}
              </span>
              <span>{opt}</span>
              {checked && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto flex-shrink-0" />}
            </button>
          );
        })}
      </div>
      {!checked && <Button onClick={handleCheck} disabled={picked === null} className="w-full">Check Answer</Button>}
    </div>
  );
}

// ── TrueFalse Renderer ────────────────────────────────────────────────────────
function TrueFalseRenderer({ exercise, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);
  const opts = [{ label: 'True ✓', value: 'true' }, { label: 'False ✗', value: 'false' }];

  const handleCheck = () => { setChecked(true); onAnswer(picked === exercise.correct ? '1' : '0'); };

  return (
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {opts.map(o => {
          const isCorrect = o.value === exercise.correct;
          const isPicked = o.value === picked;
          let cls = 'py-4 rounded-xl border-2 transition-all font-bold text-base ';
          if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 hover:border-teal-300';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50';
          else if (isPicked) cls += 'border-red-400 bg-red-50';
          else cls += 'border-slate-100 opacity-50';
          return <button key={o.value} className={cls} onClick={() => !checked && setPicked(o.value)}>{o.label}</button>;
        })}
      </div>
      {!checked && <Button onClick={handleCheck} disabled={!picked} className="w-full">Check Answer</Button>}
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
      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm font-medium text-center">
        {exercise.question_en}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {exercise.wordBank.map((w, i) => (
          <button key={i} disabled={submitted}
            onClick={() => !submitted && setFilled(w)}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all ${filled === w ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white hover:border-teal-300'}`}>
            {w}
          </button>
        ))}
      </div>
      {filled && !submitted && <Button onClick={() => { setSubmitted(true); onAnswer(isCorrect ? '1' : '0'); }} className="w-full">Check Answer</Button>}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? '✓ Correct!' : `✗ Correct answer: ${exercise.blanks[0]}`}
        </div>
      )}
    </div>
  );
}

// ── Audio Button ──────────────────────────────────────────────────────────────
function AudioButton({ text }) {
  const [speaking, setSpeaking] = useState(false);
  const speak = () => {
    if (!window.speechSynthesis || speaking) return;
    setSpeaking(true);
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.85;
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  };
  return (
    <button onClick={speak} disabled={speaking}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${speaking ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200'}`}>
      <Volume2 className={`w-3.5 h-3.5 ${speaking ? 'animate-pulse' : ''}`} />
      {speaking ? 'Playing...' : 'Listen 🔊'}
    </button>
  );
}

// ── Feedback Mini Question ────────────────────────────────────────────────────
function FeedbackQ({ fq }) {
  const [ans, setAns] = useState(null);
  if (!fq) return null;
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 mt-3">
      <p className="font-bold text-blue-800 text-sm mb-2">💡 Similar practice question:</p>
      <p className="mb-3 text-slate-700 text-sm font-medium">{fq.question_en}</p>
      <div className="space-y-1.5">
        {fq.options_en.map((opt, i) => {
          const isCorrect = i === fq.correct;
          const isPicked = i === ans;
          let cls = 'w-full text-left px-3 py-2 rounded-lg border-2 text-sm flex items-center gap-2 ';
          if (!ans && ans !== 0) cls += 'border-slate-200 bg-white hover:border-blue-300 cursor-pointer';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50';
          else if (isPicked) cls += 'border-red-400 bg-red-50';
          else cls += 'border-slate-100 bg-slate-50 opacity-60';
          return (
            <button key={i} className={cls} disabled={ans !== null} onClick={() => setAns(i)}>
              <span className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-white text-xs flex-shrink-0"
                style={{ background: OPTION_COLORS[i] }}>{OPTION_LETTERS[i]}</span>
              {opt}
            </button>
          );
        })}
      </div>
      {ans !== null && <p className="mt-2 text-xs text-slate-600 bg-white rounded-xl p-2.5 border">{fq.explanation_en}</p>}
    </div>
  );
}

// ── Exercise Renderer ─────────────────────────────────────────────────────────
function ExerciseRenderer({ exercise, onAnswer }) {
  if (exercise.type === 'matching') return <MatchingQuestion exercise={{ ...exercise, options_ar: exercise.pairs?.map(p => p.right) || [], question_ar: exercise.question_en, pairs: exercise.pairs }} lang="en" isAnswered={false} onAnswer={onAnswer} />;
  if (exercise.type === 'classify') return <ClassifyQuestion exercise={{ ...exercise, categories: exercise.categories, items: exercise.items, question_ar: exercise.question_en }} lang="en" isAnswered={false} onAnswer={onAnswer} />;
  if (exercise.type === 'ordering') return <OrderingQuestion exercise={{ ...exercise, ordering_items_ar: exercise.items, question_ar: exercise.question_en }} lang="en" isAnswered={false} onAnswer={onAnswer} />;
  if (exercise.type === 'trueFalse') return <TrueFalseRenderer exercise={exercise} onAnswer={onAnswer} />;
  if (exercise.type === 'fillBlank') return <FillBlankRenderer exercise={exercise} onAnswer={onAnswer} />;
  return <MCRenderer exercise={exercise} onAnswer={onAnswer} />;
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function EnglishTopGoal1S1Bank() {
  const { t, isRTL } = useLang();
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
    return TG1_UNITS[active.unitIdx].lessons[active.lessonIdx].questions;
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
    const u = TG1_UNITS[unitIdx];
    if (lessonIdx < u.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < TG1_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActive(null);
  };

  const backToOverview = () => { setActive(null); setDone(false); };

  // ── Running ─────────────────────────────────────────────────────────────────
  if (active && !done && exercise) {
    const unit = TG1_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const th = UNIT_THEME[active.unitIdx] || UNIT_THEME[0];
    const progress = (exIdx / exercises.length) * 100;
    const typeBadge = TYPE_BADGE[exercise.type] || { label: 'Q', color: 'bg-slate-100 text-slate-700' };

    return (
      <div className="space-y-5">
        <PageHeader
          title={`${lesson.title_en} — ${unit.title_en}`}
          subtitle={`Question ${exIdx + 1} of ${exercises.length} · Page ${lesson.page}`}
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: 'Top Goal 1 — Grade 4', path: '/english-topgoal1-s1' },
            { label: lesson.title_en }
          ]}
        />
        <div className="max-w-2xl mx-auto space-y-4">
          <div ref={topRef} />
          <button onClick={backToOverview} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800">
            <ArrowLeft className="w-4 h-4" /> Back to lessons
          </button>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className={`h-full ${th.bar}`} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-slate-400">
                <span>Q {exIdx + 1} / {exercises.length}</span>
                <span>Score: {score}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeBadge.color}`}>{typeBadge.label}</span>
          </div>

          {/* Paragraph reference */}
          <div className={`rounded-xl ${th.tile} border ${th.tileBorder} px-4 py-2.5`}>
            <div className="flex items-start gap-2">
              <BookOpen className={`w-4 h-4 ${th.iconText} flex-shrink-0 mt-0.5`} />
              <div className="flex-1">
                <p className="text-xs text-slate-400 mb-0.5">Grammar Reference — Page {lesson.page}</p>
                <p className={`text-sm font-medium ${th.tileText} leading-relaxed`}>{exercise.paragraph}</p>
              </div>
              <AudioButton text={exercise.question_en} />
            </div>
          </div>

          {/* Golden seal */}
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs shadow-lg"
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
                <p className="font-body font-bold text-base text-slate-900 leading-relaxed pr-12">
                  {exercise.question_en}
                </p>
              </div>
              <ExerciseRenderer exercise={exercise} onAnswer={onAnswer} />
            </motion.div>
          </AnimatePresence>

          {/* Feedback */}
          {answered && (
            <>
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">Correct! Well done! 🌟</span>
                </motion.div>
              ) : (
                <WrongAnswerTeacher explanation={exercise.explanation_en} goldenRule={exercise.golden_rule_en} lang="en" isRTL={false} />
              )}

              {exercise.golden_rule_en && (
                <div className="rounded-xl p-4 border-2" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fff8dc)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Crown className="w-4 h-4 text-amber-600" />
                    <span className="font-bold text-amber-800 text-sm">Golden Rule 👑</span>
                  </div>
                  <p className="text-slate-800 text-sm font-medium">{exercise.golden_rule_en}</p>
                </div>
              )}

              {!correct && exercise.feedbackQuestion && <FeedbackQ fq={exercise.feedbackQuestion} />}

              <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold">
                {exIdx < exercises.length - 1 ? 'Next Question →' : 'Finish Lesson ✓'}
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Done ────────────────────────────────────────────────────────────────────
  if (active && done) {
    const unit = TG1_UNITS[active.unitIdx];
    const lesson = unit.lessons[active.lessonIdx];
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto space-y-5 pt-8">
        <div className="rounded-2xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{score} / {exercises.length}</h2>
          <p className="text-white/80">{pct >= 80 ? 'Excellent! 🏆' : pct >= 50 ? 'Good! Keep going 💪' : 'Review needed 📖'}</p>
          <div className="mt-2 text-sm text-white/70">{lesson.title_en} — {unit.title_en}</div>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">Retry Lesson</Button>
          <Button onClick={nextLesson} className="flex-1">Next Lesson →</Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">Back to Overview</Button>
      </motion.div>
    );
  }

  // ── Overview ────────────────────────────────────────────────────────────────
  const renderLessonTile = (lesson, li, th, onClick) => {
    const theme = th || UNIT_THEME[0];
    return (
      <button onClick={onClick}
        className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${theme.tileBorder} ${theme.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
        <div className={`w-14 h-14 rounded-2xl ${theme.tile} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <BookOpen className={`w-7 h-7 ${theme.iconText}`} />
        </div>
        <div className="text-center">
          <div className={`text-xs font-bold ${theme.num}`}>Lesson {li + 1}</div>
          <h3 className="text-sm font-bold text-slate-800 mt-0.5 leading-tight">{lesson.title_en}</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">p.{lesson.page} · {lesson.questions.length} Qs</p>
        </div>
      </button>
    );
  };

  return (
    <InteractiveBankBrowser
      units={TG1_UNITS}
      unitTheme={UNIT_THEME}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner={TG1_BANNER}
      title="Top Goal 1 — Grade 4 English — S1"
      subtitle={`Interactive question bank (Ministry of Education 2025) · ${TG1_UNITS.length} units · ${TG1_TOTAL_LESSONS} lessons · ${TG1_TOTAL_QUESTIONS} questions`}
      bankLabel="Top Goal 1 — Grade 4"
      homeLabel={t('home')}
      backTo="/question-bank/grade_4/first"
      toAr={(n) => String(n)}
      stats={[
        { n: String(TG1_UNITS.length), l: 'Units' },
        { n: String(TG1_TOTAL_LESSONS), l: 'Lessons' },
        { n: String(TG1_TOTAL_QUESTIONS), l: 'Questions' },
      ]}
      renderLessonTile={renderLessonTile}
    />
  );
}