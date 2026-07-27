import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, BookOpen, Star, Calculator } from 'lucide-react';
import BackArrow from '@/components/layout/BackArrow';

const CHAPTERS = [
  {
    id: 'ch6',
    num: 6,
    title_ar: 'الفصل السادس: العمليات على الكسور الاعتيادية',
    title_en: 'Operations on Fractions',
    emoji: '🔢',
    color: '#2563eb',
    gradient: 'from-blue-600 to-indigo-600',
    path: '/math-grade6-ch6',
  },
  {
    id: 'ch8',
    num: 8,
    title_ar: 'الفصل الثامن: النسبة المئوية والاحتمالات',
    title_en: 'Percent & Probability',
    emoji: '📊',
    color: '#7c3aed',
    gradient: 'from-violet-600 to-purple-600',
    path: '/math-grade6-ch8',
  },
  {
    id: 'ch9',
    num: 9,
    title_ar: 'الفصل التاسع: الهندسة — الزوايا والمضلعات',
    title_en: 'Geometry — Angles & Polygons',
    emoji: '📐',
    color: '#1d4ed8',
    gradient: 'from-blue-700 to-indigo-700',
    path: '/math-grade6-ch9',
  },
  {
    id: 'ch10',
    num: 10,
    title_ar: 'الفصل العاشر (١): القياس — المحيط والمساحة والحجم',
    title_en: 'Measurement — Perimeter, Area & Volume',
    emoji: '⭕',
    color: '#0891b2',
    gradient: 'from-teal-600 to-cyan-600',
    path: '/math-grade6-ch10',
  },
  {
    id: 'ch10p2',
    num: '١٠ب',
    title_ar: 'الفصل العاشر (٢): مساحة المثلث وحجم المنشور ومساحة السطح',
    title_en: 'Triangle Area, Prism Volume & Surface Area',
    emoji: '📐',
    color: '#059669',
    gradient: 'from-emerald-600 to-green-600',
    path: '/math-grade6-ch10-p2',
  },
];

export default function MathGrade6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #7c3aed 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-3xl mx-auto px-4 py-10 sm:py-14 text-center text-white">
          <BackArrow to="/question-bank/grades" label="رجوع للبنوك" className="mb-4" />
          <div className="text-5xl mb-4">🔢</div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">رياضيات — الصف السادس</h1>
          <p className="text-white/80 text-sm">جميع فصول الرياضيات مجمّعة في مكان واحد · اختر الفصل للبدء</p>
          <div className="flex justify-center gap-4 mt-5 text-xs flex-wrap">
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{CHAPTERS.length}</p>
              <p className="text-white/70">فصول</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter cards */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        {CHAPTERS.map((ch, i) => (
          <motion.div key={ch.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Link
              to={ch.path}
              className="block w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all text-right group"
            >
              <div className="flex items-center gap-4 p-5">
                <div className={`w-16 h-16 rounded-2xl flex-shrink-0 bg-gradient-to-br ${ch.gradient} flex items-center justify-center text-3xl font-black text-white shadow-md`}>
                  {ch.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-400 mb-0.5">{ch.title_en}</p>
                  <h2 className="text-base font-bold text-slate-800 leading-snug">{ch.title_ar}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 font-medium">الفصل {ch.num}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium">
                      <BookOpen className="w-3 h-3" /> ابدأ التدريب
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <Star className="w-5 h-5 text-amber-400" />
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-[-3px] transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Info note */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="rounded-2xl bg-blue-50 border border-blue-100 p-4 flex items-start gap-3 mt-6">
          <Calculator className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-blue-800">جميع فصول الرياضيات في مكان واحد</p>
            <p className="text-xs text-blue-600 mt-1">اختر الفصل الذي تريد التدرب عليه · كل فصل يحتوي على وحدات ودروس تفاعلية متنوعة</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}