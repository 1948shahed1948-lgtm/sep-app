import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Printer, Home, X, Moon, Sun, Crown,
  CheckCircle2, XCircle, Trophy, BookOpen, Zap, Filter, RotateCcw,
  Volume2, Star, Award, Clock, ChevronLeft
} from 'lucide-react';
import { META, UNITS_DATA, BLOOM_LABELS, DIFFICULTY_LABELS, ALL_QUESTIONS, getQuestionsByLesson } from '@/lib/scienceGrade3S1Data';

// ──── UTILS ────────────────────────────────────────────────────────────────
const COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
const LETTERS = ['أ', 'ب', 'ج', 'د'];
const toAr = n => String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
const STORAGE_KEY = 'science_g3_s1_v2';
const NAME_KEY = 'science_g3_s1_name';

// ──── SVG TEACHER ───────────────────────────────────────────────────────────
function TeacherSVG({ size = 90, animate = false }) {
  return (
    <svg width={size} height={Math.round(size * 1.4)} viewBox="0 0 120 168" fill="none"
      style={animate ? { animation: 'teacherBob 2s ease-in-out infinite' } : {}}>
      {/* Shadow */}
      <ellipse cx="60" cy="164" rx="30" ry="6" fill="#e8d5b7" opacity="0.4" />
      {/* Body - Lab coat */}
      <rect x="28" y="90" width="64" height="70" rx="16" fill="#f0f4ff" />
      <rect x="44" y="90" width="32" height="8" rx="4" fill="#3b82f6" opacity="0.8" />
      {/* Pocket detail */}
      <rect x="34" y="110" width="16" height="20" rx="4" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="42" y1="114" x2="42" y2="126" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2,2" />
      {/* Head */}
      <circle cx="60" cy="72" r="26" fill="#f5d0a9" />
      {/* Hair */}
      <ellipse cx="60" cy="50" rx="26" ry="10" fill="#4a2c0a" />
      <rect x="34" y="50" width="52" height="18" rx="4" fill="#4a2c0a" />
      {/* Glasses */}
      <circle cx="52" cy="70" r="9" fill="none" stroke="#374151" strokeWidth="2" />
      <circle cx="68" cy="70" r="9" fill="none" stroke="#374151" strokeWidth="2" />
      <line x1="61" y1="70" x2="59" y2="70" stroke="#374151" strokeWidth="2" />
      <line x1="34" y1="68" x2="43" y2="69" stroke="#374151" strokeWidth="2" />
      <line x1="77" y1="69" x2="86" y2="67" stroke="#374151" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="52" cy="70" r="4" fill="#2c1810" />
      <circle cx="68" cy="70" r="4" fill="#2c1810" />
      <circle cx="53" cy="69" r="1.5" fill="white" />
      <circle cx="69" cy="69" r="1.5" fill="white" />
      {/* Eyebrows - happy */}
      <path d="M46 62 Q52 59 58 62" stroke="#4a2c0a" strokeWidth="2" fill="none" />
      <path d="M62 62 Q68 59 74 62" stroke="#4a2c0a" strokeWidth="2" fill="none" />
      {/* Nose */}
      <ellipse cx="60" cy="78" rx="2.5" ry="3" fill="#e8b88a" />
      {/* Smile */}
      <path d="M51 85 Q60 92 69 85" stroke="#c0392b" strokeWidth="2" fill="none" />
      {/* Pointer/stick */}
      <rect x="84" y="85" width="3.5" height="28" rx="2" fill="#6b7280" transform="rotate(20 84 85)" />
      {/* Left arm */}
      <rect x="14" y="98" width="18" height="10" rx="6" fill="#f0f4ff" transform="rotate(-30 14 98)" />
    </svg>
  );
}

// ──── BLACKBOARD ────────────────────────────────────────────────────────────
function Blackboard({ text, goldenRule }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    setShown('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: '6px solid #5C3A1E' }}>
      {/* Board top bar */}
      <div className="flex items-center gap-2 px-4 py-2" style={{ background: '#5C3A1E' }}>
        <div className="flex gap-1.5">
          {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
        </div>
        <span className="text-xs text-amber-200 font-mono mr-auto">السبورة العلمية ✦</span>
        <div className="w-8 h-1.5 bg-amber-200/40 rounded" />
      </div>
      {/* Board surface */}
      <div className="p-5 min-h-28" style={{ background: 'linear-gradient(160deg,#1a4a2a 0%,#143520 100%)' }}>
        <div className="text-right font-mono leading-relaxed text-sm text-green-100" dir="rtl">
          {shown}
          <span className="inline-block w-0.5 h-4 bg-green-300 animate-pulse ml-1" />
        </div>
        {/* Chalk dust effect */}
        <div className="mt-1 text-green-200/20 text-xs">. . . . . . . . . . . . . . . . . . . . . . . .</div>
      </div>
      {/* Chalk tray */}
      <div style={{ background: '#7a4a20', padding: '4px 16px', display: 'flex', gap: 8 }}>
        {['white', '#fef08a', '#86efac'].map((c, i) => (
          <div key={i} style={{ width: 32, height: 10, background: c, borderRadius: 4, opacity: 0.9 }} />
        ))}
      </div>
    </div>
  );
}

// ──── GOLDEN SEAL ──────────────────────────────────────────────────────────
function GoldenSeal({ size = 40 }) {
  return (
    <div className="rounded-full flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0"
      style={{
        width: size, height: size,
        background: 'conic-gradient(from 0deg, #c9a227, #f4d03f, #c9a227, #f4d03f, #c9a227)',
        animation: 'sealGlow 3s ease-in-out infinite',
        fontSize: size < 36 ? 9 : 11,
        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
      }}>⭐⭐⭐</div>
  );
}

// ──── GOLDEN RULE BOX ─────────────────────────────────────────────────────
function GoldenRuleBox({ text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-4 border-2 mt-3"
      style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fffbf0)' }}>
      <div className="flex items-center gap-2 mb-2">
        <Crown className="w-5 h-5 text-amber-600" />
        <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
        <Crown className="w-5 h-5 text-amber-600" />
      </div>
      <p className="text-slate-800 text-sm font-medium leading-relaxed" dir="rtl">{text}</p>
    </motion.div>
  );
}

// ──── MCQ COMPONENT ───────────────────────────────────────────────────────
function MCQ({ q, onAnswer, answered }) {
  return (
    <div className="space-y-2.5" dir="rtl">
      {(q.options || []).map((opt, i) => {
        const ok = opt.correct;
        const chosen = answered?.chosen === i;
        const showOk = answered && ok;
        const showBad = answered && chosen && !ok;
        return (
          <motion.button key={i} whileHover={!answered ? { scale: 1.01 } : {}}
            disabled={!!answered} onClick={() => !answered && onAnswer(i, ok)}
            className="w-full text-right rounded-2xl p-3.5 border-2 transition-all flex items-center gap-3 disabled:cursor-default"
            style={{
              borderColor: showOk ? '#059669' : showBad ? '#dc2626' : COLORS[i] + '60',
              background: showOk ? '#ecfdf5' : showBad ? '#fef2f2' : 'white',
              boxShadow: showOk ? '0 0 0 2px #05966920' : 'none',
            }}>
            <span className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0 text-sm"
              style={{ background: COLORS[i] }}>{LETTERS[i]}</span>
            <span className="flex-1 text-slate-800 text-sm leading-snug">{opt.text}</span>
            {showOk && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
            {showBad && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
          </motion.button>
        );
      })}
    </div>
  );
}

// ──── TF COMPONENT ────────────────────────────────────────────────────────
function TFQ({ q, onAnswer, answered }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-2" dir="rtl">
      {[true, false].map((val) => {
        const chosen = answered?.chosen === val;
        const showOk = answered && val === q.correctAnswer;
        const showBad = answered && chosen && val !== q.correctAnswer;
        return (
          <motion.button key={String(val)} whileHover={!answered ? { scale: 1.03 } : {}}
            disabled={!!answered} onClick={() => !answered && onAnswer(val, val === q.correctAnswer)}
            className="rounded-2xl p-5 border-2 transition-all flex flex-col items-center gap-2 disabled:cursor-default"
            style={{
              borderColor: showOk ? '#059669' : showBad ? '#dc2626' : val ? '#05966960' : '#dc262660',
              background: showOk ? '#ecfdf5' : showBad ? '#fef2f2' : 'white',
            }}>
            {val ? <CheckCircle2 className="w-10 h-10 text-emerald-600" /> : <XCircle className="w-10 h-10 text-red-500" />}
            <span className="font-bold text-base">{val ? 'صواب ✓' : 'خطأ ✗'}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

// ──── ORDERING ────────────────────────────────────────────────────────────
function OrderingQ({ q, onAnswer }) {
  const [items, setItems] = useState(() => q.items.map((t, i) => ({ t, orig: i })).sort(() => Math.random() - 0.5));
  const [done, setDone] = useState(false);
  const isCorrect = items.every((it, i) => it.orig === q.correctOrder[i]);
  const move = (from, to) => {
    if (done) return;
    const n = [...items]; const [m] = n.splice(from, 1); n.splice(to, 0, m); setItems(n);
  };
  return (
    <div className="space-y-2" dir="rtl">
      <p className="text-xs text-slate-500 mb-2">استخدم أزرار ▲▼ لترتيب العناصر:</p>
      {items.map((it, i) => (
        <div key={it.orig} className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i + 1)}</span>
          <div className="flex-1 rounded-xl p-2.5 border-2 border-slate-200 bg-white text-slate-800 text-sm">{it.t}</div>
          <button disabled={i === 0 || done} onClick={() => move(i, i - 1)} className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-xs">▲</button>
          <button disabled={i === items.length - 1 || done} onClick={() => move(i, i + 1)} className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-xs">▼</button>
        </div>
      ))}
      {!done && (
        <button onClick={() => { setDone(true); onAnswer(isCorrect, isCorrect); }}
          className="w-full mt-2 rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm hover:bg-emerald-700 transition">تحقّق ✓</button>
      )}
      {done && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? '✓ ترتيب صحيح!' : '✗ الترتيب الصحيح: ' + q.correctOrder.map(i => q.items[i]).join(' ← ')}
        </div>
      )}
    </div>
  );
}

// ──── MATCHING ────────────────────────────────────────────────────────────
function MatchingQ({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(false);
  const rights = useMemo(() => [...q.pairs].map((p, i) => ({ text: p.right, orig: i })).sort(() => Math.random() - 0.5), [q]);
  const pick = (side, idx) => {
    if (done) return;
    if (side === 'left') setSel(idx);
    else { if (sel === null) return; setMatches({ ...matches, [sel]: idx }); setSel(null); }
  };
  const isCorrect = q.pairs.every((p, i) => matches[i] === i);
  return (
    <div className="space-y-2" dir="rtl">
      <p className="text-xs text-slate-500">اضغط عنصراً ثم اضغط نظيره:</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          {q.pairs.map((p, i) => (
            <button key={i} onClick={() => pick('left', i)} disabled={done || matches[i] !== undefined}
              className={`w-full rounded-xl p-2.5 border-2 text-right text-xs font-medium transition ${sel === i ? 'border-amber-500 bg-amber-50' : matches[i] !== undefined ? 'border-emerald-400 bg-emerald-50 opacity-70' : 'border-slate-200 bg-white hover:border-amber-300'}`}>
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-1.5">
          {rights.map((r, i) => {
            const matched = Object.entries(matches).find(([, v]) => v === i);
            return (
              <button key={i} onClick={() => pick('right', i)} disabled={done || !!matched}
                className={`w-full rounded-xl p-2.5 border-2 text-right text-xs font-medium transition ${matched ? 'border-emerald-400 bg-emerald-50 opacity-70' : 'border-slate-200 bg-white hover:border-blue-300'}`}>
                {r.text}
              </button>
            );
          })}
        </div>
      </div>
      {Object.keys(matches).length === q.pairs.length && !done && (
        <button onClick={() => { setDone(true); onAnswer(isCorrect, isCorrect); }}
          className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm hover:bg-emerald-700 transition">تحقّق ✓</button>
      )}
      {done && <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ صحيح!' : '✗ راجع الإجابات'}</div>}
    </div>
  );
}

// ──── CLASSIFY ────────────────────────────────────────────────────────────
function ClassifyQ({ q, onAnswer }) {
  const [buckets, setBuckets] = useState(q.categories.map(() => []));
  const [pool, setPool] = useState(q.items.map((it, i) => ({ ...it, id: i })));
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(false);
  const moveTo = ci => {
    if (done || sel === null) return;
    setBuckets(buckets.map((b, i) => i === ci ? [...b.filter(x => x.id !== sel.id), sel] : b.filter(x => x.id !== sel.id)));
    setPool(pool.filter(x => x.id !== sel.id)); setSel(null);
  };
  const removeFrom = (item, ci) => {
    if (done) return;
    setBuckets(buckets.map((b, i) => i === ci ? b.filter(x => x.id !== item.id) : b));
    setPool([...pool, item]);
  };
  const isCorrect = q.items.every((it, i) => {
    const bi = buckets.findIndex(b => b.some(x => x.id === i));
    return bi === it.correct_category;
  });
  const cols = Math.min(q.categories.length, 3);
  return (
    <div className="space-y-3" dir="rtl">
      {pool.length > 0 && (
        <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
          <p className="text-xs text-slate-500 mb-2">اضغط عنصراً ثم اضغط العمود:</p>
          <div className="flex flex-wrap gap-2">
            {pool.map(it => (
              <span key={it.id} onClick={() => setSel(it)}
                className={`px-3 py-1.5 rounded-lg border-2 cursor-pointer text-xs font-medium transition ${sel?.id === it.id ? 'border-amber-500 bg-amber-50 scale-105' : 'bg-white border-slate-300 hover:border-amber-400'}`}>
                {it.text}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}>
        {q.categories.map((cat, ci) => (
          <div key={ci} onClick={() => moveTo(ci)}
            className="rounded-xl border-2 border-slate-200 p-2.5 min-h-20 cursor-pointer hover:border-blue-300 transition">
            <h4 className="font-bold text-xs text-center mb-2 text-slate-700 border-b pb-1 leading-tight">{cat}</h4>
            <div className="space-y-1">
              {buckets[ci].map(it => (
                <div key={it.id} onClick={e => { e.stopPropagation(); removeFrom(it, ci); }}
                  className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between items-center cursor-pointer hover:bg-red-50">
                  <span>{it.text}</span><X className="w-3 h-3 text-red-400" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {pool.length === 0 && !done && (
        <button onClick={() => { setDone(true); onAnswer(isCorrect, isCorrect); }}
          className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm hover:bg-emerald-700 transition">تحقّق ✓</button>
      )}
      {done && <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ تصنيف صحيح!' : '✗ راجع التصنيف'}</div>}
    </div>
  );
}

// ──── FILL BLANK ──────────────────────────────────────────────────────────
function FillBlankQ({ q, onAnswer }) {
  const [filled, setFilled] = useState(q.blanks.map(() => null));
  const [pool, setPool] = useState(q.wordBank.map((w, i) => ({ w, id: i, used: false })));
  const [selWord, setSelWord] = useState(null);
  const [done, setDone] = useState(false);
  const place = bi => {
    if (done || selWord === null) return;
    const next = [...filled]; const prev = next[bi];
    setPool(pool.map(p => { if (p.id === selWord) return { ...p, used: true }; if (prev !== null && p.id === prev) return { ...p, used: false }; return p; }));
    next[bi] = selWord; setFilled(next); setSelWord(null);
  };
  const remove = bi => {
    if (done) return;
    const next = [...filled]; const wId = next[bi]; if (wId === null) return;
    next[bi] = null; setFilled(next);
    setPool(pool.map(p => p.id === wId ? { ...p, used: false } : p));
  };
  const isCorrect = filled.every((f, i) => pool.find(p => p.id === f)?.w === q.blanks[i]);
  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-xs text-slate-500">اضغط كلمة ثم الفراغ المناسب:</p>
      <div className="rounded-xl p-3 bg-white border-2 border-slate-200 text-sm leading-loose">
        {q.blanks.map((b, i) => (
          <button key={i} onClick={() => place(i)} disabled={done} onDoubleClick={() => remove(i)}
            className={`inline-block mx-1 px-2 py-0.5 rounded-lg border-2 border-dashed min-w-16 text-center text-xs font-bold transition ${filled[i] !== null ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : 'border-amber-400 bg-amber-50 hover:bg-amber-100'}`}>
            {filled[i] !== null ? pool.find(p => p.id === filled[i])?.w : '_ _ _'}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map(w => (
          <button key={w.id} disabled={w.used || done} onClick={() => !w.used && setSelWord(w.id)}
            className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition ${w.used ? 'opacity-30 border-slate-200 bg-slate-50' : selWord === w.id ? 'border-emerald-500 bg-emerald-50 scale-105' : 'border-slate-300 bg-white hover:border-emerald-400 cursor-pointer'}`}>
            {w.w}
          </button>
        ))}
      </div>
      {filled.every(f => f !== null) && !done && (
        <button onClick={() => { setDone(true); onAnswer(isCorrect, isCorrect); }}
          className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm hover:bg-emerald-700 transition">تحقّق ✓</button>
      )}
      {done && <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ صحيح!' : '✗ الإجابة: ' + q.blanks.join(' — ')}</div>}
    </div>
  );
}

// ──── Q RENDERER ─────────────────────────────────────────────────────────
function QRenderer({ q, onAnswer, answered }) {
  if (q.type === 'multipleChoice') return <MCQ q={q} onAnswer={onAnswer} answered={answered} />;
  if (q.type === 'trueFalse') return <TFQ q={q} onAnswer={onAnswer} answered={answered} />;
  if (q.type === 'ordering') return <OrderingQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'matching') return <MatchingQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'classify') return <ClassifyQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'fillBlank') return <FillBlankQ q={q} onAnswer={onAnswer} />;
  return <MCQ q={q} onAnswer={onAnswer} answered={answered} />;
}

const TYPE_LABELS = {
  multipleChoice: 'اختيار متعدد', trueFalse: 'صواب/خطأ', ordering: 'ترتيب',
  matching: 'مطابقة', classify: 'تصنيف', fillBlank: 'تعبئة فراغات',
};

// ──── PRINT MODAL ─────────────────────────────────────────────────────────
function PrintModal({ onClose }) {
  const [withExp, setWithExp] = useState(true);
  const doPrint = () => {
    const w = window.open('', '_blank');
    const html = `<html dir="rtl"><head><title>${META.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Tajawal',Arial;padding:24px;color:#222;direction:rtl;font-size:13px}
      .header{text-align:center;margin-bottom:24px;border-bottom:4px solid #c9a227;padding-bottom:16px}
      .seal{display:inline-block;width:60px;height:60px;border-radius:50%;background:conic-gradient(#c9a227,#f4d03f,#c9a227);color:white;font-size:10px;line-height:60px;text-align:center;font-weight:bold;margin:8px}
      .q{border:2px solid #e5e7eb;border-radius:12px;padding:16px;margin:10px 0;page-break-inside:avoid;position:relative}
      .q-seal{position:absolute;top:10px;left:10px;width:32px;height:32px;border-radius:50%;background:conic-gradient(#c9a227,#f4d03f,#c9a227);color:white;font-size:7px;display:flex;align-items:center;justify-content:center;font-weight:bold}
      .badge{padding:2px 8px;border-radius:20px;background:#f0f4ff;color:#374151;font-size:10px;display:inline-block;margin:2px}
      .opt{padding:6px 10px;margin:4px 0;border-radius:8px;display:flex;align-items:flex-start;gap:8px;font-size:12px;border:1px solid #e5e7eb}
      .correct{background:#d4f4dd;border-color:#059669;font-weight:bold}
      .opt-label{width:24px;height:24px;border-radius:6px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:11px}
      .exp{background:#e8f5e9;border:1px solid #059669;border-radius:8px;padding:8px;margin:8px 0;font-size:12px}
      .rule{background:#fffde7;border:2px solid #c9a227;border-radius:8px;padding:8px;margin:8px 0;font-size:12px}
      .pg{color:#6b7280;font-size:11px;margin:4px 0;border-right:3px solid #ef4444;padding-right:8px}
      h1{color:#0a1628;font-size:22px;font-weight:900}
      h2{color:#7c3aed;font-size:15px;margin:20px 0 8px}
      .footer{margin-top:32px;text-align:center;font-size:11px;color:#9ca3af;border-top:1px solid #e5e7eb;padding-top:12px}
    </style></head><body>
    <div class="header">
      <div class="seal">⭐⭐⭐</div>
      <h1>${META.title}</h1>
      <p>${META.subtitle}</p>
      <p>إجمالي الأسئلة: ${toAr(ALL_QUESTIONS.length)} سؤال تفاعلي</p>
    </div>
    ${ALL_QUESTIONS.map((q, qi) => `<div class="q"><div class="q-seal">⭐</div>
      <div style="margin-bottom:8px">
        <span class="badge">س${toAr(qi + 1)}</span>
        <span class="badge">ص${toAr(q.page)}</span>
        <span class="badge">${BLOOM_LABELS[q.bloom]}</span>
        <span class="badge">${DIFFICULTY_LABELS[q.difficulty]}</span>
        <span class="badge">${TYPE_LABELS[q.type] || q.type}</span>
      </div>
      <p style="font-weight:700;margin:8px 0;font-size:13px;padding-left:40px">${q.question}</p>
      <div>${q.type === 'trueFalse'
        ? '<div class="opt"><span class="opt-label" style="background:#059669">✓</span>صواب</div><div class="opt"><span class="opt-label" style="background:#ef4444">✗</span>خطأ</div>'
        : (q.options || []).map((o, i) => `<div class="opt ${o.correct ? 'correct' : ''}"><span class="opt-label" style="background:${COLORS[i]}">${LETTERS[i]}</span>${o.text}</div>`).join('')}</div>
      ${withExp ? `<div class="exp"><strong>الشرح:</strong> ${q.explanation}</div><div class="rule">👑 <strong>القاعدة الذهبية:</strong> ${q.goldenRule}</div>` : ''}
      <p class="pg">📖 من الكتاب (ص${toAr(q.page)}): ${q.paragraph}</p>
    </div>`).join('')}
    <div class="footer">${META.publisher} · ${META.book}</div>
    </body></html>`;
    w.document.write(html); w.document.close(); w.print();
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        onClick={e => e.stopPropagation()} className="bg-white rounded-2xl max-w-md w-full p-6" dir="rtl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">طباعة PDF مخصّصة</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"><X className="w-4 h-4" /></button>
        </div>
        <div className="space-y-3 mb-4">
          <div className="p-3 bg-slate-50 rounded-xl text-sm">
            <p className="font-medium text-slate-700">إجمالي الأسئلة: <strong className="text-violet-600">{toAr(ALL_QUESTIONS.length)}</strong></p>
          </div>
          <label className="flex items-center gap-3 p-3 rounded-xl border hover:bg-slate-50 cursor-pointer">
            <input type="checkbox" checked={withExp} onChange={e => setWithExp(e.target.checked)} className="w-4 h-4" />
            <div>
              <p className="font-medium text-sm">مع الشروحات والقاعدة الذهبية</p>
              <p className="text-xs text-slate-500">يشمل الشرح التفصيلي والقاعدة العلمية لكل سؤال</p>
            </div>
          </label>
        </div>
        <button onClick={doPrint}
          className="w-full rounded-xl text-white font-bold py-3 flex items-center justify-center gap-2 text-sm hover:opacity-90 transition"
          style={{ background: 'linear-gradient(135deg,#7c3aed,#5b21b6)' }}>
          <Printer className="w-5 h-5" />طباعة الآن
        </button>
      </motion.div>
    </div>
  );
}

// ──── MAIN COMPONENT ──────────────────────────────────────────────────────
export default function ScienceGrade3S1Bank() {
  const [dark, setDark] = useState(() => localStorage.getItem(STORAGE_KEY + '_dark') === 'true');
  const [studentName, setStudentName] = useState(() => localStorage.getItem(NAME_KEY) || '');
  const [nameInput, setNameInput] = useState('');
  const [progress, setProgress] = useState(() => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } });
  const [active, setActive] = useState(null); // {unitIdx, lessonIdx}
  const [qIdx, setQIdx] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [feedbackAns, setFeedbackAns] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showPrint, setShowPrint] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [filterDiff, setFilterDiff] = useState('all');
  const [filterBloom, setFilterBloom] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { localStorage.setItem(STORAGE_KEY + '_dark', dark); }, [dark]);
  useEffect(() => { setAnswered(null); setFeedbackAns(null); setShowFeedback(false); }, [qIdx, active]);

  const saveProg = (p) => localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  const totalCorrect = Object.values(progress).filter(p => p?.isCorrect).length;

  // Get current questions with filters
  const rawQuestions = active ? getQuestionsByLesson(UNITS_DATA[active.unitIdx].lessons[active.lessonIdx].id) : [];
  const questions = useMemo(() => rawQuestions.filter(q => {
    if (filterDiff !== 'all' && q.difficulty !== filterDiff) return false;
    if (filterBloom !== 'all' && q.bloom !== filterBloom) return false;
    return true;
  }), [rawQuestions, filterDiff, filterBloom]);

  const q = questions[qIdx];
  const unit = active ? UNITS_DATA[active.unitIdx] : null;
  const lesson = active ? unit?.lessons[active.lessonIdx] : null;

  const openLesson = (ui, li) => {
    setActive({ unitIdx: ui, lessonIdx: li });
    setQIdx(0); setAnswered(null); setFeedbackAns(null); setShowFeedback(false);
    setScore({ correct: 0, total: 0 });
  };

  const handleAnswer = (chosen, isCorrect) => {
    setAnswered({ chosen, isCorrect });
    setScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    if (q) { const p = { ...progress }; p[q.id] = { isCorrect, ts: Date.now() }; setProgress(p); saveProg(p); }
    if (isCorrect) setTimeout(() => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); }, 1600);
    else if (q?.feedbackQuestion) setTimeout(() => setShowFeedback(true), 800);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ar-SA'; u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };

  // ── CSS ANIMATIONS ────────────────────────────────────────────────────
  const cssAnimations = `
    @keyframes sealGlow { 0%,100%{filter:brightness(1) drop-shadow(0 0 4px #c9a22780)} 50%{filter:brightness(1.2) drop-shadow(0 0 10px #c9a227)} }
    @keyframes teacherBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
    @keyframes confetti { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(80px) rotate(360deg);opacity:0} }
    @keyframes slideIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
  `;

  // ── NAME SCREEN ────────────────────────────────────────────────────────
  if (!studentName) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#faf8f0' }}>
        <style>{cssAnimations}</style>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border-2" style={{ borderColor: '#7c3aed' }} dir="rtl">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3"><GoldenSeal size={56} /></div>
            <div className="text-4xl mb-2">🔬</div>
            <h1 className="font-bold text-xl text-slate-800 leading-tight">{META.title}</h1>
            <p className="text-violet-600 text-sm font-medium mt-1">{META.subtitle}</p>
            <p className="text-slate-400 text-xs mt-1">{META.publisher}</p>
          </div>
          <p className="text-sm text-slate-600 mb-3 text-center">أدخل اسمك للبدء:</p>
          <input value={nameInput} onChange={e => setNameInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && nameInput.trim()) { localStorage.setItem(NAME_KEY, nameInput.trim()); setStudentName(nameInput.trim()); } }}
            placeholder="اسمك هنا..." dir="rtl"
            className="w-full rounded-xl border-2 border-slate-200 p-3 text-slate-800 mb-4 focus:outline-none focus:border-violet-400 text-center text-base" />
          <button disabled={!nameInput.trim()} onClick={() => { localStorage.setItem(NAME_KEY, nameInput.trim()); setStudentName(nameInput.trim()); }}
            className="w-full rounded-xl text-white font-bold py-3 disabled:opacity-40 hover:opacity-90 transition text-base"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#5b21b6)' }}>
            ابدأ التعلّم العلمي 🚀
          </button>
        </motion.div>
      </div>
    );
  }

  // ── LESSON / QUESTION SCREEN ──────────────────────────────────────────
  if (active && q) {
    const pct = Math.round(((qIdx + 1) / questions.length) * 100);
    return (
      <div className={`min-h-screen transition-colors ${dark ? 'bg-gray-900' : 'bg-[#faf8f0]'}`} dir="rtl">
        <style>{cssAnimations}</style>

        {/* Header */}
        <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-md"
          style={{ background: '#0a1628', borderBottom: '2px solid #c9a227' }}>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              {dark ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-white" />}
            </button>
            <button onClick={() => setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
              <Printer className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#c9a22730' }}>
              <Trophy className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
              <span className="font-bold text-xs" style={{ color: '#c9a227' }}>{toAr(totalCorrect)}</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm truncate max-w-32">{lesson?.title}</p>
            <p className="text-white/50 text-xs">{unit?.title?.slice(0, 20)}...</p>
          </div>
          <button onClick={() => setShowExit(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/50 transition">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className={`max-w-2xl mx-auto px-4 py-5 pb-16 ${dark ? 'text-white' : ''}`}>
          {/* Progress */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <button onClick={() => { if (qIdx > 0) setQIdx(qIdx - 1); }} disabled={qIdx === 0}
              className="flex items-center gap-1 hover:text-slate-700 disabled:opacity-30">
              <ChevronRight className="w-4 h-4" />السابق
            </button>
            <span className="font-bold">{toAr(qIdx + 1)} / {toAr(questions.length)}</span>
            <button onClick={() => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); }} disabled={qIdx === questions.length - 1}
              className="flex items-center gap-1 hover:text-slate-700 disabled:opacity-30">
              التالي<ChevronLeft className="w-4 h-4" />
            </button>
          </div>
          <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden mb-5">
            <motion.div className="h-full rounded-full" animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }}
              style={{ background: unit?.color }} />
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div key={qIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="relative rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              {/* Seal */}
              <div className="absolute top-4 left-4"><GoldenSeal size={36} /></div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3 pe-12" dir="rtl">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">ص{toAr(q.page)}</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-xs">{BLOOM_LABELS[q.bloom]}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${q.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-700' : q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                  {DIFFICULTY_LABELS[q.difficulty]}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs">{TYPE_LABELS[q.type]}</span>
                <button onClick={() => speak(q.question)} className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 text-xs flex items-center gap-1 hover:bg-teal-200 transition">
                  <Volume2 className="w-3 h-3" />استمع
                </button>
              </div>

              {/* Question */}
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-4 leading-relaxed pe-12" dir="rtl">{q.question}</h3>

              {/* Paragraph teaser */}
              <p className="text-xs text-slate-400 mb-3 border-r-2 border-slate-300 pr-2" dir="rtl">
                📖 ص{toAr(q.page)}: {q.paragraph?.slice(0, 60)}...
              </p>

              {/* Answer types */}
              <QRenderer q={q} onAnswer={handleAnswer} answered={answered} />

              {/* Wrong answer feedback */}
              {answered && !answered.isCorrect && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
                  {/* Full paragraph */}
                  <div className="rounded-xl p-3 border-r-4 border-red-500 bg-red-50 text-xs text-red-700 leading-relaxed" dir="rtl">
                    <strong>📖 من الكتاب (ص{toAr(q.page)}):</strong> {q.paragraph}
                  </div>

                  {/* Teacher + Blackboard */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0"><TeacherSVG size={80} animate={true} /></div>
                    <div className="flex-1"><Blackboard text={q.explanation} /></div>
                  </div>

                  {/* Golden Rule */}
                  <GoldenRuleBox text={q.goldenRule} />

                  {/* Feedback Question */}
                  {q.feedbackQuestion && showFeedback && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <p className="font-bold text-blue-800 text-sm">سؤال مشابه للتدرّب</p>
                      </div>
                      <p className="mb-3 text-slate-700 text-sm font-medium" dir="rtl">{q.feedbackQuestion.question}</p>
                      <MCQ q={q.feedbackQuestion} onAnswer={(c, ok) => setFeedbackAns({ chosen: c, isCorrect: ok })} answered={feedbackAns} />
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Correct answer */}
              {answered?.isCorrect && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 rounded-2xl p-4 bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-2xl mb-1">🌟 ✨ 🎉</div>
                  <p className="text-emerald-700 font-bold">ممتاز! إجابة صحيحة</p>
                  <GoldenRuleBox text={q.goldenRule} />
                </motion.div>
              )}

              {/* Nav after answer */}
              {answered && (
                <div className="mt-4 flex justify-between items-center" dir="rtl">
                  <button onClick={() => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); else setShowExit(true); }}
                    className="rounded-xl text-white font-bold px-6 py-2.5 text-sm hover:opacity-90 transition"
                    style={{ background: unit?.color }}>
                    {qIdx < questions.length - 1 ? 'التالي ←' : 'النهاية ✓'}
                  </button>
                  <div className="text-xs text-slate-500">{toAr(score.correct)}/{toAr(score.total)} صحيحة</div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modals */}
        {showPrint && <PrintModal onClose={() => setShowPrint(false)} />}
        {showExit && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowExit(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              onClick={e => e.stopPropagation()} className="bg-white rounded-2xl max-w-sm w-full p-6 text-center" dir="rtl">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-lg mb-4">ملخص الجلسة</h3>
              <div className="space-y-2 text-sm mb-5 bg-slate-50 rounded-xl p-4">
                <div className="flex justify-between"><span>أسئلة محلولة:</span><strong>{toAr(score.total)}</strong></div>
                <div className="flex justify-between"><span>إجابات صحيحة:</span><strong className="text-emerald-600">{toAr(score.correct)}</strong></div>
                <div className="flex justify-between"><span>نسبة الدقة:</span><strong>{toAr(Math.round(score.total ? (score.correct / score.total) * 100 : 0))}%</strong></div>
                <div className="flex justify-between"><span>نقاط مكتسبة:</span><strong className="text-amber-600">{toAr(score.correct)} 🏆</strong></div>
              </div>
              <p className="text-xs text-slate-500 mb-4">أحسنت {studentName}! واصل التعلّم العلمي 🌟</p>
              <div className="flex gap-2">
                <button onClick={() => { setActive(null); setShowExit(false); }}
                  className="flex-1 rounded-xl bg-slate-100 text-slate-700 font-bold py-2.5 text-sm hover:bg-slate-200 transition">
                  البنك
                </button>
                <button onClick={() => { setQIdx(0); setAnswered(null); setScore({ correct: 0, total: 0 }); setShowExit(false); }}
                  className="flex-1 rounded-xl text-white font-bold py-2.5 text-sm hover:opacity-90 transition"
                  style={{ background: unit?.color }}>
                  إعادة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  // ── HOME SCREEN ───────────────────────────────────────────────────────
  return (
    <div className={`min-h-screen transition-colors ${dark ? 'bg-gray-900' : 'bg-[#faf8f0]'}`} dir="rtl">
      <style>{cssAnimations}</style>

      {/* Header */}
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-md"
        style={{ background: '#0a1628', borderBottom: '2px solid #c9a227' }}>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            {dark ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-white" />}
          </button>
          <button onClick={() => setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Printer className="w-4 h-4 text-white" />
          </button>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#c9a22730' }}>
            <Trophy className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
            <span className="font-bold text-xs" style={{ color: '#c9a227' }}>{toAr(totalCorrect)}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm">{META.subject} · {META.grade}</p>
          <p className="text-white/50 text-xs">{META.term}</p>
        </div>
        <Link to="/">
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
            <Home className="w-4 h-4 text-white" />
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-5 space-y-6 pb-12">

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-2xl"
          style={{ background: 'linear-gradient(135deg,#0a1628 0%,#1e3a5f 50%,#7c3aed 100%)' }}>
          <div className="absolute inset-0 opacity-10">
            {['✦','★','◆','✧','●'].map((s,i) => (
              <span key={i} style={{ position:'absolute', left: `${15+i*18}%`, top: `${10+i*15}%`, fontSize: 20+i*4, color:'#c9a227' }}>{s}</span>
            ))}
          </div>
          <div className="relative">
            <div className="flex justify-center gap-2 mb-3">
              {[0,1,2].map(i => <GoldenSeal key={i} size={40} />)}
            </div>
            <div className="text-4xl mb-2">🔬</div>
            <h1 className="text-white font-bold text-xl sm:text-2xl mb-1 leading-tight">{META.title}</h1>
            <p className="text-violet-200 text-sm">{META.subtitle}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80">{studentName} 👋</div>
              <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#c9a22730', color: '#f4d03f' }}>{toAr(totalCorrect)} صحيحة ✓</div>
              <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80">{toAr(ALL_QUESTIONS.length)} سؤال</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: toAr(UNITS_DATA.length), l: 'وحدات', icon: '📚' },
            { n: toAr(UNITS_DATA.reduce((s, u) => s + u.lessons.length, 0)), l: 'دروس', icon: '📖' },
            { n: toAr(ALL_QUESTIONS.length), l: 'سؤال تفاعلي', icon: '❓' },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-violet-600">{s.n}</div>
              <div className="text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <button onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-violet-600 transition">
            <Filter className="w-4 h-4" />
            تصفية الأسئلة
            <ChevronLeft className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-90' : ''}`} />
          </button>
          {showFilters && (
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1.5">مستوى الصعوبة:</p>
                <div className="flex gap-2 flex-wrap">
                  {[['all', 'الكل'], ['easy', 'سهل'], ['medium', 'متوسط'], ['hard', 'صعب']].map(([v, l]) => (
                    <button key={v} onClick={() => setFilterDiff(v)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition ${filterDiff === v ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{l}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1.5">تصنيف بلوم:</p>
                <div className="flex gap-2 flex-wrap">
                  {[['all', 'الكل'], ...Object.entries(BLOOM_LABELS)].map(([v, l]) => (
                    <button key={v} onClick={() => setFilterBloom(v)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition ${filterBloom === v ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{l}</button>
                  ))}
                </div>
              </div>
              {(filterDiff !== 'all' || filterBloom !== 'all') && (
                <button onClick={() => { setFilterDiff('all'); setFilterBloom('all'); }}
                  className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 transition">
                  <RotateCcw className="w-3 h-3" />إعادة ضبط
                </button>
              )}
            </div>
          )}
        </div>

        {/* Units and Lessons */}
        {UNITS_DATA.map((u, ui) => (
          <div key={u.id} className="space-y-4">
            {/* Unit header */}
            <div className="rounded-2xl p-5 flex items-center gap-4 shadow-md"
              style={{ background: `linear-gradient(135deg,${u.color},${u.color}bb)` }}>
              <span className="text-4xl">{u.icon}</span>
              <div>
                <h2 className="text-white font-bold text-base sm:text-lg">{u.title}</h2>
                <p className="text-white/70 text-sm">
                  {toAr(u.lessons.reduce((s, l) => s + getQuestionsByLesson(l.id).length, 0))} سؤال تفاعلي
                </p>
              </div>
              <div className="mr-auto">
                <GoldenSeal size={36} />
              </div>
            </div>

            {/* Lessons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {u.lessons.map((l, li) => {
                const lq = getQuestionsByLesson(l.id);
                const done = lq.filter(qq => progress[qq.id]?.isCorrect).length;
                const pctDone = lq.length > 0 ? Math.round((done / lq.length) * 100) : 0;
                return (
                  <motion.button key={l.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: li * 0.06 }}
                    onClick={() => openLesson(ui, li)} whileHover={{ scale: 1.02 }}
                    className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all p-4 text-right">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                        style={{ background: u.color }}>{u.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-800 group-hover:text-violet-700 transition leading-snug">{l.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {toAr(lq.length)} سؤال · ص{toAr(l.page)}
                        </p>
                        {done > 0 && (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-slate-500 mb-0.5">
                              <span>{toAr(done)} صحيحة</span>
                              <span>{toAr(pctDone)}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full transition-all rounded-full" style={{ width: `${pctDone}%`, background: u.color }} />
                            </div>
                          </div>
                        )}
                      </div>
                      <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-violet-500 transition mt-1 flex-shrink-0" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Credits */}
        <div className="text-center py-4">
          <div className="flex justify-center gap-2 mb-2">
            {[0,1,2].map(i => <GoldenSeal key={i} size={28} />)}
          </div>
          <p className="text-xs text-slate-400">{META.publisher} · {META.book}</p>
        </div>
      </div>

      {showPrint && <PrintModal onClose={() => setShowPrint(false)} />}
    </div>
  );
}