import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

export default function OrderingQuestion({ q, onAnswer }) {
  const [items, setItems] = useState([...q.items].map((t, i) => ({ t, original: i })));
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = items.every((it, i) => it.original === q.correctOrder[i]);
  const move = (from, to) => { if (submitted || to < 0 || to >= items.length) return; const n = [...items]; const [m] = n.splice(from, 1); n.splice(to, 0, m); setItems(n); };
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500 mb-2">رتّب العناصر باستخدام الأسهم:</p>
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">{toAr(i + 1)}</span>
          <div className="flex-1 rounded-xl p-3 border-2 border-slate-200 bg-white text-slate-800 text-lg">{it.t}</div>
          <button disabled={i === 0 || submitted} onClick={() => move(i, i - 1)} className="p-2 rounded-lg bg-slate-100 disabled:opacity-30"><ChevronLeft className="w-4 h-4" /></button>
          <button disabled={i === items.length - 1 || submitted} onClick={() => move(i, i + 1)} className="p-2 rounded-lg bg-slate-100 disabled:opacity-30"><ChevronLeft className="w-4 h-4 rotate-180" /></button>
        </div>
      ))}
      {!submitted && <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full mt-3 rounded-xl bg-emerald-600 text-white font-bold py-3">تحقّق</button>}
      {submitted && <div className={`rounded-xl p-3 font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ ترتيب صحيح!' : '✗ راجع الترتيب'}</div>}
    </div>
  );
}