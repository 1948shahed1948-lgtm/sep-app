import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';

const LANDSCAPE_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/3ae77ba82_generated_image.png";
const STUDENT_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/6907541b4_generated_image.png";

export default function SaudiShowcase() {
  const { lang } = useLang();

  return (
    <section className="grid sm:grid-cols-2 gap-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden h-72 group"
      >
        <img
          src={LANDSCAPE_URL}
          alt={lang === 'ar' ? 'منظر طبيعي من السعودية' : 'Saudi Arabia landscape'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-4 start-4 text-white">
          <p className="font-heading font-bold text-lg">
            {lang === 'ar' ? 'جمال المملكة العربية السعودية' : 'Beauty of Saudi Arabia'}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative rounded-2xl overflow-hidden h-72 group"
      >
        <img
          src={STUDENT_URL}
          alt={lang === 'ar' ? 'طالب سعودي' : 'Saudi student'}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-4 start-4 text-white">
          <p className="font-heading font-bold text-lg">
            {lang === 'ar' ? 'طالبنا... مستقبل الوطن' : 'Our Student... The Nation\'s Future'}
          </p>
        </div>
      </motion.div>
    </section>
  );
}