import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const links = [
  {
    labelAr: "المناهج الدراسية",
    labelEn: "Curricula",
    path: "/curriculum/national",
    img: "https://images.unsplash.com/photo-1503676260728-1b40b172f1f7?auto=format&fit=crop&w=400&q=60",
  },
  {
    labelAr: "اختبارات القدرات",
    labelEn: "Aptitude Tests",
    path: "/aptitude-landing",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=60",
  },
  {
    labelAr: "اختبارات مقننة",
    labelEn: "Standardized Tests",
    path: "/standardized/about",
    img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=60",
  },
  {
    labelAr: "متابعة تقدمي",
    labelEn: "My Progress",
    path: "/progress",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
  },
];

export default function HeroQuickLinks() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4"
    >
      {links.map((link, i) => {
        const isExternal = link.path.startsWith('http');
        const label = lang === 'ar' ? link.labelAr : link.labelEn;
        const className =
          "group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-28 sm:h-32 flex items-end";
        const inner = (
          <>
            <img
              src={link.img}
              alt={label}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
            <div className="relative w-full px-3 pb-3 pt-6 flex items-center justify-between gap-2">
              <span className="font-heading font-bold text-slate-800 text-sm sm:text-base leading-tight">
                {label}
              </span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#263D84] text-white flex items-center justify-center group-hover:bg-[#3E57A4] transition-colors">
                <Arrow className="w-3.5 h-3.5" />
              </span>
            </div>
          </>
        );
        return (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            {isExternal ? (
              <a href={link.path} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link to={link.path} className={className}>
                {inner}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}