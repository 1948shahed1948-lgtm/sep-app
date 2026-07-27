import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { ChevronLeft, ChevronRight, Star, Sparkles, RotateCcw, Shuffle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { PRESCHOOL_QUESTIONS, PRESCHOOL_CATEGORIES } from '@/lib/preschoolBank';

const SESSION = 15;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function PreschoolBank() {
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const topRef = useScrollTopOnChange(0);

  const [phase, setPhase] = useState('menu'); // menu | quiz | results
  const [category, setCategory] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [results, setResults] = useState([]);

  const start = (cat) => {
    const pool = cat === 'all' ? PRESCHOOL_QUESTIONS : PRESCHOOL_QUESTIONS.filter((q) => q.category === cat);
    setQuestions(shuffle(pool).slice(0, SESSION));
    setCategory(cat);
    setIndex(0);
    setPicked(null);
    setResults([]);
    setPhase('quiz');
  };

  const current = questions[index];

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    const correct = i === current.correct;
    setResults((r) => [...r, { correct }]);
    if (correct) confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, scalar: 1.1 });
    setTimeout(() => {
      if (index + 1 >= questions.length) setPhase('results');
      else {
        setIndex((x) => x + 1);
        setPicked(null);
      }
    }, 1100);
  };

  if (phase === 'menu') {
    return (
      <div className="space-y-8">
        <PageHeader
          title={lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School Learning'}
          subtitle={lang === 'ar' ? 'بنك أسئلة للروضة — صور وحركة ومتعة' : 'Kindergarten bank — images, motion & fun'}
          backTo="/"
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School' }]}
        />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-amber-50 to-sky-100 border border-amber-100 p-6 text-center">
            <div className="text-5xl mb-2">🧒🎨</div>
            <h2 className="text-xl font-heading font-bold text-slate-900">
              {lang === 'ar' ? '١٠٠ سؤال للروضة' : '100 questions for kindergarten'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {lang === 'ar' ? 'كل سؤال يعتمد على الصور والتفاعل الحركي — عد، ألوان، أشكال، حيوانات، حروف، أكبر/أصغر، والمختلف' : 'Every question is image-based and interactive — counting, colors, shapes, animals, letters, sizes & odd-one'}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PRESCHOOL_CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => start(c.key)}
                className="group rounded-2xl bg-white border border-slate-100 p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{c.icon}</div>
                <div className="text-sm font-heading font-bold text-slate-800">
                  {lang === 'ar' ? c.ar : c.en}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const correct = results.filter((r) => r.correct).length;
    return (
      <div className="space-y-8">
        <PageHeader
          title={lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School Learning'}
          backTo="/"
          breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School' }]}
        />
        <div className="max-w-xl mx-auto rounded-3xl bg-white border border-amber-100 p-10 text-center shadow-sm">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="text-7xl mb-4">
            {correct >= 12 ? '🏆' : correct >= 8 ? '🎉' : '💪'}
          </motion.div>
          <p className="text-3xl font-heading font-bold text-slate-900">
            {correct} / {questions.length}
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'ar' ? 'نجومك' : 'Your stars'}
          </p>
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: questions.length }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < correct ? 'fill-amber-400 text-amber-500' : 'text-slate-200'}`} />
            ))}
          </div>
          <div className="flex gap-3 mt-6 justify-center">
            <button onClick={() => start(category)} className="px-5 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors inline-flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              {lang === 'ar' ? 'العب مرة أخرى' : 'Play again'}
            </button>
            <button onClick={() => setPhase('menu')} className="px-5 py-3 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              {lang === 'ar' ? 'فئة أخرى' : 'Another category'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="space-y-6">
      <PageHeader
        title={lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School Learning'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'التعلم قبل المدرسة' : 'Pre-School' }]}
      />
      <div ref={topRef} className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setPhase('menu')} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-amber-300 hover:bg-amber-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </button>
          <div className="flex items-center gap-1.5 text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            {results.filter((r) => r.correct).length} / {questions.length}
          </div>
          <div className="text-sm font-bold text-slate-400">{index + 1} / {questions.length}</div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 40 : -40 }}
            className="rounded-3xl bg-white border border-amber-100 p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-amber-600">
              <Sparkles className="w-5 h-5" />
              <p className="text-lg sm:text-xl font-heading font-bold text-slate-900 text-center">
                {lang === 'ar' ? current.prompt_ar : current.prompt_en}
              </p>
            </div>

            {current.type === 'count' && (
              <div className="flex flex-wrap justify-center gap-3 min-h-[110px] items-center">
                {current.visuals.map((e, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -25 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.08, type: 'spring' }}
                    className="text-4xl sm:text-5xl"
                  >
                    {e}
                  </motion.span>
                ))}
              </div>
            )}

            <div className={`grid gap-3 ${current.options.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
              {current.options.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrect = i === current.correct;
                const show = picked !== null;
                const isLetter = !opt.emoji && !!opt.ar;
                return (
                  <motion.button
                    key={i}
                    onClick={() => pick(i)}
                    whileTap={{ scale: 0.92 }}
                    animate={show && isPicked && !isCorrect ? { x: [0, -8, 8, -6, 6, 0] } : {}}
                    disabled={picked !== null}
                    className={`relative rounded-2xl border-2 transition-colors flex flex-col items-center justify-center py-5 ${
                      show && isCorrect
                        ? 'bg-emerald-100 border-emerald-400'
                        : show && isPicked
                        ? 'bg-rose-100 border-rose-400'
                        : 'bg-amber-50 border-amber-200 hover:bg-amber-100 hover:border-amber-300'
                    }`}
                  >
                    {opt.emoji ? (
                      <span className="text-4xl sm:text-5xl">{opt.emoji}</span>
                    ) : isLetter ? (
                      <span className="text-3xl sm:text-4xl font-heading font-bold text-slate-800">{opt.ar}</span>
                    ) : (
                      <span className="text-2xl font-heading font-bold text-slate-800">{lang === 'ar' ? opt.ar : opt.en}</span>
                    )}
                    {opt.emoji && opt.ar && (
                      <span className="text-xs font-medium text-slate-500 mt-1">{lang === 'ar' ? opt.ar : opt.en}</span>
                    )}
                    {show && isCorrect && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm">✓</motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}