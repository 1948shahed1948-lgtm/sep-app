export const gradeStages = {
  primary: {
    name_ar: "المرحلة الابتدائية",
    name_en: "Primary",
    grades: ["grade_1", "grade_2", "grade_3", "grade_4", "grade_5", "grade_6"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    icon: "🌱"
  },
  intermediate: {
    name_ar: "المرحلة المتوسطة",
    name_en: "Intermediate",
    grades: ["grade_7", "grade_8", "grade_9"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    icon: "📚"
  },
  secondary: {
    name_ar: "المرحلة الثانوية",
    name_en: "Secondary",
    grades: ["grade_10", "grade_11", "grade_12"],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    icon: "🎓"
  }
};

export const gradeNames = {
  grade_1: { ar: "الصف الأول", en: "Grade 1", num: 1 },
  grade_2: { ar: "الصف الثاني", en: "Grade 2", num: 2 },
  grade_3: { ar: "الصف الثالث", en: "Grade 3", num: 3 },
  grade_4: { ar: "الصف الرابع", en: "Grade 4", num: 4 },
  grade_5: { ar: "الصف الخامس", en: "Grade 5", num: 5 },
  grade_6: { ar: "الصف السادس", en: "Grade 6", num: 6 },
  grade_7: { ar: "الصف الأول المتوسط", en: "First Intermediate", num: 7 },
  grade_8: { ar: "الصف الثاني المتوسط", en: "Second Intermediate", num: 8 },
  grade_9: { ar: "الصف الثالث المتوسط", en: "Third Intermediate", num: 9 },
  grade_10: { ar: "الأول الثانوي (السنة المشتركة)", en: "First Secondary (Common Year)", num: 10 },
  grade_11: { ar: "الثاني الثانوي", en: "Second Secondary", num: 11 },
  grade_12: { ar: "الثالث الثانوي", en: "Third Secondary", num: 12 },
};

export function getGradeName(gradeKey, lang) {
  const g = gradeNames[gradeKey];
  if (!g) return gradeKey;
  return lang === 'ar' ? g.ar : g.en;
}

export function getStageForGrade(gradeKey) {
  for (const [stageKey, stage] of Object.entries(gradeStages)) {
    if (stage.grades.includes(gradeKey)) return { key: stageKey, ...stage };
  }
  return null;
}