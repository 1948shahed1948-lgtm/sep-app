import React from 'react';
import { motion } from 'framer-motion';

export default function DesertWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 w-[200%] h-24 sm:h-32"
        preserveAspectRatio="none"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,120 C240,180 480,60 720,110 C960,160 1200,80 1440,130 L1440,200 L0,200 Z"
          fill="rgba(251, 191, 36, 0.08)"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 w-[200%] h-20 sm:h-28"
        preserveAspectRatio="none"
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0,140 C260,90 520,170 780,120 C1040,70 1300,150 1440,110 L1440,200 L0,200 Z"
          fill="rgba(253, 230, 138, 0.06)"
        />
      </motion.svg>
    </div>
  );
}