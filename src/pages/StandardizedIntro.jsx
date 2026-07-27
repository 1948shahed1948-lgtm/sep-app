import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { ArrowLeft, ArrowRight, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { standardizedTestTypes, DISCUSSION_CIRCLE_IMAGE } from '@/lib/standardizedTestTypes';

export default function StandardizedIntro() {
  const { type } = useParams();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const testType = standardizedTestTypes[type];

  if (!testType) return null;

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <PageHeader
        title={lang === 'ar' ? testType.titleAr : testType.titleEn}
        subtitle={lang === 'ar' ? testType.shortDescAr : testType.shortDescEn}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? testType.titleAr : testType.titleEn }]}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm"
      >
        <img src={DISCUSSION_CIRCLE_IMAGE} alt={lang === 'ar' ? 'حلقة نقاش طلابية' : 'Student discussion circle'} className="w-full h-64 sm:h-80 object-cover" />
        <div className="p-6 space-y-4">
          <p className="text-slate-600 leading-relaxed">{lang === 'ar' ? testType.descAr : testType.descEn}</p>
          <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4">
            <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 font-medium">
              {lang === 'ar'
                ? 'استفد من الفقرات أعلاه قبل البدء بالإجابة عن الاختبار.'
                : 'Make sure to review the paragraphs above before you start answering the test.'}
            </p>
          </div>
          <Link to={`/standardized/${type}/grades`}>
            <Button className={`w-full gap-2 py-6 text-base font-bold bg-gradient-to-r ${testType.color} hover:opacity-90`}>
              {lang === 'ar' ? 'ابدأ' : 'Start'}
              <Arrow className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}