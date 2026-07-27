import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, CheckCircle2, XCircle, Crown, BookOpen, Home,
  RotateCcw, ArrowLeft, Star,
} from 'lucide-react';
import {
  MATH1_S1_META,
  MATH1_S1_UNITS,
  MATH1_S1_QUESTIONS,
  TOTAL_QUESTIONS_MATH1,
} from '@/lib/mathGrade1S1Bank';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

const DIFF_COLOR = { easy: 'bg-emerald-100 text-emerald-700', medium: 'bg-amber-100 text-amber-700', hard: 'bg-red-100 text-red-700' };
const DIFF_LABEL = { easy: 'سهل', medium: 'متوسط', hard: 'صعب' };
const TYPE_LABEL = { multipleChoice: 'اختيار متعدد', trueFalse: 'صح / خطأ', ordering: 'ترتيب', classify: 'تصنيف' };

// ── KaTeX Math Renderer ───────────────────────────────────
function MathText({ text }) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;
    // Check if KaTeX is available
    if (typeof window !== 'undefined' && window.katex) {
      try {
        const parts = text.split(/(\\\(.*?\\\))/gs);
        let html = '';
        parts.forEach(part => {
          if (part.startsWith('\\(') && part.endsWith('\\)')) {
            const math = part.slice(2, -2);
            try {
              html += window.katex.renderToString(math, { throwOnError: false, displayMode: false });
            } catch {
              html += part;
            }
          } else {
            html += part.replace(/</g, '&lt;').replace(/>/g, '&gt;');
          }
        });
        containerRef.current.innerHTML = html;
      } catch {
        containerRef.current.textContent = text;
      }
    } else {
      // Fallback: show text with simple math formatting
      containerRef.current.textContent = text.replace(/\\\((.*?)\\\)/g, '$1');
    }
  }, [text]);

  return <span ref={containerRef} className="math-text" />;
}

// ── MCQ ──────────────────────────────────────────────────────────────────
function MCQuestion({ q, onAnswer, answered }) {
  return (
    <div className="space-y-2.5">
      {q.options.map((opt, i) => {
        const isCorrect = opt.correct, isChosen = answered?.chosen === i;
        const showOk = answered && isCorrect, showBad = answered && isChosen && !isCorrect;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(i, isCorrect)}
            className={`w-full text-right px-4 py-3 rounded-xl border-2 transition-all flex items-center gap-3 disabled:cursor-default
              ${showOk ? 'border-emerald-400 bg-emerald-50' : showBad ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50/30'}`}>
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
              style={{ background: ['#0891b2','#7c3aed','#059669','#b45309'][i] }}>
              {['أ','ب','ج','د'][i]}
            </div>
            <span className="flex-1 font-body text-slate-800 text-sm">
              {q.useKatex ? <MathText text={opt.text} /> : opt.text}
            </span>
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
              ${showOk ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : showBad ? 'border-red-400 bg-red-50 text-red-700' : 'border-slate-200 bg-white hover:border-teal-400'}`}>
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
      <p className="text-xs text-slate-500 mb-2">استخدم الأسهم لإعادة الترتيب:</p>
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i+1)}</span>
          <div className="flex-1 rounded-xl p-2.5 border-2 border-slate-200 bg-white text-slate-800 text-sm text-right font-mono">{it.t}</div>
          <div className="flex flex-col gap-1">
            <button disabled={i === 0 || submitted} onClick={() => move(i, i-1)} className="p-1 rounded bg-slate-100 disabled:opacity-30 text-slate-600 text-xs">▲</button>
            <button disabled={i === items.length-1 || submitted} onClick={() => move(i, i+1)} className="p-1 rounded bg-slate-100 disabled:opacity-30 text-slate-600 text-xs">▼</button>
          </div>
        </div>
      ))}
      {!submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(correct); }}
          className="w-full mt-2 rounded-xl bg-primary text-white font-bold py-2.5 text-sm">تحقق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 text-sm font-bold ${correct ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {correct ? '✓ ترتيب صحيح!' : `✗ الترتيب الصحيح: ${q.correctOrder.map(i => q.items[i]).join(' ← ')}`}
        </div>
      )}
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
  const remove = (item, ci) => {
    if (submitted) return;
    setBuckets(buckets.map((b, i) => i === ci ? b.filter(x => x.id !== item.id) : b));
    setPool([...pool, item]);
  };
  const isCorrect = q.items.every((it, i) => {
    const bIdx = buckets.findIndex(b => b.some(x => x.id === i));
    return bIdx === it.correct_category;
  });
  return (
    <div className="space-y-3">
      {pool.length > 0 && (
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-500 mb-2">انقر على عنصر ثم على التصنيف المناسب:</p>
          <div className="flex flex-wrap gap-2">
            {pool.map(it => (
              <span key={it.id} onClick={() => setSel(it)}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer text-sm ${sel?.id === it.id ? 'border-cyan-500 bg-cyan-50 font-bold' : 'bg-white border-slate-300 hover:border-cyan-400'}`}>
                {it.text}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {q.categories.map((cat, ci) => (
          <div key={ci} onClick={() => moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-3 min-h-24 cursor-pointer hover:border-cyan-300 transition-colors">
            <h4 className="font-bold text-xs text-center mb-2 text-slate-700 border-b pb-1">{cat}</h4>
            <div className="space-y-1.5">
              {buckets[ci].map(it => (
                <div key={it.id} onClick={e => { e.stopPropagation(); remove(it, ci); }}
                  className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between items-center cursor-pointer hover:bg-red-50">
                  <span>{it.text}</span><span className="text-red-400">✕</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {pool.length === 0 && !submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(isCorrect); }}
          className="w-full rounded-xl bg-primary text-white font-bold py-2.5 text-sm">تحقق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 text-sm font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? '✓ تصنيف صحيح!' : '✗ راجع التصنيف'}
        </div>
      )}
    </div>
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

// ── Golden Rule Box ───────────────────────────────────────────────────────
function GoldenBox({ text }) {
  return (
    <div className="rounded-xl p-3 border-2 mt-3" style={{ borderColor: '#0891b2', background: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)' }}>
      <div className="flex items-center gap-2 mb-1">
        <Crown className="w-4 h-4 text-cyan-600" />
        <span className="font-bold text-cyan-800 text-sm">القاعدة الذهبية</span>
      </div>
      <p className="text-slate-800 text-sm font-mono">{text}</p>
    </div>
  );
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
        <button onClick={() => onExit(score)} className="flex items-center gap-1 hover:text-slate-700">
          <ChevronRight className="w-4 h-4" />العودة
        </button>
        <span>{toAr(idx + 1)} / {toAr(questions.length)}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-4 pt-4 pb-2 border-b border-slate-100 flex flex-wrap gap-1.5">
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">ص {q.page}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${DIFF_COLOR[q.difficulty]}`}>{DIFF_LABEL[q.difficulty]}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700">{TYPE_LABEL[q.type] || q.type}</span>
          </div>
          <div className="px-4 py-3">
            <p className="font-body font-bold text-slate-900 mb-4 text-base leading-snug">
              {q.useKatex ? <MathText text={q.question} /> : q.question}
            </p>
            <QuestionRenderer q={q} onAnswer={handleAnswer} answered={answered} />
          </div>

          {answered !== null && (
            <div className="px-4 pb-4 space-y-3">
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-sm">إجابة صحيحة! أحسنت 🌟</span>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-red-50 border border-red-200 p-4 space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="font-bold text-red-700 text-sm">إجابة غير صحيحة</span>
                  </div>
                  <p className="text-slate-700 text-sm">{q.explanation}</p>
                  <p className="text-xs text-slate-400 italic">📖 {q.paragraph}</p>
                  <GoldenBox text={q.goldenRule} />
                </motion.div>
              )}
              <button onClick={next} className="w-full rounded-xl bg-primary text-white font-bold py-3 text-sm hover:bg-primary/90">
                {idx < questions.length - 1 ? 'السؤال التالي ←' : 'إنهاء الدرس ✓'}
              </button>
              <p className="text-center text-xs text-slate-400">{toAr(score + (correct ? 1 : 0))} إجابة صحيحة من {toAr(idx + 1)}</p>
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
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto space-y-4 pt-6">
      <div className="rounded-2xl p-8 text-center text-white"
        style={{ background: 'linear-gradient(135deg,#0891b2,#0e7490)' }}>
        <Crown className="w-10 h-10 mx-auto mb-3 text-cyan-200" />
        <div className="text-4xl font-heading font-bold mb-1">{toAr(score)} / {toAr(total)}</div>
        <div className="text-white/70 text-sm">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل التدريب 💪' : 'يحتاج مراجعة 📖'}</div>
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
export default function MathGrade1S1Bank() {
  const [view, setView] = useState('home');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [score, setScore] = useState(0);

  // Load KaTeX dynamically
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.katex) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const lessonQuestions = useMemo(() => {
    if (!selectedLesson) return [];
    return MATH1_S1_QUESTIONS.filter(q => q.lesson === selectedLesson.id);
  }, [selectedLesson]);

  const openLesson = (unit, lesson) => {
    setSelectedUnit(unit);
    setSelectedLesson(lesson);
    setView('running');
    setScore(0);
  };

  if (view === 'running' && selectedLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5">
        <QuestionRunner
          questions={lessonQuestions}
          lessonTitle={selectedLesson.title_ar}
          onExit={(s) => { setScore(s); setView('result'); }}
        />
      </div>
    );
  }

  if (view === 'result' && selectedLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5">
        <ResultScreen
          score={score}
          total={lessonQuestions.length}
          lessonTitle={selectedLesson.title_ar}
          onRetry={() => { setView('running'); setScore(0); }}
          onBack={() => setView('unit')}
        />
      </div>
    );
  }

  if (view === 'unit' && selectedUnit) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        <button onClick={() => setView('home')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm">
          <ChevronRight className="w-4 h-4" />العودة للفصول
        </button>
        <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg,${selectedUnit.color},${selectedUnit.color}99)` }}>
          <div className="text-3xl mb-2">{selectedUnit.icon}</div>
          <h2 className="font-heading font-bold text-lg">{selectedUnit.title_ar}</h2>
          <p className="text-white/60 text-xs mt-1">{selectedUnit.lessons.length} دروس · {MATH1_S1_QUESTIONS.filter(q => q.unit === selectedUnit.id).length} سؤال</p>
        </div>
        <div className="space-y-3">
          {selectedUnit.lessons.map(lesson => {
            const lQ = MATH1_S1_QUESTIONS.filter(q => q.lesson === lesson.id);
            return (
              <button key={lesson.id} onClick={() => openLesson(selectedUnit, lesson)}
                className="w-full rounded-2xl p-4 bg-white border-2 border-slate-200 hover:border-cyan-400 transition-all text-right flex items-center gap-3 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: selectedUnit.color }}>
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
      <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-xl"
        style={{ background: 'linear-gradient(135deg,#0c4a6e,#0891b2,#0f766e)' }}>
        <div className="absolute top-3 right-3 opacity-40 text-2xl">➕</div>
        <div className="absolute top-3 left-3 opacity-40 text-2xl">✦</div>
        <div className="text-4xl mb-3">🔢</div>
        <h1 className="text-white font-heading font-bold text-xl mb-1">الرياضيات</h1>
        <p className="text-white/70 text-sm">{MATH1_S1_META.grade} · {MATH1_S1_META.semester}</p>
        <p className="text-white/40 text-xs mt-1">{MATH1_S1_META.year}</p>
        <div className="mt-3 flex justify-center gap-3 flex-wrap">
          <div className="bg-white/10 px-3 py-1.5 rounded-full text-xs text-white/80">
            {toAr(MATH1_S1_UNITS.length)} فصول
          </div>
          <div className="bg-cyan-400/20 px-3 py-1.5 rounded-full text-xs text-cyan-200">
            {toAr(TOTAL_QUESTIONS_MATH1)} سؤال
          </div>
          <Link to="/" className="bg-white/10 px-3 py-1.5 rounded-full text-xs text-white/80 flex items-center gap-1 hover:bg-white/20">
            <Home className="w-3 h-3" />الرئيسية
          </Link>
        </div>
      </div>

      <h2 className="font-heading font-bold text-slate-800">اختر الفصل:</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {MATH1_S1_UNITS.map((unit, ui) => {
          const unitQ = MATH1_S1_QUESTIONS.filter(q => q.unit === unit.id);
          return (
            <motion.button key={unit.id} onClick={() => { setSelectedUnit(unit); setView('unit'); }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ui * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl p-5 text-right overflow-hidden shadow-lg hover:shadow-xl transition-all"
              style={{ background: `linear-gradient(135deg,${unit.color}cc,${unit.color})` }}>
              <div className="absolute inset-3 rounded-2xl bg-white/10 border border-white/20" />
              <div className="relative">
                <div className="text-3xl mb-2">{unit.icon}</div>
                <h3 className="font-heading font-bold text-white text-sm leading-snug">{unit.title_ar}</h3>
                <p className="text-white/60 text-xs mt-1">{unit.lessons.length} دروس · {toAr(unitQ.length)} سؤال</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="rounded-2xl bg-cyan-50 border border-cyan-200 p-4 text-center">
        <Star className="w-5 h-5 text-cyan-500 mx-auto mb-2" />
        <p className="text-cyan-800 text-sm font-medium">{MATH1_S1_META.publisher}</p>
        <p className="text-cyan-600 text-xs mt-1">الأسئلة مستخرجة من الكتاب المدرسي مع دعم الرموز الرياضية</p>
      </div>
    </div>
  );
}