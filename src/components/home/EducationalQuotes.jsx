import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Compass, ChevronDown } from 'lucide-react';

const quotes = [
  {
    icon: Eye,
    text_ar: "رؤيتنا",
    text_en: "Our Vision",
    summary_ar: "أن نكون المنصة التعليمية الرائدة في المملكة العربية السعودية، نمكّن كل طالب من تحقيق أقصى إمكاناته الأكاديمية عبر تعليم رقمي مبتكر وشامل يواكب رؤية المملكة 2030.",
    summary_en: "To be the leading educational platform in Saudi Arabia, empowering every student to reach their full academic potential through innovative, comprehensive digital education aligned with Saudi Vision 2030."
  },
  {
    icon: Compass,
    text_ar: "رسالتنا",
    text_en: "Our Mission",
    summary_ar: "نلتزم بتوفير تجربة تعليمية متكاملة تجمع بين المناهج الوطنية والدولية، مدعومة بأدوات تفاعلية ذكية لرصد التقدم وتعزيز إتقان المهارات لدى كل طالب.",
    summary_en: "We are committed to providing a comprehensive learning experience combining national and international curricula, supported by smart interactive tools to track progress and strengthen skill mastery for every student."
  },
];

export default function EducationalQuotes() {
  const { lang, isRTL } = useLang();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'الرؤية والرسالة' : 'Vision & Mission'}
        </h2>
        <p className="text-slate-500 text-sm">
          {lang === 'ar' ? 'اضغط لعرض التفاصيل' : 'Click to view details'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {quotes.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-3 p-5 text-start hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <q.icon className="w-4 h-4 text-amber-500" />
                </div>
                <span className="flex-1 font-heading font-bold text-slate-800">
                  {lang === 'ar' ? q.text_ar : q.text_en}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                      {lang === 'ar' ? q.summary_ar : q.summary_en}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}