import React from 'react';
import { motion } from 'framer-motion';
import { BLOOM_LEVELS } from '@/lib/bloomBank';

// هرم بلوم المرئي — مستويات متراصّة من القاعدة (التذكّر) إلى القمة (الإبداع)
// كل مستوى قابل للنقر لبدء التدريب عليه
export default function BloomPyramid({ grade, onSelect, selected }) {
  // نعرض من القمة (الإبداع) إلى القاعدة (التذكّر)
  const topDown = [...BLOOM_LEVELS].reverse();
  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto py-4 select-none">
      {topDown.map((level, i) => {
        // العرض يزداد كلما نزلنا نحو القاعدة
        const widthPct = 46 + (topDown.length - 1 - i) * 9;
        const isSelected = selected === level.key;
        return (
          <motion.button
            key={level.key}
            type="button"
            onClick={() => onSelect(level.key)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.03 }}
            className="relative flex items-center justify-center text-white font-heading font-bold transition-shadow"
            style={{
              width: `${widthPct}%`,
              height: 46,
              marginBottom: 4,
              background: level.color,
              clipPath: 'polygon(14% 0%, 86% 0%, 100% 100%, 0% 100%)',
              boxShadow: isSelected ? '0 0 0 3px rgba(255,255,255,0.9), 0 8px 18px rgba(0,0,0,0.18)' : '0 4px 10px rgba(0,0,0,0.12)',
              opacity: selected && !isSelected ? 0.55 : 1,
            }}
          >
            <span className="text-sm sm:text-base drop-shadow">{level.ar}</span>
            <span className="absolute -end-2 top-1/2 -translate-y-1/2 bg-white text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow" style={{ color: level.color }}>
              {i === 0 ? '٤' : i === 1 ? '٣' : i === 2 ? '٢' : '١'}
            </span>
          </motion.button>
        );
      })}
      <p className="mt-4 text-xs text-slate-400 text-center">القاعدة: التذكّر — القمة: الإبداع</p>
    </div>
  );
}