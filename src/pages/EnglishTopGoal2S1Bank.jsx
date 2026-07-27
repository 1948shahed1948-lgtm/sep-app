import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Trophy, RotateCcw, Home, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { G5Matching, G5Classify, G5Ordering } from '@/components/lughati/LughatiG5Interactive';
import { TOP_GOAL2_BANK, TOTAL_Q } from '@/lib/topGoal2S1Bank';

const OPT_COLORS = [
  { bg: 'bg-pink-50', border: 'border-pink-400', text: 'text-pink-900', dot: 'bg-pink-500' },
  { bg: 'bg-sky-50', border: 'border-sky-400', text: 'text-sky-900', dot: 'bg-sky-500' },
  { bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-900', dot: 'bg-emerald-500' },
  { bg: 'bg-amber-50', border: 'border-amber-400', text: 'text-amber-900', dot: 'bg-amber-500' },
];

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

function MCQuestion({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <p className="flex-1 text-base font-bold text-slate-800 leading-relaxed">{q.q}</p>
        <button onClick={() => speak(q.q)} className="flex-shrink-0 text-sky-400 hover:text-sky-600">
          <Volume2 className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const c = OPT_COLORS[i % 4];
          const isCorrect = answered && i === q.correct;
          const isWrong = answered && userAnswer === i && i !== q.correct;
          const isDim = answered && !isCorrect && !isWrong;
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center gap-2
                ${isCorrect ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-300' :
                  isWrong ? 'border-red-500 bg-red-50 ring-2 ring-red-300' :
                  isDim ? 'opacity-40 border-slate-100' :
                  `${c.border} ${c.bg} ${c.text} hover:shadow-md`}`}>
              <span className={`w-7 h-7 rounded-full ${c.dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                {['A', 'B', 'C', 'D'][i]}
              </span>
              <span className="flex-1">{opt}</span>
              {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
              {isWrong && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TFQuestion({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2">
        <p className="flex-1 text-base font-bold text-slate-800 leading-relaxed">{q.q}</p>
        <button onClick={() => speak(q.q)} className="flex-shrink-0 text-sky-400 hover:text-sky-600">
          <Volume2 className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-4">
        {[{ label: '✓ True', val: true, yes: true }, { label: '✗ False', val: false, yes: false }].map(({ label, val, yes }) => {
          let cls = yes ? 'border-emerald-400 bg-emerald-50 text-emerald-800 hover:bg-emerald-100' : 'border-red-400 bg-red-50 text-red-800 hover:bg-red-100';
          if (answered) {
            const isC = val === q.correct, isPick = userAnswer === val;
            cls = isC ? 'border-emerald-500 bg-emerald-100 ring-2 ring-emerald-300 text-emerald-900' :
              isPick ? 'border-red-500 bg-red-100 ring-2 ring-red-300 text-red-900' : 'opacity-40 border-slate-200';
          }
          return (
            <button key={String(val)} disabled={answered} onClick={() => onAnswer(val)}
              className={`flex-1 py-4 rounded-2xl text-xl font-bold border-2 transition-all ${cls}`}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TeacherPanel({ q, isCorrect }) {
  return (
    <div className="space-y-3 mt-3">
      <div className={`rounded-xl p-3 text-sm font-bold text-center ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
        {isCorrect ? '✅ Excellent! Correct answer!' : '❌ Not quite — read the explanation carefully!'}
      </div>
      {q.page_ref && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 text-xs font-bold text-blue-700">
          📖 Reference: {q.page_ref}
        </div>
      )}
      <div className="rounded-2xl overflow-hidden border-4 border-amber-800 shadow-lg">
        <div className="bg-amber-900 px-4 py-2 text-amber-200 text-xs font-bold text-center">
          Teacher's Explanation
        </div>
        <div className="bg-emerald-900 p-4">
          <p className="text-white text-sm leading-relaxed font-body">{q.explanation}</p>
        </div>
        <div className="bg-amber-900 h-2" />
      </div>
      {q.golden_rule && (
        <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">👑</span>
            <span className="font-bold text-yellow-800 text-sm">Golden Rule</span>
          </div>
          <p className="text-yellow-900 text-sm font-bold">{q.golden_rule}</p>
        </div>
      )}
    </div>
  );
}

function QuestionRenderer({ q, answered, userAnswer, onAnswer, onInteractiveDone }) {
  if (q.type === 'mc') return <MCQuestion q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'tf') return <TFQuestion q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'matching') return <G5Matching question={{ ...q, pairs: q.pairs?.map(p => ({ left: p.left, right: p.right })) }} onComplete={onInteractiveDone} />;
  if (q.type === 'classify') return <G5Classify question={q} onComplete={onInteractiveDone} />;
  if (q.type === 'ordering') return <G5Ordering question={q} onComplete={onInteractiveDone} />;
  return null;
}

export default function EnglishTopGoal2S1Bank() {
  const [view, setView] = useState('home');
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const startLesson = (lesson, unit) => {
    setActiveLesson(lesson); setActiveUnit(unit);
    setQi(0); setScore(0); setAnswered(false);
    setUserAnswer(null); setShowResult(false); setLastCorrect(false); setDone(false);
    setView('quiz');
  };

  const handleAnswer = (val) => {
    if (answered) return;
    const q = activeLesson.questions[qi];
    const isCorrect = val === q.correct;
    setUserAnswer(val); setAnswered(true); setLastCorrect(isCorrect); setShowResult(true);
    if (isCorrect) setScore(s => s + 1);
  };

  const handleInteractiveDone = (isCorrect) => {
    setLastCorrect(isCorrect);
    if (isCorrect) setScore(s => s + 1);
    setAnswered(true); setShowResult(true);
  };

  const nextQ = () => {
    if (qi + 1 >= activeLesson.questions.length) { setDone(true); return; }
    setQi(i => i + 1); setAnswered(false);
    setUserAnswer(null); setShowResult(false); setLastCorrect(false);
  };

  const q = activeLesson?.questions[qi];
  const isInteractive = q && ['matching', 'classify', 'ordering'].includes(q.type);

  // Result screen
  if (done && view === 'quiz') {
    const total = activeLesson.questions.length;
    const pct = Math.round((score / total) * 100);
    const grade = pct >= 90 ? { l: 'Excellent! 🌟', c: 'text-emerald-600' } : pct >= 70 ? { l: 'Good Job! 👍', c: 'text-blue-600' } : { l: 'Keep Practicing! 💪', c: 'text-orange-600' };
    return (
      <div className="space-y-6 max-w-lg mx-auto">
        <PageHeader title="Top Goal 2 — English" backTo="/question-bank/grade_5/first" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl border p-8 text-center space-y-5">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
          <p className="text-slate-400 text-sm">{activeLesson.title}</p>
          <p className={`text-5xl font-black ${grade.c}`}>{pct}%</p>
          <p className={`font-bold text-lg ${grade.c}`}>{grade.l}</p>
          <p className="text-slate-400 text-sm">{score} / {total} correct answers</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => startLesson(activeLesson, activeUnit)} variant="outline" size="sm"><RotateCcw className="w-3 h-3 mr-1" /> Retry</Button>
            <Button onClick={() => setView('unit')} size="sm"><Home className="w-3 h-3 mr-1" /> Lessons</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz screen
  if (view === 'quiz' && q) {
    const total = activeLesson.questions.length;
    return (
      <div className="space-y-4 max-w-2xl mx-auto">
        <PageHeader title={activeLesson.title} subtitle={activeUnit?.title} backTo="/question-bank/grade_5/first" />
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${(qi / total) * 100}%` }} />
        </div>
        <div className="flex justify-between text-xs text-slate-400 px-1">
          <span>Question {qi + 1} of {total}</span>
          {q.page_ref && <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">{q.page_ref}</span>}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={qi} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl border shadow-lg p-5 space-y-4">
            <QuestionRenderer q={q} answered={answered} userAnswer={userAnswer}
              onAnswer={handleAnswer} onInteractiveDone={handleInteractiveDone} />
            {showResult && <TeacherPanel q={q} isCorrect={lastCorrect} />}
            {(answered || (isInteractive && showResult)) && (
              <Button onClick={nextQ} className="w-full mt-2 gap-2 bg-purple-600 hover:bg-purple-700">
                {qi + 1 < total ? 'Next Question' : 'See Results'}
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Lesson list (unit view)
  if (view === 'unit' && activeUnit) {
    const uQ = activeUnit.lessons.reduce((s, l) => s + l.questions.length, 0);
    return (
      <div className="space-y-5 max-w-3xl mx-auto">
        <PageHeader title={activeUnit.title} subtitle={activeUnit.subtitle} backTo="/question-bank/grade_5/first" />
        <div className={`rounded-2xl bg-gradient-to-r ${activeUnit.bg} p-5 text-white flex items-center gap-4`}>
          <span className="text-4xl">{activeUnit.icon}</span>
          <div>
            <h2 className="font-bold text-lg">{activeUnit.title}</h2>
            <p className="text-white/70 text-sm">{activeUnit.subtitle} · {activeUnit.lessons.length} lessons · {uQ} questions</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {activeUnit.lessons.map((lesson, i) => (
            <button key={lesson.id} onClick={() => startLesson(lesson, activeUnit)}
              className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-purple-300 hover:shadow-md p-4 text-left flex items-center gap-3 transition-all">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeUnit.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">p.{lesson.page} · {lesson.questions.length} questions</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-purple-600 flex-shrink-0" />
            </button>
          ))}
        </div>
        <Button variant="outline" onClick={() => setView('home')} className="gap-2">
          <ChevronLeft className="w-4 h-4" /> Back to all units
        </Button>
      </div>
    );
  }

  // Home screen
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="English — Top Goal 2 (Grade 5)"
        subtitle={`Semester 1 · ${TOTAL_Q} questions from Student Book & Workbook`}
        backTo="/question-bank/grade_5/first"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Question Banks', path: '/question-bank/grades' },
          { label: 'Grade 5', path: '/question-bank/grade_5' },
          { label: 'Semester 1', path: '/question-bank/grade_5/first' },
          { label: 'English' },
        ]}
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: TOP_GOAL2_BANK.units.length, l: 'Units' },
          { n: TOP_GOAL2_BANK.units.reduce((s, u) => s + u.lessons.length, 0), l: 'Lessons' },
          { n: TOTAL_Q, l: 'Questions' },
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-4 text-center border shadow-sm">
            <div className="text-2xl font-bold text-purple-700">{s.n}</div>
            <div className="text-xs text-slate-500">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Unit cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOP_GOAL2_BANK.units.map((unit) => (
          <button key={unit.id}
            onClick={() => { setActiveUnit(unit); setView('unit'); }}
            className={`group relative rounded-2xl bg-gradient-to-br ${unit.bg} p-5 text-left overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
            <div className="absolute inset-3 rounded-xl bg-white/10 border border-white/20" />
            <div className="relative">
              <span className="text-3xl">{unit.icon}</span>
              <h3 className="text-white font-bold text-sm mt-2 leading-snug">{unit.title}</h3>
              {unit.subtitle && <p className="text-white/60 text-xs mt-0.5 italic">{unit.subtitle}</p>}
              <p className="text-white/60 text-xs mt-1">
                {unit.lessons.length} lessons · {unit.lessons.reduce((s, l) => s + l.questions.length, 0)} questions
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}