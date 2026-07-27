import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { AnimatePresence, motion } from 'framer-motion';

const scenes = [
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/b2e146097_generated_image.png", titleAr: "العُلا - كنوز الحضارات القديمة", titleEn: "AlUla - Treasures of Ancient Civilizations" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/dd5cf1944_generated_image.png", titleAr: "نيوم - مدينة المستقبل", titleEn: "NEOM - City of the Future" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/e9c5a064a_generated_image.png", titleAr: "الرياض - قلب المملكة النابض", titleEn: "Riyadh - The Beating Heart of the Kingdom" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/c0f17311f_generated_image.png", titleAr: "صحراء السعودية - جمال الطبيعة الصامتة", titleEn: "Saudi Desert - Silent Natural Beauty" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/2d38d1e55_generated_image.png", titleAr: "الأفق السعودي - حيث يلتقي التراث بالحداثة", titleEn: "Saudi Horizon - Where Heritage Meets Modernity" },
];

export default function SaudiSlideshow() {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % scenes.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const scene = scenes[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 5.5, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={scene.url}
            alt={lang === 'ar' ? scene.titleAr : scene.titleEn}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-[#12204B]/90 via-[#263D84]/75 to-[#3E57A4]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12204B]/85 via-[#12204B]/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12204B]/65 via-transparent to-transparent lg:from-[#12204B]/75" />

      <div className="absolute top-4 start-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
        </span>
        <span className="text-white text-xs font-bold">{lang === 'ar' ? 'مباشر' : 'LIVE'}</span>
      </div>

      <div className="absolute bottom-4 start-4 z-10">
        <p className="text-white/80 text-xs font-medium">
          {lang === 'ar' ? scene.titleAr : scene.titleEn}
        </p>
      </div>
    </div>
  );
}