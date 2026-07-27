import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, XCircle, Trophy, RotateCcw, Home, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { COMPUTER_G5_S2_UNITS, COMPUTER_G5_S2_TOTAL } from '@/lib/computerGrade5S2Bank';
import { G5Matching, G5Classify, G5Ordering, OPT_COLORS } from '@/components/lughati/LughatiG5Interactive';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function YesNoQ({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-5">
      <p className="text-xl font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="flex gap-4 justify-center">
        {[{ label: 'صواب ✓', val: true, c: 'bg-emerald-500 hover:bg-emerald-600' }, { label: 'خطأ ✗', val: false, c: 'bg-red-500 hover:bg-red-600' }].map(({ label, val, c }) => {
          let cls = `${c} text-white`;
          if (answered) {
            if (val === q.correct) cls = 'bg-emerald-500 text-white ring-4 ring-emerald-300';
            else if (userAnswer === val) cls = 'bg-red-500 text-white ring-4 ring-red-300';
            else cls = 'bg-slate-200 text-slate-400 cursor-not-allowed';
          }
          return (
            <button key={String(val)} disabled={answered} onClick={() => onAnswer(val)}
              className={`px-10 py-4 rounded-2xl font-bold text-xl transition-all ${cls}`}>
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
      <p className="text-xl font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const c = OPT_COLORS[i % 4];
          const isCorrect = answered && i === q.correct;
          const isWrongPick = answered && userAnswer === i && i !== q.correct;
          const isDimmed = answered && !isCorrect && !isWrongPick;
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)}
              className={`w-full text-right px-4 py-4 rounded-2xl font-bold border-2 transition-all flex items-center gap-3 text-base ${
                isCorrect ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-300' :
                isWrongPick ? 'border-red-500 bg-red-50 ring-2 ring-red-300' :
                isDimmed ? 'border-slate-100 bg-slate-50 opacity-50' :
                `${c.border} ${c.bg} ${c.text} hover:shadow-md`
              }`}>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full ${c.dot} text-white flex items-center justify-center text-sm font-bold`}>
                {['أ','ب','ج','د'][i]}
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

export default function ComputerGrade5S2() {
  const { isRTL } = useLang();
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [done, setDone] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const openLesson = (lesson) => {
    setActiveLesson(lesson); setCurrentQ(0); setScore(0);
    setAnswered(false); setUserAnswer(null); setShowResult(false); setDone(false); setLastCorrect(false);
  };
  const closeLesson = () => setActiveLesson(null);
  const q = activeLesson?.questions[currentQ];
  const isInteractive = q && ['matching','classify','ordering'].includes(q.type);

  const handleAnswer = (val) => {
    if (answered) return;
    setUserAnswer(val); setAnswered(true);
    const correct = val === q.correct;
    setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
    setShowResult(true);
  };

  const handleInteractiveDone = (correct) => {
    setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
    setAnswered(true); setShowResult(true);
  };

  const next = () => {
    if (currentQ + 1 >= activeLesson.questions.length) setDone(true);
    else {
      setCurrentQ(i => i + 1);
      setAnswered(false); setUserAnswer(null); setShowResult(false); setLastCorrect(false);
    }
  };

  if (done && activeLesson) {
    const total = activeLesson.questions.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="space-y-6 p-4" dir="rtl">
        <PageHeader title="المهارات الرقمية — الصف الخامس ف٢" backTo="/question-bank/grade_5/second" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white shadow-2xl border p-10 text-center space-y-6 max-w-lg mx-auto">
          <div className="text-7xl">{pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : '📚'}</div>
          <h2 className="text-2xl font-heading font-bold text-slate-800">{activeLesson.title_ar}</h2>
          <div className="text-6xl font-black text-blue-600">{pct}٪</div>
          <p className="text-slate-500 text-lg">{toAr(score)} من {toAr(total)} إجابة صحيحة</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => openLesson(activeLesson)} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" /> إعادة
            </Button>
            <Button onClick={closeLesson} className="gap-2">
              <Home className="w-4 h-4" /> الرئيسية
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (activeLesson && q) {
    const total = activeLesson.questions.length;
    return (
      <div className="space-y-4 p-4" dir="rtl">
        <PageHeader title="المهارات الرقمية — الصف الخامس ف٢" subtitle={activeLesson.title_ar} backTo="/question-bank/grade_5/second" />
        <div className="flex items-center gap-3">
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-500" style={{ width: `${(currentQ / total) * 100}%` }} />
          </div>
          <span className="text-sm font-bold text-slate-600">{toAr(currentQ + 1)} / {toAr(total)}</span>
          <span className="text-sm font-bold text-emerald-600">✅ {toAr(score)}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={currentQ} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            className="rounded-3xl bg-white shadow-xl border-2 border-slate-100 p-6 space-y-5">
            <ExerciseRenderer question={q} answered={answered} userAnswer={userAnswer} onAnswer={handleAnswer} onDone={handleInteractiveDone} />
            {showResult && (
              <WrongAnswerTeacher explanation={q.explanation} goldenRule={q.golden_rule} isCorrect={lastCorrect} lang="ar" isRTL={true} />
            )}
            {(answered || (isInteractive && showResult)) && (
              <Button onClick={next} className="w-full mt-2 gap-2 h-14 text-base font-bold bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                {currentQ + 1 < total ? 'السؤال التالي' : 'عرض النتيجة'}
                <ChevronLeft className="w-5 h-5" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader
        title="المهارات الرقمية — الصف الخامس الابتدائي (ف٢)"
        subtitle={`${toAr(COMPUTER_G5_S2_TOTAL)} سؤالًا موزعًا على ${toAr(COMPUTER_G5_S2_UNITS.length)} وحدات`}
        backTo="/question-bank/grade_5/second"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف الخامس', path: '/question-bank/grade_5' },
          { label: 'الفصل الثاني', path: '/question-bank/grade_5/second' },
          { label: 'المهارات الرقمية' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: toAr(COMPUTER_G5_S2_UNITS.length), l: 'وحدة' },
            { n: toAr(COMPUTER_G5_S2_UNITS.reduce((s, u) => s + u.lessons.length, 0)), l: 'درسًا' },
            { n: toAr(COMPUTER_G5_S2_TOTAL), l: 'سؤالًا' },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-5 text-center border border-slate-100 shadow-sm">
              <div className="text-3xl font-black text-blue-600">{s.n}</div>
              <div className="text-sm text-slate-500 font-bold">{s.l}</div>
            </div>
          ))}
        </div>
        {COMPUTER_G5_S2_UNITS.map((unit) => (
          <div key={unit.id} className="space-y-3">
            <div className={`rounded-2xl bg-gradient-to-r ${unit.color} p-5 flex items-center gap-4`}>
              <span className="text-4xl">{unit.icon}</span>
              <div>
                <h2 className="text-white font-bold text-lg">{unit.title_ar}</h2>
                <p className="text-white/70 text-sm">
                  {toAr(unit.lessons.reduce((s, l) => s + l.questions.length, 0))} سؤالًا في {toAr(unit.lessons.length)} دروس
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {unit.lessons.map((lesson, li) => (
                <button key={lesson.id} onClick={() => openLesson(lesson)}
                  className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all p-5 text-right flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${unit.color} flex items-center justify-center flex-shrink-0 text-white font-black text-xl`}>
                    {toAr(li + 1)}
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-slate-800 leading-snug">{lesson.title_ar}</p>
                    <p className="text-sm text-blue-600 font-bold mt-1">{toAr(lesson.questions.length)} سؤالًا</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}