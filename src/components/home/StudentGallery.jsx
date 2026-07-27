import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const photos = [
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/6fda385c0_generated_image.png", titleAr: "طلاب في الفصل", titleEn: "Students in Class" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/b11364824_generated_image.png", titleAr: "تعلم جماعي", titleEn: "Group Learning" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/6c33fec44_generated_image.png", titleAr: "طالبة مجتهدة", titleEn: "Diligent Student" },
  { url: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/03d99c8ff_generated_image.png", titleAr: "بيئة تعليمية", titleEn: "Learning Environment" },
];

export default function StudentGallery() {
  const { lang } = useLang();

  return (
    <section className="space-y-6">
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
          <Users className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">
            {lang === 'ar' ? 'طلابنا السعوديون - مستقبل الوطن' : 'Our Saudi Students - The Nation\'s Future'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden h-48 sm:h-56 group"
          >
            <img
              src={photo.url}
              alt={lang === 'ar' ? photo.titleAr : photo.titleEn}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute bottom-3 start-3 text-white">
              <p className="font-heading font-bold text-sm">
                {lang === 'ar' ? photo.titleAr : photo.titleEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}