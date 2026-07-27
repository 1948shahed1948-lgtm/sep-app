import React, { useMemo, useState } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle2, XCircle, ArrowRight, RefreshCw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WrittenQuestion from '@/components/math/WrittenQuestion';
import LughatiMatching from '@/components/lughati/LughatiMatching';
import LughatiClassify from '@/components/lughati/LughatiClassify';
import LughatiOrdering from '@/components/lughati/LughatiOrdering';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import AdaptiveChallenge from '@/components/lughati/AdaptiveChallenge';
import { MATH2_S1_TYPE_LABELS } from '@/lib/mathG2S1TextbookBank';
import { withQuestionImages } from '@/lib/bankImagePools';

// يبني سلّمًا تكيّفيًا (صعب ← متوسط ← سهل) من أسئلة الدرس نفسه
function buildLadder(lesson) {
  const qs = (lesson?.questions || []).filter((q) => (q.type === 'mc' || q.type === 'tf') && q.options_ar?.length);
  if (qs.length === 0) return [];
  const toAdaptive = (q) => ({
    question_ar: q.q_ar,
    options_ar: [...q.options_ar],
    correct_value: q.options_ar[Number(q.correct)],
    explanation_ar: q.explanation_ar || 'راجع خطوات الحل في الدرس ثم حاول مرة أخرى.',
    detail_ar: q.explanation_ar || '',
    golden_rule_ar: q.golden_rule_ar || '',
  });
  const mcs = qs.filter((q) => q.type === 'mc');
  const tfs = qs.filter((q) => q.type === 'tf');
  const hard = mcs[0] || qs[0];
  const medium = mcs[1] || mcs[0] || qs[1] || qs[0];
  const easy = tfs[0] || qs[2] || qs[0];
  return [hard, medium, easy].filter(Boolean).map(toAdaptive);
}

// عارض بنك الرياضيات وفق الكتاب الرسمي: فصول → دروس → ٨ أنواع أسئلة
export default function TextbookBankRunner({ chapters, banner, title, subtitle, backTo }) {
  const [view, setView] = useState('chapters'); // chapters | lessons | player
  const [chId, setChId] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [qIdx, setQIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState(null); // mc/tf: idx | interactive: '1'/'0' | reveal: 'reveal'
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentChapter = useMemo(() => chapters.find((c) => c.id === chId) || null, [chapters, chId]);
  const adaptiveLadder = useMemo(() => buildLadder(lesson), [lesson]);

  const openChapter = (c) => { setChId(c.id); setView('lessons'); };
  const openLesson = (l) => {
    if (!l.questions || l.questions.length === 0) return;
    setLesson({ ...l, questions: withQuestionImages(l.questions, 'math', l.title_ar) }); setView('player'); resetPlayer(l);
  };
  const resetPlayer = () => {
    setQIdx(0); setAnswered(false); setResult(null); setCorrectCount(0); setFinished(false);
  };

  const currentQ = lesson?.questions?.[qIdx] || null;
  const topRef = useScrollTopOnChange(qIdx);

  const handleAnswer = (res) => {
    if (answered || !currentQ) return;
    setAnswered(true);
    setResult(res);
    const t = currentQ.type;
    let isCorrect = false;
    if (t === 'mc' || t === 'tf') isCorrect = String(res) === String(currentQ.correct);
    else if (t === 'match' || t === 'classify' || t === 'order') isCorrect = res === '1';
    else isCorrect = true; // reveal types
    if (isCorrect && t !== 'fill' && t !== 'compute' && t !== 'word') setCorrectCount((n) => n + 1);
  };

  const next = () => {
    if (!lesson) return;
    if (qIdx + 1 >= lesson.questions.length) { setFinished(true); return; }
    setQIdx((i) => i + 1); setAnswered(false); setResult(null);
  };

  // ===== الفصول =====
  if (view === 'chapters') {
    return (
      <div className="space-y-6">
        <Header banner={banner} title={title} subtitle={subtitle} backTo={backTo} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((c, i) => {
            const playable = c.lessons.filter((l) => l.questions?.length).length;
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => openChapter(c)}
                className="text-right rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                {/* غلاف الفصل */}
                <div className="relative px-5 py-4" style={{ background: 'linear-gradient(135deg, #556895 0%, #233a69 100%)' }}>
                  <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]" />
                  <div className="relative flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-white/60 mb-0.5">{c.title_en}</p>
                      <h3 className="font-heading font-bold text-white leading-snug">{c.title_ar}</h3>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: c.color + '55', border: `1px solid ${c.color}88` }}>
                      <span className="text-white font-heading font-bold text-sm">{i + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 flex items-center justify-between">
                  <p className="text-xs text-slate-400">{playable} دروس جاهزة</p>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: c.color + '18' }}>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: c.color }} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== دروس الفصل =====
  if (view === 'lessons' && currentChapter) {
    return (
      <div className="space-y-6">
        <Header
          banner={banner}
          title={currentChapter.title_ar}
          subtitle={`${currentChapter.lessons.length} دروس`}
          backTo={backTo}
          onBack={() => setView('chapters')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentChapter.lessons.filter((l) => l.questions?.length > 0).map((l, i) => (
            <button
              key={l.id}
              onClick={() => openLesson(l)}
              className="text-right p-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 bg-white transition-all flex items-center justify-between gap-2"
            >
              <div>
                <p className="text-xs text-slate-400 mb-0.5">الدرس {i + 1}</p>
                <p className="font-heading font-bold text-slate-800 text-sm leading-snug">{l.title_ar}</p>
                <p className="text-xs text-blue-600 mt-1">{l.questions.length} سؤالًا</p>
              </div>
              <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: currentChapter.color + '22' }}><ArrowRight className="w-4 h-4" style={{ color: currentChapter.color }} /></span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ===== مشغّل الأسئلة =====
  if (view === 'player' && lesson && currentQ) {
    if (finished) {
      const pct = lesson.questions.length ? Math.round((correctCount / lesson.questions.length) * 100) : 0;
      return (
        <div className="space-y-6">
          <Header banner={banner} title={lesson.title_ar} subtitle="نتيجة الدرس" backTo={backTo} onBack={() => setView('lessons')} />
          <div className="max-w-md mx-auto rounded-2xl bg-white border border-slate-200 p-8 text-center">
            <Trophy className="w-14 h-14 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-heading font-bold text-slate-800">{pct}٪</p>
            <p className="text-sm text-slate-500 mt-1">أصبت بـ{correctCount} من {lesson.questions.length}</p>
            <div className="flex gap-2 mt-5">
              <Button variant="outline" className="flex-1 gap-2" onClick={() => resetPlayer(lesson)}>
                <RefreshCw className="w-4 h-4" /> إعادة
              </Button>
              <Button className="flex-1" onClick={() => setView('lessons')}>الدروس</Button>
            </div>
          </div>
          {adaptiveLadder.length > 0 && (
            <div className="max-w-md mx-auto">
              <AdaptiveChallenge getLadder={() => adaptiveLadder} unitIdx={0} lessonIdx={0} />
            </div>
          )}
        </div>
      );
    }

    const progress = ((qIdx + (answered ? 1 : 0)) / lesson.questions.length) * 100;
    const interactiveProps = (q) => {
      if (q.type === 'match') return { exercise: { matching_pairs_ar: q.pairs_ar, matching_pairs_en: q.pairs_en } };
      if (q.type === 'classify') return { exercise: { classify_categories_ar: q.categories_ar, classify_categories_en: q.categories_en, classify_items_ar: q.items_ar, classify_items_en: q.items_en } };
      if (q.type === 'order') return { exercise: { ordering_items_ar: q.order_ar, ordering_items_en: q.order_en } };
      return {};
    };

    const isWrong = answered && (
      (['mc', 'tf'].includes(currentQ.type) && String(result) !== String(currentQ.correct)) ||
      (['match', 'classify', 'order'].includes(currentQ.type) && result === '0')
    );

    return (
      <div className="space-y-4">
        <Header banner={banner} title={lesson.title_ar} subtitle={`سؤال ${qIdx + 1} من ${lesson.questions.length}`} backTo={backTo} onBack={() => setView('lessons')} />
        <div className="max-w-2xl mx-auto">
          <div ref={topRef} />
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden mb-3">
            <div className="h-full transition-all" style={{ width: `${progress}%`, background: currentChapter.color }} />
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={qIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                {currentQ.image_url && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 m-4">
                    <img src={currentQ.image_url} alt="صورة السؤال" className="w-full h-44 object-cover" />
                  </div>
                )}
                {['mc', 'tf', 'fill', 'compute', 'word'].includes(currentQ.type) ? (
                  <WrittenQuestion question={currentQ} onAnswer={handleAnswer} isAnswered={answered} result={result} />
                ) : currentQ.type === 'match' ? (
                  <LughatiMatching {...interactiveProps(currentQ)} isAnswered={answered} onAnswer={handleAnswer} />
                ) : currentQ.type === 'classify' ? (
                  <LughatiClassify {...interactiveProps(currentQ)} isAnswered={answered} onAnswer={handleAnswer} />
                ) : currentQ.type === 'order' ? (
                  <LughatiOrdering {...interactiveProps(currentQ)} isAnswered={answered} onAnswer={handleAnswer} />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
          {answered && isWrong && (
            <div className="mt-3">
              <WrongAnswerTeacher
                explanation={currentQ.explanation_ar || 'راجع خطوات الحل في الدرس ثم حاول مرة أخرى.'}
                goldenRule={currentQ.golden_rule_ar}
                advice={currentQ.advice_ar}
                followup={currentQ.followup}
                lang="ar"
                isRTL
              />
            </div>
          )}
          {answered && (
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-sm font-medium flex items-center gap-1.5">
                {(['mc', 'tf'].includes(currentQ.type) && String(result) === String(currentQ.correct)) ||
                 (['match', 'classify', 'order'].includes(currentQ.type) && result === '1')
                  ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">صحيح</span></>
                  : ['fill', 'compute', 'word'].includes(currentQ.type)
                    ? <span className="text-slate-500">تمت المراجعة</span>
                    : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">حاول مرة أخرى</span></>}
              </span>
              <Button onClick={next} className="gap-2">
                {qIdx + 1 >= lesson.questions.length ? 'إنهاء' : 'التالي'} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

function Header({ banner, title, subtitle, backTo, onBack }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={banner} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
      <div className="relative px-6 py-7 sm:px-10 flex items-center gap-4">
        {(onBack || backTo) && (
          onBack ? (
            <button onClick={onBack} className="flex-shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
          ) : (
            <Link to={backTo} className="flex-shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </Link>
          )
        )}
        <div>
          <h1 className="text-lg sm:text-xl font-heading font-bold text-white">{title}</h1>
          {subtitle && <p className="text-xs text-white/70 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}