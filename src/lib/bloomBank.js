// بنك التدرج والهرم — أسئلة مصنّفة حسب مستويات بلوم للمعرفية
// لكل صف (١-٦) أسئلة مختلفة تتنقّل عبر مستويات الهرم من التذكّر إلى الإبداع
// كل سؤال مرتبط برسم تعليمي مطابق من سجل eduImages
import { EDU_IMAGES } from '@/lib/eduImages';
import { BLOOM_ISLAMIC } from '@/lib/bloomIslamicBank';
import { BLOOM_SOCIAL } from '@/lib/bloomSocialBank';
import { BLOOM_ARABIC } from '@/lib/bloomArabicBank';

export const BLOOM_LEVELS = [
  { key: 'remember', ar: 'التذكّر', en: 'Remember', color: '#6366f1', desc_ar: 'استرجاع المعلومات والمفاهيم الأساسية' },
  { key: 'understand', ar: 'الفهم', en: 'Understand', color: '#0ea5e9', desc_ar: 'شرح وتفسير الأفكار بلغة الطالب' },
  { key: 'apply', ar: 'التطبيق', en: 'Apply', color: '#10b981', desc_ar: 'استخدام المعرفة في مواقف جديدة' },
  { key: 'analyze', ar: 'التحليل', en: 'Analyze', color: '#f59e0b', desc_ar: 'تقسيم المعلومات وربط أجزائها' },
  { key: 'evaluate', ar: 'التقييم', en: 'Evaluate', color: '#f97316', desc_ar: 'الحكم وتمييز الأفضل بالتبرير' },
  { key: 'create', ar: 'الإبداع', en: 'Create', color: '#ef4444', desc_ar: 'تكوين وبناء حلول وأفكار جديدة' },
];

export const BLOOM_GRADES = [1, 2, 3, 4, 5, 6];

export function bloomImageUrl(key) {
  return EDU_IMAGES[key] || null;
}

export function questionsFor(grade, bloomKey) {
  return BLOOM_BANK.filter((q) => Number(q.grade) === Number(grade) && q.bloom === bloomKey);
}

export function levelQuestionCount(grade, bloomKey) {
  return questionsFor(grade, bloomKey).length;
}

// مستوى الإتقان المقترح لكل صف حسب هرم بلوم (يبدأ بالأساس ويرتقي)
export const BLOOM_MASTERY_ORDER = BLOOM_LEVELS.map((l) => l.key);

export const BLOOM_BANK = [
  // ===== الصف الأول =====
  { grade: 1, bloom: 'remember', subject: 'math', topic_ar: 'العدّ حتى ١٠٠', question_ar: 'كم مكعباً ترى في الصورة؟', options_ar: ['٢٣', '٣٢', '١٤', '٤١'], correct_answer: '0', explanation_ar: 'نعدّ المكعبات بدءاً من العشرات ثم الآحاد.', image_key: 'M_BASETEN' },
  { grade: 1, bloom: 'understand', subject: 'science', topic_ar: 'الحواس', question_ar: 'أي عضو من أعضاء الجسم نستخدمه للرؤية؟', options_ar: ['العين', 'الأذن', 'الأنف', 'اليد'], correct_answer: '0', explanation_ar: 'العين هي عضو الإبصار.', image_key: 'S_HUMAN_BODY' },
  { grade: 1, bloom: 'apply', subject: 'math', topic_ar: 'الجمع', question_ar: 'معك ٤ حلويات وأعطتك أم ٣ أخرى، كم أصبح المجموع؟', options_ar: ['٧', '٦', '٨', '١'], correct_answer: '0', explanation_ar: '٤ + ٣ = ٧.', image_key: 'M_BASETEN' },
  { grade: 1, bloom: 'analyze', subject: 'science', topic_ar: 'الظل', question_ar: 'لماذا يتغيّر طول ظل الشجرة خلال النهار؟', options_ar: ['بحركة الشمس', 'بسقوط الأوراق', 'بنمو الجذع', 'بهطول المطر'], correct_answer: '0', explanation_ar: 'تغيّر موضع الشمس يغيّر اتجاه وطول الظل.', image_key: 'S_SHADOW' },
  { grade: 1, bloom: 'evaluate', subject: 'math', topic_ar: 'القياس', question_ar: 'أي أداة أنسب لقياس طول قلم؟', options_ar: ['المسطرة', 'الميزان', 'الساعة', 'الكأس'], correct_answer: '0', explanation_ar: 'المسطرة تقيس الطول.', image_key: 'M_RULER' },
  { grade: 1, bloom: 'create', subject: 'math', topic_ar: 'الأنماط', question_ar: 'أي ترتيب يُنشئ نمطاً عددياً متزايداً صحيحاً؟', options_ar: ['٢ ، ٤ ، ٦ ، ٨', '٨ ، ٦ ، ٤ ، ٢', '٥ ، ٥ ، ٥ ، ٥', '١ ، ٣ ، ٢ ، ٤'], correct_answer: '0', explanation_ar: 'النمط المتزايد يزيد بمقدار ثابت هنا (+٢).', image_key: 'M_PATTERN' },

  // ===== الصف الثاني =====
  { grade: 2, bloom: 'remember', subject: 'math', topic_ar: 'الجمع ضمن ١٠٠', question_ar: '٥٢ + ١٤ = ؟', options_ar: ['٦٦', '٦٥', '٦٧', '٥٦'], correct_answer: '0', explanation_ar: 'نجمع الآحاد ثم العشرات: ٢+٤=٦ و٥+١=٦.', image_key: 'M_BASETEN' },
  { grade: 2, bloom: 'understand', subject: 'science', topic_ar: 'حالات المادة', question_ar: 'أي مما يلي يُعدّ سائلاً؟', options_ar: ['الماء', 'الحجر', 'الكتاب', 'القلم'], correct_answer: '0', explanation_ar: 'السائل يتدفق ويأخذ شكل الوعاء.', image_key: 'S_MATTER' },
  { grade: 2, bloom: 'apply', subject: 'math', topic_ar: 'الكسور', question_ar: 'ما الكسر الذي يمثل نصف الشكل؟', options_ar: ['١/٢', '١/٤', '٢/٣', '١/٣'], correct_answer: '0', explanation_ar: 'النصف يقسم الشكل إلى قسمين متساويين.', image_key: 'M_FRACTION' },
  { grade: 2, bloom: 'analyze', subject: 'science', topic_ar: 'أجزاء النبات', question_ar: 'أي جزء يمتص الماء من التربة؟', options_ar: ['الجذر', 'الورقة', 'الساق', 'الزهرة'], correct_answer: '0', explanation_ar: 'الجذر يثبّت النبات ويمتص الماء والأملاح.', image_key: 'S_PLANT' },
  { grade: 2, bloom: 'evaluate', subject: 'math', topic_ar: 'الوقت', question_ar: 'الساعة تشير إلى ٧:٠٠ صباحاً، أي نشاط يكون مناسباً؟', options_ar: ['الذهاب للمدرسة', 'النوم ليلاً', 'صلاة الفجر', 'العشاء'], correct_answer: '0', explanation_ar: 'السابعة صباحاً تُعدّ بداية الدوام المدرسي.', image_key: 'M_CLOCK' },
  { grade: 2, bloom: 'create', subject: 'math', topic_ar: 'تصنيف الأعداد', question_ar: 'أي تصنيف صحيح للأعداد؟', options_ar: ['الزوجي والفردي', 'الكبير والصغير', 'الطويل والقصير', 'الثقيل والخفيف'], correct_answer: '0', explanation_ar: 'الأعداد تُصنّف زوجي/فردي حسب القابلية للقسمة على ٢.', image_key: 'M_VENN' },

  // ===== الصف الثالث =====
  { grade: 3, bloom: 'remember', subject: 'math', topic_ar: 'الضرب', question_ar: '٣ × ٤ = ؟', options_ar: ['١٢', '٧', '١', '٨'], correct_answer: '0', explanation_ar: 'الضرب جمع متكرر: ٤+٤+٤=١٢.', image_key: 'M_MUL_ARRAY' },
  { grade: 3, bloom: 'understand', subject: 'science', topic_ar: 'دورة الماء', question_ar: 'أي عملية تصعد بها المياه إلى السماء؟', options_ar: ['التبخّر', 'التكثّف', 'الهطول', 'التجمد'], correct_answer: '0', explanation_ar: 'التبخّر يرفع الماء بحالة بخار إلى الغلاف الجوي.', image_key: 'S_WATER_CYCLE' },
  { grade: 3, bloom: 'apply', subject: 'math', topic_ar: 'القسمة', question_ar: '١٢ ÷ ٣ = ؟', options_ar: ['٤', '٣', '٦', '٩'], correct_answer: '0', explanation_ar: 'نقسم ١٢ إلى ٣ مجموعات متساوية = ٤ في كل مجموعة.', image_key: 'M_DIV_GROUPS' },
  { grade: 3, bloom: 'analyze', subject: 'science', topic_ar: 'حالات المادة', question_ar: 'أي حالة من حالات المادة تأخذ شكل الوعاء وتتدفق؟', options_ar: ['السائل', 'الصلب', 'الغاز فقط', 'الصلب فقط'], correct_answer: '0', explanation_ar: 'السائل يتدفق ويأخذ شكل الوعاء الذي يوضع فيه.', image_key: 'S_MATTER' },
  { grade: 3, bloom: 'evaluate', subject: 'math', topic_ar: 'تمثيل البيانات', question_ar: 'حسب الرسم البياني، أي يوم أكثر مبيعاً؟', options_ar: ['الثلاثاء', 'الأحد', 'الجمعة', 'السبت'], correct_answer: '0', explanation_ar: 'اليوم الأكثر مبيعاً يقابله أعلى عمود في الرسم البياني.', image_key: 'M_BAR_GRAPH' },
  { grade: 3, bloom: 'create', subject: 'math', topic_ar: 'الأنماط العددية', question_ar: 'أكمل النمط: ٢ ، ٥ ، ٨ ، ...', options_ar: ['١١', '١٠', '٩', '١٢'], correct_answer: '0', explanation_ar: 'النمط يزيد ٣ في كل خطوة: ٨+٣=١١.', image_key: 'M_PATTERN' },

  // ===== الصف الرابع =====
  { grade: 4, bloom: 'remember', subject: 'math', topic_ar: 'الكسور المتكافئة', question_ar: 'ما الكسر المساوي لـ ١/٢؟', options_ar: ['٢/٤', '١/٣', '٣/٤', '٢/٣'], correct_answer: '0', explanation_ar: '٢/٤ = ١/٢ بعد التبسيط بقسمة البسط والمقام على ٢.', image_key: 'M_FRACTION' },
  { grade: 4, bloom: 'understand', subject: 'science', topic_ar: 'الدائرة الكهربائية', question_ar: 'ما الذي يُغلق الدائرة الكهربائية؟', options_ar: ['المفتاح', 'المصباح', 'السلك فقط', 'البطارية فقط'], correct_answer: '0', explanation_ar: 'المفتاح يسمح بمرور التيار لإغلاق الدارة وإضاء المصباح.', image_key: 'S_CIRCUIT' },
  { grade: 4, bloom: 'apply', subject: 'math', topic_ar: 'الزوايا', question_ar: 'ما قياس الزاوية القائمة؟', options_ar: ['٩٠°', '٤٥°', '١٨٠°', '٦٠°'], correct_answer: '0', explanation_ar: 'الزاوية القائمة = ٩٠ درجة.', image_key: 'M_ANGLE' },
  { grade: 4, bloom: 'analyze', subject: 'science', topic_ar: 'المغناطيس', question_ar: 'أي مما يلي يجذبه المغناطيس؟', options_ar: ['مسمور حديد', 'قطعة بلاستيك', 'ورقة', 'حجر'], correct_answer: '0', explanation_ar: 'المغناطيس يجذب المواد المغناطيسية كالحديد.', image_key: 'S_MAGNET' },
  { grade: 4, bloom: 'evaluate', subject: 'math', topic_ar: 'التماثل', question_ar: 'أي شكل له خط تماثل واحد على الأقل؟', options_ar: ['المربع', 'شكل عشوائي', 'متوازي أضلاع', 'مثلث غير منتظم'], correct_answer: '0', explanation_ar: 'المربع له خطوط تماثل متعددة.', image_key: 'M_SYMMETRY' },
  { grade: 4, bloom: 'create', subject: 'math', topic_ar: 'المحيط', question_ar: 'أي ترتيب أسوار يُعطي أكبر محيط لنفس المساحة؟', options_ar: ['مستطيل طويل', 'مربع', 'دائرة', 'مثلث قائم'], correct_answer: '0', explanation_ar: 'المستطيل الطويل يعطي أكبر محيط لنفس المساحة عادةً.', image_key: 'M_PERIMETER' },

  // ===== الصف الخامس =====
  { grade: 5, bloom: 'remember', subject: 'math', topic_ar: 'الكسور العشرية', question_ar: 'ما الكسر العشري المساوي لـ ١/٢؟', options_ar: ['٠.٥', '٠.٢', '٠.١', '٠.٢٥'], correct_answer: '0', explanation_ar: '١/٢ = ٠.٥.', image_key: 'M_PIZZA' },
  { grade: 5, bloom: 'understand', subject: 'science', topic_ar: 'الفضاء', question_ar: 'ماذا تدور حوله الأرض؟', options_ar: ['الشمس', 'القمر', 'المريخ', 'النجوم'], correct_answer: '0', explanation_ar: 'الأرض تدور حول الشمس في مدار ثابت.', image_key: 'S_SUN_EARTH_MOON' },
  { grade: 5, bloom: 'apply', subject: 'math', topic_ar: 'الحجم', question_ar: 'ما حجم مكعب طول ضلعه ٣ سم؟', options_ar: ['٢٧ سم^{3}', '٩ سم^{3}', '٦ سم^{3}', '١٢ سم^{3}'], correct_answer: '0', explanation_ar: 'الحجم = الطول × العرض × الارتفاع = ٣×٣×٣ = ٢٧.', image_key: 'M_VOLUME' },
  { grade: 5, bloom: 'analyze', subject: 'science', topic_ar: 'تكوّن الغيوم', question_ar: 'لماذا تتكوّن الغيوم في السماء؟', options_ar: ['تكثّف بخار الماء', 'تجمد الماء', 'سقوط المطر', 'تبخّر الأرض'], correct_answer: '0', explanation_ar: 'تكثّف بخار الماء وارتفاعه يكوّن الغيوم.', image_key: 'S_WATER_CYCLE' },
  { grade: 5, bloom: 'evaluate', subject: 'math', topic_ar: 'الاحتمال', question_ar: 'في الرسم البياني الدائري، أي حدث الأكثر احتمالاً وقوعاً؟', options_ar: ['أكبر قطاع', 'أصغر قطاع', 'قطاع متوسط', 'لا شيء'], correct_answer: '0', explanation_ar: 'احتمال الحدث يزيد بزيادة مساحة قطاعه.', image_key: 'M_PIE_CHART' },
  { grade: 5, bloom: 'create', subject: 'math', topic_ar: 'المستوى الإحداثي', question_ar: 'أي نقطة تقع في الربع الأول؟', options_ar: ['(٣,٤)', '(−٣,٤)', '(−٣,−٤)', '(٣,−٤)'], correct_answer: '0', explanation_ar: 'الربع الأول إحداثياته موجبة في المحورين.', image_key: 'M_COORDINATE' },

  // ===== الصف السادس =====
  { grade: 6, bloom: 'remember', subject: 'math', topic_ar: 'النسبة المئوية', question_ar: '٥٠٪ تساوي أي كسر؟', options_ar: ['١/٢', '١/٤', '١/٣', '٢/٣'], correct_answer: '0', explanation_ar: '٥٠٪ = ٥٠/١٠٠ = ١/٢.', image_key: 'M_PIE_CHART' },
  { grade: 6, bloom: 'understand', subject: 'science', topic_ar: 'الجاذبية', question_ar: 'لماذا تسقط الكرة للأسفل عند تركها؟', options_ar: ['بفعل الجاذبية', 'بسبب الرياح', 'بسبب الحرارة', 'بسبب الضوء'], correct_answer: '0', explanation_ar: 'الجاذبية تجذب الأجسام نحو مركز الأرض.', image_key: 'S_GRAVITY' },
  { grade: 6, bloom: 'apply', subject: 'math', topic_ar: 'الإحصاء', question_ar: 'ما متوسط الأعداد: ٤ ، ٦ ، ٨ ؟', options_ar: ['٦', '٤', '٨', '١٨'], correct_answer: '0', explanation_ar: 'المتوسط = (٤+٦+٨) ÷ ٣ = ٦.', image_key: 'M_BAR_GRAPH' },
  { grade: 6, bloom: 'analyze', subject: 'science', topic_ar: 'الآلات البسيطة', question_ar: 'أي آلة بسيطة تُستخدم في عربة اليد؟', options_ar: ['العتلة', 'البكرة', 'المسننات', 'الإسفين'], correct_answer: '0', explanation_ar: 'العتلة تُستخدم في عربة اليد لتسهيل حمل الأثقال.', image_key: 'S_LEVER' },
  { grade: 6, bloom: 'evaluate', subject: 'math', topic_ar: 'المسافة في الإحداثيات', question_ar: 'أي نقطة أبعد عن المركز (٠,٠)؟', options_ar: ['(٦,٨)', '(٣,٤)', '(١,١)', '(٢,٢)'], correct_answer: '0', explanation_ar: 'المسافة = √(س^{2}+ص^{2}) ؛ (٦,٨) تعطي أكبر قيمة = ١٠.', image_key: 'M_COORDINATE' },
  { grade: 6, bloom: 'create', subject: 'math', topic_ar: 'تصميم المجموعات', question_ar: 'أي تصميم يمثّل تقاطع مجموعتين بصرياً؟', options_ar: ['مخطط فن', 'خط الأعداد', 'الساعة', 'الميزان'], correct_answer: '0', explanation_ar: 'مخطط فن (Venn) يوضح تقاطع المجموعات بمنطقة مشتركة.', image_key: 'M_VENN' },

  // ════ أسئلة المواد: إسلامية + اجتماعيات + لغة عربية (٢٠٠ سؤال) ════
  ...BLOOM_ISLAMIC,
  ...BLOOM_SOCIAL,
  ...BLOOM_ARABIC,
];