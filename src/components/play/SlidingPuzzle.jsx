import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

// صورة ٣×٣ — ٨ بلاطات + فراغ
const PICTURE = ['🌻', '🐱', '🎈', '⭐', '🍎', '🚗', '🌳', '🐟', null];

function shuffle() {
  const arr = [...PICTURE];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // تأكد أنها ليست محلولة
  if (arr.every((v, i) => v === PICTURE[i])) [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr;
}

const SOLVED = PICTURE;

export default function SlidingPuzzle({ stage, onBack }) {
  const { lang } = useLang();
  const [tiles, setTiles] = useState(() => shuffle());
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (tiles.every((v, i) => v === SOLVED[i])) {
      setWon(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  }, [tiles]);

  const move = (i) => {
    if (won) return;
    const empty = tiles.indexOf(null);
    const r = Math.floor(i / 3), c = i % 3, er = Math.floor(empty / 3), ec = empty % 3;
    if (Math.abs(r - er) + Math.abs(c - ec) !== 1) return;
    const nt = [...tiles];
    [nt[i], nt[empty]] = [nt[empty], nt[i]];
    setTiles(nt); setMoves((m) => m + 1);
  };

  const reset = () => { setTiles(shuffle()); setMoves(0); setWon(false); };

  return (
    <PlayShell titleAr="تركيب الصورة" titleEn="Sliding Puzzle" onBack={onBack} score={moves} total={0}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-3">
        <p className="text-center text-sm font-bold text-slate-600">
          {won ? (lang === 'ar' ? `أحسنت! ${moves} حركة` : `Solved! ${moves} moves`) : (lang === 'ar' ? `رتب البلاطات لتكمل الصورة · حركات: ${moves}` : `Arrange tiles to complete the picture · Moves: ${moves}`)}
        </p>
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          {tiles.map((t, i) => (
            <button
              key={i}
              onClick={() => move(i)}
              className={`aspect-square rounded-xl flex items-center justify-center text-4xl border-2 transition-colors ${t === null ? 'bg-transparent border-transparent' : 'bg-sky-50 border-sky-200 hover:bg-sky-100'}`}
            >
              <motion.span layout transition={{ type: 'spring' }}>{t}</motion.span>
            </button>
          ))}
        </div>
        <div className="text-center">
          <button onClick={reset} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">{lang === 'ar' ? 'خلط جديد' : 'Shuffle'}</button>
        </div>
      </div>
    </PlayShell>
  );
}