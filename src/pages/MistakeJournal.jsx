import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { BookMarked, Calendar, Trash2, CheckCircle2, AlertTriangle, RefreshCw, NotebookPen, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { getNextReviewDate } from '@/lib/spacedRepetition';

export default function MistakeJournal() {
  const { t, lang, isRTL } = useLang();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all | due | resolved
  const [openId, setOpenId] = useState(null);
  const [reasonDraft, setReasonDraft] = useState({});

  const load = async () => {
    setLoading(true);
    try {
      const user = await base44.auth.me();
      if (!user) { setLoading(false); return; }
      const data = await base44.entities.MistakeEntry.filter({ user_id: user.id });
      data.sort((a, b) => (b.created_date || '').localeCompare(a.created_date || ''));
      setEntries(data);
    } catch (e) { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const today = new Date().toISOString().slice(0, 10);

  const filtered = entries.filter((e) => {
    if (filter === 'due') return !e.is_resolved && (!e.next_review_date || e.next_review_date <= today);
    if (filter === 'resolved') return e.is_resolved;
    return true;
  });

  const dueCount = entries.filter((e) => !e.is_resolved && (!e.next_review_date || e.next_review_date <= today)).length;

  const handleMarkResolved = async (entry) => {
    const newCount = (entry.review_count || 0) + 1;
    await base44.entities.MistakeEntry.update(entry.id, {
      is_resolved: true,
      review_count: newCount,
      next_review_date: getNextReviewDate(newCount)
    });
    load();
  };

  const handleUnresolve = async (entry) => {
    await base44.entities.MistakeEntry.update(entry.id, { is_resolved: false });
    load();
  };

  const handleSaveReason = async (entry) => {
    const r = (reasonDraft[entry.id] ?? entry.reason ?? '').trim();
    if (!r) return;
    await base44.entities.MistakeEntry.update(entry.id, { reason: r });
    load();
  };

  const handleDelete = async (entry) => {
    await base44.entities.MistakeEntry.delete(entry.id);
    load();
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'دفتر الأخطاء الشخصي' : 'Personal Mistake Journal'}
        subtitle={lang === 'ar' ? 'كل سؤال أخطأت فيه يُحفظ هنا مع سبب الخطأ ومراجعة متباعدة لتثبيت المعلومة' : 'Every wrong answer is saved here with the reason and spaced review'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'دفتر الأخطاء' : 'Mistake Journal' }]}
      />

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white border border-slate-100 p-5">
          <BookMarked className="w-6 h-6 text-[#263D84] mb-2" />
          <div className="text-2xl font-display font-bold text-slate-900">{entries.length}</div>
          <div className="text-sm text-slate-500">{lang === 'ar' ? 'إجمالي الأخطاء' : 'Total mistakes'}</div>
        </div>
        <div className="rounded-2xl bg-white border border-amber-100 p-5">
          <AlertTriangle className="w-6 h-6 text-amber-500 mb-2" />
          <div className="text-2xl font-display font-bold text-amber-600">{dueCount}</div>
          <div className="text-sm text-slate-500">{lang === 'ar' ? 'للمراجعة اليوم' : 'Due today'}</div>
        </div>
        <div className="rounded-2xl bg-white border border-emerald-100 p-5">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-2" />
          <div className="text-2xl font-display font-bold text-emerald-600">{entries.filter((e) => e.is_resolved).length}</div>
          <div className="text-sm text-slate-500">{lang === 'ar' ? 'تم التثبيت' : 'Mastered'}</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Button asChild className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white">
          <a href="/review"><RefreshCw className="w-4 h-4" />{lang === 'ar' ? `ابدأ جلسة المراجعة اليومية (${dueCount})` : `Start daily review (${dueCount})`}</a>
        </Button>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-slate-400" />
        {[
          { key: 'all', labelAr: 'الكل', labelEn: 'All' },
          { key: 'due', labelAr: `للمراجعة (${dueCount})`, labelEn: `Due (${dueCount})` },
          { key: 'resolved', labelAr: 'تم التثبيت', labelEn: 'Mastered' }
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${filter === f.key ? 'bg-[#263D84] text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'}`}
          >
            {lang === 'ar' ? f.labelAr : f.labelEn}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-[#263D84] rounded-full animate-spin"></div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 space-y-3">
          <NotebookPen className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-500 font-medium">
            {lang === 'ar' ? 'لا توجد أخطاء هنا بعد. تدرّب في بنك الأسئلة وستُحفظ أخطاؤك تلقائياً!' : 'No mistakes yet. Practice in the question bank and your mistakes will be saved automatically!'}
          </p>
          <Button onClick={() => window.location.href = '/question-bank'} variant="outline" className="gap-2">
            {lang === 'ar' ? 'ابدأ التدريب' : 'Start Practicing'}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((entry, i) => {
            const isOpen = openId === entry.id;
            const isDue = !entry.is_resolved && (!entry.next_review_date || entry.next_review_date <= today);
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : entry.id)}
                  className="w-full text-start p-5 flex items-start gap-3"
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${entry.is_resolved ? 'bg-emerald-100 text-emerald-600' : isDue ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                    {entry.is_resolved ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {entry.subject_name && <span className="text-xs font-bold bg-slate-100 text-slate-600 rounded-full px-2 py-0.5">{entry.subject_name}</span>}
                      {entry.grade && <span className="text-xs text-slate-400">{entry.grade}</span>}
                      {isDue && <span className="text-xs font-bold text-amber-600">{lang === 'ar' ? '⚠ للمراجعة الآن' : '⚠ Due now'}</span>}
                    </div>
                    <p className="text-sm text-slate-800 font-medium line-clamp-2">{lang === 'ar' ? entry.question_ar : entry.question_en}</p>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4 space-y-4 bg-slate-50/50">
                    {(() => {
                      const options = lang === 'ar' ? (entry.options_ar || []) : (entry.options_en || []);
                      const correctIdx = String(entry.correct_answer);
                      const userIdx = String(entry.user_answer);
                      return options.length > 0 ? (
                        <div className="space-y-2">
                          {options.map((opt, oi) => {
                            const isCorrect = String(oi) === correctIdx;
                            const isUser = String(oi) === userIdx;
                            return (
                              <div
                                key={oi}
                                className={`flex items-center gap-2 p-2.5 rounded-lg text-sm ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : isUser ? 'bg-red-50 border border-red-200' : 'bg-white border border-slate-100'}`}
                              >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isCorrect ? 'bg-emerald-500 text-white' : isUser ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                  {String.fromCharCode(65 + oi)}
                                </span>
                                <span className="text-slate-700">{opt}</span>
                                {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 ms-auto" />}
                                {isUser && !isCorrect && <AlertTriangle className="w-4 h-4 text-red-500 ms-auto" />}
                              </div>
                            );
                          })}
                        </div>
                      ) : null;
                    })()}

                    {(lang === 'ar' ? entry.explanation_ar : entry.explanation_en) && (
                      <div className="rounded-lg bg-amber-50 border border-amber-100 p-3 text-sm text-amber-800">
                        <span className="font-bold">{lang === 'ar' ? 'الشرح: ' : 'Explanation: '}</span>
                        {lang === 'ar' ? entry.explanation_ar : entry.explanation_en}
                      </div>
                    )}

                    {entry.reason && (
                      <div className="rounded-lg bg-blue-50 border border-blue-100 p-3 text-sm text-blue-800">
                        <span className="font-bold">{lang === 'ar' ? 'سبب خطئي: ' : 'My mistake reason: '}</span>
                        {entry.reason}
                      </div>
                    )}

                    {entry.confidence >= 3 && (
                      <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                        <AlertTriangle className="w-4 h-4" />
                        {lang === 'ar' ? 'واثق لكن مخطئ — راجع هذا المفهوم جيداً' : 'Confident but wrong — review this concept carefully'}
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1.5">
                        {lang === 'ar' ? 'لماذا أخطأت؟ (اختياري)' : 'Why did you get it wrong? (optional)'}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          defaultValue={entry.reason || ''}
                          onChange={(e) => setReasonDraft((p) => ({ ...p, [entry.id]: e.target.value }))}
                          placeholder={lang === 'ar' ? 'مثال: خلطت بين قانونين' : 'e.g. mixed up two formulas'}
                          className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#263D84]"
                        />
                        <Button size="sm" variant="outline" onClick={() => handleSaveReason(entry)}>
                          {lang === 'ar' ? 'حفظ' : 'Save'}
                        </Button>
                      </div>
                    </div>

                    {entry.next_review_date && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {lang === 'ar' ? 'المراجعة القادمة: ' : 'Next review: '}
                        <span className="font-bold">{entry.next_review_date}</span>
                        {entry.review_count > 0 && <span>· {lang === 'ar' ? `تمت المراجعة ${entry.review_count} مرة` : `reviewed ${entry.review_count} times`}</span>}
                      </div>
                    )}

                    <div className="flex gap-2 pt-1">
                      {!entry.is_resolved ? (
                        <Button size="sm" onClick={() => handleMarkResolved(entry)} className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                          <CheckCircle2 className="w-4 h-4" />
                          {lang === 'ar' ? 'تثبيت وجدولة مراجعة' : 'Master & schedule review'}
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" onClick={() => handleUnresolve(entry)} className="gap-2">
                          <RefreshCw className="w-4 h-4" />
                          {lang === 'ar' ? 'إعادة للمراجعة' : 'Re-open'}
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" onClick={() => handleDelete(entry)} className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                        {lang === 'ar' ? 'حذف' : 'Delete'}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}