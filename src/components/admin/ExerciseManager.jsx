import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import CurriculumPicker from './CurriculumPicker';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react';

const emptyForm = {
  question_ar: '', question_en: '', type: 'multiple_choice',
  options_ar: '', options_en: '', correct_answer: '',
  explanation_ar: '', explanation_en: '', difficulty: 'medium', points: 10
};

export default function ExerciseManager() {
  const [skillId, setSkillId] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const loadExercises = (id) => {
    if (!id) { setExercises([]); return; }
    base44.entities.Exercise.filter({ skill_id: id }).then(setExercises);
  };

  useEffect(() => { loadExercises(skillId); }, [skillId]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!skillId || !form.question_ar || !form.question_en) return;
    setSaving(true);
    await base44.entities.Exercise.create({
      ...form,
      skill_id: skillId,
      points: Number(form.points) || 10,
      options_ar: form.options_ar.split('\n').map((o) => o.trim()).filter(Boolean),
      options_en: form.options_en.split('\n').map((o) => o.trim()).filter(Boolean),
    });
    setForm(emptyForm);
    loadExercises(skillId);
    setSaving(false);
  };

  const handleDelete = async (id) => {
    await base44.entities.Exercise.delete(id);
    loadExercises(skillId);
  };

  return (
    <div className="space-y-6">
      <CurriculumPicker includeSkill onLessonChange={() => {}} onSkillChange={setSkillId} />

      {skillId && (
        <>
          <form onSubmit={handleCreate} className="grid sm:grid-cols-2 gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
            <Textarea placeholder="السؤال (عربي)" value={form.question_ar} onChange={(e) => setForm({ ...form, question_ar: e.target.value })} />
            <Textarea placeholder="Question (English)" value={form.question_en} onChange={(e) => setForm({ ...form, question_en: e.target.value })} />
            <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="multiple_choice">اختيار من متعدد</SelectItem>
                <SelectItem value="true_false">صح / خطأ</SelectItem>
                <SelectItem value="fill_blank">إكمال الفراغ</SelectItem>
                <SelectItem value="matching">مطابقة</SelectItem>
                <SelectItem value="ordering">ترتيب</SelectItem>
              </SelectContent>
            </Select>
            <Select value={form.difficulty} onValueChange={(v) => setForm({ ...form, difficulty: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">سهل</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="hard">صعب</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="الخيارات (عربي) - سطر لكل خيار" value={form.options_ar} onChange={(e) => setForm({ ...form, options_ar: e.target.value })} />
            <Textarea placeholder="Options (English) - one per line" value={form.options_en} onChange={(e) => setForm({ ...form, options_en: e.target.value })} />
            <Input placeholder="الإجابة الصحيحة (رقم الخيار من 0)" value={form.correct_answer} onChange={(e) => setForm({ ...form, correct_answer: e.target.value })} />
            <Input type="number" placeholder="النقاط" value={form.points} onChange={(e) => setForm({ ...form, points: e.target.value })} />
            <Textarea placeholder="الشرح (عربي)" value={form.explanation_ar} onChange={(e) => setForm({ ...form, explanation_ar: e.target.value })} />
            <Textarea placeholder="Explanation (English)" value={form.explanation_en} onChange={(e) => setForm({ ...form, explanation_en: e.target.value })} />
            <Button type="submit" disabled={saving} className="gap-2 sm:col-span-2"><Plus className="w-4 h-4" />إضافة سؤال</Button>
          </form>

          <div className="space-y-2">
            {exercises.map((ex) => (
              <div key={ex.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 gap-3">
                <p className="font-medium text-sm text-slate-800 truncate">{ex.question_ar}</p>
                <button onClick={() => handleDelete(ex.id)} className="text-red-400 hover:text-red-600 flex-shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {exercises.length === 0 && <p className="text-sm text-slate-400 text-center py-4">لا توجد أسئلة لهذه المهارة بعد</p>}
          </div>
        </>
      )}
    </div>
  );
}