import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, RefreshCw, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BLOOM_LEVELS, bloomImageUrl } from '@/lib/bloomBank';
import { useLang } from '@/lib/i18n';

const SUBJECT_LABELS = { math: 'رياضيات', science: 'علوم', islamic: 'تربية إسلامية', social: 'اجتماعيات', arabic: 'لغة عربية' };
const SUBJECT_LABELS_EN = { math: 'Math', science: 'Science', islamic: 'Islamic', social: 'Social', arabic: 'Arabic' };

// عدّاد أسئلة مستوى بلوم واحد: يعرض السؤال مع رسمه المطابق ويقيس الإتقان
export default function BloomQuestionRunner({ questions, levelKey, grade, onExit, onRetry }) {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const Back = isRTL ? ChevronLeft : ChevronLeft;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const level = BLOOM_LEVELS.find((l) => l.key === levelKey);
  const q = questions[index];

  const handleAnswer = (oi) => {
    if (answered) return;
    setSelected(oi);
    setAnswered(true);
    if (String(oi) === String(q.correct_answer)) setCorrectCount((c) => c + 1);
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const passed = pct >= 70;
    return (
      <div className="max-w-xl mx-auto space-y-5 text-center">
        <div className={`rounded-2xl p-8 ${passed ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          <div className="text-5xl mb-2">{passed ? '🏆' : '📚'}</div>
          <h3 className="font-heading font-bold text-xl" style={{ color: level.color }}>
            {passed ? (lang === 'ar' ? 'أحسنت! تجاوزت المستوى' : 'Level passed') : (lang === 'ar' ? 'تحتاج مراجعة' : 'Needs review')}
          </h3>
          <p className="text-3xl font-display font-bold mt-2" style={{ color: level.color }}>{pct}٪</p>
          <p className="text-sm text-slate-500 mt-1">
            {correctCount} / {questions.length} {lang === 'ar' ? 'إجابة صحيحة' : 'correct'}
          </p>
          <p className="text-xs text-slate-400 mt-3">
            {lang === 'ar' ? `مستوى بلوم: ${level.ar} — الصف ${grade}` : `Bloom: ${level.en} — Grade ${grade}`}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button onClick={onRetry} variant="outline" className="gap-2"><RefreshCw className="w-4 h-4" /> {lang === 'ar' ? 'إعادة' : 'Retry'}</Button>
          <Button onClick={onExit} className="gap-2">{lang === 'ar' ? 'الهرم' : 'Pyramid'} <Arrow className="w-4 h-4" /></Button>
        </div>
      </div>
    );
  }

  if (!q) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 text-sm">{lang === 'ar' ? 'لا توجد أسئلة لهذا المستوى بعد' : 'No questions for this level yet'}</p>
        <Button onClick={onExit} className="mt-4" variant="outline">{lang === 'ar' ? 'رجوع' : 'Back'}</Button>
      </div>
    );
  }

  const imgUrl = bloomImageUrl(q.image_key);

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50">
          <Back className="w-5 h-5 text-slate-500" />
        </button>
        <div className="flex-1 mx-3 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full transition-all" style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%`, background: level.color }} />
        </div>
        <span className="text-xs font-bold text-slate-500">{index + 1}/{questions.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0, x: isRTL ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 40 : -40 }}>
          <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
            <div className="p-5 text-white" style={{ background: `linear-gradient(135deg, ${level.color}, ${level.color}cc)` }}>
              <span className="inline-block text-[10px] font-bold bg-white/25 rounded-full px-2.5 py-1 mb-2">
                {level.ar} · {lang === 'ar' ? SUBJECT_LABELS[q.subject] : SUBJECT_LABELS_EN[q.subject]} · {lang === 'ar' ? `الصف ${grade}` : `Grade ${grade}`}
              </span>
              <h2 className="text-lg font-heading font-bold leading-relaxed">{q.question_ar}</h2>
              <p className="text-[11px] text-white/70 mt-1">{q.topic_ar}</p>
            </div>

            {imgUrl && (
              <div className="px-5 pt-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                  <img src={imgUrl} alt={q.topic_ar} className="w-full h-40 sm:h-48 object-cover" loading="lazy" />
                  <span className="absolute top-2 end-2 text-[10px] font-bold bg-white/85 text-slate-600 rounded-full px-2 py-0.5">🔍 {lang === 'ar' ? 'انظر إلى الرسم' : 'Look at the figure'}</span>
                </div>
              </div>
            )}

            <div className="p-5 space-y-3">
              {q.options_ar.map((opt, oi) => {
                const isCorrect = String(oi) === String(q.correct_answer);
                const isSel = selected === oi;
                let cls = 'border-slate-200 hover:border-slate-400 hover:bg-slate-50';
                if (answered) {
                  if (isCorrect) cls = 'border-emerald-400 bg-emerald-50';
                  else if (isSel) cls = 'border-rose-400 bg-rose-50';
                  else cls = 'border-slate-100 opacity-60';
                }
                return (
                  <button key={oi} disabled={answered} onClick={() => handleAnswer(oi)} className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 text-start transition-all ${cls}`}>
                    <span className="font-medium text-sm text-slate-700">{opt}</span>
                    {answered && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
                    {answered && isSel && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="border-t border-slate-100 p-4 bg-slate-50/50">
                <p className="text-xs font-bold mb-1" style={{ color: level.color }}>
                  {String(selected) === String(q.correct_answer) ? (lang === 'ar' ? '✓ إجابة صحيحة' : '✓ Correct') : (lang === 'ar' ? '✗ إجابة خاطئة' : '✗ Wrong')}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{q.explanation_ar}</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Button onClick={handleNext} className="w-full gap-2 py-5 text-base font-bold" style={{ background: level.color }}>
            {index < questions.length - 1 ? (lang === 'ar' ? 'التالي' : 'Next') : (lang === 'ar' ? 'إنهاء المستوى' : 'Finish')}
            <Arrow className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}