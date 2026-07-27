import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { Search, Award, Stethoscope, Ruler, Brain } from 'lucide-react';

export default function QuickAccessBar() {
  const { lang } = useLang();
  const [query, setQuery] = useState('');

  const links = [
    { labelAr: "قدرات لفظي", labelEn: "Verbal Aptitude", path: "/feature/verbal-aptitude", keywords: ["قدرات لفظي", "لفظي", "verbal"], color: "from-purple-500 to-violet-600", icon: Brain },
    { labelAr: "قدرات كمي", labelEn: "Quantitative Aptitude", path: "/feature/quantitative-aptitude", keywords: ["قدرات كمي", "كمي", "quantitative"], color: "from-cyan-500 to-blue-600", icon: Brain },
    { labelAr: "الاختبارات التشخيصية", labelEn: "Diagnostic Tests", path: "/feature/diagnostic-tests", keywords: ["تشخيصي", "diagnostic"], color: "from-rose-500 to-orange-500", icon: Stethoscope },
    { labelAr: "الاختبارات المعيارية", labelEn: "Criterion Tests", path: "/feature/criterion-tests", keywords: ["معياري", "criterion"], color: "from-blue-500 to-indigo-600", icon: Ruler },
    { labelAr: "الاختبارات المقننة", labelEn: "Standardized Tests", path: "/feature/standardized-tests", keywords: ["مقنن", "standardized"], color: "from-fuchsia-500 to-orange-500", icon: Award },
  ];

  const filtered = query.trim()
    ? links.filter(l => l.keywords.some(k => k.toLowerCase().includes(query.trim().toLowerCase()) || query.trim().toLowerCase().includes(k.toLowerCase())))
    : links;

  return (
    <div className="bg-[#1A2D5E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <div className="relative flex-shrink-0 flex items-center">
          <Search className="w-3.5 h-3.5 text-white/40 absolute top-1/2 -translate-y-1/2 start-3 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'ar' ? 'بحث سريع' : 'Quick search'}
            className="w-28 sm:w-40 ps-9 pe-3 py-1.5 rounded-full bg-white/10 text-white text-xs placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-colors"
          />
        </div>

        {filtered.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${link.color} hover:opacity-90 hover:shadow-md transition-all whitespace-nowrap`}
          >
            <link.icon className="w-3.5 h-3.5" />
            {lang === 'ar' ? link.labelAr : link.labelEn}
          </a>
        ))}

        {filtered.length === 0 && (
          <span className="text-xs text-white/40 px-2">{lang === 'ar' ? 'لا نتائج' : 'No results'}</span>
        )}
      </div>
    </div>
  );
}