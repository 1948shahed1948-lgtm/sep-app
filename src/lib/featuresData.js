import { BookOpen, GraduationCap, Brain, Target, TrendingUp, Award, Stethoscope, Ruler, MessageSquareText, Calculator } from 'lucide-react';

const verbalAptitudeFeature = {
  key: "verbal-aptitude",
  icon: MessageSquareText,
  titleAr: "قدرات لفظي",
  titleEn: "Verbal Aptitude",
  descAr: "تدريب متخصص على مهارات القسم اللفظي",
  descEn: "Specialized training for the verbal section",
  summaryAr: "تدريب مخصص للقسم اللفظي في اختبار القدرات، يغطي مهارات مثل التناظر اللفظي، إكمال الجمل، الخطأ السياقي، المفردة الشاذة، واستيعاب المقروء، مع أسئلة متدرجة الصعوبة وشرح تفصيلي لكل إجابة.",
  summaryEn: "Dedicated training for the verbal section of the aptitude test, covering skills such as verbal analogy, sentence completion, contextual error, odd word out, and reading comprehension, with graded-difficulty questions and detailed answer explanations.",
  color: "bg-gradient-to-br from-purple-500 to-violet-600",
  image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=60"
};

const quantitativeAptitudeFeature = {
  key: "quantitative-aptitude",
  icon: Calculator,
  titleAr: "قدرات كمي",
  titleEn: "Quantitative Aptitude",
  descAr: "تدريب متخصص على مهارات القسم الكمي",
  descEn: "Specialized training for the quantitative section",
  summaryAr: "تدريب مخصص للقسم الكمي في اختبار القدرات، يغطي مهارات مثل الحساب، الجبر، الهندسة، الإحصاء، والمقارنات الكمية، مع أسئلة متدرجة الصعوبة وشرح تفصيلي لكل إجابة.",
  summaryEn: "Dedicated training for the quantitative section of the aptitude test, covering skills such as arithmetic, algebra, geometry, statistics, and quantitative comparisons, with graded-difficulty questions and detailed answer explanations.",
  color: "bg-gradient-to-br from-cyan-500 to-blue-600",
  image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf69a2?auto=format&fit=crop&w=500&q=60"
};

const diagnosticTestsFeature = {
  key: "diagnostic-tests",
  icon: Stethoscope,
  titleAr: "الاختبارات التشخيصية",
  titleEn: "Diagnostic Tests",
  descAr: "يحدد نقاط القوة والضعف لدى الطالب عبر مهارات متنوعة",
  descEn: "Identifies student strengths and weaknesses across varied skills",
  summaryAr: "الاختبار التشخيصي يقدم مجموعة متنوعة من الأسئلة تغطي عدة مهارات، ثم يحلل إجابات الطالب لتحديد نقاط القوة والضعف بدقة في كل مهارة على حدة، مما يساعد الطالب وولي الأمر على معرفة المجالات التي تحتاج إلى مزيد من التدريب.",
  summaryEn: "The diagnostic test presents a varied set of questions covering multiple skills, then analyzes the student's answers to precisely identify strengths and weaknesses in each skill, helping students and parents know which areas need more practice.",
  color: "bg-gradient-to-br from-rose-500 to-orange-500",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=60"
};

const criterionTestsFeature = {
  key: "criterion-tests",
  icon: Ruler,
  titleAr: "الاختبارات المعيارية",
  titleEn: "Criterion-Referenced Tests",
  descAr: "يقيس أداء الطالب مقارنة بمعيار إتقان ثابت",
  descEn: "Measures student performance against a fixed mastery standard",
  summaryAr: "الاختبار المعياري يقيس أداء الطالب مقابل معيار إتقان ثابت ومحدد مسبقاً (نسبة نجاح موحدة)، بدلاً من مقارنته بأداء طلاب آخرين، فالنتيجة تكون إما اجتياز أو عدم اجتياز المعيار المطلوب لهذه المرحلة.",
  summaryEn: "The criterion-referenced test measures a student's performance against a fixed, predefined mastery standard (a set passing score), rather than comparing them to other students. The result is either passing or not passing the required standard for that level.",
  color: "bg-gradient-to-br from-blue-500 to-indigo-600",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60"
};

const standardizedTestsFeature = {
  key: "standardized-tests",
  icon: Award,
  titleAr: "الاختبارات المقننة",
  titleEn: "Standardized Tests",
  descAr: "نظام اختبارات متجدد يبدأ بالتشخيص ويصل إلى التكيّف الذكي",
  descEn: "A dynamic testing system from diagnosis to smart adaptation",
  summaryAr: "نظام اختبارات متجدد يبدأ بالتشخيص لتحديد نقاط الضعف والقوة، ثم اختبارات معيارية لقياس مستوى الإتقان، وصولاً إلى الاختبارات التكيفية الذكية التي ترفع مستوى كل مهارة إلى 75% فأكثر.",
  summaryEn: "A dynamic testing system that starts with diagnostic tests to identify strengths and weaknesses, followed by criterion tests to measure mastery, culminating in smart adaptive tests that raise every skill to 75% or more.",
  color: "bg-gradient-to-br from-fuchsia-500 to-orange-500",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60"
};

export const features = [
  {
    key: "national-curriculum",
    icon: BookOpen,
    titleAr: "النظام الوطني",
    titleEn: "National Curriculum",
    descAr: "جميع المواد والصفوف وفق المنهج السعودي المعتمد",
    descEn: "All subjects and grades following the Saudi approved curriculum",
    summaryAr: "يغطي النظام الوطني جميع المراحل الدراسية من الابتدائي حتى الثانوي، بمحتوى مطابق للمنهج السعودي المعتمد من وزارة التعليم، ويشمل كل المواد الدراسية مع دروس وتمارين تفاعلية لكل صف.",
    summaryEn: "The National Curriculum covers all grade levels from elementary to high school, with content aligned to the Ministry of Education's approved Saudi curriculum, including all subjects with interactive lessons and exercises for every grade.",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1503676260728-1b40b172f1f7?auto=format&fit=crop&w=500&q=60"
    },
    {
      key: "international-curriculum",
    icon: GraduationCap,
    titleAr: "النظام الدولي",
    titleEn: "International Curriculum",
    descAr: "مناهج دولية معتمدة بمعايير عالمية",
    descEn: "Internationally accredited curricula with global standards",
    summaryAr: "يقدم النظام الدولي مناهج معتمدة عالمياً تواكب أفضل الممارسات التعليمية الدولية، مما يهيئ الطلاب للمنافسة على المستوى العالمي مع الحفاظ على جودة تعليمية عالية.",
    summaryEn: "The International Curriculum offers globally accredited programs aligned with best international educational practices, preparing students to compete on a global level while maintaining high educational quality.",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1523050852676-c2598f696ab7?auto=format&fit=crop&w=500&q=60"
    },
  {
    key: "interactive-training",
    icon: Target,
    titleAr: "تدريب تفاعلي",
    titleEn: "Interactive Training",
    descAr: "تمارين متنوعة مصممة حسب كل مهارة",
    descEn: "Diverse exercises designed per skill",
    summaryAr: "تمارين تفاعلية متنوعة الأنماط (اختيار من متعدد، صح وخطأ، إكمال، وغيرها) مصممة خصيصاً لكل مهارة على حدة، لضمان تدريب مركّز وفعّال يرفع من مستوى الفهم والإتقان.",
    summaryEn: "Diverse interactive exercises (multiple choice, true/false, fill-in-the-blank, and more) designed specifically for each individual skill, ensuring focused and effective training that boosts understanding and mastery.",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1499209974431-9ece4d51c4b3?auto=format&fit=crop&w=500&q=60"
    },
  {
    key: "performance-analysis",
    icon: TrendingUp,
    titleAr: "تحليل الأداء",
    titleEn: "Performance Analysis",
    descAr: "رصد الأخطاء وكشف نقاط الضعف بدقة",
    descEn: "Error tracking and precise weakness detection",
    summaryAr: "نظام تحليل ذكي يرصد كل إجابة خاطئة ويحدد نقاط الضعف بدقة عبر المواد والمهارات، مما يتيح لك ولوليّ الأمر متابعة التقدم واستهداف المجالات التي تحتاج إلى مزيد من التدريب.",
    summaryEn: "A smart analytics system that tracks every wrong answer and precisely identifies weaknesses across subjects and skills, allowing students and parents to monitor progress and target areas that need more practice.",
    color: "bg-gradient-to-br from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60"
    },
  {
    key: "skill-mastery",
    icon: Award,
    titleAr: "إتقان المهارات",
    titleEn: "Skill Mastery",
    descAr: "اختبارات تقييمية بعد إتقان كل مهارة",
    descEn: "Assessment quizzes after mastering each skill",
    summaryAr: "بعد إكمال التدريب على كل مهارة، يخضع الطالب لاختبار تقييمي قصير يحدد مستوى إتقانه (متقن، جيد، بحاجة لتطوير، ضعيف)، لضمان انتقاله للمهارة التالية بثقة وفهم كامل.",
    summaryEn: "After completing training on each skill, students take a short assessment quiz that determines their mastery level (mastered, proficient, developing, needs focus), ensuring they move to the next skill with confidence and full understanding.",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=500&q=60"
    },
  standardizedTestsFeature,
  diagnosticTestsFeature,
  criterionTestsFeature,
  verbalAptitudeFeature,
  quantitativeAptitudeFeature
];