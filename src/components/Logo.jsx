import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/fc4740d8b_image.png";

export default function Logo({ size = 72, showText = true, className = "", variant = "dark" }) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="rounded-full p-[4px] bg-gradient-to-br from-amber-400 via-emerald-500 to-[#3E57A4] shadow-xl ring-2 ring-white/70"
        style={{ width: size, height: size }}
      >
        <img
          src={LOGO_URL}
          alt="بنوك الأسئلة والاختبارات المعيارية السعودية"
          className="rounded-full object-cover w-full h-full bg-white ring-2 ring-white"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold text-xl leading-tight ${isLight ? 'text-white drop-shadow' : 'text-slate-900'}`}>
            بوابة الأسئلة بلس
          </span>
          <span className={`text-xs tracking-wide ${isLight ? 'text-white/70' : 'text-slate-500'}`}>
            بنوك الأسئلة والاختبارات المعيارية السعودية
          </span>
        </div>
      )}
    </div>
  );
}