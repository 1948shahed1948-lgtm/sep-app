import React, { useState, useEffect, useMemo } from 'react';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, Loader2, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const GRADE_NAMES = {
  grade_1: { ar: 'الصف الأول الابتدائي', en: 'Grade 1' },
  grade_2: { ar: 'الصف الثاني الابتدائي', en: 'Grade 2' },
  grade_3: { ar: 'الصف الثالث الابتدائي', en: 'Grade 3' },
  grade_4: { ar: 'الصف الرابع الابتدائي', en: 'Grade 4' },
  grade_5: { ar: 'الصف الخامس الابتدائي', en: 'Grade 5' },
  grade_6: { ar: 'الصف السادس الابتدائي', en: 'Grade 6' },
  grade_7: { ar: 'الصف الأول المتوسط', en: 'Grade 7' },
  grade_8: { ar: 'الصف الثاني المتوسط', en: 'Grade 8' },
  grade_9: { ar: 'الصف الثالث المتوسط', en: 'Grade 9' },
  grade_10: { ar: 'الصف الأول الثانوي', en: 'Grade 10' },
  grade_11: { ar: 'الصف الثاني الثانوي', en: 'Grade 11' },
  grade_12: { ar: 'الصف الثالث الثانوي', en: 'Grade 12' },
};

function groupUnits(units) {
  const grades = {};
  for (const u of units) {
    if (!grades[u.grade]) grades[u.grade] = {};
    const sk = u.subject_name_en;
    if (!grades[u.grade][sk]) grades[u.grade][sk] = { name_ar: u.subject_name_ar, name_en: u.subject_name_en, icon: u.icon || 'BookOpen', color: u.color || '#3B82F6', subject_id: u.subject_id, units: {} };
    const uk = u.unit_title_ar;
    if (!grades[u.grade][sk].units[uk]) grades[u.grade][sk].units[uk] = { title_ar: u.unit_title_ar, title_en: u.unit_title_en, lessons: [] };
    grades[u.grade][sk].units[uk].lessons.push({ title_ar: u.lesson_title_ar, title_en: u.lesson_title_en });
  }
  return grades;
}

export default function ContentGenerator() {
  const { lang } = useLang();
  const [loading, setLoading] = useState(true);
  const [curriculum, setCurriculum] = useState({});
  const [busy, setBusy] = useState(null);
  const [results, setResults] = useState({});
  const [progress, setProgress] = useState('');
  const [openGrade, setOpenGrade] = useState(null);

  useEffect(() => {
    base44.entities.CurriculumUnit.list('order', 1000).then((units) => {
      setCurriculum(groupUnits(units));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const setRes = (key, val) => setResults((p) => ({ ...p, [key]: val }));

  const runTask = async (task) => {
    const key = `${task.grade}|${task.lesson_title_ar}`;
    setBusy(key);
    setRes(key, { status: 'running' });
    try {
      const res = await base44.functions.invoke('generateLessonQuestions', task);
      setRes(key, { status: 'done', created: res.data?.created ?? res.created });
    } catch (e) {
      setRes(key, { status: 'error', error: e.message });
    }
    setBusy(null);
  };

  const runSubject = async (grade, subject) => {
    const tasks = Object.values(subject.units).flatMap((u) =>
      u.lessons.map((l) => ({
        grade, subject_id: subject.subject_id,
        subject_name_ar: subject.name_ar, subject_name_en: subject.name_en,
        unit_title_ar: u.title_ar, unit_title_en: u.title_en,
        lesson_title_ar: l.title_ar, lesson_title_en: l.title_en,
        count: 50,
      }))
    );
    for (const task of tasks) {
      await runTask(task);
      setProgress(`${task.lesson_title_ar} ✓ (${tasks.indexOf(task) + 1}/${tasks.length})`);
    }
    setProgress(lang === 'ar' ? 'اكتملت المادة' : 'Subject complete');
  };

  const gradeOrder = useMemo(() => Object.keys(curriculum).sort(), [curriculum]);

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'مولّد محتوى المنهج السعودي' : 'Saudi Curriculum Content Generator'}
        subtitle={lang === 'ar' ? 'المنهج الكامل مصنّفاً حسب الصف والمادة والوحدة — توليد ٥٠ سؤالاً لكل درس' : 'Full curriculum by grade, subject & unit — generate 50 questions per lesson'}
        backTo="/admin"
        breadcrumbs={[{ label: lang === 'ar' ? 'لوحة الإدارة' : 'Admin', path: '/admin' }, { label: lang === 'ar' ? 'مولّد المحتوى' : 'Content Generator' }]}
      />

      {progress && <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-800 font-medium">{progress}</div>}

      <div className="text-xs text-slate-500 bg-amber-50 border border-amber-100 rounded-xl p-3">
        {lang === 'ar'
          ? 'تنبيه: التوليد يستهلك رصيد التكاملات (٥ استدعاءات LLM لكل درس). شغّل درساً منفرداً أو مادة كاملة.'
          : 'Note: generation consumes integration credits (5 LLM calls per lesson). Run a single lesson or a full subject.'}
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-[#263D84]" /></div>
      ) : (
        <div className="space-y-4">
          {gradeOrder.map((grade) => {
            const subjects = curriculum[grade];
            const subjectCount = Object.keys(subjects).length;
            const lessonCount = Object.values(subjects).reduce((a, s) => a + Object.values(s.units).reduce((b, u) => b + u.lessons.length, 0), 0);
            const isOpen = openGrade === grade || gradeOrder.length <= 3;
            return (
              <div key={grade} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenGrade(isOpen ? null : grade)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#263D84] to-[#3E57A4] flex items-center justify-center text-white font-bold">{grade.replace('grade_', '')}</div>
                    <div className="text-start">
                      <h2 className="text-lg font-heading font-bold text-slate-900">{lang === 'ar' ? GRADE_NAMES[grade].ar : GRADE_NAMES[grade].en}</h2>
                      <p className="text-xs text-slate-400">{subjectCount} {lang === 'ar' ? 'مواد' : 'subjects'} · {lessonCount} {lang === 'ar' ? 'دروس' : 'lessons'}</p>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 grid md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    {Object.values(subjects).map((subject) => {
                      const units = Object.values(subject.units);
                      const sLessons = units.reduce((a, u) => a + u.lessons.length, 0);
                      return (
                        <div key={subject.subject_id} className="rounded-xl border border-slate-100 p-4 space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: subject.color }} />
                              <h3 className="font-heading font-bold text-slate-900 truncate">{lang === 'ar' ? subject.name_ar : subject.name_en}</h3>
                              <span className="text-xs text-slate-400 whitespace-nowrap">({sLessons})</span>
                            </div>
                            <Button size="sm" onClick={() => runSubject(grade, subject)} disabled={!!busy} className="text-xs whitespace-nowrap">
                              {lang === 'ar' ? 'توليد الكل' : 'Generate all'}
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {units.map((u) => (
                              <div key={u.title_ar} className="space-y-1">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{lang === 'ar' ? u.title_ar : u.title_en}</p>
                                <div className="space-y-1">
                                  {u.lessons.map((l) => {
                                    const key = `${grade}|${l.title_ar}`;
                                    const r = results[key];
                                    return (
                                      <div key={key} className="flex items-center justify-between gap-2 py-1 px-2 rounded-lg hover:bg-slate-50">
                                        <span className="text-sm text-slate-600 truncate">{lang === 'ar' ? l.title_ar : l.title_en}</span>
                                        {r?.status === 'done' ? (
                                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 whitespace-nowrap"><CheckCircle2 className="w-3.5 h-3.5" />{r.created}</span>
                                        ) : r?.status === 'error' ? (
                                          <span className="text-xs font-bold text-red-600 whitespace-nowrap">✗</span>
                                        ) : busy === key ? (
                                          <Loader2 className="w-4 h-4 animate-spin text-[#263D84] flex-shrink-0" />
                                        ) : (
                                          <Button size="sm" variant="outline" onClick={() => runTask({ grade, subject_id: subject.subject_id, subject_name_ar: subject.name_ar, subject_name_en: subject.name_en, unit_title_ar: u.title_ar, unit_title_en: u.title_en, lesson_title_ar: l.title_ar, lesson_title_en: l.title_en, count: 50 })} disabled={!!busy} className="text-xs whitespace-nowrap">
                                            {lang === 'ar' ? 'توليد' : 'Generate'}
                                          </Button>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}