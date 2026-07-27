import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { ChevronRight, ChevronLeft, Compass, Loader2, Building2 } from 'lucide-react';
import RealLifeCard from '@/components/reallife/RealLifeCard';

const PROJECTS = [
  { key: 'neom', ar: 'نيوم', en: 'NEOM', emoji: '🏙️', color: 'from-cyan-500 to-blue-600' },
  { key: 'the_line', ar: 'ذا لاين', en: 'THE LINE', emoji: '📏', color: 'from-emerald-500 to-teal-600' },
  { key: 'red_sea', ar: 'البحر الأحمر', en: 'Red Sea', emoji: '🏝️', color: 'from-rose-500 to-orange-500' },
  { key: 'industrial_valley', ar: 'الوادي الصناعي', en: 'Industrial Valley', emoji: '🏭', color: 'from-amber-500 to-orange-600' },
  { key: 'qiddiya', ar: 'القدية', en: 'Qiddiya', emoji: '🎢', color: 'from-violet-500 to-purple-600' },
  { key: 'rosnam', ar: 'روزنام', en: 'ROSNAM', emoji: '🏔️', color: 'from-lime-500 to-green-600' },
];

const SUBJECTS = [
  { key: 'physics', ar: 'الفيزياء', en: 'Physics' },
  { key: 'math', ar: 'الرياضيات', en: 'Math' },
  { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry' },
  { key: 'biology', ar: 'الأحياء', en: 'Biology' },
  { key: 'geology', ar: 'علوم الأرض', en: 'Earth Sciences' },
];

export default function CurriculumInLife() {
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronLeft : ChevronRight;

  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState('all');
  const [activeSubject, setActiveSubject] = useState('all');
  const loadConnections = useCallback(async () => {
    setLoading(true);
    try {
      const data = await base44.entities.RealLifeConnection.list('-order', 100);
      setConnections(data);
    } catch {
      setConnections([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadConnections();
  }, [loadConnections]);

  const filtered = connections.filter((c) => {
    if (activeProject !== 'all' && c.project !== activeProject) return false;
    if (activeSubject !== 'all' && (c.subject_en || '').toLowerCase() !== SUBJECTS.find((s) => s.key === activeSubject)?.en.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link to="/" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
          <Back className="w-5 h-5 text-slate-500" />
        </Link>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
          <Compass className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'المنهج في الحياة' : 'Curriculum in Real Life'}
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {lang === 'ar'
            ? 'أين نستخدم ما ندرسه في حياتنا؟ اكتشف كيف ترتبط مفاهيم المنهج السعودي بمشاريع رؤية المملكة 2030 العملاقة مثل نيوم وذا لاين والبحر الأحمر.'
            : 'Where do we use what we study in real life? Discover how Saudi curriculum concepts connect to Vision 2030 megaprojects like NEOM, THE LINE, and the Red Sea.'}
        </p>
      </motion.div>

      {/* Vision 2030 banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white text-center"
      >
        <p className="text-4xl mb-2">🇸🇦</p>
        <p className="text-lg font-heading font-bold">
          {lang === 'ar' ? 'رؤية المملكة 2030' : 'Saudi Vision 2030'}
        </p>
        <p className="text-sm text-green-50 mt-1">
          {lang === 'ar'
            ? 'نحو مجتمع المعرفة والاقتصاد المتنوع — حيث يصبح كل دررس لبنة في مستقبل المملكة'
            : 'Toward a knowledge society & diversified economy — every lesson a brick in the Kingdom\'s future'}
        </p>
      </motion.div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold text-slate-400 mb-2">{lang === 'ar' ? 'المشاريع' : 'Projects'}</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip label={lang === 'ar' ? 'الكل' : 'All'} active={activeProject === 'all'} onClick={() => setActiveProject('all')} colorClass="bg-slate-100 text-slate-700" />
            {PROJECTS.map((p) => (
              <FilterChip
                key={p.key}
                label={`${p.emoji} ${lang === 'ar' ? p.ar : p.en}`}
                active={activeProject === p.key}
                onClick={() => setActiveProject(p.key)}
                colorClass={`bg-gradient-to-r ${p.color} text-white`}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-slate-400 mb-2">{lang === 'ar' ? 'المواد' : 'Subjects'}</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip label={lang === 'ar' ? 'الكل' : 'All'} active={activeSubject === 'all'} onClick={() => setActiveSubject('all')} colorClass="bg-slate-100 text-slate-700" />
            {SUBJECTS.map((s) => (
              <FilterChip
                key={s.key}
                label={lang === 'ar' ? s.ar : s.en}
                active={activeSubject === s.key}
                onClick={() => setActiveSubject(s.key)}
                colorClass="bg-blue-100 text-blue-700"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
          <p className="text-sm text-slate-500">{lang === 'ar' ? 'جاري تحميل الروابط...' : 'Loading connections...'}</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100">
            <Building2 className="w-10 h-10 text-slate-300" />
          </div>
          <p className="text-slate-500">
            {lang === 'ar' ? 'لا توجد روابط محفوظة لهذا الاختيار بعد' : 'No stored connections for this filter yet'}
          </p>
          <p className="text-xs text-slate-400">
            {lang === 'ar' ? 'سيتم إضافتها لاحقاً من قبل المشرف' : 'They will be added by an admin later'}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((c, i) => (
            <RealLifeCard key={c.id} connection={c} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({ label, active, onClick, colorClass }) {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium rounded-full px-4 py-2 transition-all ${
        active ? `${colorClass} shadow-sm scale-105` : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
      }`}
    >
      {label}
    </button>
  );
}