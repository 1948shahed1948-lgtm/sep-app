import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const winner = (b) => {
  for (const [a,c,d] of LINES) if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  if (b.every(Boolean)) return 'draw';
  return null;
};

function aiMove(b) {
  // try win, then block, then center, then random
  const move = (p) => {
    for (const [a,c,d] of LINES) {
      const line = [b[a],b[c],b[d]];
      if (line.filter(x => x === p).length === 2 && line.includes(null)) {
        return [a,c,d].find(i => b[i] === null);
      }
    }
    return null;
  };
  return move('O') ?? move('X') ?? (b[4] === null ? 4 : [0,2,6,8,1,3,5,7].find(i => b[i] === null));
}

export default function TicTacToe({ stage, onBack }) {
  const { lang } = useLang();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const win = winner(board);

  useEffect(() => {
    if (turn === 'O' && !win) {
      const id = setTimeout(() => {
        const m = aiMove(board);
        if (m !== undefined && m !== null) {
          const nb = [...board]; nb[m] = 'O';
          setBoard(nb); setTurn('X');
        }
      }, 450);
      return () => clearTimeout(id);
    }
  }, [turn, board, win]);

  useEffect(() => {
    if (win === 'X') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, [win]);

  const play = (i) => {
    if (board[i] || win || turn !== 'X') return;
    const nb = [...board]; nb[i] = 'X';
    setBoard(nb); setTurn('O');
  };

  const reset = () => { setBoard(Array(9).fill(null)); setTurn('X'); };

  const msg = win === 'X' ? (lang === 'ar' ? 'فزت! 🎉' : 'You win!') : win === 'O' ? (lang === 'ar' ? 'فاز الروبوت' : 'Robot wins') : win === 'draw' ? (lang === 'ar' ? 'تعادل' : 'Draw') : null;

  return (
    <PlayShell titleAr="إكس-أو" titleEn="Tic-Tac-Toe" onBack={onBack}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {msg ?? (turn === 'X' ? (lang === 'ar' ? 'دورك (X)' : 'Your turn (X)') : (lang === 'ar' ? 'دور الروبوت...' : 'Robot...'))}
        </p>
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          {board.map((c, i) => (
            <button key={i} onClick={() => play(i)} className="aspect-square rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center text-4xl font-heading font-bold text-slate-800 hover:bg-sky-100 transition-colors">
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={c === 'X' ? 'text-rose-500' : 'text-emerald-500'}>{c}</motion.span>
            </button>
          ))}
        </div>
        <div className="text-center">
          <button onClick={reset} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
            {lang === 'ar' ? 'جولة جديدة' : 'New round'}
          </button>
        </div>
      </div>
    </PlayShell>
  );
}