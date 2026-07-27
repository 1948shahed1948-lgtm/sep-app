import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

// نقاط ترسم بيتاً — ارسم بالترتيب ١→٢→٣→٤→٥
const DOTS = [
  { n: 1, x: 20, y: 55 },
  { n: 2, x: 50, y: 20 },
  { n: 3, x: 80, y: 55 },
  { n: 4, x: 80, y: 88 },
  { n: 5, x: 20, y: 88 },
];

export default function ConnectDots({ stage, onBack }) {
  const { lang } = useLang();
  const [next, setNext] = useState(1);
  const [done, setDone] = useState(false);

  const tap = (n) => {
    if (done || n !== next) return;
    if (n === DOTS.length) {
      setDone(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } else setNext(n + 1);
  };

  const reset = () => { setNext(1); setDone(false); };
  const lines = DOTS.filter((d) => d.n < next).map((d) => {
    const nxt = DOTS.find((x) => x.n === d.n + 1);
    return { x1: d.x, y1: d.y, x2: nxt.x, y2: nxt.y };
  });

  return (
    <PlayShell titleAr="وصل النقاط" titleEn="Connect the Dots" onBack={onBack} score={next - 1} total={DOTS.length}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-3">
        <p className="text-center text-sm font-bold text-slate-600">
          {done ? (lang === 'ar' ? 'رسمت بيتاً! 🏠' : 'You drew a house!') : (lang === 'ar' ? `اضغط النقطة رقم ${next}` : `Tap dot number ${next}`)}
        </p>
        <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl bg-sky-50 overflow-hidden">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            {lines.map((l, i) => (
              <motion.line
                key={i}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"
              />
            ))}
          </svg>
          {DOTS.map((d) => {
            const reached = d.n < next;
            return (
              <button
                key={d.n}
                onClick={() => tap(d.n)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${d.x}%`, top: `${d.y}%` }}
              >
                <span className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${reached ? 'bg-emerald-400 text-white' : 'bg-amber-400 text-white'}`}>{d.n}</span>
              </button>
            );
          })}
          {done && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute inset-0 flex items-center justify-center text-6xl">🏠</motion.div>}
        </div>
        {done && (
          <div className="text-center">
            <button onClick={reset} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">{lang === 'ar' ? 'ارسم مجدداً' : 'Draw again'}</button>
          </div>
        )}
      </div>
    </PlayShell>
  );
}