import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Printer, Home, X, Moon, Sun, Crown, CheckCircle2, XCircle, BookOpen, ArrowRight, ArrowLeft, Trophy } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { META, UNITS, BLOOM_LABELS, DIFFICULTY_LABELS, getQuestionsByLesson } from '@/lib/lughatiGrade3S1Bank';

const COLORS = ['#e91e8c','#0891b2','#059669','#d97706'];
const LETTERS = ['أ','ب','ج','د'];
const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const STORAGE_KEY = 'lughati_g3_s1_progress';
const NAME_KEY = 'lughati_g3_s1_name';

function TypewriterText({ text, speed = 22 }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    setShown('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <>{shown}<span className="animate-pulse">▌</span></>;
}

function TeacherSVG({ size = 80 }) {
  return (
    <svg width={size} height={Math.round(size * 1.35)} viewBox="0 0 120 162" fill="none">
      <ellipse cx="60" cy="158" rx="32" ry="7" fill="#e8d5b7" opacity="0.4" />
      <rect x="32" y="88" width="56" height="66" rx="14" fill="#eef2ff" />
      <rect x="48" y="88" width="24" height="6" rx="3" fill="#4f46e5" opacity="0.7" />
      <circle cx="60" cy="70" r="25" fill="#f5d0a9" />
      <ellipse cx="60" cy="52" rx="26" ry="13" fill="white" />
      <rect x="34" y="52" width="52" height="20" rx="4" fill="white" />
      <ellipse cx="60" cy="52" rx="22" ry="6" fill="none" stroke="#222" strokeWidth="4" />
      <circle cx="52" cy="71" r="3.5" fill="white" />
      <circle cx="68" cy="71" r="3.5" fill="white" />
      <circle cx="53" cy="72" r="2" fill="#2c1810" />
      <circle cx="69" cy="72" r="2" fill="#2c1810" />
      <path d="M48 67 Q52 65 56 67" stroke="#3d2b1f" strokeWidth="1.5" fill="none" />
      <path d="M64 67 Q68 65 72 67" stroke="#3d2b1f" strokeWidth="1.5" fill="none" />
      <ellipse cx="60" cy="76" rx="2" ry="2.5" fill="#e8b88a" />
      <path d="M53 81 Q60 87 67 81" stroke="#c0392b" strokeWidth="1.5" fill="none" />
      <rect x="80" y="90" width="4" height="20" rx="2" fill="#4f46e5" transform="rotate(15 80 90)" />
      <rect x="18" y="95" width="18" height="10" rx="5" fill="#eef2ff" transform="rotate(-25 18 95)" />
    </svg>
  );
}

function Blackboard({ text }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#5C3A1E', background: '#1a3a2a' }}>
      <div className="flex items-center gap-2 px-3 py-1.5" style={{ background: '#5C3A1E' }}>
        {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
          <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <span className="text-xs text-amber-200 font-mono mr-auto">السبورة ✦</span>
      </div>
      <div className="p-4 font-mono text-green-100 text-sm leading-relaxed min-h-20 text-right" dir="rtl">
        <TypewriterText text={text} />
      </div>
    </div>
  );
}

function GoldenSeal() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg text-xs flex-shrink-0"
      style={{ background: 'linear-gradient(135deg,#c9a227,#f4d03f,#c9a227)', animation: 'pulse 2s infinite' }}>⭐⭐⭐</div>
  );
}

function GoldenRuleBox({ text }) {
  return (
    <div className="rounded-xl p-3 border-2 mt-3" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg,#fef9e7,#fff8dc)' }}>
      <div className="flex items-center gap-2 mb-1">
        <Crown className="w-4 h-4 text-amber-600" />
        <span className="font-bold text-amber-800 text-xs">القاعدة الذهبية</span>
        <Crown className="w-4 h-4 text-amber-600" />
      </div>
      <p className="text-slate-800 text-xs font-medium" dir="rtl">{text}</p>
    </div>
  );
}

function MCQ({ q, onAnswer, answered }) {
  return (
    <div className="space-y-2" dir="rtl">
      {q.options.map((opt, i) => {
        const ok = opt.correct;
        const chosen = answered?.chosen === i;
        const showOk = answered && ok;
        const showBad = answered && chosen && !ok;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(i, ok)}
            className="w-full text-right rounded-xl p-3 border-2 transition-all flex items-center gap-2.5 disabled:cursor-default"
            style={{ borderColor: showOk ? '#059669' : showBad ? '#dc2626' : COLORS[i] + '55', background: showOk ? '#ecfdf5' : showBad ? '#fef2f2' : 'white' }}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-sm" style={{ background: COLORS[i] }}>{LETTERS[i]}</span>
            <span className="flex-1 text-slate-800 text-sm">{opt.text}</span>
            {showOk && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            {showBad && <XCircle className="w-5 h-5 text-red-600" />}
          </button>
        );
      })}
    </div>
  );
}

function TFQ({ q, onAnswer, answered }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-2" dir="rtl">
      {[true, false].map((val, i) => {
        const chosen = answered?.chosen === val;
        const showOk = answered && val === q.correctAnswer;
        const showBad = answered && chosen && val !== q.correctAnswer;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(val, val === q.correctAnswer)}
            className="rounded-2xl p-4 border-2 transition-all flex flex-col items-center gap-2 disabled:cursor-default"
            style={{ borderColor: showOk ? '#059669' : showBad ? '#dc2626' : val ? '#05966955' : '#dc262655', background: showOk ? '#ecfdf5' : showBad ? '#fef2f2' : 'white' }}>
            {val ? <CheckCircle2 className="w-9 h-9 text-emerald-600" /> : <XCircle className="w-9 h-9 text-red-500" />}
            <span className="font-bold text-sm">{val ? 'صواب ✓' : 'خطأ ✗'}</span>
          </button>
        );
      })}
    </div>
  );
}

function OrderingQ({ q, onAnswer }) {
  const [items, setItems] = useState(() => q.items.map((t, i) => ({ t, original: i })).sort(() => Math.random() - 0.5));
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = items.every((it, i) => it.original === q.correctOrder[i]);
  const move = (from, to) => {
    if (submitted) return;
    const n = [...items];
    const [m] = n.splice(from, 1);
    n.splice(to, 0, m);
    setItems(n);
  };
  return (
    <div className="space-y-2" dir="rtl">
      <p className="text-xs text-slate-500">استخدم الأسهم لترتيب العناصر:</p>
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i + 1)}</span>
          <div className="flex-1 rounded-xl p-2.5 border-2 border-slate-200 bg-white text-slate-800 text-sm">{it.t}</div>
          <button disabled={i === 0 || submitted} onClick={() => move(i, i - 1)} className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 text-xs">▲</button>
          <button disabled={i === items.length - 1 || submitted} onClick={() => move(i, i + 1)} className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 text-xs">▼</button>
        </div>
      ))}
      {!submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full mt-2 rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">تحقّق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
          {isCorrect ? '✓ ترتيب صحيح!' : '✗ الترتيب الصحيح: ' + q.correctOrder.map((i) => q.items[i]).join(' ← ')}
        </div>
      )}
    </div>
  );
}

function MatchingQ({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const rights = useMemo(() => [...q.pairs].map((p, i) => ({ text: p.right, original: i })).sort(() => Math.random() - 0.5), [q]);
  const pick = (side, idx) => {
    if (submitted) return;
    if (side === 'left') setSelected(idx);
    else { if (selected === null) return; setMatches({ ...matches, [selected]: idx }); setSelected(null); }
  };
  const isCorrect = q.pairs.every((p, i) => matches[i] === i);
  return (
    <div className="space-y-2" dir="rtl">
      <p className="text-xs text-slate-500">اضغط عنصراً ثم اضغط نظيره:</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          {q.pairs.map((p, i) => (
            <button key={i} onClick={() => pick('left', i)} disabled={submitted || matches[i] !== undefined}
              className={`w-full rounded-xl p-2 border-2 text-right text-xs ${selected === i ? 'border-amber-500 bg-amber-50' : 'border-slate-200 bg-white'} ${matches[i] !== undefined ? 'opacity-50' : ''}`}>{p.left}</button>
          ))}
        </div>
        <div className="space-y-1.5">
          {rights.map((r, i) => {
            const matched = Object.entries(matches).find(([, v]) => v === i);
            return (
              <button key={i} onClick={() => pick('right', i)} disabled={submitted || !!matched}
                className={`w-full rounded-xl p-2 border-2 text-right text-xs ${matched ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>{r.text}</button>
            );
          })}
        </div>
      </div>
      {Object.keys(matches).length === q.pairs.length && !submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">تحقّق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ صحيح!' : '✗ راجع الإجابات'}</div>
      )}
    </div>
  );
}

function ClassifyQ({ q, onAnswer }) {
  const [buckets, setBuckets] = useState(q.categories.map(() => []));
  const [pool, setPool] = useState(q.items.map((it, i) => ({ ...it, id: i })));
  const [sel, setSel] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const moveTo = (ci) => {
    if (submitted || sel === null) return;
    setBuckets(buckets.map((b, i) => (i === ci ? [...b.filter((x) => x.id !== sel.id), sel] : b.filter((x) => x.id !== sel.id))));
    setPool(pool.filter((x) => x.id !== sel.id));
    setSel(null);
  };
  const removeFrom = (item, ci) => {
    if (submitted) return;
    setBuckets(buckets.map((b, i) => (i === ci ? b.filter((x) => x.id !== item.id) : b)));
    setPool([...pool, item]);
  };
  const isCorrect = q.items.every((it, i) => {
    const bi = buckets.findIndex((b) => b.some((x) => x.id === i));
    return bi === it.correct_category;
  });
  return (
    <div className="space-y-3" dir="rtl">
      {pool.length > 0 && (
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-500 mb-2">اضغط عنصراً ثم اضغط العمود المناسب:</p>
          <div className="flex flex-wrap gap-2">
            {pool.map((it) => (
              <span key={it.id} onClick={() => setSel(it)} className={`px-2.5 py-1 rounded-lg border cursor-pointer text-xs ${sel?.id === it.id ? 'border-amber-500 bg-amber-50' : 'bg-white border-slate-300 hover:border-amber-400'}`}>{it.text}</span>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(q.categories.length, 2)},1fr)` }}>
        {q.categories.map((cat, ci) => (
          <div key={ci} onClick={() => moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-2.5 min-h-24 cursor-pointer hover:border-emerald-300 transition-colors">
            <h4 className="font-bold text-xs text-center mb-2 text-slate-700 border-b pb-1">{cat}</h4>
            <div className="space-y-1">
              {buckets[ci].map((it) => (
                <div key={it.id} onClick={(e) => { e.stopPropagation(); removeFrom(it, ci); }} className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between items-center cursor-pointer hover:bg-red-50">
                  <span>{it.text}</span><X className="w-3 h-3 text-red-400" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {pool.length === 0 && !submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">تحقّق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ تصنيف صحيح!' : '✗ راجع التصنيف'}</div>
      )}
    </div>
  );
}

function FillBlankQ({ q, onAnswer }) {
  const [filled, setFilled] = useState(q.blanks.map(() => null));
  const [pool, setPool] = useState(q.wordBank.map((w, i) => ({ w, id: i, used: false })));
  const [selWord, setSelWord] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const place = (bi) => {
    if (submitted || selWord === null) return;
    const next = [...filled];
    const prev = next[bi];
    setPool(pool.map((p) => {
      if (p.id === selWord) return { ...p, used: true };
      if (prev !== null && p.id === prev) return { ...p, used: false };
      return p;
    }));
    next[bi] = selWord;
    setFilled(next);
    setSelWord(null);
  };
  const remove = (bi) => {
    if (submitted) return;
    const next = [...filled];
    const wId = next[bi];
    if (wId === null) return;
    next[bi] = null;
    setFilled(next);
    setPool(pool.map((p) => (p.id === wId ? { ...p, used: false } : p)));
  };
  const isCorrect = filled.every((f, i) => pool.find((p) => p.id === f)?.w === q.blanks[i]);
  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-xs text-slate-500">اضغط كلمة ثم الفراغ المناسب:</p>
      <div className="rounded-xl p-3 bg-white border-2 border-slate-200 text-sm leading-8">
        {q.blanks.map((b, i) => (
          <button key={i} onClick={() => place(i)} disabled={submitted} onDoubleClick={() => remove(i)}
            className={`inline-block mx-1 px-2 py-0.5 rounded-lg border-2 border-dashed min-w-14 text-center text-xs ${filled[i] !== null ? 'border-emerald-400 bg-emerald-50' : 'border-amber-400 bg-amber-50 hover:bg-amber-100'}`}>
            {filled[i] !== null ? pool.find((p) => p.id === filled[i])?.w : '___'}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map((w) => (
          <button key={w.id} disabled={w.used || submitted} onClick={() => !w.used && setSelWord(w.id)}
            className={`px-3 py-1.5 rounded-lg border-2 text-xs transition-all ${w.used ? 'opacity-30 border-slate-200 bg-slate-50' : selWord === w.id ? 'border-emerald-500 bg-emerald-50 scale-105' : 'border-slate-300 bg-white hover:border-emerald-400 cursor-pointer'}`}>
            {w.w}
          </button>
        ))}
      </div>
      {filled.every((f) => f !== null) && !submitted && (
        <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">تحقّق ✓</button>
      )}
      {submitted && (
        <div className={`rounded-xl p-3 font-bold text-sm ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ صحيح!' : '✗ الإجابة: ' + q.blanks.join(' — ')}</div>
      )}
    </div>
  );
}

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
  multipleChoice: 'اختيار من متعدد', trueFalse: 'صواب أم خطأ', ordering: 'ترتيب',
  matching: 'مطابقة', classify: 'تصنيف', fillBlank: 'تعبئة فراغات',
};

function PrintModal({ onClose }) {
  const [withExp, setWithExp] = useState(true);
  const doPrint = () => {
    const allQs = UNITS.flatMap((u) => u.lessons.flatMap((l) => getQuestionsByLesson(l.id)));
    const w = window.open('', '_blank');
    const html = `<html dir="rtl"><head><title>${META.title}</title><style>
      body{font-family:'Tajawal',Arial,sans-serif;padding:20px;color:#222;direction:rtl;font-size:13px}
      .q{border:1px solid #ccc;border-radius:8px;padding:12px;margin:8px 0;page-break-inside:avoid;position:relative}
      .badge{padding:2px 6px;border-radius:10px;background:#f0f4ff;color:#333;font-size:10px;display:inline-block;margin:2px}
      .opt{padding:4px 8px;margin:3px 0;border-radius:4px;display:flex;align-items:center;gap:6px;font-size:12px}
      .correct{background:#d4f4dd;border:1px solid #059669;font-weight:bold}
      .exp{background:#e8f5e9;border:1px solid #059669;border-radius:6px;padding:6px;margin:5px 0;font-size:12px}
      .rule{background:#fff8dc;border:2px solid #c9a227;border-radius:8px;padding:6px;margin:5px 0;font-size:12px}
      .seal{position:absolute;top:8px;left:8px;font-size:14px}
      .pg{color:#059669;font-weight:bold;font-size:11px}
      h1{text-align:center;color:#0a1628;border-bottom:3px solid #059669;padding-bottom:8px}
      .footer{margin-top:20px;text-align:center;font-size:10px;color:#888;border-top:1px solid #ddd;padding-top:8px}
    </style></head><body>
      <h1>${META.title}</h1>
      <p style="text-align:center;color:#666">${META.subject} — ${META.grade} — ${META.term} · ${toAr(allQs.length)} سؤال</p>
      ${allQs.map((q, qi) => `<div class="q"><span class="seal">⭐⭐⭐</span>
        <div><span class="badge">س${qi + 1}</span><span class="badge">ص${q.page}</span><span class="badge">${BLOOM_LABELS[q.bloom]}</span><span class="badge">${DIFFICULTY_LABELS[q.difficulty]}</span></div>
        <p style="font-weight:bold;margin:5px 0">${q.question}</p>
        <div>${q.type === 'trueFalse' ? '<div class="opt">صواب ✓</div><div class="opt">خطأ ✗</div>' : (q.options || []).map((o, i) => `<div class="opt ${o.correct ? 'correct' : ''}"><span style="background:${COLORS[i]};color:white;padding:1px 6px;border-radius:4px;font-weight:bold">${LETTERS[i]}</span>${o.text}</div>`).join('')}</div>
        ${withExp ? `<div class="exp"><strong>الشرح:</strong> ${q.explanation}</div><div class="rule">👑 <strong>القاعدة الذهبية:</strong> ${q.goldenRule}</div>` : ''}
        <p class="pg">📖 من الكتاب (ص${q.page}): ${q.paragraph}</p>
      </div>`).join('')}
      <div class="footer">${META.publisher} · ${META.book || ''}</div>
    </body></html>`;
    w.document.write(html);
    w.document.close();
    w.print();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full p-5" dir="rtl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-base">طباعة PDF</h3>
          <button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button>
        </div>
        <label className="flex items-center gap-2 mb-3">
          <input type="checkbox" checked={withExp} onChange={(e) => setWithExp(e.target.checked)} />
          <span className="text-sm">مع الشروحات والقاعدة الذهبية</span>
        </label>
        <button onClick={doPrint} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3 flex items-center justify-center gap-2">
          <Printer className="w-5 h-5" />طباعة الآن
        </button>
      </motion.div>
    </div>
  );
}

export default function LughatiGrade3S1() {
  const { isRTL } = useLang();
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
  });
  const [dark, setDark] = useState(() => localStorage.getItem(STORAGE_KEY + '_dark') === 'true');
  const [studentName, setStudentName] = useState(() => localStorage.getItem(NAME_KEY) || '');
  const [nameInput, setNameInput] = useState('');
  const [active, setActive] = useState(null); // { unitIdx, lessonIdx }
  const [qIdx, setQIdx] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [feedbackAns, setFeedbackAns] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showPrint, setShowPrint] = useState(false);
  const [showExit, setShowExit] = useState(false);

  useEffect(() => { localStorage.setItem(STORAGE_KEY + '_dark', dark); }, [dark]);
  useEffect(() => { setAnswered(null); setFeedbackAns(null); setShowFeedback(false); }, [qIdx, active]);

  const unit = active ? UNITS[active.unitIdx] : null;
  const lesson = active ? unit?.lessons[active.lessonIdx] : null;
  const questions = lesson ? getQuestionsByLesson(lesson.id) : [];
  const q = questions[qIdx];
  const totalCorrect = Object.values(progress).filter((p) => p?.isCorrect).length;

  const saveProg = (p) => localStorage.setItem(STORAGE_KEY, JSON.stringify(p));

  const openLesson = (ui, li) => {
    setActive({ unitIdx: ui, lessonIdx: li });
    setQIdx(0);
    setAnswered(null);
    setFeedbackAns(null);
    setShowFeedback(false);
    setScore({ correct: 0, total: 0 });
  };

  const handleAnswer = (chosen, isCorrect) => {
    setAnswered({ chosen, isCorrect });
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    if (q) {
      const p = { ...progress };
      p[q.id] = { isCorrect, ts: Date.now() };
      setProgress(p);
      saveProg(p);
    }
    if (isCorrect) {
      setTimeout(() => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); }, 1500);
    } else if (q?.feedbackQuestion) {
      setTimeout(() => setShowFeedback(true), 700);
    }
  };

  const next = () => { if (qIdx < questions.length - 1) setQIdx(qIdx + 1); };
  const prev = () => { if (qIdx > 0) setQIdx(qIdx - 1); };
  const backToLessons = () => { setActive(null); };

  // ── شاشة الاسم ──
  if (!studentName) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#faf8f0' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2" style={{ borderColor: '#3a57e8' }} dir="rtl">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{META.icon}</div>
            <h1 className="font-bold text-xl text-slate-800">{META.title}</h1>
            <p className="text-slate-500 text-sm">{META.subject}</p>
            <p className="text-xs text-slate-400 mt-1">{META.grade} — {META.term}</p>
            <div className="text-amber-500 text-lg mt-2">⭐⭐⭐</div>
          </div>
          <p className="text-sm text-slate-600 mb-3 text-center">أدخل اسمك للبدء:</p>
          <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && nameInput.trim()) { localStorage.setItem(NAME_KEY, nameInput.trim()); setStudentName(nameInput.trim()); } }}
            placeholder="اسمك هنا..." className="w-full rounded-xl border-2 border-slate-200 p-3 text-slate-800 mb-4 focus:outline-none text-center" dir="rtl" />
          <button disabled={!nameInput.trim()} onClick={() => { localStorage.setItem(NAME_KEY, nameInput.trim()); setStudentName(nameInput.trim()); }}
            className="w-full rounded-xl text-white font-bold py-3 disabled:opacity-40" style={{ background: '#3a57e8' }}>
            ابدأ التعلم
          </button>
        </motion.div>
      </div>
    );
  }

  // ── شاشة الدرس (الأسئلة) ──
  if (active && q) {
    const progressPct = Math.round(((qIdx + 1) / questions.length) * 100);
    return (
      <div className={`min-h-screen transition-colors ${dark ? 'bg-gray-900' : 'bg-[#faf8f0]'}`} dir="rtl">
        {/* Header */}
        <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-sm" style={{ background: '#0a1628', borderBottom: '2px solid #c9a227' }}>
          <div className="flex items-center gap-2">
            <button onClick={() => setDark(!dark)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              {dark ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-white" />}
            </button>
            <button onClick={() => setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
              <Printer className="w-4 h-4 text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#c9a22733' }}>
              <Trophy className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
              <span className="font-bold text-xs" style={{ color: '#c9a227' }}>{toAr(totalCorrect)}</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm">{lesson.title}</p>
            <p className="text-white/50 text-xs">{unit.title}</p>
          </div>
          <button onClick={() => setShowExit(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/50">
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className={`max-w-2xl mx-auto px-4 py-5 pb-12 ${dark ? 'text-white' : ''}`}>
          {/* شريط التنقل */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <button onClick={backToLessons} className="flex items-center gap-1 hover:text-slate-800">
              <ChevronRight className="w-4 h-4" />عودة للدروس
            </button>
            <span className="font-bold">{toAr(qIdx + 1)} / {toAr(questions.length)}</span>
            <button onClick={next} disabled={qIdx === questions.length - 1} className="flex items-center gap-1 hover:text-slate-800 disabled:opacity-30">
              التالي<ChevronRight className="w-4 h-4 rotate-180" />
            </button>
          </div>
          <div className="h-2 rounded-full bg-slate-200 overflow-hidden mb-4">
            <div className="h-full transition-all" style={{ width: `${progressPct}%`, background: unit.color }} />
          </div>

          {/* بطاقة السؤال */}
          <AnimatePresence mode="wait">
            <motion.div key={qIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
              <div className="absolute top-4 left-4"><GoldenSeal /></div>
              <div className="flex flex-wrap gap-1.5 mb-3 text-xs" dir="rtl">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">ص{toAr(q.page)}</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">{BLOOM_LABELS[q.bloom]}</span>
                <span className={`px-2 py-0.5 rounded-full ${q.difficulty === 'easy' ? 'bg-emerald-100 text-emerald-700' : q.difficulty === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>{DIFFICULTY_LABELS[q.difficulty]}</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{TYPE_LABELS[q.type] || q.type}</span>
              </div>
              <h3 className="font-body font-bold text-sm text-slate-900 mb-3 leading-snug pe-12" dir="rtl">{q.question}</h3>
              <QRenderer q={q} onAnswer={handleAnswer} answered={answered} />

              {/* الإجابة الخاطئة: المعلم + السبورة + القاعدة + سؤال التغذية */}
              {answered && !answered.isCorrect && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 space-y-3">
                  <div className="rounded-xl p-3 border-r-4 border-red-500 bg-red-50 text-xs text-red-700" dir="rtl">
                    <strong>📖 من الكتاب (ص{toAr(q.page)}):</strong> {q.paragraph}
                  </div>
                  <div className="flex items-start gap-3">
                    <TeacherSVG size={70} />
                    <div className="flex-1"><Blackboard text={q.explanation} /></div>
                  </div>
                  <GoldenRuleBox text={q.goldenRule} />
                  {q.feedbackQuestion && showFeedback && (
                    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-3 mt-3">
                      <p className="font-bold text-blue-800 text-xs mb-2">💡 سؤال مشابه للتدرّب</p>
                      <p className="mb-2 text-slate-700 text-sm" dir="rtl">{q.feedbackQuestion.question}</p>
                      <MCQ q={q.feedbackQuestion} onAnswer={(c, ok) => setFeedbackAns({ chosen: c, isCorrect: ok })} answered={feedbackAns} />
                    </div>
                  )}
                </motion.div>
              )}

              {/* الإجابة الصحيحة */}
              {answered?.isCorrect && (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                  className="mt-3 rounded-xl p-3 bg-emerald-50 border border-emerald-200 text-center">
                  <span className="text-xl">🌟</span>
                  <p className="text-emerald-700 font-bold text-sm">ممتاز! إجابة صحيحة</p>
                </motion.div>
              )}

              {/* أزرار التنقل بعد الإجابة */}
              {answered && (
                <div className="mt-3 flex justify-between items-center" dir="rtl">
                  <button onClick={next} disabled={qIdx === questions.length - 1} className="rounded-xl text-white font-bold px-5 py-2 text-sm disabled:opacity-40" style={{ background: unit.color }}>
                    {qIdx < questions.length - 1 ? 'التالي ←' : 'النهاية ✓'}
                  </button>
                  <div className="text-xs text-slate-500">{toAr(score.correct)}/{toAr(score.total)} صحيحة</div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {showPrint && <PrintModal onClose={() => setShowPrint(false)} />}
        {showExit && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowExit(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-sm w-full p-5 text-center" dir="rtl">
              <h3 className="font-bold text-base mb-3">ملخص الجلسة</h3>
              <div className="space-y-2 text-sm mb-4">
                <p>أسئلة محلولة: <strong>{toAr(score.total)}</strong></p>
                <p>إجابات صحيحة: <strong className="text-emerald-600">{toAr(score.correct)}</strong></p>
                <p>نسبة الدقة: <strong>{toAr(Math.round(score.total ? (score.correct / score.total) * 100 : 0))}%</strong></p>
                <p>نقاط مكتسبة: <strong className="text-amber-600">{toAr(score.correct)}</strong> 🏆</p>
              </div>
              <p className="text-xs text-slate-500 mb-4">أحسنت {studentName}! واصل التعلّم 🌟</p>
              <div className="flex gap-2">
                <button onClick={() => { setActive(null); setShowExit(false); }} className="flex-1 rounded-xl bg-slate-100 text-slate-700 font-bold py-2.5 text-sm">العودة للبنك</button>
                <button onClick={() => { setStudentName(''); setShowExit(false); }} className="flex-1 rounded-xl text-white font-bold py-2.5 text-sm" style={{ background: '#3a57e8' }}>إعادة التشغيل</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  // ── شاشة الوحدات والدروس ──
  return (
    <div className={`min-h-screen transition-colors ${dark ? 'bg-gray-900' : 'bg-[#faf8f0]'}`} dir="rtl">
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-sm" style={{ background: '#0a1628', borderBottom: '2px solid #c9a227' }}>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
            {dark ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-white" />}
          </button>
          <button onClick={() => setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
            <Printer className="w-4 h-4 text-white" />
          </button>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#c9a22733' }}>
            <Trophy className="w-3.5 h-3.5" style={{ color: '#c9a227' }} />
            <span className="font-bold text-xs" style={{ color: '#c9a227' }}>{toAr(totalCorrect)}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-bold text-sm">{META.subject} · {META.grade}</p>
          <p className="text-white/50 text-xs">{META.term}</p>
        </div>
        <Link to="/" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
          <Home className="w-4 h-4 text-white" />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-5 space-y-6">
        {/* غلاف البنك */}
        <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-xl" style={{ background: 'linear-gradient(135deg,#0a1628,#3a57e8)' }}>
          <div className="absolute top-3 left-3 text-xl opacity-60">⭐⭐⭐</div>
          <div className="absolute top-3 right-3 text-xl opacity-60">✦</div>
          <div className="text-4xl mb-2">{META.icon}</div>
          <h1 className="text-white font-bold text-lg mb-1">{META.title}</h1>
          <p className="text-white/60 text-xs">{META.subject} · {META.grade} · {META.term}</p>
          <div className="mt-2 flex justify-center gap-2">
            <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80">{studentName} 👋</div>
            <div className="px-3 py-1 rounded-full text-xs" style={{ background: '#c9a22733', color: '#c9a227' }}>{toAr(totalCorrect)} صحيحة ✓</div>
          </div>
        </div>

        {/* إحصائيات */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: toAr(UNITS.length), l: 'وحدات' },
            { n: toAr(UNITS.reduce((s, u) => s + u.lessons.length, 0)), l: 'دروس' },
            { n: toAr(UNITS.reduce((s, u) => s + u.lessons.reduce((sl, l) => sl + getQuestionsByLesson(l.id).length, 0), 0)), l: 'سؤال' },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
              <div className="text-2xl font-bold text-primary">{s.n}</div>
              <div className="text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>

        {/* الوحدات والدروس */}
        {UNITS.map((u, ui) => (
          <div key={u.id} className="space-y-4">
            <div className="rounded-2xl p-4 flex items-center gap-3" style={{ background: `linear-gradient(135deg,${u.color},${u.color}cc)` }}>
              <span className="text-3xl">{u.icon}</span>
              <div>
                <h2 className="text-white font-bold text-base">{u.title}</h2>
                <p className="text-white/70 text-xs">{toAr(u.lessons.reduce((s, l) => s + getQuestionsByLesson(l.id).length, 0))} سؤال</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {u.lessons.map((l, li) => {
                const lq = getQuestionsByLesson(l.id);
                const done = lq.filter((qq) => progress[qq.id]?.isCorrect).length;
                return (
                  <motion.button key={l.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: li * 0.05 }}
                    onClick={() => openLesson(ui, li)}
                    className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-md transition-all p-4 text-right flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style={{ background: u.color }}>
                      {toAr(li + 1)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800">{l.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{toAr(lq.length)} سؤال · ص{toAr(l.page)}</p>
                      {done > 0 && (
                        <div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${(done / lq.length) * 100}%` }} />
                        </div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {showPrint && <PrintModal onClose={() => setShowPrint(false)} />}
    </div>
  );
}