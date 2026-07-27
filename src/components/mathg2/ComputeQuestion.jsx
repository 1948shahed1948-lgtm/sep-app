import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
const LETTERS = ['أ', 'ب', 'ج', 'د'];

export default function ComputeQuestion({ q, onAnswer, answered }) {
  const { a, b, sum } = q;
  const aStr = toAr(a).padStart(2, ' ');
  const bStr = toAr(b).padStart(2, ' ');
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="inline-block rounded-2xl p-6" style={{ border: '8px solid #5C3A1E', background: '#1a3a2a' }}>
          <div className="text-white font-mono text-3xl text-center tracking-widest" dir="ltr">
            <div className="border-b-2 border-white/40 pb-1 mb-1">&nbsp;+&nbsp;{aStr}</div>
            <div>&nbsp;&nbsp;{bStr}</div>
            <div className="border-t-2 border-white/40 pt-1 mt-1">?؟؟</div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctAnswer;
          const isChosen = answered?.chosen === i;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isChosen && !isCorrect;
          return (
            <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(i, isCorrect)}
              className="w-full text-start rounded-xl p-4 border-2 transition-all flex items-center gap-3 disabled:cursor-default"
              style={{ borderColor: showCorrect ? '#059669' : showWrong ? '#dc2626' : COLORS[i] + '55', background: showCorrect ? '#ecfdf5' : showWrong ? '#fef2f2' : 'white' }}>
              <span className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: COLORS[i] }}>{LETTERS[i]}</span>
              <span className="flex-1 font-body text-slate-800 text-lg">{opt}</span>
              {showCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
              {showWrong && <XCircle className="w-6 h-6 text-red-600" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}