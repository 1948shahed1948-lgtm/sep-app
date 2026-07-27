// المهارات الرقمية - الصف الرابع - الوحدة الثانية: معالجة النصوص
// الدروس 1-4 | ص 44-83

export const UNIT1_LESSONS = [
  {
    id: 'u1l1',
    title_ar: 'الدرس الأول: لوحة المفاتيح',
    subtitle_ar: 'أجزاء لوحة المفاتيح ووظائفها',
    page: 44,
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=70',
    bookImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    getQuestions: () => [
      {
        id: 'q1', type: 'multiple_choice',
        question_ar: '⌨️ ما وظيفة لوحة المفاتيح؟',
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
        options_ar: ['جهاز يمكنك استخدامه لكتابة النصوص والأرقام عند استخدام جهاز الحاسب', 'جهاز لعرض الصور والألعاب فقط', 'جهاز للاستماع إلى الأصوات', 'جهاز للطباعة على الورق'],
        correct_index: 0, page: 44,
        explanation_ar: 'لوحة المفاتيح جهاز يمكنك استخدامه لكتابة النصوص والأرقام عند استخدام جهاز الحاسب.',
        golden_rule_ar: 'لوحة المفاتيح = جهاز الكتابة الرئيسي للنصوص والأرقام.'
      },
      {
        id: 'q2', type: 'multiple_choice',
        question_ar: '⌫ ما وظيفة مفتاح Backspace؟',
        options_ar: ['حذف الحرف الأخير (الذي يسبق المؤشر)', 'حذف الحرف الذي يلي المؤشر', 'إنشاء سطر جديد', 'إضافة مسافة فارغة'],
        correct_index: 0, page: 53,
        explanation_ar: 'مفتاح Backspace يُستخدم لحذف الحرف الذي يسبق مؤشر الكتابة.',
        golden_rule_ar: 'Backspace = حذف الحرف الأخير (قبل المؤشر). Delete = حذف الحرف بعد المؤشر.'
      },
      {
        id: 'q3', type: 'multiple_choice',
        question_ar: '🗑️ ما وظيفة مفتاح Delete؟',
        options_ar: ['حذف الحرف الذي يلي المؤشر', 'حذف الحرف الذي يسبق المؤشر', 'إنشاء سطر جديد', 'تبديل اللغة'],
        correct_index: 0, page: 54,
        explanation_ar: 'مفتاح Delete يُستخدم لحذف الحرف الذي يوجد بعد المؤشر (الحرف الذي يلي موضعه).',
        golden_rule_ar: 'Delete يحذف الحرف الذي يلي المؤشر — يبقى المؤشر في نفس المكان.'
      },
      {
        id: 'q4', type: 'true_false',
        question_ar: '↵ مفتاح Enter يُستخدم لإنشاء سطر جديد أو فقرة جديدة.',
        correct_answer: 'true', page: 48,
        explanation_ar: 'نعم، مفتاح Enter يُستخدم لإنشاء سطر جديد أو فقرة جديدة في النص.',
        golden_rule_ar: 'Enter = إنشاء سطر جديد أو فقرة جديدة.'
      },
      {
        id: 'q5', type: 'multiple_choice',
        question_ar: '🔠 ما مفتاح تغيير لغة الكتابة في لوحة المفاتيح؟',
        options_ar: ['Shift + Alt', 'Ctrl + Alt', 'Caps Lock', 'Enter + Shift'],
        correct_index: 0, page: 49,
        explanation_ar: 'لتغيير لغة الكتابة يجب الضغط على مفتاحي Shift + Alt معاً.',
        golden_rule_ar: 'Shift + Alt = تغيير لغة لوحة المفاتيح.'
      },
      {
        id: 'q6', type: 'multiple_choice',
        question_ar: '🔡 ما مفتاح قفل الحروف الكبيرة في اللغة الإنجليزية؟',
        options_ar: ['Caps Lock', 'Shift', 'Alt', 'Ctrl'],
        correct_index: 0, page: 44,
        explanation_ar: 'مفتاح Caps Lock يُستخدم لكتابة الحروف الإنجليزية الكبيرة بشكل مستمر.',
        golden_rule_ar: 'Caps Lock = قفل الحروف الكبيرة الإنجليزية.'
      },
      {
        id: 'q7', type: 'multiple_choice',
        question_ar: '⎵ ما وظيفة مفتاح Spacebar (المسافة)؟',
        options_ar: ['إضافة مسافة فارغة بين الكلمات والجمل', 'حذف النص المحدد', 'إنشاء سطر جديد', 'حفظ الملف'],
        correct_index: 0, page: 55,
        explanation_ar: 'مفتاح Spacebar يُستخدم لإضافة مسافة فارغة في النص وفصل الكلمات.',
        golden_rule_ar: 'Spacebar = إضافة مسافة فارغة وفصل الكلمات والجمل.'
      },
      {
        id: 'q8', type: 'multiple_choice',
        question_ar: '🔤 لكتابة حرف كبير في اللغة الإنجليزية نضغط على:',
        options_ar: ['Shift + الحرف', 'Ctrl + الحرف', 'Alt + الحرف', 'Enter + الحرف'],
        correct_index: 0, page: 60,
        explanation_ar: 'لكتابة حرف كبير نضغط مفتاح Shift ونضغط الحرف في نفس الوقت.',
        golden_rule_ar: 'Shift + الحرف = كتابة حرف كبير في الإنجليزية.'
      },
      {
        id: 'q9', type: 'true_false',
        question_ar: '🖐️ يجب أن تضع يديك على لوحة المفاتيح بشكل صحيح أثناء الكتابة.',
        correct_answer: 'true', page: 44,
        explanation_ar: 'نعم، الكتابة الصحيحة تتطلب وضع اليدين على لوحة المفاتيح بشكل صحيح.',
        golden_rule_ar: 'وضع اليدين بشكل صحيح يساعد على الكتابة بسرعة ودقة.'
      },
      {
        id: 'q10', type: 'classify',
        question_ar: '⌨️ صنّف هذه المفاتيح حسب وظيفتها:',
        categories_ar: ['حذف نص', 'إنشاء/تنسيق', 'تغيير اللغة'],
        items_ar: [
          { text: 'Backspace', correct_category: 0 },
          { text: 'Delete', correct_category: 0 },
          { text: 'Enter', correct_category: 1 },
          { text: 'Caps Lock', correct_category: 1 },
          { text: 'Shift + Alt', correct_category: 2 }
        ],
        page: 44,
        explanation_ar: 'Backspace و Delete للحذف. Enter و Caps Lock للتنسيق. Shift+Alt لتغيير اللغة.'
      },
      {
        id: 'q11', type: 'multiple_choice',
        question_ar: '🔤 لكتابة حرف الهمزة (أ) في اللغة العربية نضغط على:',
        options_ar: ['Shift + H', 'Shift + K', 'Shift + A', 'Ctrl + H'],
        correct_index: 0, page: 61,
        explanation_ar: 'لكتابة حرف الهمزة (أ) نضغط باستمرار على مفتاح Shift ثم نضغط على مفتاح H.',
        golden_rule_ar: 'Shift + H = حرف الهمزة (أ) في اللغة العربية.'
      },
      {
        id: 'q12', type: 'true_false',
        question_ar: '📝 يمكنك كتابة الأرقام باستخدام لوحة المفاتيح.',
        correct_answer: 'true', page: 46,
        explanation_ar: 'نعم، يمكن كتابة الأرقام باستخدام لوحة المفاتيح بالضغط على أزرار الأرقام.',
        golden_rule_ar: 'لوحة المفاتيح تُستخدم لكتابة النصوص والأرقام معاً.'
      },
      {
        id: 'q13', type: 'multiple_choice',
        question_ar: '🖥️ لفتح برنامج مايكروسوفت وورد نضغط على زر:',
        options_ar: ['Start (بدء) ثم نختار Word', 'Delete ثم نختار وورد', 'Backspace ثم Enter', 'Shift ثم نختار وورد'],
        correct_index: 0, page: 45,
        explanation_ar: 'لفتح برنامج Word: اضغط على زر بدء (Start) ثم مرر الشريط الجانبي وانقر على أيقونة Word.',
        golden_rule_ar: 'فتح Word: Start ← تمرير ← Word ← Blank document.'
      },
      {
        id: 'q14', type: 'true_false',
        question_ar: '🔡 مفتاح Alt وحده يغير لغة لوحة المفاتيح.',
        correct_answer: 'false', page: 49,
        explanation_ar: 'خطأ. لتغيير لغة لوحة المفاتيح يجب الضغط على Shift + Alt معاً وليس Alt وحده.',
        golden_rule_ar: 'تغيير اللغة = Shift + Alt معاً وليس Alt وحده.'
      },
      {
        id: 'q15', type: 'multiple_choice',
        question_ar: '↔️ لتحريك المؤشر داخل النص يمكن استخدام:',
        options_ar: ['مفاتيح الأسهم (↑↓←→)', 'مفتاح Delete فقط', 'مفتاح Enter فقط', 'مفتاح Shift فقط'],
        correct_index: 0, page: 56,
        explanation_ar: 'مفاتيح الأسهم تُستخدم لتحريك المؤشر في جميع اتجاهات النص المكتوب.',
        golden_rule_ar: 'مفاتيح الأسهم = تحريك المؤشر للأعلى والأسفل واليمين واليسار.'
      },
      {
        id: 'q16', type: 'multiple_choice',
        question_ar: '✍️ لكتابة نص باللغة الإنجليزية في مستند عربي يجب:',
        options_ar: ['تغيير اتجاه النص من اليمين لليسار ثم تغيير لغة المفاتيح', 'الضغط على مفتاح Delete', 'استخدام Caps Lock فقط', 'الضغط على Enter أولاً'],
        correct_index: 0, page: 50,
        explanation_ar: 'لكتابة نص إنجليزي: اذهب إلى Home ← Paragraph ← اتجاه نص من اليسار للأمام ← ثم Shift+Alt لتغيير اللغة.',
        golden_rule_ar: 'كتابة إنجليزية: تغيير اتجاه النص أولاً + تغيير لغة المفاتيح.'
      },
      {
        id: 'q17', type: 'multiple_choice',
        question_ar: '📌 مفتاح Esc في لوحة المفاتيح يعمل على:',
        options_ar: ['الخروج من عملية أو برنامج', 'إنشاء سطر جديد', 'حذف الملف', 'حفظ المستند'],
        correct_index: 0, page: 44,
        explanation_ar: 'مفتاح Esc (Escape) يُستخدم للخروج من عملية أو إلغاء أمر.',
        golden_rule_ar: 'Esc = الخروج أو إلغاء العملية الحالية.'
      },
      {
        id: 'q18', type: 'true_false',
        question_ar: '⬅️ مفتاح Backspace يحذف الحرف الذي يلي المؤشر.',
        correct_answer: 'false', page: 53,
        explanation_ar: 'خطأ. Backspace يحذف الحرف الذي يسبق المؤشر (الحرف قبله) وليس الذي يليه.',
        golden_rule_ar: 'Backspace = قبل المؤشر. Delete = بعد المؤشر.'
      },
      {
        id: 'q19', type: 'multiple_choice',
        question_ar: '🔣 لكتابة الفاصلة (،) في اللغة العربية نضغط:',
        options_ar: ['Shift + K', 'Shift + H', 'Shift + I', 'Ctrl + K'],
        correct_index: 0, page: 62,
        explanation_ar: 'لكتابة الفاصلة العربية (،) نضغط باستمرار على Shift ثم نضغط على K.',
        golden_rule_ar: 'Shift + K = الفاصلة العربية (،). Shift + > = النقطة.'
      },
      {
        id: 'q20', type: 'info',
        question_ar: '📖 من الكتاب (ص 44-62): لوحة المفاتيح = جهاز كتابة النصوص والأرقام. المفاتيح المهمة: Backspace (حذف قبل المؤشر)، Delete (حذف بعد المؤشر)، Enter (سطر جديد)، Shift+Alt (تغيير اللغة)، Caps Lock (حروف كبيرة)، Spacebar (مسافة). Shift + الحرف = حرف كبير. Shift + H = الهمزة (أ). Shift + K = الفاصلة.',
        page: 44
      }
    ]
  },
  {
    id: 'u1l2',
    title_ar: 'الدرس الثاني: تحرير النص',
    subtitle_ar: 'الحذف والتحديد والتنسيق في مايكروسوفت وورد',
    page: 53,
    color: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de01d2a?w=400&q=70',
    bookImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de01d2a?w=600&q=80',
    getQuestions: () => [
      {
        id: 'q1', type: 'multiple_choice',
        question_ar: '✏️ لحذف نص محدد بأكمله نستخدم مفتاح:',
        options_ar: ['Delete أو Backspace بعد تحديد النص', 'Ctrl فقط', 'Alt + F4', 'Enter فقط'],
        correct_index: 0, page: 59,
        explanation_ar: 'لحذف نص محدد: حدد النص أولاً ثم اضغط Delete أو Backspace أو مفتاح المسافة.',
        golden_rule_ar: 'حذف النص المحدد: تحديد ← Delete أو Backspace.'
      },
      {
        id: 'q2', type: 'multiple_choice',
        question_ar: '🖱️ لتحديد النص باستخدام الفأرة نقوم بـ:',
        options_ar: ['الضغط على بداية النص ثم سحب الفأرة الأيسر باستمرار', 'النقر مرتين سريعتين فقط', 'الضغط بالزر الأيمن', 'سحب الفأرة من اليمين لليسار فقط'],
        correct_index: 0, page: 57,
        explanation_ar: 'لتحديد النص بالفأرة: اضغط على المكان الذي تريد أن يبدأ منه التحديد واسحب الفأرة الأيسر باستمرار.',
        golden_rule_ar: 'تحديد النص: نقر في البداية + سحب الفأرة الأيسر للنهاية.'
      },
      {
        id: 'q3', type: 'multiple_choice',
        question_ar: '⬆️ لتحديد النص باستخدام لوحة المفاتيح نستخدم:',
        options_ar: ['Shift + أحد الأسهم', 'Alt + الأسهم', 'Ctrl + Delete', 'Caps Lock + الأسهم'],
        correct_index: 0, page: 58,
        explanation_ar: 'لتحديد النص بالمفاتيح: ضع المؤشر بجوار النص ثم اضغط Shift باستمرار مع أحد الأسهم.',
        golden_rule_ar: 'Shift + الأسهم = تحديد النص بلوحة المفاتيح.'
      },
      {
        id: 'q4', type: 'true_false',
        question_ar: '↩️ للتراجع عن إجراء نضغط Ctrl + Z.',
        correct_answer: 'true', page: 70,
        explanation_ar: 'نعم، Ctrl + Z يتراجع عن آخر إجراء قمت به.',
        golden_rule_ar: 'Ctrl + Z = تراجع (Undo). يمكن الضغط عليه أكثر من مرة.'
      },
      {
        id: 'q5', type: 'multiple_choice',
        question_ar: '🔍 لفتح خانة البحث في مايكروسوفت وورد نضغط:',
        options_ar: ['Ctrl + F', 'Ctrl + B', 'Ctrl + Z', 'Ctrl + S'],
        correct_index: 0, page: 69,
        explanation_ar: 'Ctrl + F يفتح خانة البحث في مايكروسوفت وورد للعثور على كلمة أو عبارة.',
        golden_rule_ar: 'Ctrl + F = البحث عن نص في المستند.'
      },
      {
        id: 'q6', type: 'multiple_choice',
        question_ar: '💾 لحفظ مستند جديد في مايكروسوفت وورد نضغط:',
        options_ar: ['File ثم حفظ باسم (Save as)', 'Delete ثم Enter', 'Ctrl + Z', 'Alt + F4'],
        correct_index: 0, page: 70,
        explanation_ar: 'لحفظ مستند: من علامة تبويب ملف (File) اضغط على حفظ باسم (Save as) ثم اختر المجلد وسمّ الملف.',
        golden_rule_ar: 'حفظ مستند جديد: File ← Save as ← الكمبيوتر الشخصي ← المستندات ← اسم الملف ← حفظ.'
      },
      {
        id: 'q7', type: 'multiple_choice',
        question_ar: '📂 لفتح ملف موجود مسبقاً في وورد نضغط:',
        options_ar: ['Ctrl + O أو File ثم فتح', 'Ctrl + F', 'Ctrl + Z', 'Delete ثم Enter'],
        correct_index: 0, page: 71,
        explanation_ar: 'لفتح ملف موجود: من علامة تبويب ملف اضغط فتح (Open) أو اضغط Ctrl + O.',
        golden_rule_ar: 'فتح ملف موجود: Ctrl + O أو File ← Open ← تحديد الملف.'
      },
      {
        id: 'q8', type: 'true_false',
        question_ar: '📋 يمكن التراجع عن حفظ الملف باستخدام زر التراجع (Undo).',
        correct_answer: 'false', page: 70,
        explanation_ar: 'خطأ. لا يمكن التراجع عن بعض الإجراءات مثل الحفظ أو الضغط على بعض الأوامر من علامة تبويب ملف.',
        golden_rule_ar: 'بعض الإجراءات لا يمكن التراجع عنها مثل الحفظ وأوامر ملف.'
      },
      {
        id: 'q9', type: 'multiple_choice',
        question_ar: '🔎 مفتاح مساعد في البحث: عند كتابة الكلمة في خانة البحث، يُميّز وورد:',
        options_ar: ['جميع الكلمات المطابقة في المستند باللون الأصفر', 'الكلمة الأولى فقط', 'لا يُميز أي شيء', 'يحذف الكلمة المبحوث عنها'],
        correct_index: 0, page: 69,
        explanation_ar: 'عند كتابة الكلمة في خانة البحث، يُميز وورد جميع الكلمات المطابقة في المستند.',
        golden_rule_ar: 'البحث (Ctrl+F): يُميز جميع الكلمات المطابقة في المستند بلون مختلف.'
      },
      {
        id: 'q10', type: 'classify',
        question_ar: '⌨️ صنّف هذه الاختصارات:',
        categories_ar: ['حفظ/فتح', 'تراجع/بحث', 'تحديد نص'],
        items_ar: [
          { text: 'Ctrl + S (حفظ)', correct_category: 0 },
          { text: 'Ctrl + O (فتح)', correct_category: 0 },
          { text: 'Ctrl + Z (تراجع)', correct_category: 1 },
          { text: 'Ctrl + F (بحث)', correct_category: 1 },
          { text: 'Shift + الأسهم', correct_category: 2 }
        ],
        page: 53,
        explanation_ar: 'كل مجموعة اختصارات لها وظيفة محددة في وورد.'
      },
      {
        id: 'q11', type: 'multiple_choice',
        question_ar: '🖥️ الإشارة الوامضة في مستند وورد تسمى:',
        options_ar: ['المؤشر — تشير إلى موضع الكتابة', 'السهم — تُحدد النص', 'الزر — تفتح القائمة', 'الفأرة — تتحكم في التمرير'],
        correct_index: 0, page: 45,
        explanation_ar: 'الإشارة الوامضة في الصفحة تسمى المؤشر وتشير إلى موضع الكتابة الحالي.',
        golden_rule_ar: 'الإشارة الوامضة = المؤشر = يُشير إلى موضع الكتابة.'
      },
      {
        id: 'q12', type: 'true_false',
        question_ar: '📄 عند فتح وورد نختار مستند فارغ (Blank document) لإنشاء مستند جديد.',
        correct_answer: 'true', page: 45,
        explanation_ar: 'نعم، بعد فتح وورد نختار مستند فارغ (Blank document) لإنشاء مستند جديد.',
        golden_rule_ar: 'إنشاء مستند جديد: فتح وورد ← Blank document.'
      },
      {
        id: 'q13', type: 'multiple_choice',
        question_ar: '↕️ لتكبير وتصغير حجم العرض في وورد:',
        options_ar: ['نسحب شريط التمرير في أسفل النافذة أو نستخدم Ctrl + الفأرة', 'نضغط Shift + Alt', 'نستخدم مفتاح Delete', 'نضغط Enter مرتين'],
        correct_index: 0, page: 70,
        explanation_ar: 'للتكبير/التصغير: نضغط على شريط التكبير/التصغير في أسفل النافذة ونسحب يميناً للتكبير ويساراً للتصغير.',
        golden_rule_ar: 'تكبير/تصغير العرض: شريط التمرير في أسفل النافذة.'
      },
      {
        id: 'q14', type: 'multiple_choice',
        question_ar: '📝 ما قواعد الكتابة الصحيحة؟',
        options_ar: ['بعد كل كلمة اضغط Spacebar مرة واحدة ولا تضع مسافة بين الكلمة والرمز', 'اضغط Spacebar مرتين بين كل كلمتين', 'لا توجد قواعد محددة للكتابة', 'اضغط Enter بعد كل كلمة'],
        correct_index: 0, page: 70,
        explanation_ar: 'من قواعد الكتابة: بعد كل كلمة Spacebar مرة واحدة. استخدم علامات الترقيم المناسبة. لا تضع مسافة بين الكلمة والرمز.',
        golden_rule_ar: 'قواعد الكتابة: Spacebar مرة واحدة + علامات الترقيم + لا مسافة قبل الرمز.'
      },
      {
        id: 'q15', type: 'true_false',
        question_ar: '🔡 لكتابة النقطة في اللغة العربية نضغط Shift + > .',
        correct_answer: 'true', page: 62,
        explanation_ar: 'نعم، لكتابة النقطة العربية (.) نضغط Shift + > في لوحة المفاتيح.',
        golden_rule_ar: 'Shift + > = النقطة. Shift + K = الفاصلة. Shift + H = الهمزة.'
      },
      {
        id: 'q16', type: 'multiple_choice',
        question_ar: '💡 مثال الكتاب: "التفاح لذيذ - إنه مفيد لصحتك أيضاً". لحذف كلمة "التفاح" واستبدالها بـ "المشروبات الغازية" نستخدم:',
        options_ar: ['نحدد الكلمة ونحذفها بـ Delete ثم نكتب الكلمة الجديدة', 'نضغط Ctrl + Z', 'نضغط Enter ثم نكتب', 'نفتح ملفاً جديداً'],
        correct_index: 0, page: 63,
        explanation_ar: 'لاستبدال كلمة: نحدد الكلمة → نضغط Delete → نكتب الكلمة الجديدة.',
        golden_rule_ar: 'استبدال كلمة: تحديدها ← Delete ← كتابة الكلمة الجديدة.'
      },
      {
        id: 'q17', type: 'multiple_choice',
        question_ar: '🖱️ لتحديد كلمة كاملة بالفأرة نقوم بـ:',
        options_ar: ['النقر مرتين سريعتين فوق الكلمة', 'النقر مرة واحدة', 'الضغط بالزر الأيمن', 'السحب من يمين الكلمة لشمالها'],
        correct_index: 0, page: 57,
        explanation_ar: 'للنقر مرتين سريعتين فوق الكلمة يتم تحديد الكلمة كاملة.',
        golden_rule_ar: 'نقر مرتين سريعتين = تحديد كلمة كاملة.'
      },
      {
        id: 'q18', type: 'true_false',
        question_ar: '💾 يمكن حفظ مستند وورد بأكثر من اسم في مواقع مختلفة.',
        correct_answer: 'true', page: 70,
        explanation_ar: 'نعم، يمكن استخدام Save as لحفظ نسخ من نفس الملف بأسماء ومواقع مختلفة.',
        golden_rule_ar: 'Save as = حفظ بأسماء ومواقع متعددة.'
      },
      {
        id: 'q19', type: 'multiple_choice',
        question_ar: '📋 ما هو اختصار لوحة المفاتيح لحفظ المستند في نفس موقعه؟',
        options_ar: ['Ctrl + S', 'Ctrl + O', 'Ctrl + Z', 'Ctrl + F'],
        correct_index: 0, page: 70,
        explanation_ar: 'Ctrl + S يحفظ المستند الحالي في موقعه وباسمه الحالي.',
        golden_rule_ar: 'Ctrl + S = حفظ سريع للمستند في موقعه الحالي.'
      },
      {
        id: 'q20', type: 'info',
        question_ar: '📖 من الكتاب (ص 53-71): تحرير النص في وورد: Backspace (قبل المؤشر)، Delete (بعد المؤشر). تحديد النص: بالفأرة (سحب) أو بالمفاتيح (Shift+أسهم). اختصارات مهمة: Ctrl+Z (تراجع)، Ctrl+F (بحث)، Ctrl+S (حفظ)، Ctrl+O (فتح). حذف النص المحدد: تحديد ← Delete.',
        page: 53
      }
    ]
  },
  {
    id: 'u1l3',
    title_ar: 'الدرس الثالث: تنسيق النص',
    subtitle_ar: 'الغامق والمائل والتسطير وتغيير الخط واللون',
    page: 66,
    color: 'from-rose-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=400&q=70',
    getQuestions: () => [
      {
        id: 'q1', type: 'multiple_choice',
        question_ar: '🔤 ما الأدوات الثلاث الرئيسية لتنسيق الخط؟',
        options_ar: ['غامق (Bold)، مائل (Italic)، تسطير (Underline)', 'لون الخط، حجم الخط، نوع الخط', 'المحاذاة، التعداد، الحدود', 'البحث، الاستبدال، التراجع'],
        correct_index: 0, page: 66,
        explanation_ar: 'الأدوات الثلاث الرئيسية لتنسيق الخط: غامق (Bold)، مائل (Italic)، تسطير (Underline).',
        golden_rule_ar: 'تنسيقات الخط الثلاثة: B (غامق) + I (مائل) + U (تسطير).'
      },
      {
        id: 'q2', type: 'multiple_choice',
        question_ar: '🔡 ما رمز الغامق في شريط أدوات وورد؟',
        options_ar: ['B', 'G', 'D', 'F'],
        correct_index: 0, page: 66,
        explanation_ar: 'رمز الغامق (Bold) في شريط الأدوات هو B.',
        golden_rule_ar: 'B = Bold (غامق). I = Italic (مائل). U = Underline (تسطير).'
      },
      {
        id: 'q3', type: 'multiple_choice',
        question_ar: '🎨 لتمييز النص باللون الأصفر نستخدم أداة:',
        options_ar: ['لون تمييز النص (Text Highlight Color)', 'لون الخط (Font Color)', 'نوع الخط (Font)', 'حجم الخط (Font size)'],
        correct_index: 0, page: 67,
        explanation_ar: 'لتمييز النص بلون الخلفية نستخدم زر لون تمييز النص (Text Highlight Color) ونختار اللون المطلوب.',
        golden_rule_ar: 'تمييز النص = Text Highlight Color (لون خلفية النص).'
      },
      {
        id: 'q4', type: 'true_false',
        question_ar: '📝 يجب تظليل النص قبل تطبيق أي تنسيق عليه.',
        correct_answer: 'true', page: 66,
        explanation_ar: 'نعم، يجب تحديد (تظليل) النص الذي تريد تعديله قبل تطبيق أي تنسيق.',
        golden_rule_ar: 'قاعدة التنسيق الأساسية: تحديد النص أولاً ← ثم التنسيق.'
      },
      {
        id: 'q5', type: 'multiple_choice',
        question_ar: '🔠 لتغيير نوع الخط نذهب إلى:',
        options_ar: ['الشريط الرئيسي (Home) ← مجموعة خط (Font) ← نضغط السهم بجانب اسم الخط', 'علامة تبويب إدراج', 'علامة تبويب عرض', 'علامة تبويب مراجعة'],
        correct_index: 0, page: 68,
        explanation_ar: 'لتغيير نوع الخط: الشريط الرئيسي (Home) ← مجموعة خط (Font) ← نضغط السهم بجانب زر الخط.',
        golden_rule_ar: 'تغيير نوع الخط: Home ← Font ← اختيار نوع الخط من القائمة.'
      },
      {
        id: 'q6', type: 'multiple_choice',
        question_ar: '🔢 لتغيير حجم الخط نذهب إلى:',
        options_ar: ['Home ← Font ← حجم الخط (Font size) ← نختار الحجم', 'علامة تبويب إدراج', 'علامة تبويب تخطيط', 'علامة تبويب مراجعة'],
        correct_index: 0, page: 68,
        explanation_ar: 'لتغيير حجم الخط: Home ← Font ← Font size ← نضغط السهم ونختار الحجم المطلوب.',
        golden_rule_ar: 'تغيير حجم الخط: Home ← Font size ← اختيار الحجم.'
      },
      {
        id: 'q7', type: 'multiple_choice',
        question_ar: '🎨 لتغيير لون الخط نستخدم زر:',
        options_ar: ['لون الخط (Font Color)', 'لون تمييز النص', 'نوع الخط', 'حجم الخط'],
        correct_index: 0, page: 68,
        explanation_ar: 'لتغيير لون الخط نستخدم زر لون الخط (Font Color) في مجموعة خط بالشريط الرئيسي.',
        golden_rule_ar: 'لون الخط: Home ← Font Color ← اختيار اللون.'
      },
      {
        id: 'q8', type: 'true_false',
        question_ar: '🔵 لإيقاف التمييز نضغط على زر إيقاف التمييز (Stop Highlighting).',
        correct_answer: 'true', page: 67,
        explanation_ar: 'نعم، للعودة إلى الوضع الطبيعي نضغط على زر "إيقاف التمييز" (Stop Highlighting).',
        golden_rule_ar: 'إيقاف التمييز = الضغط على Stop Highlighting.'
      },
      {
        id: 'q9', type: 'classify',
        question_ar: '🔤 صنّف أدوات التنسيق في وورد:',
        categories_ar: ['تنسيق الخط', 'تنسيق الفقرة'],
        items_ar: [
          { text: 'غامق (B)', correct_category: 0 },
          { text: 'مائل (I)', correct_category: 0 },
          { text: 'تسطير (U)', correct_category: 0 },
          { text: 'محاذاة اليمين', correct_category: 1 },
          { text: 'تعداد نقطي', correct_category: 1 },
          { text: 'حجم الخط', correct_category: 0 }
        ],
        page: 66,
        explanation_ar: 'تنسيق الخط: B, I, U, حجم الخط. تنسيق الفقرة: المحاذاة، التعداد.'
      },
      {
        id: 'q10', type: 'multiple_choice',
        question_ar: '📋 ما الأمثلة على تنسيق الخط في الكتاب لعنوان "حديقة الملك سلمان"؟',
        options_ar: ['تغيير نوع الخط إلى Adobe Arabic وتكبير حجمه وجعله غامقاً ومسطراً', 'حذف العنوان وإعادة كتابته', 'تحديد الخط باللون الأصفر فقط', 'تغيير موضع العنوان على الصفحة'],
        correct_index: 0, page: 68,
        explanation_ar: 'في مثال الكتاب تم تنسيق عنوان حديقة الملك سلمان بتغيير نوع الخط وحجمه وجعله غامقاً ومسطراً.',
        golden_rule_ar: 'تنسيق العنوان: نوع الخط + حجمه + غامق + مسطر = عنوان مميز.'
      },
      {
        id: 'q11', type: 'multiple_choice',
        question_ar: '✏️ يجب عليك لتنسيق نص:',
        options_ar: ['تحديده أولاً ثم تطبيق التنسيق', 'تطبيق التنسيق أولاً ثم كتابة النص', 'لا يهم الترتيب', 'حذفه وإعادة كتابته'],
        correct_index: 0, page: 66,
        explanation_ar: 'لتطبيق تنسيق على نص موجود: حدده أولاً ثم طبّق التنسيق.',
        golden_rule_ar: 'قاعدة التنسيق: 1- تحديد النص → 2- تطبيق التنسيق.'
      },
      {
        id: 'q12', type: 'true_false',
        question_ar: '🖊️ يمكن تغيير نوع الخط إلى أدوبي عربي (Adobe Arabic).',
        correct_answer: 'true', page: 68,
        explanation_ar: 'نعم، يمكن اختيار أدوبي عربي (Adobe Arabic) من قائمة أنواع الخطوط في وورد.',
        golden_rule_ar: 'Adobe Arabic مثال على نوع خط عربي يمكن اختياره في وورد.'
      },
      {
        id: 'q13', type: 'multiple_choice',
        question_ar: '🎨 لتمييز النص في الكتاب اخترنا اللون:',
        options_ar: ['الأصفر', 'الأزرق', 'الأحمر', 'الأخضر'],
        correct_index: 0, page: 67,
        explanation_ar: 'في مثال الكتاب استخدمنا التمييز باللون الأصفر.',
        golden_rule_ar: 'اللون الأصفر هو اللون الافتراضي الشائع للتمييز.'
      },
      {
        id: 'q14', type: 'multiple_choice',
        question_ar: '🔵 لتغيير لون الفقرة الأولى في مثال الكتاب إلى اللون الأزرق:',
        options_ar: ['تحديد الفقرة ← Home ← لون الخط ← الأزرق', 'الضغط على Delete ثم الكتابة بالأزرق', 'فتح مستند جديد وتغيير لونه', 'استخدام مفتاح Ctrl + B'],
        correct_index: 0, page: 68,
        explanation_ar: 'لتغيير لون النص: تحديد الفقرة ← Home ← مجموعة خط ← لون الخط ← الأزرق.',
        golden_rule_ar: 'تغيير لون النص: تحديد ← Home ← Font Color ← اختيار اللون.'
      },
      {
        id: 'q15', type: 'multiple_choice',
        question_ar: '🔢 في مثال الكتاب: حجم خط العنوان = ؟',
        options_ar: ['26', '18', '12', '14'],
        correct_index: 0, page: 68,
        explanation_ar: 'في مثال الكتاب (حديقة الملك سلمان): حجم خط العنوان يكون 26.',
        golden_rule_ar: 'حجم خط العنوان > حجم خط النص العادي للتمييز.'
      },
      {
        id: 'q16', type: 'true_false',
        question_ar: '✍️ يمكن تنسيق نفس المستند بأكثر من نوع خط وحجم خط ولون.',
        correct_answer: 'true', page: 66,
        explanation_ar: 'نعم، يمكن تطبيق تنسيقات مختلفة على أجزاء مختلفة من نفس المستند.',
        golden_rule_ar: 'المستند الواحد يمكن أن يحتوي على تنسيقات متعددة ومختلفة.'
      },
      {
        id: 'q17', type: 'multiple_choice',
        question_ar: '🔦 ما الفرق بين تمييز النص ولون الخط؟',
        options_ar: ['التمييز يغير لون خلفية النص، لون الخط يغير لون الحرف نفسه', 'لا فرق بينهما', 'التمييز يحذف النص، لون الخط ينسقه', 'التمييز يكبّر النص، لون الخط يصغّره'],
        correct_index: 0, page: 67,
        explanation_ar: 'تمييز النص (Highlight) = يغير لون خلفية النص. لون الخط (Font Color) = يغير لون الحرف نفسه.',
        golden_rule_ar: 'Highlight = خلفية النص. Font Color = لون الحرف نفسه.'
      },
      {
        id: 'q18', type: 'true_false',
        question_ar: '🔡 أيقونة U في وورد تعني التسطير (Underline).',
        correct_answer: 'true', page: 66,
        explanation_ar: 'نعم، أيقونة U في وورد تعني Underline (تسطير) وتضع خطاً تحت النص.',
        golden_rule_ar: 'U = Underline = خط تحت النص.'
      },
      {
        id: 'q19', type: 'multiple_choice',
        question_ar: '🖊️ أيقونة I في وورد تعني:',
        options_ar: ['مائل (Italic)', 'إدراج (Insert)', 'تعداد (Items)', 'صورة (Image)'],
        correct_index: 0, page: 66,
        explanation_ar: 'أيقونة I في وورد تعني Italic وتجعل النص مائلاً.',
        golden_rule_ar: 'I = Italic = نص مائل.'
      },
      {
        id: 'q20', type: 'info',
        question_ar: '📖 من الكتاب (ص 66-71): تنسيق النص في وورد: 1- تحديد النص أولاً. 2- من Home: B (غامق)، I (مائل)، U (تسطير). تمييز النص: Highlight Color (لون الخلفية). لون الخط: Font Color. تغيير الخط: Font ← اسم الخط. تغيير حجم الخط: Font Size ← الحجم. Ctrl+Z للتراجع. Ctrl+F للبحث. Ctrl+S للحفظ.',
        page: 66
      }
    ]
  },
  {
    id: 'u1l4',
    title_ar: 'الدرس الرابع: تنسيق الفقرة',
    subtitle_ar: 'المحاذاة والحدود والتعداد النقطي والرمز',
    page: 74,
    color: 'from-teal-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70',
    getQuestions: () => [
      {
        id: 'q1', type: 'multiple_choice',
        question_ar: '📄 الفقرة هي:',
        options_ar: ['مجموعة الجمل التي تشمل فكرةً أو معنىً رئيسياً واحداً', 'كلمة واحدة فقط', 'أي نص في مستند', 'عنوان المستند'],
        correct_index: 0, page: 74,
        explanation_ar: 'الفقرة هي مجموعة الجمل التي تشمل فكرةً أو معنىً رئيسياً واحداً.',
        golden_rule_ar: 'الفقرة = مجموعة جمل حول فكرة واحدة.'
      },
      {
        id: 'q2', type: 'multiple_choice',
        question_ar: '↔️ محاذاة النص إلى اليمين (Ctrl + R):',
        options_ar: ['تضع النص في الجانب الأيمن من الصفحة', 'تضع النص في الجانب الأيسر', 'توسط النص', 'تملأ النص في السطر كاملاً'],
        correct_index: 0, page: 74,
        explanation_ar: 'محاذاة اليمين تضع النص في الجانب الأيمن من الصفحة.',
        golden_rule_ar: 'Ctrl + R = محاذاة اليمين. Ctrl + L = محاذاة اليسار. Ctrl + E = توسيط. Ctrl + J = ضبط.'
      },
      {
        id: 'q3', type: 'multiple_choice',
        question_ar: '⬛ ما الحدود في مايكروسوفت وورد؟',
        options_ar: ['إطار يضاف حول الكلمة أو الفقرة أو النص لتحديدها وجعل القراءة أسهل', 'ألوان الخلفية للنص', 'حجم الخط الذي يُستخدم', 'المسافات بين الفقرات'],
        correct_index: 0, page: 75,
        explanation_ar: 'الحدود تجعل النصوص تبدو أفضل وأسهل في القراءة وتُمكّن من التركيز على أجزاء معينة.',
        golden_rule_ar: 'الحدود = إطار حول النص للتمييز وسهولة القراءة.'
      },
      {
        id: 'q4', type: 'classify',
        question_ar: '↔️ صنّف خيارات المحاذاة في وورد:',
        categories_ar: ['محاذاة يمين', 'محاذاة وسط', 'محاذاة يسار', 'ضبط (ملء السطر)'],
        items_ar: [
          { text: 'Ctrl + R', correct_category: 0 },
          { text: 'Ctrl + E', correct_category: 1 },
          { text: 'Ctrl + L', correct_category: 2 },
          { text: 'Ctrl + J', correct_category: 3 }
        ],
        page: 74,
        explanation_ar: 'R=يمين، E=وسط، L=يسار، J=ضبط.'
      },
      {
        id: 'q5', type: 'multiple_choice',
        question_ar: '📌 التعداد النقطي في وورد يُستخدم لـ:',
        options_ar: ['إنشاء قائمة من العناصر بشكل نقطي', 'تغيير حجم الخط', 'حذف النص', 'تغيير لون الخلفية'],
        correct_index: 0, page: 77,
        explanation_ar: 'التعداد النقطي يُستخدم لإنشاء قوائم من العناصر بنقاط.',
        golden_rule_ar: 'تعداد نقطي = قائمة بنقاط. تعداد رقمي = قائمة بأرقام.'
      },
      {
        id: 'q6', type: 'multiple_choice',
        question_ar: '📌 أين نجد أيقونة التعداد النقطي في وورد؟',
        options_ar: ['Home ← مجموعة فقرة (Paragraph) ← بجانب أيقونة التعداد النقطي (Bullets)', 'إدراج ← رمز', 'تصميم ← الصفحة', 'مراجعة ← إملاء'],
        correct_index: 0, page: 77,
        explanation_ar: 'أيقونة التعداد النقطي موجودة في: Home ← مجموعة فقرة (Paragraph) ← الضغط على السهم بجانب أيقونة Bullets.',
        golden_rule_ar: 'تعداد نقطي: Home ← Paragraph ← Bullets.'
      },
      {
        id: 'q7', type: 'true_false',
        question_ar: '🔄 يمكن تحويل التعداد النقطي إلى تعداد رقمي.',
        correct_answer: 'true', page: 77,
        explanation_ar: 'نعم، يمكن تغيير التعداد النقطي إلى تعداد رقمي بالضغط على أيقونة التعداد الرقمي.',
        golden_rule_ar: 'يمكن التبديل بين التعداد النقطي والرقمي.'
      },
      {
        id: 'q8', type: 'multiple_choice',
        question_ar: '✅ إدراج رمز (مثل رمز ✓) في وورد يتم من:',
        options_ar: ['إدراج (Insert) ← رمز (Symbol) ← نختار الرمز', 'Home ← خط ← رمز', 'مراجعة ← إملاء', 'تصميم ← صفحة'],
        correct_index: 0, page: 78,
        explanation_ar: 'لإدراج رمز: من علامة التبويب إدراج (Insert) نضغط على أيقونة رمز (Symbol) ونختار الرمز المطلوب.',
        golden_rule_ar: 'إدراج رمز: Insert ← Symbol ← اختيار الرمز.'
      },
      {
        id: 'q9', type: 'multiple_choice',
        question_ar: '⬛ لإضافة حد (Border) لفقرة في وورد:',
        options_ar: ['نحدد الفقرة ← Home ← حدود (Border) ← نختار نوع الحد', 'نضغط Ctrl + B', 'نضغط Enter ثم نكتب', 'نستخدم تعداد نقطي'],
        correct_index: 0, page: 75,
        explanation_ar: 'لإضافة حد: نحدد الفقرة ← Home ← الضغط على السهم الصغير بجانب حدود (Border) ← نختار نوع الحد.',
        golden_rule_ar: 'إضافة حد: تحديد ← Home ← Border ← نوع الحد.'
      },
      {
        id: 'q10', type: 'classify',
        question_ar: '⬛ صنّف أنواع الحدود في وورد:',
        categories_ar: ['حدود خارجية', 'حدود جانبية', 'بلا حدود'],
        items_ar: [
          { text: 'Outside borders', correct_category: 0 },
          { text: 'Left border', correct_category: 1 },
          { text: 'Right border', correct_category: 1 },
          { text: 'No Borders', correct_category: 2 }
        ],
        page: 76,
        explanation_ar: 'وورد يوفر أنواعاً متعددة من الحدود للفقرات.'
      },
      {
        id: 'q11', type: 'true_false',
        question_ar: '📄 لإضافة حد أفقي بين فقرتين نحتاج إلى تحديد أكثر من فقرة.',
        correct_answer: 'true', page: 76,
        explanation_ar: 'نعم، يمكن إضافة حدود أفقية بين فقرات إذا قمت بتحديد أكثر من فقرة.',
        golden_rule_ar: 'إضافة حدود بين فقرات: تحديد أكثر من فقرة ← حدود أفقية داخلية.'
      },
      {
        id: 'q12', type: 'multiple_choice',
        question_ar: '📋 محتوى مشروع الوحدة في الكتاب: كتابة مقال حول:',
        options_ar: ['مدينتك مع تحديد الأماكن التي يمكن أن يقصدها الزائر أو السائح', 'قصة خيالية', 'تقرير عن الحيوانات', 'وصف الطقس'],
        correct_index: 0, page: 83,
        explanation_ar: 'مشروع الوحدة: شكّل فريقاً وكتابة مقال حول مدينتك مع تحديد الأماكن التي يمكن أن يقصدها الزائر.',
        golden_rule_ar: 'مشروع الوحدة = مقال عن مدينتك + تحديد أماكن الزيارة + تنسيق جيد.'
      },
      {
        id: 'q13', type: 'multiple_choice',
        question_ar: '📌 لإنهاء تطبيق التعداد النقطي في القائمة:',
        options_ar: ['نضغط Enter مرتين أو Backspace لحذف الرمز الأخير', 'نضغط Delete', 'نضغط Ctrl + Z', 'نغلق الملف'],
        correct_index: 0, page: 77,
        explanation_ar: 'لإنهاء التعداد النقطي: اضغط Enter مرتين أو اضغط Backspace لحذف الرمز النقطي أو الرقم الأخير في القائمة.',
        golden_rule_ar: 'إنهاء التعداد: Enter مرتين أو Backspace لحذف آخر رمز.'
      },
      {
        id: 'q14', type: 'true_false',
        question_ar: '📝 يمكن إضافة رمز ✓ في المستند لتشير إلى مهمة مكتملة.',
        correct_answer: 'true', page: 78,
        explanation_ar: 'نعم، الكتاب يُظهر استخدام رمز ✓ للإشارة إلى المتحف الذي تريد زيارته.',
        golden_rule_ar: 'رمز ✓ يُستخدم للإشارة إلى المهام المكتملة أو الخيارات المختارة.'
      },
      {
        id: 'q15', type: 'multiple_choice',
        question_ar: '🖥️ ما البرامج الأخرى المشابهة لمايكروسوفت وورد المذكورة في الكتاب؟',
        options_ar: ['ليبر أوفيس رايتر (LibreOffice Writer) وصفحات أبل (Apple Pages) ودوكس تو جو (Docs to Go)', 'فوتوشوب وإليستريتور', 'إكسيل وباوربوينت فقط', 'نوت باد وووردباد'],
        correct_index: 0, page: 84,
        explanation_ar: 'البرامج المشابهة لوورد: LibreOffice Writer (لينوكس)، Apple Pages (iOS)، Docs to Go (Android).',
        golden_rule_ar: 'بدائل وورد: LibreOffice Writer + Apple Pages + Docs to Go.'
      },
      {
        id: 'q16', type: 'multiple_choice',
        question_ar: '📐 ما الفرق بين ضبط النص (Justify) وتوسيطه؟',
        options_ar: ['الضبط يجعل النص يملأ السطر كاملاً، التوسيط يضع النص في وسط الصفحة', 'لا فرق بينهما', 'الضبط للعناوين، التوسيط للفقرات', 'الضبط يجعل النص يميناً، التوسيط يساراً'],
        correct_index: 0, page: 74,
        explanation_ar: 'الضبط (Justify) = النص يملأ السطر بالكامل. التوسيط = النص في وسط السطر.',
        golden_rule_ar: 'Justify = ملء السطر كاملاً. Center = وسط السطر.'
      },
      {
        id: 'q17', type: 'true_false',
        question_ar: '📄 مصطلح Shading يعني التظليل في وورد.',
        correct_answer: 'true', page: 85,
        explanation_ar: 'نعم، Shading يعني التظليل في وورد وهو لون يُضاف لخلفية النص أو الفقرة.',
        golden_rule_ar: 'Shading = تظليل (لون خلفية الفقرة). Border = الحدود.'
      },
      {
        id: 'q18', type: 'multiple_choice',
        question_ar: '📋 لمحاذاة فقرة إلى اليمين والأيسر معاً (ضبط):',
        options_ar: ['Ctrl + J', 'Ctrl + E', 'Ctrl + R', 'Ctrl + L'],
        correct_index: 0, page: 74,
        explanation_ar: 'Ctrl + J يطبق ضبط الفقرة (Justify) فيجعل النص يملأ السطر كاملاً.',
        golden_rule_ar: 'Ctrl + J = ضبط (Justify) = النص يملأ السطر.'
      },
      {
        id: 'q19', type: 'multiple_choice',
        question_ar: '🔤 ما مصطلح Cursor بالعربية؟',
        options_ar: ['المؤشر', 'الحدود', 'التظليل', 'المحاذاة'],
        correct_index: 0, page: 85,
        explanation_ar: 'Cursor = المؤشر (الإشارة الوامضة في مكان الكتابة في وورد).',
        golden_rule_ar: 'Cursor = المؤشر. Align = المحاذاة. Border = الحدود. Shading = التظليل.'
      },
      {
        id: 'q20', type: 'info',
        question_ar: '📖 من الكتاب (ص 74-82): تنسيق الفقرة: المحاذاة (R=يمين، E=وسط، L=يسار، J=ضبط). الحدود: إطار حول الفقرة. التعداد النقطي: Home ← Paragraph ← Bullets. التعداد الرقمي مثله لكن بأرقام. إدراج رمز: Insert ← Symbol. مشروع الوحدة: مقال عن مدينتك. برامج مشابهة: LibreOffice, Pages, Docs to Go.',
        page: 74
      }
    ]
  }
];