import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TrackCard({ track, index, lang, isRTL }) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const title = lang === 'ar' ? track.titleAr : track.titleEn;
  const desc = lang === 'ar' ? track.descAr : track.descEn;
  const isExternal = !!track.externalUrl;
  const className =
    "group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-56 sm:h-60 flex flex-col justify-end";

  const inner = (
    <>
      {track.img && (
        <img
          src={track.img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/20" />
      <div className="relative p-4 space-y-1.5">
        <h3 className="font-heading font-bold text-slate-900 text-base leading-tight line-clamp-2">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{desc}</p>
        <div className="flex items-center gap-1.5 text-xs font-medium text-[#263D84] pt-0.5">
          {lang === 'ar' ? 'استكشف' : 'Explore'}
          <Arrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.06 }}
    >
      {isExternal ? (
        <a href={track.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
          {inner}
        </a>
      ) : (
        <Link to={track.path} className={className}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}