import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, Lightbulb, Hammer, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { ART_GRADE2_UNITS } from '@/lib/artGrade2S2';

function TopicModal({ topic, unitColor, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
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
            {topic.activity?.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: unitColor + '20' }}>
                    <Hammer className="w-4 h-4" style={{ color: unitColor }} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-700">خطوات النشاط</h3>
                </div>
                <ol className="space-y-2">
                  {topic.activity.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: unitColor }}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ArtGrade2S2() {
  const { isRTL } = useLang();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const Back = isRTL ? ChevronRight : ChevronLeft;

  return (
    <div className="space-y-8" dir="rtl">
      <PageHeader
        title="التربية الفنية — الصف الثاني — الفصل الثاني"
        subtitle="الوحدات الأربع: الرسم • الزخرفة • الطباعة • التشكيل"
        backTo="/question-bank/grade_2/second"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف الثاني', path: '/question-bank/grade_2' },
          { label: 'الفصل الثاني', path: '/question-bank/grade_2/second' },
          { label: 'التربية الفنية' },
        ]}
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {ART_GRADE2_UNITS.map((unit, ui) => (
          <motion.div
            key={unit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ui * 0.08 }}
            className="rounded-2xl overflow-hidden shadow-md border border-slate-100"
          >
            {/* Unit header */}
            <div className="relative h-28 overflow-hidden">
              <img src={unit.image} alt={unit.title_ar} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${unit.color}dd, ${unit.color}99)` }} />
              <div className="absolute inset-0 flex items-center px-5 gap-3">
                <span className="text-4xl">{unit.emoji}</span>
                <div>
                  <h2 className="text-xl font-heading font-bold text-white">{unit.title_ar}</h2>
                  <p className="text-white/80 text-sm">{unit.topics.length} موضوع</p>
                </div>
              </div>
            </div>

            {/* Topics list */}
            <div className="bg-white p-4 space-y-2">
              {unit.topics.map((topic, ti) => (
                <button
                  key={ti}
                  onClick={() => { setSelectedTopic(topic); setSelectedUnit(unit); }}
                  className="w-full flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-right group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: unit.color + '15' }}>
                      <BookOpen className="w-4 h-4" style={{ color: unit.color }} />
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{topic.title_ar}</span>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center transition-colors">
                    <Back className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedTopic && selectedUnit && (
        <TopicModal
          topic={selectedTopic}
          unitColor={selectedUnit.color}
          onClose={() => { setSelectedTopic(null); setSelectedUnit(null); }}
        />
      )}
    </div>
  );
}