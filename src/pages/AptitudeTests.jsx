import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Calculator, ArrowLeft, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import DesertWaveBackground from '@/components/aptitude/DesertWaveBackground';
import { aptitudeTopics } from '@/lib/aptitudeQuestions';

const sections = [
  {
    key: 'verbal',
    icon: BookOpen,
    titleAr: 'القسم اللفظي',
    titleEn: 'Verbal Section',
    descAr: 'استيعاب المقروء، إكمال الجمل، التناظر اللفظي، الخطأ السياقي',
    descEn: 'Reading comprehension, sentence completion, verbal analogy, contextual error',
    color: 'from-violet-500 to-purple-600',
    topics: aptitudeTopics.verbal
  },
  {
    key: 'quantitative',
    icon: Calculator,
    titleAr: 'القسم الكمي',
    titleEn: 'Quantitative Section',
    descAr: 'الحساب، الجبر، الهندسة، الإحصاء والاحتمالات',
    descEn: 'Arithmetic, algebra, geometry, statistics & probability',
    color: 'from-blue-500 to-cyan-600',
    topics: aptitudeTopics.quantitative
  }
];

export default function AptitudeTests() {
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-8">
      <PageHeader
        title={t('aptitudeTests')}
        subtitle={t('aptitudeDescription')}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: t('aptitudeTests') }]}
      />

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-50" />
        <DesertWaveBackground />
        <div className="relative flex items-center gap-4">
          <Brain className="w-12 h-12 text-purple-300 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-heading font-bold mb-1">
              {lang === 'ar' ? 'اختبار القدرات العامة' : 'General Aptitude Test (GAT)'}
            </h2>
            <p className="text-purple-200 text-sm">
              {lang === 'ar'
                ? 'تدرّب على جميع أقسام اختبار القدرات العامة مع تحليل شامل لنقاط القوة والضعف'
                : 'Practice all sections of the GAT with comprehensive strengths and weaknesses analysis'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="space-y-6">
        {sections.map((section, si) => (
          <motion.div
            key={section.key}
            id={section.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.15 }}
            className="rounded-2xl bg-white border border-slate-100 overflow-hidden scroll-mt-24"
          >
            <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
              <div className="flex items-center gap-3">
                <section.icon className="w-6 h-6" />
                <div>
                  <h3 className="text-lg font-heading font-bold">
                    {lang === 'ar' ? section.titleAr : section.titleEn}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    {lang === 'ar' ? section.descAr : section.descEn}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {section.topics.map((topic, ti) => (
                <Link
                  key={ti}
                  to={`/aptitude/${section.key}/${ti}`}
                  className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                      {ti + 1}
                    </div>
                    <span className="font-medium text-sm text-slate-700">
                      {lang === 'ar' ? topic.titleAr : topic.titleEn}
                    </span>
                  </div>
                  <Arrow className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}