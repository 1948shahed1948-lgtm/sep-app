import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLang } from '@/lib/i18n.jsx';
import { Award, Target, Sparkles, MousePointerClick } from 'lucide-react';

const COLORS = { mastered: '#10b981', developing: '#f59e0b', focus: '#ef4444' };
const levelOf = (m) => (m >= 80 ? 'mastered' : m >= 60 ? 'developing' : 'focus');

export default function SkillsMasteryOverview({ skills }) {
  const { lang, isRTL } = useLang();
  const [activeLevels, setActiveLevels] = useState({ mastered: true, developing: true, focus: true });
  const [selected, setSelected] = useState(null);

  const labels = {
    mastered: lang === 'ar' ? 'مهارات متقنة' : 'Mastered',
    developing: lang === 'ar' ? 'قيد التطوّر' : 'Developing',
    focus: lang === 'ar' ? 'تحتاج تركيز' : 'Needs Focus',
    gap: lang === 'ar' ? 'الفجوة التعليمية' : 'Learning Gap',
    practice: lang === 'ar' ? 'يُنصح بالتدريب المكثّف على هذه المهارة لرفع مستوى الإتقان.' : 'Intensive practice recommended to raise mastery.',
  };

  if (!skills || skills.length === 0) {
    return (
      <div className="text-center py-10 text-slate-400 text-sm">
        {lang === 'ar'
          ? 'لا توجد بيانات مهارات بعد. ابدأ بالتدريب لعرض إتقانك هنا!'
          : 'No skill data yet. Start practicing to see your mastery here!'}
      </div>
    );
  }

  const counts = { mastered: 0, developing: 0, focus: 0 };
  skills.forEach((s) => { counts[levelOf(s.mastery)] += 1; });

  const donutData = [
    { name: labels.mastered, key: 'mastered', value: counts.mastered, color: COLORS.mastered },
    { name: labels.developing, key: 'developing', value: counts.developing, color: COLORS.developing },
    { name: labels.focus, key: 'focus', value: counts.focus, color: COLORS.focus },
  ].filter((d) => d.value > 0);

  const visibleSkills = skills.filter((s) => activeLevels[levelOf(s.mastery)]);
  const barData = [...visibleSkills].sort((a, b) => a.mastery - b.mastery).map((s) => ({
    name: s.name,
    mastery: s.mastery,
    level: levelOf(s.mastery),
  }));

  const toggleLevel = (key) => setActiveLevels((p) => ({ ...p, [key]: !p[key] }));

  const styles = {
    mastered: { card: 'bg-emerald-50 border-emerald-100', badge: 'bg-emerald-100', icon: 'text-emerald-600', num: 'text-emerald-700', label: 'text-emerald-600' },
    focus: { card: 'bg-red-50 border-red-100', badge: 'bg-red-100', icon: 'text-red-600', num: 'text-red-700', label: 'text-red-600' },
    developing: { card: 'bg-amber-50 border-amber-100', badge: 'bg-amber-100', icon: 'text-amber-600', num: 'text-amber-700', label: 'text-amber-600' },
  };

  const selectedSkill = selected ? skills.find((s) => s.skillId === selected) : null;
  const gap = selectedSkill ? 100 - selectedSkill.mastery : 0;

  return (
    <div className="space-y-6">
      {/* Donut + summary */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={donutData}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={88}
                paddingAngle={3}
                stroke="none"
              >
                {donutData.map((d, i) => (
                  <Cell
                    key={i}
                    fill={d.color}
                    opacity={activeLevels[d.key] ? 1 : 0.25}
                    style={{ cursor: 'pointer' }}
                    onClick={() => toggleLevel(d.key)}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [value, name]}
                contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 13 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-display font-bold text-slate-900">{visibleSkills.length}</span>
            <span className="text-[11px] text-slate-400">{lang === 'ar' ? 'مهارة ظاهرة' : 'shown'}</span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { key: 'mastered', icon: Award, count: counts.mastered, cls: 'emerald' },
            { key: 'focus', icon: Target, count: counts.focus, cls: 'red' },
            { key: 'developing', icon: Sparkles, count: counts.developing, cls: 'amber' },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleLevel(item.key)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
                activeLevels[item.key] ? styles[item.key].card : 'bg-slate-50 border-slate-100 opacity-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg ${styles[item.key].badge} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${styles[item.key].icon}`} />
              </div>
              <div className="flex-1 text-start">
                <div className={`text-lg font-bold ${styles[item.key].num}`}>{item.count}</div>
                <div className={`text-xs ${styles[item.key].label}`}>{labels[item.key]}</div>
              </div>
              <span className="text-xs text-slate-400">{activeLevels[item.key] ? '✓' : '○'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected skill detail */}
      {selectedSkill && (
        <div className={`rounded-xl p-4 border ${
          levelOf(selectedSkill.mastery) === 'focus' ? 'bg-red-50 border-red-100' :
          levelOf(selectedSkill.mastery) === 'developing' ? 'bg-amber-50 border-amber-100' :
          'bg-emerald-50 border-emerald-100'
        }`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-heading font-bold text-slate-900">{selectedSkill.name}</div>
              <div className="text-xs text-slate-500 mt-1">
                {lang === 'ar' ? 'نسبة الإتقان' : 'Mastery'}: <span className="font-bold">{selectedSkill.mastery}%</span>
                <span className="mx-2">·</span>
                {labels.gap}: <span className="font-bold">{gap}%</span>
              </div>
              {levelOf(selectedSkill.mastery) !== 'mastered' && (
                <p className="text-xs text-slate-600 mt-2">{labels.practice}</p>
              )}
            </div>
            <button type="button" onClick={() => setSelected(null)} className="text-xs text-slate-400 hover:text-slate-600">
              {lang === 'ar' ? 'إغلاق' : 'Close'} ✕
            </button>
          </div>
        </div>
      )}

      {/* Horizontal bar chart per skill */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'نسبة إتقان كل مهارة' : 'Mastery per skill'}
          </h4>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
            <MousePointerClick className="w-3 h-3" />
            {lang === 'ar' ? 'انقر على العمود للتفاصيل' : 'Click a bar for details'}
          </span>
        </div>
        {barData.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-sm">
            {lang === 'ar' ? 'لا توجد مهارات في المستويات المختارة.' : 'No skills in selected levels.'}
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={Math.max(200, barData.length * 38)}>
            <BarChart layout="vertical" data={barData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} reversed={isRTL} />
              <YAxis
                type="category"
                dataKey="name"
                width={150}
                tick={{ fontSize: 12, fill: '#475569' }}
                orientation={isRTL ? 'right' : 'left'}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, lang === 'ar' ? 'نسبة الإتقان' : 'Mastery']}
                contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 13 }}
                cursor={{ fill: '#f8fafc' }}
              />
              <Bar dataKey="mastery" radius={[0, 8, 8, 0]} maxBarSize={26} cursor="pointer" onClick={(e) => {
                const found = skills.find((s) => s.name === e.name);
                if (found) setSelected(found.skillId);
              }}>
                {barData.map((d, i) => (
                  <Cell key={i} fill={COLORS[d.level]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}