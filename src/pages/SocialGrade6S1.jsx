import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, XCircle, BookOpen, Star, RotateCcw, Home, Trophy, ArrowRight, Map, Landmark, Flag, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SOCIAL_G6_S1_UNITS, SOCIAL_G6_S1_TOTAL } from '@/lib/socialGrade6S1Bank';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const COLORS = ['bg-pink-50 border-pink-300', 'bg-cyan-50 border-cyan-300', 'bg-emerald-50 border-emerald-300', 'bg-amber-50 border-amber-300'];

function IslamicPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamicStarG6" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 5 L37 22 L55 22 L41 33 L46 50 L30 40 L14 50 L19 33 L5 22 L23 22 Z"
              fill="none" stroke="#1e3a8a" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicStarG6)" />
      </svg>
    </div>
  );
}

const ICON_MAP = { book: BookOpen, landmark: Landmark, map: Map, flag: Flag };

function QuestionRenderer({ q, onAnswer, isAnswered }) {
  const [selected, setSelected] = useState(null);

  const handleMC = (idx) => {
    if (isAnswered || selected !== null) return;
    setSelected(idx);
    onAnswer(idx === q.correct_index);
  };
  const handleTF = (val) => {
    if (isAnswered || selected !== null) return;
    setSelected(val);
    onAnswer(val === (q.correct_answer === 'true'));
  };

  if (q.type === 'multiple_choice') {
    return (
      <div className="space-y-2.5">
        {q.options_ar.map((opt, i) => {
          const isPicked = selected === i;
          const isCorrect = i === q.correct_index;
          const show = selected !== null;
          return (
            <button key={i} disabled={show} onClick={() => handleMC(i)}
              className={`w-full text-right px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer
                ${!show ? COLORS[i % 4] + ' hover:shadow-sm' : ''}
                ${show && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${show && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${show && !isPicked && !isCorrect ? 'bg-white border-slate-200 text-slate-400 opacity-70' : ''}`}>
              <span className="flex items-center gap-2">
                {show && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                {show && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'true_false') {
    const show = selected !== null;
    return (
      <div className="flex gap-3">
        {[{ label: '✅ صحيح', val: true }, { label: '❌ خطأ', val: false }].map(({ label, val }) => {
          const isPicked = selected === val;
          const isCorrect = val === (q.correct_answer === 'true');
          return (
            <button key={label} disabled={show} onClick={() => handleTF(val)}
              className={`flex-1 py-4 rounded-xl border-2 text-base font-bold transition-all
                ${!show ? 'bg-white border-slate-200 hover:border-blue-400 cursor-pointer' : ''}
                ${show && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${show && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${show && !isPicked && !isCorrect ? 'bg-slate-50 border-slate-200 text-slate-400' : ''}`}>
              {label}
            </button>
          );
        })}
      </div>
    );
  }
  return null;
}

function LessonRunner({ lesson, onBack }) {
  const questions = lesson.getQuestions();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [done, setDone] = useState(false);
  const q = questions[idx];

  const handleAnswer = (correct) => {
    setAnswered(true);
    setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setIdx(i => i + 1);
    setAnswered(false);
    setLastCorrect(null);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10 px-4 space-y-6">
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pct >= 80 ? 'أحسنت! نتيجة رائعة' : pct >= 50 ? 'جيد! واصل التدريب' : 'راجع الدرس مجدداً'}</h2>
        <p className="text-slate-500">نتيجتك: {score} من {questions.length} ({pct}٪)</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setLastCorrect(null); setDone(false); }} variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />إعادة</Button>
          <Button onClick={onBack} className="bg-blue-700 hover:bg-blue-800 gap-2"><ArrowRight className="w-4 h-4" />العودة</Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(idx / questions.length) * 100}%` }} />
        </div>
        <span className="text-xs font-medium text-slate-500">{idx + 1} / {questions.length}</span>
        <span className="text-xs font-bold text-blue-700">✅ {score}</span>
      </div>

      {q.page && (
        <div className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 font-medium">
          <BookOpen className="w-3.5 h-3.5" /> ص {q.page}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 font-bold flex-shrink-0 mt-0.5">{idx + 1}</span>
            <p className="text-base font-bold text-slate-800 leading-relaxed">{q.question_ar}</p>
          </div>
          <QuestionRenderer q={q} onAnswer={handleAnswer} isAnswered={answered} />
          {answered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {lastCorrect ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-emerald-800">إجابة صحيحة! 🌟</p>
                </div>
              ) : (
                <WrongAnswerTeacher
                  explanation={q.explanation_ar}
                  goldenRule={q.golden_rule_ar}
                  lang="ar"
                  isRTL={true}
                  isCorrect={false}
                />
              )}
              {lastCorrect && q.explanation_ar && (
                <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-100 p-3">
                  <p className="text-xs font-bold text-emerald-700 mb-1">💡 شرح الإجابة:</p>
                  <p className="text-sm text-emerald-900 leading-relaxed">{q.explanation_ar}</p>
                  {q.golden_rule_ar && (
                    <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
                      <p className="text-xs font-bold text-amber-700">👑 القاعدة الذهبية</p>
                      <p className="text-sm text-amber-900 mt-0.5">{q.golden_rule_ar}</p>
                    </div>
                  )}
                </div>
              )}
              <Button onClick={next} className="w-full mt-3 bg-blue-700 hover:bg-blue-800 gap-2">
                {idx + 1 >= questions.length ? <><Trophy className="w-4 h-4" />إنهاء الدرس</> : <>السؤال التالي<ArrowRight className="w-4 h-4" /></>}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function SocialGrade6S1() {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeUnit !== null && activeLesson !== null) {
    const unit = SOCIAL_G6_S1_UNITS[activeUnit];
    const lesson = unit.lessons[activeLesson];
    return (
      <div className="min-h-screen p-4 sm:p-6" dir="rtl" style={{ background: '#faf8f0' }}>
        <IslamicPattern />
        <div className="relative max-w-2xl mx-auto space-y-4">
          <div className={`rounded-2xl p-5 text-white bg-gradient-to-r ${unit.color}`}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveLesson(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div>
                <p className="text-xs text-white/70">{unit.title_ar}</p>
                <h1 className="text-lg font-bold">{lesson.title_ar}</h1>
              </div>
            </div>
          </div>
          <LessonRunner lesson={lesson} onBack={() => setActiveLesson(null)} />
        </div>
      </div>
    );
  }

  if (activeUnit !== null) {
    const unit = SOCIAL_G6_S1_UNITS[activeUnit];
    return (
      <div className="min-h-screen p-4 sm:p-6" dir="rtl" style={{ background: '#faf8f0' }}>
        <IslamicPattern />
        <div className="relative max-w-2xl mx-auto space-y-5">
          <div className={`rounded-2xl p-6 text-white bg-gradient-to-r ${unit.color}`}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveUnit(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div>
                <h1 className="text-xl font-bold">{unit.title_ar}</h1>
                <p className="text-sm text-white/70">{unit.subtitle_ar}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unit.lessons.map((lesson, i) => (
              <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }} onClick={() => setActiveLesson(i)}
                className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 text-right hover:shadow-md hover:border-blue-300 transition-all flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title_ar}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{lesson.count} أسئلة</p>
                </div>
                <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" dir="rtl" style={{ background: '#faf8f0' }}>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0a1628 100%)' }}>
        <IslamicPattern />
        <div className="relative max-w-3xl mx-auto px-4 py-10 sm:py-14 text-center text-white">
          <Link to="/question-bank/grades" className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 mb-4 transition-colors">
            <Home className="w-3.5 h-3.5" />بنك الأسئلة
          </Link>
          <div className="text-5xl mb-4">🗺️</div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">الدراسات الاجتماعية — الصف السادس</h1>
          <p className="text-white/80 text-sm">الفصل الدراسي الأول · التاريخ والدولة السعودية</p>
          <div className="flex justify-center gap-4 mt-5 text-xs flex-wrap">
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{SOCIAL_G6_S1_UNITS.length}</p>
              <p className="text-white/70">وحدات</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{SOCIAL_G6_S1_UNITS.reduce((s, u) => s + u.lessons.length, 0)}</p>
              <p className="text-white/70">دروس</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{SOCIAL_G6_S1_TOTAL}</p>
              <p className="text-white/70">سؤالاً</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        {SOCIAL_G6_S1_UNITS.map((unit, i) => {
          const Icon = ICON_MAP[unit.icon] || BookOpen;
          return (
            <motion.button key={unit.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} onClick={() => setActiveUnit(i)}
              className="w-full bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all text-right">
              <div className="flex items-center gap-4 p-5">
                <div className={`w-14 h-14 rounded-xl flex-shrink-0 bg-gradient-to-br ${unit.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-slate-800">{unit.title_ar}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{unit.subtitle_ar}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">{unit.lessons.length} دروس</span>
                    <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">{unit.lessons.reduce((s, l) => s + l.count, 0)} سؤالاً</span>
                  </div>
                </div>
                <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}