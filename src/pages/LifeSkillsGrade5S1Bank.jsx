import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Trophy, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { G5Matching, G5Classify, G5Ordering } from '@/components/lughati/LughatiG5Interactive';
import { LIFE_SKILLS_G5_S1, LIFE_SKILLS_TOTAL } from '@/lib/lifeSkillsGrade5S1';
import AnimatedTeacher from '@/components/lifeskills/AnimatedTeacher';

const toAr = (n) => String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

const OPT_COLORS = [
  { bg: 'bg-pink-50', border: 'border-pink-400', text: 'text-pink-900', dot: 'bg-pink-500' },
  { bg: 'bg-sky-50', border: 'border-sky-400', text: 'text-sky-900', dot: 'bg-sky-500' },
  { bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-900', dot: 'bg-emerald-500' },
  { bg: 'bg-amber-50', border: 'border-amber-400', text: 'text-amber-900', dot: 'bg-amber-500' },
];

function MCQ({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const c = OPT_COLORS[i % 4];
          const isC = answered && i === q.correct, isW = answered && userAnswer === i && i !== q.correct, isDim = answered && !isC && !isW;
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)}
              className={`text-right px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center gap-2
                ${isC ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-300' :
                  isW ? 'border-red-500 bg-red-50 ring-2 ring-red-300' :
                  isDim ? 'opacity-40 border-slate-100' :
                  `${c.border} ${c.bg} ${c.text} hover:shadow-md`}`}>
              <span className={`w-6 h-6 rounded-full ${c.dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                {['أ', 'ب', 'ج', 'د'][i]}
              </span>
              <span className="flex-1">{opt}</span>
              {isC && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
              {isW && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TFQ({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="flex gap-4">
        {[{ l: '✓  صواب', v: true, yes: true }, { l: '✗  خطأ', v: false, yes: false }].map(({ l, v, yes }) => {
          let cls = yes ? 'border-emerald-400 bg-emerald-50 text-emerald-800 hover:bg-emerald-100' : 'border-red-400 bg-red-50 text-red-800 hover:bg-red-100';
          if (answered) {
            const isC = v === q.correct, isPick = userAnswer === v;
            cls = isC ? 'border-emerald-500 bg-emerald-100 ring-2 ring-emerald-300 text-emerald-900' :
              isPick ? 'border-red-500 bg-red-100 ring-2 ring-red-300 text-red-900' : 'opacity-40 border-slate-200 bg-slate-50';
          }
          return <button key={String(v)} disabled={answered} onClick={() => onAnswer(v)} className={`flex-1 py-4 rounded-2xl text-xl font-bold border-2 transition-all ${cls}`}>{l}</button>;
        })}
      </div>
    </div>
  );
}

function TeacherPanel({ q, isCorrect, show }) {
  return (
    <AnimatedTeacher
      explanation={q.explanation}
      goldenRule={q.goldenRule}
      page={q.page}
      isCorrect={isCorrect}
      show={show}
    />
  );
}

function QuestionRenderer({ q, answered, userAnswer, onAnswer, onInteractiveDone }) {
  if (q.type === 'mc') return <MCQ q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'tf') return <TFQ q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'matching') return <G5Matching question={q} onComplete={onInteractiveDone} />;
  if (q.type === 'classify') return <G5Classify question={q} onComplete={onInteractiveDone} />;
  if (q.type === 'ordering') return <G5Ordering question={q} onComplete={onInteractiveDone} />;
  return null;
}

export default function LifeSkillsGrade5S1Bank() {
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
    const isC = val === q.correct;
    setUserAnswer(val); setAnswered(true); setLastCorrect(isC); setShowResult(true);
    if (isC) setScore(s => s + 1);
  };

  const handleInteractiveDone = (isC) => {
    setLastCorrect(isC); if (isC) setScore(s => s + 1);
    setAnswered(true); setShowResult(true);
  };

  const nextQ = () => {
    if (qi + 1 >= activeLesson.questions.length) { setDone(true); return; }
    setQi(i => i + 1); setAnswered(false);
    setUserAnswer(null); setShowResult(false); setLastCorrect(false);
  };

  const q = activeLesson?.questions[qi];
  const isInteractive = q && ['matching', 'classify', 'ordering'].includes(q.type);

  // Result
  if (done && view === 'quiz') {
    const total = activeLesson.questions.length;
    const pct = Math.round((score / total) * 100);
    const grade = pct >= 90 ? { l: 'ممتاز 🌟', c: 'text-emerald-600' } : pct >= 70 ? { l: 'جيد جداً 👍', c: 'text-blue-600' } : { l: 'يحتاج مراجعة 💪', c: 'text-orange-600' };
    return (
      <div className="space-y-6 max-w-lg mx-auto">
        <PageHeader title="المهارات الحياتية والأسرية ف١" backTo="/question-bank/grade_5/first" />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl border p-8 text-center space-y-5">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
          <p className="text-slate-400 text-sm">{activeLesson.title}</p>
          <p className={`text-5xl font-black ${grade.c}`}>{pct}%</p>
          <p className={`font-bold text-lg ${grade.c}`}>{grade.l}</p>
          <p className="text-slate-400 text-sm">{score} / {total} إجابات صحيحة</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => startLesson(activeLesson, activeUnit)} variant="outline" size="sm"><RotateCcw className="w-3 h-3 ml-1" /> إعادة</Button>
            <Button onClick={() => setView('unit')} size="sm"><Home className="w-3 h-3 ml-1" /> الدروس</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz
  if (view === 'quiz' && q) {
    const total = activeLesson.questions.length;
    return (
      <div className="space-y-4 max-w-2xl mx-auto">
        <PageHeader title={activeLesson.title.slice(0, 40)} subtitle={activeUnit?.title} backTo="/question-bank/grade_5/first" />
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-teal-500 transition-all duration-500" style={{ width: `${(qi / total) * 100}%` }} />
        </div>
        <div className="flex justify-between text-xs text-slate-400 px-1">
          <span>السؤال {toAr(qi + 1)} / {toAr(total)}</span>
          {q.page && <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-bold">ص {q.page}</span>}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={qi} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl border shadow-lg p-5 space-y-4">
            <QuestionRenderer q={q} answered={answered} userAnswer={userAnswer} onAnswer={handleAnswer} onInteractiveDone={handleInteractiveDone} />
            {showResult && <TeacherPanel q={q} isCorrect={lastCorrect} show={showResult} />}
            {(answered || (isInteractive && showResult)) && (
              <Button onClick={nextQ} className="w-full mt-2 gap-2 bg-teal-600 hover:bg-teal-700">
                {qi + 1 < total ? 'السؤال التالي' : 'عرض النتيجة'}
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Lesson list
  if (view === 'unit' && activeUnit) {
    return (
      <div className="space-y-5 max-w-3xl mx-auto">
        <PageHeader title={activeUnit.title} backTo="/question-bank/grade_5/first" />
        <div className={`rounded-2xl bg-gradient-to-r ${activeUnit.bg} p-5 text-white flex items-center gap-4`}>
          <span className="text-4xl">{activeUnit.icon}</span>
          <div>
            <h2 className="font-bold text-lg">{activeUnit.title}</h2>
            <p className="text-white/70 text-sm">{toAr(activeUnit.lessons.length)} درسًا · {toAr(activeUnit.lessons.reduce((s, l) => s + l.questions.length, 0))} سؤالاً</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {activeUnit.lessons.map((lesson, i) => (
            <button key={lesson.id} onClick={() => startLesson(lesson, activeUnit)}
              className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-teal-300 hover:shadow-md p-4 text-right flex items-center gap-3 transition-all">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeUnit.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{toAr(i + 1)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">ص{lesson.page} · {toAr(lesson.questions.length)} أسئلة</p>
              </div>
              <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-teal-600 flex-shrink-0" />
            </button>
          ))}
        </div>
        <Button variant="outline" onClick={() => setView('home')} className="gap-2"><ChevronRight className="w-4 h-4" /> رجوع للرئيسية</Button>
      </div>
    );
  }

  // Home
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="المهارات الحياتية والأسرية — الصف الخامس"
        subtitle={`الفصل الأول 1447هـ · ${toAr(LIFE_SKILLS_TOTAL)} سؤالاً من الكتاب المدرسي`}
        backTo="/question-bank/grade_5/first"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف الخامس', path: '/question-bank/grade_5' },
          { label: 'الفصل الأول', path: '/question-bank/grade_5/first' },
          { label: 'المهارات الحياتية' },
        ]}
      />
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: LIFE_SKILLS_G5_S1.units.length, l: 'وحدات' },
          { n: LIFE_SKILLS_G5_S1.units.reduce((s, u) => s + u.lessons.length, 0), l: 'درسًا' },
          { n: LIFE_SKILLS_TOTAL, l: 'سؤالاً' },
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-4 text-center border shadow-sm">
            <div className="text-2xl font-bold text-teal-700">{toAr(s.n)}</div>
            <div className="text-xs text-slate-500">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LIFE_SKILLS_G5_S1.units.map((unit) => (
          <button key={unit.id}
            onClick={() => { setActiveUnit(unit); setView('unit'); }}
            className={`group relative rounded-2xl bg-gradient-to-br ${unit.bg} p-5 text-right overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
            <div className="absolute inset-3 rounded-xl bg-white/10 border border-white/20" />
            <div className="relative">
              <span className="text-3xl">{unit.icon}</span>
              <h3 className="text-white font-bold text-sm mt-2 leading-snug">{unit.title}</h3>
              <p className="text-white/60 text-xs mt-1">
                {toAr(unit.lessons.length)} دروس · {toAr(unit.lessons.reduce((s, l) => s + l.questions.length, 0))} سؤالاً
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}