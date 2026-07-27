import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, XCircle, BookOpen, Star, RotateCcw, Home, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LIFE_SKILLS_G3_CHAPTERS } from '@/lib/lifeSkillsGrade3S2';
import { withQuestionImages } from '@/lib/bankImagePools';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

// ===== مكوّن السؤال الموحّد =====
function QuestionRenderer({ q, onAnswer, isAnswered }) {
  const [selected, setSelected] = useState(null);
  const [dragItems, setDragItems] = useState(null);
  const [bins, setBins] = useState(null);
  const [matchSel, setMatchSel] = useState(null);
  const [connections, setConnections] = useState({});

  useEffect(() => {
    setSelected(null);
    setDragItems(null);
    setBins(null);
    setMatchSel(null);
    setConnections({});
    if (q.type === 'classify') {
      setDragItems([...q.items_ar].sort(() => Math.random() - 0.5));
      setBins(q.categories_ar.map(() => []));
    }
  }, [q.id]);

  const handleMC = (idx) => {
    if (isAnswered || selected !== null) return;
    setSelected(idx);
    onAnswer(idx === q.correct_index);
  };

  const handleTF = (val) => {
    if (isAnswered || selected !== null) return;
    setSelected(val);
    const correct = q.correct_answer === 'true' ? true : false;
    onAnswer(val === correct);
  };

  const handleFill = (idx) => {
    if (isAnswered || selected !== null) return;
    setSelected(idx);
    onAnswer(idx === q.correct_index);
  };

  // تصنيف بسيط بالضغط
  const handleClassifyPick = (binIdx) => {
    if (!dragItems || dragItems.length === 0) return;
    const item = dragItems[0];
    const newBins = bins.map((b, i) => i === binIdx ? [...b, item] : b);
    const newItems = dragItems.slice(1);
    setBins(newBins);
    setDragItems(newItems);
    if (newItems.length === 0) {
      // تقييم
      let allCorrect = true;
      newBins.forEach((bin, catIdx) => {
        bin.forEach(it => {
          if (it.correct_category !== catIdx) allCorrect = false;
        });
      });
      onAnswer(allCorrect);
    }
  };

  // مطابقة بسيطة
  const handleMatchPick = (side, idx) => {
    if (isAnswered) return;
    if (!matchSel) { setMatchSel({ side, idx }); return; }
    if (matchSel.side === side) { setMatchSel({ side, idx }); return; }
    const rightIdx = side === 'right' ? idx : matchSel.idx;
    const leftIdx = side === 'left' ? idx : matchSel.idx;
    const newConns = { ...connections, [rightIdx]: leftIdx };
    setConnections(newConns);
    setMatchSel(null);
    if (Object.keys(newConns).length === q.pairs_ar.length) {
      let allCorrect = true;
      q.pairs_ar.forEach((pair, i) => {
        const expected = q.pairs_ar.findIndex((p, j) => p.left === q.pairs_ar[i].left);
        if (newConns[i] !== i) allCorrect = false;
      });
      onAnswer(allCorrect);
    }
  };

  // ترتيب بسيط
  const [orderItems, setOrderItems] = useState(null);
  useEffect(() => {
    if (q.type === 'ordering') {
      setOrderItems([...q.items_ar].sort(() => Math.random() - 0.5));
    }
  }, [q.id]);

  const moveItem = (from, to) => {
    if (!orderItems) return;
    const arr = [...orderItems];
    const [moved] = arr.splice(from, 1);
    arr.splice(to, 0, moved);
    setOrderItems(arr);
  };

  const checkOrder = () => {
    if (!orderItems) return;
    const correct = q.correct_order
      ? q.correct_order.map(i => q.items_ar[i])
      : q.items_ar;
    const isCorrect = orderItems.join('|') === correct.join('|');
    setSelected('checked');
    onAnswer(isCorrect);
  };

  // ===== عرض حسب النوع =====
  if (q.type === 'multiple_choice' || q.type === 'fill_blank') {
    return (
      <div className="space-y-3">
        {q.options_ar.map((opt, i) => {
          const isPicked = selected === i;
          const isCorrect = i === q.correct_index;
          const showResult = selected !== null;
          return (
            <button key={i} disabled={showResult} onClick={() => q.type === 'fill_blank' ? handleFill(i) : handleMC(i)}
              className={`w-full text-right px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all
                ${!showResult ? 'bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer' : ''}
                ${showResult && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${showResult && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${showResult && !isPicked && !isCorrect ? 'bg-white border-slate-200 text-slate-400' : ''}
              `}
            >
              <span className="flex items-center gap-2">
                {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                {showResult && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'true_false') {
    const showResult = selected !== null;
    return (
      <div className="flex gap-3">
        {[{ label: 'صحيح ✅', val: true }, { label: 'خطأ ❌', val: false }].map(({ label, val }) => {
          const isPicked = selected === val;
          const isCorrect = val === (q.correct_answer === 'true');
          return (
            <button key={label} disabled={showResult} onClick={() => handleTF(val)}
              className={`flex-1 py-4 rounded-xl border-2 text-base font-bold transition-all
                ${!showResult ? 'bg-white border-slate-200 hover:border-emerald-400 cursor-pointer' : ''}
                ${showResult && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${showResult && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${showResult && !isPicked && !isCorrect ? 'bg-slate-50 border-slate-200 text-slate-400' : ''}
              `}
            >{label}</button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'classify' && dragItems !== null) {
    const done = dragItems.length === 0;
    return (
      <div className="space-y-4">
        {!done && (
          <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center">
            <p className="text-xs text-slate-500 mb-2">صنِّف هذا العنصر:</p>
            <span className="text-lg font-bold text-slate-800 bg-white px-4 py-2 rounded-lg shadow-sm border">{dragItems[0].text}</span>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {q.categories_ar.map((cat, i) => (
                <button key={i} onClick={() => handleClassifyPick(i)}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-600 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bins && bins.map((bin, i) => (
            <div key={i} className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 min-h-[60px]">
              <p className="text-xs font-bold text-emerald-700 mb-2">{q.categories_ar[i]}</p>
              <div className="flex flex-wrap gap-1">
                {bin.map((it, j) => (
                  <span key={j} className="text-xs bg-white border border-emerald-300 rounded-full px-2 py-0.5 text-emerald-800">{it.text}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (q.type === 'matching') {
    const answered = Object.keys(connections).length === q.pairs_ar.length;
    return (
      <div className="space-y-3">
        <p className="text-xs text-slate-500">اضغط عنصراً من اليمين ثم عنصراً من اليسار لتوصيلهما:</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            {q.pairs_ar.map((pair, i) => (
              <button key={i} onClick={() => handleMatchPick('right', i)}
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                  ${matchSel?.side === 'right' && matchSel?.idx === i ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-300'}
                  ${connections[i] !== undefined ? 'border-emerald-400 bg-emerald-50' : ''}
                `}>{pair.right}</button>
            ))}
          </div>
          <div className="space-y-2">
            {q.pairs_ar.map((pair, i) => (
              <button key={i} onClick={() => handleMatchPick('left', i)}
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                  ${matchSel?.side === 'left' && matchSel?.idx === i ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-300'}
                  ${Object.values(connections).includes(i) ? 'border-emerald-400 bg-emerald-50' : ''}
                `}>{pair.left}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (q.type === 'ordering' && orderItems) {
    const checked = selected === 'checked';
    return (
      <div className="space-y-3">
        <p className="text-xs text-slate-500">اسحب أو اضغط السهم لإعادة الترتيب:</p>
        {orderItems.map((item, i) => (
          <div key={item} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-xl px-3 py-2">
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">{i + 1}</span>
            <span className="flex-1 text-sm font-medium text-slate-800 text-right">{item}</span>
            <div className="flex flex-col gap-0.5">
              <button disabled={i === 0 || checked} onClick={() => moveItem(i, i - 1)}
                className="text-slate-400 hover:text-slate-700 disabled:opacity-30">▲</button>
              <button disabled={i === orderItems.length - 1 || checked} onClick={() => moveItem(i, i + 1)}
                className="text-slate-400 hover:text-slate-700 disabled:opacity-30">▼</button>
            </div>
          </div>
        ))}
        {!checked && (
          <Button onClick={checkOrder} className="w-full bg-emerald-600 hover:bg-emerald-700">تحقق من الترتيب</Button>
        )}
      </div>
    );
  }

  return null;
}

// ===== مشغّل الدرس =====
function LessonRunner({ lesson, onBack }) {
  const questions = withQuestionImages(lesson.getQuestions(), 'lifeSkills');
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);

  const q = questions[idx];

  const handleAnswer = (correct) => {
    setAnswered(true);
    setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (containerRef.current) {
        const offset = containerRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 300);
  };

  const next = () => {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setIdx(i => i + 1);
    setAnswered(false);
    setLastCorrect(null);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-center py-10 px-4 space-y-6">
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-slate-800">
          {pct >= 80 ? 'أحسنت! نتيجة رائعة' : pct >= 50 ? 'جيد! واصل التدريب' : 'راجع الدرس مجدداً'}
        </h2>
        <p className="text-slate-500">نتيجتك: {score} من {questions.length} ({pct}٪)</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setLastCorrect(null); setDone(false); }}
            variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />إعادة</Button>
          <Button onClick={onBack} className="bg-emerald-600 hover:bg-emerald-700 gap-2">
            <ArrowRight className="w-4 h-4" />العودة للدروس</Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div ref={containerRef} className="space-y-4">
      {/* شريط التقدم */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2">
          <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((idx) / questions.length) * 100}%` }} />
        </div>
        <span className="text-xs font-medium text-slate-500">{idx + 1} / {questions.length}</span>
        <span className="text-xs font-bold text-emerald-600">✅ {score}</span>
      </div>

      {/* السؤال */}
      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5 font-bold flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <p className="text-base font-bold text-slate-800 leading-relaxed">{q.question_ar}</p>
          </div>

          {(q.image || q.image_url) && (
            <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
              <img src={q.image || q.image_url} alt="" className="w-full max-h-44 object-cover" />
            </div>
          )}

          <QuestionRenderer q={q} onAnswer={handleAnswer} isAnswered={answered} />

          {answered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {lastCorrect ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-emerald-800">إجابة صحيحة! 🌟</p>
                </div>
              ) : (
                <WrongAnswerTeacher
                  explanation={q.explanation_ar}
                  goldenRule={q.explanation_ar}
                  lang="ar"
                  isRTL={true}
                />
              )}
              <Button onClick={next} className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 gap-2">
                {idx + 1 >= questions.length ? <><Trophy className="w-4 h-4" />إنهاء الدرس</> : <>السؤال التالي<ArrowRight className="w-4 h-4" /></>}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ===== الصفحة الرئيسية =====
export default function LifeSkillsGrade3S2() {
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  // عرض مشغّل الدرس
  if (activeChapter !== null && activeLesson !== null) {
    const chapter = LIFE_SKILLS_G3_CHAPTERS[activeChapter];
    const lesson = chapter.lessons[activeLesson];
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6" dir="rtl">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* رأس الصفحة */}
          <div className="rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveLesson(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div>
                <p className="text-xs text-white/70">{chapter.title_ar}</p>
                <h1 className="text-lg font-bold">{lesson.title_ar}</h1>
              </div>
            </div>
          </div>
          <LessonRunner lesson={lesson} onBack={() => setActiveLesson(null)} />
        </div>
      </div>
    );
  }

  // عرض دروس الوحدة
  if (activeChapter !== null) {
    const chapter = LIFE_SKILLS_G3_CHAPTERS[activeChapter];
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6" dir="rtl">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveChapter(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div>
                <h1 className="text-xl font-bold">{chapter.title_ar}</h1>
                <p className="text-sm text-white/70">{chapter.subtitle_ar}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chapter.lessons.map((lesson, i) => (
              <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveLesson(i)}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-right hover:shadow-md hover:border-emerald-200 transition-all flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={lesson.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title_ar}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{lesson.count} أسئلة</p>
                </div>
                <BookOpen className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // الصفحة الرئيسية
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50" dir="rtl">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 60%, #065f46 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-3xl mx-auto px-4 py-10 sm:py-14 text-center text-white">
          <Link to="/question-bank/grades" className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 mb-4 transition-colors">
            <Home className="w-3.5 h-3.5" />بنك الأسئلة
          </Link>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white/30">
              <img src="https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/2072902e5_generated_image.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">مهارات الحياة والأسرة</h1>
          <p className="text-white/80 text-sm">الصف الثالث — الفصل الثاني | الوحدة الرابعة: غذائي</p>
          <div className="flex justify-center gap-6 mt-5 text-xs">
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="font-bold text-lg">٦</p>
              <p className="text-white/70">دروس</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="font-bold text-lg">٤٨</p>
              <p className="text-white/70">سؤالاً</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="font-bold text-lg">٥</p>
              <p className="text-white/70">أنواع أسئلة</p>
            </div>
          </div>
        </div>
      </div>

      {/* الوحدات */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        {LIFE_SKILLS_G3_CHAPTERS.map((chapter, i) => (
          <motion.button key={chapter.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActiveChapter(i)}
            className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all text-right">
            <div className="flex items-center gap-4 p-5">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <img src={chapter.coverImage} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-slate-800">{chapter.title_ar}</h2>
                <p className="text-xs text-slate-500 mt-0.5">{chapter.subtitle_ar}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">{chapter.lessons.length} دروس</span>
                  <span className="text-xs bg-teal-100 text-teal-700 rounded-full px-2 py-0.5">{chapter.lessons.reduce((s, l) => s + l.count, 0)} سؤالاً</span>
                </div>
              </div>
              <Star className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}