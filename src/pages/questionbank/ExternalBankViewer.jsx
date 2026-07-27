import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import { getGradeName } from '@/lib/gradeData';
import { Loader2, AlertTriangle, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const SEMESTER_LABELS = {
  first: { ar: 'الفصل الأول', en: 'Semester 1' },
  second: { ar: 'الفصل الثاني', en: 'Semester 2' },
};

export default function ExternalBankViewer() {
  const { grade, semester, subject } = useParams();
  const { lang } = useLang();
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await base44.functions.invoke('getExternalBankUrl', { grade, semester, subject });
        if (!active) return;
        if (res?.data?.url) {
          setUrl(res.data.url);
        } else {
          setError(true);
        }
      } catch (e) {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [grade, semester, subject]);

  const gradeName = getGradeName(grade, lang);
  const semesterLabel = SEMESTER_LABELS[semester]?.[lang] || semester;
  const title = lang === 'ar' ? 'بنك الأسئلة' : 'Question Bank';

  return (
    <div className="space-y-4">
      <PageHeader
        title={`${title} · ${gradeName} · ${semesterLabel}`}
        backTo={`/question-bank/${grade}/${semester}`}
      />

      {loading && (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <AlertTriangle className="w-10 h-10 text-amber-500 mb-3" />
          <p className="font-heading font-bold text-slate-600">
            {lang === 'ar' ? 'تعذّر تحميل بنك الأسئلة' : 'Could not load the question bank'}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? 'حاول مرة أخرى لاحقاً' : 'Please try again later'}
          </p>
        </div>
      )}

      {!loading && url && (
        <>
          <div className="flex items-center justify-between gap-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2.5">
            <p className="text-xs text-amber-700 font-medium">
              {lang === 'ar' ? 'إذا لم يظهر البنك بالأسفل، اضغط الزر لفتحه في نافذة منفصلة' : 'If the bank doesn\'t appear below, open it in a separate window'}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold px-3 py-2 whitespace-nowrap transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'فتح في نافذة' : 'Open'}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <iframe
              src={url}
              title={title}
              className="w-full"
              style={{ height: 'calc(100vh - 260px)', minHeight: '500px' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </>
      )}
    </div>
  );
}