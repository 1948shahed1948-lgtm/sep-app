import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { base44 } from '@/api/base44Client';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const getColor = (value) => (value >= 80 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : value >= 60 ? 'text-amber-600 bg-amber-50 border-amber-200' : 'text-red-600 bg-red-50 border-red-200');

async function buildSkillBreakdown(results, lang) {
  const withSkill = results.filter(r => r.skill_id);
  const skillIds = [...new Set(withSkill.map(r => r.skill_id))];
  const skillNames = {};
  await Promise.all(skillIds.map(async (id) => {
    try {
      const skill = await base44.entities.Skill.get(id);
      skillNames[id] = lang === 'ar' ? skill.name_ar : skill.name_en;
    } catch {}
  }));

  const stats = {};
  withSkill.forEach(r => {
    const key = r.skill_id;
    if (!stats[key]) stats[key] = { total: 0, count: 0, wrong: 0 };
    stats[key].total += r.score_percentage || 0;
    stats[key].count += 1;
    stats[key].wrong += r.wrong_count || 0;
  });

  return Object.entries(stats).map(([id, s]) => ({
    name: skillNames[id] || (lang === 'ar' ? 'مهارة' : 'Skill'),
    mastery: Math.round(s.total / s.count),
    wrong: s.wrong,
    attempts: s.count
  })).sort((a, b) => a.mastery - b.mastery);
}

export default function SubjectDetailDialog({ subjectName, results, open, onClose, lang }) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    buildSkillBreakdown(results || [], lang).then((s) => {
      setSkills(s);
      setLoading(false);
    });
  }, [open, results, lang]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">{subjectName}</DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
          </div>
        ) : skills.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-6">
            {lang === 'ar' ? 'لا توجد تفاصيل مهارات كافية لهذه المادة بعد.' : 'No skill-level details available yet for this subject.'}
          </p>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {skills.map((s, i) => (
              <div key={i} className={`rounded-xl border p-3 flex items-center justify-between gap-3 ${getColor(s.mastery)}`}>
                <div className="flex items-start gap-2">
                  {s.mastery < 60 ? <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" /> : <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <div>
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs opacity-70 mt-0.5">
                      {lang === 'ar' ? `${s.attempts} محاولة · ${s.wrong} خطأ` : `${s.attempts} attempt(s) · ${s.wrong} error(s)`}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-bold flex-shrink-0">{s.mastery}%</span>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}