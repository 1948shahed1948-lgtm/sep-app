import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

export default function RecommendedFocusCard({ levels }) {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const weakLessons = (levels || [])
    .filter((l) => (l.level === 'weak' || l.level === 'developing') && l.curriculum && l.grade && l.subjectId)
    .slice(0, 5);

  if (weakLessons.length === 0) return null;

  return (
    <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-6 space-y-4">
      <h3 className="font-heading font-bold text-indigo-900 flex items-center gap-2">
        <Lightbulb className="w-5 h-5" />
        {lang === 'ar' ? 'اقتراحات للتركيز عليها' : 'Recommended Focus Areas'}
      </h3>
      <p className="text-sm text-indigo-700">
        {lang === 'ar'
          ? 'بناءً على نقاط ضعفك المكتشفة، ننصحك بمراجعة هذه الدروس:'
          : 'Based on your detected weak points, we recommend reviewing these lessons:'}
      </p>
      <div className="space-y-3">
        {weakLessons.map((l) => {
          const title = lang === 'ar' ? l.title : (l.titleEn || l.title);
          const subjectName = lang === 'ar' ? l.subjectName : (l.subjectNameEn || l.subjectName);
          return (
            <Link
              key={l.lessonId}
              to={`/curriculum/${l.curriculum}/${l.grade}/subject/${l.subjectId}/lesson/${l.lessonId}`}
              className="flex items-center justify-between bg-white rounded-xl p-4 border border-indigo-100 hover:border-indigo-300 transition-colors"
            >
              <div className="min-w-0">
                <p className="font-medium text-sm text-slate-800 truncate">{title}</p>
                {subjectName && <p className="text-xs text-slate-400 mt-0.5">{subjectName} · {l.mastery}%</p>}
              </div>
              <Arrow className="w-4 h-4 text-indigo-500 flex-shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}