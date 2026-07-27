import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { ArrowLeft, ArrowRight, Baby, BookOpen, Pencil, Ruler, Calculator, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { standardizedTestTypes } from '@/lib/standardizedTestTypes';

const stages = [
  { key: 'primary', grades: [1, 2, 3, 4, 5, 6] },
  { key: 'intermediate', grades: [7, 8, 9] },
  { key: 'secondary', grades: [10, 11, 12] },
];

const primaryGradeIcons = { 1: Baby, 2: BookOpen, 3: Pencil, 4: Ruler, 5: Calculator, 6: GraduationCap };

// طابع جمالي لكل مرحلة: ألوان متدرجة وزخارف خفيفة
const stageThemes = {
  primary: {
    gradient: 'from-rose-50 via-pink-50 to-orange-50',
    accent: 'from-rose-400 to-orange-400',
    ring: 'hover:ring-rose-300',
    chip: 'bg-rose-100 text-rose-700',
    shadow: 'hover:shadow-rose-200/60',
  },
  intermediate: {
    gradient: 'from-sky-50 via-blue-50 to-indigo-50',
    accent: 'from-sky-400 to-indigo-400',
    ring: 'hover:ring-sky-300',
    chip: 'bg-sky-100 text-sky-700',
    shadow: 'hover:shadow-sky-200/60',
  },
  secondary: {
    gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    accent: 'from-emerald-400 to-teal-400',
    ring: 'hover:ring-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700',
    shadow: 'hover:shadow-emerald-200/60',
  },
};

const stageLabelAr = { primary: 'المرحلة الابتدائية', intermediate: 'المرحلة المتوسطة', secondary: 'المرحلة الثانوية' };

export default function StandardizedGrades() {
  const { type } = useParams();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const testType = standardizedTestTypes[type];

  if (!testType) return null;

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? testType.titleAr : testType.titleEn}
        subtitle={lang === 'ar' ? 'اختر الصف الدراسي' : 'Choose your grade'}
        backTo={`/standardized/${type}/intro`}
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? testType.titleAr : testType.titleEn }]}
      />

      <div className="space-y-10">
        {stages.map((stage) => {
          const theme = stageThemes[stage.key];
          return (
            <div key={stage.key} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold ${theme.chip}`}>
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme.accent}`} />
                  {lang === 'ar' ? stageLabelAr[stage.key] : t(stage.key)}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {stage.grades.map((g, i) => {
                  const GradeIcon = stage.key === 'primary' ? primaryGradeIcons[g] : null;
                  return (
                    <motion.div
                      key={g}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={`/standardized/${type}/${g}`}
                        className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${theme.gradient} border border-white/60 ring-2 ring-transparent ${theme.ring} shadow-sm ${theme.shadow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-3 overflow-hidden`}
                      >
                        {/* زخرفة دائرية خفيفة */}
                        <span className={`absolute -top-6 -end-6 w-16 h-16 rounded-full bg-gradient-to-br ${theme.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />

                        {GradeIcon ? (
                          <span className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 shadow-sm ring-1 ring-white/80 group-hover:scale-110 transition-transform`}>
                            <GradeIcon className={`w-6 h-6 bg-gradient-to-br ${theme.accent} bg-clip-text`} style={{ color: 'transparent' }} />
                          </span>
                        ) : (
                          <span className="relative text-3xl font-display font-bold text-slate-700 group-hover:scale-110 transition-transform">
                            {g}
                          </span>
                        )}

                        <span className="relative text-xs font-semibold text-slate-500 flex items-center gap-1">
                          {t('grade')} {g} <Arrow className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                        </span>
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