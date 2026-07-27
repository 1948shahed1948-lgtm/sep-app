import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n.jsx';
import PageHeader from '@/components/layout/PageHeader';
import { features } from '@/lib/featuresData';

export default function FeatureDetail() {
  const { key } = useParams();
  const { lang } = useLang();
  const feature = features.find((f) => f.key === key);

  if (!feature) return null;

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <PageHeader
        title={lang === 'ar' ? feature.titleAr : feature.titleEn}
        subtitle={lang === 'ar' ? feature.descAr : feature.descEn}
        backTo="/"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm"
      >
        <img
          src={feature.image}
          alt={lang === 'ar' ? feature.titleAr : feature.titleEn}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6 sm:p-8 space-y-4">
          <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center`}>
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? feature.titleAr : feature.titleEn}
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            {lang === 'ar' ? feature.summaryAr : feature.summaryEn}
          </p>
        </div>
      </motion.div>
    </div>
  );
}