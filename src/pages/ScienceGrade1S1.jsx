import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Printer, LogOut, Moon, Sun, Award, Home, RotateCcw, Filter, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import GoldenSeal from '@/components/science1/GoldenSeal';
import TeacherBlackboard, { GoldenRuleBox } from '@/components/science1/TeacherBlackboard';
import QuestionRenderer, { FeedbackQuestion } from '@/components/science1/QuestionRenderer';
import {
  SCIENCE_S1_UNITS, SCIENCE_S1_QUESTIONS, SCIENCE_S1_META,
  getQuestionsForLesson, getQuestionsForUnit,
  TOTAL_LESSONS_SCI_S1, TOTAL_QUESTIONS_SCI_S1,
  BLOOM_LABELS, DIFFICULTY_LABELS, TYPE_LABELS,
} from '@/lib/scienceGrade1S1Bank';

const STORAGE_KEY = 'sci1_progress_v1';
const THEME_KEY = 'sci1_theme';
const NAME_KEY = 'sci1_student_name';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// ===== خطاف التقدّم =====
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
      lessons[lessonId] = {
        attempts: prev.attempts + 1,
        bestPct: Math.max(prev.bestPct, pct),
        points: (prev.points || 0) + earned,
        lastScore: score,
        lastTotal: total,
        mastered: Math.max(prev.bestPct || 0, pct) >= 80,
      };
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

// ===== شاشة الوداع =====
function ExitScreen({ stats, onReturn, onRestart, onExit }) {
  const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-slate-900/90 flex items-center justify-center p-4">
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-5 shadow-2xl">
        <div className="text-5xl">👋</div>
        <h2 className="text-2xl font-bold text-slate-800">شكراً لك!</h2>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-slate-100 p-3"><div className="text-xl font-bold text-slate-800">{toAr(stats.total)}</div><div className="text-xs text-slate-500">أسئلة محلولة</div></div>
          <div className="rounded-xl bg-emerald-100 p-3"><div className="text-xl font-bold text-emerald-700">{toAr(stats.correct)}</div><div className="text-xs text-slate-500">صحيحة</div></div>
          <div className="rounded-xl bg-amber-100 p-3"><div className="text-xl font-bold text-amber-700">{toAr(pct)}٪</div><div className="text-xs text-slate-500">نسبة الدقة</div></div>
        </div>
        <p className="text-slate-600 text-sm">{pct >= 80 ? 'أداء رائع! واصل التألق 🌟' : pct >= 50 ? 'جيد جداً، واصل المراجعة 💪' : 'تحتاج مزيداً من التدريب، لا تيأس 📖'}</p>
        <div className="flex flex-col gap-2">
          <button onClick={onReturn} className="w-full py-3 rounded-xl bg-primary text-white font-bold">العودة للبنك</button>
          <button onClick={onRestart} className="w-full py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold flex items-center justify-center gap-2"><RotateCcw className="w-4 h-4" /> إعادة التشغيل</button>
          <button onClick={onExit} className="w-full py-3 rounded-xl bg-red-500 text-white font-bold flex items-center justify-center gap-2"><LogOut className="w-4 h-4" /> خروج نهائي</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ===== ملف الطالب =====
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
          {SCIENCE_S1_UNITS.map((u) => (
            <div key={u.id} className="rounded-xl border border-slate-200 p-2">
              <div className="font-medium text-sm text-slate-700 flex items-center gap-2">{u.icon} {u.title_ar}</div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {u.lessons.map((l) => {
                  const st = lessons[l.id];
                  return (
                    <div key={l.id} className={`text-xs px-2 py-1.5 rounded-md flex items-center gap-1 ${st?.mastered ? 'bg-emerald-50 text-emerald-700' : st ? 'bg-amber-50 text-amber-700' : 'bg-slate-50 text-slate-400'}`}>
                      {st?.mastered ? '✓' : st ? '⚠️' : '○'} {l.title_ar}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-3">
          <h4 className="font-bold text-rose-700 text-sm mb-1">الأسئلة الخاطئة المرشّحة للمراجعة ({toAr(mistakes.length)})</h4>
          {mistakes.length === 0 ? <p className="text-xs text-slate-500">لا توجد أخطاء بعد 👏</p> :
            <ul className="text-xs text-slate-600 space-y-1 max-h-32 overflow-y-auto">
              {mistakes.map((m) => <li key={m.id} className="truncate">• {m.question}</li>)}
            </ul>}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ===== نافذة الطباعة =====
function PrintDialog({ onClose }) {
  const [units, setUnits] = useState(SCIENCE_S1_UNITS.map(() => true));
  const [withExplain, setWithExplain] = useState(true);
  const [withFeedback, setWithFeedback] = useState(false);
  const [diff, setDiff] = useState({ easy: true, medium: true, hard: true });

  const doPrint = () => {
    const selected = SCIENCE_S1_UNITS.filter((_, i) => units[i]);
    const qs = SCIENCE_S1_QUESTIONS.filter((q) => {
      const uOk = selected.some((u) => u.id === q.unit);
      const dOk = diff[q.difficulty];
      return uOk && dOk;
    });
    const html = buildPrintHTML(qs, { withExplain, withFeedback });
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
    w.focus();
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
              {SCIENCE_S1_UNITS.map((u, i) => (
                <label key={u.id} className="flex items-center gap-2">
                  <input type="checkbox" checked={units[i]} onChange={(e) => setUnits(units.map((v, j) => j === i ? e.target.checked : v))} />
                  <span>{u.icon} {u.title_ar}</span>
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
          <label className="flex items-center gap-2"><input type="checkbox" checked={withExplain} onChange={(e) => setWithExplain(e.target.checked)} /> مع الشروحات</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={withFeedback} onChange={(e) => setWithFeedback(e.target.checked)} /> مع الأسئلة المشابهة</label>
        </div>
        <button onClick={doPrint} className="w-full mt-4 py-3 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2"><Printer className="w-4 h-4" /> طباعة الآن</button>
      </motion.div>
    </motion.div>
  );
}

function buildPrintHTML(qs, opts) {
  const rows = qs.map((q, i) => {
    const opts_html = q.options ? q.options.map((o, j) => {
      const isCorrect = j === q.correctAnswer;
      return `<li style="margin:4px 0;color:${isCorrect ? '#059669' : '#334155'};font-weight:${isCorrect ? 'bold' : 'normal'}">${isCorrect ? '✓ ' : ''}${o.text}</li>`;
    }).join('') : (q.correctAnswer !== undefined && q.correctAnswer !== null ? `<li>الإجابة الصحيحة: ${q.correctAnswer}</li>` : '');
    let explain = '';
    if (opts.withExplain && q.explanation) {
      explain += `<div style="margin-top:8px;padding:8px;background:#f0fdf4;border-right:3px solid #059669;font-size:13px"><b>الشرح:</b> ${q.explanation}</div>`;
    }
    if (opts.withExplain && q.goldenRule) {
      explain += `<div style="margin-top:6px;padding:8px;background:#fffbeb;border:2px solid #fbbf24;font-size:13px"><b>👑 القاعدة الذهبية:</b> ${q.goldenRule}</div>`;
    }
    if (q.paragraph) {
      explain += `<div style="margin-top:6px;padding:6px;background:#fef2f2;color:#dc2626;font-weight:bold;font-size:12px">📖 ${q.paragraph} (صفحة ${q.page})</div>`;
    }
    if (opts.withFeedback && q.feedbackQuestion) {
      const fopts = q.feedbackQuestion.options ? q.feedbackQuestion.options.map((o, j) => `<li style="font-size:12px">${j === q.feedbackQuestion.correctIndex ? '✓ ' : ''}${o.text}</li>`).join('') : '';
      explain += `<div style="margin-top:8px;padding:8px;background:#eef2ff;font-size:12px"><b>🔄 سؤال مشابه:</b> ${q.feedbackQuestion.question}<ul>${fopts}</ul></div>`;
    }
    return `<div style="page-break-inside:avoid;margin-bottom:16px;padding:12px;border:1px solid #e2e8f0;border-radius:8px;position:relative">
      <div style="position:absolute;top:8px;left:8px;width:40px;height:40px;border-radius:50%;border:2px solid #c9a227;background:linear-gradient(135deg,#fde68a,#fbbf24);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:bold;color:#78350f">⭐⭐⭐</div>
      <div style="font-weight:bold;margin-bottom:6px;padding-left:48px">${i + 1}. ${q.question}</div>
      <ul style="list-style:none;padding:0">${opts_html}</ul>
      ${explain}
    </div>`;
  }).join('');
  return `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>بنك العلوم — الصف الأول ف١</title>
  <style>body{font-family:'Tajawal','IBM Plex Sans Arabic',sans-serif;padding:20px;max-width:800px;margin:auto}
  h1{text-align:center;color:#0f5132}
  .seal{text-align:center;margin:10px auto;font-size:24px;color:#c9a227}
  .footer{margin-top:20px;text-align:center;font-size:11px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:8px}
  @media print{body{padding:10px}}</style></head><body>
  <h1>بنك أسئلة العلوم — الصف الأول الابتدائي (ف١)</h1>
  <div class="seal">⭐⭐⭐</div>
  ${rows}
  <div class="footer">أعدّ هذا البنك فريق المنصة التعليمية — ${qs.length} سؤالًا</div>
  </body></html>`;
}

// ===== تشغيل الدرس =====
function LessonRunner({ questions, lesson, unit, theme, onBack, onNext, progress, dark }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [correctStreak, setCorrectStreak] = useState(0);
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    }
  }, [idx]);

  const q = questions[idx];
  const handleAnswer = (ok, userPick, correctPick) => {
    setAnswered(true);
    setCorrect(ok);
    if (ok) { setScore((s) => s + 1); setCorrectStreak((c) => c + 1); }
    else { setMistakesCount((m) => m + 1); setCorrectStreak(0); if (q.feedbackQuestion) setShowFeedback(true); progress.recordMistake(q); }
  };
  const next = () => {
    if (idx < questions.length - 1) { setIdx((i) => i + 1); setAnswered(false); setCorrect(false); setShowFeedback(false); }
    else { setDone(true); progress.recordLesson(lesson.id, score, questions.length); }
  };
  const restart = () => { setIdx(0); setScore(0); setAnswered(false); setCorrect(false); setDone(false); setShowFeedback(false); setMistakesCount(0); };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto space-y-5 pt-6" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#0f5132] to-[#059669] text-white">
          <div className="text-4xl mb-2">{pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📖'}</div>
          <h2 className="text-3xl font-bold mb-1">{toAr(score)} / {toAr(questions.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز!' : pct >= 50 ? 'جيد، واصل المراجعة' : 'يحتاج مراجعة'}</p>
          <div className="mt-2 text-sm text-white/70">{lesson.title_ar} — {unit.title_ar}</div>
        </div>
        <div className="flex gap-3">
          <button onClick={restart} className="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold flex items-center justify-center gap-2"><RotateCcw className="w-4 h-4" /> إعادة</button>
          <button onClick={onNext} className="flex-1 py-3 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2">الدرس التالي <ArrowLeft className="w-4 h-4" /></button>
        </div>
        <button onClick={onBack} className="w-full py-3 rounded-xl text-slate-500 font-medium">العودة لكل الدروس</button>
      </motion.div>
    );
  }

  const progressPct = (idx / questions.length) * 100;
  return (
    <div className="max-w-2xl mx-auto space-y-4" dir="rtl">
      <div ref={topRef} />
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800">
        <ArrowRight className="w-4 h-4 rotate-180" /> عودة للدروس
      </button>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <motion.div className="h-full bg-emerald-500" animate={{ width: `${progressPct}%` }} />
          </div>
          <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
            <span>السؤال {toAr(idx + 1)} / {toAr(questions.length)}</span>
            <span>النتيجة: {toAr(score)} · أخطاء: {toAr(mistakesCount)}</span>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl bg-white border-2 border-amber-200 shadow-md p-5 overflow-hidden">
        <div className="absolute top-3 left-3 z-10"><GoldenSeal /></div>
        <div className="flex items-center gap-2 mb-3 pr-12">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{TYPE_LABELS[q.type]}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">{BLOOM_LABELS[q.bloom]}</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700">{DIFFICULTY_LABELS[q.difficulty]}</span>
          {q.page && <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">📖 ص {toAr(q.page)}</span>}
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
                  <div className="text-xs font-bold text-rose-700 mb-1">📖 الفقرة من الكتاب (صفحة {toAr(q.page)})</div>
                  <p className="text-sm text-rose-900 font-bold">{q.paragraph}</p>
                </div>
              )}
              <TeacherBlackboard text={q.explanation} />
              <GoldenRuleBox rule={q.goldenRule} />
              {showFeedback && <FeedbackQuestion fq={q.feedbackQuestion} />}
            </div>
          )}
          <button onClick={next} className="w-full py-3.5 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2">
            {idx < questions.length - 1 ? 'السؤال التالي' : 'إنهاء الدرس'}
            <ArrowLeft className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ===== الصفحة الرئيسية =====
export default function ScienceGrade1S1() {
  const { t } = useLang();
  const [dark, setDark] = useState(() => localStorage.getItem(THEME_KEY) === 'dark');
  const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || '');
  const [nameInput, setNameInput] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [showPrint, setShowPrint] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [filterBloom, setFilterBloom] = useState('all');
  const [filterDiff, setFilterDiff] = useState('all');
  const [sessionStats, setSessionStats] = useState({ total: 0, correct: 0 });
  const progress = useProgress();

  useEffect(() => { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); }, [dark]);
  useEffect(() => { if (name) localStorage.setItem(NAME_KEY, name); }, [name]);

  const allQuestions = useMemo(() => {
    let qs = SCIENCE_S1_QUESTIONS;
    if (filterBloom !== 'all') qs = qs.filter((q) => q.bloom === filterBloom);
    if (filterDiff !== 'all') qs = qs.filter((q) => q.difficulty === filterDiff);
    return qs;
  }, [filterBloom, filterDiff]);

  const openLesson = (unitIdx, lessonIdx) => {
    setActiveLesson({ unitIdx, lessonIdx });
  };
  const nextLesson = () => {
    if (!activeLesson) return;
    const { unitIdx, lessonIdx } = activeLesson;
    const unit = SCIENCE_S1_UNITS[unitIdx];
    if (lessonIdx < unit.lessons.length - 1) openLesson(unitIdx, lessonIdx + 1);
    else if (unitIdx < SCIENCE_S1_UNITS.length - 1) openLesson(unitIdx + 1, 0);
    else setActiveLesson(null);
  };

  const exitToDesktop = () => { try { window.close(); } catch {} setShowExit(false); };

  // ===== شاشة الدرس النشط =====
  if (activeLesson) {
    const unit = SCIENCE_S1_UNITS[activeLesson.unitIdx];
    const lesson = unit.lessons[activeLesson.lessonIdx];
    let qs = getQuestionsForLesson(lesson.id);
    if (filterBloom !== 'all') qs = qs.filter((q) => q.bloom === filterBloom);
    if (filterDiff !== 'all') qs = qs.filter((q) => q.difficulty === filterDiff);
    if (qs.length === 0) qs = getQuestionsForLesson(lesson.id);
    return (
      <div className={dark ? 'dark' : ''}>
        <div className="min-h-screen bg-cream dark:bg-slate-900 transition-colors">
          <PageHeader
            title={`${lesson.title_ar} — ${unit.title_ar}`}
            subtitle={`العلوم · الصف الأول · ف١`}
            breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'العلوم — الصف الأول ف١', path: '/science-grade1-s1' }, { label: lesson.title_ar }]}
          />
          <LessonRunner
            questions={qs}
            lesson={lesson}
            unit={unit}
            theme={null}
            onBack={() => setActiveLesson(null)}
            onNext={nextLesson}
            progress={progress}
            dark={dark}
          />
        </div>
      </div>
    );
  }

  // ===== شاشة الغلاف / البداية =====
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-[#faf8f0] dark:bg-slate-900 transition-colors" dir="rtl">
        <PageHeader
          title="العلوم — الصف الأول الابتدائي · ف١"
          subtitle={`${toAr(SCIENCE_S1_UNITS.length)} وحدات · ${toAr(TOTAL_LESSONS_SCI_S1)} دروس · ${toAr(TOTAL_QUESTIONS_SCI_S1)} سؤال`}
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'العلوم — الصف الأول ف١' }]}
        />
        <div className="max-w-5xl mx-auto px-4 pb-12 space-y-6">
          {/* شريط الأدوات */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <button onClick={() => setShowFile(true)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-sm">
                <Award className="w-4 h-4 text-amber-500" /> ملف الطالب
              </button>
              <button onClick={() => setShowPrint(true)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:shadow-sm">
                <Printer className="w-4 h-4 text-slate-600" /> طباعة PDF
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setDark(!dark)} className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600">
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button onClick={() => setShowExit(true)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 border border-red-200 text-sm font-medium text-red-600">
                <LogOut className="w-4 h-4" /> خروج
              </button>
            </div>
          </div>

          {/* الغلاف */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#0f5132] p-8 text-center shadow-xl">
            <div className="absolute top-3 right-4 text-amber-300/40 text-2xl select-none">✦</div>
            <div className="absolute bottom-3 left-4 text-amber-300/40 text-2xl select-none">✦</div>
            <div className="relative z-10 space-y-3 text-white">
              <div className="flex justify-center"><GoldenSeal size="lg" /></div>
              <h1 className="text-2xl sm:text-3xl font-bold">بنك أسئلة العلوم</h1>
              <p className="text-white/80">الصف الأول الابتدائي · الفصل الأول</p>
              <div className="flex items-center justify-center gap-2 text-amber-300 text-xl">⭐⭐⭐</div>
              <p className="text-xs text-white/60">المصدر: كتاب الطالب — وزارة التعليم</p>
            </div>
          </motion.section>

          {/* إدخال الاسم */}
          {!name && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl bg-white border border-slate-200 p-5">
              <label className="block text-sm font-bold text-slate-700 mb-2">اكتب اسمك لحفظ تقدّمك (اختياري)</label>
              <div className="flex gap-2">
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="اسم الطالب"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm" />
                <button onClick={() => setName(nameInput || 'طالب')} className="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm">حفظ</button>
              </div>
            </motion.div>
          )}

          {/* الفلاتر */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700"><Filter className="w-4 h-4" /> تصفية الأسئلة</div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500">المستوى:</span>
              {[['all', 'الكل'], ['easy', 'سهل'], ['medium', 'متوسط'], ['hard', 'صعب']].map(([k, v]) => (
                <button key={k} onClick={() => setFilterDiff(k)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${filterDiff === k ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{v}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500">تصنيف بلوم:</span>
              {[['all', 'الكل'], ['remember', 'تذكّر'], ['understand', 'فهم'], ['apply', 'تطبيق'], ['analyze', 'تحليل'], ['create', 'تركيب'], ['evaluate', 'تقويم']].map(([k, v]) => (
                <button key={k} onClick={() => setFilterBloom(k)} className={`px-3 py-1.5 rounded-full text-xs font-medium ${filterBloom === k ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{v}</button>
              ))}
            </div>
            <p className="text-xs text-slate-400">عدد الأسئلة المعروضة: {toAr(allQuestions.length)}</p>
          </div>

          {/* الوحدات كبطاقات */}
          <div className="space-y-5">
            {SCIENCE_S1_UNITS.map((u, ui) => (
              <motion.div key={u.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ui * 0.1 }} className="rounded-2xl bg-white border-2 border-amber-100 shadow-sm overflow-hidden">
                <button onClick={() => setSelectedUnit(selectedUnit === ui ? null : ui)} className="w-full flex items-center gap-3 p-4 hover:bg-amber-50/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-3xl">{u.icon}</div>
                  <div className="flex-1 text-start">
                    <div className="text-xs font-bold text-amber-600">الوحدة {toAr(ui + 1)}</div>
                    <h3 className="text-lg font-bold text-slate-800">{u.title_ar}</h3>
                    <p className="text-xs text-slate-500">{toAr(u.lessons.length)} دروس</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${selectedUnit === ui ? 'rotate-180 bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <ArrowLeft className="w-4 h-4 rotate-90" />
                  </div>
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
                            <button key={l.id} disabled={soon} onClick={() => !soon && openLesson(ui, li)} className={`group flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${soon ? 'border-slate-100 opacity-60 cursor-not-allowed' : 'border-slate-100 hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5'}`}>
                              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🔬</div>
                              <div className="text-center">
                                <div className="text-xs font-bold text-emerald-600">الدرس {toAr(li + 1)}</div>
                                <div className="text-sm font-medium text-slate-700 mt-0.5">{l.title_ar}</div>
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
        {showExit && <ExitScreen stats={sessionStats} onReturn={() => setShowExit(false)} onRestart={() => { setShowExit(false); window.location.reload(); }} onExit={exitToDesktop} />}
      </div>
    </div>
  );
}