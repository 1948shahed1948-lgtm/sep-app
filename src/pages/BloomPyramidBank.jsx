import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import BloomPyramid from '@/components/bloom/BloomPyramid';
import BloomQuestionRunner from '@/components/bloom/BloomQuestionRunner';
import { BLOOM_GRADES, BLOOM_LEVELS, questionsFor, levelQuestionCount } from '@/lib/bloomBank';
import { Layers } from 'lucide-react';

export default function BloomPyramidBank() {
  const { lang } = useLang();
  const [grade, setGrade] = useState(1);
  const [level, setLevel] = useState(null);

  const handleRetry = () => {
    setLevel(null);
    setTimeout(() => setLevel(level), 0);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'البنوك المعرفية' : 'Cognitive Banks'}
        subtitle={lang === 'ar' ? 'أسئلة مصنّفة بمستويات هرم بلوم لكل صف مع رسوم مطابقة' : 'Bloom-taxonomy questions per grade with matching figures'}
        backTo="/"
      />

      {!level && (
        <>
          {/* مقدمة الهرم */}
          <section className="rounded-2xl bg-white border border-slate-100 p-6 sm:p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 mb-3">
              <Layers className="w-7 h-7 text-indigo-600" />
            </div>
            <h2 className="font-heading font-bold text-xl text-slate-900">
              {lang === 'ar' ? 'هرم بلوم للمعارف الإدراكية' : 'Bloom Cognitive Pyramid'}
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-2 leading-relaxed">
              {lang === 'ar'
                ? 'يصعد الطالب من قاعدة الهرم (التذكّر) إلى قمته (الإبداع)، وكل مستوى يتضمّن أسئلة مختلفة لكل صف من المنهج السعودي مع رسوم تعليمية مطابقة. اختر الصف ثم اضغط على مستوى الهرم لبدء التدريب.'
                : 'Students climb from the base (Remember) to the peak (Create). Each level holds grade-specific Saudi-curriculum questions with matching illustrations. Pick a grade then tap a pyramid level to train.'}
            </p>
          </section>

          {/* اختيار الصف */}
          <section className="flex flex-wrap items-center justify-center gap-2">
            {BLOOM_GRADES.map((g) => (
              <button
                key={g}
                onClick={() => setGrade(g)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${grade === g ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300'}`}
              >
                {lang === 'ar' ? `الصف ${g}` : `Grade ${g}`}
              </button>
            ))}
          </section>

          {/* الهرم */}
          <section className="rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 p-6">
            <BloomPyramid grade={grade} onSelect={setLevel} />
          </section>

          {/* بطاقات المستويات + عدّاد الأسئلة */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOOM_LEVELS.map((l) => {
              const count = levelQuestionCount(grade, l.key);
              return (
                <button
                  key={l.key}
                  onClick={() => setLevel(l.key)}
                  className="text-start rounded-2xl bg-white border border-slate-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                    <h3 className="font-heading font-bold text-slate-900">{l.ar}</h3>
                    <span className="ms-auto text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{count} {lang === 'ar' ? 'سؤال' : 'Qs'}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{l.desc_ar}</p>
                </button>
              );
            })}
          </section>
        </>
      )}

      {level && (
        <BloomQuestionRunner
          key={`${grade}-${level}`}
          questions={questionsFor(grade, level)}
          levelKey={level}
          grade={grade}
          onExit={() => setLevel(null)}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}