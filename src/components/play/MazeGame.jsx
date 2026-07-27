import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

// 1 = path, 0 = wall, 2 = goal
const MAZES = {
  kg: [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [1,1,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,2],
  ],
  g1: [
    [1,0,1,1,1,1,1],
    [1,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1],
    [1,1,1,1,1,0,1],
    [0,0,0,0,0,0,1],
    [1,1,1,1,1,1,2],
  ],
};

export default function MazeGame({ stage, onBack }) {
  const { lang } = useLang();
  const maze = MAZES[stage] || MAZES.kg;
  const [pos, setPos] = useState({ r: 0, c: 0 });
  const [won, setWon] = useState(false);

  const move = (dr, dc) => {
    if (won) return;
    const nr = pos.r + dr, nc = pos.c + dc;
    if (nr < 0 || nc < 0 || nr >= maze.length || nc >= maze[0].length) return;
    if (maze[nr][nc] === 0) return;
    setPos({ r: nr, c: nc });
    if (maze[nr][nc] === 2) {
      setWon(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    }
  };

  const reset = () => { setPos({ r: 0, c: 0 }); setWon(false); };

  return (
    <PlayShell titleAr="المتاهة" titleEn="Maze" onBack={onBack}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {won ? (lang === 'ar' ? 'وصلت! 🧀🎉' : 'You made it!') : (lang === 'ar' ? 'وصّل الفأر إلى الجبن 🧀' : 'Guide the mouse to the cheese 🧀')}
        </p>
        <div className="inline-grid gap-0.5 mx-auto bg-slate-200 p-1 rounded-xl" style={{ gridTemplateColumns: `repeat(${maze[0].length}, minmax(0,1fr))` }}>
          {maze.map((row, r) =>
            row.map((cell, c) => {
              const isPlayer = pos.r === r && pos.c === c;
              return (
                <div
                  key={`${r}-${c}`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center text-lg ${
                    cell === 0 ? 'bg-slate-700' : cell === 2 ? 'bg-amber-100' : 'bg-emerald-50'
                  }`}
                >
                  {cell === 2 ? '🧀' : isPlayer ? <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity }}>🐭</motion.span> : ''}
                </div>
              );
            })
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto">
          <div />
          <button onClick={() => move(-1, 0)} className="py-3 rounded-xl bg-sky-100 text-sky-700 font-bold hover:bg-sky-200 transition-colors">↑</button>
          <div />
          <button onClick={() => move(0, -1)} className="py-3 rounded-xl bg-sky-100 text-sky-700 font-bold hover:bg-sky-200 transition-colors">←</button>
          <button onClick={() => move(1, 0)} className="py-3 rounded-xl bg-sky-100 text-sky-700 font-bold hover:bg-sky-200 transition-colors">↓</button>
          <button onClick={() => move(0, 1)} className="py-3 rounded-xl bg-sky-100 text-sky-700 font-bold hover:bg-sky-200 transition-colors">→</button>
        </div>
        {won && (
          <div className="text-center">
            <button onClick={reset} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">{lang === 'ar' ? 'مرة أخرى' : 'Again'}</button>
          </div>
        )}
      </div>
    </PlayShell>
  );
}