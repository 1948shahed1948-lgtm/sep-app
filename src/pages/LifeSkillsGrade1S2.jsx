import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Crown, BookOpen, Lightbulb, CheckCircle, X, Hammer, ArrowRight as BackIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import LughatiMatching from '@/components/lughati/LughatiMatching';
import LughatiClassify from '@/components/lughati/LughatiClassify';
import LughatiOrdering from '@/components/lughati/LughatiOrdering';
import InteractiveMCQuestion from '@/components/lughati/InteractiveMCQuestion';
import WordSentenceOrdering from '@/components/standardized/WordSentenceOrdering';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import AdaptiveChallenge from '@/components/lughati/AdaptiveChallenge';
import InteractiveBankBrowser from '@/components/lughati/InteractiveBankBrowser';
import { LIFE_SKILLS_G1_S2_UNITS } from '@/lib/lifeSkillsGrade1S2';
import { getExercisesForLifeSkillsTopic, getAdaptiveLadderLifeSkills, TOTAL_TOPICS_LIFE_SKILLS, TOTAL_QUESTIONS_LIFE_SKILLS } from '@/lib/lifeSkillsGrade1S2Questions';
import { withQuestionImages } from '@/lib/bankImagePools';

const TYPE_BADGE = {
  matching: { label: 'وصل', color: 'bg-blue-100 text-blue-700' },
  classify: { label: 'تصنيف', color: 'bg-violet-100 text-violet-700' },
  ordering: { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
  yesno: { label: 'نعم / لا', color: 'bg-emerald-100 text-emerald-700' },
  identify: { label: 'ما هذا؟', color: 'bg-rose-100 text-rose-700' },
  count: { label: 'كم عدد؟', color: 'bg-cyan-100 text-cyan-700' },
  info: { label: 'معلومة', color: 'bg-sky-100 text-sky-700' },
  word_sentence_ordering: { label: 'ترتيب كلمات', color: 'bg-indigo-100 text-indigo-700' },
};

const UNIT_THEME = [
  { bar: 'bg-emerald-500', headFrom: 'from-emerald-50', iconBg: 'bg-emerald-100', iconText: 'text-emerald-700', tile: 'bg-emerald-50', tileText: 'text-emerald-700', tileBorder: 'border-emerald-200', hover: 'hover:border-emerald-400', chip: 'bg-emerald-100 text-emerald-700', num: 'text-emerald-600' },
  { bar: 'bg-violet-500', headFrom: 'from-violet-50', iconBg: 'bg-violet-100', iconText: 'text-violet-700', tile: 'bg-violet-50', tileText: 'text-violet-700', tileBorder: 'border-violet-200', hover: 'hover:border-violet-400', chip: 'bg-violet-100 text-violet-700', num: 'text-violet-600' },
  { bar: 'bg-amber-500', headFrom: 'from-amber-50', iconBg: 'bg-amber-100', iconText: 'text-amber-700', tile: 'bg-amber-50', tileText: 'text-amber-700', tileBorder: 'border-amber-200', hover: 'hover:border-amber-400', chip: 'bg-amber-100 text-amber-700', num: 'text-amber-600' },
  { bar: 'bg-rose-500', headFrom: 'from-rose-50', iconBg: 'bg-rose-100', iconText: 'text-rose-700', tile: 'bg-rose-50', tileText: 'text-rose-700', tileBorder: 'border-rose-200', hover: 'hover:border-rose-400', chip: 'bg-rose-100 text-rose-700', num: 'text-rose-600' },
];

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

const BANNER = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80';

// مطابقة بنية الوحدات لما يتوقعه InteractiveBankBrowser (lessons بدل topics)
const ADAPTED_UNITS = LIFE_SKILLS_G1_S2_UNITS.map((u) => ({
  ...u,
  lessons: u.topics.map((tp) => ({ ...tp, title_ar: tp.title_ar, words: [u.emoji] })),
}));

function ExerciseRenderer({ exercise, isAnswered, onAnswer }) {
  const ImageBlock = exercise.image_url ? (
    <div className="rounded-xl overflow-hidden border border-slate-200 mx-4 mt-4">
      <img src={exercise.image_url} alt="صورة السؤال" className="w-full h-40 object-cover" />
    </div>
  ) : null;
  if (exercise.type === 'matching') return <>{ImageBlock}<LughatiMatching exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'classify') return <>{ImageBlock}<LughatiClassify exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'ordering') return <>{ImageBlock}<LughatiOrdering exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (exercise.type === 'word_sentence_ordering') return <>{ImageBlock}<WordSentenceOrdering exercise={exercise} lang="ar" isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  if (['yesno', 'identify', 'count', 'info'].includes(exercise.type)) return <>{ImageBlock}<InteractiveMCQuestion exercise={exercise} isAnswered={isAnswered} onAnswer={onAnswer} /></>;
  return null;
}

// نافذة عرض محتوى الدرس (المفاهيم/الأنشطة/النصائح)
function LessonContentModal({ topic, unitColor, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 flex items-center justify-between p-5 border-b bg-white rounded-t-3xl z-10">
            <h2 className="text-lg font-heading font-bold text-slate-800">{topic.title_ar}</h2>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-slate-600" />
            </button>
          </div>
          <div className="p-5 space-y-5">
            {topic.concepts?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: unitColor + '20' }}>
                    <Lightbulb className="w-4 h-4" style={{ color: unitColor }} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-700">المفاهيم الرئيسية</h3>
                </div>
                <ul className="space-y-2">
                  {topic.concepts.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: unitColor }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {topic.activities?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: unitColor + '20' }}>
                    <Hammer className="w-4 h-4" style={{ color: unitColor }} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-700">الأنشطة</h3>
                </div>
                <ol className="space-y-2">
                  {topic.activities.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: unitColor }}>{i + 1}</span>
                      {a}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            {topic.guidelines?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-700">النصائح والإرشادات</h3>
                </div>
                <ul className="space-y-2">
                  {topic.guidelines.map((g, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function LifeSkillsGrade1S2() {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [active, setActive] = useState(null); // { unitIdx, topicIdx }
  const [exIdx, setExIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const topRef = useRef(null);

  // عند الانتقال للتمرين التالي: نعود لأعلى السؤال فوراً بدل البقاء في الأسفل
  useEffect(() => {
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
    }
  }, [exIdx]);

  const exercises = useMemo(
    () => (active ? withQuestionImages(getExercisesForLifeSkillsTopic(active.unitIdx, active.topicIdx), 'lifeSkills') : []),
    [active]
  );
  const exercise = exercises[exIdx];

  const openLesson = (unitIdx, topicIdx) => {
    setActive({ unitIdx, topicIdx });
    setExIdx(0); setAnswered(false); setCorrect(false); setScore(0); setDone(false);
  };

  const onAnswer = useCallback((val) => {
    setAnswered(true);
    const ok = val === '1';
    setCorrect(ok);
    if (ok) setScore((s) => s + 1);
  }, []);

  const next = () => {
    if (exIdx < exercises.length - 1) {
      setExIdx((i) => i + 1); setAnswered(false); setCorrect(false);
    } else {
      setDone(true);
    }
  };

  const nextLesson = () => {
    if (!active) return;
    const { unitIdx, topicIdx } = active;
    const unit = ADAPTED_UNITS[unitIdx];
    if (topicIdx < unit.lessons.length - 1) {
      openLesson(unitIdx, topicIdx + 1);
    } else if (unitIdx < ADAPTED_UNITS.length - 1) {
      openLesson(unitIdx + 1, 0);
    } else {
      setActive(null);
    }
  };

  const backToOverview = () => { setActive(null); setDone(false); };

  // ===== مشغّل التمارين =====
  if (active && !done && exercise) {
    const unit = ADAPTED_UNITS[active.unitIdx];
    const topic = unit.lessons[active.topicIdx];
    const th = UNIT_THEME[active.unitIdx % UNIT_THEME.length];
    const progress = (exIdx / exercises.length) * 100;
    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`${topic.title_ar} — ${unit.title_ar}`}
          subtitle={`تمرين ${toAr(exIdx + 1)} من ${toAr(exercises.length)}`}
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'المهارات الحياتية — الصف الأول ف٢', path: '/life-skills-grade1-s2' }, { label: topic.title_ar }]}
        />
        <div className="max-w-2xl mx-auto space-y-5">
          <div ref={topRef} />
          <div className="flex items-center justify-between">
            <button onClick={backToOverview} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
              <BackIcon className="w-4 h-4 rotate-180" />
              عودة لكل الدروس
            </button>
            <button onClick={() => setShowContent(true)} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-violet-300 hover:text-violet-700 transition-colors">
              <BookOpen className="w-3.5 h-3.5" />
              عرض الدرس
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${th.tile} flex items-center justify-center flex-shrink-0 text-2xl`}>
              {unit.emoji}
            </div>
            <div className="flex-1">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className={`h-full ${th.bar}`} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
              </div>
              <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
                <span>السؤال {toAr(exIdx + 1)} / {toAr(exercises.length)}</span>
                <span>النتيجة: {toAr(score)}</span>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${TYPE_BADGE[exercise.type].color}`}>
              {TYPE_BADGE[exercise.type].label}
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={`${active.unitIdx}-${active.topicIdx}-${exIdx}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
              <ExerciseRenderer exercise={exercise} isAnswered={answered} onAnswer={onAnswer} />
            </motion.div>
          </AnimatePresence>
          {answered && (
            <>
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">إجابة صحيحة! أحسنت 🌟</span>
                </motion.div>
              ) : (
                <WrongAnswerTeacher explanation={exercise.explanation_ar} goldenRule={exercise.golden_rule_ar} advice={exercise.advice_ar} followup={exercise.followup} lang="ar" isRTL />
              )}
              <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold">
                {exIdx < exercises.length - 1 ? 'التمرين التالي' : 'إنهاء الدرس'}
                <Arrow className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>
        {showContent && (
          <LessonContentModal topic={topic} unitColor={unit.color} onClose={() => setShowContent(false)} />
        )}
      </div>
    );
  }

  // ===== شاشة نتيجة الدرس =====
  if (active && done) {
    const unit = ADAPTED_UNITS[active.unitIdx];
    const topic = unit.lessons[active.topicIdx];
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto space-y-5 pt-8" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#263D84] to-[#3E57A4] text-white">
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{toAr(score)} / {toAr(exercises.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقان ممتاز 🏆' : pct >= 50 ? 'جيد، واصل المراجعة 💪' : 'يحتاج مراجعة، أعد المحاولة 📖'}</p>
          <div className="mt-3 text-sm text-white/70">{topic.title_ar} — {unit.title_ar}</div>
        </div>
        <AdaptiveChallenge getLadder={getAdaptiveLadderLifeSkills} unitIdx={active.unitIdx} lessonIdx={active.topicIdx} />
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.topicIdx)} variant="outline" className="flex-1">إعادة الدرس</Button>
          <Button onClick={nextLesson} className="flex-1 gap-2">الدرس التالي<Arrow className="w-4 h-4" /></Button>
        </div>
        <Button onClick={backToOverview} variant="ghost" className="w-full">عودة لكل الدروس</Button>
      </motion.div>
    );
  }

  // ===== الشاشة الرئيسية: شبكة الوحدات ← الدروس =====
  const renderLessonTile = (l, li, th, onClick) => (
    <button onClick={onClick} className={`group flex flex-col items-center gap-2 p-3 rounded-2xl border-2 ${th.tileBorder} ${th.hover} hover:shadow-md transition-all hover:-translate-y-0.5`}>
      <div className={`w-16 h-16 rounded-2xl ${th.tile} flex items-center justify-center group-hover:scale-110 transition-transform text-3xl`}>
        {l.words?.[0] || '📘'}
      </div>
      <div className="text-center">
        <div className={`text-xs font-bold ${th.num}`}>الدرس {toAr(li + 1)}</div>
        <h3 className="text-sm font-heading font-bold text-slate-800 mt-0.5 leading-tight">{l.title_ar}</h3>
      </div>
    </button>
  );

  return (
    <InteractiveBankBrowser
      units={ADAPTED_UNITS}
      unitTheme={UNIT_THEME}
      selectedUnit={selectedUnit}
      onSelectUnit={setSelectedUnit}
      onPickLesson={openLesson}
      banner={BANNER}
      title="المهارات الحياتية والأسرية — الصف الأول · ف٢"
      subtitle={`بنك أسئلة تفاعلي وفق الكتاب الرسمي (${toAr(ADAPTED_UNITS.length)} وحدات · ${toAr(TOTAL_TOPICS_LIFE_SKILLS)} درسًا · ${toAr(TOTAL_QUESTIONS_LIFE_SKILLS)} سؤالًا)`}
      bankLabel="المهارات الحياتية — الصف الأول ف٢"
      homeLabel={t('home')}
      backTo="/question-bank/grade_1/second"
      toAr={toAr}
      stats={[{ n: toAr(ADAPTED_UNITS.length), l: 'وحدات' }, { n: toAr(TOTAL_TOPICS_LIFE_SKILLS), l: 'درسًا' }, { n: toAr(TOTAL_QUESTIONS_LIFE_SKILLS), l: 'سؤال' }]}
      renderLessonTile={renderLessonTile}
    />
  );
}