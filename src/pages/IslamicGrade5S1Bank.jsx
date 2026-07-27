import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronLeft, CheckCircle2, XCircle, Trophy,
  RotateCcw, Home, BookOpen, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { useLang } from '@/lib/i18n';
import { ISLAMIC_G5_S1_BANK, TOTAL_QUESTIONS } from '@/lib/islamicGrade5S1Bank';
import { G5Matching, G5Classify, G5Ordering } from '@/components/lughati/LughatiG5Interactive';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// ── مكوِّن سؤال صح / خطأ ──
function TFQuestion({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="flex gap-4 justify-center">
        {[
          { label: '✓  صواب', val: true, yes: true },
          { label: '✗  خطأ', val: false, yes: false }
        ].map(({ label, val, yes }) => {
          let cls = yes
            ? 'border-emerald-500 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            : 'border-red-400 bg-red-50 text-red-800 hover:bg-red-100';
          if (answered) {
            const isCorrect = val === q.correct;
            const isPicked = userAnswer === val;
            cls = isCorrect
              ? 'border-emerald-500 bg-emerald-100 text-emerald-900 ring-2 ring-emerald-300'
              : isPicked
              ? 'border-red-500 bg-red-100 text-red-900 ring-2 ring-red-300'
              : 'border-slate-200 bg-slate-50 opacity-40';
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

// ── مكوِّن اختيار من متعدد ──
const OPT_COLORS = [
  { bg: 'bg-pink-50', border: 'border-pink-300', text: 'text-pink-900', dot: 'bg-pink-500' },
  { bg: 'bg-sky-50', border: 'border-sky-300', text: 'text-sky-900', dot: 'bg-sky-500' },
  { bg: 'bg-emerald-50', border: 'border-emerald-300', text: 'text-emerald-900', dot: 'bg-emerald-500' },
  { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-900', dot: 'bg-amber-500' },
];

function MCQuestion({ q, onAnswer, answered, userAnswer }) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{q.q}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const c = OPT_COLORS[i % 4];
          const isCorrect = answered && i === q.correct;
          const isWrong = answered && userAnswer === i && i !== q.correct;
          const isDim = answered && !isCorrect && !isWrong;
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)}
              className={`text-right px-4 py-3 rounded-xl text-sm font-bold border-2 transition-all flex items-center gap-2
                ${isCorrect ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-300' :
                  isWrong ? 'border-red-500 bg-red-50 ring-2 ring-red-300' :
                  isDim ? 'opacity-40 border-slate-100 bg-slate-50' :
                  `${c.border} ${c.bg} ${c.text} hover:shadow-md`}`}>
              <span className={`w-6 h-6 rounded-full ${c.dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>
                {['أ', 'ب', 'ج', 'د'][i]}
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

// ── لوحة المعلم والشرح ──
function TeacherExplanation({ explanation, goldenRule, isCorrect }) {
  return (
    <div className="space-y-3 mt-3">
      {/* حالة الإجابة */}
      <div className={`rounded-xl p-3 text-sm font-bold text-center ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
        {isCorrect ? '✅ أحسنت! إجابة صحيحة' : '❌ خطأ — اقرأ الشرح بعناية'}
      </div>

      {/* السبورة + الشرح */}
      <div className="rounded-2xl overflow-hidden border-4 border-amber-800 shadow-lg">
        {/* إطار السبورة */}
        <div className="bg-amber-900 px-4 py-2 text-amber-200 text-xs font-bold text-center">
          📋 شرح المعلم
        </div>
        <div className="bg-emerald-900 p-4 min-h-[80px]">
          <p className="text-white font-body text-sm leading-relaxed text-right">{explanation}</p>
        </div>
        <div className="bg-amber-900 h-2" />
      </div>

      {/* القاعدة الذهبية */}
      {goldenRule && (
        <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">👑</span>
            <span className="font-bold text-yellow-800 text-sm">القاعدة الذهبية</span>
          </div>
          <p className="text-yellow-900 text-sm font-bold text-right">{goldenRule}</p>
        </div>
      )}
    </div>
  );
}

// ── عارض السؤال ──
function QuestionRenderer({ q, answered, userAnswer, onAnswer, onInteractiveDone }) {
  if (q.type === 'tf') return <TFQuestion q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'mc') return <MCQuestion q={q} onAnswer={onAnswer} answered={answered} userAnswer={userAnswer} />;
  if (q.type === 'matching') return <G5Matching question={q} onComplete={onInteractiveDone} />;
  if (q.type === 'classify') return <G5Classify question={q} onComplete={onInteractiveDone} />;
  if (q.type === 'ordering') return <G5Ordering question={q} onComplete={onInteractiveDone} />;
  return null;
}

// ── شاشة النتيجة ──
function ResultScreen({ score, total, lessonTitle, onRetry, onBack }) {
  const pct = Math.round((score / total) * 100);
  const getGrade = () => {
    if (pct >= 90) return { label: 'ممتاز', color: 'text-emerald-600' };
    if (pct >= 80) return { label: 'جيد جداً', color: 'text-blue-600' };
    if (pct >= 70) return { label: 'جيد', color: 'text-sky-600' };
    return { label: 'يحتاج مراجعة', color: 'text-orange-600' };
  };
  const grade = getGrade();
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-xl border p-8 text-center space-y-5 max-w-md mx-auto">
      <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
      <div>
        <p className="text-slate-500 text-sm mb-1">{lessonTitle}</p>
        <p className={`text-5xl font-black ${grade.color}`}>{pct}%</p>
        <p className={`font-bold text-lg ${grade.color}`}>{grade.label}</p>
      </div>
      <p className="text-slate-400 text-sm">{score} / {total} إجابة صحيحة</p>
      <div className="flex gap-3 justify-center">
        <Button onClick={onRetry} variant="outline" size="sm" className="gap-1">
          <RotateCcw className="w-3 h-3" /> إعادة
        </Button>
        <Button onClick={onBack} size="sm" className="gap-1">
          <Home className="w-3 h-3" /> العودة
        </Button>
      </div>
    </motion.div>
  );
}

// ── الشاشة الرئيسية ──
export default function IslamicGrade5S1Bank() {
  const { isRTL } = useLang();
  const [view, setView] = useState('home'); // home | section | unit | lesson | quiz | result
  const [activeSection, setActiveSection] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [done, setDone] = useState(false);

  const startLesson = (lesson) => {
    setActiveLesson(lesson);
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

  // شاشة النتيجة
  if (done && view === 'quiz') {
    return (
      <div className="space-y-6 max-w-xl mx-auto">
        <PageHeader title="التربية الإسلامية ف١ — الصف الخامس" backTo="/question-bank/grade_5/first" />
        <ResultScreen
          score={score} total={activeLesson.questions.length}
          lessonTitle={activeLesson.title}
          onRetry={() => startLesson(activeLesson)}
          onBack={() => setView('unit')}
        />
      </div>
    );
  }

  // شاشة الأسئلة
  if (view === 'quiz' && q) {
    const total = activeLesson.questions.length;
    return (
      <div className="space-y-4 max-w-2xl mx-auto">
        <PageHeader title={activeLesson.title.slice(0, 40)} subtitle={activeUnit?.title}
          backTo="/question-bank/grade_5/first" />
        {/* شريط التقدم */}
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${(qi / total) * 100}%` }} />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>السؤال {toAr(qi + 1)} / {toAr(total)}</span>
          {q.page && <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">ص {q.page}</span>}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={qi} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl border shadow-lg p-5 space-y-4">
            <QuestionRenderer
              q={q} answered={answered} userAnswer={userAnswer}
              onAnswer={handleAnswer} onInteractiveDone={handleInteractiveDone}
            />
            {showResult && (
              <TeacherExplanation
                explanation={q.explanation} goldenRule={q.golden_rule}
                isCorrect={lastCorrect}
              />
            )}
            {(answered || (isInteractive && showResult)) && (
              <Button onClick={nextQ} className="w-full bg-amber-600 hover:bg-amber-700 gap-2">
                {qi + 1 < total ? 'السؤال التالي' : 'عرض النتيجة'}
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // شاشة الدروس (unit)
  if (view === 'unit' && activeUnit) {
    const unitQ = activeUnit.lessons.reduce((s, l) => s + l.questions.length, 0);
    return (
      <div className="space-y-5 max-w-3xl mx-auto">
        <PageHeader title={activeUnit.title} backTo="/question-bank/grade_5/first" />
        <div className={`rounded-2xl bg-gradient-to-r ${activeUnit.bg} p-5 text-white flex items-center gap-3`}>
          <span className="text-4xl">{activeUnit.icon}</span>
          <div>
            <h2 className="font-bold text-lg">{activeUnit.title}</h2>
            <p className="text-white/70 text-sm">{toAr(activeUnit.lessons.length)} درسًا · {toAr(unitQ)} سؤالاً</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {activeUnit.lessons.map((lesson, i) => (
            <button key={lesson.id} onClick={() => { setActiveLesson(lesson); startLesson(lesson); }}
              className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-amber-300 hover:shadow-md transition-all p-4 text-right flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeUnit.bg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {toAr(i + 1)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{toAr(lesson.questions.length)} أسئلة · ص {lesson.page}</p>
              </div>
              <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-amber-600 flex-shrink-0" />
            </button>
          ))}
        </div>
        <Button variant="outline" onClick={() => setView('section')} className="gap-2">
          <ChevronRight className="w-4 h-4" /> رجوع للقسم
        </Button>
      </div>
    );
  }

  // شاشة الوحدات (section)
  if (view === 'section' && activeSection) {
    return (
      <div className="space-y-5 max-w-3xl mx-auto">
        <PageHeader title={activeSection.title} backTo="/question-bank/grade_5/first" />
        <div className={`rounded-2xl bg-gradient-to-r ${activeSection.bg} p-5 text-white flex items-center gap-3`}>
          <span className="text-4xl">{activeSection.icon}</span>
          <div>
            <h2 className="font-bold text-xl">{activeSection.title}</h2>
            <p className="text-white/70 text-sm">
              {toAr(activeSection.units.length)} وحدات ·{' '}
              {toAr(activeSection.units.flatMap(u => u.lessons).reduce((s, l) => s + l.questions.length, 0))} سؤالاً
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {activeSection.units.map((unit) => (
            <button key={unit.id}
              onClick={() => { setActiveUnit(unit); setView('unit'); }}
              className={`group relative rounded-2xl bg-gradient-to-br ${unit.bg} p-5 text-left overflow-hidden hover:-translate-y-1 transition-all shadow-lg`}>
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
        <Button variant="outline" onClick={() => setView('home')} className="gap-2">
          <ChevronRight className="w-4 h-4" /> رجوع للرئيسية
        </Button>
      </div>
    );
  }

  // الشاشة الرئيسية
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="التربية الإسلامية — الصف الخامس الابتدائي"
        subtitle={`الفصل الأول 1447هـ · ${toAr(TOTAL_QUESTIONS)} سؤالاً من الكتاب المدرسي`}
        backTo="/question-bank/grade_5/first"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف الخامس', path: '/question-bank/grade_5' },
          { label: 'الفصل الأول', path: '/question-bank/grade_5/first' },
          { label: 'التربية الإسلامية' },
        ]}
      />

      {/* إحصاء */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: toAr(ISLAMIC_G5_S1_BANK.sections.length), l: 'أقسام' },
          { n: toAr(ISLAMIC_G5_S1_BANK.sections.flatMap(s => s.units).length), l: 'وحدة' },
          { n: toAr(TOTAL_QUESTIONS), l: 'سؤالاً' },
        ].map(s => (
          <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
            <div className="text-2xl font-bold text-amber-700">{s.n}</div>
            <div className="text-xs text-slate-500">{s.l}</div>
          </div>
        ))}
      </div>

      {/* الأقسام */}
      <div className="grid sm:grid-cols-3 gap-5">
        {ISLAMIC_G5_S1_BANK.sections.map((sec) => {
          const unitCount = sec.units.length;
          const qCount = sec.units.flatMap(u => u.lessons).reduce((s, l) => s + l.questions.length, 0);
          return (
            <button key={sec.id}
              onClick={() => { setActiveSection(sec); setView('section'); }}
              className={`group relative rounded-2xl bg-gradient-to-br ${sec.bg} p-6 text-center overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl`}>
              <div className="absolute inset-3 rounded-xl bg-white/10 border border-white/20" />
              <div className="relative space-y-2">
                <span className="text-5xl">{sec.icon}</span>
                <h3 className="text-white font-bold text-base leading-snug">{sec.title}</h3>
                <div className="flex justify-center gap-3 text-xs text-white/70">
                  <span>{toAr(unitCount)} وحدة</span>
                  <span>·</span>
                  <span>{toAr(qCount)} سؤالاً</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* الوحدات بشكل بطاقات */}
      <div className="space-y-6">
        {ISLAMIC_G5_S1_BANK.sections.map((sec) => (
          <div key={sec.id}>
            <div className={`rounded-2xl bg-gradient-to-r ${sec.bg} px-5 py-3 mb-3 flex items-center gap-2`}>
              <span>{sec.icon}</span>
              <h3 className="text-white font-bold text-sm">{sec.title}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sec.units.map((unit) => (
                <button key={unit.id}
                  onClick={() => { setActiveSection(sec); setActiveUnit(unit); setView('unit'); }}
                  className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-amber-300 hover:shadow-md p-4 text-right transition-all flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${unit.bg} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                    {unit.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-800 leading-snug line-clamp-2">{unit.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {toAr(unit.lessons.length)} دروس · {toAr(unit.lessons.reduce((s, l) => s + l.questions.length, 0))} سؤالاً
                    </p>
                  </div>
                  <ChevronLeft className="w-4 h-4 text-slate-300 group-hover:text-amber-600 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}