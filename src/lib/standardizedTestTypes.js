import { Stethoscope, Ruler, TrendingUp } from 'lucide-react';

export const DISCUSSION_CIRCLE_IMAGE = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/30143009e_generated_image.png";
export const STUDENTS_CARTOON_IMAGE = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/b23f0abe2_generated_image.png";

export const standardizedTestTypes = {
  diagnostic: {
    key: 'diagnostic',
    titleAr: 'اختبار تشخيصي',
    titleEn: 'Diagnostic Test',
    shortDescAr: 'يحدد نقاط القوة والضعف لدى الطالب عبر مهارات متنوعة',
    shortDescEn: 'Identifies student strengths and weaknesses across varied skills',
    descAr: 'الاختبار التشخيصي يقدم مجموعة متنوعة من الأسئلة تغطي عدة مهارات، ثم يحلل إجابات الطالب لتحديد نقاط القوة والضعف بدقة في كل مهارة على حدة، مما يساعد الطالب وولي الأمر على معرفة المجالات التي تحتاج إلى مزيد من التدريب.',
    descEn: 'The diagnostic test presents a varied set of questions covering multiple skills, then analyzes the student\'s answers to precisely identify strengths and weaknesses in each skill, helping students and parents know which areas need more practice.',
    color: 'from-rose-500 to-orange-500',
    icon: Stethoscope,
  },
  criterion: {
    key: 'criterion',
    titleAr: 'اختبار محكي المرجع',
    titleEn: 'Criterion-Referenced Test',
    shortDescAr: 'يقيس إتقان مهارات محددة مسبقاً بمقارنة الأداء بمستوى ثابت (محك) دون مقارنة بالزملاء',
    shortDescEn: 'Measures mastery of predefined skills against a fixed standard (criterion), not against peers',
    descAr: 'الاختبار محكي المرجع يهدف إلى قياس مدى إتقان المتعلم لمهارات أو أهداف تعليمية محددة مسبقاً، وذلك بمقارنة أدائه بمستوى ثابت (محك)، دون مقارنة أدائه بأداء زملائه الآخرين. النتيجة تكون إما اجتياز المعيار المطلوب أو عدم اجتيازه.',
    descEn: 'The criterion-referenced test measures the learner\'s mastery of predefined educational skills or objectives by comparing their performance to a fixed standard (criterion), without comparing them to other students. The result is either passing or not passing the required standard.',
    color: 'from-blue-500 to-indigo-600',
    icon: Ruler,
  },
  adaptive: {
    key: 'adaptive',
    titleAr: 'اختبار تكيفي',
    titleEn: 'Adaptive Test',
    shortDescAr: 'يغيّر صعوبة الأسئلة تلقائياً حسب أداء الطالب',
    shortDescEn: 'Automatically adjusts question difficulty based on student performance',
    descAr: 'الاختبار التكيفي يغيّر مستوى صعوبة الأسئلة تلقائياً بناءً على أداء الطالب اللحظي؛ فكل إجابة صحيحة ترفع مستوى الصعوبة، وكل إجابة خاطئة تخفضه، للوصول بدقة إلى المستوى الحقيقي لقدرات الطالب.',
    descEn: 'The adaptive test automatically adjusts question difficulty based on the student\'s real-time performance; each correct answer raises the difficulty level, and each wrong answer lowers it, to precisely pinpoint the student\'s true ability level.',
    color: 'from-emerald-500 to-teal-600',
    icon: TrendingUp,
  },
};

export const standardizedTestTypesList = Object.values(standardizedTestTypes);