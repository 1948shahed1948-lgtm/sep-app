import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Crown, ArrowLeft, ArrowRight, BookOpen, RotateCcw } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import {
  ISLAMIC_G1_S2_UNITS,
  TOTAL_UNITS_ISLAMIC,
  TOTAL_LESSONS_ISLAMIC,
  TOTAL_QUESTIONS_ISLAMIC,
  getQuestionsForIslamicLesson,
} from '@/lib/islamicGrade1S2';
import { withQuestionImages } from '@/lib/bankImagePools';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// ====== شاشة نتيجة الدرس ======
function LessonResult({ score, total, onRetry, onNext, onBack }) {
  const pct = Math.round((score / total) * 100);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto space-y-5 pt-6" dir="rtl">
      <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#263D84] to-[#3E57A4] text-white">
        <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
        <h2 className="text-3xl font-heading font-bold mb-1">{toAr(score)} / {toAr(total)}</h2>
        <p className="text-white/80 text-lg">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل 💪' : 'راجع الدرس مجددًا 📖'}</p>
      </div>
      <div className="flex gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1 gap-2"><RotateCcw className="w-4 h-4" />إعادة</Button>
        <Button onClick={onNext} className="flex-1">الدرس التالي ←</Button>
      </div>
      <Button onClick={onBack} variant="ghost" className="w-full">عودة لكل الدروس</Button>
    </motion.div>
  );
}

// ====== سؤال اختيار من متعدد ======
function MCQuestion({ question, onAnswer, answered, selectedIdx }) {
  return (
    <div className="space-y-3">
      <p className="text-base font-heading font-bold text-slate-800 leading-relaxed">{question.question_ar}</p>
      <div className="grid gap-2">
        {question.options_ar.map((opt, i) => {
          let cls = 'w-full text-right p-3.5 rounded-xl border-2 font-medium text-sm transition-all ';
          if (!answered) {
            cls += 'border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 cursor-pointer';
          } else if (i === question.correct_index) {
            cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
          } else if (i === selectedIdx) {
            cls += 'border-red-400 bg-red-50 text-red-700';
          } else {
            cls += 'border-slate-100 bg-slate-50 text-slate-400';
          }
          return (
            <button key={i} className={cls} onClick={() => !answered && onAnswer(i)} disabled={answered}>
              <span className="flex items-center gap-2">
                {answered && i === question.correct_index && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                {answered && i === selectedIdx && i !== question.correct_index && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ====== مشغّل الأسئلة ======
function LessonRunner({ unitIdx, lessonIdx, onDone, onBack }) {
  const unit = ISLAMIC_G1_S2_UNITS[unitIdx];
  const lesson = unit.lessons[lessonIdx];
  const questions = withQuestionImages(getQuestionsForIslamicLesson(unitIdx, lessonIdx), 'islamic');

  const [qIdx, setQIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const topRef = useRef(null);

  // عند الانتقال للسؤال التالي: نعود لأعلى منطقة السؤال فوراً بدل البقاء في الأسفل
  useEffect(() => {
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    }
  }, [qIdx]);

  const q = questions[qIdx];

  const handleAnswer = useCallback((idx) => {
    setAnswered(true);
    setSelectedIdx(idx);
    if (idx === q.correct_index) setScore((s) => s + 1);
  }, [q]);

  const next = () => {
    if (qIdx < questions.length - 1) {
      setQIdx((i) => i + 1);
      setAnswered(false);
      setSelectedIdx(null);
    } else {
      setDone(true);
    }
  };

  const retry = () => {
    setQIdx(0);
    setAnswered(false);
    setSelectedIdx(null);
    setScore(0);
    setDone(false);
  };

  const nextLesson = () => {
    const nextL = lessonIdx + 1 < unit.lessons.length ? lessonIdx + 1 : null;
    const nextU = nextL === null && unitIdx + 1 < ISLAMIC_G1_S2_UNITS.length ? unitIdx + 1 : null;
    if (nextL !== null) onDone(unitIdx, nextL);
    else if (nextU !== null) onDone(nextU, 0);
    else onBack();
  };

  if (done) {
    return <LessonResult score={score} total={questions.length} onRetry={retry} onNext={nextLesson} onBack={onBack} />;
  }

  const progress = (qIdx / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-5" dir="rtl">
      <div ref={topRef} className="scroll-mt-4" />
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowRight className="w-4 h-4" />
        عودة لكل الدروس
      </button>

      {/* شريط التقدم */}
      <div className="space-y-1.5">
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: unit.color }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>السؤال {toAr(qIdx + 1)} / {toAr(questions.length)}</span>
          <span>النتيجة: {toAr(score)}</span>
        </div>
      </div>

      {/* رأس الدرس */}
      <div className="flex items-center gap-3 p-3 rounded-xl border" style={{ backgroundColor: unit.color + '10', borderColor: unit.color + '30' }}>
        <span className="text-2xl">{unit.emoji}</span>
        <div>
          <div className="text-xs font-bold" style={{ color: unit.color }}>{unit.title_ar}</div>
          <div className="text-sm font-heading font-bold text-slate-700">{lesson.title_ar}</div>
        </div>
      </div>

      {/* السؤال */}
      <AnimatePresence mode="wait">
        <motion.div
          key={qIdx}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 space-y-4"
        >
          {q.image_url && (
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <img src={q.image_url} alt="صورة السؤال" className="w-full h-44 object-cover" />
            </div>
          )}
          <MCQuestion question={q} onAnswer={handleAnswer} answered={answered} selectedIdx={selectedIdx} />
        </motion.div>
      </AnimatePresence>

      {/* الشرح والتالي */}
      {answered && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          {selectedIdx === q.correct_index ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-sm font-medium text-emerald-700">إجابة صحيحة! أحسنت 🌟</p>
            </div>
          ) : (
            <WrongAnswerTeacher
              explanation={q.explanation_ar}
              goldenRule={q.golden_rule_ar}
              advice={q.advice_ar}
              followup={q.followup}
              lang="ar"
              isRTL
            />
          )}
          <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold" style={{ backgroundColor: unit.color }}>
            {qIdx < questions.length - 1 ? 'السؤال التالي' : 'إنهاء الدرس'}
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}

// ====== الصفحة الرئيسية ======
export default function IslamicGrade1S2() {
  const { t } = useLang();
  const [active, setActive] = useState(null); // { unitIdx, lessonIdx }

  const openLesson = (unitIdx, lessonIdx) => setActive({ unitIdx, lessonIdx });
  const closeLesson = () => setActive(null);

  if (active) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="التربية الإسلامية — الصف الأول · الفصل الثاني"
          backTo="/question-bank/grade_1/second"
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
            { label: 'الصف الأول', path: '/question-bank/grade_1' },
            { label: 'الفصل الثاني', path: '/question-bank/grade_1/second' },
            { label: 'التربية الإسلامية', path: '/islamic-grade1-s2' },
            { label: ISLAMIC_G1_S2_UNITS[active.unitIdx]?.lessons[active.lessonIdx]?.title_ar },
          ]}
        />
        <LessonRunner
          unitIdx={active.unitIdx}
          lessonIdx={active.lessonIdx}
          onDone={openLesson}
          onBack={closeLesson}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8" dir="rtl">
      <PageHeader
        title="التربية الإسلامية — الصف الأول · الفصل الثاني"
        subtitle={`${toAr(TOTAL_UNITS_ISLAMIC)} وحدات · ${toAr(TOTAL_LESSONS_ISLAMIC)} درسًا · ${toAr(TOTAL_QUESTIONS_ISLAMIC)} سؤالًا`}
        backTo="/question-bank/grade_1/second"
        breadcrumbs={[
          { label: t('home'), path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف الأول', path: '/question-bank/grade_1' },
          { label: 'الفصل الثاني', path: '/question-bank/grade_1/second' },
          { label: 'التربية الإسلامية' },
        ]}
      />

      {/* إحصائيات */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { n: toAr(TOTAL_UNITS_ISLAMIC), l: 'وحدات' },
          { n: toAr(TOTAL_LESSONS_ISLAMIC), l: 'درسًا' },
          { n: toAr(TOTAL_QUESTIONS_ISLAMIC), l: 'سؤال' },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 text-center">
            <div className="text-2xl font-heading font-bold text-[#263D84]">{s.n}</div>
            <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      {/* الوحدات */}
      <div className="space-y-8">
        {ISLAMIC_G1_S2_UNITS.map((unit, ui) => (
          <motion.div key={unit.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ui * 0.08 }}>
            {/* رأس الوحدة */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl mb-3 text-white"
              style={{ backgroundColor: unit.color }}
            >
              <span className="text-3xl">{unit.emoji}</span>
              <div>
                <h2 className="font-heading font-bold text-lg">{unit.title_ar}</h2>
                <p className="text-white/70 text-sm">{toAr(unit.lessons.length)} دروس</p>
              </div>
            </div>

            {/* قائمة الدروس */}
            <div className="grid sm:grid-cols-2 gap-3">
              {unit.lessons.map((lesson, li) => (
                <button
                  key={lesson.id}
                  onClick={() => openLesson(ui, li)}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all text-right"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: unit.color + '15' }}
                  >
                    <BookOpen className="w-5 h-5" style={{ color: unit.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-sm text-slate-800 truncate">{lesson.title_ar}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{toAr(lesson.questions.length)} أسئلة</div>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:text-slate-500 flex-shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}