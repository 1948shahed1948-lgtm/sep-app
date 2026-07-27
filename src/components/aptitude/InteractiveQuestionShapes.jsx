import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Square, Triangle, Hexagon } from 'lucide-react';

const shapes = [
  { Icon: Circle, top: '10%', end: '8%', size: 22, duration: 6 },
  { Icon: Triangle, top: '55%', end: '18%', size: 16, duration: 8 },
  { Icon: Square, top: '20%', end: '28%', size: 14, duration: 7 },
  { Icon: Hexagon, top: '65%', end: '4%', size: 20, duration: 9 },
];

export default function InteractiveQuestionShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-white/25 pointer-events-auto cursor-pointer"
          style={{ top: s.top, insetInlineEnd: s.end }}
          animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.4, opacity: 1, color: 'rgba(255,255,255,0.9)' }}
          whileTap={{ scale: 0.9 }}
        >
          <s.Icon width={s.size} height={s.size} />
        </motion.div>
      ))}
    </div>
  );
}