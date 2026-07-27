import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import RubricTable from '@/components/performance/RubricTable';
import {
  PERFORMANCE_GRADES, PERFORMANCE_FORMS, SUBJECTS_AR, BLOOM_AR,
  tasksForGrade, formMeta,
} from '@/lib/performanceBank';
import { Presentation, ChevronLeft, Clock, ListChecks, Target } from 'lucide-react';

const FORMS_INTRO = [
  { ar: 'مشاريع عملية', desc: 'تصميم وبناء نموذج أو منتج' },
  { ar: 'عروض تقديمية', desc: 'عرض بحث أمام الزملاء' },
  { ar: 'تجارب معملية', desc: 'تنفيذ تجربة وتسجيل النتائج' },
  { ar: 'محافظ أعمال', desc: 'ملف يجمع تطور الطالب' },
  { ar: 'تمثيل أدوار', desc: 'محاكاة موقف واقعي' },
];

export default function PerformanceBank() {
  const { lang, isRTL } = useLang();
  const Back = isRTL ? ChevronLeft : ChevronLeft;
  const [grade, setGrade] = useState(1);
  const [taskId, setTaskId] = useState(null);

  const tasks = tasksForGrade(grade);
  const task = taskId ? tasks.find((t) => t.id === taskId) : null;

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'الاختبارات الأدائية' : 'Performance-Based Assessments'}
        subtitle={lang === 'ar' ? 'مهام حقيقية تقيس "ماذا يستطيع الطالب فعله" — مُقيَّمة بسلم تقدير بالنقاط' : 'Real tasks measuring what students can do — scored with a rubric'}
        backTo="/"
      />

      {!task && (
        <>
          {/* مقدمة المفهوم */}
          <section className="rounded-2xl bg-white border border-slate-100 p-6 sm:p-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100 mb-3">
              <Presentation className="w-7 h-7 text-violet-600" />
            </div>
            <h2 className="font-heading font-bold text-xl text-slate-900">
              {lang === 'ar' ? 'الاختبار الأدائي يسأل: ماذا تستطيع أن تفعل بما تعرف؟' : 'Performance tests ask: what can you do with what you know?'}
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed mt-2">
              {lang === 'ar'
                ? 'بدلاً من الأسئلة الورقية (صح/خطأ أو اختيار)، ينفّذ الطالب مهمة واقعية أو محاكاة لموقف حقيقي، وهي الطريقة المثلى لقياس المستويات العليا من بلوم: التطبيق والتحليل والتقييم والإبداع. التقييم لا يكون بصح/خطأ بل بسلم تقدير (Rubric) يحدد معايير ودرجات لكل معيار.'
                : 'Instead of paper questions, students perform a real task or simulation — optimal for Bloom higher levels: Apply, Analyze, Evaluate, Create. Scoring uses a Rubric (criteria + point bands), not right/wrong.'}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-5">
              {FORMS_INTRO.map((f) => (
                <div key={f.ar} className="rounded-xl bg-slate-50 border border-slate-100 p-3 text-center">
                  <p className="text-sm font-bold text-slate-800">{f.ar}</p>
                  <p className="text-[11px] text-slate-400 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* اختيار الصف */}
          <section className="flex flex-wrap items-center justify-center gap-2">
            {PERFORMANCE_GRADES.map((g) => (
              <button
                key={g}
                onClick={() => setGrade(g)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${grade === g ? 'bg-violet-600 text-white shadow-lg shadow-violet-200' : 'bg-white border border-slate-200 text-slate-600 hover:border-violet-300'}`}
              >
                {lang === 'ar' ? `الصف ${g}` : `Grade ${g}`}
              </button>
            ))}
          </section>

          {/* بطاقات المهام */}
          <section className="grid sm:grid-cols-2 gap-5">
            {tasks.map((t) => {
              const fm = formMeta(t.form);
              return (
                <button
                  key={t.id}
                  onClick={() => setTaskId(t.id)}
                  className="text-start rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{fm?.icon}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-violet-50 text-violet-600">{fm?.ar}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{SUBJECTS_AR[t.subject]}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 ms-auto">{BLOOM_AR[t.bloom]}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">{t.title_ar}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{t.scenario_ar}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3">
                    <Clock className="w-3.5 h-3.5" /> {t.duration_ar}
                    <span className="mx-1">•</span>
                    <Target className="w-3.5 h-3.5" /> {t.criteria.length} {lang === 'ar' ? 'معايير' : 'criteria'}
                  </div>
                </button>
              );
            })}
          </section>
        </>
      )}

      {task && (
        <div className="max-w-2xl mx-auto space-y-5">
          <button onClick={() => setTaskId(null)} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700">
            <Back className="w-4 h-4" /> {lang === 'ar' ? 'رجوع للمهام' : 'Back to tasks'}
          </button>

          {/* تفاصيل المهمة */}
          <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden">
            <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{formMeta(task.form)?.icon}</span>
                <span className="text-[11px] font-bold bg-white/25 rounded-full px-2.5 py-1">{formMeta(task.form)?.ar} · {SUBJECTS_AR[task.subject]} · {BLOOM_AR[task.bloom]}</span>
              </div>
              <h2 className="text-xl font-heading font-bold mb-2">{task.title_ar}</h2>
              <p className="text-sm text-white/85 leading-relaxed">{task.scenario_ar}</p>
            </div>

            <div className="p-6 space-y-5">
              {/* الخطوات */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ListChecks className="w-4 h-4 text-violet-600" />
                  <h3 className="font-heading font-bold text-slate-800 text-sm">{lang === 'ar' ? 'خطوات التنفيذ' : 'Steps'}</h3>
                </div>
                <ol className="space-y-2">
                  {task.steps_ar.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 rounded-lg px-3 py-2">
                <Clock className="w-4 h-4" /> {lang === 'ar' ? 'المدة: ' : 'Duration: '} <span className="font-bold">{task.duration_ar}</span>
              </div>
            </div>
          </div>

          {/* سلّم التقدير */}
          <div className="rounded-2xl bg-white border border-slate-100 p-6">
            <h3 className="font-heading font-bold text-slate-900 mb-1">
              {lang === 'ar' ? 'سلّم التقدير (Rubric)' : 'Rubric'}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {lang === 'ar' ? 'اختر مستوى كل معيار — تُحتسب النقطة ونسبة الإتقان مباشرة (الإتقان ٧٠٪)' : 'Pick a level per criterion — points and mastery compute live (70% to pass)'}
            </p>
            <RubricTable criteria={task.criteria} />
          </div>
        </div>
      )}
    </div>
  );
}