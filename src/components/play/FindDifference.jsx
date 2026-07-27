import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const POOL = ['🍎', '🍌', '🌟', '🐱', '🚗', '🌸', '🐟', '🎈', '🌳', '🐝'];

function makeRound() {
  const base = POOL[Math.floor(Math.random() * POOL.length)];
  const diff = POOL.filter((e) => e !== base)[Math.floor(Math.random() * (POOL.length - 1))];
  const cells = Array.from({ length: 6 }).map(() => base);
  const pos = Math.floor(Math.random() * 6);
  cells[pos] = diff;
  return { cells, pos };
}

const TOTAL = 6;

export default function FindDifference({ stage, onBack }) {
  const { lang } = useLang();
  const [round, setRound] = useState(() => makeRound());
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === round.pos) {
      setScore((s) => s + 1);
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    }
    setTimeout(() => {
      if (score + 1 >= TOTAL) setDone(true);
      else { setRound(makeRound()); setPicked(null); }
    }, 900);
  };

  if (done) {
    return (
      <PlayShell titleAr="أوجد الفرق" titleEn="Find the Difference" onBack={onBack} score={score} total={TOTAL}>
        <div className="rounded-3xl bg-white border border-amber-100 p-10 text-center shadow-sm">
          <div className="text-6xl mb-3">🔍✨</div>
          <p className="text-2xl font-heading font-bold text-slate-900">{score} / {TOTAL}</p>
          <button onClick={onBack} className="mt-5 px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">{lang === 'ar' ? 'العودة' : 'Back'}</button>
        </div>
      </PlayShell>
    );
  }

  return (
    <PlayShell titleAr="أوجد الفرق" titleEn="Find the Difference" onBack={onBack} score={score} total={TOTAL}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">{lang === 'ar' ? 'اضغط على الشيء المختلف' : 'Tap the different one'}</p>
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {round.cells.map((e, i) => {
            const isPicked = picked === i;
            const isDiff = i === round.pos;
            const show = picked !== null;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                className={`aspect-square rounded-2xl border-2 flex items-center justify-center text-4xl transition-colors ${
                  show && isDiff ? 'bg-emerald-100 border-emerald-400' : show && isPicked ? 'bg-rose-100 border-rose-400' : 'bg-violet-50 border-violet-200 hover:bg-violet-100'
                }`}
              >
                <motion.span animate={show && isPicked && !isDiff ? { x: [0, -6, 6, 0] } : {}}>{e}</motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </PlayShell>
  );
}