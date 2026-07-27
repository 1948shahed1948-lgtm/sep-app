import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, GraduationCap, BarChart3, Users } from 'lucide-react';

const stats = [
  { num: '12+', labelAr: 'الصفوف الدراسية', labelEn: 'Grades', icon: GraduationCap },
  { num: '11+', labelAr: 'المواد', labelEn: 'Subjects', icon: BookOpen },
  { num: '50+', labelAr: 'الدروس', labelEn: 'Lessons', icon: BarChart3 },
  { num: '10K+', labelAr: 'طالب وطالبة', labelEn: 'Students', icon: Users },
];

export default function AptitudeLandingHero() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0e14] via-[#11132a] to-[#1a1a3e] p-6 sm:p-12 lg:p-16">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.15),transparent_50%)]" />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="space-y-6 text-center lg:text-start">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'بنوك الأسئلة والاختبارات المعيارية السعودية' : 'Saudi Education Platform'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            {lang === 'ar' ? 'تعلّم بذكاء.. وارتقِ بثقة نحو مستقبلك' : 'Learn smartly.. and rise with confidence toward your future'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
            {lang === 'ar'
              ? 'منصة تعليمية سعودية متكاملة تواكب نظامي التعليم العام والدولي، مع تحضير احترافي لاختبار القدرات وتحليل دقيق لمهاراتك.'
              : 'An integrated Saudi educational platform following general and international education systems, with professional aptitude test preparation and precise skill analysis.'}
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link to="/aptitude" className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm transition-colors">
              {lang === 'ar' ? 'ابدأ رحلتك التعليمية' : 'Start your journey'}
            </Link>
            <Link to="/standardized/about" className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
              {lang === 'ar' ? 'استكشف المنصة' : 'Explore platform'}
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-amber-400 flex flex-col items-center justify-center text-slate-900 shadow-2xl"
          >
            <span className="text-3xl sm:text-4xl font-display font-black">SEB</span>
            <BookOpen className="w-6 h-6 mt-1" />
          </motion.div>
        </div>
      </div>

      <div className="relative mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-amber-300" />
            </span>
            <div>
              <p className="text-lg font-bold text-white">{s.num}</p>
              <p className="text-[11px] text-slate-400">{lang === 'ar' ? s.labelAr : s.labelEn}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}