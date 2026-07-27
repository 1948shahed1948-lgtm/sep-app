import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import TeacherBlackboard, { GoldenRuleBox } from './TeacherBlackboard';

const OPTION_COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];

// ===== اختيار من متعدد =====
function MultipleChoice({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const choose = (i) => {
    if (picked !== null) return;
    setPicked(i);
    onAnswer(i === q.correctAnswer, i, q.correctAnswer);
  };
  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      {q.image && <img src={q.image} alt="صورة السؤال" className="rounded-xl w-full max-h-60 object-cover border border-slate-200" />}
      <div className="grid sm:grid-cols-2 gap-3">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = q.correctAnswer === i;
          let style = { backgroundColor: opt.color, color: 'white' };
          if (picked !== null) {
            if (isCorrect) style = { backgroundColor: '#059669', color: 'white' };
            else if (isPicked) style = { backgroundColor: '#dc2626', color: 'white' };
            else style = { backgroundColor: '#94a3b8', color: 'white' };
          }
          return (
            <button key={i} onClick={() => choose(i)} disabled={picked !== null}
              style={style}
              className="flex items-center gap-3 px-4 py-4 rounded-xl text-start font-bold text-base shadow-sm hover:scale-[1.02] transition-transform disabled:cursor-not-allowed min-h-[56px]">
              <span className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-sm flex-shrink-0">
                {picked !== null && isCorrect ? '✓' : picked !== null && isPicked ? '✗' : ['أ', 'ب', 'ج', 'د'][i]}
              </span>
              <span className="flex-1">{opt.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ===== صح أو خطأ =====
function TrueFalse({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const choose = (val) => {
    if (picked !== null) return;
    setPicked(val);
    onAnswer(val === q.correctAnswer, val, q.correctAnswer);
  };
  return (
    <div className="space-y-4">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      {q.image && <img src={q.image} alt="صورة السؤال" className="rounded-xl w-full max-h-60 object-cover border border-slate-200" />}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => choose(true)} disabled={picked !== null}
          className={`flex items-center justify-center gap-2 py-8 rounded-xl text-lg font-bold shadow-sm transition-all ${picked === null ? 'bg-emerald-500 text-white hover:scale-[1.02]' : picked === true && q.correctAnswer === true ? 'bg-emerald-600 text-white' : picked === true ? 'bg-red-500 text-white' : 'bg-slate-300 text-slate-500'}`}>
          <span className="text-2xl">✓</span> صح
        </button>
        <button onClick={() => choose(false)} disabled={picked !== null}
          className={`flex items-center justify-center gap-2 py-8 rounded-xl text-lg font-bold shadow-sm transition-all ${picked === null ? 'bg-rose-500 text-white hover:scale-[1.02]' : picked === false && q.correctAnswer === false ? 'bg-emerald-600 text-white' : picked === false ? 'bg-red-500 text-white' : 'bg-slate-300 text-slate-500'}`}>
          <span className="text-2xl">✗</span> خطأ
        </button>
      </div>
    </div>
  );
}

// ===== ترتيب العناصر =====
function Ordering({ q, onAnswer }) {
  const [items, setItems] = useState(() => {
    const arr = q.items.map((t, i) => ({ t, original: i }));
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  });
  const [dragIdx, setDragIdx] = useState(null);

  const move = (from, to) => {
    const arr = [...items];
    const [m] = arr.splice(from, 1);
    arr.splice(to, 0, m);
    setItems(arr);
  };
  const submit = () => {
    const order = items.map((it) => it.original);
    const ok = order.every((v, i) => v === q.correctOrder[i]);
    onAnswer(ok, order, q.correctOrder);
  };

  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      <p className="text-xs text-slate-500">اسحب العناصر لترتيبها ثم اضغط "تأكيد الترتيب"</p>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={it.original} draggable onDragStart={() => setDragIdx(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => { if (dragIdx !== null) { move(dragIdx, i); setDragIdx(null); } }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-amber-400 cursor-move shadow-sm">
            <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
            <span className="flex-1 text-slate-800 font-medium">{it.t}</span>
          </div>
        ))}
      </div>
      <button onClick={submit} className="w-full py-3 rounded-xl bg-primary text-white font-bold">تأكيد الترتيب</button>
    </div>
  );
}

// ===== مطابقة وتوصيل =====
function Matching({ q, onAnswer }) {
  const lefts = q.pairs.map((p, i) => ({ ...p, i }));
  const rights = useMemo(() => {
    const arr = q.pairs.map((p, i) => ({ ...p, i }));
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  }, []);
  const [matched, setMatched] = useState({}); // leftIndex -> rightIndex
  const [selLeft, setSelLeft] = useState(null);

  const clickLeft = (li) => { if (matched[li] === undefined) setSelLeft(li); };
  const clickRight = (ri) => {
    if (selLeft === null) return;
    const nm = { ...matched, [selLeft]: ri };
    setMatched(nm);
    setSelLeft(null);
    if (Object.keys(nm).length === lefts.length) {
      const ok = lefts.every((l) => nm[l.i] === l.i);
      onAnswer(ok, nm, lefts.reduce((o, l) => ({ ...o, [l.i]: l.i }), {}));
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      <p className="text-xs text-slate-500">اضغط على عنصر من اليمين ثم نظيره من اليسار</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {lefts.map((l) => (
            <button key={l.i} onClick={() => clickLeft(l.i)}
              className={`w-full text-start px-3 py-3 rounded-xl border-2 font-medium text-sm ${selLeft === l.i ? 'border-amber-500 bg-amber-50' : matched[l.i] !== undefined ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
              {l.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rights.map((r) => {
            const used = Object.values(matched).includes(r.i);
            return (
              <button key={r.i} onClick={() => clickRight(r.i)} disabled={used}
                className={`w-full text-start px-3 py-3 rounded-xl border-2 font-medium text-sm ${used ? 'border-emerald-400 bg-emerald-50 opacity-60' : 'border-slate-200 bg-white hover:border-amber-300'}`}>
                {r.right}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ===== تصنيف في أعمدة =====
function Classify({ q, onAnswer }) {
  const [items, setItems] = useState(() => {
    const arr = q.items.map((it, i) => ({ ...it, original: i }));
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  });
  const [bins, setBins] = useState(q.categories.map(() => []));
  const [dragItem, setDragItem] = useState(null);

  const drag = (item) => setDragItem(item);
  const dropTo = (catIdx) => {
    if (!dragItem) return;
    setBins((b) => b.map((arr, i) => i === catIdx ? [...arr, dragItem] : arr.filter((x) => x !== dragItem)));
    setItems((it) => it.filter((x) => x !== dragItem));
    setDragItem(null);
  };
  const submit = () => {
    let ok = true;
    bins.forEach((arr, ci) => arr.forEach((it) => { if (it.category !== ci) ok = false; }));
    items.forEach((it) => { if (it.category !== undefined) ok = false; });
    onAnswer(ok, bins, q.categories.map((c, i) => q.items.filter((it) => it.category === i)));
  };

  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      <p className="text-xs text-slate-500">اسحب كل عنصر إلى المجموعة المناسبة ثم اضغط "تأكيد التصنيف"</p>
      <div className="flex flex-wrap gap-2 min-h-[60px] p-3 rounded-xl bg-slate-50 border border-slate-200">
        {items.map((it) => (
          <span key={it.original} draggable onDragStart={() => drag(it)}
            className="px-3 py-2 rounded-lg bg-white border-2 border-slate-300 cursor-move text-sm font-medium shadow-sm">
            {it.item}
          </span>
        ))}
        {items.length === 0 && <span className="text-xs text-slate-400 self-center">تم تصنيف كل العناصر</span>}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {q.categories.map((cat, ci) => (
          <div key={ci} onDragOver={(e) => e.preventDefault()} onDrop={() => dropTo(ci)}
            className="rounded-xl border-2 border-dashed border-slate-300 p-2 min-h-[100px] bg-white">
            <div className="text-xs font-bold text-slate-600 mb-1 text-center">{cat}</div>
            <div className="space-y-1">
              {bins[ci].map((it) => (
                <div key={it.original} className="px-2 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium">{it.item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={submit} className="w-full py-3 rounded-xl bg-primary text-white font-bold">تأكيد التصنيف</button>
    </div>
  );
}

// ===== تعبئة في الفراغات =====
function FillBlank({ q, onAnswer }) {
  const [words, setWords] = useState(() => {
    const arr = [...q.wordBank];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    return arr;
  });
  const [filled, setFilled] = useState(Array(q.blanksCount).fill(null));
  const [used, setUsed] = useState([]);

  const pick = (w, wi) => {
    if (used.includes(wi)) return;
    const empty = filled.findIndex((x) => x === null);
    if (empty === -1) return;
    const nf = [...filled]; nf[empty] = w;
    setFilled(nf);
    setUsed([...used, wi]);
  };
  const removeBlank = (bi) => {
    const w = filled[bi];
    if (!w) return;
    const wi = words.indexOf(w);
    const nf = [...filled]; nf[bi] = null;
    setFilled(nf);
    setUsed(used.filter((x) => x !== wi));
  };
  const submit = () => {
    const ok = filled.every((w, i) => w === q.correctAnswers[i]);
    onAnswer(ok, filled, q.correctAnswers);
  };

  const parts = q.text.split('___');

  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
        <p className="text-slate-800 leading-loose text-base">
          {parts.map((p, i) => (
            <React.Fragment key={i}>
              {p}
              {i < parts.length - 1 && (
                <button onClick={() => removeBlank(i)} disabled={!filled[i]}
                  className={`inline-block min-w-[80px] mx-1 px-2 py-0.5 rounded-md border-2 text-sm font-bold ${filled[i] ? 'border-amber-400 bg-amber-50 text-amber-800' : 'border-dashed border-slate-300 text-slate-400'}`}>
                  {filled[i] || '___'}
                </button>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {words.map((w, wi) => (
          <button key={wi} onClick={() => pick(w, wi)} disabled={used.includes(wi)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border-2 ${used.includes(wi) ? 'border-slate-200 bg-slate-100 text-slate-300 opacity-50' : 'border-slate-300 bg-white hover:border-amber-400'}`}>
            {w}
          </button>
        ))}
      </div>
      <button onClick={submit} disabled={filled.includes(null)} className="w-full py-3 rounded-xl bg-primary text-white font-bold disabled:opacity-50">تأكيد الإجابة</button>
    </div>
  );
}

// ===== التظليل =====
function Highlight({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const click = (w) => {
    if (picked) return;
    setPicked(w);
    onAnswer(w === q.targetWord, w, q.targetWord);
  };
  return (
    <div className="space-y-3">
      <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">{q.question}</p>
      <p className="text-xs text-slate-500">اضغط على الكلمة الصحيحة في الجملة</p>
      <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 leading-loose text-lg" dir="rtl">
        {q.words.map((w, i) => (
          <button key={i} onClick={() => click(w)} disabled={picked !== null}
            className={`mx-1 px-1 rounded ${picked === w ? (w === q.targetWord ? 'bg-emerald-200 text-emerald-800 font-bold' : 'bg-red-200 text-red-800 font-bold') : (picked && w === q.targetWord ? 'bg-emerald-200 text-emerald-800 font-bold' : 'hover:bg-amber-100')}`}>
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

// ===== سؤال التغذية الراجعة =====
export function FeedbackQuestion({ fq }) {
  const [picked, setPicked] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplain, setShowExplain] = useState(false);
  return (
    <div dir="rtl" className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/50 p-4 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">🔄</span>
        <span className="font-bold text-indigo-700 text-sm">سؤال التغذية الراجعة (مشابه للسؤال السابق)</span>
      </div>
      <p className="text-slate-800 font-medium">{fq.question}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {fq.options.map((opt, i) => {
          let style = { backgroundColor: opt.color, color: 'white' };
          if (picked !== null) {
            if (i === fq.correctIndex) style = { backgroundColor: '#059669', color: 'white' };
            else if (i === picked) style = { backgroundColor: '#dc2626', color: 'white' };
            else style = { backgroundColor: '#94a3b8', color: 'white' };
          }
          return (
            <button key={i} onClick={() => { if (picked === null) { setPicked(i); if (i === fq.correctIndex) setShowExplain(true); } }}
              style={style} disabled={picked !== null}
              className="flex items-center gap-2 px-3 py-3 rounded-lg text-start font-bold text-sm min-h-[48px]">
              <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs">{['أ', 'ب', 'ج', 'د'][i]}</span>
              <span className="flex-1">{opt.text}</span>
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <button onClick={() => setShowHint(!showHint)} className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full">
          <Lightbulb className="w-3.5 h-3.5" /> {showHint ? 'إخفاء التلميح' : 'تلميح'}
        </button>
      </div>
      {showHint && <p className="text-xs text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200">💡 {fq.hint}</p>}
      {showExplain && <p className="text-xs text-indigo-800 bg-indigo-100 rounded-lg p-2 border border-indigo-200">📝 {fq.explanation}</p>}
    </div>
  );
}

export default function QuestionRenderer({ q, onAnswer, showFeedback }) {
  const render = () => {
    switch (q.type) {
      case 'multipleChoice': return <MultipleChoice q={q} onAnswer={onAnswer} />;
      case 'trueFalse': return <TrueFalse q={q} onAnswer={onAnswer} />;
      case 'ordering': return <Ordering q={q} onAnswer={onAnswer} />;
      case 'matching': return <Matching q={q} onAnswer={onAnswer} />;
      case 'classify': return <Classify q={q} onAnswer={onAnswer} />;
      case 'fillBlank': return <FillBlank q={q} onAnswer={onAnswer} />;
      case 'highlight': return <Highlight q={q} onAnswer={onAnswer} />;
      default: return <p className="text-red-600">نمط غير معروف: {q.type}</p>;
    }
  };
  return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{render()}</motion.div>;
}