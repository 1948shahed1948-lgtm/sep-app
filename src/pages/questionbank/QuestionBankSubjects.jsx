import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { getGradeName } from '@/lib/gradeData';
import { ArrowLeft, ArrowRight, BookMarked, Calculator, FlaskConical, Globe, HeartHandshake, Palette, Star, Map, Laptop, Atom, FlaskRound, Leaf, Sprout, Library, GraduationCap, BookOpen, Wrench, Landmark, Trees, Dumbbell, Languages, ShieldCheck, Brain, Scale } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const SEMESTER_LABELS = {
  first: { ar: 'الفصل الأول', en: 'Semester 1' },
  second: { ar: 'الفصل الثاني', en: 'Semester 2' },
};

const STAGE_SUBJECTS = {
  primary: [
    { key: 'my_language', name_ar: 'لغتي', name_en: 'My Language', Icon: BookMarked, bg: '#8b5cf6' },
    { key: 'math', name_ar: 'الرياضيات', name_en: 'Mathematics', Icon: Calculator, bg: '#3a57e8' },
    { key: 'science', name_ar: 'العلوم', name_en: 'Science', Icon: FlaskConical, bg: '#109673' },
    { key: 'english', name_ar: 'اللغة الإنجليزية', name_en: 'English', Icon: Globe, bg: '#6366f1' },
    { key: 'islamic', name_ar: 'التربية الإسلامية', name_en: 'Islamic Studies', Icon: Star, bg: '#b45309' },
    { key: 'social', name_ar: 'الاجتماعيات', name_en: 'Social Studies', Icon: Map, bg: '#0891b2' },
    { key: 'art_education', name_ar: 'التربية الفنية', name_en: 'Art Education', Icon: Palette, bg: '#ec4899' },
    { key: 'life_skills', name_ar: 'المهارات الحياتية', name_en: 'Life Skills', Icon: HeartHandshake, bg: '#f43f5e' },
    { key: 'computer', name_ar: 'المهارات الرقمية', name_en: 'Digital Skills', Icon: Laptop, bg: '#475569' },
    { key: 'quran_tajweed', name_ar: 'القرآن الكريم والتجويد', name_en: 'Quran & Tajweed', Icon: BookOpen, bg: '#059669' },
  ],
  intermediate: [
    { key: 'arabic', name_ar: 'اللغة العربية', name_en: 'Arabic', Icon: BookMarked, bg: '#8b5cf6' },
    { key: 'math', name_ar: 'الرياضيات', name_en: 'Mathematics', Icon: Calculator, bg: '#3a57e8' },
    { key: 'science', name_ar: 'العلوم', name_en: 'Science', Icon: FlaskConical, bg: '#109673' },
    { key: 'english', name_ar: 'اللغة الإنجليزية', name_en: 'English', Icon: Globe, bg: '#6366f1' },
    { key: 'islamic', name_ar: 'التربية الإسلامية', name_en: 'Islamic Studies', Icon: Star, bg: '#b45309' },
    { key: 'social', name_ar: 'الاجتماعيات', name_en: 'Social Studies', Icon: Map, bg: '#0891b2' },
    { key: 'computer', name_ar: 'المهارات الرقمية', name_en: 'Digital Skills', Icon: Laptop, bg: '#475569' },
    { key: 'life_skills', name_ar: 'المهارات الحياتية والأسرية', name_en: 'Life & Family Skills', Icon: HeartHandshake, bg: '#f43f5e' },
  ],
  secondary: [
    { key: 'arabic', name_ar: 'اللغة العربية', name_en: 'Arabic', Icon: BookMarked, bg: '#8b5cf6' },
    { key: 'math', name_ar: 'الرياضيات', name_en: 'Mathematics', Icon: Calculator, bg: '#3a57e8' },
    { key: 'physics', name_ar: 'الفيزياء', name_en: 'Physics', Icon: Atom, bg: '#1e40af' },
    { key: 'chemistry', name_ar: 'الكيمياء', name_en: 'Chemistry', Icon: FlaskRound, bg: '#0e7490' },
    { key: 'biology', name_ar: 'الأحياء', name_en: 'Biology', Icon: Leaf, bg: '#15803d' },
    { key: 'english', name_ar: 'اللغة الإنجليزية', name_en: 'English', Icon: Globe, bg: '#6366f1' },
    { key: 'islamic', name_ar: 'التربية الإسلامية', name_en: 'Islamic Studies', Icon: Star, bg: '#b45309' },
    { key: 'computer', name_ar: 'التقنية الرقمية', name_en: 'Digital Skills', Icon: Laptop, bg: '#475569' },
    { key: 'social', name_ar: 'الدراسات الاجتماعية', name_en: 'Social Studies', Icon: Map, bg: '#0891b2' },
    { key: 'geography', name_ar: 'الجغرافيا', name_en: 'Geography', Icon: Map, bg: '#0d9488' },
    { key: 'literary_studies', name_ar: 'الدراسات الأدبية', name_en: 'Literary Studies', Icon: BookOpen, bg: '#6d28d9' },
    { key: 'earth_space', name_ar: 'علوم الأرض والفضاء', name_en: 'Earth & Space Sciences', Icon: Globe, bg: '#312e81' },
    { key: 'vocational', name_ar: 'التربية المهنية', name_en: 'Vocational Education', Icon: Wrench, bg: '#7c3aed' },
    { key: 'hadith', name_ar: 'الحديث الشريف', name_en: 'Prophetic Hadith', Icon: BookOpen, bg: '#059669' },
    { key: 'financial_literacy', name_ar: 'المعرفة المالية', name_en: 'Financial Literacy', Icon: Landmark, bg: '#ca8a04' },
    { key: 'environmental_science', name_ar: 'علم البيئة', name_en: 'Environmental Science', Icon: Trees, bg: '#16a34a' },
    { key: 'fitness_health', name_ar: 'اللياقة والثقافة الصحية', name_en: 'Fitness & Health Culture', Icon: Dumbbell, bg: '#0d9488' },
    { key: 'art_book', name_ar: 'كتاب الفنون', name_en: 'Art Book', Icon: Palette, bg: '#e11d48' },
    { key: 'language_competencies', name_ar: 'الكفايات اللغوية', name_en: 'Language Competencies', Icon: Languages, bg: '#9333ea' },
    { key: 'digital_citizenship', name_ar: 'المواطنة الرقمية', name_en: 'Digital Citizenship', Icon: ShieldCheck, bg: '#0ea5e9' },
    { key: 'psychological_social_studies', name_ar: 'الدراسات النفسية والاجتماعية', name_en: 'Psychological & Social Studies', Icon: Brain, bg: '#a855f7' },
    { key: 'fiqh', name_ar: 'الفقه', name_en: 'Islamic Jurisprudence', Icon: Scale, bg: '#d97706' },
    { key: 'life_skills', name_ar: 'المهارات الحياتية', name_en: 'Life Skills', Icon: HeartHandshake, bg: '#f43f5e' },
  ],
};

const DEDICATED_PAGES = {
  'grade_1/first/science': '/science-grade1-s1',
  'grade_1/first/islamic': '/question-bank/grade_1/first/external/islamic',
  'grade_1/first/islamic': '/islamic-grade1-s1',
  'grade_1/first/english': '/english-grade1-s1',
  'grade_1/first/my_language': '/lughati-grade1-s1',
  'grade_1/first/math': '/math-grade1-s1',
  'grade_4/first/science': '/science-grade4-s1',
  'grade_4/first/islamic': '/islamic-grade4-s1',
  'grade_4/first/english': '/english-topgoal1-s1',
  'grade_4/first/math': '/math-grade4-s1',
  'grade_4/first/my_language': '/lughati-grade4-s1',
  'grade_4/first/social': '/social-grade4-s1',
  'grade_4/first/computer': '/computer-grade4-s1',
  'grade_4/first/art_education': '/art-grade4-s1',

  'grade_1/second/math': '/math-grade1-s2',
  'grade_2/second/islamic': '/islamic-grade2-s2',
  'grade_2/first/islamic': '/islamic-grade2-s1-adab',
  'grade_1/second/english': '/english-grade1-s2',
  'grade_1/second/science': '/science-grade1-s2',
  'grade_1/second/life_skills': '/life-skills-grade1-s2',
  'grade_1/second/islamic': '/islamic-grade1-s2',
  'grade_2/first/math': '/math-grade2-s1',
  'grade_2/first/english': '/english-grade2-s1-wecan',
  'grade_2/first/life_skills': '/life-skills-grade2-s1',
  'grade_2/second/math': '/math-grade2-s2',
  'grade_2/first/my_language': '/lughati-grade2-s1-new',
  'grade_2/second/my_language': '/lughati-grade2-s2',
  'grade_2/second/art_education': '/art-grade2-s2',
  'grade_2/first/art_education': '/art-grade2-s1-new',
  'grade_2/second/science': '/science-grade2-s2',
  'grade_2/first/science': '/science-grade2-s1',
  'grade_3/first/islamic': '/tawheed-grade3-s1',
  'grade_3/second/math': '/math-grade3-s2',
  'grade_3/second/my_language': '/lughati-grade3-s2',
  'grade_3/first/my_language': '/lughati-grade3-s1',
  'grade_3/first/science': '/science-grade3-s1-fossils',
  'grade_3/first/math': '/math-grade3-s1',
  'grade_3/first/art_education': '/art-grade3-s1',
  'grade_3/first/life_skills': '/life-skills-grade3-s1',
  'grade_3/first/english': '/english-grade3-s1-workbook',
  'grade_3/second/english': '/english-grade3-s2',
  'grade_3/second/life_skills': '/life-skills-grade3-s2',
  'grade_3/second/science': '/science-grade3-s2-sound-light',
  'grade_5/first/social': '/social-grade5-s1-bank',
  'grade_5/first/my_language': '/lughati-grade5-s1',
  'grade_5/first/islamic': '/islamic-grade5-s1',
  'grade_5/first/english': '/english-topgoal2-s1',
  'grade_5/first/life_skills': '/life-skills-grade5-s1-new',
  'grade_5/second/english': '/english-topgoal2',
  'grade_5/second/islamic': '/tajweed-grade5-s2',
  'grade_5/second/art_education': '/art-grade5-s2',
  'grade_5/second/my_language': '/lughati-grade5-s2',
  'grade_5/second/science': '/science-grade5-s2-bank',
  'grade_5/second/life_skills': '/life-skills-grade5-s2',
  'grade_5/second/math': '/math-grade5-s2-ch9',
  'grade_5/first/computer': '/computer-grade5-s1',
  'grade_5/second/computer': '/computer-grade5-s2',
  'grade_5/first/math': '/math-grade5-s1',
  'grade_6/first/my_language': '/question-bank/grade_6/first/external/my_language',
  'grade_6/first/islamic': '/question-bank/grade_6/first/external/islamic',
  'grade_6/first/art_education': '/art-grade6-s1',
  'grade_6/first/life_skills': '/life-skills-grade6-s1-bank',
  'grade_6/first/science': '/question-bank/grade_6/first/external/science',
  'grade_6/first/quran_tajweed': '/question-bank/grade_6/first/external/quran_tajweed',
  'grade_6/first/math': '/question-bank/grade_6/first/external/math',
  'grade_6/first/english': '/question-bank/grade_6/first/external/english',
  'grade_6/first/social': '/social-grade6-s1',
  'grade_7/first/math': '/question-bank/grade_7/first/external/math',
  'grade_7/first/science': '/question-bank/grade_7/first/external/science',
  'grade_7/first/arabic': '/question-bank/grade_7/first/external/arabic',
  'grade_7/first/english': '/question-bank/grade_7/first/external/english',
  'grade_7/first/life_skills': '/question-bank/grade_7/first/external/life_skills',
  'grade_7/first/social': '/question-bank/grade_7/first/external/social',
  'grade_6/second/my_language': '/lughati-grade6-s2',
  'grade_6/second/math': '/math-grade6',
  'grade_6/second/science': '/science-grade6-s2-cover',
  'grade_6/second/life_skills': '/life-skills-misc-bank',
  'grade_6/second/computer': '/computer-grade6-s2',
  'grade_6/second/islamic': '/islamic-grade6-s2',
  'grade_6/second/social': '/social-grade6-s2',
  'grade_6/second/art_education': '/art-grade6-s2',
  'grade_6/second/english': '/english-grade6-s2',
  'grade_7/second/math': '/question-bank/grade_7/second/external/math',
  'grade_7/second/english': '/question-bank/grade_7/second/external/english',
  'grade_7/second/science': '/question-bank/grade_7/second/external/science',
  'grade_7/second/computer': '/question-bank/grade_7/second/external/computer',
  'grade_7/second/islamic': '/question-bank/grade_7/second/external/islamic',
  'grade_7/second/arabic': '/question-bank/grade_7/second/external/arabic',
  'grade_7/second/social': '/question-bank/grade_7/second/external/social',
  'grade_8/second/arabic': '/question-bank/grade_8/second/external/arabic',
  'grade_8/second/science': '/question-bank/grade_8/second/external/science',
  'grade_8/second/math': '/question-bank/grade_8/second/external/math',
  'grade_8/second/islamic': '/question-bank/grade_8/second/external/islamic',
  'grade_8/second/social': '/question-bank/grade_8/second/external/social',
  'grade_8/second/english': '/question-bank/grade_8/second/external/english',
  'grade_8/second/life_skills': '/question-bank/grade_8/second/external/life_skills',
  'grade_9/first/arabic': '/question-bank/grade_9/first/external/arabic',
  'grade_9/second/arabic': '/question-bank/grade_9/second/external/arabic',
  'grade_9/second/science': '/question-bank/grade_9/second/external/science',
  'grade_9/second/math': '/question-bank/grade_9/second/external/math',
  'grade_9/second/computer': '/question-bank/grade_9/second/external/computer',
  'grade_9/second/english': '/question-bank/grade_9/second/external/english',
  'grade_9/second/islamic': '/question-bank/grade_9/second/external/islamic',
  'grade_9/second/social': '/question-bank/grade_9/second/external/social',
  'grade_10/first/biology': '/question-bank/grade_10/first/external/biology',
  'grade_10/second/math': '/question-bank/grade_10/second/external/math',
  'grade_10/second/arabic': '/question-bank/grade_10/second/external/arabic',
  'grade_10/second/hadith': '/question-bank/grade_10/second/external/hadith',
  'grade_10/second/english': '/question-bank/grade_10/second/external/english',
  'grade_10/second/physics': '/question-bank/grade_10/second/external/physics',
  'grade_10/second/financial_literacy': '/question-bank/grade_10/second/external/financial_literacy',
  'grade_10/second/environmental_science': '/question-bank/grade_10/second/external/environmental_science',
  'grade_11/second/biology': '/question-bank/grade_11/second/external/biology',
  'grade_11/second/english': '/question-bank/grade_11/second/external/english',
  'grade_11/second/fitness_health': '/question-bank/grade_11/second/external/fitness_health',
  'grade_11/second/chemistry': '/question-bank/grade_11/second/external/chemistry',
  'grade_11/second/art_book': '/question-bank/grade_11/second/external/art_book',
  'grade_11/second/computer': '/question-bank/grade_11/second/external/computer',
  'grade_11/second/language_competencies': '/question-bank/grade_11/second/external/language_competencies',
  'grade_11/second/math': '/question-bank/grade_11/second/external/math',
  'grade_12/second/english': '/question-bank/grade_12/second/external/english',
  'grade_12/second/digital_citizenship': '/question-bank/grade_12/second/external/digital_citizenship',
  'grade_12/second/psychological_social_studies': '/question-bank/grade_12/second/external/psychological_social_studies',
  'grade_12/second/fiqh': '/question-bank/grade_12/second/external/fiqh',
  'grade_12/second/life_skills': '/question-bank/grade_12/second/external/life_skills',
  'grade_12/second/math': '/question-bank/grade_12/second/external/math',
  'grade_12/second/physics': '/question-bank/grade_12/second/external/physics',
  'grade_12/second/geography': '/question-bank/grade_12/second/external/geography',
  'grade_12/second/literary_studies': '/question-bank/grade_12/second/external/literary_studies',
  'grade_12/second/earth_space': '/question-bank/grade_12/second/external/earth_space',
  'grade_10/second/computer': '/question-bank/grade_10/second/external/computer',
  'grade_10/second/social': '/question-bank/grade_10/second/external/social',
  'grade_10/second/vocational': '/question-bank/grade_10/second/external/vocational',
};

function getStageKey(gradeKey) {
  const num = Number(gradeKey.split('_')[1]);
  if (num <= 6) return 'primary';
  if (num <= 9) return 'intermediate';
  return 'secondary';
}

function buildSubjects(grade, semester) {
  const stageKey = getStageKey(grade);
  const subjects = STAGE_SUBJECTS[stageKey];
  // للصف الثالث الثانوي: أظهر فقط المواد التي لها رابط خارجي مغطّى
  return subjects
    .map((s) => {
      const dedicatedKey = `${grade}/${semester}/${s.key}`;
      const internalPath = DEDICATED_PAGES[dedicatedKey] || `/question-bank/${grade}/${semester}/subject/${s.key}`;
      return { ...s, internalPath, hasLink: !!DEDICATED_PAGES[dedicatedKey] };
    })
    .filter((s) => s.hasLink);
}

function SubjectTile({ subject, index, lang, isRTL }) {
  const name = lang === 'ar' ? subject.name_ar : subject.name_en;
  const { Icon, bg, internalPath } = subject;
  const GoArrow = isRTL ? ArrowLeft : ArrowRight;
  const isExternal = internalPath.startsWith('http');
  const tileClass = "group relative flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-1.5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg hover:shadow-2xl";
  const tileStyle = { backgroundColor: bg, boxShadow: `0 12px 30px -8px ${bg}99` };
  const inner = (
    <>
      <div className="absolute inset-4 rounded-tr-2xl rounded-bl-2xl bg-white/10 border border-white/20" />
      <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-10 h-10 text-white" strokeWidth={1.6} />
      </div>
      <h3 className="relative font-heading font-bold text-white text-base mb-1">{name}</h3>
      <div className="relative flex items-center gap-1 text-xs font-medium text-white/80">
        {lang === 'ar' ? 'افتح بنك الأسئلة' : 'Open question bank'}
        <GoArrow className="w-3 h-3" />
      </div>
    </>
  );

  return (
    <motion.div
      key={subject.key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      {isExternal ? (
        <a href={internalPath} target="_blank" rel="noopener noreferrer" className={tileClass} style={tileStyle}>
          {inner}
        </a>
      ) : (
        <Link to={internalPath} className={tileClass} style={tileStyle}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}

export default function QuestionBankSubjects() {
  const { grade, semester } = useParams();
  const { t, lang, isRTL } = useLang();
  const title = lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks';
  const gradeName = getGradeName(grade, lang);
  const semesterLabel = SEMESTER_LABELS[semester]?.[lang] || semester;
  const subjects = buildSubjects(grade, semester);

  const stageKey = getStageKey(grade);
  const stageMeta = {
    primary: { Icon: Sprout, name_ar: 'المرحلة الابتدائية', name_en: 'Primary' },
    intermediate: { Icon: Library, name_ar: 'المرحلة المتوسطة', name_en: 'Intermediate' },
    secondary: { Icon: GraduationCap, name_ar: 'المرحلة الثانوية', name_en: 'Secondary' },
  }[stageKey];
  const StageIcon = stageMeta?.Icon || BookOpen;

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${title} · ${gradeName} · ${semesterLabel}`}
        subtitle={lang === 'ar' ? 'اختر المادة لعرض بنك الأسئلة' : 'Choose a subject to view its question bank'}
        backTo={`/question-bank/${grade}`}
        breadcrumbs={[
          { label: t('home'), path: '/' },
          { label: t('nationalCurriculum'), path: '/curriculum/national' },
          { label: title, path: '/question-bank/grades' },
          { label: gradeName, path: `/question-bank/${grade}` },
          { label: semesterLabel },
        ]}
      />

      {/* غلاف المواد */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #556895 0%, #233a69 100%)' }}
      >
        <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]" />
        <div className="relative px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <StageIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-white font-heading font-bold text-base sm:text-lg">
                {gradeName} · {semesterLabel}
              </h3>
              <p className="text-white/60 text-xs">
                {lang === 'ar' ? stageMeta?.name_ar : stageMeta?.name_en} · {subjects.length} {lang === 'ar' ? 'مواد' : 'subjects'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, i) => (
          <SubjectTile key={subject.key} subject={subject} index={i} lang={lang} isRTL={isRTL} />
        ))}
        {/* التجويد — يظهر للصف السادس الفصل الثاني */}
        {grade === 'grade_6' && semester === 'second' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Link
              to="/tajweed-grade6-s2"
              className="group relative flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-1.5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: '#0d9488', boxShadow: '0 12px 30px -8px #0d948899' }}
            >
              <div className="absolute inset-4 rounded-tr-2xl rounded-bl-2xl bg-white/10 border border-white/20" />
              <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
                <BookMarked className="w-10 h-10 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-heading font-bold text-white text-base mb-1">
                {lang === 'ar' ? 'التلاوة والتجويد' : 'Tajweed & Recitation'}
              </h3>
              <div className="relative flex items-center gap-1 text-xs font-medium text-white/80">
                {lang === 'ar' ? 'بنك أسئلة تفاعلي' : 'Interactive bank'}
                {isRTL ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </div>
            </Link>
          </motion.div>
        )}

        {/* الفقه الإسلامي — يظهر للصف السادس الفصل الثاني */}
        {grade === 'grade_6' && semester === 'second' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
            <Link
              to="/fiqh-grade6-s2"
              className="group relative flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-1.5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: '#b45309', boxShadow: '0 12px 30px -8px #b4530999' }}
            >
              <div className="absolute inset-4 rounded-tr-2xl rounded-bl-2xl bg-white/10 border border-white/20" />
              <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-heading font-bold text-white text-base mb-1">
                {lang === 'ar' ? 'الفقه الإسلامي' : 'Islamic Jurisprudence'}
              </h3>
              <div className="relative flex items-center gap-1 text-xs font-medium text-white/80">
                {lang === 'ar' ? 'بنك أسئلة تفاعلي' : 'Interactive bank'}
                {isRTL ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </div>
            </Link>
          </motion.div>
        )}

        {/* المهارات الحياتية — الصف الثاني المتوسط */}
        {grade === 'grade_8' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Link
              to={`/question-bank/grade_8/${semester}/external/life_skills`}
              className="group relative flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-1.5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: '#f43f5e', boxShadow: '0 12px 30px -8px #f43f5e99' }}
            >
              <div className="absolute inset-4 rounded-tr-2xl rounded-bl-2xl bg-white/10 border border-white/20" />
              <div className="relative mb-3 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="w-10 h-10 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="relative font-heading font-bold text-white text-base mb-1">
                {lang === 'ar' ? 'المهارات الحياتية' : 'Life Skills'}
              </h3>
              <div className="relative flex items-center gap-1 text-xs font-medium text-white/80">
                {lang === 'ar' ? 'افتح بنك الأسئلة' : 'Open question bank'}
                {isRTL ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </div>
            </Link>
          </motion.div>
        )}

      </div>

      {subjects.length === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="font-heading font-bold text-slate-500 text-sm">
            {lang === 'ar' ? 'لا توجد بنوك جاهزة لهذا الفصل بعد' : 'No ready banks for this semester yet'}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? 'سيتم إضافتها لاحقاً بعد استخراج الأسئلة من الكتب' : 'They will be added after extracting questions from textbooks'}
          </p>
        </div>
      )}
    </div>
  );
}