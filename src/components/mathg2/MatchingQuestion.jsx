import React, { useState, useMemo } from 'react';

export default function MatchingQuestion({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const rightItems = useMemo(() => [...q.pairs].map((p, i) => ({ text: p.right, original: i })).sort(() => Math.random() - 0.5), [q]);
  const pick = (side, idx) => {
    if (submitted) return;
    if (side === 'left') setSelected(idx);
    else { if (selected === null) return; setMatches({ ...matches, [selected]: idx }); setSelected(null); }
  };
  const allMatched = Object.keys(matches).length === q.pairs.length;
  const isCorrect = q.pairs.every((_, i) => { const rIdx = matches[i]; return rIdx !== undefined && rightItems[rIdx]?.original === i; });
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">اضغط عنصراً من اليمين ثم نظيره من اليسار:</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {q.pairs.map((p, i) => (
            <button key={i} onClick={() => pick('left', i)} disabled={submitted || matches[i] !== undefined}
              className={`w-full rounded-xl p-3 border-2 text-start text-lg ${selected === i ? 'border-amber-500 bg-amber-50' : 'border-slate-200 bg-white'} ${matches[i] !== undefined ? 'opacity-60' : ''}`}>{p.left}</button>
          ))}
        </div>
        <div className="space-y-2">
          {rightItems.map((r, i) => {
            const matched = Object.entries(matches).find(([, v]) => v === i);
            return (
              <button key={i} onClick={() => pick('right', i)} disabled={submitted || !!matched}
                className={`w-full rounded-xl p-3 border-2 text-start text-lg ${matched ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>{r.text}</button>
            );
          })}
        </div>
      </div>
      {allMatched && !submitted && <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3">تحقّق</button>}
      {submitted && <div className={`rounded-xl p-3 font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ مطابقة صحيحة!' : '✗ راجع الإجابات'}</div>}
    </div>
  );
}