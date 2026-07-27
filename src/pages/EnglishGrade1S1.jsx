import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Printer, LogOut, Moon, Sun, Award, RotateCcw, Filter, X, ChevronDown } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import GoldenSeal from '@/components/science1/GoldenSeal';
import TeacherBlackboard, { GoldenRuleBox } from '@/components/science1/TeacherBlackboard';
import QuestionRenderer, { FeedbackQuestion } from '@/components/science1/QuestionRenderer';
import { ENGLISH_G1S1_UNITS, BLOOM_LABELS, DIFFICULTY_LABELS, TYPE_LABELS } from '@/lib/englishGrade1S1Bank';
import { ALL_ENGLISH_G1S1_QUESTIONS as QUESTIONS, getQuestionsForLessonAll as getQuestionsForLesson, TOTAL_ALL } from '@/lib/englishGrade1S1Bank_Extra';

const STORAGE_KEY = 'eng_g1_s1_progress_v2';
const THEME_KEY = 'eng_g1_s1_theme';
const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function useProgress() {
  const [data, setData] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
  });
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }, [data]);
  const recordLesson = (lessonId, score, total) => {
    setData((d) => {
      const lessons = d.lessons || {};
      const prev = lessons[lessonId] || { attempts: 0, bestPct: 0, points: 0 };
      const pct = Math.round((score / total) * 100);
      const earned = pct >= 80 ? 10 : pct >= 50 ? 5 : 0;
      lessons[lessonId] = { attempts: prev.attempts + 1, bestPct: Math.max(prev.bestPct, pct), points: (prev.points || 0) + earned, mastered: Math.max(prev.bestPct || 0, pct) >= 80 };
      return { ...d, lessons, totalPoints: (d.totalPoints || 0) + earned };
    });
  };
  const recordMistake = (q) => {
    setData((d) => {
      const mistakes = d.mistakes || [];
      if (!mistakes.find((m) => m.id === q.id)) mistakes.push({ id: q.id, question: q.question, lesson: q.lesson, unit: q.unit });
      return { ...d, mistakes };
    });
  };
  return { data, recordLesson, recordMistake };
}

function StudentFile({ progress, onClose }) {
  const lessons = progress.data.lessons || {};
  const totalPoints = progress.data.totalPoints || 0;
  const mistakes = progress.data.mistakes || [];
  const masteredCount = Object.values(lessons).filter((l) => l.mastered).length;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Award className="w-5 h-5 text-amber-500" /> ملف الطالب</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-center"><div className="text-2xl font-bold text-amber-700">{toAr(totalPoints)}</div><div className="text-xs text-slate-500">نقاط متراكمة</div></div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center"><div className="text-2xl font-bold text-emerald-700">{toAr(masteredCount)}</div><div className="text-xs text-slate-500">دروس متقنة ✓</div></div>
        </div>
        <div className="space-y-2 mb-4">
          <h4 className="font-bold text-slate-700 text-sm">شجرة التقدّم</h4>
          {ENGLISH_G1S1_UNITS.map((u) => (
            <div key={u.id} className="rounded-xl border border-slate-200 p-2">
              <div className="font-medium text-sm text-slate-700 flex items-center gap-2">{u.icon} {u.title_en}</div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {u.lessons.map((l) => {
                  const st = lessons[l.id];
                  return (
                    <div key={l.id} className={`text-xs px-2 py-1.5 rounded-md flex items-center gap-1 ${st?.mastered ? 'bg-emerald-50 text-emerald-700' : st ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-400'}`}>
                      {st?.mastered ? '✓' : st ? '⚠️' : '○'} {l.title_en}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-3">
          <h4 className="font-bold text-rose-700 text-sm mb-1">أسئلة للمراجعة ({toAr(mistakes.length)})</h4>
          {mistakes.length === 0 ? <p className="text-xs text-slate-500">لا أخطاء حتى الآن 👏</p> :
            <ul className="text-xs text-slate-600 space-y-1 max-h-32 overflow-y-auto">{mistakes.map((m) => <li key={m.id} className="truncate">• {m.question}</li>)}</ul>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PrintDialog({ onClose }) {
  const [units, setUnits] = useState(ENGLISH_G1S1_UNITS.map(() => true));
  const [withExplain, setWithExplain] = useState(true);
  const [diff, setDiff] = useState({ easy: true, medium: true, hard: true });

  const doPrint = () => {
    const selected = ENGLISH_G1S1_UNITS.filter((_, i) => units[i]);
    const qs = QUESTIONS.filter((q) => selected.some((u) => u.id === q.unit) && diff[q.difficulty]);
    const rows = qs.map((q, i) => {
      const opts_html = q.options ? q.options.map((o, j) => `<li style="color:${j === q.correctAnswer ? '#059669' : '#334155'};font-weight:${j === q.correctAnswer ? 'bold' : 'normal'}">${j === q.correctAnswer ? '✓ ' : ''}${o.text}</li>`).join('') : (q.type === 'trueFalse' ? `<li>Answer: ${q.correctAnswer ? 'True' : 'False'}</li>` : '');
      let explain = '';
      if (withExplain && q.explanation) explain += `<div style="margin-top:6px;padding:6px;background:#f0fdf4;border-right:3px solid #059669;font-size:13px"><b>Explanation:</b> ${q.explanation}</div>`;
      if (withExplain && q.goldenRule) explain += `<div style="margin-top:4px;padding:6px;background:#fffbeb;border:2px solid #fbbf24;font-size:13px"><b>👑 Golden Rule:</b> ${q.goldenRule}</div>`;
      if (q.paragraph) explain += `<div style="margin-top:4px;padding:4px;background:#fef2f2;color:#dc2626;font-size:12px;font-weight:bold">📖 ${q.paragraph} (p.${q.page})</div>`;
      return `<div style="page-break-inside:avoid;margin-bottom:14px;padding:10px;border:1px solid #e2e8f0;border-radius:8px"><div style="font-weight:bold;margin-bottom:6px">${i + 1}. ${q.question}</div><ul style="list-style:none;padding:0">${opts_html}</ul>${explain}</div>`;
    }).join('');
    const html = `<!DOCTYPE html><html dir="ltr" lang="en"><head><meta charset="utf-8"><title>English G1 S1 — We Can! Question Bank</title><style>body{font-family:'Poppins','Tajawal',sans-serif;padding:20px;max-width:800px;margin:auto}h1{text-align:center;color:#0a1628}.seal{text-align:center;font-size:24px;color:#c9a227}@media print{body{padding:10px}}</style></head><body><h1>English — We Can! 1 — Term 1</h1><div class="seal">⭐⭐⭐</div><p style="text-align:center;color:#64748b">Grade 1 Primary · ${qs.length} questions</p>${rows}<div style="margin-top:20px;text-align:center;font-size:11px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:8px">Source: We Can! Student Book 1 — Ministry of Education 1444H</div></body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html); w.document.close(); w.focus();
    setTimeout(() => w.print(), 300);
    onClose();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Printer className="w-5 h-5" /> طباعة PDF مخصّصة</h3>
          <button onClick={onClose} className="text-slate-400"><X className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-sm">
          <div>
            <div className="font-bold text-slate-700 mb-1">اختر الوحدات:</div>
            <div className="space-y-1">
              {ENGLISH_G1S1_UNITS.map((u, i) => (
                <label key={u.id} className="flex items-center gap-2">
                  <input type="checkbox" checked={units[i]} onChange={(e) => setUnits(units.map((v, j) => j === i ? e.target.checked : v))} />
                  <span>{u.icon} {u.title_en}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-700 mb-1">مستوى الصعوبة:</div>
            <div className="flex gap-3">
              {Object.entries(DIFFICULTY_LABELS).map(([k, v]) => (
                <label key={k} className="flex items-center gap-1"><input type="checkbox" checked={diff[k]} onChange={(e) => setDiff({ ...diff, [k]: e.target.checked })} /> {v}</label>
              ))}
            </div>
          </div>
          <label className="flex items-center gap-2"><input type="checkbox" checked={withExplain} onChange={(e) => setWithExplain(e.target.checked)} /> مع الشروحات والقاعدة الذهبية</label>
        </div>
        <button onClick={doPrint} className="w-full mt-4 py-3 rounded-xl bg-[#0a1628] text-white font-bold flex items-center justify-center gap-2"><Printer className="w-4 h-4" /> طباعة الآن</button>
      </motion.div>
    </motion.div>
  );
}

function LessonRunner({ questions, lesson, unit, onBack, onNext, progress }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    }
  }, [idx]);

  const q = questions[idx];

  const handleAnswer = (ok) => {
    setAnswered(true);
    setCorrect(ok);
    if (ok) { setScore((s) => s + 1); }
    else { if (q.feedbackQuestion) setShowFeedback(true); progress.recordMistake(q); }
  };

  const next = () => {
    if (idx < questions.length - 1) { setIdx((i) => i + 1); setAnswered(false); setCorrect(false); setShowFeedback(false); }
    else { setDone(true); progress.recordLesson(lesson.id, score, questions.length); }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto space-y-5 pt-6" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] text-white">
          <div className="text-4xl mb-2">{pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📖'}</div>
          <h2 className="text-3xl font-bold mb-1">{toAr(score)} / {toAr(questions.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز!' : pct >= 50 ? 'جيد، واصل المراجعة' : 'يحتاج مراجعة'}</p>
          <div className="mt-2 text-sm text-white/70">{lesson.title_en} — {unit.title_en}</div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setCorrect(false); setDone(false); setShowFeedback(false); }} className="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold flex items-center justify-center gap-2"><RotateCcw className="w-4 h-4" /> إعادة</button>
          <button onClick={onNext} className="flex-1 py-3 rounded-xl bg-[#0a1628] text-white font-bold flex items-center justify-center gap-2">الدرس التالي <ArrowLeft className="w-4 h-4" /></button>
        </div>
        <button onClick={onBack} className="w-full py-3 rounded-xl text-slate-500 font-medium">العودة لكل الدروس</button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4" dir="rtl">
      <div ref={topRef} />
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">
        <ArrowRight className="w-4 h-4 rotate-180" /> عودة للدروس
      </button>
      <div className="space-y-1.5">
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <motion.div className="h-full bg-amber-500" animate={{ width: `${(idx / questions.length) * 100}%` }} />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>السؤال {toAr(idx + 1)} / {toAr(questions.length)}</span>
          <span>النتيجة: {toAr(score)}</span>
        </div>
      </div>
      <div className="relative rounded-2xl bg-white border-2 border-amber-200 shadow-md p-5 overflow-hidden">
        <div className="absolute top-3 left-3 z-10"><GoldenSeal /></div>
        <div className="flex items-center gap-2 mb-3 pr-12 flex-wrap">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{TYPE_LABELS[q.type]}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">{BLOOM_LABELS[q.bloom]}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700">{DIFFICULTY_LABELS[q.difficulty]}</span>
          {q.page && <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">📖 p.{toAr(q.page)}</span>}
        </div>
        <AnimatePresence mode="wait">
          <QuestionRenderer key={idx} q={q} onAnswer={handleAnswer} showFeedback={showFeedback} />
        </AnimatePresence>
      </div>
      {answered && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          {correct ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
              <span className="text-xl">🌟</span><span className="text-sm font-bold text-emerald-700">إجابة صحيحة! أحسنت</span>
            </div>
          ) : (
            <div className="space-y-3">
              {q.paragraph && (
                <div className="rounded-xl bg-rose-50 border-2 border-rose-300 p-3">
                  <div className="text-xs font-bold text-rose-700 mb-1">📖 من الكتاب (صفحة {toAr(q.page)})</div>
                  <p className="text-sm text-rose-900 font-bold">{q.paragraph}</p>
                </div>
              )}
              <TeacherBlackboard text={q.explanation} />
              <GoldenRuleBox rule={q.goldenRule} />
              {showFeedback && <FeedbackQuestion fq={q.feedbackQuestion} />}
            </div>
          )}
          <button onClick={next} className="w-full py-3.5 rounded-xl bg-[#0a1628] text-white font-bold flex items-center justify-center gap-2">
            {idx < questions.length - 1 ? 'السؤال التالي' : 'إنهاء الدرس'}
            <ArrowLeft className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default function EnglishGrade1S1() {
  const { t } = useLang();
  const [dark, setDark] = useState(() => localStorage.getItem(THEME_KEY) === 'dark');
  const [activeLesson, setActiveLesson] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showPrint, setShowPrint] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [filterBloom, setFilterBloom] = useState('all');
  const [filterDiff, setFilterDiff] = useState('all');
  const progress = useProgress();

  useEffect(() => { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); }, [dark]);

  const openLesson = (unitIdx, lessonIdx) => setActiveLesson({ unitIdx, lessonIdx });
  const nextLesson = () => {
    if (!activeLesson) return;
    const { unitIdx, lessonIdx } = activeLesson;
    const unit = ENGLISH_G1S1_UNITS[unitIdx];
    if (lessonIdx < unit.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < ENGLISH_G1S1_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActiveLesson(null);
  };

  if (activeLesson) {
    const unit = ENGLISH_G1S1_UNITS[activeLesson.unitIdx];
    const lesson = unit.lessons[activeLesson.lessonIdx];
    let qs = getQuestionsForLesson(lesson.id);
    if (filterBloom !== 'all') qs = qs.filter((q) => q.bloom === filterBloom);
    if (filterDiff !== 'all') qs = qs.filter((q) => q.difficulty === filterDiff);
    if (qs.length === 0) qs = getQuestionsForLesson(lesson.id);
    return (
      <div className={dark ? 'dark' : ''}>
        <div className="min-h-screen bg-[#faf8f0] dark:bg-slate-900 transition-colors">
          <PageHeader title={`${lesson.title_en} — ${unit.title_en}`} subtitle="English · Grade 1 · Term 1" breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'English G1 S1', path: '/english-grade1-s1' }, { label: lesson.title_en }]} />
          <div className="max-w-5xl mx-auto px-4 pb-12 pt-4">
            <LessonRunner questions={qs} lesson={lesson} unit={unit} onBack={() => setActiveLesson(null)} onNext={nextLesson} progress={progress} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-[#faf8f0] dark:bg-slate-900 transition-colors" dir="rtl">
        <PageHeader title="English — We Can! 1 · Term 1" subtitle={`${toAr(ENGLISH_G1S1_UNITS.length)} units · ${toAr(TOTAL_ALL)} questions`} breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'English G1 S1' }]} />
        <div className="max-w-5xl mx-auto px-4 pb-12 space-y-6">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <button onClick={() => setShowFile(true)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-sm">
                <Award className="w-4 h-4 text-amber-500" /> ملف الطالب
              </button>
              <button onClick={() => setShowPrint(true)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-sm">
                <Printer className="w-4 h-4" /> طباعة PDF
              </button>
            </div>
            <button onClick={() => setDark(!dark)} className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-3xl p-8 text-center shadow-xl" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 60%, #2d5a9e 100%)' }}>
            <div className="absolute top-3 right-4 text-amber-300/40 text-2xl select-none">✦</div>
            <div className="absolute bottom-3 left-4 text-amber-300/40 text-2xl select-none">✦</div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex justify-center"><GoldenSeal size="lg" /></div>
              <h1 className="text-2xl sm:text-3xl font-bold">English Question Bank</h1>
              <p className="text-white/80">We Can! 1 · Grade 1 · Term 1</p>
              <div className="flex items-center justify-center gap-2 text-amber-300 text-xl">⭐⭐⭐</div>
              <p className="text-xs text-white/60">Source: McGraw-Hill / Ministry of Education 1444H</p>
            </div>
          </motion.section>

          <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><Filter className="w-4 h-4" /> تصفية الأسئلة</div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500">المستوى:</span>
              {[['all', 'الكل'], ['easy', 'سهل'], ['medium', 'متوسط'], ['hard', 'صعب']].map(([k, v]) => (
                <button key={k} onClick={() => setFilterDiff(k)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${filterDiff === k ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{v}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500">تصنيف بلوم:</span>
              {[['all', 'الكل'], ['remember', 'تذكّر'], ['understand', 'فهم'], ['apply', 'تطبيق'], ['analyze', 'تحليل'], ['create', 'تركيب'], ['evaluate', 'تقويم']].map(([k, v]) => (
                <button key={k} onClick={() => setFilterBloom(k)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${filterBloom === k ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{v}</button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {ENGLISH_G1S1_UNITS.map((u, ui) => (
              <motion.div key={u.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ui * 0.1 }} className="rounded-2xl bg-white border-2 border-amber-100 shadow-sm overflow-hidden">
                <button onClick={() => setSelectedUnit(selectedUnit === ui ? null : ui)} className="w-full flex items-center gap-3 p-4 hover:bg-amber-50/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#0a1628] flex items-center justify-center text-3xl flex-shrink-0">{u.icon}</div>
                  <div className="flex-1 text-start">
                    <div className="text-xs font-bold text-amber-600">Unit {toAr(ui + 1)}</div>
                    <h3 className="text-lg font-bold text-slate-800">{u.title_en}</h3>
                    <p className="text-xs text-slate-500">{toAr(u.lessons.length)} lessons · {toAr(getQuestionsForLesson(u.lessons[0]?.id).length + (u.lessons[1] ? getQuestionsForLesson(u.lessons[1].id).length : 0) + (u.lessons[2] ? getQuestionsForLesson(u.lessons[2].id).length : 0) + (u.lessons[3] ? getQuestionsForLesson(u.lessons[3].id).length : 0))} questions</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${selectedUnit === ui ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {selectedUnit === ui && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-amber-100">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                        {u.lessons.map((l, li) => {
                          const cnt = getQuestionsForLesson(l.id).length;
                          const st = progress.data.lessons?.[l.id];
                          const soon = cnt === 0;
                          return (
                            <button key={l.id} disabled={soon} onClick={() => !soon && openLesson(ui, li)} className={`group flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center ${soon ? 'border-slate-100 opacity-60 cursor-not-allowed' : 'border-slate-100 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5'}`}>
                              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📖</div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-amber-600 mb-0.5">Lesson {toAr(li + 1)}</div>
                                <div className="text-sm font-medium text-slate-700">{l.title_en}</div>
                                {soon ? <div className="text-xs text-amber-600 font-bold mt-1">قريباً</div> : <div className="text-xs text-slate-400 mt-1">{toAr(cnt)} سؤال</div>}
                                {st && !soon && <div className="text-xs mt-1 font-bold">{st.mastered ? '✓ متقن' : `⚠️ ${toAr(st.bestPct)}٪`}</div>}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {showPrint && <PrintDialog onClose={() => setShowPrint(false)} />}
        {showFile && <StudentFile progress={progress} onClose={() => setShowFile(false)} />}
      </div>
    </div>
  );
}