import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function FeatureExplanation({ feature, onClose }) {
  const { lang, isRTL } = useLang();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (feature) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [feature, onClose]);

  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white border border-slate-100 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition-colors`}
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="relative h-48 sm:h-60 overflow-hidden rounded-t-3xl">
              <img
                src={feature.image}
                alt={lang === 'ar' ? feature.titleAr : feature.titleEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                {lang === 'ar' ? feature.titleAr : feature.titleEn}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {lang === 'ar' ? feature.descAr : feature.descEn}
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                {lang === 'ar' ? feature.summaryAr : feature.summaryEn}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}