import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { FileCheck, ArrowLeft, ArrowRight } from 'lucide-react';

const SHOWCASE_IMAGE_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/c09398d22_mmmmm.png";

export default function ShowcaseBanner() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const ar = lang === 'ar';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* صورة المعرض الترويجية */}
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        <img
          src={SHOWCASE_IMAGE_URL}
          alt={ar ? 'معرض المنصة التعليمية' : 'Platform Showcase'}
          loading="lazy"
          className="w-full object-cover"
        />
      </div>

      {/* رابط المعرض */}
      <Link
        to="/platform-showcase"
        className="group block rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-5 text-white shadow-sm hover:shadow-lg transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
            <FileCheck className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1 text-start">
            <h3 className="font-heading font-bold text-lg">
              {ar ? 'معرض المنصة' : 'Platform Showcase'}
            </h3>
            <p className="text-sm text-white/80 mt-0.5">
              {ar ? 'توثيق احترافي شامل لكل محتويات ومميزات المنصة' : 'Professional documentation of all platform content & features'}
            </p>
          </div>
          <Arrow className={`w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
        </div>
      </Link>
    </motion.section>
  );
}