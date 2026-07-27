import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// ════════════════════════════════════════════════════
// معلم حقيقي متحرك — SVG مع حركة الذراع والكتابة على السبورة
// ════════════════════════════════════════════════════

export default function AnimatedTeacher({ explanation, goldenRule, page, isCorrect, show }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!show || !explanation) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const text = explanation;
    const timer = setInterval(() => {
      if (i >= text.length) { clearInterval(timer); setDone(true); return; }
      setDisplayed(text.slice(0, i + 1));
      i++;
    }, 28);
    return () => clearInterval(timer);
  }, [explanation, show]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 space-y-3"
    >
      <div className={`rounded-xl px-4 py-2.5 text-sm font-bold text-center flex items-center justify-center gap-2 ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
        {isCorrect ? '✅ أحسنتَ! إجابة صحيحة' : '❌ لاحظ الإجابة الصحيحة ودعني أشرح لك'}
      </div>

      {page && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl px-3 py-1.5 text-xs font-bold text-teal-700 text-center">
          📖 مرجع من الكتاب المدرسي — صفحة {page}
        </div>
      )}

      <div className="relative rounded-2xl overflow-hidden border-[6px] border-amber-900 shadow-2xl" style={{ minHeight: '300px' }}>
        <div className="absolute inset-0 bg-amber-900" />
        <div className="absolute inset-3 rounded-lg bg-emerald-950 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px), radial-gradient(circle at 40% 80%, white 1px, transparent 1px)",
              backgroundSize: '120px 120px',
            }}
          />
          <div className="relative z-10 p-5 pt-6" dir="rtl">
            <p
              className="text-white text-base sm:text-lg leading-relaxed text-right min-h-[120px]"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {displayed}
              {!done && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="inline-block w-0.5 h-5 bg-white align-middle ml-0.5"
                />
              )}
            </p>

            {done && goldenRule && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 rounded-xl border-2 border-yellow-400 bg-yellow-50 p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">👑</span>
                  <span className="font-bold text-yellow-800 text-xs">القاعدة الذهبية</span>
                </div>
                <p className="text-yellow-900 text-sm font-bold text-right leading-snug">{goldenRule}</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* المعلم المتحرك */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-2 z-20 pointer-events-none"
          style={{ width: '90px', height: '140px' }}
        >
          <svg viewBox="0 0 90 140" className="w-full h-full" style={{ filter: 'drop-shadow(2px 4px 3px rgba(0,0,0,0.3))' }}>
            <ellipse cx="45" cy="137" rx="30" ry="3" fill="rgba(0,0,0,0.2)" />
            <path d="M 22 60 Q 22 55 28 53 L 62 53 Q 68 55 68 60 L 70 120 Q 70 125 65 125 L 25 125 Q 20 125 20 120 Z" fill="#1e3a5f" />
            <path d="M 35 53 L 45 62 L 55 53 L 50 53 L 45 58 L 40 53 Z" fill="#f8fafc" />
            <path d="M 43 58 L 47 58 L 48 68 L 45 72 L 42 68 Z" fill="#dc2626" />
            <ellipse cx="45" cy="35" rx="16" ry="18" fill="#f0c9a0" />
            <path d="M 29 30 Q 29 16 45 14 Q 61 16 61 30 L 58 28 Q 58 20 45 19 Q 32 20 32 28 Z" fill="#2d1810" />
            <motion.g animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.25 }} style={{ transformOrigin: '40px 33px' }}>
              <circle cx="40" cy="33" r="1.8" fill="#1a1a1a" />
            </motion.g>
            <motion.g animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, repeatDelay: 3.2, duration: 0.25 }} style={{ transformOrigin: '50px 33px' }}>
              <circle cx="50" cy="33" r="1.8" fill="#1a1a1a" />
            </motion.g>
            <path d="M 36 29 Q 40 28 44 29" stroke="#5a3a20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M 46 29 Q 50 28 54 29" stroke="#5a3a20" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <motion.ellipse animate={{ ry: [1, 3, 1.5, 2.5, 1], rx: [3, 2.5, 3, 2.5, 3] }} transition={{ repeat: done ? 0 : Infinity, duration: 0.3 }} cx="45" cy="42" rx="3" fill="#8b3a3a" />
            <circle cx="40" cy="33" r="5" fill="none" stroke="#333" strokeWidth="1.2" />
            <circle cx="50" cy="33" r="5" fill="none" stroke="#333" strokeWidth="1.2" />
            <line x1="45" y1="33" x2="45" y2="33" stroke="#333" strokeWidth="1.2" />
            <path d="M 35 31 Q 32 30 30 31" stroke="#333" strokeWidth="1" fill="none" />
            <path d="M 55 31 Q 58 30 60 31" stroke="#333" strokeWidth="1" fill="none" />
            <motion.g animate={{ rotate: done ? 0 : [0, -8, 5, -3, 0] }} transition={{ repeat: done ? 0 : Infinity, duration: 1.2, ease: 'easeInOut' }} style={{ transformOrigin: '68px 60px' }}>
              <path d="M 65 58 Q 75 65 80 78 Q 82 85 78 88" stroke="#1e3a5f" strokeWidth="8" fill="none" strokeLinecap="round" />
              <circle cx="79" cy="86" r="4" fill="#f0c9a0" />
              <rect x="76" y="84" width="8" height="2.5" rx="1" fill="#fef3c7" transform="rotate(20 76 84)" />
            </motion.g>
            <path d="M 25 58 Q 18 70 16 85" stroke="#1e3a5f" strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="16" cy="86" r="4" fill="#f0c9a0" />
          </svg>

          {!done && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 65, y: 80, opacity: 0.8 }}
                  animate={{ x: 65 + Math.random() * 20, y: 80 + Math.random() * 30, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{ bottom: '50px', right: '20px' }}
                />
              ))}
            </>
          )}
        </motion.div>

        <div className="absolute top-2 right-3 z-20 text-amber-200/70 text-[10px] font-bold">
          أستاذ عمر — معلم المهارات الحياتية
        </div>
      </div>
    </motion.div>
  );
}