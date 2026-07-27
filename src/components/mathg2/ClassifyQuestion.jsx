import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

export default function ClassifyQuestion({ q, onAnswer }) {
  const [buckets, setBuckets] = useState(q.categories.map(() => []));
  const [submitted, setSubmitted] = useState(false);
  const [pool, setPool] = useState(q.items.map((it, i) => ({ ...it, id: i })));
  const [sel, setSel] = useState(null);
  const moveTo = (catIdx) => {
    if (submitted || sel === null) return;
    setBuckets(buckets.map((b, i) => i === catIdx ? [...b.filter(x => x.id !== sel.id), sel] : b.filter(x => x.id !== sel.id)));
    setPool(pool.filter(x => x.id !== sel.id));
    setSel(null);
  };
  const removeFromBucket = (item, catIdx) => {
    if (submitted) return;
    setBuckets(buckets.map((b, i) => i === catIdx ? b.filter(x => x.id !== item.id) : b));
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
          <p className="text-xs text-slate-500 mb-2">اضغط عنصراً ثم اضغط العمود المناسب:</p>
          <div className="flex flex-wrap gap-2">
            {pool.map(it => (
              <span key={it.id} onClick={() => setSel(it)} className={`px-3 py-2 rounded-lg border cursor-pointer text-lg ${sel?.id === it.id ? 'border-amber-500 bg-amber-50' : 'bg-white border-slate-300 hover:border-amber-400'}`}>{it.item}</span>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${q.categories.length}, 1fr)` }}>
        {q.categories.map((cat, ci) => (
          <div key={ci} onClick={() => moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-3 min-h-32 cursor-pointer hover:border-emerald-300">
            <h4 className="font-bold text-sm text-center mb-2 text-slate-700">{cat}</h4>
            <div className="space-y-1.5">
              {buckets[ci].map(it => (
                <div key={it.id} onClick={(e) => { e.stopPropagation(); removeFromBucket(it, ci); }} className="text-sm rounded-lg bg-white border px-2 py-1.5 flex justify-between items-center cursor-pointer">
                  <span>{it.item}</span><XCircle className="w-3 h-3 text-red-400" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {pool.length === 0 && !submitted && <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3">تحقّق</button>}
      {submitted && <div className={`rounded-xl p-3 font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ تصنيف صحيح!' : '✗ راجع التصنيف'}</div>}
    </div>
  );
}