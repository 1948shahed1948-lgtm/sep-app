import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { gradeStages, getGradeName } from '@/lib/gradeData';
import { Baby, BookOpen, Pencil, Ruler, Calculator, GraduationCap, Sprout, Library, ChevronLeft } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const primaryGradeIcons = { 1: Baby, 2: BookOpen, 3: Pencil, 4: Ruler, 5: Calculator, 6: GraduationCap };

const stageIcons = { primary: Sprout, intermediate: Library, secondary: GraduationCap };

const stageStyles = {
  primary: { dot: 'bg-emerald-500', titleColor: 'text-emerald-700', cardHover: 'hover:border-emerald-300', cardBg: 'bg-emerald-50' },
  intermediate: { dot: 'bg-sky-500', titleColor: 'text-sky-700', cardHover: 'hover:border-sky-300', cardBg: 'bg-sky-50' },
  secondary: { dot: 'bg-violet-500', titleColor: 'text-violet-700', cardHover: 'hover:border-violet-300', cardBg: 'bg-violet-50' },
};

export default function QuestionBankGrades() {
  const { t, lang, isRTL } = useLang();
  const title = lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks';
  const Arrow = isRTL ? ChevronLeft : ChevronLeft;

  return (
    <div className="space-y-8">
      <PageHeader
        title={title}
        subtitle={lang === 'ar' ? 'اختر الصف الدراسي — جميع المراحل متاحة' : 'Choose your grade — all stages available'}
        backTo="/curriculum/national"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: t('nationalCurriculum'), path: '/curriculum/national' }, { label: title }]}
      />

      <div className="space-y-10">
        {Object.entries(gradeStages).map(([stageKey, stage]) => {
          const style = stageStyles[stageKey];
          const StageIcon = stageIcons[stageKey];
          return (
            <div key={stageKey} className="space-y-4">
              {/* غلاف المرحلة */}
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #556895 0%, #233a69 100%)' }}
              >
                <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]" />
                <div className="relative px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                      <StageIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-white font-heading font-bold text-base sm:text-lg">
                        {lang === 'ar' ? stage.name_ar : stage.name_en}
                      </h3>
                      <p className="text-white/60 text-xs">
                        {stage.grades.length} {lang === 'ar' ? 'صفوف دراسية' : 'grades'}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/40 font-medium">
                    {lang === 'ar' ? 'اختر الصف' : 'Pick a grade'}
                    <Arrow className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* صفوف المرحلة */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {stage.grades.map((gradeKey, i) => {
                  const GradeIcon = stageKey === 'primary' ? primaryGradeIcons[Number(gradeKey.split('_')[1])] : null;
                  return (
                    <motion.div key={gradeKey} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={`/question-bank/${gradeKey}`}
                        className={`group flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-100 ${style.cardHover} hover:shadow-lg transition-all gap-2 ${style.cardBg}`}
                      >
                        {GradeIcon ? (
                          <>
                            <GradeIcon className={`w-8 h-8 ${style.titleColor} group-hover:scale-110 transition-transform`} />
                            <span className="text-xs text-slate-500">{getGradeName(gradeKey, lang)}</span>
                          </>
                        ) : (
                          <span className={`text-base font-heading font-bold ${style.titleColor} group-hover:scale-110 transition-transform`}>
                            {getGradeName(gradeKey, lang)}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}