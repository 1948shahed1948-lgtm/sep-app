import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function JoinCta() {
  const { lang } = useLang();
  const points = lang === 'ar'
    ? ['محتوى موثوق', 'تعلّم تكيّفي', 'تحليل دقيق', 'مجاني للبدء']
    : ['Trusted content', 'Adaptive learning', 'Precise analysis', 'Free to start'];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0e14] via-[#11132a] to-[#1a1a3e] p-8 sm:p-12 text-center">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.15),transparent_60%)]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative space-y-5">
        <p className="text-amber-300 text-sm font-medium">{lang === 'ar' ? 'مستقبلك يبدأ اليوم' : 'Your future starts today'}</p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
          {lang === 'ar' ? 'انضم إلى آلاف الطلاب السعوديين' : 'Join thousands of Saudi students'}
        </h2>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {points.map((p) => (
            <span key={p} className="inline-flex items-center gap-1.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              {p}
            </span>
          ))}
        </div>
        <Link to="/aptitude" className="inline-block px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm transition-colors">
          {lang === 'ar' ? 'ابدأ مجاناً' : 'Start for free'}
        </Link>
      </motion.div>
    </section>
  );
}