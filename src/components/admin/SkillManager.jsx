import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import CurriculumPicker from './CurriculumPicker';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';

const emptyForm = { name_ar: '', name_en: '', description_ar: '', description_en: '', mastery_threshold: 80 };

export default function SkillManager() {
  const [lessonId, setLessonId] = useState(null);
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadSkills = (id) => {
    if (!id) { setSkills([]); return; }
    base44.entities.Skill.filter({ lesson_id: id }).then(setSkills);
  };

  useEffect(() => { loadSkills(lessonId); }, [lessonId]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!lessonId || !form.name_ar || !form.name_en) return;
    setSaving(true);
    await base44.entities.Skill.create({ ...form, lesson_id: lessonId, mastery_threshold: Number(form.mastery_threshold) || 80 });
    setForm(emptyForm);
    loadSkills(lessonId);
    setSaving(false);
  };

  const handleDelete = async (id) => {
    await base44.entities.Skill.delete(id);
    loadSkills(lessonId);
  };

  return (
    <div className="space-y-6">
      <CurriculumPicker includeSkill={false} onLessonChange={setLessonId} />

      {lessonId && (
        <>
          <form onSubmit={handleCreate} className="grid sm:grid-cols-2 gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
            <Input placeholder="اسم المهارة (عربي)" value={form.name_ar} onChange={(e) => setForm({ ...form, name_ar: e.target.value })} />
            <Input placeholder="Skill name (English)" value={form.name_en} onChange={(e) => setForm({ ...form, name_en: e.target.value })} />
            <Textarea placeholder="الوصف (عربي)" value={form.description_ar} onChange={(e) => setForm({ ...form, description_ar: e.target.value })} />
            <Textarea placeholder="Description (English)" value={form.description_en} onChange={(e) => setForm({ ...form, description_en: e.target.value })} />
            <Input type="number" placeholder="نسبة الإتقان %" value={form.mastery_threshold} onChange={(e) => setForm({ ...form, mastery_threshold: e.target.value })} />
            <Button type="submit" disabled={saving} className="gap-2"><Plus className="w-4 h-4" />إضافة مهارة</Button>
          </form>

          <div className="space-y-2">
            {skills.map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100">
                <div>
                  <p className="font-medium text-sm text-slate-800">{s.name_ar} / {s.name_en}</p>
                  <p className="text-xs text-slate-400">نسبة الإتقان: {s.mastery_threshold}%</p>
                </div>
                <button onClick={() => handleDelete(s.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {skills.length === 0 && <p className="text-sm text-slate-400 text-center py-4">لا توجد مهارات لهذا الدرس بعد</p>}
          </div>
        </>
      )}
    </div>
  );
}