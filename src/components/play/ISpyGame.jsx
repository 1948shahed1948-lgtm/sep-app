import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const SETS = [
  { target: '🐱', fillers: ['🐶','🐰','🐭','🐹','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🦆','🦉','🐢'] },
  { target: '🍎', fillers: ['🍌','🍊','🍇','🍓','🍑','🍒','🍉','🍈','🍐','🥝','🥭','🍍','🥥','🍅','🥕','🌽','🥦','🍞','🧀','🍪'] },
  { target: '🚗', fillers: ['✈️','🚲','🚀','🚂','🚢','🏍️','🚜','🚒','🚑','🚓','🛵','🛻','🚌','🚐','🛴','🚁','⛵','🚤','🛟','🎡'] },
];

function makeRound() {
  const s = SETS[Math.floor(Math.random() * SETS.length)];
  const count = 4 + Math.floor(Math.random() * 3); // 4-6 targets
  const grid = [...Array(count).fill(s.target)];
  while (grid.length < 20) grid.push(s.fillers[Math.floor(Math.random() * s.fillers.length)]);
  return { target: s.target, grid: grid.sort(() => Math.random() - 0.5), count };
}

export default function ISpyGame({ stage, onBack }) {
  const { lang } = useLang();
  const [round, setRound] = useState(() => makeRound());
  const [found, setFound] = useState(0);

  const tap = (i, e) => {
    if (e !== round.target || found >= round.count) return;
    const nf = found + 1;
    setFound(nf);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 }, scalar: 0.8 });
    if (nf >= round.count) {
      setTimeout(() => { setRound(makeRound()); setFound(0); }, 1200);
    }
  };

  return (
    <PlayShell titleAr="ابحث وأجد" titleEn="I Spy" onBack={onBack} score={found} total={round.count}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-3">
        <p className="text-center text-sm font-bold text-slate-600">
          {lang === 'ar' ? `ابحث عن كل ${round.target} — ${found}/${round.count}` : `Find all ${round.target} — ${found}/${round.count}`}
        </p>
        <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
          {round.grid.map((e, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.85 }}
              onClick={() => tap(i, e)}
              className="aspect-square rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-2xl sm:text-3xl hover:bg-violet-100 transition-colors"
            >
              {e}
            </motion.button>
          ))}
        </div>
      </div>
    </PlayShell>
  );
}