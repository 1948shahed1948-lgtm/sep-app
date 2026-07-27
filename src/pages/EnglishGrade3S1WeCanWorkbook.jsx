import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Crown, BookOpen, CheckCircle2, XCircle, Home, Trophy, Volume2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { WC3_UNITS, WC3_BANNER, TOTAL_UNITS_WC3, TOTAL_LESSONS_WC3, TOTAL_QUESTIONS_WC3 } from '@/lib/weCanGrade3S1Workbook';

const UNIT_COLORS = {
  teal: { bg: 'bg-teal-500', from: 'from-teal-500', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', hover: 'hover:border-teal-400' },
  blue: { bg: 'bg-blue-500', from: 'from-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:border-blue-400' },
  orange: { bg: 'bg-orange-500', from: 'from-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', hover: 'hover:border-orange-400' },
  green: { bg: 'bg-green-500', from: 'from-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', hover: 'hover:border-green-400' },
};

function toAr(n) { return String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }

// ── Teacher SVG ──────────────────────────────────────────────────────────────
function TeacherSVG() {
  return (
    <svg width="90" height="120" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <ellipse cx="60" cy="155" rx="35" ry="8" fill="#e8d5b7" opacity="0.4"/>
      <rect x="35" y="90" width="50" height="60" rx="12" fill="#1e3a6e"/>
      <polygon points="60,92 55,110 60,118 65,110" fill="#c9a227"/>
      <circle cx="60" cy="72" r="24" fill="#f5d0a9"/>
      <ellipse cx="60" cy="52" rx="24" ry="12" fill="#3d2b1f"/>
      <circle cx="53" cy="70" r="3.5" fill="white"/><circle cx="67" cy="70" r="3.5" fill="white"/>
      <circle cx="54" cy="71" r="2" fill="#2c1810"/><circle cx="68" cy="71" r="2" fill="#2c1810"/>
      <circle cx="53" cy="70" r="6" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <circle cx="67" cy="70" r="6" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <line x1="59" y1="70" x2="61" y2="70" stroke="#3d2b1f" strokeWidth="1.5"/>
      <path d="M49 66 Q53 64 57 66" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <path d="M63 66 Q67 64 71 66" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <ellipse cx="60" cy="75" rx="2" ry="3" fill="#e8b88a"/>
      <path d="M52 80 Q60 86 68 80" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      <rect x="82" y="95" width="4" height="18" rx="2" fill="white" transform="rotate(20 82 95)"/>
    </svg>
  );
}

// ── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ text, speed = 22 }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    setShown('');
    let i = 0;
    const id = setInterval(() => { i++; setShown(text.slice(0, i)); if (i >= text.length) clearInterval(id); }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <>{shown}<span className="animate-pulse">▌</span></>;
}

// ── Golden Rule Box ───────────────────────────────────────────────────────────
function GoldenRule({ text }) {
  if (!text) return null;
  return (
    <div className="rounded-xl p-3 border-2" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fff8dc)' }}>
      <div className="flex items-center gap-1.5 mb-1">
        <Crown className="w-4 h-4 text-amber-600" />
        <span className="font-bold text-amber-800 text-xs">Golden Rule 👑</span>
      </div>
      <p className="text-slate-800 text-sm">{text}</p>
    </div>
  );
}

// ── MC Question ───────────────────────────────────────────────────────────────
const OPTION_COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

function MCQuestion({ q, onAnswer, answered }) {
  const [picked, setPicked] = useState(null);
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (picked === null) return;
    setChecked(true);
    const ok = picked === q.correct;
    onAnswer(ok);
  };

  return (
    <div className="space-y-2.5">
      {q.options_en.map((opt, i) => {
        const isCorrect = i === q.correct, isPicked = i === picked;
        let cls = 'w-full text-start rounded-xl p-3 border-2 transition-all flex items-center gap-2.5 text-sm ';
        if (!checked) cls += isPicked ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-200' : 'border-slate-200 bg-white hover:border-teal-300 hover:bg-teal-50/40';
        else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50';
        else if (isPicked) cls += 'border-red-400 bg-red-50';
        else cls += 'border-slate-100 bg-slate-50 opacity-60';
        return (
          <button key={i} className={cls} onClick={() => !checked && setPicked(i)} disabled={checked}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: OPTION_COLORS[i] }}>
              {OPTION_LETTERS[i]}
            </span>
            <span className="flex-1 font-body text-slate-800">{opt}</span>
            {checked && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            {checked && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-red-500" />}
          </button>
        );
      })}
      {!checked && (
        <button onClick={check} disabled={picked === null}
          className="w-full mt-1 rounded-xl py-2.5 bg-primary text-white font-bold text-sm disabled:opacity-40">
          Check Answer ✓
        </button>
      )}
    </div>
  );
}

// ── True/False Question ───────────────────────────────────────────────────────
function TFQuestion({ q, onAnswer }) {
  const [checked, setChecked] = useState(false);
  const [picked, setPicked] = useState(null);

  const choose = (val) => {
    if (checked) return;
    setPicked(val);
    setChecked(true);
    onAnswer(val === q.correct);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {['true', 'false'].map(val => {
        const isCorrect = val === q.correct, isPicked = val === picked;
        let cls = 'rounded-2xl p-4 border-2 transition-all flex flex-col items-center gap-1.5 font-bold text-sm ';
        if (!checked) cls += val === 'true' ? 'border-emerald-300 hover:bg-emerald-50' : 'border-red-300 hover:bg-red-50';
        else if (isCorrect) cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
        else if (isPicked) cls += 'border-red-400 bg-red-50 text-red-700';
        else cls += 'border-slate-200 bg-slate-50 opacity-50';
        return (
          <button key={val} className={cls} onClick={() => choose(val)} disabled={checked}>
            {val === 'true' ? <CheckCircle2 className="w-8 h-8 text-emerald-500" /> : <XCircle className="w-8 h-8 text-red-400" />}
            {val === 'true' ? 'True ✓' : 'False ✗'}
          </button>
        );
      })}
    </div>
  );
}

// ── Speak Button ──────────────────────────────────────────────────────────────
function SpeakBtn({ text }) {
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
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all"
      style={{ background: speaking ? '#6b7280' : '#0891b2' }}>
      <Volume2 className={`w-3.5 h-3.5 ${speaking ? 'animate-pulse' : ''}`} />
      {speaking ? 'Playing...' : 'Listen'}
    </button>
  );
}

// ── Question Runner ───────────────────────────────────────────────────────────
function QuestionRunner({ questions, lessonTitle, unitColor, onBack }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const clr = UNIT_COLORS[unitColor] || UNIT_COLORS.teal;

  const q = questions[idx];
  const progress = ((idx) / questions.length) * 100;

  const handleAnswer = (isOk) => {
    setAnswered(true);
    setCorrect(isOk);
    if (isOk) setScore(s => s + 1);
  };

  const next = () => {
    if (idx < questions.length - 1) { setIdx(i => i + 1); setAnswered(false); setCorrect(false); }
    else setDone(true);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
        <div className="rounded-2xl p-6 text-center text-white" style={{ background: 'linear-gradient(135deg,#263D84,#3E57A4)' }}>
          <Crown className="w-10 h-10 mx-auto mb-2 text-amber-300" />
          <div className="text-4xl font-bold mb-1">{toAr(score)} / {toAr(questions.length)}</div>
          <p className="text-white/80 text-sm">{pct >= 80 ? '🏆 Excellent! Well done!' : pct >= 50 ? '💪 Good, keep practicing!' : '📖 Review and try again!'}</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setIdx(0); setAnswered(false); setCorrect(false); setScore(0); setDone(false); }}
            className="flex-1 rounded-xl border-2 border-slate-300 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">
            Try Again
          </button>
          <button onClick={onBack} className="flex-1 rounded-xl bg-primary text-white font-bold py-2.5 text-sm">
            Back to Goals
          </button>
        </div>
      </motion.div>
    );
  }

  if (!q) return null;

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5" /> Back
        </button>
        <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
          <motion.div className={`h-full ${clr.bg}`} animate={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs font-bold text-slate-500">{toAr(idx + 1)}/{toAr(questions.length)}</span>
        <div className="flex items-center gap-1 text-amber-600">
          <Trophy className="w-3.5 h-3.5" />
          <span className="text-xs font-bold">{toAr(score)}</span>
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className={`px-4 py-2.5 flex items-center justify-between ${clr.light}`}>
            <span className={`text-xs font-bold ${clr.text}`}>{lessonTitle}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${clr.light} border ${clr.border} ${clr.text}`}>
              {q.type === 'true_false' ? 'True / False' : 'Multiple Choice'}
            </span>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-start gap-2">
              <SpeakBtn text={q.question_en} />
              <h3 className="font-body font-semibold text-slate-900 text-base leading-snug flex-1">{q.question_en}</h3>
            </div>

            {q.type === 'true_false'
              ? <TFQuestion q={q} onAnswer={handleAnswer} />
              : <MCQuestion q={q} onAnswer={handleAnswer} answered={answered} />
            }

            {/* Feedback */}
            {answered && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                {correct ? (
                  <div className="rounded-xl p-3 bg-emerald-50 border border-emerald-200 text-center">
                    <span className="text-2xl">🌟</span>
                    <p className="text-emerald-700 font-bold text-sm">Excellent! Correct!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TeacherSVG />
                      <div className="flex-1 rounded-xl overflow-hidden shadow border-2 text-sm" style={{ borderColor: '#5C3A1E', background: '#1a3a2a' }}>
                        <div className="px-3 py-1 text-xs text-amber-200 font-mono" style={{ background: '#5C3A1E' }}>📖 Explanation</div>
                        <div className="p-3 font-mono text-green-100 leading-relaxed">
                          <Typewriter text={q.explanation_en || 'Review your notes and try again!'} />
                        </div>
                      </div>
                    </div>
                    <GoldenRule text={q.explanation_en} />
                  </div>
                )}
                <button onClick={next} className="w-full rounded-xl bg-primary text-white font-bold py-3 text-sm">
                  {idx < questions.length - 1 ? 'Next Question →' : 'Finish Goal ✓'}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function EnglishGrade3S1WeCanWorkbook() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [running, setRunning] = useState(false);

  const totalQ = WC3_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0);

  const openUnit = (unit) => { setSelectedUnit(unit); setSelectedLesson(null); setRunning(false); };
  const openLesson = (lesson) => { setSelectedLesson(lesson); setRunning(false); };
  const startLesson = () => setRunning(true);
  const backToUnit = () => { setRunning(false); setSelectedLesson(null); };
  const backToHome = () => { setSelectedUnit(null); setSelectedLesson(null); setRunning(false); };

  const clr = selectedUnit ? (UNIT_COLORS[selectedUnit.color] || UNIT_COLORS.teal) : UNIT_COLORS.teal;

  // Running view
  if (running && selectedLesson && selectedUnit) {
    return (
      <div className="space-y-5">
        <PageHeader
          title={selectedLesson.title_en}
          subtitle={`${selectedUnit.title_en} · ${toAr(selectedLesson.questions.length)} questions`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'We Can! 3 Workbook', path: '/english-grade3-s1-workbook' },
            { label: selectedUnit.title_en },
            { label: selectedLesson.title_en },
          ]}
        />
        <div className="max-w-2xl mx-auto px-4">
          <QuestionRunner
            questions={selectedLesson.questions}
            lessonTitle={selectedLesson.title_en}
            unitColor={selectedUnit.color}
            onBack={backToUnit}
          />
        </div>
      </div>
    );
  }

  // Lesson detail view
  if (selectedLesson && selectedUnit) {
    return (
      <div className="space-y-5">
        <PageHeader
          title={selectedLesson.title_en}
          subtitle={`${selectedUnit.title_en} · ${toAr(selectedLesson.questions.length)} questions`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'We Can! 3 Workbook', path: '/english-grade3-s1-workbook' },
            { label: selectedUnit.title_en },
          ]}
        />
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <button onClick={backToUnit} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800">
            <ChevronRight className="w-4 h-4" /> Back to {selectedUnit.title_en}
          </button>

          {/* Lesson info */}
          <div className={`rounded-2xl p-4 border-2 ${clr.border} ${clr.light}`}>
            <h2 className={`font-heading font-bold text-base ${clr.text} mb-1`}>{selectedLesson.title_en}</h2>
            <p className="text-slate-500 text-sm">{selectedLesson.title_ar}</p>
            <p className="text-slate-400 text-xs mt-1">{toAr(selectedLesson.questions.length)} questions</p>
          </div>

          {/* Questions preview */}
          <div className="space-y-2">
            {selectedLesson.questions.map((q, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl p-3 bg-white border border-slate-200">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white ${clr.bg}`}>{toAr(i + 1)}</div>
                <span className="text-sm text-slate-700 flex-1 truncate">{q.question_en}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{q.type === 'true_false' ? 'T/F' : 'MCQ'}</span>
              </div>
            ))}
          </div>

          <button onClick={startLesson} className="w-full rounded-2xl py-4 text-white font-bold text-base shadow-lg" style={{ background: 'linear-gradient(135deg,#263D84,#3E57A4)' }}>
            Start {toAr(selectedLesson.questions.length)} Questions →
          </button>
        </div>
      </div>
    );
  }

  // Unit view — lesson list
  if (selectedUnit) {
    return (
      <div className="space-y-5">
        <PageHeader
          title={selectedUnit.title_en}
          subtitle={`${toAr(selectedUnit.lessons.length)} goals · We Can! 3 Workbook`}
          breadcrumbs={[
            { label: 'Home', path: '/' },
            { label: 'We Can! 3 Workbook', path: '/english-grade3-s1-workbook' },
            { label: selectedUnit.title_en },
          ]}
        />
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <button onClick={backToHome} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800">
            <ChevronRight className="w-4 h-4" /> Back to Units
          </button>

          {/* Unit header */}
          <div className={`rounded-2xl p-5 text-white shadow-lg`} style={{ background: 'linear-gradient(135deg,#263D84,#3E57A4)' }}>
            <div className="text-4xl mb-2">{selectedUnit.icon}</div>
            <h2 className="font-heading font-bold text-xl">{selectedUnit.title_en}</h2>
            <p className="text-white/70 text-sm">{selectedUnit.title_ar}</p>
            <p className="text-white/50 text-xs mt-1">{toAr(selectedUnit.lessons.length)} learning goals</p>
          </div>

          <h3 className="font-bold text-slate-700 text-sm">Choose a Goal:</h3>
          <div className="space-y-2.5">
            {selectedUnit.lessons.map((lesson, li) => (
              <button key={lesson.id} onClick={() => openLesson(lesson)}
                className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 bg-white ${clr.border} ${clr.hover} hover:shadow-md transition-all text-start`}>
                <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 ${clr.light} ${clr.border} border-2`}>
                  <span className={`font-bold text-base ${clr.text}`}>G{li + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-semibold text-slate-800 text-sm leading-tight">{lesson.title_en}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{lesson.title_ar}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`text-xs font-bold ${clr.text}`}>{toAr(lesson.questions.length)}</span>
                  <span className="text-xs text-slate-400"> Q</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Home — unit cards
  return (
    <div className="space-y-5">
      <PageHeader
        title="We Can! 3 — Workbook Term 1"
        subtitle={`Grade 3 English · ${toAr(TOTAL_UNITS_WC3)} Units · ${toAr(TOTAL_LESSONS_WC3)} Goals · ${toAr(TOTAL_QUESTIONS_WC3)} Questions`}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'We Can! 3 Workbook' }]}
      />
      <div className="max-w-2xl mx-auto px-4 space-y-5">
        {/* Banner */}
        <div className="rounded-3xl overflow-hidden p-6 text-white shadow-xl" style={{ background: 'linear-gradient(135deg,#0a1628,#1a3a5a)' }}>
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-amber-400" />
            <div>
              <h1 className="font-heading font-bold text-xl">We Can! 3</h1>
              <p className="text-white/60 text-sm">Grade 3 English · Workbook · Term 1 · 2025</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {[
              { n: toAr(TOTAL_UNITS_WC3), l: 'Units' },
              { n: toAr(TOTAL_LESSONS_WC3), l: 'Goals' },
              { n: toAr(TOTAL_QUESTIONS_WC3), l: 'Questions' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-2.5 text-center">
                <p className="text-amber-300 font-bold text-lg">{s.n}</p>
                <p className="text-white/60 text-xs">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-3">Questions derived directly from textbook goals (Goals 01–29)</p>
        </div>

        <h2 className="font-heading font-bold text-slate-800">Choose a Unit:</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {WC3_UNITS.map((unit) => {
            const clr2 = UNIT_COLORS[unit.color] || UNIT_COLORS.teal;
            const totalUnitQ = unit.lessons.reduce((s, l) => s + l.questions.length, 0);
            return (
              <motion.button key={unit.id} onClick={() => openUnit(unit)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`relative rounded-3xl p-5 text-start overflow-hidden shadow-lg hover:shadow-xl transition-all text-white`}
                style={{ background: `linear-gradient(135deg,#263D84,#3E57A4)` }}>
                <div className="absolute top-3 right-3 text-3xl opacity-60">{unit.icon}</div>
                <div className="relative">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold mb-3 ${clr2.light} ${clr2.text}`}>
                    {toAr(unit.lessons.length)} Goals
                  </div>
                  <h3 className="font-heading font-bold text-base leading-tight mb-0.5">{unit.title_en}</h3>
                  <p className="text-white/60 text-xs">{unit.title_ar}</p>
                  <div className="mt-3 text-white/50 text-xs">{toAr(totalUnitQ)} questions</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}