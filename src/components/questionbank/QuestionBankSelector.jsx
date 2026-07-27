import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n.jsx';
import { gradeStages, getGradeName } from '@/lib/gradeData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function CurriculumStep({ onSelect }) {
  const { t, lang } = useLang();
  const options = [
    { key: 'national', label: t('nationalCurriculum') },
    { key: 'international', label: t('internationalCurriculum') },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {options.map((o, i) => (
        <motion.button
          key={o.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          onClick={() => onSelect(o.key)}
          className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all text-center"
        >
          <h3 className="text-lg font-heading font-bold text-slate-900">{o.label}</h3>
        </motion.button>
      ))}
    </div>
  );
}

export function GradeStep({ onSelect }) {
  const { t, lang } = useLang();
  return (
    <div className="space-y-8">
      {Object.entries(gradeStages).map(([stageKey, stage]) => (
        <div key={stageKey} className="space-y-3">
          <h3 className="text-sm font-bold text-slate-500">{t(stageKey)}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {stage.grades.map((g, i) => (
              <motion.button
                key={g}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => onSelect(g)}
                className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <span className="text-lg font-display font-bold text-slate-800">{getGradeName(g, lang)}</span>
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SubjectStep({ subjects, onSelect, loading }) {
  const { lang, localizedField, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (subjects.length === 0) {
    return (
      <div className="text-center py-16 rounded-2xl bg-white border border-slate-100">
        <p className="text-slate-500">{lang === 'ar' ? 'لا توجد مواد متاحة لهذا الصف بعد' : 'No subjects available for this grade yet'}</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {subjects.map((subject, i) => (
        <motion.button
          key={subject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          onClick={() => onSelect(subject)}
          className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-all text-start flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">{subject.icon || "📘"}</div>
            <h3 className="font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {localizedField(subject, 'name') || subject.name_ar}
            </h3>
          </div>
          <Arrow className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
        </motion.button>
      ))}
    </div>
  );
}