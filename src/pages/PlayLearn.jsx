import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { Hash, Layers, Brain, Baby, BookOpen, ArrowLeft, ArrowRight, Sparkles, Hammer, Music, Circle, Search, Route, CircleDot, Puzzle, Eye, Activity } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CountingGame from '@/components/play/CountingGame';
import MatchGame from '@/components/play/MatchGame';
import MemoryGame from '@/components/play/MemoryGame';
import WhackAMole from '@/components/play/WhackAMole';
import TicTacToe from '@/components/play/TicTacToe';
import SimonGame from '@/components/play/SimonGame';
import BalloonPop from '@/components/play/BalloonPop';
import FindDifference from '@/components/play/FindDifference';
import MazeGame from '@/components/play/MazeGame';
import ConnectDots from '@/components/play/ConnectDots';
import SlidingPuzzle from '@/components/play/SlidingPuzzle';
import ISpyGame from '@/components/play/ISpyGame';
import SnakeGame from '@/components/play/SnakeGame';

const GAMES = [
  { key: 'count', titleAr: 'لعبة العد', titleEn: 'Counting', icon: Hash, color: 'from-sky-400 to-blue-500' },
  { key: 'match', titleAr: 'لعبة المطابقة', titleEn: 'Matching', icon: Layers, color: 'from-violet-400 to-purple-500' },
  { key: 'memory', titleAr: 'لعبة الذاكرة', titleEn: 'Memory', icon: Brain, color: 'from-amber-400 to-orange-500' },
  { key: 'whack', titleAr: 'الخلد', titleEn: 'Whack-a-Mole', icon: Hammer, color: 'from-emerald-400 to-green-500' },
  { key: 'tictac', titleAr: 'إكس-أو', titleEn: 'Tic-Tac-Toe', icon: Hash, color: 'from-rose-400 to-red-500' },
  { key: 'simon', titleAr: 'سايمون', titleEn: 'Simon Says', icon: Music, color: 'from-fuchsia-400 to-pink-500' },
  { key: 'balloon', titleAr: 'فقع البالونات', titleEn: 'Balloon Pop', icon: Circle, color: 'from-cyan-400 to-sky-500' },
  { key: 'diff', titleAr: 'أوجد الفرق', titleEn: 'Find Difference', icon: Search, color: 'from-indigo-400 to-violet-500' },
  { key: 'maze', titleAr: 'المتاهة', titleEn: 'Maze', icon: Route, color: 'from-lime-400 to-green-500' },
  { key: 'dots', titleAr: 'وصل النقاط', titleEn: 'Connect Dots', icon: CircleDot, color: 'from-orange-400 to-amber-500' },
  { key: 'puzzle', titleAr: 'تركيب الصورة', titleEn: 'Sliding Puzzle', icon: Puzzle, color: 'from-teal-400 to-cyan-500' },
  { key: 'ispy', titleAr: 'ابحث وأجد', titleEn: 'I Spy', icon: Eye, color: 'from-purple-400 to-fuchsia-500' },
  { key: 'snake', titleAr: 'الثعبان', titleEn: 'Snake', icon: Activity, color: 'from-emerald-500 to-teal-600' },
];

export default function PlayLearn() {
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [stage, setStage] = useState(null); // 'kg' | 'g1'
  const [game, setGame] = useState(null);

  const back = () => {
    if (game) setGame(null);
    else if (stage) setStage(null);
  };

  if (game) {
    if (game === 'count') return <CountingGame stage={stage} onBack={back} />;
    if (game === 'match') return <MatchGame stage={stage} onBack={back} />;
    if (game === 'memory') return <MemoryGame stage={stage} onBack={back} />;
    if (game === 'whack') return <WhackAMole stage={stage} onBack={back} />;
    if (game === 'tictac') return <TicTacToe stage={stage} onBack={back} />;
    if (game === 'simon') return <SimonGame stage={stage} onBack={back} />;
    if (game === 'balloon') return <BalloonPop stage={stage} onBack={back} />;
    if (game === 'diff') return <FindDifference stage={stage} onBack={back} />;
    if (game === 'maze') return <MazeGame stage={stage} onBack={back} />;
    if (game === 'dots') return <ConnectDots stage={stage} onBack={back} />;
    if (game === 'puzzle') return <SlidingPuzzle stage={stage} onBack={back} />;
    if (game === 'ispy') return <ISpyGame stage={stage} onBack={back} />;
    return <SnakeGame stage={stage} onBack={back} />;
  }

  const stages = [
    { key: 'kg', titleAr: 'الروضة', titleEn: 'Kindergarten', icon: Baby, color: 'from-pink-400 to-rose-500', descAr: 'ألعاب بسيطة: العد ١-٥، أشكال، ذاكرة بـ٤ أزواج', descEn: 'Simple games: count 1-5, shapes, 4-pair memory' },
    { key: 'g1', titleAr: 'الصف الأول', titleEn: 'Grade 1', icon: BookOpen, color: 'from-sky-400 to-blue-500', descAr: 'عد حتى ١٠، ربط كلمات، ذاكرة بـ٦ أزواج', descEn: 'Count to 10, word matching, 6-pair memory' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'التعلم باللعب' : 'Learning Through Play'}
        subtitle={lang === 'ar' ? 'روضة وصف أول — ألعاب تفاعلية ممتعة' : 'Kindergarten & Grade 1 — fun interactive games'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'التعلم باللعب' : 'Play' }]}
      />

      {!stage ? (
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {stages.map((s, i) => (
            <motion.button
              key={s.key}
              onClick={() => setStage(s.key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group text-center rounded-3xl bg-white border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-1">
                {lang === 'ar' ? s.titleAr : s.titleEn}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {lang === 'ar' ? s.descAr : s.descEn}
              </p>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {lang === 'ar' ? (stage === 'kg' ? 'مرحلة الروضة' : 'الصف الأول') : stage === 'kg' ? 'Kindergarten' : 'Grade 1'}
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {GAMES.map((g, i) => (
              <motion.button
                key={g.key}
                onClick={() => setGame(g.key)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group text-center rounded-3xl bg-white border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <g.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900">
                  {lang === 'ar' ? g.titleAr : g.titleEn}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-700">
                  {lang === 'ar' ? 'العب الآن' : 'Play now'}
                  <Arrow className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}