import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { standardizedTestTypesList } from '@/lib/standardizedTestTypes';

// التشخيصي والمعياري والتكيفي لها مسارات/مداخل مستقلة على الصفحة الرئيسية — تُستثنى من قائمة المقننة
const standardizedList = standardizedTestTypesList.filter((t) => !['diagnostic', 'criterion', 'adaptive'].includes(t.key));

export default function StandardizedAbout() {
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'الاختبارات المقننة' : 'Standardized Tests'}
        subtitle={lang === 'ar' ? 'نظام اختبارات متجدد يبدأ بالتشخيص ويصل إلى التكيّف الذكي لرفع مستوى كل مهارة إلى 75% فأكثر' : 'A dynamic testing system that starts with diagnosis and reaches smart adaptation to raise every skill to 75% or more'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'الاختبارات المقننة' : 'Standardized Tests' }]}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {standardizedList.map((type, i) => (
          <motion.div
            key={type.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center gap-4"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>
              <type.icon className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-heading font-bold text-slate-900">
                {lang === 'ar' ? type.titleAr : type.titleEn}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {lang === 'ar' ? type.shortDescAr : type.shortDescEn}
              </p>
            </div>
            <Link
              to={`/standardized/${type.key}/grades`}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r ${type.color} text-white font-semibold text-sm hover:opacity-90 transition-all`}
            >
              {lang === 'ar' ? 'ابدأ' : 'Start'}
              <Arrow className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}