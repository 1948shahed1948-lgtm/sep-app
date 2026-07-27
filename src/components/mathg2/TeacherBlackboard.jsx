import React, { useState, useEffect } from 'react';
import MathText from '@/components/shared/MathText';

export default function TeacherBlackboard({ text }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    setShown('');
    let i = 0;
    const id = setInterval(() => { i++; setShown(text.slice(0, i)); if (i >= text.length) clearInterval(id); }, 25);
    return () => clearInterval(id);
  }, [text]);
  return (
    <div className="rounded-2xl mt-4 overflow-hidden shadow-xl" style={{ border: '8px solid #5C3A1E' }}>
      <div className="p-5 text-white text-lg leading-loose" style={{ background: '#1a3a2a', minHeight: '100px' }}>
        <MathText text={shown} /><span className="animate-pulse">▌</span>
      </div>
    </div>
  );
}