import React, { useState, useEffect, useRef } from 'react';
import { Crown } from 'lucide-react';

// السبورة الخضراء مع تأثير الكتابة المتزامنة (typewriter)
export default function TeacherBlackboard({ text }) {
  const [displayed, setDisplayed] = useState('');
  const idxRef = useRef(0);

  useEffect(() => {
    setDisplayed('');
    idxRef.current = 0;
    if (!text) return;
    const id = setInterval(() => {
      idxRef.current += 1;
      setDisplayed(text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div dir="rtl" className="rounded-2xl overflow-hidden border-4 border-amber-900/80 shadow-2xl bg-gradient-to-b from-amber-950 to-amber-900 p-2">
      <div className="relative rounded-lg bg-[#0d3b1f] p-5 min-h-[140px] shadow-inner" style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5), inset 0 0 0 6px rgba(255,255,255,0.05)' }}>
        {/* صورة المعلم */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-700 flex items-center justify-center text-3xl shadow-md">
            🧑‍🏫
          </div>
          <div className="flex-1">
            <div className="text-amber-200/80 text-xs font-bold mb-1">المعلم يشرح على السبورة</div>
            <p className="font-mono text-white leading-relaxed text-sm sm:text-base whitespace-pre-wrap" style={{ textShadow: '0 0 4px rgba(255,255,255,0.3)' }}>
              {displayed}
              <span className="inline-block w-2 h-5 bg-white/70 align-middle animate-pulse ml-0.5" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// صندوق القاعدة الذهبية
export function GoldenRuleBox({ rule }) {
  if (!rule) return null;
  return (
    <div dir="rtl" className="relative rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50/80 p-4 shadow-md overflow-hidden">
      <div className="absolute top-2 left-2 text-amber-300/40 text-4xl select-none">✦</div>
      <div className="flex items-center gap-2 mb-2">
        <Crown className="w-5 h-5 text-amber-600" />
        <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
      </div>
      <p className="text-amber-900 text-sm font-medium leading-relaxed relative z-10">{rule}</p>
    </div>
  );
}