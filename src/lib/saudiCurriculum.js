// Saudi Curriculum Map — primary grades core subjects with units and lessons.
// Used to drive bulk question generation (50 questions per lesson).

export const saudiCurriculum = [
  {
    grade: 'grade_1',
    subjects: [
      {
        name_ar: 'الرياضيات', name_en: 'Mathematics', icon: 'Calculator', color: '#3B82F6',
        units: [
          {
            title_ar: 'الأعداد حتى ٩٩', title_en: 'Numbers up to 99',
            lessons: [
              { title_ar: 'الأعداد حتى ٩٩', title_en: 'Numbers up to 99' },
              { title_ar: 'ترتيب الأعداد ومقارنتها', title_en: 'Ordering and comparing numbers' },
              { title_ar: 'القيمة المنزلية', title_en: 'Place value' }
            ]
          },
          {
            title_ar: 'الجمع والطرح', title_en: 'Addition and subtraction',
            lessons: [
              { title_ar: 'جمع الأعداد', title_en: 'Adding numbers' },
              { title_ar: 'طرح الأعداد', title_en: 'Subtracting numbers' },
              { title_ar: 'حل المسائل اللفظية', title_en: 'Word problems' }
            ]
          },
          {
            title_ar: 'الأشكال والهندسة', title_en: 'Shapes and geometry',
            lessons: [
              { title_ar: 'الأشكال المستوية', title_en: 'Plane shapes' },
              { title_ar: 'الأشكال المجسمة', title_en: 'Solid shapes' }
            ]
          }
        ]
      },
      {
        name_ar: 'اللغة العربية', name_en: 'Arabic Language', icon: 'BookOpen', color: '#10B981',
        units: [
          {
            title_ar: 'الوحدة الأولى: مهارات الاستماع', title_en: 'Unit 1: Listening skills',
            lessons: [
              { title_ar: 'أصوات الحروف', title_en: 'Letter sounds' },
              { title_ar: 'مقاطعة الكلمات', title_en: 'Syllables' }
            ]
          },
          {
            title_ar: 'الوحدة الثانية: القراءة', title_en: 'Unit 2: Reading',
            lessons: [
              { title_ar: 'قراءة الكلمات', title_en: 'Reading words' },
              { title_ar: 'قراءة الجمل', title_en: 'Reading sentences' }
            ]
          }
        ]
      },
      {
        name_ar: 'التربية الإسلامية', name_en: 'Islamic Education', icon: 'BookMarked', color: '#8B5CF6',
        units: [
          {
            title_ar: 'القرآن الكريم', title_en: 'Holy Quran',
            lessons: [
              { title_ar: 'سورة الفاتحة', title_en: 'Surat Al-Fatiha' },
              { title_ar: 'سورة الإخلاص', title_en: 'Surat Al-Ikhlas' }
            ]
          },
          {
            title_ar: 'التوحيد', title_en: 'Tawheed',
            lessons: [
              { title_ar: 'معنى لا إله إلا الله', title_en: 'Meaning of La ilaha illa Allah' }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 'grade_2',
    subjects: [
      {
        name_ar: 'الرياضيات', name_en: 'Mathematics', icon: 'Calculator', color: '#3B82F6',
        units: [
          {
            title_ar: 'الأعداد حتى ٩٩٩', title_en: 'Numbers up to 999',
            lessons: [
              { title_ar: 'الأعداد حتى ٩٩٩', title_en: 'Numbers up to 999' },
              { title_ar: 'القيمة المنزلية ضمن الأعداد', title_en: 'Place value within numbers' }
            ]
          },
          {
            title_ar: 'الجمع والطرح ضمن ٩٩٩', title_en: 'Addition and subtraction within 999',
            lessons: [
              { title_ar: 'جمع أعداد ثلاثية', title_en: 'Adding three-digit numbers' },
              { title_ar: 'طرح أعداد ثلاثية', title_en: 'Subtracting three-digit numbers' }
            ]
          }
        ]
      },
      {
        name_ar: 'اللغة العربية', name_en: 'Arabic Language', icon: 'BookOpen', color: '#10B981',
        units: [
          {
            title_ar: 'الوحدة الأولى', title_en: 'Unit 1',
            lessons: [
              { title_ar: 'المدّ بالألف والواو والياء', title_en: 'Lengthening with alif, waw, yaa' },
              { title_ar: 'اللام الشمسية والقمرية', title_en: 'Sun and moon letters' }
            ]
          }
        ]
      }
    ]
  },
  {
    grade: 'grade_3',
    subjects: [
      {
        name_ar: 'الرياضيات', name_en: 'Mathematics', icon: 'Calculator', color: '#3B82F6',
        units: [
          {
            title_ar: 'الضرب والقسمة', title_en: 'Multiplication and division',
            lessons: [
              { title_ar: 'جدول الضرب', title_en: 'Multiplication table' },
              { title_ar: 'القسمة', title_en: 'Division' }
            ]
          },
          {
            title_ar: 'الكسور', title_en: 'Fractions',
            lessons: [
              { title_ar: 'مفهوم الكسر', title_en: 'Concept of fractions' },
              { title_ar: 'مقارنة الكسور', title_en: 'Comparing fractions' }
            ]
          }
        ]
      },
      {
        name_ar: 'العلوم', name_en: 'Science', icon: 'FlaskConical', color: '#F59E0B',
        units: [
          {
            title_ar: 'الكائنات الحية', title_en: 'Living things',
            lessons: [
              { title_ar: 'تصنيف الكائنات الحية', title_en: 'Classifying living things' },
              { title_ar: 'النباتات', title_en: 'Plants' }
            ]
          },
          {
            title_ar: 'المادة', title_en: 'Matter',
            lessons: [
              { title_ar: 'حالات المادة', title_en: 'States of matter' }
            ]
          }
        ]
      }
    ]
  }
];

// Flatten into a list of generation tasks (one per lesson).
export function flattenCurriculum(curriculum = saudiCurriculum) {
  const tasks = [];
  for (const gradeObj of curriculum) {
    for (const subject of gradeObj.subjects) {
      for (const unit of subject.units) {
        for (const lesson of unit.lessons) {
          tasks.push({
            grade: gradeObj.grade,
            subject_name_ar: subject.name_ar,
            subject_name_en: subject.name_en,
            unit_title_ar: unit.title_ar,
            unit_title_en: unit.title_en,
            lesson_title_ar: lesson.title_ar,
            lesson_title_en: lesson.title_en
          });
        }
      }
    }
  }
  return tasks;
}