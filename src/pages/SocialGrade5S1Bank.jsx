import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CURRICULUM, ALL_QUESTIONS, getByLesson, TOTAL } from '@/lib/socialGrade5S1Data';
import { Home, ChevronRight, ChevronLeft, Trophy, Star, Crown, Lightbulb, RotateCcw, BookOpen, Filter, ArrowRight, ArrowLeft, CheckCircle2, XCircle, Award, Target, Zap, Moon, Sun, Printer } from 'lucide-react';

// ===================== HELPERS =====================
const AR = { fontFamily: "'IBM Plex Sans Arabic', Tajawal, sans-serif" };

const SEAL = () => (
  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black"
    style={{ background: 'linear-gradient(135deg,#c9a227,#f0c93a,#a07820)', boxShadow: '0 0 8px #c9a227aa', animation: 'sealGlow 2s ease-in-out infinite alternate' }}>
    ⭐
  </div>
);

const TeacherSVG = ({ speaking }) => (
  <motion.div animate={speaking ? { y: [0, -4, 0] } : {}} transition={{ repeat: Infinity, duration: 1.5 }}>
    <svg viewBox="0 0 160 220" className="w-28 h-36" aria-hidden>
      <defs>
        <linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6D2AE" /><stop offset="100%" stopColor="#E8B98E" />
        </linearGradient>
        <linearGradient id="suit2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a6e" /><stop offset="100%" stopColor="#0f2040" />
        </linearGradient>
      </defs>
      {/* Body */}
      <path d="M30 220 Q30 160 80 152 Q130 160 130 220 Z" fill="url(#suit2)" />
      <path d="M64 152 L80 170 L96 152 L88 148 L80 164 L72 148 Z" fill="#FFF" />
      <rect x="74" y="148" width="12" height="24" fill="url(#skin2)" />
      {/* Head */}
      <ellipse cx="80" cy="90" rx="38" ry="42" fill="url(#skin2)" />
      {/* Ears */}
      <ellipse cx="42" cy="93" rx="7" ry="11" fill="#E8B98E" />
      <ellipse cx="118" cy="93" rx="7" ry="11" fill="#E8B98E" />
      {/* Hair */}
      <path d="M42 82 Q40 52 62 44 Q80 38 98 44 Q120 52 118 82 Q112 66 100 62 Q80 56 60 62 Q48 66 42 82 Z" fill="#1a110a" />
      {/* Glasses */}
      <circle cx="64" cy="92" r="13" fill="none" stroke="#5A4A2A" strokeWidth="2.5" />
      <circle cx="96" cy="92" r="13" fill="none" stroke="#5A4A2A" strokeWidth="2.5" />
      <line x1="77" y1="92" x2="83" y2="92" stroke="#5A4A2A" strokeWidth="2.5" />
      <line x1="51" y1="90" x2="43" y2="86" stroke="#5A4A2A" strokeWidth="2.5" />
      <line x1="109" y1="90" x2="117" y2="86" stroke="#5A4A2A" strokeWidth="2.5" />
      {/* Eyes */}
      <circle cx="64" cy="93" r="4" fill="#1a1a2e" />
      <circle cx="96" cy="93" r="4" fill="#1a1a2e" />
      {/* Nose */}
      <path d="M80 102 L76 112 Q80 115 84 112 Z" fill="#d99a6a" />
      {/* Mouth - smile when speaking */}
      <path d={speaking ? "M68 124 Q80 136 92 124" : "M70 122 Q80 130 90 122"} fill="none" stroke="#8C5A3A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Chalk pointer arm */}
      <motion.g animate={{ rotate: speaking ? [0, 8, -4, 0] : 0 }} transition={{ repeat: speaking ? Infinity : 0, duration: 1.2 }} style={{ transformOrigin: '130px 160px' }}>
        <path d="M130 160 Q144 148 150 136" fill="none" stroke="url(#suit2)" strokeWidth="14" strokeLinecap="round" />
        <line x1="150" y1="136" x2="158" y2="100" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round" />
        <circle cx="158" cy="100" r="5" fill="#e8c04a" />
      </motion.g>
    </svg>
  </motion.div>
);

// Typewriter chalkboard
function Chalkboard({ text, onDone }) {
  const [shown, setShown] = useState('');
  const idx = useRef(0);
  useEffect(() => {
    setShown(''); idx.current = 0;
    const t = setInterval(() => {
      idx.current++;
      setShown(text.slice(0, idx.current));
      if (idx.current >= text.length) { clearInterval(t); if (onDone) onDone(); }
    }, 22);
    return () => clearInterval(t);
  }, [text]);
  return (
    <div className="relative rounded-xl overflow-hidden border-8 border-[#7a4a1e] shadow-2xl" style={{ background: '#1a5c35' }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '6px 6px' }} />
      <div className="relative p-4 min-h-[90px]">
        <div className="flex gap-1 mb-2">
          {[1, 2, 3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/25" />)}
        </div>
        <p dir="rtl" className="text-white text-sm sm:text-base leading-relaxed font-bold" style={{ ...AR, textShadow: '0 0 2px rgba(255,255,255,.5)' }}>
          {shown === text ? shown : <>{shown}<span className="inline-block w-1.5 h-4 bg-white/80 animate-pulse align-middle" /></>}
        </p>
      </div>
    </div>
  );
}

// Mini confetti
function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div key={i} className="absolute w-3 h-3 rounded-sm"
          style={{ left: `${Math.random() * 100}%`, top: '-10px', background: ['#c9a227', '#059669', '#0891b2', '#e91e8c', '#d97706'][i % 5] }}
          animate={{ y: window.innerHeight + 20, rotate: 360, opacity: [1, 1, 0] }}
          transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5 }} />
      ))}
    </div>
  );
}

// ===================== QUESTION RENDERERS =====================
function MCQuestion({ q, answered, onAnswer }) {
  const [sel, setSel] = useState(null);
  const colors = [
    { base: 'border-pink-300 bg-pink-50 text-pink-800 hover:border-pink-500', right: 'border-emerald-400 bg-emerald-50', wrong: 'border-red-400 bg-red-50', label: 'أ' },
    { base: 'border-sky-300 bg-sky-50 text-sky-800 hover:border-sky-500', right: 'border-emerald-400 bg-emerald-50', wrong: 'border-red-400 bg-red-50', label: 'ب' },
    { base: 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:border-emerald-500', right: 'border-emerald-400 bg-emerald-50', wrong: 'border-red-400 bg-red-50', label: 'ج' },
    { base: 'border-amber-300 bg-amber-50 text-amber-800 hover:border-amber-500', right: 'border-emerald-400 bg-emerald-50', wrong: 'border-red-400 bg-red-50', label: 'د' },
  ];
  const pick = (i) => {
    if (sel !== null || answered) return;
    setSel(i); onAnswer(i === q.correct);
  };
  return (
    <div className="space-y-3">
      {q.options.map((opt, i) => {
        const show = sel !== null;
        const isCorrect = i === q.correct;
        const isPicked = i === sel;
        const c = colors[i % 4];
        return (
          <button key={i} onClick={() => pick(i)} disabled={show} style={AR}
            className={`w-full text-right px-5 py-4 rounded-2xl border-2 text-lg font-black transition-all flex items-center gap-3
              ${!show ? c.base + ' cursor-pointer hover:scale-[1.01]' : ''}
              ${show && isCorrect ? 'border-emerald-400 bg-emerald-50 text-emerald-800' : ''}
              ${show && isPicked && !isCorrect ? 'border-red-400 bg-red-50 text-red-800' : ''}
              ${show && !isPicked && !isCorrect ? 'border-slate-200 bg-white text-slate-400' : ''}`}>
            {show && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />}
            {show && isPicked && !isCorrect && <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />}
            <span className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
              style={{ background: show ? (isCorrect ? '#d1fae5' : isPicked ? '#fee2e2' : '#f0f0f0') : '#f0f0f0' }}>
              {c.label}
            </span>
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

function TFQuestion({ q, onAnswer, answered }) {
  const [sel, setSel] = useState(null);
  const pick = (v) => {
    if (sel !== null || answered) return;
    setSel(v); onAnswer(v === q.correct);
  };
  return (
    <div className="flex gap-4">
      {[{ label: '✓ صحيح', val: 0, col: 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:border-emerald-500' },
        { label: '✗ خطأ', val: 1, col: 'bg-red-50 border-red-300 text-red-700 hover:border-red-500' }].map(({ label, val, col }) => {
        const show = sel !== null;
        const isPicked = sel === val;
        const isCorrect = val === q.correct;
        return (
          <button key={val} onClick={() => pick(val)} disabled={show} style={AR}
            className={`flex-1 py-7 rounded-2xl border-2 text-xl font-black transition-all
              ${!show ? col + ' cursor-pointer' : ''}
              ${show && isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : ''}
              ${show && isPicked && !isCorrect ? 'bg-red-50 border-red-500 text-red-800' : ''}
              ${show && !isPicked && !isCorrect ? 'bg-slate-50 border-slate-200 text-slate-400' : ''}`}>{label}</button>
        );
      })}
    </div>
  );
}

function ClassifyQ({ q, onAnswer }) {
  const [bins, setBins] = useState(() => q.categories.map(() => []));
  const [pool, setPool] = useState(() => [...q.items].sort(() => Math.random() - 0.5));
  const catColors = ['bg-blue-500', 'bg-orange-500', 'bg-purple-500', 'bg-teal-500'];
  const binColors = ['bg-blue-50 border-blue-200', 'bg-orange-50 border-orange-200', 'bg-purple-50 border-purple-200', 'bg-teal-50 border-teal-200'];
  const pick = (catIdx) => {
    if (!pool.length) return;
    const item = pool[0];
    const nb = bins.map((b, i) => i === catIdx ? [...b, item] : b);
    const np = pool.slice(1);
    setBins(nb); setPool(np);
    if (!np.length) {
      let ok = true;
      nb.forEach((bin, ci) => bin.forEach(it => { if (it.cat !== ci) ok = false; }));
      onAnswer(ok);
    }
  };
  return (
    <div className="space-y-4">
      {pool.length > 0 && (
        <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-center">
          <p className="text-sm font-black text-amber-700 mb-3" style={AR}>صنِّف هذا العنصر:</p>
          <span className="inline-block bg-white border-2 border-amber-300 rounded-xl px-5 py-3 text-xl font-black text-slate-800 mb-4" style={AR}>{pool[0].text}</span>
          <div className="flex flex-wrap gap-2 justify-center">
            {q.categories.map((cat, i) => (
              <button key={i} onClick={() => pick(i)} style={AR}
                className={`px-4 py-2 rounded-xl text-white text-sm font-black transition-transform hover:scale-105 ${catColors[i % 4]}`}>{cat}</button>
            ))}
          </div>
        </div>
      )}
      <div className={`grid gap-3 grid-cols-2`}>
        {bins.map((bin, i) => (
          <div key={i} className={`rounded-xl border-2 p-3 min-h-[60px] ${binColors[i % 4]}`}>
            <p className="text-xs font-black mb-2 text-slate-600" style={AR}>{q.categories[i]}</p>
            <div className="flex flex-wrap gap-1">
              {bin.map((it, j) => <span key={j} className="text-sm bg-white border rounded-lg px-2 py-0.5 font-bold text-slate-700" style={AR}>{it.text}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderingQ({ q, onAnswer }) {
  const [items, setItems] = useState(() => [...q.items].sort(() => Math.random() - 0.5));
  const [checked, setChecked] = useState(false);
  const move = (from, to) => { const a = [...items]; const [m] = a.splice(from, 1); a.splice(to, 0, m); setItems(a); };
  const check = () => {
    setChecked(true);
    onAnswer(items.join('|') === q.items.join('|'));
  };
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500 font-bold" style={AR}>استخدم الأسهم لترتيب العناصر:</p>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-xl px-4 py-3">
          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base font-black flex-shrink-0" style={AR}>{i + 1}</span>
          <span className="flex-1 text-lg font-black text-slate-800 text-right" style={AR}>{item}</span>
          <div className="flex flex-col gap-1">
            <button disabled={i === 0 || checked} onClick={() => move(i, i - 1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xl leading-none">▲</button>
            <button disabled={i === items.length - 1 || checked} onClick={() => move(i, i + 1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xl leading-none">▼</button>
          </div>
        </div>
      ))}
      {!checked && (
        <button onClick={check} style={AR}
          className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-black transition-colors">تحقق من الترتيب ✓</button>
      )}
    </div>
  );
}

function MatchingQ({ q, onAnswer }) {
  const [matchSel, setMatchSel] = useState(null);
  const [conns, setConns] = useState({});
  const pick = (side, idx) => {
    if (!matchSel) { setMatchSel({ side, idx }); return; }
    if (matchSel.side === side) { setMatchSel({ side, idx }); return; }
    const rIdx = side === 'right' ? idx : matchSel.idx;
    const lIdx = side === 'left' ? idx : matchSel.idx;
    const nc = { ...conns, [rIdx]: lIdx };
    setConns(nc); setMatchSel(null);
    if (Object.keys(nc).length === q.pairs.length)
      onAnswer(Object.entries(nc).every(([r, l]) => parseInt(r) === l));
  };
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-slate-500" style={AR}>اضغط من العمود الأيمن ثم العمود الأيسر:</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {q.pairs.map((p, i) => (
            <button key={i} onClick={() => pick('right', i)} style={AR}
              className={`w-full text-right px-3 py-3 rounded-xl border-2 text-sm font-black transition-all
                ${matchSel?.side === 'right' && matchSel?.idx === i ? 'border-blue-500 bg-blue-50' : conns[i] !== undefined ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white hover:border-blue-300'}`}>{p.right}</button>
          ))}
        </div>
        <div className="space-y-2">
          {q.pairs.map((p, i) => (
            <button key={i} onClick={() => pick('left', i)} style={AR}
              className={`w-full text-right px-3 py-3 rounded-xl border-2 text-sm font-black transition-all
                ${matchSel?.side === 'left' && matchSel?.idx === i ? 'border-blue-500 bg-blue-50' : Object.values(conns).includes(i) ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white hover:border-blue-300'}`}>{p.left}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===================== FEEDBACK BLOCK =====================
function FeedbackBlock({ q, isCorrect, onNext, isLast, lang }) {
  const [showChalk, setShowChalk] = useState(false);
  const [confetti, setConfetti] = useState(false);
  useEffect(() => {
    if (isCorrect) { setConfetti(true); setTimeout(() => setConfetti(false), 2500); }
    else setShowChalk(true);
  }, [isCorrect]);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {confetti && <Confetti />}

      {isCorrect ? (
        <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-4 space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            <p className="text-xl font-black text-emerald-800" style={AR}>أحسنت! إجابة صحيحة 🌟</p>
          </div>
          {q.golden_rule && (
            <div className="rounded-xl bg-amber-50 border-2 border-amber-300 p-3 flex items-start gap-3">
              <Crown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-amber-600 mb-1" style={AR}>👑 القاعدة الذهبية</p>
                <p className="text-base font-black text-amber-900 leading-relaxed" style={AR}>{q.golden_rule}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-2xl bg-white border-2 border-red-100 p-4 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-6 h-6 text-red-500" />
            <p className="text-base font-black text-red-700" style={AR}>إجابة خاطئة — لِنَتعلَّم معًا</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 self-center">
              <TeacherSVG speaking={showChalk} />
            </div>
            <div className="flex-1">
              {showChalk && <Chalkboard text={q.explanation} />}
            </div>
          </div>
          {q.golden_rule && (
            <div className="rounded-xl bg-amber-50 border-2 border-amber-300 p-3 flex items-start gap-3">
              <Crown className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-amber-600 mb-1" style={AR}>👑 القاعدة الذهبية</p>
                <p className="text-base font-black text-amber-900" style={AR}>{q.golden_rule}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <button onClick={onNext} style={AR}
        className="w-full mt-4 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-black flex items-center justify-center gap-2 transition-colors">
        {isLast ? <><Trophy className="w-6 h-6" />إنهاء الدرس</> : <>السؤال التالي <ArrowLeft className="w-6 h-6" /></>}
      </button>
    </motion.div>
  );
}

// ===================== LESSON RUNNER =====================
function LessonRunner({ lesson, onBack }) {
  const questions = getByLesson(lesson.id);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [done, setDone] = useState(false);
  const topRef = useRef(null);

  const q = questions[idx];
  const handleAnswer = (ok) => {
    setAnswered(true); setCorrect(ok);
    if (ok) setScore(s => s + 1);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };
  const next = () => {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setIdx(i => i + 1); setAnswered(false); setCorrect(null);
  };

  if (!questions.length) return (
    <div className="p-8 text-center" style={AR}>
      <BookOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
      <p className="font-black text-slate-500">لا توجد أسئلة لهذا الدرس بعد.</p>
      <button onClick={onBack} className="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-black" style={AR}>رجوع</button>
    </div>
  );

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const badge = pct >= 90 ? '🏆' : pct >= 70 ? '🥈' : pct >= 50 ? '👍' : '📚';
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 text-center space-y-5">
        <div className="text-6xl mb-2">{badge}</div>
        <h2 className="text-3xl font-black text-slate-800" style={AR}>
          {pct >= 90 ? 'ممتاز! أداء رائع' : pct >= 70 ? 'جيد جدًا' : pct >= 50 ? 'جيد! واصل' : 'راجع الدرس مجدَّدًا'}
        </h2>
        <p className="text-xl text-slate-500 font-bold" style={AR}>{score} / {questions.length} ({pct}٪)</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setCorrect(null); setDone(false); }}
            className="px-6 py-3 rounded-2xl border-2 border-slate-300 font-black text-lg flex items-center gap-2" style={AR}>
            <RotateCcw className="w-5 h-5" />إعادة
          </button>
          <button onClick={onBack} className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center gap-2" style={AR}>
            <ArrowRight className="w-5 h-5" />رجوع للدروس
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4" ref={topRef}>
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-3">
          <div className="bg-emerald-500 h-3 rounded-full transition-all" style={{ width: `${(idx / questions.length) * 100}%` }} />
        </div>
        <span className="text-base font-black text-slate-500 flex-shrink-0" style={AR}>{idx + 1}/{questions.length}</span>
        <span className="text-base font-black text-emerald-600 flex-shrink-0" style={AR}>✓ {score}</span>
        <SEAL />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-5">
          {/* Badges */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-black" style={AR}>📄 {q.page_ref}</span>
            <div className="flex gap-2">
              <span className={`text-xs rounded-full px-3 py-1 font-black ${q.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-700' : q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`} style={AR}>
                {q.difficulty === 'easy' ? 'سهل' : q.difficulty === 'medium' ? 'متوسط' : 'صعب'}
              </span>
              <span className="text-xs bg-slate-100 text-slate-500 rounded-full px-3 py-1 font-black" style={AR}>
                {q.bloom === 'remember' ? 'تذكُّر' : q.bloom === 'understand' ? 'فهم' : q.bloom === 'apply' ? 'تطبيق' : q.bloom === 'analyze' ? 'تحليل' : 'تقويم'}
              </span>
            </div>
          </div>

          {/* Question */}
          <p className="text-xl sm:text-2xl font-black text-slate-800 leading-loose" dir="rtl" style={AR}>{idx + 1}. {q.q}</p>

          {/* Book paragraph */}
          {q.explanation && !answered && (
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <p className="text-xs font-black text-amber-600 mb-1" style={AR}>🔖 فقرة من الكتاب — {q.page_ref}</p>
              <p className="text-sm text-amber-900 font-bold leading-relaxed" dir="rtl" style={AR}>
                {q.explanation.length > 120 ? q.explanation.slice(0, 120) + '...' : q.explanation}
              </p>
            </div>
          )}

          {/* Render question type */}
          {!answered && q.type === 'mc' && <MCQuestion q={q} answered={answered} onAnswer={handleAnswer} />}
          {!answered && q.type === 'tf' && <TFQuestion q={q} answered={answered} onAnswer={handleAnswer} />}
          {!answered && q.type === 'classify' && <ClassifyQ q={q} onAnswer={handleAnswer} />}
          {!answered && q.type === 'ordering' && <OrderingQ q={q} onAnswer={handleAnswer} />}
          {!answered && q.type === 'matching' && <MatchingQ q={q} onAnswer={handleAnswer} />}

          {/* If still showing after answer (mc/tf show selected) */}
          {answered && q.type === 'mc' && <MCQuestion q={q} answered={answered} onAnswer={() => {}} />}
          {answered && q.type === 'tf' && <TFQuestion q={q} answered={answered} onAnswer={() => {}} />}

          {answered && <FeedbackBlock q={q} isCorrect={correct} onNext={next} isLast={idx + 1 >= questions.length} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ===================== UNIT CARD =====================
function UnitCard({ unit, onClick, idx }) {
  const count = unit.lessons.reduce((s, l) => s + getByLesson(l.id).length, 0);
  return (
    <motion.button onClick={onClick} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.07 }}
      className="w-full text-right bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-opacity-70 transition-all group">
      <div className="h-3" style={{ background: unit.color }} />
      <div className="p-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: unit.bg }}>
          {unit.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-black text-slate-800 leading-tight" style={AR}>{unit.title}</h3>
          <p className="text-sm text-slate-500 font-bold mt-1" style={AR}>ص {unit.pages} · {unit.lessons.length} دروس · {count} سؤالًا</p>
        </div>
        <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-slate-700 flex-shrink-0" />
      </div>
    </motion.button>
  );
}

// ===================== LESSON LIST =====================
function LessonList({ unit, onSelect, onBack }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-xl font-black text-slate-800" style={AR}>{unit.icon} {unit.title}</h2>
          <p className="text-sm text-slate-500 font-bold" style={AR}>اختَرِ الدرس لتبدأ التدريب</p>
        </div>
      </div>
      <div className="space-y-3">
        {unit.lessons.map((lesson, i) => {
          const count = getByLesson(lesson.id).length;
          return (
            <motion.button key={lesson.id} onClick={() => onSelect(lesson)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
              className="w-full text-right bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 font-black"
                style={{ background: unit.bg, color: unit.color }}>
                {lesson.page}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-black text-slate-800" style={AR}>{lesson.title}</h3>
                <p className="text-sm text-slate-500 font-bold" style={AR}>{count} سؤالًا</p>
              </div>
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-500" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ===================== MAIN PAGE =====================
export default function SocialGrade5S1Bank() {
  const [view, setView] = useState('home'); // home | unit | lesson | quiz
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const openUnit = (unit) => { setSelectedUnit(unit); setView('unit'); };
  const openLesson = (lesson) => { setSelectedLesson(lesson); setView('quiz'); };
  const goHome = () => { setView('home'); setSelectedUnit(null); setSelectedLesson(null); };
  const goUnit = () => { setView('unit'); setSelectedLesson(null); };

  return (
    <div dir="rtl" className="min-h-screen" style={{ background: '#faf8f0' }}>
      <style>{`
        @keyframes sealGlow { from { box-shadow: 0 0 6px #c9a22799; } to { box-shadow: 0 0 16px #c9a227cc; } }
      `}</style>

      {/* QUIZ VIEW */}
      {view === 'quiz' && selectedLesson && (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          <div className="rounded-2xl p-5 text-white" style={{ background: selectedUnit?.color || '#1e6b3a' }}>
            <div className="flex items-center gap-3">
              <button onClick={goUnit} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <div>
                <p className="text-sm text-white/70 font-bold" style={AR}>{selectedUnit?.icon} {selectedUnit?.title}</p>
                <h1 className="text-lg font-black leading-tight" style={AR}>{selectedLesson.title}</h1>
              </div>
              <div className="mr-auto"><SEAL /></div>
            </div>
          </div>
          <LessonRunner lesson={selectedLesson} onBack={goUnit} />
        </div>
      )}

      {/* UNIT VIEW */}
      {view === 'unit' && selectedUnit && (
        <div className="max-w-2xl mx-auto px-4 py-6">
          <LessonList unit={selectedUnit} onSelect={openLesson} onBack={goHome} />
        </div>
      )}

      {/* HOME VIEW */}
      {view === 'home' && (
        <>
          {/* Hero */}
          <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1a3a1a 0%,#1e6b3a 50%,#0d9152 100%)' }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 1px)', backgroundSize: '20px 20px' }} />
            {/* Islamic pattern corners */}
            {['top-4 right-4', 'top-4 left-4', 'bottom-4 right-4', 'bottom-4 left-4'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} text-white/10 text-4xl pointer-events-none`}>✦</div>
            ))}
            <div className="relative max-w-3xl mx-auto px-4 py-12 text-center text-white">
              <Link to="/question-bank/grades" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white mb-5 font-bold" style={AR}>
                <Home className="w-4 h-4" />بنوك الأسئلة
              </Link>
              <div className="flex justify-center gap-1 mb-3 text-2xl">
                <span className="animate-pulse">⭐</span><span>⭐</span><span className="animate-pulse">⭐</span>
              </div>
              <p className="text-base text-white/70 font-bold mb-1" style={AR}>المملكة العربية السعودية | وزارة التعليم | {CURRICULUM.year}</p>
              <h1 className="text-4xl sm:text-5xl font-black mb-2" style={AR}>{CURRICULUM.subject}</h1>
              <h2 className="text-xl font-black text-white/90" style={AR}>{CURRICULUM.grade}</h2>
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                {[{ n: CURRICULUM.units.length, l: 'وحدة' }, { n: CURRICULUM.units.reduce((s, u) => s + u.lessons.length, 0), l: 'درسًا' }, { n: TOTAL, l: 'سؤالًا' }].map((s, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl px-6 py-3 border border-white/20">
                    <p className="text-3xl font-black" style={AR}>{s.n}</p>
                    <p className="text-white/70 text-sm font-bold" style={AR}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Units */}
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-black text-slate-800 mb-6" style={AR}>📚 اختَرِ الوحدة وابدأ التدريب</h2>

            {/* Curriculum summary */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-700 mb-3" style={AR}>🗂️ فهرس الكتاب</h3>
              <div className="space-y-2">
                {CURRICULUM.units.map(unit => (
                  <div key={unit.id} className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: unit.color }} />
                    <span className="font-black text-slate-700" style={AR}>{unit.title}</span>
                    <span className="text-slate-400 font-bold mr-auto" style={AR}>ص {unit.pages}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {CURRICULUM.units.map((unit, i) => (
                <UnitCard key={unit.id} unit={unit} onClick={() => openUnit(unit)} idx={i} />
              ))}
            </div>

            {/* Tips */}
            <div className="mt-8 rounded-2xl p-5 border-2 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-black text-amber-800 text-base mb-2" style={AR}>💡 نصيحة للطالب</p>
                  <p className="text-sm text-amber-700 font-bold leading-relaxed" style={AR}>
                    كل سؤال مرتبط بفقرة محدَّدة من الكتاب. عند الخطأ سيشرح لك المعلم الإجابة على السبورة الخضراء مع القاعدة الذهبية. كرِّر الدرس حتى تصل لـ 90٪.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}