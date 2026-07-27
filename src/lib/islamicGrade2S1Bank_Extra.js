// التربية الإسلامية — الصف الثاني — الفصل الأول — أسئلة إضافية للوصول إلى 300 سؤال
// موزّعة على: u1l1, u1l2, u1l3, u1l4, u2l1, u2l2, u3l1

export const ISLAMIC_EXTRA_1 = [
  // ════════ الوحدة 1 / الدرس 1: الآداب (1) (ص34) — 36 سؤالاً ════════
  { id:'u1l1q9', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الآداب تعني:', paragraph:'الآداب = السلوك الحسن. (с34)', options:[{text:'السلوك الحسن',correct:true},{text:'اللعب',correct:false},{text:'الأكل',correct:false},{text:'النوم',correct:false}],
    explanation:'الآداب تعني السلوك الحسن في القول والفعل.', goldenRule:'الآداب = سلوك حسن.',
    feedbackQuestion:{question:'مَن يتحلّى بالآداب يحبه?',options:[{text:'الناس',correct:true},{text:'الوحوش',correct:false},{text:'الجماد',correct:false},{text:'النبات',correct:false}]}},

  { id:'u1l1q10', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الإسلام حثّ على الآداب الحسنة.', paragraph:'الإسلام يحثّ على الآداب. (с34)', correctAnswer:true,
    explanation:'الإسلام يحثّ على كل أدب حسن.', goldenRule:'الإسلام دين الآداب.'},

  { id:'u1l1q11', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'من آداب المسلم:', paragraph:'الآداب. (с34)', options:[{text:'الصدق',correct:true},{text:'الكذب',correct:false},{text:'الغدر',correct:false},{text:'الخصام',correct:false}],
    explanation:'الصدق من آداب المسلم.', goldenRule:'الصدق من الآداب.'},

  { id:'u1l1q12', unit:'unit1', lesson:'u1l1', page:34, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب آداب الحوار:', paragraph:'الآداب. (с34)', items:['الإنصات','الكلام بلطف','الشكر'], correctOrder:[0,1,2],
    explanation:'إنصات ← كلام بلطف ← شكر.', goldenRule:'للحوار آداب.'},

  { id:'u1l1q13', unit:'unit1', lesson:'u1l1', page:34, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: أدب حسن أم سيّئ؟', paragraph:'الآداب. (с34)', categories:['حسن ✅','سيّئ ❌'],
    items:[{text:'الصدق',correct_category:0},{text:'الكذب',correct_category:1},{text:'الإنصات',correct_category:0},{text:'المقاطعة',correct_category:1},{text:'الاحترام',correct_category:0},{text:'الصراخ',correct_category:1}],
    explanation:'حسن: صدق، إنصات، احترام. سيّئ: كذب، مقاطعة، صراخ.', goldenRule:'الآداب الحسنة تُزكي النفس.'},

  { id:'u1l1q14', unit:'unit1', lesson:'u1l1', page:34, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"من آداب المسلم ___ ."', paragraph:'الآداب. (с34)', blanks:['الصدق'], wordBank:['الصدق','الكذب','الغدر'],
    explanation:'الصدق من آداب المسلم.', goldenRule:'الصدق أدب عظيم.'},

  { id:'u1l1q15', unit:'unit1', lesson:'u1l1', page:34, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الأدب بثمرته:', paragraph:'الآداب. (с34)', pairs:[{left:'الصدق',right:'الثقة'},{left:'الإنصات',right:'الفهم'},{left:'الاحترام',right:'المحبّة'}],
    explanation:'الصدق ثقة، الإنصات فهم، الاحترام محبّة.', goldenRule:'كل أدب له ثمرة.'},

  { id:'u1l1q16', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن يتحلّى بالآداب يحبه:', paragraph:'الآداب. (с34)', options:[{text:'الناس',correct:true},{text:'الحيوان',correct:false},{text:'الجماد',correct:false},{text:'النبات',correct:false}],
    explanation:'المؤدّب محبوب بين الناس.', goldenRule:'الأدب يكسب المحبّة.'},

  { id:'u1l1q17', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الكذب من الآداب الحسنة.', paragraph:'الآداب. (с34)', correctAnswer:false,
    explanation:'الكذب سيّئ وليس من الآداب.', goldenRule:'الكذب من السيّئات.'},

  { id:'u1l1q18', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند التحدّث مع الكبير نراعي:', paragraph:'الآداب. (с34)', options:[{text:'الإنصات واحترامه',correct:true},{text:'الصراخ',correct:false},{text:'المقاطعة',correct:false},{text:'الخصام',correct:false}],
    explanation:'نراعي الإنصات واحترام الكبير.', goldenRule:'احترام الكبير أدب.'},

  { id:'u1l1q19', unit:'unit1', lesson:'u1l1', page:34, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الإسلام حثّ على ___ الحسنة."', paragraph:'الآداب. (с34)', blanks:['الآداب'], wordBank:['الآداب','الأذى','الخصام'],
    explanation:'الإسلام حثّ على الآداب الحسنة.', goldenRule:'الإسلام دين أدب.'},

  { id:'u1l1q20', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح أدباً حسناً في المدرسة:', paragraph:'الآداب. (с34)', options:[{text:'احترام المعلم',correct:true},{text:'الصراخ',correct:false},{text:'اللعب في الصف',correct:false},{text:'الخصام',correct:false}],
    explanation:'احترام المعلم أدب حسن.', goldenRule:'احترام المعلم أدب.'},

  { id:'u1l1q21', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الإنصات أدب من الآداب.', paragraph:'الآداب. (с34)', correctAnswer:true,
    explanation:'الإنصات من الآداب الحسنة.', goldenRule:'الإنصات أدب.'},

  { id:'u1l1q22', unit:'unit1', lesson:'u1l1', page:34, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: من آداب الحوار أم لا؟', paragraph:'الآداب. (с34)', categories:['من الآداب ✅','ليس منها ❌'],
    items:[{text:'الإنصات',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الابتسامة',correct_category:0},{text:'المقاطعة',correct_category:1},{text:'احترام الكبير',correct_category:0},{text:'الإهمال',correct_category:1}],
    explanation:'من الآداب: إنصات، ابتسامة، احترام.', goldenRule:'آداب الحوار = إنصات + احترام.'},

  { id:'u1l1q23', unit:'unit1', lesson:'u1l1', page:34, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالتصرف المؤدّب:', paragraph:'الآداب. (с34)', pairs:[{left:'دخول الصف',right:'السلام'},{left:'حديث المعلم',right:'الإنصات'},{left:'السؤال',right:'الاستئذان'}],
    explanation:'لكل موقف أدب.', goldenRule:'الأدب في كل موقف.'},

  { id:'u1l1q24', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'ضد الأدب:', paragraph:'الآداب. (с34)', options:[{text:'السوء',correct:true},{text:'الصدق',correct:false},{text:'الحسن',correct:false},{text:'الجمال',correct:false}],
    explanation:'ضد الأدب السوء وقبح السلوك.', goldenRule:'الأدب × السوء.'},

  { id:'u1l1q25', unit:'unit1', lesson:'u1l1', page:34, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب آداب الاستئذان:', paragraph:'الاستئذان. (с34)', items:['الطرق','السلام','الانتظار','الدخول'], correctOrder:[0,1,2,3],
    explanation:'طرق ← سلام ← انتظار ← دخول.', goldenRule:'الاستئذان له آداب.'},

  { id:'u1l1q26', unit:'unit1', lesson:'u1l1', page:34, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"المؤدّب محبوب عند ___ ."', paragraph:'الآداب. (с34)', blanks:['الناس'], wordBank:['الناس','الوحش','الجماد'],
    explanation:'المؤدّب محبوب عند الناس.', goldenRule:'الأدب يكسب المحبّة.'},

  { id:'u1l1q27', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'حسن الخلق من أهمّ الآداب.', paragraph:'الآداب. (с34)', correctAnswer:true,
    explanation:'حسن الخلق أعظم الآداب.', goldenRule:'حسن الخلق أعظم الأدب.'},

  { id:'u1l1q28', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا حثّ الإسلام على الآداب؟', paragraph:'الآداب. (с34)', options:[{text:'لكمال المجتمع',correct:true},{text:'لإفساد الناس',correct:false},{text:'للخصام',correct:false},{text:'للكسل',correct:false}],
    explanation:'الآداب تكمل المجتمع وتقوّيه.', goldenRule:'الآداب عماد المجتمع.'},

  { id:'u1l1q29', unit:'unit1', lesson:'u1l1', page:34, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'الآداب. (с34)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'الصدق',correct_category:0},{text:'الكذب',correct_category:1},{text:'الإنصات',correct_category:0},{text:'الخصام',correct_category:1},{text:'الاحترام',correct_category:0},{text:'السخرية',correct_category:1}],
    explanation:'يعجبني: صدق، إنصات، احترام. لا يعجبني: كذب، خصام، سخرية.', goldenRule:'الأخلاق الحسنة تُعجب.'},

  { id:'u1l1q30', unit:'unit1', lesson:'u1l1', page:34, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الخُلق بالسلوك:', paragraph:'الآداب. (с34)', pairs:[{left:'الصدق',right:'قول الحق'},{left:'الإنصات',right:'الإصغاء'},{left:'الاحترام',right:'التوقير'}],
    explanation:'الصدق قول الحق، الإنصات الإصغاء.', goldenRule:'الخُلق = سلوك.'},

  { id:'u1l1q31', unit:'unit1', lesson:'u1l1', page:34, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أتحلّى بـ ___ في كل مكان."', paragraph:'الآداب. (с34)', blanks:['الأدب'], wordBank:['الأدب','الأذى','الخصام'],
    explanation:'أتحلّى بالأدب في كل مكان.', goldenRule:'الأدب في كل مكان.'},

  { id:'u1l1q32', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الأدب مع الوالدين:', paragraph:'الآداب. (с34)', options:[{text:'الطاعة والإحسان',correct:true},{text:'العصيان',correct:false},{text:'الصراخ',correct:false},{text:'الخصام',correct:false}],
    explanation:'الأدب مع الوالدين طاعة وإحسان.', goldenRule:'برّ الوالدين أدب.'},

  { id:'u1l1q33', unit:'unit1', lesson:'u1l1', page:34, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب: من الأدب للأكمل:', paragraph:'الآداب. (с34)', items:['الصدق','الأمانة','حسن الخلق'], correctOrder:[0,1,2],
    explanation:'صدق ← أمانة ← حسن خلق.', goldenRule:'حسن الخلق أعظم.'},

  { id:'u1l1q34', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'المؤدّب محبوب عند الله والناس.', paragraph:'الآداب. (с34)', correctAnswer:true,
    explanation:'المؤدّب محبوب عند الله والناس.', goldenRule:'الأدب يكسب المحبّتين.'},

  { id:'u1l1q35', unit:'unit1', lesson:'u1l1', page:34, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: أدب مع الكبير أم مع الصغير؟', paragraph:'الآداب. (с34)', categories:['مع الكبير','مع الجميع'],
    items:[{text:'الوقوف له',correct_category:0},{text:'الإنصات',correct_category:1},{text:'خدمته',correct_category:0},{text:'الابتسامة',correct_category:1},{text:'الطاعة',correct_category:0},{text:'الصدق',correct_category:1}],
    explanation:'بعض الآداب خاصّة بالكبير وبعضها عامّة.', goldenRule:'لكل مقام أدب.'},

  { id:'u1l1q36', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الأدب:', paragraph:'الآداب. (с34)', options:[{text:'الأدب يزين صاحبه',correct:true},{text:'الأدب للعب',correct:false},{text:'الأدب للنوم',correct:false},{text:'الأدب للأكل',correct:false}],
    explanation:'الأدب يزين صاحبه.', goldenRule:'الأدب زينة.'},

  { id:'u1l1q37', unit:'unit1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'understand', difficulty:'medium',
    question:'المقاطعة من آداب الحوار.', paragraph:'الآداب. (с34)', correctAnswer:false,
    explanation:'المقاطعة ليست من آداب الحوار.', goldenRule:'المقاطعة سيّئة.'},

  { id:'u1l1q38', unit:'unit1', lesson:'u1l1', page:34, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"أحترم معلمي وأ___ له."', paragraph:'الآداب. (с34)', blanks:['نصت'], wordBank:['نصت','صرخ','خاصم'],
    explanation:'أنصت لمعلمي أدباً.', goldenRule:'إنصات المعلم أدب.'},

  { id:'u1l1q39', unit:'unit1', lesson:'u1l1', page:34, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل التصرف بنتيجته:', paragraph:'الآداب. (с34)', pairs:[{left:'الصدق',right:'الثقة'},{left:'الكذب',right:'الخسران'},{left:'الأدب',right:'المحبّة'}],
    explanation:'الصدق ثقة، الكذب خسران، الأدب محبّة.', goldenRule:'كل تصرّف له نتيجة.'},

  { id:'u1l1q40', unit:'unit1', lesson:'u1l1', page:34, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أفضل الآداب:', paragraph:'الآداب. (с34)', options:[{text:'حسن الخلق',correct:true},{text:'الكذب',correct:false},{text:'الخصام',correct:false},{text:'الكسل',correct:false}],
    explanation:'حسن الخلق أفضل الآداب.', goldenRule:'حسن الخلق أعظم الأدب.'},

  // ════════ الوحدة 1 / الدرس 2: الآداب (2) (ص38) — 36 سؤالاً ════════
  { id:'u1l2q9', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'من آداب الطعام:', paragraph:'آداب الطعام. (с38)', options:[{text:'التسمية',correct:true},{text:'الأكل بسرعة',correct:false},{text:'العبث',correct:false},{text:'الصراخ',correct:false}],
    explanation:'من آداب الطعام التسمية والأكل باليمين.', goldenRule:'سمّ وكل باليمين.',
    feedbackQuestion:{question:'قبل الأكل نقول:',options:[{text:'بسم الله',correct:true},{text:'لا إله',correct:false},{text:'الله أكبر',correct:false},{text:'الحمد',correct:false}]}},

  { id:'u1l2q10', unit:'unit1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الأكل باليمين من آداب الطعام.', paragraph:'آداب الطعام. (с38)', correctAnswer:true,
    explanation:'الأكل باليمين أدب نبوي.', goldenRule:'كل باليمين.'},

  { id:'u1l2q11', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'قبل الأكل نقول:', paragraph:'آداب الطعام. (с38)', options:[{text:'بسم الله',correct:true},{text:'الحمد لله',correct:false},{text:'الله أكبر',correct:false},{text:'لا إله',correct:false}],
    explanation:'نبدأ الطعام بـ"بسم الله".', goldenRule:'سمّ قبل الأكل.'},

  { id:'u1l2q12', unit:'unit1', lesson:'u1l2', page:38, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب آداب الطعام:', paragraph:'آداب الطعام. (с38)', items:['التسمية','الأكل باليمين','الحمد'], correctOrder:[0,1,2],
    explanation:'تسمية ← أكل باليمين ← حمد.', goldenRule:'للطعام آداب.'},

  { id:'u1l2q13', unit:'unit1', lesson:'u1l2', page:38, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من آداب الطعام أم لا؟', paragraph:'آداب الطعام. (с38)', categories:['من الآداب ✅','ليس منها ❌'],
    items:[{text:'التسمية',correct_category:0},{text:'الأكل بشمال',correct_category:1},{text:'الأكل باليمين',correct_category:0},{text:'العبث',correct_category:1},{text:'الحمد',correct_category:0},{text:'الإسراف',correct_category:1}],
    explanation:'آداب: تسمية، يمين، حمد. ليس منها: شمال، عبث، إسراف.', goldenRule:'الآداب تحفظ الطعام.'},

  { id:'u1l2q14', unit:'unit1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"بعد الطعام نقول ___ لله."', paragraph:'آداب الطعام. (с38)', blanks:['الحمد'], wordBank:['الحمد','الشكر','الثناء'],
    explanation:'بعد الطعام نقول الحمد لله.', goldenRule:'احمد بعد الطعام.'},

  { id:'u1l2q15', unit:'unit1', lesson:'u1l2', page:38, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الأدب بموضعه:', paragraph:'الآداب. (с38)', pairs:[{left:'التسمية',right:'قبل الأكل'},{left:'الحمد',right:'بعد الأكل'},{left:'اليمين',right:'أثناء الأكل'}],
    explanation:'التسمية قبل، الحمد بعد، اليمين أثناء.', goldenRule:'لكل أدب وقته.'},

  { id:'u1l2q16', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'آداب الشرب تشمل:', paragraph:'آداب الشرب. (с38)', options:[{text:'الشرب جالساً',correct:true},{text:'الشرب واقفاً',correct:false},{text:'اللعب',correct:false},{text:'الصراخ',correct:false}],
    explanation:'نشرب جالسين ونسمّي.', goldenRule:'اشرب جالساً ومسمّياً.'},

  { id:'u1l2q17', unit:'unit1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الإسراف في الطعام أدب حسن.', paragraph:'آداب الطعام. (с38)', correctAnswer:false,
    explanation:'الإسراف سيّئ وليس من الآداب.', goldenRule:'لا إسراف في الطعام.'},

  { id:'u1l2q18', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند الأكل نستخدم:', paragraph:'آداب الطعام. (с38)', options:[{text:'اليمين',correct:true},{text:'الشمال',correct:false},{text:'اليدين',correct:false},{text:'الفم فقط',correct:false}],
    explanation:'نستخدم اليمين في الأكل.', goldenRule:'اليمين في الطعام.'},

  { id:'u1l2q19', unit:'unit1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"نبدأ الطعام بـ ___ ."', paragraph:'آداب الطعام. (с38)', blanks:['التسمية'], wordBank:['التسمية','الحمد','الشكر'],
    explanation:'نبدأ بـ"بسم الله".', goldenRule:'سمّ وكل.'},

  { id:'u1l2q20', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح أدباً في الأكل:', paragraph:'آداب الطعام. (с38)', options:[{text:'غسل اليدين',correct:true},{text:'الأكل بسرعة',correct:false},{text:'العبث',correct:false},{text:'الصراخ',correct:false}],
    explanation:'غسل اليدين قبل الطعام أدب.', goldenRule:'النظافة إيمان.'},

  { id:'u1l2q21', unit:'unit1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الحمد بعد الطعام أدب.', paragraph:'آداب الطعام. (с38)', correctAnswer:true,
    explanation:'الحمد بعد الطعام شكر لله.', goldenRule:'احمد بعد الطعام.'},

  { id:'u1l2q22', unit:'unit1', lesson:'u1l2', page:38, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: أدب قبل الطعام أم بعده؟', paragraph:'آداب الطعام. (с38)', categories:['قبل ✅','بعد'],
    items:[{text:'غسل اليدين',correct_category:0},{text:'التسمية',correct_category:0},{text:'الحمد',correct_category:1},{text:'غسل اليدين بعد',correct_category:1},{text:'اليمين',correct_category:0},{text:'الدعاء',correct_category:1}],
    explanation:'قبل: غسل، تسمية، يمين. بعد: حمد، غسل، دعاء.', goldenRule:'قبل وبعد آداب.'},

  { id:'u1l2q23', unit:'unit1', lesson:'u1l2', page:38, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالأدب:', paragraph:'الآداب. (с38)', pairs:[{left:'قبل الأكل',right:'بسم الله'},{left:'بعد الأكل',right:'الحمد لله'},{left:'أثناء الأكل',right:'باليمين'}],
    explanation:'لكل وقت أدب.', goldenRule:'الأدب في كل وقت.'},

  { id:'u1l2q24', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'العبث في الطعام:', paragraph:'آداب الطعام. (с38)', options:[{text:'سيّئ',correct:true},{text:'حسن',correct:false},{text:'واجب',correct:false},{text:'سنّة',correct:false}],
    explanation:'العبث في الطعام سيّئ.', goldenRule:'لا عبث في الطعام.'},

  { id:'u1l2q25', unit:'unit1', lesson:'u1l2', page:38, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب آداب الطعام:', paragraph:'آداب الطعام. (с38)', items:['الغسل','التسمية','الأكل','الحمد'], correctOrder:[0,1,2,3],
    explanation:'غسل ← تسمية ← أكل ← حمد.', goldenRule:'للطعام آداب مرتّبة.'},

  { id:'u1l2q26', unit:'unit1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"نأكل بـ ___ ."', paragraph:'آداب الطعام. (с38)', blanks:['اليمين'], wordBank:['اليمين','الشمال','القفى'],
    explanation:'نأكل باليمين.', goldenRule:'اليمين للأكل.'},

  { id:'u1l2q27', unit:'unit1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'غسل اليدين قبل الأكل نظافة وأدب.', paragraph:'آداب الطعام. (с38)', correctAnswer:true,
    explanation:'غسل اليدين نظافة وأدب.', goldenRule:'النظافة إيمان.'},

  { id:'u1l2q28', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نسمّي قبل الأكل؟', paragraph:'آداب الطعام. (с38)', options:[{text:'بركة واتباع السنّة',correct:true},{text:'للعب',correct:false},{text:'للزينة',correct:false},{text:'للكسل',correct:false}],
    explanation:'التسمية بركة واتباع سنّة النبي.', goldenRule:'التسمية بركة.'},

  { id:'u1l2q29', unit:'unit1', lesson:'u1l2', page:38, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'آداب الطعام. (с38)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'التسمية',correct_category:0},{text:'العبث',correct_category:1},{text:'الحمد',correct_category:0},{text:'الإسراف',correct_category:1},{text:'اليمين',correct_category:0},{text:'اللعب بالطعام',correct_category:1}],
    explanation:'يعجبني: تسمية، حمد، يمين. لا يعجبني: عبث، إسراف، لعب.', goldenRule:'الآداب الحسنة تُعجب.'},

  { id:'u1l2q30', unit:'unit1', lesson:'u1l2', page:38, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الأدب بالحكم:', paragraph:'آداب الطعام. (с38)', pairs:[{left:'التسمية',right:'سنّة'},{left:'الأكل باليمين',right:'واجب'},{left:'الإسراف',right:'محظور'}],
    explanation:'التسمية سنّة، اليمين واجب، الإسراف محظور.', goldenRule:'لكل أدب حكم.'},

  { id:'u1l2q31', unit:'unit1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحمد الله ___ الطعام."', paragraph:'آداب الطعام. (с38)', blanks:['بعد'], wordBank:['بعد','قبل','أثناء'],
    explanation:'أحمد الله بعد الطعام.', goldenRule:'الحمد بعد الطعام.'},

  { id:'u1l2q32', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الأكل بشمال:', paragraph:'آداب الطعام. (с38)', options:[{text:'مخالف للسنّة',correct:true},{text:'سنّة',correct:false},{text:'واجب',correct:false},{text:'مستحبّ',correct:false}],
    explanation:'الأكل بالشمال مخالف للسنّة.', goldenRule:'اليمين سنّة.'},

  { id:'u1l2q33', unit:'unit1', lesson:'u1l2', page:38, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب من البداية للنهاية:', paragraph:'آداب الطعام. (с38)', items:['غسل اليدين','التسمية','الأكل','الحمد','غسل اليدين'], correctOrder:[0,1,2,3,4],
    explanation:'غسل ← تسمية ← أكل ← حمد ← غسل.', goldenRule:'للطعام آداب كاملة.'},

  { id:'u1l2q34', unit:'unit1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الشرب جالساً أدب.', paragraph:'آداب الشرب. (с38)', correctAnswer:true,
    explanation:'الشرب جالساً أدب نبوي.', goldenRule:'اشرب جالساً.'},

  { id:'u1l2q35', unit:'unit1', lesson:'u1l2', page:38, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: أدب طعام أم شرب؟', paragraph:'الآداب. (с38)', categories:['طعام','شرب'],
    items:[{text:'التسمية',correct_category:0},{text:'الجلوس',correct_category:1},{text:'اليمين',correct_category:0},{text:'التصفيق',correct_category:1},{text:'الحمد',correct_category:0},{text:'الشرب على دفعات',correct_category:1}],
    explanation:'بعض الآداب مشتركة وبعضها خاصّ.', goldenRule:'للطعام والشرب آداب.'},

  { id:'u1l2q36', unit:'unit1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن آداب الطعام:', paragraph:'آداب الطعام. (с38)', options:[{text:'سمّ وكل باليمين واحمد',correct:true},{text:'كل بسرعة',correct:false},{text:'العبث بالطعام',correct:false},{text:'إسراف',correct:false}],
    explanation:'سمّ وكل باليمين واحمد الله.', goldenRule:'آداب الطعام متكاملة.'},

  // ════════ الوحدة 1 / الدرس 3: مساعدة المحتاجين (ص42) — 36 سؤالاً ════════
  { id:'u1l3q9', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مساعدة المحتاجين:', paragraph:'مساعدة المحتاجين. (с42)', options:[{text:'خُلق إسلامي',correct:true},{text:'عبث',correct:false},{text:'لعب',correct:false},{text:'كسل',correct:false}],
    explanation:'مساعدة المحتاجين خُلق إسلامي عظيم.', goldenRule:'مساعدة المحتاجين فضيلة.',
    feedbackQuestion:{question:'من المحتاجين؟',options:[{text:'الفقراء',correct:true},{text:'الأغنياء',correct:false},{text:'الأقوياء',correct:false},{text:'الأصحّاء',correct:false}]}},

  { id:'u1l3q10', unit:'unit1', lesson:'u1l3', page:42, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الإسلام حثّ على مساعدة المحتاجين.', paragraph:'مساعدة المحتاجين. (с42)', correctAnswer:true,
    explanation:'الإسلام حثّ على إطعام الفقير ومساعدة الضعيف.', goldenRule:'الإسلام يحثّ على العون.'},

  { id:'u1l3q11', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'من المحتاجين:', paragraph:'المحتاجين. (с42)', options:[{text:'الفقير',correct:true},{text:'الغني',correct:false},{text:'القوي',correct:false},{text:'الصحيح',correct:false}],
    explanation:'الفقير والمريض واليتيم من المحتاجين.', goldenRule:'المحتاج = فقير ومريض ويتيم.'},

  { id:'u1l3q12', unit:'unit1', lesson:'u1l3', page:42, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب خطوات المساعدة:', paragraph:'المساعدة. (с42)', items:['معرفة الحاجة','التفكير','المساعدة','الدعاء'], correctOrder:[0,1,2,3],
    explanation:'معرفة ← تفكير ← مساعدة ← دعاء.', goldenRule:'المساعدة خطوات.'},

  { id:'u1l3q13', unit:'unit1', lesson:'u1l3', page:42, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من المحتاجين أم لا؟', paragraph:'المحتاجين. (с42)', categories:['محتاج 🤲','غير محتاج'],
    items:[{text:'الفقير',correct_category:0},{text:'الغني',correct_category:1},{text:'المريض',correct_category:0},{text:'الصحيح',correct_category:1},{text:'اليتيم',correct_category:0},{text:'القوي',correct_category:1}],
    explanation:'محتاج: فقير، مريض، يتيم.', goldenRule:'المحتاج يستحقّ العون.'},

  { id:'u1l3q14', unit:'unit1', lesson:'u1l3', page:42, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"أطعم ال___ من فضول طعامي."', paragraph:'المساعدة. (с42)', blanks:['فقير'], wordBank:['فقير','غني','قوي'],
    explanation:'إطعام الفقير مساعدة.', goldenRule:'إطعام الفقير صدقة.'},

  { id:'u1l3q15', unit:'unit1', lesson:'u1l3', page:42, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الحاجة بطريقة المساعدة:', paragraph:'المساعدة. (с42)', pairs:[{left:'الجوع',right:'إطعام'},{left:'المرض',right:'زيارة'},{left:'الفقر',right:'صدقة'}],
    explanation:'لكل حاجة طريقة عون.', goldenRule:'لكل حاجة عون.'},

  { id:'u1l3q16', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'ثمرة مساعدة المحتاجين:', paragraph:'المساعدة. (с42)', options:[{text:'محبّة الله والناس',correct:true},{text:'الخصام',correct:false},{text:'الكراهية',correct:false},{text:'العزلة',correct:false}],
    explanation:'مساعدة المحتاجين تكسب محبّة الله والناس.', goldenRule:'العون = محبّة.'},

  { id:'u1l3q17', unit:'unit1', lesson:'u1l3', page:42, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'مساعدة المحتاجين واجب على كل مسلم.', paragraph:'المساعدة. (с42)', correctAnswer:true,
    explanation:'المساعدة واجب بحسب الاستطاعة.', goldenRule:'العون واجب.'},

  { id:'u1l3q18', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا رأيت فقيراً جائعاً فعليك:', paragraph:'المساعدة. (с42)', options:[{text:'إطعامه',correct:true},{text:'تركه',correct:false},{text:'السخرية منه',correct:false},{text:'إغلاق الباب',correct:false}],
    explanation:'نطعم الجائع ونساعد الفقير.', goldenRule:'إطعام الجائع فضيلة.'},

  { id:'u1l3q19', unit:'unit1', lesson:'u1l3', page:42, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"مساعدة المحتاجين من ___ الإسلام."', paragraph:'المساعدة. (с42)', blanks:['أخلاق'], wordBank:['أخلاق','أذى','خصام'],
    explanation:'المساعدة من أخلاق الإسلام.', goldenRule:'العون خُلق إسلامي.'},

  { id:'u1l3q20', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة لمساعدة المريض:', paragraph:'المساعدة. (с42)', options:[{text:'زيارته والدعاء له',correct:true},{text:'تركه',correct:false},{text:'السخرية منه',correct:false},{text:'نسيانه',correct:false}],
    explanation:'زيارة المريض والدعاء له مساعدة.', goldenRule:'عيادة المريض صدقة.'},

  { id:'u1l3q21', unit:'unit1', lesson:'u1l3', page:42, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'اليتيم من المحتاجين.', paragraph:'المحتاجين. (с42)', correctAnswer:true,
    explanation:'اليتيم محتاج للرعاية والعون.', goldenRule:'كفالة اليتيم فضيلة.'},

  { id:'u1l3q22', unit:'unit1', lesson:'u1l3', page:42, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: طريقة مساعدة أم لا؟', paragraph:'المساعدة. (с42)', categories:['مساعدة ✅','ليست مساعدة ❌'],
    items:[{text:'الصدقة',correct_category:0},{text:'السخرية',correct_category:1},{text:'الإطعام',correct_category:0},{text:'الترك',correct_category:1},{text:'الزيارة',correct_category:0},{text:'الخصام',correct_category:1}],
    explanation:'مساعدة: صدقة، إطعام، زيارة.', goldenRule:'المساعدة بالأفعال.'},

  { id:'u1l3q23', unit:'unit1', lesson:'u1l3', page:42, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل المحتاج بنوع العون:', paragraph:'المساعدة. (с42)', pairs:[{left:'الجائع',right:'طعام'},{left:'العاري',right:'لباس'},{left:'المريض',right:'دواء وزيارة'}],
    explanation:'لكل محتاج عون يناسبه.', goldenRule:'العون بحسب الحاجة.'},

  { id:'u1l3q24', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"الصدقة" تعني:', paragraph:'المساعدة. (с42)', options:[{text:'العطاء للفقير',correct:true},{text:'الأذى',correct:false},{text:'الخصام',correct:false},{text:'اللعب',correct:false}],
    explanation:'الصدقة العطاء للفقير.', goldenRule:'الصدقة = عطاء.'},

  { id:'u1l3q25', unit:'unit1', lesson:'u1l3', page:42, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب من الأهمّ في المساعدة:', paragraph:'المساعدة. (с42)', items:['الإطعام','اللباس','السكن','التعليم'], correctOrder:[0,1,2,3],
    explanation:'الأهمّ: إطعام ← لباس ← سكن ← تعليم.', goldenRule:'للحاجات أولويات.'},

  { id:'u1l3q26', unit:'unit1', lesson:'u1l3', page:42, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"من سلّم الناس من ___ لسانه ويده فهو مسلم."', paragraph:'المساعدة. (с42)', blanks:['أذى'], wordBank:['أذى','خير','عون'],
    explanation:'سلامة الناس من أذى اللسان واليد.', goldenRule:'لا أذى للناس.'},

  { id:'u1l3q27', unit:'unit1', lesson:'u1l3', page:42, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'مساعدة المحتاجين تزيد المحبّة.', paragraph:'المساعدة. (с42)', correctAnswer:true,
    explanation:'العون يزيد المحبّة بين الناس.', goldenRule:'العون = محبّة.'},

  { id:'u1l3q28', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نذكر الله قبل مساعدة المحتاج؟', paragraph:'المساعدة. (с42)', options:[{text:'إخلاص النيّة',correct:true},{text:'للزينة',correct:false},{text:'للرياء',correct:false},{text:'للعب',correct:false}],
    explanation:'نخلص النيّة لله في المساعدة.', goldenRule:'الإخلاص أساس العون.'},

  { id:'u1l3q29', unit:'unit1', lesson:'u1l3', page:42, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'المساعدة. (с42)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'إطعام الفقير',correct_category:0},{text:'السخرية',correct_category:1},{text:'الصدقة',correct_category:0},{text:'الخصام',correct_category:1},{text:'عيادة المريض',correct_category:0},{text:'الإهمال',correct_category:1}],
    explanation:'يعجبني: إطعام، صدقة، عيادة. لا يعجبني: سخرية، خصام، إهمال.', goldenRule:'الأخلاق الحسنة تُعجب.'},

  { id:'u1l3q30', unit:'unit1', lesson:'u1l3', page:42, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الفعل بالحكم:', paragraph:'المساعدة. (с42)', pairs:[{left:'الصدقة',right:'مستحبّة'},{left:'إطعام الجائع',right:'واجب'},{left:'السخرية',right:'محرّمة'}],
    explanation:'الصدقة مستحبّة، الإطعام واجب، السخرية محرّمة.', goldenRule:'لكل فعل حكم.'},

  { id:'u1l3q31', unit:'unit1', lesson:'u1l3', page:42, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أطعم الجائع وأ___ الفقير."', paragraph:'المساعدة. (с42)', blanks:['عين'], wordBank:['عين','هجر','خاصم'],
    explanation:'أطعم وأعين الفقير.', goldenRule:'العون فضيلة.'},

  { id:'u1l3q32', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'كفالة اليتيم:', paragraph:'اليتيم. (с42)', options:[{text:'فضيلة عظيمة',correct:true},{text:'لعب',correct:false},{text:'عبث',correct:false},{text:'هدر',correct:false}],
    explanation:'كفالة اليتيم فضيلة عظيمة.', goldenRule:'كافل اليتيم مع النبي في الجنة.'},

  { id:'u1l3q33', unit:'unit1', lesson:'u1l3', page:42, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب أنواع المساعدة من الأسهل:', paragraph:'المساعدة. (с42)', items:['الابتسامة','الكلمة الطيبة','الصدقة','كفالة يتيم'], correctOrder:[0,1,2,3],
    explanation:'ابتسامة ← كلمة ← صدقة ← كفالة.', goldenRule:'كل معروف صدقة.'},

  { id:'u1l3q34', unit:'unit1', lesson:'u1l3', page:42, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الابتسامة في وجه أخيك صدقة.', paragraph:'المساعدة. (с42)', correctAnswer:true,
    explanation:'الابتسامة صدقة.', goldenRule:'الابتسامة صدقة.'},

  { id:'u1l3q35', unit:'unit1', lesson:'u1l3', page:42, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: عون مادي أم معنوي؟', paragraph:'المساعدة. (с42)', categories:['مادي','معنوي'],
    items:[{text:'الصدقة',correct_category:0},{text:'الابتسامة',correct_category:1},{text:'الإطعام',correct_category:0},{text:'الكلمة الطيبة',correct_category:1},{text:'اللباس',correct_category:0},{text:'الزيارة',correct_category:1}],
    explanation:'مادي: صدقة، إطعام، لباس. معنوي: ابتسامة، كلمة، زيارة.', goldenRule:'العون مادي ومعنوي.'},

  { id:'u1l3q36', unit:'unit1', lesson:'u1l3', page:42, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن مساعدة المحتاجين:', paragraph:'المساعدة. (с42)', options:[{text:'أعين المحتاج ابتغاء الأجر',correct:true},{text:'أهجر الفقير',correct:false},{text:'أسخر من الضعيف',correct:false},{text:'أنسى المحتاج',correct:false}],
    explanation:'أعين المحتاج ابتغاء الأجر.', goldenRule:'العون لله.'},

  // ════════ الوحدة 1 / الدرس 4: آداب الجار (ص43) — 36 سؤالاً ════════
  { id:'u1l4q9', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجار:', paragraph:'الجار. (с43)', options:[{text:'المجاور في السكن',correct:true},{text:'الصديق البعيد',correct:false},{text:'القريب',correct:false},{text:'الغريب',correct:false}],
    explanation:'الجار المجاور في السكن.', goldenRule:'الجار = المجاور.',
    feedbackQuestion:{question:'حقّ الجار:',options:[{text:'الإحسان إليه',correct:true},{text:'الأذى',correct:false},{text:'الخصام',correct:false},{text:'الإهمال',correct:false}]}},

  { id:'u1l4q10', unit:'unit1', lesson:'u1l4', page:43, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الإسلام حثّ على إكرام الجار.', paragraph:'آداب الجار. (с43)', correctAnswer:true,
    explanation:'الإسلام حثّ على إكرام الجار وعدم إيذائه.', goldenRule:'إكرام الجار واجب.'},

  { id:'u1l4q11', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'من آداب الجوار:', paragraph:'آداب الجوار. (с43)', options:[{text:'السلام عليه',correct:true},{text:'رفع الصوت',correct:false},{text:'رمي القمامة',correct:false},{text:'الإزعاج',correct:false}],
    explanation:'من آداب الجوار السلام ومساعدة الجار.', goldenRule:'آداب الجوار = إحسان.'},

  { id:'u1l4q12', unit:'unit1', lesson:'u1l4', page:43, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب آداب الجوار:', paragraph:'آداب الجوار. (с43)', items:['السلام','السؤال','المساعدة','عدم الأذى'], correctOrder:[0,1,2,3],
    explanation:'سلام ← سؤال ← مساعدة ← لا أذى.', goldenRule:'للجوار آداب.'},

  { id:'u1l4q13', unit:'unit1', lesson:'u1l4', page:43, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من آداب الجوار أم لا؟', paragraph:'آداب الجوار. (с43)', categories:['من الآداب ✅','ليس منها ❌'],
    items:[{text:'السلام',correct_category:0},{text:'الصراخ',correct_category:1},{text:'المساعدة',correct_category:0},{text:'القمامة',correct_category:1},{text:'الإهداء',correct_category:0},{text:'الإزعاج',correct_category:1}],
    explanation:'آداب: سلام، مساعدة، إهداء. سيّئة: صراخ، قمامة، إزعاج.', goldenRule:'آداب الجوار = إحسان.'},

  { id:'u1l4q14', unit:'unit1', lesson:'u1l4', page:43, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الجار ___ الدار."', paragraph:'آداب الجوار. (с43)', blanks:['قبل'], wordBank:['قبل','بعد','تحت'],
    explanation:'الجار قبل الدار.', goldenRule:'الجار أهمّ من الدار.'},

  { id:'u1l4q15', unit:'unit1', lesson:'u1l4', page:43, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الأدب بموضعه:', paragraph:'آداب الجوار. (с43)', pairs:[{left:'السلام',right:'عند اللقاء'},{left:'المساعدة',right:'عند الحاجة'},{left:'الزيارة',right:'عند المرض'}],
    explanation:'لكل أدب موضع.', goldenRule:'الأدب في موضعه.'},

  { id:'u1l4q16', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'إيذاء الجار:', paragraph:'آداب الجوار. (с43)', options:[{text:'محرّم',correct:true},{text:'حسن',correct:false},{text:'واجب',correct:false},{text:'مستحبّ',correct:false}],
    explanation:'إيذاء الجار محرّم في الإسلام.', goldenRule:'لا أذى للجار.'},

  { id:'u1l4q17', unit:'unit1', lesson:'u1l4', page:43, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'إهداء الطعام للجار سنّة.', paragraph:'آداب الجوار. (с43)', correctAnswer:true,
    explanation:'إهداء الطعام للجار سنّة نبوية.', goldenRule:'إهداء الجار سنّة.'},

  { id:'u1l4q18', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند سماع صراخ الجار ليلاً:', paragraph:'آداب الجوار. (с43)', options:[{text:'أخفض صوتي',correct:true},{text:'أصرخ معه',correct:false},{text:'أترك المنزل',correct:false},{text:'أتصلّى',correct:false}],
    explanation:'أخفض صوتي احتراماً للجار.', goldenRule:'خفض الصوت احترام.'},

  { id:'u1l4q19', unit:'unit1', lesson:'u1l4', page:43, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"من آداب الجوار ___ على الجار."', paragraph:'آداب الجوار. (с43)', blanks:['السلام'], wordBank:['السلام','الصراخ','الإيذاء'],
    explanation:'السلام على الجار أدب.', goldenRule:'السلام أدب الجوار.'},

  { id:'u1l4q20', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح هديّة للجار:', paragraph:'آداب الجوار. (с43)', options:[{text:'طعام',correct:true},{text:'قمامة',correct:false},{text:'إزعاج',correct:false},{text:'خصام',correct:false}],
    explanation:'إهداء الطعام للجار حسن جوار.', goldenRule:'الطعام هديّة الجار.'},

  { id:'u1l4q21', unit:'unit1', lesson:'u1l4', page:43, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الجار له حقوق.', paragraph:'آداب الجوار. (с43)', correctAnswer:true,
    explanation:'للجار حقوق كثيرة.', goldenRule:'للجار حقوق.'},

  { id:'u1l4q22', unit:'unit1', lesson:'u1l4', page:43, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يحترم الجار أم يؤذيه؟', paragraph:'آداب الجوار. (с43)', categories:['يحترم ✅','يؤذي ❌'],
    items:[{text:'السلام',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الإهداء',correct_category:0},{text:'القمامة',correct_category:1},{text:'السؤال',correct_category:0},{text:'الإزعاج',correct_category:1}],
    explanation:'يحترم: سلام، إهداء، سؤال.', goldenRule:'الاحترام ضدّ الأذى.'},

  { id:'u1l4q23', unit:'unit1', lesson:'u1l4', page:43, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل التصرف بنتيجته:', paragraph:'آداب الجوار. (с43)', pairs:[{left:'حسن الجوار',right:'محبّة'},{left:'الإيذاء',right:'خصام'},{left:'الإهداء',right:'ودّ'}],
    explanation:'حسن الجوار محبّة، الإيذاء خصام.', goldenRule:'كل تصرّف له نتيجة.'},

  { id:'u1l4q24', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"إكرام الجار" تعني:', paragraph:'آداب الجوار. (с43)', options:[{text:'الإحسان إليه',correct:true},{text:'الأذى',correct:false},{text:'الإهمال',correct:false},{text:'الخصام',correct:false}],
    explanation:'إكرام الجار = الإحسان إليه.', goldenRule:'الإكرام = إحسان.'},

  { id:'u1l4q25', unit:'unit1', lesson:'u1l4', page:43, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب حقوق الجار:', paragraph:'آداب الجوار. (с43)', items:['عدم الأذى','السلام','المساعدة','الإهداء'], correctOrder:[0,1,2,3],
    explanation:'لا أذى ← سلام ← مساعدة ← إهداء.', goldenRule:'للجار حقوق.'},

  { id:'u1l4q26', unit:'unit1', lesson:'u1l4', page:43, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"أحبّ جاري و___ عنه."', paragraph:'آداب الجوار. (с43)', blanks:['أسأل'], wordBank:['أسأل','أهجر','أنسى'],
    explanation:'أسأل عن جاري أدباً.', goldenRule:'السؤال عن الجار أدب.'},

  { id:'u1l4q27', unit:'unit1', lesson:'u1l4', page:43, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'حسن الجوار يزيد المحبّة.', paragraph:'آداب الجوار. (с43)', correctAnswer:true,
    explanation:'حسن الجوار يزيد المحبّة بين الجيران.', goldenRule:'حسن الجوار = محبّة.'},

  { id:'u1l4q28', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا أهدّي الطعام لجاري؟', paragraph:'آداب الجوار. (с43)', options:[{text:'إتباع السنّة وزيادة المودّة',correct:true},{text:'للزينة',correct:false},{text:'للرياء',correct:false},{text:'للعب',correct:false}],
    explanation:'الإهداء سنّة وزيادة مودّة.', goldenRule:'الإهداء مودّة.'},

  { id:'u1l4q29', unit:'unit1', lesson:'u1l4', page:43, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'آداب الجوار. (с43)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'إهداء الجار',correct_category:0},{text:'إزعاجه',correct_category:1},{text:'زيارة المريض',correct_category:0},{text:'الصراخ',correct_category:1},{text:'السلام',correct_category:0},{text:'القمامة',correct_category:1}],
    explanation:'يعجبني: إهداء، زيارة، سلام.', goldenRule:'الآداب الحسنة تُعجب.'},

  { id:'u1l4q30', unit:'unit1', lesson:'u1l4', page:43, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الحقّ بالمسؤولية:', paragraph:'آداب الجوار. (с43)', pairs:[{left:'عدم الأذى',right:'لا صراخ'},{left:'الإكرام',right:'إهداء'},{left:'السلام',right:'عند اللقاء'}],
    explanation:'لكل حقّ مسؤولية.', goldenRule:'الحقوق تستلزم مسؤوليات.'},

  { id:'u1l4q31', unit:'unit1', lesson:'u1l4', page:43, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أهدي جاري ___ عند الطبخ."', paragraph:'آداب الجوار. (с43)', blanks:['طعاماً'], wordBank:['طعاماً','قمامة','إزعاجاً'],
    explanation:'أهدي طعاماً لجاري.', goldenRule:'إهداء الطعام سنّة.'},

  { id:'u1l4q32', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'أوّل حقّ الجار:', paragraph:'آداب الجوار. (с43)', options:[{text:'عدم الإيذاء',correct:true},{text:'الإيذاء',correct:false},{text:'الخصام',correct:false},{text:'الإهمال',correct:false}],
    explanation:'أوّل حقّ الجار عدم الإيذاء.', goldenRule:'لا أذى للجار.'},

  { id:'u1l4q33', unit:'unit1', lesson:'u1l4', page:43, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات حسن الجوار:', paragraph:'آداب الجوار. (с43)', items:['السلام','السؤال','المساعدة','الإهداء'], correctOrder:[0,1,2,3],
    explanation:'سلام ← سؤال ← مساعدة ← إهداء.', goldenRule:'للجوار خطوات.'},

  { id:'u1l4q34', unit:'unit1', lesson:'u1l4', page:43, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'رمي القمامة عند الجار أذى.', paragraph:'آداب الجوار. (с43)', correctAnswer:true,
    explanation:'رمي القمامة أذى للجار.', goldenRule:'لا أذى للجار.'},

  { id:'u1l4q35', unit:'unit1', lesson:'u1l4', page:43, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: صوت مرتفع أم منخفض؟', paragraph:'آداب الجوار. (с43)', categories:['منخفض ✅','مرتفع ❌'],
    items:[{text:'الحديث مع الجار',correct_category:0},{text:'السلام',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الموسيقى العالية',correct_category:1},{text:'الهمس بلطف',correct_category:0},{text:'الضجيج',correct_category:1}],
    explanation:'المنخفض أدب والمرتفع أذى.', goldenRule:'خفض الصوت أدب.'},

  { id:'u1l4q36', unit:'unit1', lesson:'u1l4', page:43, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن حسن الجوار:', paragraph:'آداب الجوار. (с43)', options:[{text:'أحبّ جاري وأكرمه',correct:true},{text:'أهجر جاري',correct:false},{text:'أؤذي جاري',correct:false},{text:'أنسى جاري',correct:false}],
    explanation:'أحبّ جاري وأكرمه.', goldenRule:'حسن الجوار = محبّة + إكرام.'},

  // ════════ الوحدة 2 / الدرس 1: أذكار الصباح والمساء (ص46) — 32 سؤالاً ════════
  { id:'u2l1q9', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'أذكار الصباح تُقال:', paragraph:'أذكار الصباح. (с46)', options:[{text:'في الصباح',correct:true},{text:'في الليل',correct:false},{text:'في الظهر',correct:false},{text:'في العصر',correct:false}],
    explanation:'أذكار الصباح تُقال في الصباح.', goldenRule:'أذكار الصباح في الصباح.',
    feedbackQuestion:{question:'أذكار المساء تُقال:',options:[{text:'في المساء',correct:true},{text:'في الصباح',correct:false},{text:'في الظهر',correct:false},{text:'في الفجر',correct:false}]}},

  { id:'u2l1q10', unit:'unit2', lesson:'u2l1', page:46, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'أذكار المساء تُقال في المساء.', paragraph:'أذكار المساء. (с46)', correctAnswer:true,
    explanation:'أذكار المساء في المساء.', goldenRule:'لكل وقت ذكره.'},

  { id:'u2l1q11', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'من أذكار الصباح:', paragraph:'أذكار. (с46)', options:[{text:'أصبحنا وأصبح الملك لله',correct:true},{text:'أمسينا',correct:false},{text:'لا إله',correct:false},{text:'الحمد',correct:false}],
    explanation:'من أذكار الصباح: أصبحنا وأصبح الملك لله.', goldenRule:'أذكار الصباح تبتدئ بـ"أصبحنا".'},

  { id:'u2l1q12', unit:'unit2', lesson:'u2l1', page:46, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أذكار الصباح:', paragraph:'أذكار الصباح. (с46)', items:['الوضوء','التسبيح','الدعاء','القرآن'], correctOrder:[0,1,2,3],
    explanation:'وضوء ← تسبيح ← دعاء ← قرآن.', goldenRule:'للأذكار ترتيب.'},

  { id:'u2l1q13', unit:'unit2', lesson:'u2l1', page:46, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: ذكر صباح أم مساء؟', paragraph:'الأذكار. (с46)', categories:['صباح ☀️','مساء 🌙'],
    items:[{text:'أصبحنا',correct_category:0},{text:'أمسينا',correct_category:1},{text:'أصبح الملك لله',correct_category:0},{text:'أمسى الملك لله',correct_category:1}], explanation:'أصبحنا صباح، أمسينا مساء.', goldenRule:'الذكر بحسب الوقت.'},

  { id:'u2l1q14', unit:'unit2', lesson:'u2l1', page:46, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"أصبحنا وأصبح ___ لله."', paragraph:'أذكار الصباح. (с46)', blanks:['الملك'], wordBank:['الملك','الأمر','العالم'],
    explanation:'أصبح الملك لله.', goldenRule:'الملك لله.'},

  { id:'u2l1q15', unit:'unit2', lesson:'u2l1', page:46, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الذكر بوقته:', paragraph:'الأذكار. (с46)', pairs:[{left:'أصبحنا',right:'الصباح'},{left:'أمسينا',right:'المساء'},{left:'سبحان الله',right:'أي وقت'}],
    explanation:'أصبحنا صباح، أمسينا مساء.', goldenRule:'كل ذكر بوقته.'},

  { id:'u2l1q16', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'فائدة الأذكار:', paragraph:'الأذكار. (с46)', options:[{text:'حماية من الشرور',correct:true},{text:'زيادة المال',correct:false},{text:'اللعب',correct:false},{text:'النوم',correct:false}],
    explanation:'الأذكار تحفظ من الشرور.', goldenRule:'الأذكار حصن المسلم.'},

  { id:'u2l1q17', unit:'unit2', lesson:'u2l1', page:46, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الأذكار تحفظ المسلم بإذن الله.', paragraph:'الأذكار. (с46)', correctAnswer:true,
    explanation:'الأذكار حفظ وحماية بإذن الله.', goldenRule:'الذكر حصن المسلم.'},

  { id:'u2l1q18', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند الاستيقاظ في الصباح أبدأ بـ:', paragraph:'أذكار الصباح. (с46)', options:[{text:'ذكر الله',correct:true},{text:'اللعب',correct:false},{text:'النوم',correct:false},{text:'الأكل',correct:false}],
    explanation:'نبدأ الصباح بذكر الله.', goldenRule:'ابدأ يومك بالذكر.'},

  { id:'u2l1q19', unit:'unit2', lesson:'u2l1', page:46, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"أذكار الصباح تُقال في ___ ."', paragraph:'أذكار الصباح. (с46)', blanks:['الصباح'], wordBank:['الصباح','المساء','الليل'],
    explanation:'أذكار الصباح في الصباح.', goldenRule:'الذكر الصباحي صباحاً.'},

  { id:'u2l1q20', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح ذكراً تُردّده صباحاً:', paragraph:'أذكار الصباح. (с46)', options:[{text:'سبحان الله وبحمده',correct:true},{text:'وداعاً',correct:false},{text:'للعب',correct:false},{text:'للنوم',correct:false}],
    explanation:'سبحان الله وبحمده ذكر.', goldenRule:'سبحان الله ذكر.'},

  { id:'u2l1q21', unit:'unit2', lesson:'u2l1', page:46, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الأذكار من العبادات.', paragraph:'الأذكار. (с46)', correctAnswer:true,
    explanation:'الأذكار عبادة وقربة.', goldenRule:'الذكر عبادة.'},

  { id:'u2l1q22', unit:'unit2', lesson:'u2l1', page:46, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: ذكر أم دعاء؟', paragraph:'الأذكار. (с46)', categories:['ذكر','دعاء'],
    items:[{text:'سبحان الله',correct_category:0},{text:'اللهم اغفر لي',correct_category:1},{text:'الحمد لله',correct_category:0},{text:'اللهم احفظنا',correct_category:1},{text:'لا إله إلا الله',correct_category:0},{text:'اللهم ارزقنا',correct_category:1}],
    explanation:'الذكر التسبيح والتحميد، الدعاء الطلب.', goldenRule:'الذكر والدعاء مختلفان.'},

  { id:'u2l1q23', unit:'unit2', lesson:'u2l1', page:46, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الذكر بعدده:', paragraph:'الأذكار. (с46)', pairs:[{left:'سبحان الله وبحمده',right:'100 مرة'},{left:'لا إله إلا الله',right:'مرة'},{left:'التكبير',right:'تكبيرات'}],
    explanation:'لكل ذكر عدد.', goldenRule:'الذكر بعدد.'},

  { id:'u2l1q24', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"أمسينا وأمسى الملك لله" ذكر:', paragraph:'الأذكار. (с46)', options:[{text:'المساء',correct:true},{text:'الصباح',correct:false},{text:'الظهر',correct:false},{text:'العصر',correct:false}],
    explanation:'هذا ذكر المساء.', goldenRule:'أمسينا للمساء.'},

  { id:'u2l1q25', unit:'unit2', lesson:'u2l1', page:46, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب أذكار الصباح:', paragraph:'أذكار الصباح. (с46)', items:['الاستيقاظ','الوضوء','الأذكار','القرآن'], correctOrder:[0,1,2,3],
    explanation:'استيقاظ ← وضوء ← أذكار ← قرآن.', goldenRule:'الصباح بالذكر يبدأ.'},

  { id:'u2l1q26', unit:'unit2', lesson:'u2l1', page:46, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الذكر حصن ___ ."', paragraph:'الأذكار. (с46)', blanks:['المسلم'], wordBank:['المسلم','الحيوان','الجماد'],
    explanation:'الذكر حصن المسلم.', goldenRule:'الذكر حصن.'},

  { id:'u2l1q27', unit:'unit2', lesson:'u2l1', page:46, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الإكثار من الذكر يطمئنّ القلب.', paragraph:'الأذكار. (с46)', correctAnswer:true,
    explanation:'الذكر يطمئنّ القلوب.', goldenRule:'الذكر طمأنينة.'},

  { id:'u2l1q28', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نقول أذكار الصباح؟', paragraph:'الأذكار. (с46)', options:[{text:'للحماية والقرب من الله',correct:true},{text:'للعب',correct:false},{text:'للزينة',correct:false},{text:'للكسل',correct:false}],
    explanation:'الأذكار للحماية والقرب من الله.', goldenRule:'الأذكار حماية وقربة.'},

  { id:'u2l1q29', unit:'unit2', lesson:'u2l1', page:46, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'الأذكار. (с46)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'الذكر',correct_category:0},{text:'النسيان',correct_category:1},{text:'التسبيح',correct_category:0},{text:'اللغو',correct_category:1},{text:'الدعاء',correct_category:0},{text:'الغفلة',correct_category:1}],
    explanation:'يعجبني: ذكر، تسبيح، دعاء. لا يعجبني: نسيان، لغو، غفلة.', goldenRule:'الذكر خير من الغفلة.'},

  { id:'u2l1q30', unit:'unit2', lesson:'u2l1', page:46, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'الأذكار. (с46)', pairs:[{left:'أصبحنا',right:'دخل الصباح'},{left:'أمسينا',right:'دخل المساء'},{left:'الذكر',right:'تسبيح وتحميد'}],
    explanation:'أصبحنا=الصباح، أمسينا=المساء.', goldenRule:'فهم المفردات أساس.'},

  { id:'u2l1q31', unit:'unit2', lesson:'u2l1', page:46, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أبدأ صباحي بـ ___ الله."', paragraph:'أذكار الصباح. (с46)', blanks:['ذكر'], wordBank:['ذكر','نسيان','ترك'],
    explanation:'أبدأ صباحي بذكر الله.', goldenRule:'الصباح بالذكر.'},

  { id:'u2l1q32', unit:'unit2', lesson:'u2l1', page:46, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الأذكار:', paragraph:'الأذكار. (с46)', options:[{text:'الأذكار حصن المسلم',correct:true},{text:'الأذكار للعب',correct:false},{text:'الأذكار للنوم',correct:false},{text:'الأذكار للأكل',correct:false}],
    explanation:'الأذكار حصن المسلم.', goldenRule:'الأذكار حصن وحماية.'},

  // ════════ الوحدة 2 / الدرس 2: أذكار العطاس والنوم (ص50) — 32 سؤالاً ════════
  { id:'u2l2q9', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'إذا عطست تقول:', paragraph:'أذكار العطاس. (с50)', options:[{text:'الحمد لله',correct:true},{text:'سبحان الله',correct:false},{text:'الله أكبر',correct:false},{text:'لا إله',correct:false}],
    explanation:'العاطس يقول: الحمد لله.', goldenRule:'العاطس يحمد الله.',
    feedbackQuestion:{question:'إذا سمعت العاطس يقول الحمد لله تقول:',options:[{text:'يرحمك الله',correct:true},{text:'الحمد لله',correct:false},{text:'الله أكبر',correct:false},{text:'سبحان الله',correct:false}]}},

  { id:'u2l2q10', unit:'unit2', lesson:'u2l2', page:50, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'إذا سمعت العاطس تقول: يرحمك الله.', paragraph:'أذكار العطاس. (с50)', correctAnswer:true,
    explanation:'الرادّ على العاطس يقول: يرحمك الله.', goldenRule:'الردّ: يرحمك الله.'},

  { id:'u2l2q11', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'عند النوم أقرأ:', paragraph:'أذكار النوم. (с50)', options:[{text:'آية الكرسي',correct:true},{text:'الجريدة',correct:false},{text:'القصة',correct:false},{text:'الشعر',correct:false}],
    explanation:'من أذكار النوم قراءة آية الكرسي.', goldenRule:'آية الكرسي قبل النوم.'},

  { id:'u2l2q12', unit:'unit2', lesson:'u2l2', page:50, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أذكار النوم:', paragraph:'أذكار النوم. (с50)', items:['الوضوء','السرير','الأذكار','النوم'], correctOrder:[0,1,2,3],
    explanation:'وضوء ← سرير ← أذكار ← نوم.', goldenRule:'للنوم آداب وأذكار.'},

  { id:'u2l2q13', unit:'unit2', lesson:'u2l2', page:50, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: ذكر عطاس أم نوم؟', paragraph:'الأذكار. (с50)', categories:['عطاس','نوم'],
    items:[{text:'الحمد لله',correct_category:0},{text:'آية الكرسي',correct_category:1},{text:'يرحمك الله',correct_category:0},{text:'باسمك ربّي وضعت جنبي',correct_category:1}], explanation:'عطاس: حمد، ردّ. نوم: الكرسي، التسبيح.', goldenRule:'لكل مقام ذكر.'},

  { id:'u2l2q14', unit:'unit2', lesson:'u2l2', page:50, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"إذا عطست قلت: ___ لله."', paragraph:'أذكار العطاس. (с50)', blanks:['الحمد'], wordBank:['الحمد','الشكر','الذكر'],
    explanation:'العاطس يقول: الحمد لله.', goldenRule:'العطاس = الحمد.'},

  { id:'u2l2q15', unit:'unit2', lesson:'u2l2', page:50, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الذكر بموقفه:', paragraph:'الأذكار. (с50)', pairs:[{left:'الحمد لله',right:'بعد العطاس'},{left:'آية الكرسي',right:'قبل النوم'},{left:'يرحمك الله',right:'ردّ على العاطس'}],
    explanation:'لكل ذكر موقف.', goldenRule:'الذكر بحسب الموقف.'},

  { id:'u2l2q16', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد ردّ العاطس:', paragraph:'أذكار العطاس. (с50)', options:[{text:'يرحمك الله',correct:true},{text:'الحمد لله',correct:false},{text:'شكراً',correct:false},{text:'أهلاً',correct:false}],
    explanation:'الرادّ على العاطس يقول: يرحمك الله.', goldenRule:'ردّ العاطس يرحمك الله.'},

  { id:'u2l2q17', unit:'unit2', lesson:'u2l2', page:50, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'أذكار النوم تحفظ المسلم.', paragraph:'أذكار النوم. (с50)', correctAnswer:true,
    explanation:'أذكار النوم حماية للمسلم.', goldenRule:'أذكار النوم حصن.'},

  { id:'u2l2q18', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'قبل النوم أتوضّأ ثم:', paragraph:'أذكار النوم. (с50)', options:[{text:'أقرأ الأذكار',correct:true},{text:'ألعب',correct:false},{text:'أكل',correct:false},{text:'أركض',correct:false}],
    explanation:'قبل النوم أتوضّأ وأقرأ الأذكار.', goldenRule:'النوم يبدأ بالأذكار.'},

  { id:'u2l2q19', unit:'unit2', lesson:'u2l2', page:50, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"من أذكار النوم قراءة ___ الكرسي."', paragraph:'أذكار النوم. (с50)', blanks:['آية'], wordBank:['آية','القصة','الشعر'],
    explanation:'من أذكار النوم آية الكرسي.', goldenRule:'آية الكرسي أذكار النوم.'},

  { id:'u2l2q20', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح ذكراً للنوم:', paragraph:'أذكار النوم. (с50)', options:[{text:'باسمك ربّي وضعت جنبي',correct:true},{text:'وداعاً',correct:false},{text:'للعب',correct:false},{text:'للأكل',correct:false}],
    explanation:'باسمك ربّي وضعت جنبي ذكر نوم.', goldenRule:'أذكار النوم تحفظ.'},

  { id:'u2l2q21', unit:'unit2', lesson:'u2l2', page:50, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العاطس يحمد الله.', paragraph:'أذكار العطاس. (с50)', correctAnswer:true,
    explanation:'العاطس يقول: الحمد لله.', goldenRule:'العطاس = حمد.'},

  { id:'u2l2q22', unit:'unit2', lesson:'u2l2', page:50, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: ذكر عطاس أم نوم أم ردّ؟', paragraph:'الأذكار. (с50)', categories:['عطاس','نوم','ردّ'],
    items:[{text:'الحمد لله',correct_category:0},{text:'آية الكرسي',correct_category:1},{text:'يرحمك الله',correct_category:2},{text:'باسمك ربّي',correct_category:1},{text:'يهديكم الله',correct_category:2}], explanation:'عطاس: حمد. نوم: كرسي، باسمك. ردّ: يرحمك، يهديكم.', goldenRule:'أنواع الأذكار.'},

  { id:'u2l2q23', unit:'unit2', lesson:'u2l2', page:50, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الذكر بمعناه:', paragraph:'الأذكار. (с50)', pairs:[{left:'الحمد لله',right:'شكر الله'},{left:'يرحمك الله',right:'دعاء بالرحمة'},{left:'آية الكرسي',right:'حماية'}],
    explanation:'الحمد شكر، الرحمة دعاء، الكرسي حماية.', goldenRule:'فهم الأذكار أساس.'},

  { id:'u2l2q24', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'إذا قال العاطس الحمد لله، أردّ:', paragraph:'أذكار العطاس. (с50)', options:[{text:'يرحمك الله',correct:true},{text:'شكراً',correct:false},{text:'الحمد لله',correct:false},{text:'نعم',correct:false}],
    explanation:'أردّ: يرحمك الله.', goldenRule:'ردّ العاطس يرحمك الله.'},

  { id:'u2l2q25', unit:'unit2', lesson:'u2l2', page:50, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب أذكار النوم:', paragraph:'أذكار النوم. (с50)', items:['الوضوء','النوم على اليمين','الأذكار','النوم'], correctOrder:[0,1,2,3],
    explanation:'وضوء ← يمين ← أذكار ← نوم.', goldenRule:'للنوم آداب.'},

  { id:'u2l2q26', unit:'unit2', lesson:'u2l2', page:50, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الردّ على العاطس: ___ الله."', paragraph:'أذكار العطاس. (с50)', blanks:['يرحمك'], wordBank:['يرحمك','الحمد','الشكر'],
    explanation:'يرحمك الله.', goldenRule:'ردّ العاطس.'},

  { id:'u2l2q27', unit:'unit2', lesson:'u2l2', page:50, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'العطاس نعمة من الله نشكره عليها.', paragraph:'أذكار العطاس. (с50)', correctAnswer:true,
    explanation:'العطاس نعمة ونشكر الله بالحمد.', goldenRule:'العطاس نعمة.'},

  { id:'u2l2q28', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نقول أذكار النوم؟', paragraph:'أذكار النوم. (с50)', options:[{text:'للحماية والقربة',correct:true},{text:'للعب',correct:false},{text:'للزينة',correct:false},{text:'للكسل',correct:false}],
    explanation:'أذكار النوم حماية وقربة.', goldenRule:'أذكار النوم حصن.'},

  { id:'u2l2q29', unit:'unit2', lesson:'u2l2', page:50, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'الأذكار. (с50)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'الذكر',correct_category:0},{text:'النسيان',correct_category:1},{text:'الحمد',correct_category:0},{text:'الغفلة',correct_category:1},{text:'الأذكار',correct_category:0},{text:'اللغو',correct_category:1}],
    explanation:'يعجبني: ذكر، حمد، أذكار.', goldenRule:'الذكر خير من الغفلة.'},

  { id:'u2l2q30', unit:'unit2', lesson:'u2l2', page:50, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الذكر بوقته:', paragraph:'الأذكار. (с50)', pairs:[{left:'الحمد لله',right:'بعد العطاس'},{left:'آية الكرسي',right:'قبل النوم'},{left:'يرحمك الله',right:'ردّ على العاطس'}],
    explanation:'لكل ذكر وقته.', goldenRule:'الذكر بوقته.'},

  { id:'u2l2q31', unit:'unit2', lesson:'u2l2', page:50, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"قبل النوم أقرأ ___ الكرسي."', paragraph:'أذكار النوم. (с50)', blanks:['آية'], wordBank:['آية','قصة','شعر'],
    explanation:'أقرأ آية الكرسي.', goldenRule:'آية الكرسي قبل النوم.'},

  { id:'u2l2q32', unit:'unit2', lesson:'u2l2', page:50, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن أذكار النوم:', paragraph:'أذكار النوم. (с50)', options:[{text:'أذكار النوم تحفظني',correct:true},{text:'أذكار النوم للعب',correct:false},{text:'أذكار النوم للأكل',correct:false},{text:'أذكار النوم للزينة',correct:false}],
    explanation:'أذكار النوم تحفظني.', goldenRule:'أذكار النوم حصن.'},

  // ════════ الوحدة 3 / الدرس 1: المحافظة على الممتلكات العامة (ص82-88) — 40 سؤالاً ════════
  { id:'u3l1q9', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الممتلكات العامة:', paragraph:'الممتلكات العامة. (с82)', options:[{text:'للجميع',correct:true},{text:'لشخص واحد',correct:false},{text:'للأغنياء',correct:false},{text:'للأطفال',correct:false}],
    explanation:'الممتلكات العامة ملك للجميع.', goldenRule:'العامة = للجميع.',
    feedbackQuestion:{question:'من أمثلة الممتلكات العامة:',options:[{text:'المسجد',correct:true},{text:'بيتي',correct:false},{text:'سيارتي',correct:false},{text:'دراجتي',correct:false}]}},

  { id:'u3l1q10', unit:'unit3', lesson:'u3l1', page:82, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'المحافظة على الممتلكات العامة واجب.', paragraph:'المحافظة. (с82)', correctAnswer:true,
    explanation:'المحافظة على الممتلكات العامة واجب على الجميع.', goldenRule:'المحافظة واجب.'},

  { id:'u3l1q11', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'من الممتلكات العامة:', paragraph:'الممتلكات العامة. (с82)', options:[{text:'المسجد',correct:true},{text:'بيتي',correct:false},{text:'سيارتي',correct:false},{text:'دراجتي',correct:false}],
    explanation:'المسجد والحديقة من الممتلكات العامة.', goldenRule:'العامة = مسجد + حديقة.'},

  { id:'u3l1q12', unit:'unit3', lesson:'u3l1', page:82, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب طرق المحافظة:', paragraph:'المحافظة. (с82)', items:['النظافة','عدم الإتلاف','الترشيد','الصيانة'], correctOrder:[0,1,2,3],
    explanation:'نظافة ← لا إتلاف ← ترشيد ← صيانة.', goldenRule:'للمحافظة طرق.'},

  { id:'u3l1q13', unit:'unit3', lesson:'u3l1', page:84, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: يحافظ أم يُتلف؟', paragraph:'المحافظة. (с82)', categories:['يحافظ ✅','يُتلف ❌'],
    items:[{text:'ريّ الأشجار',correct_category:0},{text:'الكتابة على الجدران',correct_category:1},{text:'ترتيب الكراسي',correct_category:0},{text:'رمي القمامة',correct_category:1},{text:'الصلاة في المسجد',correct_category:0},{text:'إتلاف الأثاث',correct_category:1}],
    explanation:'يحافظ: ريّ، ترتيب، صلاة. يُتلف: كتابة، قمامة، إتلاف.', goldenRule:'الحفظ ضدّ الإتلاف.'},

  { id:'u3l1q14', unit:'unit3', lesson:'u3l1', page:82, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"المسجد من الممتلكات ___ ."', paragraph:'الممتلكات. (с82)', blanks:['العامة'], wordBank:['العامة','الخاصة','الشخصية'],
    explanation:'المسجد من الممتلكات العامة.', goldenRule:'المسجد عامّ.'},

  { id:'u3l1q15', unit:'unit3', lesson:'u3l1', page:85, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل المملوك بنوعه:', paragraph:'الممتلكات. (с82)', pairs:[{left:'المسجد',right:'عامّ'},{left:'البيت',right:'خاصّ'},{left:'الحديقة',right:'عامّ'}],
    explanation:'المسجد والحديقة عامّة، البيت خاصّ.', goldenRule:'العامّ للناس، الخاصّ لك.'},

  { id:'u3l1q16', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'حكم إتلاف الممتلكات العامة:', paragraph:'إتلاف. (с82)', options:[{text:'محرّم',correct:true},{text:'حلال',correct:false},{text:'مستحبّ',correct:false},{text:'واجب',correct:false}],
    explanation:'إتلاف الممتلكات العامة محرّم.', goldenRule:'الإتلاف محرّم.'},

  { id:'u3l1q17', unit:'unit3', lesson:'u3l1', page:86, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الكتابة على الجدران أذى للممتلكات.', paragraph:'إتلاف. (с82)', correctAnswer:true,
    explanation:'الكتابة على الجدران أذى وإتلاف.', goldenRule:'لا كتابة على الجدران.'},

  { id:'u3l1q18', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند زيارة الحديقة العامة:', paragraph:'المحافظة. (с82)', options:[{text:'أحافظ على نظافتها',correct:true},{text:'أرمي القمامة',correct:false},{text:'أكسر الأشجار',correct:false},{text:'أكتب على الجدران',correct:false}],
    explanation:'أحافظ على نظافة الحديقة العامة.', goldenRule:'الحديقة أمانة.'},

  { id:'u3l1q19', unit:'unit3', lesson:'u3l1', page:82, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الممتلكات العامة ملك ___ ."', paragraph:'الممتلكات. (с82)', blanks:['الجميع'], wordBank:['الجميع','شخص','أحدهم'],
    explanation:'العامة ملك الجميع.', goldenRule:'العامة للجميع.'},

  { id:'u3l1q20', unit:'unit3', lesson:'u3l1', page:87, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة للمحافظة على المسجد:', paragraph:'المحافظة. (с82)', options:[{text:'تنظيفه',correct:true},{text:'اللعب فيه',correct:false},{text:'الصراخ',correct:false},{text:'إتلاف السجاد',correct:false}],
    explanation:'تنظيف المسجد محافظة عليه.', goldenRule:'نظافة المسجد عبادة.'},

  { id:'u3l1q21', unit:'unit3', lesson:'u3l1', page:82, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الحديقة العامة من الممتلكات العامة.', paragraph:'الممتلكات. (с82)', correctAnswer:true,
    explanation:'الحديقة العامة للجميع.', goldenRule:'الحديقة عامّة.'},

  { id:'u3l1q22', unit:'unit3', lesson:'u3l1', page:84, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: عامّ أم خاصّ؟', paragraph:'الممتلكات. (с82)', categories:['عامّ','خاصّ'],
    items:[{text:'المسجد',correct_category:0},{text:'بيتي',correct_category:1},{text:'الحديقة',correct_category:0},{text:'سيارتي',correct_category:1},{text:'المدرسة',correct_category:0},{text:'دراجتي',correct_category:1}],
    explanation:'عامّ: مسجد، حديقة، مدرسة. خاصّ: بيتي، سيارتي، دراجتي.', goldenRule:'العامّ للناس، الخاصّ لك.'},

  { id:'u3l1q23', unit:'unit3', lesson:'u3l1', page:85, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل التصرف بنتيجته:', paragraph:'المحافظة. (с82)', pairs:[{left:'ريّ الأشجار',right:'نموّ'},{left:'رمي القمامة',right:'تلوّث'},{left:'الترتيب',right:'نظافة'}],
    explanation:'الريّ نموّ، القمامة تلوّث، الترتيب نظافة.', goldenRule:'كل تصرّف له نتيجة.'},

  { id:'u3l1q24', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'الممتلكات الخاصة:', paragraph:'الممتلكات. (с82)', options:[{text:'لك أنت فقط',correct:true},{text:'للجميع',correct:false},{text:'للأغنياء',correct:false},{text:'للدولة',correct:false}],
    explanation:'الخاصة ملك صاحبها.', goldenRule:'الخاصة لك.'},

  { id:'u3l1q25', unit:'unit3', lesson:'u3l1', page:86, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب من الأحسن للأسوأ:', paragraph:'المحافظة. (с82)', items:['ريّ الأشجار','الوقوف','الرمي','الإتلاف'], correctOrder:[0,1,2,3],
    explanation:'ريّ ← وقوف ← رمي ← إتلاف.', goldenRule:'ترقّي الأذى من السيّئ.'},

  { id:'u3l1q26', unit:'unit3', lesson:'u3l1', page:82, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"إتلاف الممتلكات العامة ___ ."', paragraph:'إتلاف. (с82)', blanks:['محرّم'], wordBank:['محرّم','حلال','واجب'],
    explanation:'الإتلاف محرّم.', goldenRule:'الإتلاف محرّم.'},

  { id:'u3l1q27', unit:'unit3', lesson:'u3l1', page:87, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'المحافظة على الممتلكات تدلّ على حسن الخلق.', paragraph:'المحافظة. (с82)', correctAnswer:true,
    explanation:'المحافظة خُلق حسن.', goldenRule:'المحافظة خُلق.'},

  { id:'u3l1q28', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نحافظ على الممتلكات العامة؟', paragraph:'المحافظة. (с82)', options:[{text:'لأنها للجميع ونستفيد منها',correct:true},{text:'للعب',correct:false},{text:'للزينة',correct:false},{text:'للإتلاف',correct:false}],
    explanation:'العامة للجميع ونحافظ عليها.', goldenRule:'الحفظ واجب على الكل.'},

  { id:'u3l1q29', unit:'unit3', lesson:'u3l1', page:88, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'المحافظة. (с82)', categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'ريّ الأشجار',correct_category:0},{text:'الكتابة على الجدران',correct_category:1},{text:'ترتيب الكراسي',correct_category:0},{text:'رمي القمامة',correct_category:1},{text:'الصلاة في المسجد',correct_category:0},{text:'إتلاف الأثاث',correct_category:1}],
    explanation:'يعجبني: ريّ، ترتيب، صلاة.', goldenRule:'الحفظ يُعجب.'},

  { id:'u3l1q30', unit:'unit3', lesson:'u3l1', page:85, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (с82-88)', pairs:[{left:'عامّة',right:'للجميع'},{left:'خاصة',right:'لك'},{left:'إتلاف',right:'تخريب'}],
    explanation:'عامة=للجميع، خاصة=لك، إتلاف=تخريب.', goldenRule:'فهم المفردات أساس.'},

  { id:'u3l1q31', unit:'unit3', lesson:'u3l1', page:82, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحافظ على المدرسة بـ ___ النظافة."', paragraph:'المحافظة. (с82)', blanks:['الحفاظ على'], wordBank:['الحفاظ على','ترك','إهمال'],
    explanation:'أحافظ على المدرسة بالحفاظ على نظافتها.', goldenRule:'الحفاظ على النظافة واجب.'},

  { id:'u3l1q32', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'المدرسة من الممتلكات:', paragraph:'الممتلكات. (с82)', options:[{text:'العامة',correct:true},{text:'الخاصة',correct:false},{text:'الشخصية',correct:false},{text:'العائلية',correct:false}],
    explanation:'المدرسة من الممتلكات العامة.', goldenRule:'المدرسة عامّة.'},

  { id:'u3l1q33', unit:'unit3', lesson:'u3l1', page:86, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب طرق الحفاظ على الحديقة:', paragraph:'المحافظة. (с82)', items:['عدم الرمي','ريّ الأشجار','عدم الكتابة','الترتيب'], correctOrder:[0,1,2,3],
    explanation:'لا رمي ← ريّ ← لا كتابة ← ترتيب.', goldenRule:'للحفاظ طرق.'},

  { id:'u3l1q34', unit:'unit3', lesson:'u3l1', page:82, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'رمي القمامة في الحديقة أذى.', paragraph:'المحافظة. (с82)', correctAnswer:true,
    explanation:'رمي القمامة أذى للممتلكات العامة.', goldenRule:'لا قمامة في العامة.'},

  { id:'u3l1q35', unit:'unit3', lesson:'u3l1', page:88, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: يحافظ على المسجد أم يؤذيه؟', paragraph:'المحافظة. (с82)', categories:['يحافظ ✅','يؤذي ❌'],
    items:[{text:'تنظيفه',correct_category:0},{text:'الصراخ فيه',correct_category:1},{text:'الصلاة فيه',correct_category:0},{text:'اللعب فيه',correct_category:1},{text:'إزالة الأذى',correct_category:0},{text:'كتابة السجاد',correct_category:1}],
    explanation:'يحافظ: تنظيف، صلاة، إزالة أذى.', goldenRule:'المسجد أمانة.'},

  { id:'u3l1q36', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن المحافظة:', paragraph:'المحافظة. (с82)', options:[{text:'أحافظ على الممتلكات لأنها للجميع',correct:true},{text:'أهدر الماء',correct:false},{text:'أكسر الأثاث',correct:false},{text:'أكتب على الجدران',correct:false}],
    explanation:'أحافظ على الممتلكات لأنها للجميع.', goldenRule:'الحفظ واجب.'},

  { id:'u3l1q37', unit:'unit3', lesson:'u3l1', page:82, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"المدرسة من الممتلكات ___ ."', paragraph:'الممتلكات. (с82)', blanks:['العامة'], wordBank:['العامة','الخاصة','الشخصية'],
    explanation:'المدرسة عامّة.', goldenRule:'المدرسة عامّة.'},

  { id:'u3l1q38', unit:'unit3', lesson:'u3l1', page:84, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل التصرف بأثره:', paragraph:'المحافظة. (с82)', pairs:[{left:'ريّ الأشجار',right:'جمال'},{left:'إتلاف الأثاث',right:'خراب'},{left:'ترتيب الكراسي',right:'نظام'}],
    explanation:'الريّ جمال، الإتلاف خراب، الترتيب نظام.', goldenRule:'كل تصرّف له أثر.'},

  { id:'u3l1q39', unit:'unit3', lesson:'u3l1', page:82, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية المحافظة على الممتلكات العامة:', paragraph:'المحافظة. (с82)', options:[{text:'نفع الجميع',correct:true},{text:'الإفساد',correct:false},{text:'الهدر',correct:false},{text:'اللعب',correct:false}],
    explanation:'المحافظة تنفع الجميع.', goldenRule:'الحفظ نفع.'},

  { id:'u3l1q40', unit:'unit3', lesson:'u3l1', page:88, type:'trueFalse', bloom:'understand', difficulty:'medium',
    question:'إتلاف الأثاث المدرسي أذى للممتلكات العامة.', paragraph:'المحافظة. (с82)', correctAnswer:true,
    explanation:'إتلاف الأثاث المدرسي أذى.', goldenRule:'لا إتلاف للأثاث.'},
];