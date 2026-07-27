import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, XCircle, Trophy, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { COMPUTER_G6_S1_UNITS, COMPUTER_G6_S1_TOTAL } from '@/lib/computerGrade6S1Bank';
import { G5Matching, G5Classify, G5Ordering, OPT_COLORS } from '@/components/lughati/LughatiG5Interactive';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function YesNoQ({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="flex gap-3 justify-center">
        {[{ label: 'صواب ✓', val: true, color: 'bg-emerald-500 hover:bg-emerald-600' }, { label: 'خطأ ✗', val: false, color: 'bg-red-500 hover:bg-red-600' }].map(({ label, val, color }) => {
          let cls = `${color} text-white`;
          if (answered) {
            if (val === q.correct) cls = 'bg-emerald-500 text-white ring-4 ring-emerald-300';
            else if (userAnswer === val) cls = 'bg-red-500 text-white ring-4 ring-red-300';
            else cls = 'bg-slate-200 text-slate-400 cursor-not-allowed';
          }
          return (
            <button key={String(val)} disabled={answered} onClick={() => onAnswer(val)}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${cls}`}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MCQ({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const c = OPT_COLORS[i % 4];
          const isCorrect = answered && i === q.correct;
          const isWrongPick = answered && userAnswer === i && i !== q.correct;
          const isDimmed = answered && !isCorrect && !isWrongPick;
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)}
              className={`w-full text-right px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center gap-2 ${
                isCorrect ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-300' :
                isWrongPick ? 'border-red-500 bg-red-50 ring-2 ring-red-300' :
                isDimmed ? 'border-slate-100 bg-slate-50 opacity-50' :
                `${c.border} ${c.bg} ${c.text} hover:shadow-md`
              }`}>
              <span className={`flex-shrink-0 w-6 h-6 rounded-full ${c.dot} text-white flex items-center justify-center text-xs font-bold`}>
                {['أ', 'ب', 'ج', 'د'][i]}
              </span>
              <span className="flex-1">{opt}</span>
              {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
              {isWrongPick && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExerciseRenderer({ question, onDone, answered, userAnswer, onAnswer }) {
  if (question.type === 'yesno') return <YesNoQ q={question} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (question.type === 'mc') return <MCQ q={question} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (question.type === 'matching') return <G5Matching question={question} onComplete={onDone} />;
  if (question.type === 'classify') return <G5Classify question={question} onComplete={onDone} />;
  if (question.type === 'ordering') return <G5Ordering question={question} onComplete={onDone} />;
  return null;
}

export default function ComputerGrade6S1() {
  const { isRTL } = useLang();
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [done, setDone] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);

  const openLesson = (lesson) => {
    setActiveLesson(lesson);
    setCurrentQ(0); setScore(0); setAnswered(false);
    setUserAnswer(null); setShowResult(false); setDone(false); setLastAnswerCorrect(false);
  };

  const closeLesson = () => setActiveLesson(null);
  const q = activeLesson?.questions[currentQ];
  const isInteractive = q && ['matching', 'classify', 'ordering'].includes(q.type);

  const handleAnswer = (val) => {
    if (answered) return;
    setUserAnswer(val); setAnswered(true);
    const correct = val === q.correct;
    setLastAnswerCorrect(correct);
    if (correct) setScore(s => s + 1);
    setShowResult(true);
  };

  const handleInteractiveDone = (correct) => {
    setLastAnswerCorrect(correct);
    if (correct) setScore(s => s + 1);
    setAnswered(true); setShowResult(true);
  };

  const next = () => {
    if (currentQ + 1 >= activeLesson.questions.length) {
      setDone(true);
    } else {
      setCurrentQ(i => i + 1);
      setAnswered(false); setUserAnswer(null); setShowResult(false); setLastAnswerCorrect(false);
    }
  };

  if (done && activeLesson) {
    const total = activeLesson.questions.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="space-y-6">
        <PageHeader title="المهارات الرقمية — الصف السادس ف١" backTo="/question-bank/grade_6/first" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white shadow-xl border p-10 text-center space-y-6">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
          <h2 className="text-2xl font-heading font-bold text-slate-800">{activeLesson.title_ar}</h2>
          <p className="text-5xl font-black text-blue-600">{pct}%</p>
          <p className="text-slate-500">{score} / {total} إجابات صحيحة</p>
          <div className="flex justify-center gap-3">
            <Button onClick={() => openLesson(activeLesson)} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" /> إعادة المحاولة
            </Button>
            <Button onClick={closeLesson} className="gap-2">
              <Home className="w-4 h-4" /> الرجوع للبنك
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (activeLesson && q) {
    const total = activeLesson.questions.length;
    const progress = (currentQ / total) * 100;
    return (
      <div className="space-y-4">
        <PageHeader title="المهارات الرقمية — الصف السادس ف١" subtitle={activeLesson.title_ar} backTo="/question-bank/grade_6/first" />
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-slate-400 text-center">{currentQ + 1} / {total}</p>
        <AnimatePresence mode="wait">
          <motion.div key={currentQ} initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 30 : -30 }}
            className="rounded-2xl bg-white shadow-lg border p-6 space-y-4">
            <ExerciseRenderer question={q} answered={answered} userAnswer={userAnswer} onAnswer={handleAnswer} onDone={handleInteractiveDone} />
            {showResult && (
              <WrongAnswerTeacher explanation={q.explanation} goldenRule={q.golden_rule} isCorrect={lastAnswerCorrect} lang="ar" isRTL={isRTL} />
            )}
            {(answered || (isInteractive && showResult)) && (
              <Button onClick={next} className="w-full mt-2 gap-2">
                {currentQ + 1 < total ? 'السؤال التالي' : 'عرض النتيجة'}
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="المهارات الرقمية — الصف السادس الابتدائي (ف١)"
        subtitle={`${COMPUTER_G6_S1_TOTAL} سؤالاً موزعةً على ${COMPUTER_G6_S1_UNITS.length} وحدات`}
        backTo="/question-bank/grade_6/first"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف السادس', path: '/question-bank/grade_6' },
          { label: 'الفصل الأول', path: '/question-bank/grade_6/first' },
          { label: 'المهارات الرقمية' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: toAr(COMPUTER_G6_S1_UNITS.length), l: 'وحدة' },
            { n: toAr(COMPUTER_G6_S1_UNITS.reduce((s, u) => s + u.lessons.length, 0)), l: 'درسًا' },
            { n: toAr(COMPUTER_G6_S1_TOTAL), l: 'سؤالًا' },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
              <div className="text-2xl font-bold text-primary">{s.n}</div>
              <div className="text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>

        {COMPUTER_G6_S1_UNITS.map((unit, ui) => (
          <div key={unit.id} className="space-y-4">
            <div className={`rounded-2xl bg-gradient-to-r ${unit.color} p-4 flex items-center gap-3`}>
              <span className="text-3xl">{unit.icon}</span>
              <div>
                <h2 className="text-white font-bold text-base">{unit.title_ar}</h2>
                <p className="text-white/70 text-xs">{toAr(unit.lessons.reduce((s, l) => s + l.questions.length, 0))} سؤالًا</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {unit.lessons.map((lesson, li) => (
                <button key={lesson.id} onClick={() => openLesson(lesson)}
                  className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-md transition-all p-4 text-right flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${unit.color} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                    {toAr(li + 1)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{lesson.title_ar}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{toAr(lesson.questions.length)} أسئلة</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}