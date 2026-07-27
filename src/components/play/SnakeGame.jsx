import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const SIZE = 11;

function randCell() {
  return { r: Math.floor(Math.random() * SIZE), c: Math.floor(Math.random() * SIZE) };
}

export default function SnakeGame({ stage, onBack }) {
  const { lang } = useLang();
  const [snake, setSnake] = useState([{ r: 5, c: 5 }, { r: 5, c: 4 }, { r: 5, c: 3 }]);
  const [food, setFood] = useState({ r: 2, c: 8 });
  const [dir, setDir] = useState({ r: 0, c: 1 });
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  const reset = useCallback(() => {
    setSnake([{ r: 5, c: 5 }, { r: 5, c: 4 }, { r: 5, c: 3 }]);
    setFood({ r: 2, c: 8 });
    setDir({ r: 0, c: 1 });
    setScore(0);
    setOver(false);
  }, []);

  const turn = (dr, dc) => {
    const cur = dirRef.current;
    if (cur.r === -dr && cur.c === -dc) return; // no reverse
    setDir({ r: dr, c: dc });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp') turn(-1, 0);
      else if (e.key === 'ArrowDown') turn(1, 0);
      else if (e.key === 'ArrowLeft') turn(0, -1);
      else if (e.key === 'ArrowRight') turn(0, 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (over) return;
    const tick = setInterval(() => {
      setSnake((prev) => {
        const head = { r: prev[0].r + dirRef.current.r, c: prev[0].c + dirRef.current.c };
        if (head.r < 0 || head.c < 0 || head.r >= SIZE || head.c >= SIZE || prev.some((s) => s.r === head.r && s.c === head.c)) {
          setOver(true);
          return prev;
        }
        const eaten = head.r === food.r && head.c === food.c;
        const next = [head, ...prev];
        if (!eaten) next.pop();
        else {
          setScore((s) => s + 1);
          confetti({ particleCount: 30, spread: 45, origin: { y: 0.5 }, scalar: 0.7 });
          let nf = randCell();
          while (next.some((s) => s.r === nf.r && s.c === nf.c)) nf = randCell();
          setFood(nf);
        }
        return next;
      });
    }, stage === 'kg' ? 280 : 200);
    return () => clearInterval(tick);
  }, [over, food, stage]);

  return (
    <PlayShell titleAr="الثعبان" titleEn="Snake" onBack={onBack} score={score} total={0}>
      <div className="rounded-3xl bg-white border border-amber-100 p-4 shadow-sm space-y-3">
        <p className="text-center text-sm font-bold text-slate-600">
          {over ? (lang === 'ar' ? `انتهى! أكلت ${score} تفاحة` : `Game over! Ate ${score}`) : (lang === 'ar' ? `كُل التفاح 🍎 ولا تصطدم — ${score}` : `Eat apples 🍎 — ${score}`)}
        </p>
        <div className="inline-grid gap-px mx-auto bg-slate-200 p-1 rounded-xl" style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0,1fr))` }}>
          {Array.from({ length: SIZE * SIZE }).map((_, i) => {
            const r = Math.floor(i / SIZE), c = i % SIZE;
            const isHead = snake[0].r === r && snake[0].c === c;
            const isBody = snake.some((s) => s.r === r && s.c === c);
            const isFood = food.r === r && food.c === c;
            return (
              <div key={i} className={`w-5 h-5 sm:w-6 sm:h-6 rounded-sm flex items-center justify-center text-xs ${isHead ? 'bg-emerald-600' : isBody ? 'bg-emerald-400' : isFood ? 'bg-amber-50' : 'bg-white'}`}>
                {isFood && '🍎'}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto">
          <div />
          <button onClick={() => turn(-1, 0)} className="py-3 rounded-xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors">↑</button>
          <div />
          <button onClick={() => turn(0, -1)} className="py-3 rounded-xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors">←</button>
          <button onClick={() => turn(1, 0)} className="py-3 rounded-xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors">↓</button>
          <button onClick={() => turn(0, 1)} className="py-3 rounded-xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors">→</button>
        </div>
        {over && (
          <div className="text-center">
            <button onClick={reset} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">{lang === 'ar' ? 'العب مجدداً' : 'Play again'}</button>
          </div>
        )}
      </div>
    </PlayShell>
  );
}