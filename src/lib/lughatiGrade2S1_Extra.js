// لغتي — الصف الثاني — الفصل الأول — أسئلة إضافية للوصول إلى 300 سؤال
// موزّعة على الدروس: u1l1, u1l2, u2l1, u2l2

export const LUGHATI_EXTRA_1 = [
  // ════════ الوحدة 1 / الدرس 1: صلة الرحم (ص27-34) — 65 سؤالاً ════════
  { id:'u1l1q11', unit:'u1', lesson:'u1l1', page:27, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الحديث "من كان يؤمن بالله واليوم الآخر فليصل رحمه" رواه:',
    paragraph:'رواه البخاري رقم 6138. (ص27)', options:[{text:'البخاري',correct:true},{text:'الترمذي',correct:false},{text:'أبو داود',correct:false},{text:'النسائي',correct:false}],
    explanation:'الحديث رواه الإمام البخاري في صحيحه.', goldenRule:'صحيح البخاري أصحّ كتاب بعد القرآن.',
    feedbackQuestion:{question:'الإمام البخاري صاحب أصحّ كتاب بعد القرآن، اسم الكتاب:',options:[{text:'الجامع الصحيح',correct:true},{text:'سنن',correct:false},{text:'موطأ',correct:false},{text:'مسند',correct:false}]}},

  { id:'u1l1q12', unit:'u1', lesson:'u1l1', page:28, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الرحم تشمل الأقارب من جهة الأب والأم معاً.', paragraph:'الرحم اسمٌ لكل من تربطنا بهم صلة قربى. (ص28)',
    correctAnswer:true, explanation:'الرحم تشمل كل الأقارب من جهتي الأب والأم.', goldenRule:'الرحم = جميع الأقارب من الأب والأم.'},

  { id:'u1l1q13', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'"مشاركة الأقارب أفراحهم وأحزانهم" من عناصر:',
    paragraph:'صلة الرحم = زيارة + سؤال + تفقّد + مساعدة + مشاركة أفراح وأحزان. (ص28)',
    options:[{text:'صلة الرحم',correct:true},{text:'قطيعة الرحم',correct:false},{text:'الجوار',correct:false},{text:'الصداقة',correct:false}],
    explanation:'مشاركة الأفراح والأحزان من عناصر صلة الرحم الخمسة.', goldenRule:'صلة الرحم خمسة عناصر متكاملة.'},

  { id:'u1l1q14', unit:'u1', lesson:'u1l1', page:28, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب عناصر صلة الرحم حسب ورودها في النص:', paragraph:'(1) زيارة (2) سؤال (3) تفقّد (4) مساعدة (5) مشاركة. (ص28)',
    items:['الزيارة','السؤال','المساعدة','المشاركة'], correctOrder:[0,1,2,3],
    explanation:'الترتيب: زيارة ← سؤال ← مساعدة ← مشاركة.', goldenRule:'الترتيب المنطقي يثبّت المعلومة.'},

  { id:'u1l1q15', unit:'u1', lesson:'u1l1', page:30, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: ال الشمسية أم ال القمرية؟', paragraph:'ال الشمسية: اللام لا تُنطق. ال القمرية: اللام تُنطق. (ص30)',
    categories:['ال الشمسية ☀️','ال القمرية 🌙'],
    items:[{text:'الشمس',correct_category:0},{text:'القمر',correct_category:1},{text:'السماء',correct_category:0},{text:'البدر',correct_category:1},{text:'النور',correct_category:0},{text:'الكتاب',correct_category:1}],
    explanation:'الشمسية: الشمس، السماء، النور. القمرية: القمر، البدر، الكتاب.', goldenRule:'ال شمسية = لا ننطق اللام. ال قمرية = ننطق اللام.'},

  { id:'u1l1q16', unit:'u1', lesson:'u1l1', page:32, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'أكمل الدعاء: "___ وفّقني في دراستي."', paragraph:'اللهم وفّقني. (ص32)', blanks:['اللهمّ'], wordBank:['اللهمّ','يا','أنا'],
    explanation:'نبدأ الدعاء بكلمة "اللهمّ".', goldenRule:'الدعاء يبدأ بـ"اللهمّ".'},

  { id:'u1l1q17', unit:'u1', lesson:'u1l1', page:33, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الفعل المذكّر بنظيره المؤنّث:', paragraph:'يَحكي ← تَحكي. (ص33)',
    pairs:[{left:'يساعد',right:'تساعد'},{left:'يحنو',right:'تحنو'},{left:'يعطف',right:'تعطف'}],
    explanation:'تأنيث الفعل: (يـ) ← (تـ).', goldenRule:'تأنيث الفعل = يـ ← تـ.'},

  { id:'u1l1q18', unit:'u1', lesson:'u1l1', page:33, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'(إنّ) من أخوات:', paragraph:'إنَّ الصلةَ واجبةٌ. (ص33)', options:[{text:'تنصب المبتدأ',correct:true},{text:'ترفع المبتدأ',correct:false},{text:'تجرّ المبتدأ',correct:false},{text:'لا تؤثر',correct:false}],
    explanation:'إنّ وأخواتها تنصب المبتدأ وترفع الخبر.', goldenRule:'إنّ: تنصب المبتدأ وترفع الخبر.'},

  { id:'u1l1q19', unit:'u1', lesson:'u1l1', page:27, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'صلة الرحم فرضٌ على كل مسلم.', paragraph:'"فليصل رحمه" أمرٌ للوجوب. (ص27)',
    correctAnswer:true, explanation:'الأمر في الحديث للوجوب فصلة الرحم فرض.', goldenRule:'صلة الرحم فرض عين على كل مسلم.'},

  { id:'u1l1q20', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'ضد كلمة "صلة" في عبارة "صلة الرحم":', paragraph:'صلة الرحم = التواصل مع الأقارب. (ص28)',
    options:[{text:'قطيعة',correct:true},{text:'محبّة',correct:false},{text:'زيارة',correct:false},{text:'قربى',correct:false}],
    explanation:'ضد صلة = قطيعة (الانقطاع عن الأقارب).', goldenRule:'صلة × قطيعة.'},

  { id:'u1l1q21', unit:'u1', lesson:'u1l1', page:28, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"صلة الرحم تعني ___ الأقارب والسؤال عنهم."', paragraph:'صلة الرحم تعني زيارة الأقارب. (ص28)',
    blanks:['زيارة'], wordBank:['زيارة','هجر','ترك'],
    explanation:'صلة الرحم تعني زيارة الأقارب.', goldenRule:'صلة الرحم تبدأ بالزيارة.'},

  { id:'u1l1q22', unit:'u1', lesson:'u1l1', page:30, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'في كلمة "الرحِم" اللام:', paragraph:'الرحم: اللام شمسية لا تُنطق. (ص30)',
    options:[{text:'شمسية لا تُنطق',correct:true},{text:'قمرية تُنطق',correct:false},{text:'مشدّدة',correct:false},{text:'محذوفة',correct:false}],
    explanation:'الرحم اللام شمسية لا تُنطق ويُشدد ما بعدها.', goldenRule:'الرحم: ال شمسية.'},

  { id:'u1l1q23', unit:'u1', lesson:'u1l1', page:32, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة دعاء مناسبة لطلب الشفاء:', paragraph:'اللهم اشفِ أمي. (ص32)',
    options:[{text:'اللهمّ اشفِ مريضنا',correct:true},{text:'اللهمّ اعطنا مالاً',correct:false},{text:'اللهمّ أرنا التلفاز',correct:false},{text:'اللهمّ ابعد الأقارب',correct:false}],
    explanation:'الدعاء يُناسب المقام: طلب الشفاء = اللهم اشفِ.', goldenRule:'الدعاء يُناسب الحاجة.'},

  { id:'u1l1q24', unit:'u1', lesson:'u1l1', page:33, type:'trueFalse', bloom:'understand', difficulty:'medium',
    question:'في جملة "إنَّ الصلةَ واجبةٌ" كلمة "الصلة" منصوبة.', paragraph:'إنَّ الصلةَ واجبةٌ. (ص33)',
    correctAnswer:true, explanation:'إنّ تنصب المبتدأ "الصلة" والفتحة علامة النصب.', goldenRule:'إنّ ينصب ما بعدها.'},

  { id:'u1l1q25', unit:'u1', lesson:'u1l1', page:27, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن روى حديث صلة الرحم في النص؟', paragraph:'رواه البخاري. (ص27)',
    options:[{text:'الإمام البخاري',correct:true},{text:'الإمام مسلم',correct:false},{text:'الإمام مالك',correct:false},{text:'الإمام أحمد',correct:false}],
    explanation:'الحديث رواه البخاري في صحيحه.', goldenRule:'البخاري إمام المحدّثين.'},

  { id:'u1l1q26', unit:'u1', lesson:'u1l1', page:28, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: ما الذي يدخل في صلة الرحم وما لا يدخل؟', paragraph:'صلة الرحم = تواصل ومساعدة. (ص28)',
    categories:['من صلة الرحم ✅','ليس من صلة الرحم ❌'],
    items:[{text:'زيارة الجد',correct_category:0},{text:'مقاطعة العم',correct_category:1},{text:'السؤال عن الخالة',correct_category:0},{text:'إهمال الأقارب',correct_category:1},{text:'مساعدة المحتاج',correct_category:0},{text:'الخصام مع الأقارب',correct_category:1}],
    explanation:'صلة الرحم: زيارة، سؤال، مساعدة. ليس منها: مقاطعة، إهمال، خصام.', goldenRule:'صلة الرحم تواصل + إحسان.'},

  { id:'u1l1q27', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'evaluate', difficulty:'hard',
    question:'لماذا بارك الأب في فكرة فوّاز؟', paragraph:'الأب: إنه رأيٌ جميل، بارك الله فيك يا بُنيّ. (ص28)',
    options:[{text:'لأنها موافقة لحديث صلة الرحم',correct:true},{text:'لأنها توفّر مالاً',correct:false},{text:'لأنها توفّر وقتاً',correct:false},{text:'لأنها تسهّل العمل',correct:false}],
    explanation:'فكرة تخصيص يوم للزيارة موافقة لأمر صلة الرحم.', goldenRule:'الفكرة الطيبة تُشجَّع.'},

  { id:'u1l1q28', unit:'u1', lesson:'u1l1', page:30, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'اللام في "الشمس" تُسمّى اللام ___ .', paragraph:'ال شمسية: اللام لا تُنطق. (ص30)', blanks:['الشمسية'], wordBank:['الشمسية','القمرية','المقطوعة'],
    explanation:'اللام في الشمس شمسية لا تُنطق.', goldenRule:'ال شمسية: اللام صامتة.'},

  { id:'u1l1q29', unit:'u1', lesson:'u1l1', page:33, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الجملة العادية بمثيلتها المؤكَّدة بـ(إنّ):', paragraph:'الصلةُ واجبة ← إنَّ الصلةَ واجبة. (ص33)',
    pairs:[{left:'العلمُ نافعٌ',right:'إنَّ العلمَ نافعٌ'},{left:'الجارُ يحترمُ',right:'إنَّ الجارَ يحترمُ'},{left:'الصدقُ جميلٌ',right:'إنَّ الصدقَ جميلٌ'}],
    explanation:'(إنّ) تُؤكّد الجملة وتنصب المبتدأ.', goldenRule:'إنّ + جملة اسمية = تأكيد.'},

  { id:'u1l1q30', unit:'u1', lesson:'u1l1', page:27, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'سماع فوّاز ونورة للحديث كان عبر الإذاعة.', paragraph:'سمعا في الإذاعة حديثاً شريفاً. (ص27)',
    correctAnswer:true, explanation:'سمعا الحديث من الإذاعة.', goldenRule:'الإذاعة وسيلة لنشر الخير.'},

  { id:'u1l1q31', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"تفقّد أحوالهم" تعني:', paragraph:'صلة الرحم = تفقّد أحوالهم. (ص28)',
    options:[{text:'الاطمئنان عليهم',correct:true},{text:'تجاهلهم',correct:false},{text:'مراقبتهم',correct:false},{text:'نسيانهم',correct:false}],
    explanation:'تفقّد الأحوال = الاطمئنان على الأقارب.', goldenRule:'تفقّد = اطمئنان.'},

  { id:'u1l1q32', unit:'u1', lesson:'u1l1', page:32, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب خطوات الدعاء:', paragraph:'نقول اللهمّ ثم نذكر الطلب. (ص32)',
    items:['نرفع اليدين','نقول اللهمّ','نذكر الطلب','نمسح الوجه'], correctOrder:[0,1,2,3],
    explanation:'الدعاء: رفع اليدين ← اللهمّ ← الطلب ← مسح الوجه.', goldenRule:'للدعاء آداب وخطوات.'},

  { id:'u1l1q33', unit:'u1', lesson:'u1l1', page:30, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف الكلمات: اللام تُنطق أم لا تُنطق؟', paragraph:'ال شمسية والقمرية. (ص30)',
    categories:['اللام تُنطق 🌙','اللام لا تُنطق ☀️'],
    items:[{text:'القمر',correct_category:0},{text:'الشمس',correct_category:1},{text:'البدر',correct_category:0},{text:'السماء',correct_category:1},{text:'النجم',correct_category:0},{text:'الضوء',correct_category:1}],
    explanation:'تُنطق: القمر، البدر، النجم. لا تُنطق: الشمس، السماء، الضوء.', goldenRule:'القمرية تُنطق، الشمسية لا تُنطق.'},

  { id:'u1l1q34', unit:'u1', lesson:'u1l1', page:33, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"إنَّ الصلةَ ___" أكمل الخبر.', paragraph:'إنَّ الصلةَ واجبةٌ. (ص33)', blanks:['واجبةٌ'], wordBank:['واجبةٌ','حسنةٌ','مفيدةٌ','واجبةٌ'],
    explanation:'الخبر "واجبةٌ" مرفوع.', goldenRule:'إنّ: المبتدأ منصوب والخبر مرفوع.'},

  { id:'u1l1q35', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة تدلّ على صلة الرحم:', paragraph:'صلة الرحم أعمال متنوعة. (ص28)',
    options:[{text:'أزور جدتي كل جمعة',correct:true},{text:'لا أعرف أقاربي',correct:false},{text:'أهجر خالي',correct:false},{text:'أنسى عمتي',correct:false}],
    explanation:'زيارة الجدة كل جمعة تطبيق لصلة الرحم.', goldenRule:'صلة الرحم فعل لا قول فقط.'},

  { id:'u1l1q36', unit:'u1', lesson:'u1l1', page:27, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'معنى "اليوم الآخر" في الحديث:', paragraph:'"مَن كان يؤمن بالله واليوم الآخر". (ص27)',
    options:[{text:'يوم القيامة',correct:true},{text:'يوم الجمعة',correct:false},{text:'غدٌ',correct:false},{text:'نهاية الأسبوع',correct:false}],
    explanation:'اليوم الآخر = يوم القيامة.', goldenRule:'اليوم الآخر = يوم القيامة.'},

  { id:'u1l1q37', unit:'u1', lesson:'u1l1', page:28, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الاكتفاء بالزيارة دون المساعدة يُحقّق صلة الرحم كاملةً.', paragraph:'صلة الرحم خمسة عناصر. (ص28)',
    correctAnswer:false, explanation:'صلة الرحم خمسة عناصر والزيارة وحدها لا تكفي.', goldenRule:'صلة الرحم متكاملة لا جزئية.'},

  { id:'u1l1q38', unit:'u1', lesson:'u1l1', page:30, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد حروف "ال" الشمسية:', paragraph:'ال شمسية 10 حروف. (ص30)',
    options:[{text:'10 حروف',correct:true},{text:'14 حرفاً',correct:false},{text:'5 حروف',correct:false},{text:'28 حرفاً',correct:false}],
    explanation:'ال شمسية 10 حروف والقمرية 14 حرفاً.', goldenRule:'ال شمسية 10، القمرية 14.'},

  { id:'u1l1q39', unit:'u1', lesson:'u1l1', page:33, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'مفردات النص. (ص28-33)',
    pairs:[{left:'صلة',right:'تواصل'},{left:'رحم',right:'أقارب'},{left:'تفقّد',right:'اطمئنان'}],
    explanation:'صلة=تواصل، رحم=أقارب، تفقّد=اطمئنان.', goldenRule:'فهم المفردات أساس الفهم.'},

  { id:'u1l1q40', unit:'u1', lesson:'u1l1', page:28, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"___ أحوالَهم" من عناصر صلة الرحم.', paragraph:'تفقّد أحوالهم. (ص28)', blanks:['نتفقّدُ'], wordBank:['نتفقّدُ','نتركُ','ننسى'],
    explanation:'نتفقّد أحوالهم من عناصر صلة الرحم.', goldenRule:'التفقّد اهتمام وطمأنة.'},

  { id:'u1l1q41', unit:'u1', lesson:'u1l1', page:27, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'نورة أخت فوّاز.', paragraph:'فوّاز ونورة أخوان. (ص27)', correctAnswer:true,
    explanation:'فوّاز ونورة أخوان يتعلمان معاً.', goldenRule:'الأخوة تتعاون على الخير.'},

  { id:'u1l1q42', unit:'u1', lesson:'u1l1', page:33, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'في "إنَّ الصلةَ واجبةٌ" نوع كلمة "واجبة":', paragraph:'إنَّ الصلةَ واجبةٌ. (ص33)',
    options:[{text:'خبر إنّ مرفوع',correct:true},{text:'مبتدأ منصوب',correct:false},{text:'فاعل',correct:false},{text:'مفعول',correct:false}],
    explanation:'واجبةٌ خبر إنّ مرفوع بالضمة.', goldenRule:'خبر إنّ مرفوع دائماً.'},

  { id:'u1l1q43', unit:'u1', lesson:'u1l1', page:28, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب أفكار النص من البداية للنهاية:', paragraph:'سماع ← سؤال الأب ← شرح ← اقتراح ← مدح. (ص27-28)',
    items:['سماع الحديث','سؤال الأب','شرح الأب','اقتراح فوّاز','مدح الأب'], correctOrder:[0,1,2,3,4],
    explanation:'تسلسل النص منطقي: سماع ← سؤال ← شرح ← اقتراح ← مدح.', goldenRule:'فهم التسلسل = فهم النص.'},

  { id:'u1l1q44', unit:'u1', lesson:'u1l1', page:30, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'في "القمر" اللام ___ (تُنطق/لا تُنطق).', paragraph:'ال قمرية: اللام تُنطق. (ص30)', blanks:['تُنطق'], wordBank:['تُنطق','لا تُنطق'],
    explanation:'القمر اللام قمرية تُنطق.', goldenRule:'القمرية: اللام مسموعة.'},

  { id:'u1l1q45', unit:'u1', lesson:'u1l1', page:32, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'الدعاء "اللهمّ اشفِ" يناسب:', paragraph:'اللهم اشفِ أمي. (ص32)',
    options:[{text:'مريض',correct:true},{text:'مسافر',correct:false},{text:'تلميذ',correct:false},{text:'بائع',correct:false}],
    explanation:'الدعاء بالشفاء يناسب المريض.', goldenRule:'الدعاء يناسب الحال.'},

  { id:'u1l1q46', unit:'u1', lesson:'u1l1', page:28, type:'classify', bloom:'evaluate', difficulty:'hard',
    question:'صنّف التصرفات: تدل على صلة الرحم أم لا؟', paragraph:'صلة الرحم أقوال وأفعال. (ص28)',
    categories:['صلة رحم ✅','ليس صلة رحم ❌'],
    items:[{text:'الاتصال هاتفياً بالقريب',correct_category:0},{text:'إرسال رسالة لعمتك',correct_category:0},{text:'حذف رقم الخال',correct_category:1},{text:'مقاطعة العائلة',correct_category:1},{text:'مساعدة الجد في السوق',correct_category:0},{text:'رفض دعوة الجدة',correct_category:1}],
    explanation:'الاتصال والرسالة والمساعدة صلة. الحذف والمقاطعة والرفض قطيعة.', goldenRule:'صلة الرحم بالقول والفعل.'},

  { id:'u1l1q47', unit:'u1', lesson:'u1l1', page:33, type:'trueFalse', bloom:'understand', difficulty:'medium',
    question:'كلمة "الصلة" في "إنَّ الصلةَ" منصوبة بالفتحة.', paragraph:'إنَّ الصلةَ واجبةٌ. (ص33)',
    correctAnswer:true, explanation:'الصلة منصوبة بإنّ والفتحة علامة النصب.', goldenRule:'الفتحة علامة النصب في المفرد.'},

  { id:'u1l1q48', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد عناصر صلة الرحم في النص:', paragraph:'خمسة عناصر. (ص28)',
    options:[{text:'5',correct:true},{text:'3',correct:false},{text:'7',correct:false},{text:'2',correct:false}],
    explanation:'عناصر صلة الرحم خمسة: زيارة، سؤال، تفقّد، مساعدة، مشاركة.', goldenRule:'صلة الرحم = 5 عناصر.'},

  { id:'u1l1q49', unit:'u1', lesson:'u1l1', page:30, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الكلمة بنوع اللام فيها:', paragraph:'ال شمسية والقمرية. (ص30)',
    pairs:[{left:'الكتاب',right:'قمرية'},{left:'السماء',right:'شمسية'},{left:'البحر',right:'قمرية'},{left:'الناس',right:'شمسية'}],
    explanation:'الكتاب والبحر قمرية. السماء والناس شمسية.', goldenRule:'نميّز اللام من النطق.'},

  { id:'u1l1q50', unit:'u1', lesson:'u1l1', page:28, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'أكمل: "صلة الرحم تبدأ بـ ___ الأقارب."', paragraph:'الزيارة أول عنصر. (ص28)', blanks:['زيارة'], wordBank:['زيارة','مقاطعة','نسيان'],
    explanation:'صلة الرحم تبدأ بالزيارة.', goldenRule:'الزيارة خطوة صلة الرحم الأولى.'},

  { id:'u1l1q51', unit:'u1', lesson:'u1l1', page:32, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أدعية حسب المناسبة:', paragraph:'الدعاء يناسب الحال. (ص32)',
    items:['اللهمّ اشفِ المريض','اللهمّ وفّق الطالب','اللهمّ ارحم المسافر'], correctOrder:[0,1,2],
    explanation:'لكل حالٍ دعاءٌ يناسبه.', goldenRule:'الدعاء يناسب الحاجة.'},

  { id:'u1l1q52', unit:'u1', lesson:'u1l1', page:27, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية صلة الرحم أنها:', paragraph:'تزيد المحبّة بين الأقارب. (ص28)',
    options:[{text:'تزيد المحبّة والتواصل',correct:true},{text:'تزيد المال',correct:false},{text:'تقلّل الوقت',correct:false},{text:'تسبّب التعب',correct:false}],
    explanation:'صلة الرحم تزيد المحبّة والتواصل.', goldenRule:'صلة الرحم = محبّة وتواصل.'},

  { id:'u1l1q53', unit:'u1', lesson:'u1l1', page:33, type:'classify', bloom:'understand', difficulty:'easy',
    question:'صنّف: إنّ أم لا؟', paragraph:'إنّ وأخواتها. (ص33)',
    categories:['من أخوات إنّ','ليست منها'],
    items:[{text:'إنّ',correct_category:0},{text:'لكنّ',correct_category:0},{text:'ذهب',correct_category:1},{text:'أنّ',correct_category:0},{text:'كتب',correct_category:1},{text:'لعلّ',correct_category:0}],
    explanation:'أخوات إنّ: إنّ، أنّ، لكنّ، لعلّ، كأنّ.', goldenRule:'إنّ وأخواتها ستّ.'},

  { id:'u1l1q54', unit:'u1', lesson:'u1l1', page:28, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الأب شرح لفوّاز ونورة معنى صلة الرحم.', paragraph:'الأب: صلة الرحم تعني... (ص28)', correctAnswer:true,
    explanation:'الأب شرح معنى صلة الرحم لأبنائه.', goldenRule:'الوالد معلّم لأبنائه.'},

  { id:'u1l1q55', unit:'u1', lesson:'u1l1', page:30, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'في كلمة "التين" اللام شمسية فلا ___ .', paragraph:'ال شمسية لا تُنطق. (ص30)', blanks:['تُنطق'], wordBank:['تُنطق','تُكتب','تُقرأ'],
    explanation:'ال شمسية اللام لا تُنطق.', goldenRule:'ال شمسية = لا نطق للام.'},

  { id:'u1l1q56', unit:'u1', lesson:'u1l1', page:33, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الجملة بنوع التأكيد:', paragraph:'إنّ للتأكيد. (ص33)',
    pairs:[{left:'إنّ',right:'تأكيد'},{left:'(بدون إنّ)',right:'عادي'}],
    explanation:'إنّ تفيد التأكيد.', goldenRule:'إنّ = تأكيد الجملة.'},

  { id:'u1l1q57', unit:'u1', lesson:'u1l1', page:28, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'اقترح فعلاً عملياً لصلة الرحم:', paragraph:'الأفعال المتنوعة. (ص28)',
    options:[{text:'زيارة الجد الأسبوعية',correct:true},{text:'النوم مبكراً',correct:false},{text:'لعب الكرة',correct:false},{text:'مشاهدة التلفاز',correct:false}],
    explanation:'زيارة الجد أسبوعياً فعل عملي لصلة الرحم.', goldenRule:'صلة الرحم بالأفعال لا الأقوال.'},

  { id:'u1l1q58', unit:'u1', lesson:'u1l1', page:27, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب الحدث كما وقع:', paragraph:'سماع ← سؤال ← إجابة. (ص27-28)',
    items:['سماع الحديث','سؤال الأب','إجابة الأب'], correctOrder:[0,1,2],
    explanation:'التسلسل: سماع ← سؤال ← إجابة.', goldenRule:'ترتيب الأحداث يوضّح النص.'},

  { id:'u1l1q59', unit:'u1', lesson:'u1l1', page:32, type:'classify', bloom:'evaluate', difficulty:'hard',
    question:'صنّف: دعاء أم لا؟', paragraph:'الدعاء طلب من الله. (ص32)',
    categories:['دعاء 🤲','ليس بدعاء'],
    items:[{text:'اللهمّ ارزقنا',correct_category:0},{text:'اللهمّ احفظنا',correct_category:0},{text:'اذهب إلى السوق',correct_category:1},{text:'اللهمّ اشفنا',correct_category:0},{text:'اقرأ الدرس',correct_category:1},{text:'اللهمّ وفّقنا',correct_category:0}],
    explanation:'الدعاء ما يُطلب من الله. ما عداه أوامر للناس.', goldenRule:'الدعاء موجّه لله وحده.'},

  { id:'u1l1q60', unit:'u1', lesson:'u1l1', page:30, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'الفرق بين ال شمسية والقمرية في:', paragraph:'النطق. (ص30)',
    options:[{text:'نطق اللام',correct:true},{text:'عدد الحروف',correct:false},{text:'المعنى',correct:false},{text:'الترتيب',correct:false}],
    explanation:'الفرق في نطق اللام: تُنطق في القمرية ولا تُنطق في الشمسية.', goldenRule:'الفرق في نطق اللام.'},

  { id:'u1l1q61', unit:'u1', lesson:'u1l1', page:28, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'ألّف جملة: "أ___ عمّتي كل شهر."', paragraph:'صلة الرحم بالزيارة. (ص28)', blanks:['زور'], wordBank:['زور','اهجر','نسَ'],
    explanation:'أزور عمتي كل شهر = صلة رحم.', goldenRule:'الزيارة الدورية صلة رحم.'},

  { id:'u1l1q62', unit:'u1', lesson:'u1l1', page:33, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'"إنّ" حرف توكيد ونصب.', paragraph:'إنّ حرف توكيد ونصب. (ص33)', correctAnswer:true,
    explanation:'إنّ حرف توكيد ونصب ينصب المبتدأ.', goldenRule:'إنّ = توكيد + نصب.'},

  { id:'u1l1q63', unit:'u1', lesson:'u1l1', page:32, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'نبدأ الدعاء بـ:', paragraph:'اللهمّ... (ص32)',
    options:[{text:'اللهمّ',correct:true},{text:'يا صديق',correct:false},{text:'اسمع',correct:false},{text:'انظر',correct:false}],
    explanation:'نبدأ الدعاء بـ"اللهمّ".', goldenRule:'الدعاء يبدأ باللهمّ.'},

  { id:'u1l1q64', unit:'u1', lesson:'u1l1', page:28, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل كل تصرف بنتيجته:', paragraph:'صلة الرحم وقطيعة الرحم. (ص28)',
    pairs:[{left:'صلة الرحم',right:'محبّة وزيادة'},{left:'قطيعة الرحم',right:'بُعد وقطيعة'},{left:'الدعاء',right:'قربة من الله'}],
    explanation:'صلة الرحم محبّة، قطيعة الرحم بُعد، الدعاء قربة.', goldenRule:'كل عمل له نتيجة.'},

  { id:'u1l1q65', unit:'u1', lesson:'u1l1', page:27, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الحديث الشريف يحثّ على:', paragraph:'"فليصل رحمه". (ص27)',
    options:[{text:'صلة الرحم',correct:true},{text:'اللعب',correct:false},{text:'النوم',correct:false},{text:'السفر',correct:false}],
    explanation:'الحديث يحثّ على صلة الرحم.', goldenRule:'الحديث يحثّ على الخير.'},

  // ════════ الوحدة 1 / الدرس 2: عذراً يا جدي (ص36-43) — 65 سؤالاً ════════
  { id:'u1l2q11', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'أين كان فوّاز عندما رآه المعلم حزيناً؟', paragraph:'في حصة القراءة صحب المعلّم التلاميذ إلى مكتبة المدرسة. (ص36)',
    options:[{text:'في المكتبة',correct:true},{text:'في الفصل',correct:false},{text:'في الساحة',correct:false},{text:'في المنزل',correct:false}],
    explanation:'كان فوّاز في المكتبة حزيناً.', goldenRule:'المكتبة مكان للقراءة والاطلاع.'},

  { id:'u1l2q12', unit:'u1', lesson:'u1l2', page:36, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'طلب جدّ فوّاز منه أن يخفض صوت التلفاز.', paragraph:'طلب منّي جدّي أن أخفض صوت التلفاز. (ص36-37)', correctAnswer:true,
    explanation:'جدّ فوّاز طلب منه خفض صوت التلفاز.', goldenRule:'طاعة الجد واجبة.'},

  { id:'u1l2q13', unit:'u1', lesson:'u1l2', page:37, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'نصح المعلم فوّاز بأن:', paragraph:'عليك أن تعتذر إلى جدّك وتطلب السماح منه. (ص37)',
    options:[{text:'يعتذر لجده',correct:true},{text:'ينسى الأمر',correct:false},{text:'يبتعد عن جده',correct:false},{text:'يخبر أباه',correct:false}],
    explanation:'المعلم نصح فوّاز بالاعتذار لجده.', goldenRule:'الاعتذار عند الخطأ أدب عظيم.'},

  { id:'u1l2q14', unit:'u1', lesson:'u1l2', page:37, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب الأحداث كما وقعت:', paragraph:'طلب الجد ← رفض فوّاز ← غضب الجد ← حزن فوّاز ← اعتذار. (ص36-37)',
    items:['طلب الجد','رفض فوّاز','غضب الجد','حزن فوّاز'], correctOrder:[0,1,2,3],
    explanation:'طلب ← رفض ← غضب ← حزن.', goldenRule:'ترتيب الأحداث يوضّح القصة.'},

  { id:'u1l2q15', unit:'u1', lesson:'u1l2', page:38, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: آداب الحوار أم لا؟', paragraph:'آداب الحوار. (ص38)',
    categories:['من آداب الحوار ✅','ليس منها ❌'],
    items:[{text:'الإنصات',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الابتسامة',correct_category:0},{text:'المقاطعة',correct_category:1},{text:'احترام الكبير',correct_category:0},{text:'الإهمال',correct_category:1}],
    explanation:'آداب الحوار: إنصات، ابتسامة، احترام. ليس منها: صراخ، مقاطعة، إهمال.', goldenRule:'آداب الحوار = إنصات + احترام + لطف.'},

  { id:'u1l2q16', unit:'u1', lesson:'u1l2', page:40, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"عندي ___ فأستطيع أن أعطف على غيري."', paragraph:'العطف على الغير من حسن الخلق. (ص40)', blanks:['قلبٌ'], wordBank:['قلبٌ','مالٌ','وقتٌ'],
    explanation:'العطف نابع من القلب.', goldenRule:'العطف خُلق القلب.'},

  { id:'u1l2q17', unit:'u1', lesson:'u1l2', page:42, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الفعل بنقيضه:', paragraph:'الأفعال وأضدادها. (ص42)',
    pairs:[{left:'يعتذر',right:'يخطئ'},{left:'يغفر',right:'يحقد'},{left:'يحترم',right:'يهمل'}],
    explanation:'الاعتذار ضد الخطأ، الغفران ضد الحقد.', goldenRule:'الأفعال لها أضداد.'},

  { id:'u1l2q18', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الدرس "عذراً يا جدي" يتحدّث عن:', paragraph:'اعتذار فوّاز لجدّه. (ص36)',
    options:[{text:'الاعتذار بعد الخطأ',correct:true},{text:'السفر',correct:false},{text:'اللعب',correct:false},{text:'التسوق',correct:false}],
    explanation:'الدرس عن الاعتذار بعد الخطأ.', goldenRule:'الاعتذار خُلق الكرام.'},

  { id:'u1l2q19', unit:'u1', lesson:'u1l2', page:37, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الاعتذار ضعف شخصية.', paragraph:'عليك أن تعتذر. (ص37)', correctAnswer:false,
    explanation:'الاعتذار قوّة لا ضعف.', goldenRule:'الاعتذار شجاعة وقوّة.'},

  { id:'u1l2q20', unit:'u1', lesson:'u1l2', page:37, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا أخطأت في حق صديق فعليك:', paragraph:'الاعتذار وطلب السماح. (ص37)',
    options:[{text:'الاعتذار وطلب السماح',correct:true},{text:'تجاهله',correct:false},{text:'الانتقام',correct:false},{text:'الخصام',correct:false}],
    explanation:'عند الخطأ نعتذر ونطلب السماح.', goldenRule:'الخطأ يُصلَح بالاعتذار.'},

  { id:'u1l2q21', unit:'u1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الإنصات للأخرين من ___ الحوار."', paragraph:'آداب الحوار. (ص38)', blanks:['آداب'], wordBank:['آداب','أخطاء','عيوب'],
    explanation:'الإنصات من آداب الحوار.', goldenRule:'الإنصات أدب الحوار.'},

  { id:'u1l2q22', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'سبب حزن فوّاز:', paragraph:'أخطأ في حق جدّه. (ص36)',
    options:[{text:'خطؤه في حق جدّه',correct:true},{text:'رسوبه في الامتحان',correct:false},{text:'مرضه',correct:false},{text:'فقد كتابه',correct:false}],
    explanation:'حزن فوّاز لأنه أخطأ في حق جدّه.', goldenRule:'الحزن على الخطأ بداية الإصلاح.'},

  { id:'u1l2q23', unit:'u1', lesson:'u1l2', page:40, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة اعتذار مناسبة:', paragraph:'أسف يا جدي. (ص40)',
    options:[{text:'أعتذر إليك يا جدي ولن أكرّر',correct:true},{text:'لا أعرف ما فعلت',correct:false},{text:'الخطأ منك',correct:false},{text:'سأفعل ما أريد',correct:false}],
    explanation:'الاعتذار الصادق يعترف بالخطأ ويعد بعدم تكراره.', goldenRule:'الاعتذار = اعتراف + وعد.'},

  { id:'u1l2q24', unit:'u1', lesson:'u1l2', page:38, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'المقاطعة من آداب الحوار.', paragraph:'آداب الحوار. (ص38)', correctAnswer:false,
    explanation:'المقاطعة ليست من آداب الحوار.', goldenRule:'المقاطعة خُلق سيّئ.'},

  { id:'u1l2q25', unit:'u1', lesson:'u1l2', page:40, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: خُلق حسن أم سيّئ؟', paragraph:'الأخلاق. (ص40)',
    categories:['حسن ✅','سيّئ ❌'],
    items:[{text:'الإنصات',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الاعتذار',correct_category:0},{text:'الكذب',correct_category:1},{text:'الاحترام',correct_category:0},{text:'الإهمال',correct_category:1}],
    explanation:'حسن: إنصات، اعتذار، احترام. سيّئ: صراخ، كذب، إهمال.', goldenRule:'الأخلاق الحسنة تُزكي النفس.'},

  { id:'u1l2q26', unit:'u1', lesson:'u1l2', page:42, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالتصرف الصحيح:', paragraph:'التصرفات المناسبة. (ص42)',
    pairs:[{left:'الخطأ في حق الجد',right:'الاعتذار'},{left:'طلب الجد',right:'الطاعة'},{left:'الحوار',right:'الإنصات'}],
    explanation:'لكل موقف تصرف مناسب.', goldenRule:'التصرف المناسب للموقف أدب.'},

  { id:'u1l2q27', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"خفض الصوت" عند الكبير من آداب:', paragraph:'خفض صوت التلفاز. (ص36)',
    options:[{text:'الاحترام',correct:true},{text:'اللعب',correct:false},{text:'الدراسة',correct:false},{text:'الأكل',correct:false}],
    explanation:'خفض الصوت احترام للكبار.', goldenRule:'خفض الصوت = احترام.'},

  { id:'u1l2q28', unit:'u1', lesson:'u1l2', page:37, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب نصيحة المعلم:', paragraph:'اعتذر ← اطلب السماح ← لا تكرّر. (ص37)',
    items:['اعتذر','اطلب السماح','لا تكرّر'], correctOrder:[0,1,2],
    explanation:'النصيحة: اعتذر ← اطلب السماح ← لا تكرّر.', goldenRule:'نصيحة المعلم متكاملة.'},

  { id:'u1l2q29', unit:'u1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'من آداب الحوار ___ وعدم المقاطعة.', paragraph:'آداب الحوار. (ص38)', blanks:['الإنصات'], wordBank:['الإنصات','الصراخ','الضرب'],
    explanation:'الإنصات من آداب الحوار.', goldenRule:'الإنصات أساس الحوار.'},

  { id:'u1l2q30', unit:'u1', lesson:'u1l2', page:40, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'العطف على الغير يدلّ على حسن الخلق.', paragraph:'العطف من حسن الخلق. (ص40)', correctAnswer:true,
    explanation:'العطف دليل حسن الخلق.', goldenRule:'العطف خُلق حسن.'},

  { id:'u1l2q31', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن صحب التلاميذ إلى المكتبة؟', paragraph:'صحب المعلّم التلاميذ. (ص36)',
    options:[{text:'المعلّم',correct:true},{text:'المدير',correct:false},{text:'الوالد',correct:false},{text:'الجد',correct:false}],
    explanation:'المعلم صحب التلاميذ إلى المكتبة.', goldenRule:'المعلم مرشدٌ لتلاميذه.'},

  { id:'u1l2q32', unit:'u1', lesson:'u1l2', page:38, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: تصرّف يحترم الكبير أم لا؟', paragraph:'احترام الكبير. (ص38)',
    categories:['احترام ✅','لا يحترم ❌'],
    items:[{text:'الوقوف للجد',correct_category:0},{text:'الصراخ في وجهه',correct_category:1},{text:'خدمته',correct_category:0},{text:'رفض طلبه',correct_category:1},{text:'الإنصات له',correct_category:0},{text:'مقاطعته',correct_category:1}],
    explanation:'احترام: وقوف، خدمة، إنصات. لا يحترم: صراخ، رفض، مقاطعة.', goldenRule:'احترام الكبير طاعة وآداب.'},

  { id:'u1l2q33', unit:'u1', lesson:'u1l2', page:40, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'مفردات الدرس. (ص40)',
    pairs:[{left:'عذراً',right:'اعتذار'},{left:'الإنصات',right:'إصغاء'},{left:'العطف',right:'حنان'}],
    explanation:'عذراً=اعتذار، إنصات=إصغاء، عطف=حنان.', goldenRule:'فهم المفردات = فهم النص.'},

  { id:'u1l2q34', unit:'u1', lesson:'u1l2', page:37, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"عليك أن ___ إلى جدّك."', paragraph:'عليك أن تعتذر إلى جدّك. (ص37)', blanks:['تعتذر'], wordBank:['تعتذر','تبتعد','تنسى'],
    explanation:'النصيحة: اعتذر إلى جدّك.', goldenRule:'الاعتذار واجب بعد الخطأ.'},

  { id:'u1l2q35', unit:'u1', lesson:'u1l2', page:36, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'كان فوّاز منشغلاً ببرنامجه المفضّل فلم يُنفّذ طلب جدّه.', paragraph:'لانشغالي بمتابعة برنامجي المفضّل. (ص36-37)', correctAnswer:true,
    explanation:'انشغال فوّاز ببرنامجه منعه من طاعة جدّه.', goldenRule:'الانشغال عن طاعة الكبير خطأ.'},

  { id:'u1l2q36', unit:'u1', lesson:'u1l2', page:42, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح تصرّفاً يدلّ على العطف:', paragraph:'العطف على الغير. (ص42)',
    options:[{text:'مساعدة زميل ضعيف',correct:true},{text:'السخرية من الضعيف',correct:false},{text:'رفض المساعدة',correct:false},{text:'الخصام',correct:false}],
    explanation:'مساعدة الضعيف عطف.', goldenRule:'العطف بالفعل لا القول.'},

  { id:'u1l2q37', unit:'u1', lesson:'u1l2', page:38, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات الحوار المهذّب:', paragraph:'آداب الحوار. (ص38)',
    items:['السلام','الإنصات','الكلام بلطف','الشكر'], correctOrder:[0,1,2,3],
    explanation:'سلام ← إنصات ← كلام بلطف ← شكر.', goldenRule:'الحوار المهذّب له خطوات.'},

  { id:'u1l2q38', unit:'u1', lesson:'u1l2', page:40, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف المواقف: يتطلب اعتذاراً أم لا؟', paragraph:'الاعتذار. (ص37)',
    categories:['يحتاج اعتذار','لا يحتاج'],
    items:[{text:'الخطأ في حق الجد',correct_category:0},{text:'السلام على الجار',correct_category:1},{text:'كسر لعبة أخيك',correct_category:0},{text:'مساعدة الوالد',correct_category:1},{text:'الصراخ على الأم',correct_category:0},{text:'قراءة الدرس',correct_category:1}],
    explanation:'الخطأ يحتاج اعتذار. الأفعال الحسنة لا تحتاج.', goldenRule:'الاعتذار للخطأ لا للحسن.'},

  { id:'u1l2q39', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'لماذا غضب الجد من فوّاز؟', paragraph:'فلم أفعل فغضب منّي. (ص37)',
    options:[{text:'لأنه لم يخفض صوت التلفاز',correct:true},{text:'لأنه ذهب للنوم',correct:false},{text:'لأنه قرأ كتاباً',correct:false},{text:'لأنه صلّى',correct:false}],
    explanation:'غضب الجد لأن فوّاز لم يخفض الصوت.', goldenRule:'عصيان الكبير يغضبه.'},

  { id:'u1l2q40', unit:'u1', lesson:'u1l2', page:38, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"من آداب الحوار ___ الأخرين."', paragraph:'الإنصات للأخرين. (ص38)', blanks:['الإنصات'], wordBank:['الإنصات','مقاطعة','إهمال'],
    explanation:'الإنصات من آداب الحوار.', goldenRule:'إنصات = أدب حوار.'},

  { id:'u1l2q41', unit:'u1', lesson:'u1l2', page:42, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العطف على الغير خُلق حسن.', paragraph:'العطف من الأخلاق. (ص42)', correctAnswer:true,
    explanation:'العطف خُلق حسن يدلّ على طيب القلب.', goldenRule:'العطف = طيب القلب.'},

  { id:'u1l2q42', unit:'u1', lesson:'u1l2', page:37, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الشخص بتصرفه:', paragraph:'شخصيات النص. (ص36-37)',
    pairs:[{left:'فوّاز',right:'أخطأ وحزن'},{left:'الجد',right:'طلب وغضب'},{left:'المعلم',right:'نصح بالاعتذار'}],
    explanation:'فوّاز أخطأ، الجد طلب، المعلم نصح.', goldenRule:'لكل شخصية دور.'},

  { id:'u1l2q43', unit:'u1', lesson:'u1l2', page:40, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أفضل ردّ على الخطأ:', paragraph:'الاعتذار. (ص37)',
    options:[{text:'الاعتذار الصادق',correct:true},{text:'الإنكار',correct:false},{text:'إلقاء اللوم',correct:false},{text:'الخصام',correct:false}],
    explanation:'الاعتذار الصادق أفضل ردّ على الخطأ.', goldenRule:'الاعتذار الصادق يُصلح.'},

  { id:'u1l2q44', unit:'u1', lesson:'u1l2', page:38, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب آداب الحوار:', paragraph:'آداب الحوار. (ص38)',
    items:['الإنصات','التفكير','الردّ بلطف'], correctOrder:[0,1,2],
    explanation:'إنصات ← تفكير ← ردّ بلطف.', goldenRule:'الحوار المهذّب = إنصات + تفكير + ردّ.'},

  { id:'u1l2q45', unit:'u1', lesson:'u1l2', page:36, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من النص أم لا؟', paragraph:'شخصيات النص. (ص36)',
    categories:['من النص','ليس من النص'],
    items:[{text:'فوّاز',correct_category:0},{text:'الجد',correct_category:0},{text:'المعلم',correct_category:0},{text:'الشرطي',correct_category:1},{text:'نورة',correct_category:1},{text:'الطبيب',correct_category:1}],
    explanation:'من النص: فوّاز، الجد، المعلم.', goldenRule:'شخصيات النص: فوّاز، جدّه، المعلم.'},

  { id:'u1l2q46', unit:'u1', lesson:'u1l2', page:40, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'ألّف جملة: "أعتذر منك يا ___ ولن أكرّر."', paragraph:'الاعتذار. (ص40)', blanks:['جدي'], wordBank:['جدي','صديقي','أخي'],
    explanation:'الاعتذار للجد يصلح الخطأ.', goldenRule:'الاعتذار الصادق يُصالح.'},

  { id:'u1l2q47', unit:'u1', lesson:'u1l2', page:37, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الاعتراف بالخطأ نصف الحل.', paragraph:'اعتذر وطلب السماح. (ص37)', correctAnswer:true,
    explanation:'الاعتراف بالخطأ بداية الإصلاح.', goldenRule:'الاعتراف بالخطأ شجاعة.'},

  { id:'u1l2q48', unit:'u1', lesson:'u1l2', page:42, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا مرض زميلك في الفصل فعليك:', paragraph:'العطف على الغير. (ص42)',
    options:[{text:'زيارته والسؤال عنه',correct:true},{text:'تجاهله',correct:false},{text:'السخرية منه',correct:false},{text:'نسيانه',correct:false}],
    explanation:'زيارة المريض والسؤال عنه عطف.', goldenRule:'زيارة المريض عطف ووفاء.'},

  { id:'u1l2q49', unit:'u1', lesson:'u1l2', page:38, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الأدب بموضعه:', paragraph:'الآداب. (ص38)',
    pairs:[{left:'الإنصات',right:'الحوار'},{left:'الاعتذار',right:'بعد الخطأ'},{left:'خفض الصوت',right:'عند الكبار'}],
    explanation:'لكل أدب موضع.', goldenRule:'الأدب في موضعه أحسن.'},

  { id:'u1l2q50', unit:'u1', lesson:'u1l2', page:36, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"في حصة ___ ذهب التلاميذ إلى المكتبة."', paragraph:'في حصة القراءة. (ص36)', blanks:['القراءة'], wordBank:['القراءة','الرياضة','الرسم'],
    explanation:'ذهبوا في حصة القراءة.', goldenRule:'حصة القراءة = مكتبة واطلاع.'},

  { id:'u1l2q51', unit:'u1', lesson:'u1l2', page:40, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب مراحل الاعتذار:', paragraph:'الاعتذار الصادق. (ص37-40)',
    items:['الاعتراف بالخطأ','الشعور بالندم','طلب السماح','وعد بعدم التكرار'], correctOrder:[0,1,2,3],
    explanation:'اعتراف ← ندم ← سماح ← وعد.', goldenRule:'الاعتذار مراحل متكاملة.'},

  { id:'u1l2q52', unit:'u1', lesson:'u1l2', page:38, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: صوت مرتفع أم منخفض في المواقف؟', paragraph:'خفض الصوت أدب. (ص38)',
    categories:['صوت منخفض ✅','صوت مرتفع ❌'],
    items:[{text:'عند الحديث مع الجد',correct_category:0},{text:'في الصف',correct_category:0},{text:'في الملعب',correct_category:1},{text:'عند قراءة القرآن',correct_category:0},{text:'في الشجار',correct_category:1},{text:'عند النداء',correct_category:1}],
    explanation:'المواقف المهذّبة تقتضي خفض الصوت.', goldenRule:'خفض الصوت أدب.'},

  { id:'u1l2q53', unit:'u1', lesson:'u1l2', page:42, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العطف على الغير من صفات المؤمن.', paragraph:'العطف. (ص42)', correctAnswer:true,
    explanation:'العطف من صفات المؤمن الحق.', goldenRule:'المؤمن عطوف رحيم.'},

  { id:'u1l2q54', unit:'u1', lesson:'u1l2', page:37, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن نصح فوّاز بالاعتذار؟', paragraph:'المعلّم. (ص37)', options:[{text:'المعلم',correct:true},{text:'الجد',correct:false},{text:'نورة',correct:false},{text:'الأب',correct:false}],
    explanation:'المعلم نصح فوّاز بالاعتذار.', goldenRule:'المعلم ناصح أمين.'},

  { id:'u1l2q55', unit:'u1', lesson:'u1l2', page:40, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"أعتذر إليك يا جدي لأنني ___ طلبك."', paragraph:'لم أنفذ طلب الجد. (ص36)', blanks:['لم أنفذ'], wordBank:['لم أنفذ','نفذت','أحببت'],
    explanation:'الاعتراف: لم أنفذ طلبك.', goldenRule:'الاعتراف بالخطأ صدق.'},

  { id:'u1l2q56', unit:'u1', lesson:'u1l2', page:42, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل الخُلق بثمرته:', paragraph:'الأخلاق. (ص42)',
    pairs:[{left:'الإنصات',right:'الفهم'},{left:'الاعتذار',right:'الصفح'},{left:'العطف',right:'المحبّة'}],
    explanation:'الإنصات ثمرته الفهم، الاعتذار ثمرته الصفح.', goldenRule:'كل خُلق له ثمرة.'},

  { id:'u1l2q57', unit:'u1', lesson:'u1l2', page:36, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الدروس المستفادة من قصة فوّاز:', paragraph:'الاعتذار والآداب. (ص36-42)',
    options:[{text:'الاعتذار واحترام الكبير',correct:true},{text:'اللعب واللهو',correct:false},{text:'النوم الطويل',correct:false},{text:'كثرة الأكل',correct:false}],
    explanation:'الدروس: الاعتذار، احترام الكبير، الحوار المهذّب.', goldenRule:'القصة تعلّم الأخلاق.'},

  { id:'u1l2q58', unit:'u1', lesson:'u1l2', page:38, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب تصرفات من السيّئ للحسن:', paragraph:'الأخلاق. (ص38-42)',
    items:['الصراخ','الإنصات','الاعتذار','العطف'], correctOrder:[0,1,2,3],
    explanation:'من السيّئ للحسن: صراخ ← إنصات ← اعتذار ← عطف.', goldenRule:'ترقّي الأخلاق هدف.'},

  { id:'u1l2q59', unit:'u1', lesson:'u1l2', page:40, type:'classify', bloom:'understand', difficulty:'easy',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'التصرفات. (ص40)',
    categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'الاعتذار',correct_category:0},{text:'الكذب',correct_category:1},{text:'الإنصات',correct_category:0},{text:'المقاطعة',correct_category:1},{text:'العطف',correct_category:0},{text:'الخصام',correct_category:1}],
    explanation:'يعجبني: اعتذار، إنصات، عطف. لا يعجبني: كذب، مقاطعة، خصام.', goldenRule:'الأخلاق الحسنة تُعجب.'},

  { id:'u1l2q60', unit:'u1', lesson:'u1l2', page:36, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'حزن فوّاز على خطئه دليل على حسن ضميره.', paragraph:'رأى فوّازاً حزيناً. (ص36)', correctAnswer:true,
    explanation:'الحزن على الخطأ دليل ضمير حيّ.', goldenRule:'الحزن على الخطأ بداية الإصلاح.'},

  { id:'u1l2q61', unit:'u1', lesson:'u1l2', page:42, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أعطف على ___ وأساعدهم."', paragraph:'العطف على الغير. (ص42)', blanks:['الضعيف'], wordBank:['الضعيف','القوي','الغني'],
    explanation:'العطف على الضعيف خُلق حسن.', goldenRule:'العطف على الضعيف فضيلة.'},

  { id:'u1l2q62', unit:'u1', lesson:'u1l2', page:38, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عندما يتحدّث المعلم يجب:', paragraph:'آداب الحوار. (ص38)',
    options:[{text:'الإنصات له',correct:true},{text:'مقاطعته',correct:false},{text:'اللعب',correct:false},{text:'الهمس',correct:false}],
    explanation:'عند حديث المعلم ننصت.', goldenRule:'إنصات المعلم = أدب.'},

  { id:'u1l2q63', unit:'u1', lesson:'u1l2', page:37, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل السبب بالنتيجة:', paragraph:'أحداث القصة. (ص37)',
    pairs:[{left:'رفض فوّاز',right:'غضب الجد'},{left:'نصح المعلم',right:'اعتذار فوّاز'},{left:'الاعتذار',right:'الرضا'}],
    explanation:'لكل سبب نتيجة.', goldenRule:'السبب والنتيجة في القصة.'},

  { id:'u1l2q64', unit:'u1', lesson:'u1l2', page:42, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العطف على الغير خُلق إسلامي.', paragraph:'العطف. (ص42)', correctAnswer:true,
    explanation:'العطف خُلق إسلامي حثّ عليه الدين.', goldenRule:'الإسلام يحثّ على العطف.'},

  { id:'u1l2q65', unit:'u1', lesson:'u1l2', page:40, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة اعتذار لصديق:', paragraph:'الاعتذار. (ص40)',
    options:[{text:'سامحني يا صديقي',correct:true},{text:'لا أعرفك',correct:false},{text:'ارحل عنّي',correct:false},{text:'لا أريد رؤيتك',correct:false}],
    explanation:'سامحني يا صديقي جملة اعتذار.', goldenRule:'الاعتذار للصديق يحفظ المودّة.'},

  // ════════ الوحدة 2 / الدرس 1: الصديقان (ص60-70) — 65 سؤالاً ════════
  { id:'u2l1q11', unit:'u2', lesson:'u2l1', page:60, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الصديقان في النص هما:', paragraph:'صديقان يعيشان في قرية. (ص60)',
    options:[{text:'صديقان يعيشان في قرية',correct:true},{text:'أخوان في المدينة',correct:false},{text:'جاران متخاصمان',correct:false},{text:'تلميذان في الفصل',correct:false}],
    explanation:'الصديقان يعيشان في قرية.', goldenRule:'الصداقة محبّة ووفاء.'},

  { id:'u2l1q12', unit:'u2', lesson:'u2l1', page:60, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'كان الصديقان يحبّ بعضهما بعضاً.', paragraph:'كانا متحابّين. (ص60)', correctAnswer:true,
    explanation:'كان الصديقان متحابّين ومتفقين.', goldenRule:'الصداقة = محبّة + وفاء.'},

  { id:'u2l1q13', unit:'u2', lesson:'u2l1', page:61, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'عندما هاجم الدبّ أحد الصديقين، تصرّف الآخر بأن:', paragraph:'تظاهر بالموت فتركه الدبّ. (ص61)',
    options:[{text:'تظاهر بالموت',correct:true},{text:'هرب وتركه',correct:false},{text:'صرخ',correct:false},{text:'قاتل الدبّ',correct:false}],
    explanation:'تظاهر بالموت فتركه الدبّ لأنه لا يأكل الموتى.', goldenRule:'الذكاء في المواقف الصعبة.'},

  { id:'u2l1q14', unit:'u2', lesson:'u2l1', page:61, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أحداث القصة:', paragraph:'مشي ← هجوم الدبّ ← تظاهر بالموت ← نصح الصديق. (ص60-61)',
    items:['مشي الصديقان','هجوم الدبّ','تظاهر بالموت','نصح الصديق'], correctOrder:[0,1,2,3],
    explanation:'التسلسل: مشي ← هجوم ← تظاهر ← نصح.', goldenRule:'ترتيب الأحداث يوضّح القصة.'},

  { id:'u2l1q15', unit:'u2', lesson:'u2l1', page:62, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من صفات الصديق الحقيقي أم لا؟', paragraph:'صفات الصديق. (ص62)',
    categories:['صفة حسنة ✅','ليست منها ❌'],
    items:[{text:'الإخلاص',correct_category:0},{text:'الغدر',correct_category:1},{text:'النصح',correct_category:0},{text:'الخيانة',correct_category:1},{text:'الوفاء',correct_category:0},{text:'الكذب',correct_category:1}],
    explanation:'صفات الصديق: إخلاص، نصح، وفاء. سيّئة: غدر، خيانة، كذب.', goldenRule:'الصديق الحقيقي وفيّ مخلص.'},

  { id:'u2l1q16', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الصديق ___ يُنسى عند الشدّة لا يكون صديقاً حقيقياً."', paragraph:'الصديق وقت الضيق. (ص64)', blanks:['وقت'], wordBank:['وقت','دائماً','أبداً'],
    explanation:'الصديق الحقيقي يظهر وقت الشدّة.', goldenRule:'الصديق وقت الضيق.'},

  { id:'u2l1q17', unit:'u2', lesson:'u2l1', page:65, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الكلمة بمضادها:', paragraph:'المفردات وأضدادها. (ص65)',
    pairs:[{left:'الصدق',right:'الكذب'},{left:'الوفاء',right:'الغدر'},{left:'الإخلاص',right:'الخيانة'}],
    explanation:'الصدق×الكذب، الوفاء×الغدر، الإخلاص×الخيانة.', goldenRule:'الصفات لها أضداد.'},

  { id:'u2l1q18', unit:'u2', lesson:'u2l1', page:60, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مكان سكن الصديقين:', paragraph:'قرية. (ص60)', options:[{text:'قرية',correct:true},{text:'مدينة',correct:false},{text:'صحراء',correct:false},{text:'جبل',correct:false}],
    explanation:'كانا يعيشان في قرية.', goldenRule:'القرية بيئة هادئة.'},

  { id:'u2l1q19', unit:'u2', lesson:'u2l1', page:61, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الصديق الذي هرب وترك صاحبه كان وفيّاً.', paragraph:'هرب وتسلّق شجرة. (ص61)', correctAnswer:false,
    explanation:'الذي هرب لم يكن وفيّاً بل غادر صاحبه.', goldenRule:'الهروب عند الشدّة غدر.'},

  { id:'u2l1q20', unit:'u2', lesson:'u2l1', page:62, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'الصديق الحقيقي هو من:', paragraph:'يقف معك وقت الشدّة. (ص62)',
    options:[{text:'يقف معك في الشدّة',correct:true},{text:'يتركك عند الخطر',correct:false},{text:'يكذب عليك',correct:false},{text:'يغدر بك',correct:false}],
    explanation:'الصديق الحقيقي يقف مع صديقه في الشدّة.', goldenRule:'الصديق الحقيقي = وفاء الشدّة.'},

  { id:'u2l1q21', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"من صفات الصديق الحقيقي ___ ."', paragraph:'الإخلاص والنصح. (ص64)', blanks:['الإخلاص'], wordBank:['الإخلاص','الغدر','الكذب'],
    explanation:'الإخلاص من صفات الصديق الحقيقي.', goldenRule:'الإخلاص أساس الصداقة.'},

  { id:'u2l1q22', unit:'u2', lesson:'u2l1', page:61, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا تظاهر الصديق بالموت؟', paragraph:'الدبّ لا يأكل الميت. (ص61)',
    options:[{text:'لأن الدبّ لا يأكل الميت',correct:true},{text:'لينام',correct:false},{text:'ليضحك',correct:false},{text:'ليهرب',correct:false}],
    explanation:'تظاهر بالموت لأن الدبّ لا يأكل الجثث.', goldenRule:'الذكاء ينقذ من الخطر.'},

  { id:'u2l1q23', unit:'u2', lesson:'u2l1', page:65, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الصداقة:', paragraph:'الصداقة محبّة. (ص65)',
    options:[{text:'الصديق الوفيّ كنز',correct:true},{text:'الصديق يغدر',correct:false},{text:'الصديق يكذب',correct:false},{text:'الصديق يخون',correct:false}],
    explanation:'الصديق الوفيّ كنز لا يُقدّر بثمن.', goldenRule:'الصديق الوفيّ كنز.'},

  { id:'u2l1q24', unit:'u2', lesson:'u2l1', page:62, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الغدر من صفات الصديق السيّئة.', paragraph:'الغدر سيّئ. (ص62)', correctAnswer:true,
    explanation:'الغدر سيّئ وينافي الصداقة.', goldenRule:'الغدر يهدم الصداقة.'},

  { id:'u2l1q25', unit:'u2', lesson:'u2l1', page:62, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يحفظ الصداقة أم يهدمها؟', paragraph:'الصداقة. (ص62)',
    categories:['يحفظ الصداقة ✅','يهدمها ❌'],
    items:[{text:'الإخلاص',correct_category:0},{text:'الكذب',correct_category:1},{text:'النصح',correct_category:0},{text:'الغدر',correct_category:1},{text:'الوفاء',correct_category:0},{text:'الخيانة',correct_category:1}],
    explanation:'يحفظ: إخلاص، نصح، وفاء. يهدم: كذب، غدر، خيانة.', goldenRule:'الأخلاق تحفظ الصداقة.'},

  { id:'u2l1q26', unit:'u2', lesson:'u2l1', page:65, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالتصرف المناسب:', paragraph:'التصرفات. (ص65)',
    pairs:[{left:'مرض صديقك',right:'زره واسأل عنه'},{left:'نجح صديقك',right:'هنّئه'},{left:'أخطأ صديقك',right:'انصحه'}],
    explanation:'لكل موقف تصرف مناسب.', goldenRule:'التصرف المناسب يحفظ الصداقة.'},

  { id:'u2l1q27', unit:'u2', lesson:'u2l1', page:60, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'الدبّ في القصة رمز لـ:', paragraph:'هجوم الدبّ. (ص61)',
    options:[{text:'الخطر',correct:true},{text:'الصداقة',correct:false},{text:'الأمان',correct:false},{text:'السلام',correct:false}],
    explanation:'الدبّ رمز للخطر والشدّة.', goldenRule:'الدبّ = خطر يكشف الصديق.'},

  { id:'u2l1q28', unit:'u2', lesson:'u2l1', page:61, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب تصرفات الصديق الوفيّ:', paragraph:'الوفاء. (ص61)',
    items:['البقاء','مساعدة الصديق','التظاهر بالموت','النجاة معاً'], correctOrder:[0,1,2,3],
    explanation:'بقاء ← مساعدة ← تظاهر ← نجاة.', goldenRule:'الوفاء يظهر في الموقف.'},

  { id:'u2l1q29', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الصديق وقت ___ ."', paragraph:'الصديق وقت الضيق. (ص64)', blanks:['الضيق'], wordBank:['الضيق','الرخاء','الفرح'],
    explanation:'الصديق الحقيقي يظهر وقت الضيق.', goldenRule:'الضيق يكشف الصديق.'},

  { id:'u2l1q30', unit:'u2', lesson:'u2l1', page:62, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'النصح من صفات الصديق الحقيقي.', paragraph:'النصح. (ص62)', correctAnswer:true,
    explanation:'النصح من صفات الصديق الحقيقي.', goldenRule:'الصديق الناصح صديق وفيّ.'},

  { id:'u2l1q31', unit:'u2', lesson:'u2l1', page:60, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد الصديقين في القصة:', paragraph:'صديقان. (ص60)', options:[{text:'اثنان',correct:true},{text:'ثلاثة',correct:false},{text:'أربعة',correct:false},{text:'خمسة',correct:false}],
    explanation:'القصة عن صديقين اثنين.', goldenRule:'القصة عن صديقين.'},

  { id:'u2l1q32', unit:'u2', lesson:'u2l1', page:62, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: تصرّف فيه وفيّ أم غادر؟', paragraph:'الوفاء والغدر. (ص62)',
    categories:['وفيّ ✅','غادر ❌'],
    items:[{text:'البقاء عند الخطر',correct_category:0},{text:'الهروب',correct_category:1},{text:'النصح',correct_category:0},{text:'الخيانة',correct_category:1},{text:'المساعدة',correct_category:0},{text:'الترك',correct_category:1}],
    explanation:'وفيّ: بقاء، نصح، مساعدة. غادر: هروب، خيانة، ترك.', goldenRule:'الوفاء والغدر نقيضان.'},

  { id:'u2l1q33', unit:'u2', lesson:'u2l1', page:65, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'مفردات الدرس. (ص65)',
    pairs:[{left:'وفاء',right:'إخلاص'},{left:'غدر',right:'خيانة'},{left:'نصح',right:'إرشاد'}],
    explanation:'وفاء=إخلاص، غدر=خيانة، نصح=إرشاد.', goldenRule:'فهم المفردات أساس.'},

  { id:'u2l1q34', unit:'u2', lesson:'u2l1', page:61, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"تسلّق الصديق ___ وترك صاحبه."', paragraph:'تسلّق شجرة. (ص61)', blanks:['شجرة'], wordBank:['شجرة','جداراً','سوراً'],
    explanation:'تسلّق شجرة وهرب.', goldenRule:'الهروب خيانة.'},

  { id:'u2l1q35', unit:'u2', lesson:'u2l1', page:60, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'كان الصديقان يتمشيان في الغابة.', paragraph:'في الغابة. (ص60)', correctAnswer:true,
    explanation:'كانا يتمشيان فهاجمهما الدبّ.', goldenRule:'التمشي معاً صداقة.'},

  { id:'u2l1q36', unit:'u2', lesson:'u2l1', page:65, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح صفة للصديق الحقيقي:', paragraph:'صفات الصديق. (ص65)',
    options:[{text:'الصادق الناصح',correct:true},{text:'الكاذب الغادر',correct:false},{text:'الخائن',correct:false},{text:'المتهاون',correct:false}],
    explanation:'الصادق الناصح صديق حقيقي.', goldenRule:'الصدق والنصح أساس الصداقة.'},

  { id:'u2l1q37', unit:'u2', lesson:'u2l1', page:61, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات التصرف الوفيّ عند الخطر:', paragraph:'الوفاء. (ص61)',
    items:['تقييم الموقف','مساعدة الصديق','التضحية','النجاة معاً'], correctOrder:[0,1,2,3],
    explanation:'تقييم ← مساعدة ← تضحية ← نجاة.', goldenRule:'الوفاء خطوات متكاملة.'},

  { id:'u2l1q38', unit:'u2', lesson:'u2l1', page:62, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف المواقف: تدلّ على الصداقة أم لا؟', paragraph:'الصداقة. (ص62)',
    categories:['صداقة ✅','ليست صداقة ❌'],
    items:[{text:'مساعدة الصديق',correct_category:0},{text:'السخرية منه',correct_category:1},{text:'زيارته عند المرض',correct_category:0},{text:'الخصام',correct_category:1},{text:'النصح له',correct_category:0},{text:'الإفساد',correct_category:1}],
    explanation:'صداقة: مساعدة، زيارة، نصح. لا: سخرية، خصام، إفساد.', goldenRule:'الصداقة بالأفعال.'},

  { id:'u2l1q39', unit:'u2', lesson:'u2l1', page:61, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'لماذا ترك الدبّ الصديق الذي تظاهر بالموت؟', paragraph:'الدبّ لا يأكل الميت. (ص61)',
    options:[{text:'لأنه لا يأكل الموتى',correct:true},{text:'لأنه شبع',correct:false},{text:'لأنه خاف',correct:false},{text:'لأنه نام',correct:false}],
    explanation:'الدبّ لا يأكل الجثث فتركه.', goldenRule:'الذكاء ينقذ من الخطر.'},

  { id:'u2l1q40', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"الصديق الحقيقي لا ___ صاحبه."', paragraph:'لا يغدر. (ص64)', blanks:['يغدر'], wordBank:['يغدر','يحب','ينصر'],
    explanation:'الصديق الحقيقي لا يغدر بصاحبه.', goldenRule:'عدم الغدر وفاء.'},

  { id:'u2l1q41', unit:'u2', lesson:'u2l1', page:62, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الإخلاص من صفات الصديق الحقيقي.', paragraph:'الإخلاص. (ص62)', correctAnswer:true,
    explanation:'الإخلاص صفة أساسية للصديق.', goldenRule:'الإخلاص عماد الصداقة.'},

  { id:'u2l1q42', unit:'u2', lesson:'u2l1', page:61, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الشخصية بتصرفها:', paragraph:'الشخصيات. (ص60-61)',
    pairs:[{left:'الصديق الوفيّ',right:'تظاهر بالموت'},{left:'الصديق الغادر',right:'تسلّق الشجرة'},{left:'الدبّ',right:'هاجمهما'}],
    explanation:'الوفيّ تظاهر، الغادر هرب، الدبّ هاجم.', goldenRule:'لكل شخصية تصرف.'},

  { id:'u2l1q43', unit:'u2', lesson:'u2l1', page:65, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهم صفة في الصديق:', paragraph:'صفات الصديق. (ص65)',
    options:[{text:'الإخلاص والوفاء',correct:true},{text:'المال',correct:false},{text:'الجمال',correct:false},{text:'القوّة',correct:false}],
    explanation:'الإخلاص والوفاء أهم صفات الصديق.', goldenRule:'الإخلاص والوفاء أساس.'},

  { id:'u2l1q44', unit:'u2', lesson:'u2l1', page:62, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب صفات الصديق من الأهم:', paragraph:'صفات الصديق. (ص62)',
    items:['الإخلاص','الوفاء','النصح','الصدق'], correctOrder:[0,1,2,3],
    explanation:'الأهم: إخلاص ← وفاء ← نصح ← صدق.', goldenRule:'للصفات أولويات.'},

  { id:'u2l1q45', unit:'u2', lesson:'u2l1', page:60, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من القصة أم لا؟', paragraph:'شخصيات القصة. (ص60)',
    categories:['من القصة','ليس منها'],
    items:[{text:'الصديق الوفيّ',correct_category:0},{text:'الصديق الغادر',correct_category:0},{text:'الدبّ',correct_category:0},{text:'الأسد',correct_category:1},{text:'الذئب',correct_category:1},{text:'الثعلب',correct_category:1}],
    explanation:'من القصة: الصديقان والدبّ.', goldenRule:'شخصيات القصة: صديقان + دبّ.'},

  { id:'u2l1q46', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'ألّف جملة: "صديقي ___ يقف معي في الشدّة."', paragraph:'الصديق الوفيّ. (ص64)', blanks:['الوفيّ'], wordBank:['الوفيّ','الغادر','الكاذب'],
    explanation:'صديقي الوفيّ يقف معي.', goldenRule:'الوفاء صفة الصديق.'},

  { id:'u2l1q47', unit:'u2', lesson:'u2l1', page:61, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الذكاء في المواقف الصعبة صفة محمودة.', paragraph:'تظاهر بالموت. (ص61)', correctAnswer:true,
    explanation:'الذكاء ينقذ من الخطر وهو محمود.', goldenRule:'الذكاء سلاح المؤمن.'},

  { id:'u2l1q48', unit:'u2', lesson:'u2l1', page:65, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا أخطأ صديقك فعليك:', paragraph:'النصح. (ص65)',
    options:[{text:'تنصحه بلطف',correct:true},{text:'تتركه',correct:false},{text:'تسخر منه',correct:false},{text:'تغدر به',correct:false}],
    explanation:'عند خطأ الصديق ننصحه بلطف.', goldenRule:'النصح اللطيف يحفظ الصداقة.'},

  { id:'u2l1q49', unit:'u2', lesson:'u2l1', page:62, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الصفة بنقيضها:', paragraph:'النقيض. (ص62)',
    pairs:[{left:'الصدق',right:'الكذب'},{left:'الإخلاص',right:'الغدر'},{left:'الوفاء',right:'الخيانة'}],
    explanation:'الصدق×الكذب، الإخلاص×الغدر.', goldenRule:'الصفات لها نقيض.'},

  { id:'u2l1q50', unit:'u2', lesson:'u2l1', page:60, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"كان الصديقان يعيشان في ___ ."', paragraph:'في قرية. (ص60)', blanks:['قرية'], wordBank:['قرية','مدينة','صحراء'],
    explanation:'كانا في قرية.', goldenRule:'القرية مسكنهما.'},

  { id:'u2l1q51', unit:'u2', lesson:'u2l1', page:64, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب خطوات النصح للصديق:', paragraph:'النصح. (ص65)',
    items:['ملاحظة الخطأ','التفكير','النصح بلطف','الاستمرار في الصداقة'], correctOrder:[0,1,2,3],
    explanation:'ملاحظة ← تفكير ← نصح ← استمرار.', goldenRule:'النصح بلطف يحفظ الصداقة.'},

  { id:'u2l1q52', unit:'u2', lesson:'u2l1', page:62, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يُحفظ بالصداقة أم يهدمها؟', paragraph:'الصداقة. (ص62)',
    categories:['يُحفظ بالصداقة ✅','يهدم بالعداوة ❌'],
    items:[{text:'النصح',correct_category:0},{text:'الإخلاص',correct_category:0},{text:'الغدر',correct_category:1},{text:'الكذب',correct_category:1},{text:'الوفاء',correct_category:0},{text:'الخيانة',correct_category:1}],
    explanation:'النصح والإخلاص والوفاء تحفظ الصداقة.', goldenRule:'الأخلاق تحفظ العلاقات.'},

  { id:'u2l1q53', unit:'u2', lesson:'u2l1', page:65, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الصداقة الحقيقية تبنى على الثقة.', paragraph:'الصداقة. (ص65)', correctAnswer:true,
    explanation:'الثقة أساس الصداقة الحقيقية.', goldenRule:'الثقة أساس الصداقة.'},

  { id:'u2l1q54', unit:'u2', lesson:'u2l1', page:61, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن هاجم الصديقين؟', paragraph:'الدبّ. (ص61)', options:[{text:'الدبّ',correct:true},{text:'الذئب',correct:false},{text:'الأسد',correct:false},{text:'النمر',correct:false}],
    explanation:'الدبّ هاجم الصديقين.', goldenRule:'الدبّ = الخطر في القصة.'},

  { id:'u2l1q55', unit:'u2', lesson:'u2l1', page:64, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"من غدر بصديقه ___ صداقته."', paragraph:'الغدر يهدم الصداقة. (ص64)', blanks:['خسر'], wordBank:['خسر','حفظ','نصر'],
    explanation:'الغادر يخسر صداقته.', goldenRule:'الغدر يهدم الصداقة.'},

  { id:'u2l1q56', unit:'u2', lesson:'u2l1', page:62, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل الخُلق بثمرته:', paragraph:'الأخلاق. (ص62)',
    pairs:[{left:'الإخلاص',right:'محبّة'},{left:'النصح',right:'هداية'},{left:'الغدر',right:'خسارة'}],
    explanation:'الإخلاص ثمرته محبّة، النصح ثمرته هداية.', goldenRule:'كل خُلق له ثمرة.'},

  { id:'u2l1q57', unit:'u2', lesson:'u2l1', page:65, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'العبرة من القصة:', paragraph:'الصداقة. (ص65)',
    options:[{text:'الصديق الوفيّ يقف وقت الشدّة',correct:true},{text:'المال أهمّ',correct:false},{text:'الهروب حلّ',correct:false},{text:'الغدر فضيلة',correct:false}],
    explanation:'العبرة: الصديق الوفيّ يظهر وقت الشدّة.', goldenRule:'العبرة في وفاء الصديق.'},

  { id:'u2l1q58', unit:'u2', lesson:'u2l1', page:62, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب تصرفات من السيّئ للحسن:', paragraph:'التصرفات. (ص62-65)',
    items:['الغدر','الهروب','النصح','الوفاء'], correctOrder:[0,1,2,3],
    explanation:'غدر ← هروب ← نصح ← وفاء.', goldenRule:'ترقّي الأخلاق هدف.'},

  { id:'u2l1q59', unit:'u2', lesson:'u2l1', page:64, type:'classify', bloom:'understand', difficulty:'easy',
    question:'صنّف: صفة صديق حقيقي أم لا؟', paragraph:'صفات الصديق. (ص64)',
    categories:['صديق حقيقي ✅','ليس حقيقياً ❌'],
    items:[{text:'الوفاء',correct_category:0},{text:'الغدر',correct_category:1},{text:'النصح',correct_category:0},{text:'الخيانة',correct_category:1},{text:'الصدق',correct_category:0},{text:'الكذب',correct_category:1}],
    explanation:'صديق حقيقي: وفاء، نصح، صدق.', goldenRule:'الصفات تكشف الصديق.'},

  { id:'u2l1q60', unit:'u2', lesson:'u2l1', page:60, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'القصة تعلّمنا اختيار الأصدقاء الصالحين.', paragraph:'الصداقة. (ص60-65)', correctAnswer:true,
    explanation:'القصة تعلّم اختيار الصديق الوفيّ.', goldenRule:'اختر الصديق الصالح.'},

  { id:'u2l1q61', unit:'u2', lesson:'u2l1', page:65, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أختار صديقي ___ والمخلص."', paragraph:'اختيار الصديق. (ص65)', blanks:['الصادق'], wordBank:['الصادق','الكاذب','الغادر'],
    explanation:'أختار الصديق الصادق المخلص.', goldenRule:'اختر صديقك بحكمة.'},

  { id:'u2l1q62', unit:'u2', lesson:'u2l1', page:62, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند نجاح صديقك عليك:', paragraph:'الصداقة. (ص65)',
    options:[{text:'تهنّئه وتفرح له',correct:true},{text:'تغار منه',correct:false},{text:'تتجاهله',correct:false},{text:'تحسده',correct:false}],
    explanation:'نhenّئ صديقنا ونفرح له عند نجاحه.', goldenRule:'الفرح لصديقك صداقة.'},

  { id:'u2l1q63', unit:'u2', lesson:'u2l1', page:61, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل السبب بالنتيجة:', paragraph:'أحداث القصة. (ص61)',
    pairs:[{left:'تظاهر بالموت',right:'نجاة'},{left:'الهروب',right:'خيانة'},{left:'الوفاء',right:'محبّة'}],
    explanation:'التظاهر نجا، الهروب خيانة، الوفاء محبّة.', goldenRule:'لكل فعل نتيجة.'},

  { id:'u2l1q64', unit:'u2', lesson:'u2l1', page:65, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الصديق الحقيقي يفرح لنجاح صديقه.', paragraph:'الصداقة. (ص65)', correctAnswer:true,
    explanation:'الصديق الحقيقي يفرح لنجاح صديقه لا يحسده.', goldenRule:'الفرح لصديقك وفاء.'},

  { id:'u2l1q65', unit:'u2', lesson:'u2l1', page:64, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الصديق الوفيّ:', paragraph:'الوفاء. (ص64)',
    options:[{text:'صديقي الوفيّ لا يتركني',correct:true},{text:'صديقي يغدر بي',correct:false},{text:'صديقي يكذب عليّ',correct:false},{text:'صديقي يهجرني',correct:false}],
    explanation:'صديقي الوفيّ لا يتركني.', goldenRule:'الصديق الوفيّ لا يهجر.'},

  // ════════ الوحدة 2 / الدرس 2: الجار الصغير (ص71-80) — 65 سؤالاً ════════
  { id:'u2l2q11', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجار الصغير في النص:', paragraph:'جار صغير يحبّ جيرانه. (ص71)',
    options:[{text:'طفل يحبّ جيرانه',correct:true},{text:'رجل غاضب',correct:false},{text:'تاجر',correct:false},{text:'مسافر',correct:false}],
    explanation:'الجار الصغير طفل يحبّ جيرانه.', goldenRule:'الجار الصغير محبّ للخير.'},

  { id:'u2l2q12', unit:'u2', lesson:'u2l2', page:71, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'حقّ الجار معرفة أحواله والسؤال عنه.', paragraph:'حقوق الجار. (ص71)', correctAnswer:true,
    explanation:'من حقّ الجار السؤال عنه والاهتمام بأحواله.', goldenRule:'الجار له حقوق.'},

  { id:'u2l2q13', unit:'u2', lesson:'u2l2', page:72, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'آداب الجوار تشمل:', paragraph:'آداب الجوار. (ص72)',
    options:[{text:'احترام الجار وعدم إيذائه',correct:true},{text:'إزعاجه ليلاً',correct:false},{text:'رمي القمامة عنده',correct:false},{text:'رفع الصوت',correct:false}],
    explanation:'آداب الجوار: احترام الجار وعدم إيذائه.', goldenRule:'آداب الجوار = احترام + لا أذى.'},

  { id:'u2l2q14', unit:'u2', lesson:'u2l2', page:72, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب آداب الجوار:', paragraph:'آداب الجوار. (ص72)',
    items:['السلام عليه','السؤال عنه','مساعدته','عدم إيذائه'], correctOrder:[0,1,2,3],
    explanation:'سلام ← سؤال ← مساعدة ← لا أذى.', goldenRule:'آداب الجوار مرتّبة.'},

  { id:'u2l2q15', unit:'u2', lesson:'u2l2', page:74, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من آداب الجوار أم لا؟', paragraph:'آداب الجوار. (ص74)',
    categories:['من آداب الجوار ✅','ليس منها ❌'],
    items:[{text:'السلام على الجار',correct_category:0},{text:'رفع الصوت',correct_category:1},{text:'مساعدة الجار',correct_category:0},{text:'رمي القمامة',correct_category:1},{text:'السؤال عنه',correct_category:0},{text:'إزعاجه',correct_category:1}],
    explanation:'آداب: سلام، مساعدة، سؤال. ليس منها: صوت، قمامة، إزعاج.', goldenRule:'آداب الجوار = إحسان + لا أذى.'},

  { id:'u2l2q16', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الجار ___ قبل الدار." مثل شعبي.', paragraph:'اختيار الجار. (ص76)', blanks:['قبل'], wordBank:['قبل','بعد','مع'],
    explanation:'الجار قبل الدار أي أن الجار أهمّ.', goldenRule:'الجار قبل الدار.'},

  { id:'u2l2q17', unit:'u2', lesson:'u2l2', page:78, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الكلمة بمعناها:', paragraph:'مفردات الدرس. (ص78)',
    pairs:[{left:'الجار',right:'المجاور'},{left:'الحق',right:'الواجب'},{left:'الأذى',right:'الإضرار'}],
    explanation:'الجار=المجاور، الحق=الواجب، الأذى=الإضرار.', goldenRule:'فهم المفردات أساس.'},

  { id:'u2l2q18', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الدرس "الجار الصغير" يتحدّث عن:', paragraph:'حقوق الجار. (ص71)',
    options:[{text:'حقوق الجار وآدابه',correct:true},{text:'السفر',correct:false},{text:'التسوق',correct:false},{text:'اللعب',correct:false}],
    explanation:'الدرس عن حقوق الجار وآدابه.', goldenRule:'الجار له حقوق وآداب.'},

  { id:'u2l2q19', unit:'u2', lesson:'u2l2', page:72, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'إيذاء الجار من آداب الجوار.', paragraph:'عدم الإيذاء. (ص72)', correctAnswer:false,
    explanation:'إيذاء الجار ليس من آداب الجوار بل ممنوع.', goldenRule:'إيذاء الجار ممنوع.'},

  { id:'u2l2q20', unit:'u2', lesson:'u2l2', page:72, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا احتاج جارك مساعدة فعليك:', paragraph:'مساعدة الجار. (ص72)',
    options:[{text:'مساعدته',correct:true},{text:'تجاهله',correct:false},{text:'السخرية منه',correct:false},{text:'تركه',correct:false}],
    explanation:'مساعدة الجار عند حاجته واجب.', goldenRule:'مساعدة الجار واجب.'},

  { id:'u2l2q21', unit:'u2', lesson:'u2l2', page:74, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"من آداب الجوار ___ على الجار."', paragraph:'السلام. (ص74)', blanks:['السلام'], wordBank:['السلام','الصراخ','الإيذاء'],
    explanation:'السلام على الجار من آداب الجوار.', goldenRule:'السلام على الجار أدب.'},

  { id:'u2l2q22', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا سمّي "الجار الصغير"؟', paragraph:'جار صغير. (ص71)',
    options:[{text:'لصغر سنّه وحبّه للجيران',correct:true},{text:'لقصره',correct:false},{text:'لضعفه',correct:false},{text:'لفقره',correct:false}],
    explanation:'سمّي صغيراً لصغر سنّه وحبّه للجيران.', goldenRule:'الصغير المحبّ قدوة.'},

  { id:'u2l2q23', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن حسن الجوار:', paragraph:'حسن الجوار. (ص76)',
    options:[{text:'أحترم جاري وأساعده',correct:true},{text:'أزعج جاري ليلاً',correct:false},{text:'أرمي القمامة عنده',correct:false},{text:'أرفع صوتي',correct:false}],
    explanation:'أحترم جاري وأساعده حسن جوار.', goldenRule:'حسن الجوار بالأفعال.'},

  { id:'u2l2q24', unit:'u2', lesson:'u2l2', page:74, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'السؤال عن الجار من آداب الجوار.', paragraph:'السؤال. (ص74)', correctAnswer:true,
    explanation:'السؤال عن الجار من آداب الجوار.', goldenRule:'السؤال عن الجار اهتمام.'},

  { id:'u2l2q25', unit:'u2', lesson:'u2l2', page:74, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يحترم الجار أم يؤذيه؟', paragraph:'الجوار. (ص74)',
    categories:['يحترم ✅','يؤذي ❌'],
    items:[{text:'السلام عليه',correct_category:0},{text:'رفع الصوت',correct_category:1},{text:'مساعدته',correct_category:0},{text:'رمي القمامة',correct_category:1},{text:'السؤال عنه',correct_category:0},{text:'إزعاجه',correct_category:1}],
    explanation:'يحترم: سلام، مساعدة، سؤال. يؤذي: صوت، قمامة، إزعاج.', goldenRule:'الاحترام ضدّ الأذى.'},

  { id:'u2l2q26', unit:'u2', lesson:'u2l2', page:76, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالتصرف المناسب:', paragraph:'الجوار. (ص76)',
    pairs:[{left:'مرض الجار',right:'زيارته'},{left:'حاجة الجار',right:'مساعدته'},{left:'رؤية الجار',right:'السلام عليه'}],
    explanation:'لكل موقف تصرف مناسب.', goldenRule:'التصرف المناسب يحفظ الجوار.'},

  { id:'u2l2q27', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'"الجار" في اللغة تعني:', paragraph:'الجار. (ص71)', options:[{text:'المجاور في السكن',correct:true},{text:'الصديق البعيد',correct:false},{text:'القريب',correct:false},{text:'الغريب',correct:false}],
    explanation:'الجار = المجاور في السكن.', goldenRule:'الجار = المجاور في المسكن.'},

  { id:'u2l2q28', unit:'u2', lesson:'u2l2', page:72, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب حقوق الجار:', paragraph:'حقوق الجار. (ص72)',
    items:['عدم الإيذاء','السلام','المساعدة','السؤال'], correctOrder:[0,1,2,3],
    explanation:'عدم الأذى ← سلام ← مساعدة ← سؤال.', goldenRule:'حقوق الجار متعدّدة.'},

  { id:'u2l2q29', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الجار ___ الدار."', paragraph:'الجار قبل الدار. (ص76)', blanks:['قبل'], wordBank:['قبل','بعد','تحت'],
    explanation:'الجار قبل الدار.', goldenRule:'الجار أهمّ من الدار.'},

  { id:'u2l2q30', unit:'u2', lesson:'u2l2', page:74, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'رمي القمامة عند الجار من آداب الجوار.', paragraph:'آداب الجوار. (ص74)', correctAnswer:false,
    explanation:'رمي القمامة عند الجار ليس من آداب الجوار.', goldenRule:'رمي القمامة إيذاء.'},

  { id:'u2l2q31', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'موضوع درس "الجار الصغير":', paragraph:'الجار الصغير. (ص71)', options:[{text:'حسن الجوار',correct:true},{text:'السفر',correct:false},{text:'البيع',correct:false},{text:'اللعب',correct:false}],
    explanation:'موضوع الدرس حسن الجوار.', goldenRule:'الدرس عن حسن الجوار.'},

  { id:'u2l2q32', unit:'u2', lesson:'u2l2', page:74, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: تصرّف يدلّ على حسن الجوار أم لا؟', paragraph:'حسن الجوار. (ص74)',
    categories:['حسن الجوار ✅','سيّئ ❌'],
    items:[{text:'إهداء الطعام للجار',correct_category:0},{text:'إزعاجه بالضجيج',correct_category:1},{text:'زيارة المريض',correct_category:0},{text:'شتمه',correct_category:1},{text:'مساعدته',correct_category:0},{text:'إغلاق الباب في وجهه',correct_category:1}],
    explanation:'حسن: إهداء، زيارة، مساعدة. سيّئ: إزعاج، شتم، إغلاق.', goldenRule:'حسن الجوار بالأفعال.'},

  { id:'u2l2q33', unit:'u2', lesson:'u2l2', page:78, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بنقيضها:', paragraph:'النقيض. (ص78)',
    pairs:[{left:'السلام',right:'الخصام'},{left:'المساعدة',right:'الإيذاء'},{left:'الاحترام',right:'الإهانة'}],
    explanation:'السلام×الخصام، المساعدة×الإيذاء.', goldenRule:'الصفات لها نقيض.'},

  { id:'u2l2q34', unit:'u2', lesson:'u2l2', page:72, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"لا ___ جارك بشيء."', paragraph:'عدم الإيذاء. (ص72)', blanks:['تؤذِ'], wordBank:['تؤذِ','تحب','تنصر'],
    explanation:'لا تؤذِ جارك بشيء.', goldenRule:'عدم الإيذاء واجب.'},

  { id:'u2l2q35', unit:'u2', lesson:'u2l2', page:71, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الجار الصغير كان محبوباً بين جيرانه.', paragraph:'محبوب. (ص71)', correctAnswer:true,
    explanation:'كان محبوباً لحبّه للجيران.', goldenRule:'المحبّ محبوب.'},

  { id:'u2l2q36', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح فعلاً يدلّ على حسن الجوار:', paragraph:'حسن الجوار. (ص76)',
    options:[{text:'إهداء الطعام للجار',correct:true},{text:'إزعاجه بالصوت',correct:false},{text:'رمي القمامة',correct:false},{text:'الخصام',correct:false}],
    explanation:'إهداء الطعام للجار حسن جوار.', goldenRule:'إهداء الطعام حسن جوار.'},

  { id:'u2l2q37', unit:'u2', lesson:'u2l2', page:72, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات حسن الجوار:', paragraph:'حسن الجوار. (ص72-76)',
    items:['السلام','السؤال','المساعدة','إهداء الطعام'], correctOrder:[0,1,2,3],
    explanation:'سلام ← سؤال ← مساعدة ← إهداء.', goldenRule:'حسن الجوار خطوات متكاملة.'},

  { id:'u2l2q38', unit:'u2', lesson:'u2l2', page:74, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف المواقف: تدلّ على حسن الجوار أم لا؟', paragraph:'حسن الجوار. (ص74)',
    categories:['حسن جوار ✅','ليس منها ❌'],
    items:[{text:'زيارة الجار المريض',correct_category:0},{text:'الصراخ ليلاً',correct_category:1},{text:'مساعدة الجار المسنّ',correct_category:0},{text:'الخصام',correct_category:1},{text:'إهداء الطعام',correct_category:0},{text:'إغلاق الباب',correct_category:1}],
    explanation:'حسن: زيارة، مساعدة، إهداء. سيّئ: صراخ، خصام، إغلاق.', goldenRule:'حسن الجوار بالأفعال.'},

  { id:'u2l2q39', unit:'u2', lesson:'u2l2', page:72, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'حقّ الجار الأول:', paragraph:'حقوق الجار. (ص72)', options:[{text:'عدم الإيذاء',correct:true},{text:'إزعاجه',correct:false},{text:'تركه',correct:false},{text:'نسيانه',correct:false}],
    explanation:'حقّ الجار الأول عدم الإيذاء.', goldenRule:'عدم الإيذاء أساس الجوار.'},

  { id:'u2l2q40', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"أختار جاري ___ ."', paragraph:'الجار قبل الدار. (ص76)', blanks:['قبل'], wordBank:['قبل','بعد','دون'],
    explanation:'الجار قبل الدار.', goldenRule:'الجار قبل الدار.'},

  { id:'u2l2q41', unit:'u2', lesson:'u2l2', page:74, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'السلام على الجار من آداب الإسلام.', paragraph:'السلام. (ص74)', correctAnswer:true,
    explanation:'السلام تحيّة الإسلام وعلى الجار.', goldenRule:'السلام تحيّة المسلم.'},

  { id:'u2l2q42', unit:'u2', lesson:'u2l2', page:71, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الحقّ بتصرفه:', paragraph:'حقوق الجار. (ص72)',
    pairs:[{left:'عدم الإيذاء',right:'لا أرفع الصوت'},{left:'المساعدة',right:'أساعده عند الحاجة'},{left:'السؤال',right:'أسأل عن صحته'}],
    explanation:'لكل حقّ تصرف.', goldenRule:'الحقوق بالأفعال.'},

  { id:'u2l2q43', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمّ صفة في الجار:', paragraph:'الجار. (ص76)', options:[{text:'حسن الجوار',correct:true},{text:'الغنى',correct:false},{text:'القوّة',correct:false},{text:'الجمال',correct:false}],
    explanation:'أهمّ صفة حسن الجوار.', goldenRule:'حسن الجوار أهمّ من المال.'},

  { id:'u2l2q44', unit:'u2', lesson:'u2l2', page:72, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب آداب الجوار من الأهم:', paragraph:'آداب الجوار. (ص72)',
    items:['عدم الإيذاء','السلام','المساعدة','الإهداء'], correctOrder:[0,1,2,3],
    explanation:'الأهم: لا أذى ← سلام ← مساعدة ← إهداء.', goldenRule:'للآداب أولويات.'},

  { id:'u2l2q45', unit:'u2', lesson:'u2l2', page:71, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من الدرس أم لا؟', paragraph:'مفاهيم الدرس. (ص71)',
    categories:['من الدرس','ليس منها'],
    items:[{text:'الجار',correct_category:0},{text:'الجوار',correct_category:0},{text:'السلام',correct_category:0},{text:'السفر',correct_category:1},{text:'التجارة',correct_category:1},{text:'الزراعة',correct_category:1}],
    explanation:'من الدرس: الجار، الجوار، السلام.', goldenRule:'مفاهيم الدرس واضحة.'},

  { id:'u2l2q46', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'ألّف جملة: "أحترم جاري و___ عنه."', paragraph:'الجوار. (ص76)', blanks:['أسأل'], wordBank:['أسأل','أهجر','أنسى'],
    explanation:'أحترم جاري وأسأل عنه.', goldenRule:'السؤال عن الجار أدب.'},

  { id:'u2l2q47', unit:'u2', lesson:'u2l2', page:72, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'حسن الجوار يزيد المحبّة بين الجيران.', paragraph:'حسن الجوار. (ص72)', correctAnswer:true,
    explanation:'حسن الجوار يزيد المحبّة.', goldenRule:'حسن الجوار = محبّة.'},

  { id:'u2l2q48', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'إذا cook الطعام بكثرة فعليك:', paragraph:'إهداء الجار. (ص76)',
    options:[{text:'إهداء بعضه للجار',correct:true},{text:'رميه',correct:false},{text:'حفظه كلّه',correct:false},{text:'بيعه',correct:false}],
    explanation:'إهداء بعض الطعام للجار حسن جوار.', goldenRule:'إهداء الطعام للجار سنّة.'},

  { id:'u2l2q49', unit:'u2', lesson:'u2l2', page:74, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الأدب بموضعه:', paragraph:'الآداب. (ص74)',
    pairs:[{left:'السلام',right:'عند اللقاء'},{left:'المساعدة',right:'عند الحاجة'},{left:'الزيارة',right:'عند المرض'}],
    explanation:'لكل أدب موضع.', goldenRule:'الأدب في موضعه أحسن.'},

  { id:'u2l2q50', unit:'u2', lesson:'u2l2', page:71, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الجار الصغير يحبّ ___ ."', paragraph:'يحبّ جيرانه. (ص71)', blanks:['جيرانه'], wordBank:['جيرانه','أعداءه','نفسه'],
    explanation:'الجار الصغير يحبّ جيرانه.', goldenRule:'محبّة الجيران خُلق.'},

  { id:'u2l2q51', unit:'u2', lesson:'u2l2', page:76, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب خطوات معاملة الجار:', paragraph:'معاملة الجار. (ص72-76)',
    items:['السلام','السؤال','المساعدة','الإهداء'], correctOrder:[0,1,2,3],
    explanation:'سلام ← سؤال ← مساعدة ← إهداء.', goldenRule:'خطوات الجوار متكاملة.'},

  { id:'u2l2q52', unit:'u2', lesson:'u2l2', page:74, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: صوت مرتفع أم منخفض مع الجار؟', paragraph:'الجوار. (ص74)',
    categories:['منخفض ✅','مرتفع ❌'],
    items:[{text:'الحديث مع الجار',correct_category:0},{text:'السلام',correct_category:0},{text:'الصراخ',correct_category:1},{text:'الموسيقى العالية',correct_category:1},{text:'الهمس بلطف',correct_category:0},{text:'الضجيج',correct_category:1}],
    explanation:'الصوت المنخفض أدب والمرتفع إيذاء.', goldenRule:'خفض الصوت أدب الجوار.'},

  { id:'u2l2q53', unit:'u2', lesson:'u2l2', page:72, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الإسلام حثّ على حسن الجوار.', paragraph:'الجوار. (ص72)', correctAnswer:true,
    explanation:'الإسلام حثّ على إكرام الجار.', goldenRule:'الإسلام يحثّ على إكرام الجار.'},

  { id:'u2l2q54', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'موضوع النص:', paragraph:'الجار الصغير. (ص71)', options:[{text:'الجار الصغير',correct:true},{text:'الصديقان',correct:false},{text:'صلة الرحم',correct:false},{text:'الاعتذار',correct:false}],
    explanation:'موضوع النص الجار الصغير.', goldenRule:'النص عن الجار الصغير.'},

  { id:'u2l2q55', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"أهدي جاري ___ عند الطبخ."', paragraph:'إهداء الطعام. (ص76)', blanks:['طعاماً'], wordBank:['طعاماً','قمامة','ضجيجاً'],
    explanation:'أهدي جاري طعاماً.', goldenRule:'إهداء الطعام للجار سنّة.'},

  { id:'u2l2q56', unit:'u2', lesson:'u2l2', page:74, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل التصرف بنتيجته:', paragraph:'الجوار. (ص74)',
    pairs:[{left:'حسن الجوار',right:'محبّة'},{left:'الإيذاء',right:'خصام'},{left:'السلام',right:'ودّ'}],
    explanation:'حسن الجوار محبّة، الإيذاء خصام، السلام ودّ.', goldenRule:'كل تصرّف له نتيجة.'},

  { id:'u2l2q57', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'العبرة من الدرس:', paragraph:'الجار الصغير. (ص71-76)',
    options:[{text:'حسن الجوار يزيد المحبّة',correct:true},{text:'المال مهمّ',correct:false},{text:'السفر مفيد',correct:false},{text:'اللعب ممتع',correct:false}],
    explanation:'العبرة: حسن الجوار يزيد المحبّة.', goldenRule:'حسن الجوار محبّة ووفاء.'},

  { id:'u2l2q58', unit:'u2', lesson:'u2l2', page:74, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب تصرفات من السيّئ للحسن:', paragraph:'الجوار. (ص74-76)',
    items:['الإيذاء','السلام','المساعدة','الإهداء'], correctOrder:[0,1,2,3],
    explanation:'إيذاء ← سلام ← مساعدة ← إهداء.', goldenRule:'ترقّي الأخلاق هدف.'},

  { id:'u2l2q59', unit:'u2', lesson:'u2l2', page:76, type:'classify', bloom:'understand', difficulty:'easy',
    question:'صنّف: يُعجبني أم لا؟', paragraph:'التصرفات. (ص76)',
    categories:['يُعجبني ✅','لا يُعجبني ❌'],
    items:[{text:'إهداء الجار',correct_category:0},{text:'إزعاجه',correct_category:1},{text:'زيارته',correct_category:0},{text:'شتمه',correct_category:1},{text:'مساعدته',correct_category:0},{text:'الصراخ عليه',correct_category:1}],
    explanation:'يعجبني: إهداء، زيارة، مساعدة. لا يعجبني: إزعاج، شتم، صراخ.', goldenRule:'الأخلاق الحسنة تُعجب.'},

  { id:'u2l2q60', unit:'u2', lesson:'u2l2', page:71, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الجار الصغير قدوة في حسن الجوار.', paragraph:'الجار الصغير. (ص71)', correctAnswer:true,
    explanation:'الجار الصغير قدوة في حسن الجوار.', goldenRule:'الصغير قدوة في الأخلاق.'},

  { id:'u2l2q61', unit:'u2', lesson:'u2l2', page:76, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحبّ جاري و ___ عنه."', paragraph:'حسن الجوار. (ص76)', blanks:['أسأل'], wordBank:['أسأل','أهجر','أنسى'],
    explanation:'أحبّ جاري وأسأل عنه.', goldenRule:'محبّة الجار بالأفعال.'},

  { id:'u2l2q62', unit:'u2', lesson:'u2l2', page:72, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند سماع صراخ جارك ليلاً يجب:', paragraph:'آداب الجوار. (ص72)',
    options:[{text:'خفض صوتك احتراماً',correct:true},{text:'رفع صوتك أكثر',correct:false},{text:'الصراخ معه',correct:false},{text:'ترك المنزل',correct:false}],
    explanation:'خفض الصوت احترام للجار.', goldenRule:'خفض الصوت احترام.'},

  { id:'u2l2q63', unit:'u2', lesson:'u2l2', page:74, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الحقّ بالمسؤولية:', paragraph:'حقوق الجار. (ص74)',
    pairs:[{left:'عدم الإيذاء',right:'لا صراخ'},{left:'المساعدة',right:'عون عند الحاجة'},{left:'الإهداء',right:'طعام'}],
    explanation:'لكل حقّ مسؤولية.', goldenRule:'الحقوق تستلزم مسؤوليات.'},

  { id:'u2l2q64', unit:'u2', lesson:'u2l2', page:76, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'إهداء الطعام للجار من السنّة.', paragraph:'إهداء الطعام. (ص76)', correctAnswer:true,
    explanation:'إهداء الطعام للجار سنّة نبوية.', goldenRule:'إهداء الجار سنّة.'},

  { id:'u2l2q65', unit:'u2', lesson:'u2l2', page:76, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن حسن الجوار:', paragraph:'حسن الجوار. (ص76)',
    options:[{text:'أحبّ جاري وأكرمه',correct:true},{text:'أهجر جاري',correct:false},{text:'أؤذي جاري',correct:false},{text:'أنسى جاري',correct:false}],
    explanation:'أحبّ جاري وأكرمه حسن جوار.', goldenRule:'حسن الجوار = محبّة + إكرام.'},
];