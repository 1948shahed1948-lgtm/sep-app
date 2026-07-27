import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLang } from '@/lib/i18n.jsx';

const getColor = (value) => (value >= 80 ? '#10b981' : value >= 60 ? '#f59e0b' : '#ef4444');

export default function SubjectMasteryChart({ data, onBarClick }) {
  const { lang, isRTL } = useLang();

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-10 text-slate-400 text-sm">
        {lang === 'ar' ? 'لا توجد بيانات كافية بعد. ابدأ بالتدريب لعرض تقدمك!' : 'Not enough data yet. Start practicing to see your progress!'}
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} reversed={isRTL} />
        <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#94a3b8' }} orientation={isRTL ? 'right' : 'left'} />
        <Tooltip
          formatter={(value) => [`${value}%`, lang === 'ar' ? 'نسبة الإتقان' : 'Mastery']}
          contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 13 }}
        />
        <Bar
          dataKey="mastery"
          radius={[8, 8, 0, 0]}
          maxBarSize={48}
          cursor={onBarClick ? 'pointer' : 'default'}
          onClick={(entry) => onBarClick && onBarClick(entry.name)}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={getColor(entry.mastery)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}