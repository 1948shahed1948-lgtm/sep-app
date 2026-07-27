import React, { useState } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';
import { useLang } from '@/lib/i18n.jsx';
import { MousePointerClick } from 'lucide-react';

const COLORS = { mastered: '#10b981', developing: '#f59e0b', focus: '#ef4444' };
const levelOf = (m) => (m >= 80 ? 'mastered' : m >= 60 ? 'developing' : 'focus');

export default function SkillsMasteryTreemap({ skills }) {
  const { lang } = useLang();
  const [selected, setSelected] = useState(null);

  if (!skills || skills.length === 0) return null;

  const data = skills.map((s) => ({ name: s.name, mastery: s.mastery, level: levelOf(s.mastery) }));
  const selectedSkill = selected ? skills.find((s) => s.skillId === selected) : null;

  const CustomCell = (props) => {
    const { x, y, width, height, name, mastery, level } = props;
    if (width <= 0 || height <= 0) return <g />;
    return (
      <g
        onClick={() => { const f = skills.find((s) => s.name === name); if (f) setSelected(f.skillId); }}
        style={{ cursor: 'pointer' }}
      >
        <rect x={x} y={y} width={width} height={height} fill={COLORS[level] || '#cbd5e1'} stroke="#fff" strokeWidth={3} rx={6} ry={6} />
        {width > 54 && height > 28 && (
          <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={12} fontWeight={700}>
            {mastery}%
          </text>
        )}
        {width > 96 && height > 44 && (
          <text x={x + width / 2} y={y + height / 2 + 15} textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize={10} opacity={0.92}>
            {name.length > 18 ? name.slice(0, 17) + '…' : name}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'خريطة الإتقان البصرية' : 'Visual Mastery Map'}
        </h4>
        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
          <MousePointerClick className="w-3 h-3" />
          {lang === 'ar' ? 'انقر للمهارة' : 'Click a tile'}
        </span>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <Treemap
          data={data}
          dataKey="mastery"
          stroke="#fff"
          content={<CustomCell />}
          animationDuration={300}
        />
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-4 mt-3 text-xs">
        <span className="flex items-center gap-1.5 text-slate-600"><span className="w-3 h-3 rounded bg-emerald-500" />{lang === 'ar' ? 'متقنة' : 'Mastered'}</span>
        <span className="flex items-center gap-1.5 text-slate-600"><span className="w-3 h-3 rounded bg-amber-500" />{lang === 'ar' ? 'قيد التطوّر' : 'Developing'}</span>
        <span className="flex items-center gap-1.5 text-slate-600"><span className="w-3 h-3 rounded bg-red-500" />{lang === 'ar' ? 'تحتاج تركيز' : 'Needs Focus'}</span>
      </div>

      {selectedSkill && (
        <div className={`mt-3 rounded-xl p-3 border text-sm ${
          levelOf(selectedSkill.mastery) === 'focus' ? 'bg-red-50 border-red-100' :
          levelOf(selectedSkill.mastery) === 'developing' ? 'bg-amber-50 border-amber-100' :
          'bg-emerald-50 border-emerald-100'
        }`}>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-800">{selectedSkill.name} — {selectedSkill.mastery}%</span>
            <button type="button" onClick={() => setSelected(null)} className="text-xs text-slate-400 hover:text-slate-600">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}