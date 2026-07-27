// اختبار شامل للتربية الإسلامية - الصف السادس الابتدائي
// يدمج بنوك: التوحيد + الحديث والسيرة + الفقه (الفصلين الأول والثاني)

import { islamicGrade6S1Units } from './islamicGrade6S1Bank';
import { islamicGrade6S2Units } from './islamicGrade6S2Bank';
import { fiqhGrade6S2Units } from './fiqhGrade6S2Bank';

// تصنيف الأقسام الثلاثة الرئيسية
export const comprehensiveSections = [
  {
    id: 'tawheed',
    title_ar: 'التوحيد',
    icon: '☪️',
    color: '#1e40af',
    description_ar: 'يتعرّف الطالب على ربه، خالقه ورازقه؛ كي يفرده بالعبادة وحده لا شريك له.',
    units: [
      ...islamicGrade6S1Units.filter(u => u.id.startsWith('tawheed')),
    ],
  },
  {
    id: 'hadith_seerah',
    title_ar: 'الحديث والسيرة',
    icon: '🕌',
    color: '#065f46',
    description_ar: 'يتعرّف الطالب على الشمائل النبوية، ويتعلّم سنة النبي ﷺ وأخلاقه وهديه في التعامل مع الجميع.',
    units: [
      ...islamicGrade6S1Units.filter(u => u.id.startsWith('hadith') || u.id.startsWith('seerah') || u.id.includes('nabi') || u.id.includes('sahaba') || u.id.includes('barakat') || u.id.includes('qudwa') || u.id.includes('wali')),
      ...islamicGrade6S2Units,
    ],
  },
  {
    id: 'fiqh',
    title_ar: 'الفقه',
    icon: '📜',
    color: '#b45309',
    description_ar: 'يتعلّم الطالب الأحكام الشرعية المتعلقة بما كلّف الله به المسلم من عبادات.',
    units: [
      ...islamicGrade6S1Units.filter(u => u.id.startsWith('fiqh') || u.id.includes('zakat') || u.id.includes('siyam') || u.id.includes('haj') || u.id.includes('salah')),
      ...fiqhGrade6S2Units,
    ],
  },
];

// جمع جميع الأسئلة في مصفوفة واحدة مسطحة
function flattenQuestions(units) {
  const all = [];
  units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lesson.questions.forEach(q => {
        all.push({ ...q, unit_title: unit.title_ar, lesson_title: lesson.title_ar, section_color: unit.color });
      });
    });
  });
  return all;
}

export const ALL_SECTIONS_QUESTIONS = comprehensiveSections.map(section => ({
  ...section,
  allQuestions: flattenQuestions(section.units),
  totalQuestions: flattenQuestions(section.units).length,
}));

export const COMPREHENSIVE_TOTAL = ALL_SECTIONS_QUESTIONS.reduce((s, sec) => s + sec.totalQuestions, 0);
export const COMPREHENSIVE_TOTAL_UNITS = ALL_SECTIONS_QUESTIONS.reduce((s, sec) => s + sec.units.length, 0);
export const COMPREHENSIVE_TOTAL_LESSONS = ALL_SECTIONS_QUESTIONS.reduce((s, sec) => s + sec.units.reduce((su, u) => su + u.lessons.length, 0), 0);

// خلط عشوائي للاختبار الشامل
export function getShuffledQuestions(count = 30) {
  const pool = [];
  ALL_SECTIONS_QUESTIONS.forEach(sec => {
    sec.allQuestions.forEach(q => pool.push({ ...q, section_id: sec.id, section_title: sec.title_ar, section_icon: sec.icon }));
  });
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, pool.length));
}