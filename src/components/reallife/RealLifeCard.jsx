import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const PROJECT_STYLES = {
  neom: { bg: 'from-cyan-500 to-blue-600', chip: 'bg-cyan-50 text-cyan-700', emoji: '🏙️' },
  the_line: { bg: 'from-emerald-500 to-teal-600', chip: 'bg-emerald-50 text-emerald-700', emoji: '📏' },
  red_sea: { bg: 'from-rose-500 to-orange-500', chip: 'bg-rose-50 text-rose-700', emoji: '🏝️' },
  industrial_valley: { bg: 'from-amber-500 to-orange-600', chip: 'bg-amber-50 text-amber-700', emoji: '🏭' },
  qiddiya: { bg: 'from-violet-500 to-purple-600', chip: 'bg-violet-50 text-violet-700', emoji: '🎢' },
  rosnam: { bg: 'from-lime-500 to-green-600', chip: 'bg-lime-50 text-lime-700', emoji: '🏔️' },
  vision2030: { bg: 'from-green-600 to-emerald-700', chip: 'bg-green-50 text-green-700', emoji: '🇸🇦' }
};

export default function RealLifeCard({ connection, index }) {
  const { lang, isRTL } = useLang();
  const [expanded, setExpanded] = useState(false);
  const Chevron = isRTL ? (expanded ? ChevronDown : ChevronUp) : (expanded ? ChevronUp : ChevronDown);
  const style = PROJECT_STYLES[connection.project] || PROJECT_STYLES.vision2030;

  const title = lang === 'ar' ? connection.title_ar : connection.title_en;
  const question = lang === 'ar' ? connection.question_ar : connection.question_en;
  const explanation = lang === 'ar' ? connection.explanation_ar : connection.explanation_en;
  const topic = lang === 'ar' ? connection.lesson_topic_ar : connection.lesson_topic_en;
  const projectName = lang === 'ar' ? connection.project_ar : connection.project_en;
  const subject = lang === 'ar' ? connection.subject_ar : connection.subject_en;
  const visionGoal = lang === 'ar' ? connection.vision_goal_ar : connection.vision_goal_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className={`p-5 bg-gradient-to-r ${style.bg} text-white`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{style.emoji}</span>
              <span className="text-xs font-bold bg-white/20 rounded-full px-2.5 py-1">{projectName}</span>
            </div>
            <h3 className="text-base font-heading font-bold leading-snug">{title}</h3>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className={`text-xs font-semibold rounded-full px-3 py-1 ${style.chip}`}>{subject}</span>
          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-slate-100 text-slate-600">{topic}</span>
        </div>

        <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-100 p-3">
          <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-semibold text-amber-800">{question}</p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 py-1"
        >
          {expanded ? (lang === 'ar' ? 'إخفاء الشرح' : 'Hide explanation') : (lang === 'ar' ? 'عرض الشرح' : 'Show explanation')}
          <Chevron className="w-4 h-4" />
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            <p className="text-sm text-slate-600 leading-relaxed">{explanation}</p>
            <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-100 p-3">
              <span className="text-lg">🇸🇦</span>
              <p className="text-xs font-medium text-green-700">
                {lang === 'ar' ? 'هدف رؤية 2030: ' : 'Vision 2030 goal: '}
                {visionGoal}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}