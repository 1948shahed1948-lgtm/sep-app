import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, XCircle, Crown, BookOpen, Home, RotateCcw, ArrowLeft } from 'lucide-react';
import { SCI4_META, SCI4_UNITS, SCI4_ALL_QUESTIONS, TOTAL_QUESTIONS_SCI4 } from '@/lib/scienceGrade4S1Bank';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const DIFF_LABEL = { easy: 'سهل', medium: 'متوسط', hard: 'صعب' };
const DIFF_COLOR = { easy: 'bg-emerald-100 text-emerald-700', medium: 'bg-amber-100 text-amber-700', hard: 'bg-red-100 text-red-700' };
const BLOOM_LABEL = { remember: 'تذكر', understand: 'فهم', apply: 'تطبيق', analyze: 'تحليل', create: 'تركيب', evaluate: 'تقويم' };
const TYPE_LABEL = { multipleChoice: 'اختيار متعدد', trueFalse: 'صح / خطأ', ordering: 'ترتيب', classify: 'تصنيف' };

// ── Teacher SVG ───────────────────────────────────────────────────────────
function TeacherSVG({ animate }) {
  return (
    <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={animate ? 'animate-bounce' : ''} style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
      <ellipse cx="40" cy="106" rx="22" ry="5" fill="#e8d5b7" opacity="0.4"/>
      <rect x="25" y="58" width="30" height="42" rx="8" fill="#1e3a6e"/>
      <polygon points="40,60 36,72 40,78 44,72" fill="#c9a227"/>
      <circle cx="40" cy="46" r="16" fill="#f5d0a9"/>
      <ellipse cx="40" cy="34" rx="16" ry="8" fill="#3d2b1f"/>
      <circle cx="35" cy="44" r="2.5" fill="white"/>
      <circle cx="45" cy="44" r="2.5" fill="white"/>
      <circle cx="35.8" cy="44.8" r="1.5" fill="#2c1810"/>
      <circle cx="45.8" cy="44.8" r="1.5" fill="#2c1810"/>
      <circle cx="36.3" cy="44.3" r="0.5" fill="white"/>
      <circle cx="46.3" cy="44.3" r="0.5" fill="white"/>
      <path d="M34 50 Q40 54 46 50" stroke="#c0392b" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <circle cx="36" cy="44" r="4" stroke="#4a3000" strokeWidth="1.2" fill="none"/>
      <circle cx="44" cy="44" r="4" stroke="#4a3000" strokeWidth="1.2" fill="none"/>
      <line x1="40" y1="44" x2="40.5" y2="44" stroke="#4a3000" strokeWidth="1.2"/>
      <rect x="52" y="58" width="3" height="14" rx="1.5" fill="white" transform="rotate(15 52 58)"/>
      <rect x="12" y="60" width="14" height="7" rx="3.5" fill="#1e3a6e" transform="rotate(-15 12 60)"/>
    </svg>
  );
}

// ── Green Blackboard ──────────────────────────────────────────────────────
function Blackboard({ text, onDone }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); if (onDone) onDone(); }
    }, 20);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#5C3A1E', background: '#1a3a2a' }}>
      <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: '#5C3A1E' }}>
        {['#ef4444','#f59e0b','#22c55e'].map((c,i) => <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }}/>)}
        <span className="text-xs text-amber-200 font-mono mr-auto">السبورة الخضراء 🎓</span>
      </div>
      <div className="p-4 font-mono text-green-100 text-sm leading-relaxed min-h-20 whitespace-pre-wrap">
        {displayed}<span className="animate-pulse text-green-300">▌</span>
      </div>
    </div>
  );
}

// ── Golden Rule Box ───────────────────────────────────────────────────────
function GoldenBox({ text }) {
  return (
    <div className="rounded-xl p-3 border-2 mt-2" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fff8dc)' }}>
      <div className="flex items-center gap-2 mb-1">
        <Crown className="w-4 h-4 text-amber-600" />
        <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
      </div>
      <p className="text-slate-800 text-sm font-medium">{text}</p>
    </div>
  );
}

// ── MCQ ──────────────────────────────────────────────────────────────────
function MCQuestion({ q, onAnswer, answered }) {
  const optColors = ['#e91e8c','#0891b2','#059669','#d97706'];
  const optLetters = ['أ','ب','ج','د'];
  return (
    <div className="space-y-2.5">
      {q.options.map((opt, i) => {
        const isCorrect = opt.correct, isChosen = answered?.chosen === i;
        const showOk = answered && isCorrect, showBad = answered && isChosen && !isCorrect;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(i, isCorrect)}
            className={`w-full text-right px-4 py-3 rounded-xl border-2 transition-all flex items-center gap-3 disabled:cursor-default
              ${showOk ? 'border-emerald-400 bg-emerald-50' : showBad ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/20'}`}>
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
              style={{ background: optColors[i] }}>{optLetters[i]}</div>
            <span className="flex-1 font-body text-slate-800 text-sm">{opt.text}</span>
            {showOk && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
            {showBad && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
          </button>
        );
      })}
    </div>
  );
}

// ── True/False ────────────────────────────────────────────────────────────
function TFQuestion({ q, onAnswer, answered }) {
  const opts = [{ val: 'true', label: '✓ صحيح', color: '#059669' }, { val: 'false', label: '✗ خطأ', color: '#dc2626' }];
  return (
    <div className="grid grid-cols-2 gap-3">
      {opts.map(({ val, label, color }) => {
        const isChosen = answered?.chosen === val, isCorrect = val === q.correctAnswer;
        const showOk = answered && isCorrect, showBad = answered && isChosen && !isCorrect;
        return (
          <button key={val} disabled={!!answered} onClick={() => !answered && onAnswer(val, val === q.correctAnswer)}
            className={`py-5 rounded-2xl border-2 font-bold text-base transition-all
              ${showOk ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : showBad ? 'border-red-400 bg-red-50 text-red-700' : 'border-slate-200 bg-white hover:border-emerald-400'}`}>
            <span style={{ color: showOk || showBad ? undefined : color }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Ordering ──────────────────────────────────────────────────────────────
function OrderingQuestion({ q, onAnswer }) {
  const [items, setItems] = useState(() => q.items.map((t, i) => ({ t, orig: i })).sort(() => Math.random() - 0.5));
  const [submitted, setSubmitted] = useState(false);
  const correct = items.every((it, i) => it.orig === q.correctOrder[i]);
  const move = (from, to) => { if (submitted) return; const n = [...items]; const [m] = n.splice(from, 1); n.splice(to, 0, m); setItems(n); };
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500 mb-2">استخدم الأسهم لترتيب العناصر:</p>
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i+1)}</span>
          <div className="flex-1 rounded-xl p-2.5 border-2 border-slate-200 bg-white text-slate-800 text-sm text-right">{it.t}</div>
          <div className="flex flex-col gap-1">
            <button disabled={i === 0 || submitted} onClick={() => move(i, i-1)} className="p-1 rounded bg-slate-100 disabled:opacity-30 text-xs">▲</button>
            <button disabled={i === items.length-1 || submitted} onClick={() => move(i, i+1)} className="p-1 rounded bg-slate-100 disabled:opacity-30 text-xs">▼</button>
          </div>
        </div>
      ))}
      {!submitted && <button onClick={() => { setSubmitted(true); onAnswer(correct); }} className="w-full mt-2 rounded-xl bg-primary text-white font-bold py-2.5 text-sm">تحقق ✓</button>}
      {submitted && <div className={`rounded-xl p-3 text-sm font-bold ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{correct ? '✓ ترتيب صحيح!' : `✗ الترتيب: ${q.correctOrder.map(i => q.items[i]).join(' ← ')}`}</div>}
    </div>
  );
}

// ── Classify ──────────────────────────────────────────────────────────────
function ClassifyQuestion({ q, onAnswer }) {
  const [buckets, setBuckets] = useState(q.categories.map(() => []));
  const [pool, setPool] = useState(q.items.map((it, i) => ({ ...it, id: i })));
  const [sel, setSel] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const moveTo = (ci) => {
    if (submitted || sel === null) return;
    setBuckets(buckets.map((b, i) => i === ci ? [...b.filter(x => x.id !== sel.id), sel] : b.filter(x => x.id !== sel.id)));
    setPool(pool.filter(x => x.id !== sel.id)); setSel(null);
  };
  const remove = (item, ci) => { if (submitted) return; setBuckets(buckets.map((b, i) => i === ci ? b.filter(x => x.id !== item.id) : b)); setPool([...pool, item]); };
  const isCorrect = q.items.every((it, i) => { const bIdx = buckets.findIndex(b => b.some(x => x.id === i)); return bIdx === it.correct_category; });
  return (
    <div className="space-y-3">
      {pool.length > 0 && (
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-500 mb-2">انقر عنصراً ثم التصنيف المناسب:</p>
          <div className="flex flex-wrap gap-2">{pool.map(it => (
            <span key={it.id} onClick={() => setSel(it)}
              className={`px-3 py-1.5 rounded-lg border cursor-pointer text-sm ${sel?.id === it.id ? 'border-emerald-500 bg-emerald-50 font-bold' : 'bg-white border-slate-300 hover:border-emerald-400'}`}>{it.text}</span>
          ))}</div>
        </div>
      )}
      <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${Math.min(q.categories.length, 3)},1fr)` }}>
        {q.categories.map((cat, ci) => (
          <div key={ci} onClick={() => moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-3 min-h-20 cursor-pointer hover:border-emerald-300 transition-colors">
            <h4 className="font-bold text-xs text-center mb-2 text-slate-700 border-b pb-1">{cat}</h4>
            <div className="space-y-1.5">{buckets[ci].map(it => (
              <div key={it.id} onClick={e => { e.stopPropagation(); remove(it, ci); }}
                className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between items-center cursor-pointer hover:bg-red-50">
                <span>{it.text}</span><span className="text-red-400">✕</span>
              </div>
            ))}</div>
          </div>
        ))}
      </div>
      {pool.length === 0 && !submitted && <button onClick={() => { setSubmitted(true); onAnswer(isCorrect); }} className="w-full rounded-xl bg-primary text-white font-bold py-2.5 text-sm">تحقق ✓</button>}
      {submitted && <div className={`rounded-xl p-3 text-sm font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ تصنيف صحيح!' : '✗ راجع التصنيف'}</div>}
    </div>
  );
}

// ── Wrong Answer Panel (Teacher + Blackboard) ─────────────────────────────
function WrongAnswerPanel({ q }) {
  const [bbDone, setBbDone] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mt-3">
      <div className="rounded-xl p-3 border-r-4 border-red-500 bg-red-50 text-xs text-red-800">
        <strong>📖 مرجع الكتاب (ص {q.page}):</strong> {q.paragraph}
      </div>
      <div className="flex items-end gap-3">
        <div className="flex-shrink-0"><TeacherSVG animate={!bbDone} /></div>
        <div className="flex-1"><Blackboard text={q.explanation} onDone={() => setBbDone(true)} /></div>
      </div>
      {bbDone && <GoldenBox text={q.goldenRule} />}
    </motion.div>
  );
}

// ── Question Renderer ─────────────────────────────────────────────────────
function QuestionRenderer({ q, onAnswer, answered }) {
  if (q.type === 'multipleChoice') return <MCQuestion q={q} onAnswer={onAnswer} answered={answered} />;
  if (q.type === 'trueFalse') return <TFQuestion q={q} onAnswer={onAnswer} answered={answered} />;
  if (q.type === 'ordering') return <OrderingQuestion q={q} onAnswer={(ok) => onAnswer(null, ok)} />;
  if (q.type === 'classify') return <ClassifyQuestion q={q} onAnswer={(ok) => onAnswer(null, ok)} />;
  return null;
}

// ── Question Runner ───────────────────────────────────────────────────────
function QuestionRunner({ questions, lessonTitle, onExit }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const q = questions[idx];

  const handleAnswer = useCallback((chosen, isCorrect) => {
    setAnswered({ chosen });
    setCorrect(!!isCorrect);
    if (isCorrect) setScore(s => s + 1);
  }, []);

  const next = () => {
    if (idx < questions.length - 1) { setIdx(i => i + 1); setAnswered(null); setCorrect(false); }
    else onExit(score + (correct ? 1 : 0));
  };

  if (!q) return null;
  const pct = Math.round((idx / questions.length) * 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <button onClick={() => onExit(score)} className="flex items-center gap-1 hover:text-slate-700"><ChevronRight className="w-4 h-4" />العودة</button>
        <span>{toAr(idx + 1)} / {toAr(questions.length)}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25 }}
          className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-4 pt-4 pb-2 border-b border-slate-100 flex flex-wrap gap-1.5 items-center">
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">ص {q.page}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${DIFF_COLOR[q.difficulty]}`}>{DIFF_LABEL[q.difficulty]}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">{BLOOM_LABEL[q.bloom] || q.bloom}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{TYPE_LABEL[q.type] || q.type}</span>
            {/* Golden seal */}
            <span className="mr-auto text-xs font-bold" style={{ color: '#c9a227' }}>⭐⭐⭐</span>
          </div>

          <div className="px-4 py-3">
            <p className="font-body font-bold text-slate-900 mb-4 text-base leading-relaxed">{q.question}</p>
            <QuestionRenderer q={q} onAnswer={handleAnswer} answered={answered} />
          </div>

          {answered !== null && (
            <div className="px-4 pb-4 space-y-3">
              {correct ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-sm">إجابة صحيحة! 🌟 أحسنت</span>
                </motion.div>
              ) : (
                <WrongAnswerPanel q={q} />
              )}
              <button onClick={next} className="w-full rounded-xl bg-primary text-white font-bold py-3 text-sm hover:bg-primary/90">
                {idx < questions.length - 1 ? 'السؤال التالي ←' : 'إنهاء الدرس ✓'}
              </button>
              <p className="text-center text-xs text-slate-400">{toAr(score + (correct ? 1 : 0))} / {toAr(idx + 1)} إجابة صحيحة</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── Result Screen ─────────────────────────────────────────────────────────
function ResultScreen({ score, total, lessonTitle, onRetry, onBack }) {
  const pct = Math.round((score / total) * 100);
  const grade = pct >= 90 ? 'ممتاز 🏆' : pct >= 80 ? 'جيد جداً ⭐' : pct >= 60 ? 'جيد 👍' : 'يحتاج مراجعة 📖';
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto space-y-4 pt-6">
      <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(135deg,#059669,#065f46)' }}>
        <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
        <div className="text-4xl font-heading font-bold mb-1">{toAr(score)} / {toAr(total)}</div>
        <div className="text-white/70 text-sm">{grade}</div>
        <div className="mt-2 text-xs text-white/50">{lessonTitle}</div>
      </div>
      <div className="flex gap-3">
        <button onClick={onRetry} className="flex-1 rounded-xl border-2 border-slate-200 py-3 font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50">
          <RotateCcw className="w-4 h-4" />إعادة
        </button>
        <button onClick={onBack} className="flex-1 rounded-xl bg-primary text-white font-bold py-3 flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" />الدروس
        </button>
      </div>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────
export default function ScienceGrade4S1Bank() {
  const [view, setView] = useState('home'); // home | unit | running | result
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [score, setScore] = useState(0);

  const lessonQuestions = useMemo(() => {
    if (!selectedLesson) return [];
    return SCI4_ALL_QUESTIONS.filter(q => q.lesson === selectedLesson.id);
  }, [selectedLesson]);

  const openLesson = (unit, lesson) => {
    setSelectedUnit(unit); setSelectedLesson(lesson);
    setView('running'); setScore(0);
  };

  if (view === 'running' && selectedLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5">
        <QuestionRunner questions={lessonQuestions} lessonTitle={selectedLesson.title_ar}
          onExit={(s) => { setScore(s); setView('result'); }} />
      </div>
    );
  }

  if (view === 'result' && selectedLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5">
        <ResultScreen score={score} total={lessonQuestions.length} lessonTitle={selectedLesson.title_ar}
          onRetry={() => { setView('running'); setScore(0); }}
          onBack={() => setView('unit')} />
      </div>
    );
  }

  if (view === 'unit' && selectedUnit) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        <button onClick={() => setView('home')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm">
          <ChevronRight className="w-4 h-4" />العودة للوحدات
        </button>
        <div className="rounded-2xl p-5 text-white shadow-lg" style={{ background: `linear-gradient(135deg,${selectedUnit.color},${selectedUnit.color}99)` }}>
          <div className="text-3xl mb-2">{selectedUnit.icon}</div>
          <h2 className="font-heading font-bold text-lg">{selectedUnit.title_ar}</h2>
          <p className="text-white/60 text-xs mt-1">{selectedUnit.lessons.length} دروس · {toAr(SCI4_ALL_QUESTIONS.filter(q => q.unit === selectedUnit.id).length)} سؤال</p>
        </div>
        <div className="space-y-3">
          {selectedUnit.lessons.map(lesson => {
            const lQ = SCI4_ALL_QUESTIONS.filter(q => q.lesson === lesson.id);
            return (
              <button key={lesson.id} onClick={() => openLesson(selectedUnit, lesson)}
                className="w-full rounded-2xl p-4 bg-white border-2 border-slate-200 hover:border-emerald-400 transition-all text-right flex items-center gap-3 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ background: selectedUnit.color }}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm">{lesson.title_ar}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">ص {lesson.page} · {toAr(lQ.length)} سؤال</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // HOME
  return (
    <div className="max-w-2xl mx-auto px-4 py-5 space-y-6">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-xl"
        style={{ background: 'linear-gradient(135deg,#064e3b,#059669,#065f46)' }}>
        <div className="absolute top-3 right-3 opacity-40 text-2xl">✦</div>
        <div className="absolute top-3 left-3 opacity-40 text-2xl">✦</div>
        <div className="text-4xl mb-3">🔬</div>
        <h1 className="text-white font-heading font-bold text-xl mb-1">العلوم</h1>
        <p className="text-white/70 text-sm">{SCI4_META.grade} · {SCI4_META.semester}</p>
        <p className="text-white/40 text-xs mt-1">{SCI4_META.year}</p>
        <div className="mt-3 flex justify-center gap-3 flex-wrap">
          <div className="bg-white/10 px-3 py-1.5 rounded-full text-xs text-white/80">{toAr(SCI4_UNITS.length)} وحدات</div>
          <div className="bg-emerald-400/20 px-3 py-1.5 rounded-full text-xs text-emerald-200">{toAr(TOTAL_QUESTIONS_SCI4)} سؤال</div>
          <Link to="/" className="bg-white/10 px-3 py-1.5 rounded-full text-xs text-white/80 flex items-center gap-1 hover:bg-white/20">
            <Home className="w-3 h-3" />الرئيسية
          </Link>
        </div>
      </div>

      <h2 className="font-heading font-bold text-slate-800">اختر الوحدة:</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {SCI4_UNITS.map((unit, ui) => {
          const unitQ = SCI4_ALL_QUESTIONS.filter(q => q.unit === unit.id);
          return (
            <motion.button key={unit.id} onClick={() => { setSelectedUnit(unit); setView('unit'); }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ui * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl p-5 text-right overflow-hidden shadow-lg hover:shadow-xl transition-all"
              style={{ background: `linear-gradient(135deg,${unit.color}cc,${unit.color})` }}>
              <div className="absolute inset-3 rounded-2xl bg-white/10 border border-white/20" />
              <div className="absolute top-3 left-3 text-white/30 text-xl">✦</div>
              <div className="relative">
                <div className="text-3xl mb-2">{unit.icon}</div>
                <h3 className="font-heading font-bold text-white text-sm leading-snug">{unit.title_ar}</h3>
                <p className="text-white/60 text-xs mt-1">{unit.lessons.length} دروس · {toAr(unitQ.length)} سؤال</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
        <p className="text-emerald-800 text-sm font-medium">{SCI4_META.publisher}</p>
        <p className="text-emerald-600 text-xs mt-1">بنك أسئلة مستخرج من الكتاب المدرسي مع سبورة خضراء ومعلم تفاعلي</p>
      </div>
    </div>
  );
}