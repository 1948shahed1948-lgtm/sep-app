import React, { useState } from 'react';

export default function FillBlankQuestion({ q, onAnswer }) {
  const [filled, setFilled] = useState(q.blanks.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [pool, setPool] = useState(q.wordBank.map((w, i) => ({ w, id: i, used: false })));
  const placeInBlank = (blankIdx) => {
    if (submitted || selectedWord === null) return;
    const next = [...filled];
    const prevWord = next[blankIdx];
    setPool(pool.map(p => {
      if (p.id === selectedWord) return { ...p, used: true };
      if (prevWord !== null && p.id === prevWord) return { ...p, used: false };
      return p;
    }));
    next[blankIdx] = selectedWord;
    setFilled(next);
    setSelectedWord(null);
  };
  const removeFromBlank = (blankIdx) => {
    if (submitted) return;
    const next = [...filled];
    const wId = next[blankIdx];
    if (wId === null) return;
    next[blankIdx] = null;
    setFilled(next);
    setPool(pool.map(p => p.id === wId ? { ...p, used: false } : p));
  };
  const isCorrect = filled.every((f, i) => pool.find(p => p.id === f)?.w === q.blanks[i]);
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">اضغط كلمة من البنك ثم اضغط الفراغ:</p>
      <div className="rounded-xl p-4 bg-white border-2 border-slate-200 font-body text-lg leading-loose text-center">
        {q.blanks.map((b, i) => (
          <button key={i} onClick={() => placeInBlank(i)} disabled={submitted}
            onDoubleClick={() => removeFromBlank(i)}
            className={`inline-block mx-1 px-4 py-1 rounded-lg border-2 border-dashed min-w-20 text-center transition-colors text-lg ${filled[i] !== null ? 'border-emerald-400 bg-emerald-50' : 'border-amber-400 bg-amber-50 hover:bg-amber-100'}`}>
            {filled[i] !== null ? pool.find(p => p.id === filled[i])?.w : '____'}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {pool.map(w => (
          <button key={w.id} type="button" disabled={w.used || submitted}
            onClick={() => !w.used && setSelectedWord(w.id)}
            className={`px-3 py-2 rounded-lg border-2 transition-all text-lg ${w.used ? 'opacity-30 border-slate-200 bg-slate-50' : selectedWord === w.id ? 'border-emerald-500 bg-emerald-50 scale-105' : 'border-slate-300 bg-white hover:border-emerald-400 cursor-pointer'}`}>
            {w.w}
          </button>
        ))}
      </div>
      {filled.every(f => f !== null) && !submitted && <button onClick={() => { setSubmitted(true); onAnswer(isCorrect, isCorrect); }} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3">تحقّق</button>}
      {submitted && <div className={`rounded-xl p-3 font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{isCorrect ? '✓ صحيح!' : `✗ الإجابة: ${q.blanks.join(' ')}`}</div>}
    </div>
  );
}