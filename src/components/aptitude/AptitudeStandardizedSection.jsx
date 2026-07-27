import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Stethoscope, Ruler, Brain, ArrowLeft, ArrowRight } from 'lucide-react';

const tests = [
  { key: 'diagnostic', icon: Stethoscope, badgeAr: 'تشخيصي', badgeEn: 'Diagnostic', titleAr: 'اختبار تشخيصي', titleEn: 'Diagnostic Test', descAr: 'يحدد مستواك الحالي في كل مهارة ليبني خطة تعلم مخصصة.', descEn: 'Determines your current level in each skill to build a personalized learning plan.', color: 'emerald', path: '/standardized/diagnostic/grades' },
  { key: 'criterion', icon: Ruler, badgeAr: 'معياري', badgeEn: 'Criterion', titleAr: 'اختبار معياري', titleEn: 'Criterion Test', descAr: 'يقيس إتقانك وفق معايير ثابتة بعد كل وحدة دراسية.', descEn: 'Measures your mastery against fixed standards after each unit.', color: 'cyan', path: '/standardized/criterion/grades' },
  { key: 'adaptive', icon: Brain, badgeAr: 'تكيّفي', badgeEn: 'Adaptive', titleAr: 'اختبار تكيّفي', titleEn: 'Adaptive Test', descAr: 'صعوبة الأسئلة تتكيف مع أدائك لحظياً لتعزيز التقدم.', descEn: 'Question difficulty adapts to your performance in real time to boost progress.', color: 'pink', path: '/standardized/adaptive/grades' },
];

const colorMap = {
  emerald: { badge: 'bg-emerald-400/15 text-emerald-300', icon: 'bg-emerald-400/10 text-emerald-300', ring: 'hover:border-emerald-400/40' },
  cyan: { badge: 'bg-cyan-400/15 text-cyan-300', icon: 'bg-cyan-400/10 text-cyan-300', ring: 'hover:border-cyan-400/40' },
  pink: { badge: 'bg-pink-400/15 text-pink-300', icon: 'bg-pink-400/10 text-pink-300', ring: 'hover:border-pink-400/40' },
};

export default function AptitudeStandardizedSection() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'الاختبارات المعيارية' : 'Standardized Tests'}
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl mx-auto">
          {lang === 'ar' ? 'نظام اختبارات متدرج يبدأ بالتشخيص ويصل إلى التكيّف الذكي لرفع مستوى كل مهارة إلى 75% فأكثر.' : 'A graded testing system from diagnosis to smart adaptation, raising every skill to 75% and above.'}
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {tests.map((t, i) => {
          const c = colorMap[t.color];
          return (
            <motion.div key={t.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={t.path} className={`group block rounded-2xl bg-white border border-slate-100 ${c.ring} p-6 hover:shadow-lg transition-all h-full`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center`}>
                    <t.icon className="w-6 h-6" />
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${c.badge}`}>{lang === 'ar' ? t.badgeAr : t.badgeEn}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{lang === 'ar' ? t.titleAr : t.titleEn}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{lang === 'ar' ? t.descAr : t.descEn}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {lang === 'ar' ? 'ابدأ الآن' : 'Start now'}
                  <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}