import React from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { LEVEL_STYLES } from '@/lib/masteryLevel';
import { BookOpen } from 'lucide-react';

export default function LessonMasteryLevels({ levels }) {
  const { lang } = useLang();

  if (!levels || levels.length === 0) {
    return (
      <div className="rounded-2xl bg-white border border-slate-100 p-6 text-center">
        <p className="text-slate-400 text-sm">
          {lang === 'ar' ? 'لا يوجد تقييم للدروس بعد. ابدأ التدريب لرؤية مستواك في كل درس.' : 'No lesson assessments yet. Start practicing to see your level per lesson.'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-6 space-y-4">
      <h3 className="font-heading font-bold text-slate-900 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-blue-500" />
        {lang === 'ar' ? 'مستواك في كل درس' : 'Your Level Per Lesson'}
      </h3>
      <div className="space-y-3">
        {levels.map((l) => {
          const style = LEVEL_STYLES[l.level];
          const title = lang === 'ar' ? l.title : (l.titleEn || l.title);
          const subjectName = lang === 'ar' ? l.subjectName : (l.subjectNameEn || l.subjectName);
          return (
            <div key={l.lessonId} className={`flex items-center justify-between rounded-xl p-3 border ${style.border} ${style.bg}`}>
              <div className="min-w-0">
                <p className="font-medium text-sm text-slate-800 truncate">{title}</p>
                {subjectName && <p className="text-xs text-slate-400 mt-0.5">{subjectName}</p>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${style.text} ${style.bg} border ${style.border}`}>
                  {lang === 'ar' ? LEVEL_LABELS_AR[l.level] : LEVEL_LABELS_EN[l.level]}
                </span>
                <span className="text-sm font-bold text-slate-700 w-12 text-center">{l.mastery}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const LEVEL_LABELS_AR = { mastered: 'متقن', proficient: 'جيد', developing: 'متوسط', weak: 'يحتاج تركيز' };
const LEVEL_LABELS_EN = { mastered: 'Mastered', proficient: 'Proficient', developing: 'Developing', weak: 'Needs Focus' };