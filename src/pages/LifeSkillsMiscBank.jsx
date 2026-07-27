import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { LIFE_SKILLS_MISC_UNITS, LIFE_SKILLS_MISC_TOTAL } from '@/lib/lifeSkillsMiscBank';
import MiscLessonRunner from '@/components/misc/MiscLessonRunner';
import PageHeader from '@/components/layout/PageHeader';

export default function LifeSkillsMiscBank() {
  const [activeUnit, setActiveUnit] = useState(null);

  if (activeUnit) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <button onClick={() => setActiveUnit(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium">
          ← الوحدات
        </button>
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${activeUnit.color} p-6 text-white`}>
          <div className="text-4xl mb-2">{activeUnit.icon}</div>
          <h2 className="text-xl font-heading font-bold">{activeUnit.title_ar}</h2>
          <p className="text-white/70 text-sm mt-1">{activeUnit.lessons[0].questions.length} أسئلة متنوعة</p>
        </div>
        <MiscLessonRunner lesson={activeUnit.lessons[0]} unit={activeUnit} onBack={() => setActiveUnit(null)} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="المهارات الحياتية — بنك الأسئلة المتنوعة"
        subtitle="أسئلة تفاعلية مستخرجة من الكتاب المدرسي مع تتبع النتائج والأخطاء"
        backTo="/question-bank/grades"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'مهارات حياتية متنوعة' },
        ]}
      />
      <div className="bg-white rounded-2xl border border-slate-200 px-5 py-4 flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">📚</div>
        <div>
          <p className="font-bold text-slate-800">إجمالي الأسئلة: {LIFE_SKILLS_MISC_TOTAL} سؤالاً</p>
          <p className="text-sm text-slate-500">{LIFE_SKILLS_MISC_UNITS.length} وحدة موضوعية · 12 نوع سؤال تفاعلي</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LIFE_SKILLS_MISC_UNITS.map((unit, i) => (
          <motion.button key={unit.id}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            onClick={() => setActiveUnit(unit)}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${unit.color} p-6 text-right text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
            <div className="text-4xl mb-3">{unit.icon}</div>
            <h3 className="font-heading font-bold text-base">{unit.title_ar}</h3>
            <p className="text-white/70 text-xs mt-1">{unit.lessons[0].questions.length} أسئلة</p>
            <div className="absolute bottom-4 left-4">
              <span className="text-white/50 text-xs font-medium">ابدأ ←</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}