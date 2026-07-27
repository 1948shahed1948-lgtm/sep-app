// لغتي — الصف الثاني الابتدائي — الفصل الأول
// دفعة ثالثة لإكمال 400 سؤال
// مرتبطة بصور الكتاب ومحتوى الصفحات الحقيقية 1447هـ

const IMG = {
  family: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=600&q=80',
  grandpa: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  class: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
  lib: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  friends: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  nb: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80',
  book: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
  help: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
  shake: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  old: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80',
};

export const LUGHATI_EXTRA_3 = [
  // ═══ الوحدة 1 / الدرس 1 — أسئلة إضافية ══════════════════════
  { id:'u1l1e1', unit:'u1', lesson:'u1l1', page:19, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'في صور نشاط التهيئة (ص19) ظهر ولد يُسلّم على جدّه. هذا يدل على:',
    image: IMG.grandpa, paragraph:'نشاط التهيئة صور السلوكيات. (ص19)',
    options:[{text:'احترام الكبير',correct:true},{text:'العناد',correct:false},{text:'الكسل',correct:false},{text:'الإهمال',correct:false}],
    explanation:'السلام على الكبير دليل الاحترام.',goldenRule:'السلام على الكبير أدب.'},

  { id:'u1l1e2', unit:'u1', lesson:'u1l1', page:19, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'في صورة نشاط التهيئة طفل يُنظّف المنزل مساعدةً لأمه.',
    image: IMG.family, paragraph:'نشاط التهيئة: صور السلوكيات. (ص19)',
    correctAnswer:true, explanation:'مساعدة الأم في التنظيف صلة رحم وبرّ.',goldenRule:'مساعدة الأم برّ وصلة رحم.'},

  { id:'u1l1e3', unit:'u1', lesson:'u1l1', page:19, type:'multipleChoice', bloom:'analyze', difficulty:'medium',
    question:'في الصورة طفلة تزور جارتها المريضة. ما القيمة المُجسَّدة هنا؟',
    image: IMG.nb, paragraph:'نشاط التهيئة: صور السلوكيات. (ص19)',
    options:[{text:'المحبّة وحسن الجوار',correct:true},{text:'الكسل',correct:false},{text:'البُخل',correct:false},{text:'العناد',correct:false}],
    explanation:'زيارة الجارة المريضة تجسّد المحبّة وحسن الجوار.',goldenRule:'زيارة المريض قيمة جميلة.'},

  { id:'u1l1e4', unit:'u1', lesson:'u1l1', page:20, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف الأقارب: من جهة الأب أم من جهة الأم؟',
    image: IMG.family, paragraph:'الأقارب. (ص20)',
    categories:['من جهة الأب','من جهة الأم'],
    items:[{text:'العم',correct_category:0},{text:'الخال',correct_category:1},{text:'العمة',correct_category:0},{text:'الخالة',correct_category:1},{text:'الجد (للأب)',correct_category:0},{text:'الجد (للأم)',correct_category:1}],
    explanation:'عم وعمة: جهة الأب. خال وخالة: جهة الأم.',goldenRule:'العم والعمة للأب / الخال والخالة للأم.'},

  { id:'u1l1e5', unit:'u1', lesson:'u1l1', page:22, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب صور نص الاستماع حسب الأحداث:',
    image: IMG.family, paragraph:'نص الاستماع — صور الأحداث. (ص22-23)',
    items:['الاتصال الهاتفي','التجمّع في المنزل','الخروج للبرّ','العودة للمنزل'],
    correctOrder:[0,1,2,3], explanation:'اتصال ← تجمّع ← خروج ← عودة.',goldenRule:'تسلسل الأحداث يوضّح القصة.'},

  { id:'u1l1e6', unit:'u1', lesson:'u1l1', page:24, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مَن فاز في سباق الجري في رحلة الأسرة؟',
    image: IMG.family, paragraph:'الفائز في سباق الجري هو فوّاز. (ص25)',
    options:[{text:'فوّاز',correct:true},{text:'ياسر',correct:false},{text:'طلال',correct:false},{text:'أبو فوّاز',correct:false}],
    explanation:'فوّاز فاز في سباق الجري.',goldenRule:'فوّاز الفائز في السباق.'},

  { id:'u1l1e7', unit:'u1', lesson:'u1l1', page:26, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'أكمل من النصيد: "جدّتي جدّتي ___ الحَنانْ."',
    image: IMG.grandpa, paragraph:'جدّتي رَوضةٌ من رياض الحَنان. (ص26)',
    blanks:['رَوضةٌ من رياض'], wordBank:['رَوضةٌ من رياض','بعيدة عن','حزينة في'],
    explanation:'النصيد: جدّتي رَوضةٌ من رياض الحَنان.',goldenRule:'الجدة رَوضة الحنان.'},

  { id:'u1l1e8', unit:'u1', lesson:'u1l1', page:29, type:'trueFalse', bloom:'apply', difficulty:'medium',
    question:'كلمة "الصديق" — اللام في (ال) الشمسية لا تُنطق والصاد مشددة.',
    image: IMG.book, paragraph:'ال الشمسية. (ص30)',
    correctAnswer:true, explanation:'الصاد حرف شمسي فاللام لا تُنطق والصاد تُشدَّد.',goldenRule:'ال الشمسية: اللام صامتة والحرف مشدّد.'},

  { id:'u1l1e9', unit:'u1', lesson:'u1l1', page:32, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل كل موقف بالدعاء المناسب:',
    image: IMG.family, paragraph:'أسلوب الدعاء. (ص32)',
    pairs:[{left:'أمّك مريضة',right:'اللهمّ اشفِ أمّي'},{left:'الوطن في خطر',right:'اللهمّ احرس وطننا'},{left:'قبل الامتحان',right:'اللهمّ وفّقني'}],
    explanation:'لكل موقف دعاء مناسب.',goldenRule:'الدعاء يناسب الحال.'},

  { id:'u1l1e10', unit:'u1', lesson:'u1l1', page:33, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'الجملة الاسمية المؤكّدة بـ"إنَّ": الخبر يكون:',
    image: IMG.book, paragraph:'إنّ: تنصب المبتدأ وترفع الخبر. (ص33)',
    options:[{text:'مرفوعاً',correct:true},{text:'منصوباً',correct:false},{text:'مجروراً',correct:false},{text:'ساكناً',correct:false}],
    explanation:'خبر إنّ مرفوع دائماً.',goldenRule:'خبر إنّ مرفوع.'},

  { id:'u1l1e11', unit:'u1', lesson:'u1l1', page:35, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'رتّب لتكوّن جملة: "أزور — قربى — من — تربطنا — بهم — أقاربي — صلة". الجملة هي: "أزور ___ من تربطنا بهم صلة قربى."',
    image: IMG.family, paragraph:'رتّب الكلمات. (ص35)',
    blanks:['أقاربي'], wordBank:['أقاربي','أعدائي','جيراني'],
    explanation:'الجملة: أزور أقاربي من تربطنا بهم صلة قربى.',goldenRule:'الزيارة لمن تربطنا بهم القرابة.'},

  { id:'u1l1e12', unit:'u1', lesson:'u1l1', page:34, type:'trueFalse', bloom:'evaluate', difficulty:'hard',
    question:'"إنَّ الإسلامَ رحمةٌ" — كلمة "الإسلام" منصوبة بالفتحة.',
    image: IMG.book, paragraph:'إنَّ الإسلامَ رحمةٌ. (ص33)',
    correctAnswer:true, explanation:'"الإسلام" اسم إنّ منصوب والفتحة علامة نصبه.',goldenRule:'اسم إنّ منصوب بالفتحة.'},

  { id:'u1l1e13', unit:'u1', lesson:'u1l1', page:22, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'في نص الاستماع: ما الرياضة التي مارسها فوّاز وياسر وطلال؟',
    image: IMG.family, paragraph:'لعب فوّاز وياسر وطلال بالكرة. (ص25)',
    options:[{text:'الكرة',correct:true},{text:'الجري فقط',correct:false},{text:'السباحة',correct:false},{text:'التنس',correct:false}],
    explanation:'لعب فوّاز وياسر وطلال بالكرة.',goldenRule:'الرياضة صحة وحيوية.'},

  // ═══ الوحدة 1 / الدرس 2 — أسئلة إضافية ═════════════════════
  { id:'u1l2e1', unit:'u1', lesson:'u1l2', page:36, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف التصرفات: تجعل الجد سعيداً أم حزيناً؟',
    image: IMG.grandpa, paragraph:'تصرفات فوّاز. (ص36-37)',
    categories:['تجعله سعيداً ✅','تجعله حزيناً ❌'],
    items:[{text:'خفض الصوت لطلبه',correct_category:0},{text:'رفض طلبه',correct_category:1},{text:'خدمته',correct_category:0},{text:'إزعاجه',correct_category:1},{text:'الاعتذار له',correct_category:0},{text:'العناد',correct_category:1}],
    explanation:'يُسعده: خفض الصوت، خدمته، الاعتذار. يحزنه: رفض الطلب، الإزعاج، العناد.',goldenRule:'طاعة الجد سعادته.'},

  { id:'u1l2e2', unit:'u1', lesson:'u1l2', page:37, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب المشاعر التي مرّ بها فوّاز في القصة:',
    image: IMG.class, paragraph:'مشاعر فوّاز. (ص36-37)',
    items:['الانشغال','الرفض','الذنب','الحزن','الرغبة في الاعتذار'],
    correctOrder:[0,1,2,3,4], explanation:'انشغال ← رفض ← ذنب ← حزن ← رغبة باعتذار.',goldenRule:'المشاعر متسلسلة في القصة.'},

  { id:'u1l2e3', unit:'u1', lesson:'u1l2', page:40, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'المعلم قال: "إنَّ الجدَّ عطوفٌ حنونٌ." كلمة "الجد" هنا:',
    image: IMG.class, paragraph:'إنَّ الجدَّ عطوفٌ حنونٌ. (ص37)',
    options:[{text:'اسم إنّ منصوب',correct:true},{text:'خبر إنّ مرفوع',correct:false},{text:'فاعل',correct:false},{text:'مبتدأ مرفوع',correct:false}],
    explanation:'"الجدَّ" اسم إنّ منصوب بالفتحة.',goldenRule:'اسم إنّ منصوب دائماً.'},

  { id:'u1l2e4', unit:'u1', lesson:'u1l2', page:42, type:'trueFalse', bloom:'evaluate', difficulty:'hard',
    question:'"الجدّةُ تحكي حكايات مفيدة" هو تأنيث لـ"الجدُّ يحكي حكايات مفيدة".',
    image: IMG.grandpa, paragraph:'أُحاكي النموذج. (ص44)',
    correctAnswer:true, explanation:'تأنيث الجد: الجدُّ يحكي ← الجدّةُ تحكي.',goldenRule:'الجدّة = تأنيث الجد.'},

  { id:'u1l2e5', unit:'u1', lesson:'u1l2', page:44, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"يَستمع فوّاز إلى نُصح جدّه." بالمؤنّث: "___ نورة إلى نُصح جدّتها."',
    image: IMG.family, paragraph:'أُحاكي النموذج. (ص44)',
    blanks:['تستمع'], wordBank:['تستمع','يستمع','تستمعان'],
    explanation:'تأنيث الفعل: يستمع ← تستمع.',goldenRule:'يـ ← تـ عند التأنيث.'},

  { id:'u1l2e6', unit:'u1', lesson:'u1l2', page:48, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'في التقويم التجميعي (ص48): "يَفْ" + "عَل" = ؟',
    image: IMG.book, paragraph:'أصِل المقطع الساكن بما يناسبه. (ص48)',
    options:[{text:'يَفْعَل',correct:true},{text:'يَعْفَل',correct:false},{text:'فَعْيَل',correct:false},{text:'عَيْفَل',correct:false}],
    explanation:'المقطع "يَفْ" يكمله "عَل" ليصبح "يَفْعَل".',goldenRule:'المقطع الساكن يُكمله ما بعده.'},

  { id:'u1l2e7', unit:'u1', lesson:'u1l2', page:50, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب الكلمات: "من — أبي — دروساً — أتعلّم — مفيدةً — وأمّي"',
    image: IMG.family, paragraph:'رتّب الكلمات لتكوّن جملة مفيدة. (ص50)',
    items:['أتعلّم','من أبي','دروساً','مفيدةً','وأمّي'],
    correctOrder:[0,1,2,3,4], explanation:'الجملة: أتعلّم من أبي دروساً مفيدةً وأمّي.',goldenRule:'الأسرة مدرسة الحياة.'},

  { id:'u1l2e8', unit:'u1', lesson:'u1l2', page:51, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'أيّ جملة تُعبّر عن موقف "إذا نهتني أمّي عن اللعب بالهاتف"؟',
    image: IMG.family, paragraph:'أكتب جملة أصف فيها ما أفعله في كل موقف. (ص49)',
    options:[{text:'أتوقف عن اللعب فوراً طاعةً لها',correct:true},{text:'أستمر في اللعب',correct:false},{text:'أختبئ',correct:false},{text:'أجادلها',correct:false}],
    explanation:'طاعة الأم الفورية الأدب والواجب.',goldenRule:'طاعة الأم فوراً واجبة.'},

  { id:'u1l2e9', unit:'u1', lesson:'u1l2', page:52, type:'classify', bloom:'evaluate', difficulty:'hard',
    question:'صنّف الجمل الإملائية: مكتوبة صحيحاً أم بها خطأ؟',
    image: IMG.book, paragraph:'أُصحّح أخطائي. (ص52)',
    categories:['صحيحة ✅','بها خطأ ❌'],
    items:[{text:'إنَّ الجدَّ عطوفٌ حنونٌ',correct_category:0},{text:'إنّ الجدُّ عطوف',correct_category:1},{text:'صحب المعلمُ التلاميذَ',correct_category:0},{text:'صحب المعلم التلاميذُ',correct_category:1}],
    explanation:'الصحيح: الجدَّ منصوب. التلاميذَ منصوب. الخطأ: الجدُّ مرفوع.',goldenRule:'اسم إنّ منصوب. المفعول منصوب.'},

  { id:'u1l2e10', unit:'u1', lesson:'u1l2', page:47, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الكلمة الناقصة في النصيد بمكانها الصحيح:',
    image: IMG.book, paragraph:'اقرأ النشيد وأجِب. (ص47)',
    pairs:[{left:'جدّتي جدّتي حُلوة...',right:'البَسمة'},{left:'جدّتي رَوضةٌ من رياض...',right:'الحَنان'},{left:'... بَهجةٌ وانتفاع',right:'في حكاياتها'}],
    explanation:'البسمة — الحنان — في حكاياتها.',goldenRule:'النصيد يُحفظ بالتكرار.'},

  // ═══ الوحدة 2 / الدرس 1 — أسئلة إضافية ═════════════════════
  { id:'u2l1e1', unit:'u2', lesson:'u2l1', page:60, type:'multipleChoice', bloom:'analyze', difficulty:'medium',
    question:'قصة "الصديقان" تُشبه أُسلوب:',
    image: IMG.friends, paragraph:'الدرس الأول: الصديقان. (ص60)',
    options:[{text:'القصة الحكائية ذات العبرة',correct:true},{text:'الشعر',correct:false},{text:'المقال',correct:false},{text:'الإعلان',correct:false}],
    explanation:'القصة حكائية تروي حدثاً وتستخلص منه عبرة.',goldenRule:'القصة الحكائية = حدث + عبرة.'},

  { id:'u2l1e2', unit:'u2', lesson:'u2l1', page:61, type:'classify', bloom:'evaluate', difficulty:'hard',
    question:'صنّف تصرفات الصديقين: وفيّ أم غادر؟',
    image: IMG.friends, paragraph:'أحداث القصة. (ص60-61)',
    categories:['الصديق الوفيّ','الصديق الغادر'],
    items:[{text:'تظاهر بالموت لينجو',correct_category:0},{text:'تسلّق شجرة وترك صاحبه',correct_category:1},{text:'بقي مع صاحبه',correct_category:0},{text:'هرب وقت الخطر',correct_category:1}],
    explanation:'الوفيّ: تظاهر بالموت وبقي. الغادر: تسلّق وهرب.',goldenRule:'الوفاء = البقاء وقت الخطر.'},

  { id:'u2l1e3', unit:'u2', lesson:'u2l1', page:65, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"الصديق ___ هو من يقف معك وقت الشدّة والرخاء."',
    image: IMG.shake, paragraph:'الصديق الحقيقي. (ص65)',
    blanks:['الحقيقي'], wordBank:['الحقيقي','الكاذب','المنافق'],
    explanation:'الصديق الحقيقي يقف معك دائماً.',goldenRule:'الصديق الحقيقي وقت الشدّة والرخاء.'},

  { id:'u2l1e4', unit:'u2', lesson:'u2l1', page:66, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'في التراكيب اللغوية: يستخدم الطالب أسلوب الاستفهام بـ"متى" للسؤال عن الزمان.',
    image: IMG.book, paragraph:'استخدام الاستفهام بـ(متى). (ص54)',
    correctAnswer:true, explanation:'"متى" تُستخدم للسؤال عن الزمان.',goldenRule:'متى = سؤال عن الزمان.'},

  { id:'u2l1e5', unit:'u2', lesson:'u2l1', page:67, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب الأسئلة حسب أداة الاستفهام: مَن، أين، كيف، متى، لماذا:',
    image: IMG.book, paragraph:'أدوات الاستفهام. (ص54)',
    items:['مَن = الشخص','أين = المكان','كيف = الحال','متى = الزمان'],
    correctOrder:[0,1,2,3], explanation:'الترتيب المنطقي: شخص ← مكان ← حال ← زمان.',goldenRule:'أدوات الاستفهام لها استخداماتها.'},

  { id:'u2l1e6', unit:'u2', lesson:'u2l1', page:68, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الجملة بالأسلوب الاستفهامي المناسب لها:',
    image: IMG.book, paragraph:'استخدام الاستفهام. (ص54)',
    pairs:[{left:'سؤال عن شخص',right:'مَن هذا؟'},{left:'سؤال عن مكان',right:'أين الكتاب؟'},{left:'سؤال عن سبب',right:'لماذا غبت؟'},{left:'سؤال عن حال',right:'كيف حالك؟'}],
    explanation:'مَن: شخص. أين: مكان. لماذا: سبب. كيف: حال.',goldenRule:'لكل سؤال أداته.'},

  { id:'u2l1e7', unit:'u2', lesson:'u2l1', page:63, type:'multipleChoice', bloom:'evaluate', difficulty:'hard',
    question:'ما الصديق الأفضل في الاختيار؟',
    image: IMG.shake, paragraph:'الصديق. (ص65)',
    options:[{text:'الصادق المخلص الوفيّ',correct:true},{text:'الغني الكريم',correct:false},{text:'القريب فقط',correct:false},{text:'القوي الجسم',correct:false}],
    explanation:'أفضل الأصدقاء الصادق المخلص الوفيّ.',goldenRule:'اختر صديقك بأخلاقه لا بغناه.'},

  { id:'u2l1e8', unit:'u2', lesson:'u2l1', page:59, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'أكمل: "نصيد الوحدة الثانية يتحدّث عن ___ والصديق."',
    image: IMG.book, paragraph:'نصيد: الجار والصديق. (ص59)',
    blanks:['الجار'], wordBank:['الجار','الأب','العم'],
    explanation:'النصيد عن الجار والصديق.',goldenRule:'موضوع النصيد: الجار والصديق.'},

  { id:'u2l1e9', unit:'u2', lesson:'u2l1', page:69, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف الكلمات: مفرد مذكر / مفرد مؤنث / جمع؟',
    image: IMG.book, paragraph:'الإفراد والجمع والتذكير والتأنيث. (ص54)',
    categories:['مفرد مذكر','مفرد مؤنث','جمع'],
    items:[{text:'صديق',correct_category:0},{text:'صديقة',correct_category:1},{text:'أصدقاء',correct_category:2},{text:'معلّم',correct_category:0},{text:'معلّمة',correct_category:1},{text:'معلّمون',correct_category:2}],
    explanation:'مذكر: صديق، معلم. مؤنث: صديقة، معلمة. جمع: أصدقاء، معلمون.',goldenRule:'المفرد والمؤنث والجمع لكل منها صيغة.'},

  { id:'u2l1e10', unit:'u2', lesson:'u2l1', page:70, type:'trueFalse', bloom:'apply', difficulty:'medium',
    question:'"كيف حالُك؟" — كلمة "حال" اسم استفهام.',
    image: IMG.book, paragraph:'أسلوب الاستفهام. (ص54)',
    correctAnswer:false, explanation:'"كيف" هي أداة الاستفهام و"حال" اسم عادي.',goldenRule:'"كيف" هي أداة الاستفهام لا "حال".'},

  // ═══ الوحدة 2 / الدرس 2 — أسئلة إضافية ═════════════════════
  { id:'u2l2e1', unit:'u2', lesson:'u2l2', page:71, type:'multipleChoice', bloom:'analyze', difficulty:'medium',
    question:'في صورة الوحدة: رجل يحمل وعاء طعام لجاره. ما الحكمة من ذلك؟',
    image: IMG.help, paragraph:'صور الوحدة الثانية. (ص53)',
    options:[{text:'الكرم وحسن الجوار',correct:true},{text:'التباهي',correct:false},{text:'البيع',correct:false},{text:'الإزعاج',correct:false}],
    explanation:'حمل الطعام للجار دليل الكرم وحسن الجوار.',goldenRule:'الكرم مع الجار خُلق إسلامي.'},

  { id:'u2l2e2', unit:'u2', lesson:'u2l2', page:73, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف الأفعال: من حسن الجوار أم لا؟',
    image: IMG.nb, paragraph:'آداب الجوار. (ص72-76)',
    categories:['حسن الجوار ✅','لا ❌'],
    items:[{text:'إهداء طعام',correct_category:0},{text:'رفع الصوت ليلاً',correct_category:1},{text:'زيارة المريض',correct_category:0},{text:'رمي قمامة',correct_category:1},{text:'إقراض المحتاج',correct_category:0},{text:'الخصام',correct_category:1}],
    explanation:'حسن جوار: إهداء، زيارة، إقراض. سيّئ: صوت، قمامة، خصام.',goldenRule:'حسن الجوار أفعال إيجابية.'},

  { id:'u2l2e3', unit:'u2', lesson:'u2l2', page:76, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب أفعال الجار من الأسهل للأصعب:',
    image: IMG.nb, paragraph:'آداب الجوار. (ص72-76)',
    items:['السلام عند اللقاء','السؤال الدوري','تقديم يد العون','التضحية عند الحاجة'],
    correctOrder:[0,1,2,3], explanation:'أسهل: سلام ← سؤال ← مساعدة ← تضحية.',goldenRule:'مراتب الجوار متصاعدة.'},

  { id:'u2l2e4', unit:'u2', lesson:'u2l2', page:79, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الموقف بالدعاء المناسب:',
    image: IMG.book, paragraph:'أختار الدعاء المناسب. (ص51)',
    pairs:[{left:'جار مريض',right:'طَهُورٌ إن شاء الله'},{left:'طالب ناجح',right:'بارك الله فيك'},{left:'مساعدة',right:'جزاك الله خيراً'},{left:'توفيق',right:'وفّقك الله'}],
    explanation:'لكل موقف دعاء: مريض = طهور. ناجح = بارك. مساعدة = جزاك. توفيق = وفّقك.',goldenRule:'الدعاء يناسب الحال.'},

  { id:'u2l2e5', unit:'u2', lesson:'u2l2', page:81, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'في نشاط "أحوّل" (ص44): جملة "إنَّ الجارَ كريمٌ" — أين علامة النصب؟',
    image: IMG.book, paragraph:'إنّ والنصب. (ص33)',
    options:[{text:'على الراء في "الجار" (كسرة مقدّرة للثقل)',correct:false},{text:'الفتحة على الراء في "الجارَ"',correct:true},{text:'الضمة',correct:false},{text:'الكسرة',correct:false}],
    explanation:'"الجارَ" منصوب بالفتحة الظاهرة على الراء.',goldenRule:'علامة نصب المفرد = الفتحة.'},

  { id:'u2l2e6', unit:'u2', lesson:'u2l2', page:77, type:'trueFalse', bloom:'evaluate', difficulty:'hard',
    question:'حسن التعامل مع الأصدقاء والجيران ييسّر الحياة ويزيد المحبّة.',
    image: IMG.shake, paragraph:'القيم المكتسبة من الوحدة. (ص54)',
    correctAnswer:true, explanation:'حسن التعامل يبني علاقات إيجابية ويزيد المحبّة.',goldenRule:'حسن التعامل = حياة سعيدة.'},

  { id:'u2l2e7', unit:'u2', lesson:'u2l2', page:82, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'أكمل: "صلةُ الرحمِ من أسباب ___ الجنّةِ."',
    image: IMG.book, paragraph:'صلة الرحم. (ص50)',
    blanks:['دخولِ'], wordBank:['دخولِ','خروجِ','بُعدِ'],
    explanation:'صلة الرحم من أسباب دخول الجنة.',goldenRule:'صلة الرحم سبب دخول الجنة.'},

  { id:'u2l2e8', unit:'u2', lesson:'u2l2', page:78, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: يتعلق بالجار أم بالصديق؟',
    image: IMG.nb, paragraph:'أصدقائي وجيراني. (ص54)',
    categories:['يتعلق بالجار','يتعلق بالصديق'],
    items:[{text:'عدم رفع الصوت ليلاً',correct_category:0},{text:'الوفاء وقت الشدّة',correct_category:1},{text:'إهداء الطعام',correct_category:0},{text:'النصح بلطف',correct_category:1},{text:'السلام عند اللقاء',correct_category:0},{text:'الفرح لنجاحه',correct_category:1}],
    explanation:'الجار: صوت، طعام، سلام. الصديق: وفاء، نصح، فرح.',goldenRule:'لكل حق صاحبه.'},

  { id:'u2l2e9', unit:'u2', lesson:'u2l2', page:80, type:'ordering', bloom:'evaluate', difficulty:'hard',
    question:'رتّب من أقل إلى أكثر أهمية في معاملة الجار:',
    image: IMG.nb, paragraph:'معاملة الجار. (ص72-76)',
    items:['الابتسامة عند لقائه','السؤال عن صحته','مساعدته في حاجته','التضحية من أجله'],
    correctOrder:[0,1,2,3], explanation:'ابتسامة ← سؤال ← مساعدة ← تضحية.',goldenRule:'الجوار له مراتب متصاعدة.'},

  { id:'u2l2e10', unit:'u2', lesson:'u2l2', page:82, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة تجمع بين صلة الرحم وحسن الجوار:',
    image: IMG.family, paragraph:'القيم المكتسبة. (ص54)',
    options:[{text:'أصِل رحمي وأُحسن إلى جاري لأفوز برضا ربّي',correct:true},{text:'أهجر أقاربي وأؤذي جاري',correct:false},{text:'أنسى الكل وأبقى وحدي',correct:false},{text:'لا صلة ولا جوار',correct:false}],
    explanation:'الجمع بين صلة الرحم وحسن الجوار يرضي ربّك.',goldenRule:'صلة الرحم + حسن الجوار = رضا الله.'},

  // ═══ أسئلة شاملة على الوحدتين ════════════════════════════════
  { id:'xcomp1', unit:'u1', lesson:'u1l1', page:18, type:'multipleChoice', bloom:'evaluate', difficulty:'hard',
    question:'ما الكفاية اللغوية المستهدفة التي تشمل الاستماع والتحدث والقراءة والكتابة؟',
    image: IMG.book, paragraph:'الكفايات المستهدفة في الوحدة الأولى. (ص18)',
    options:[{text:'كفايات اللغة العربية الأربع',correct:true},{text:'القراءة فقط',correct:false},{text:'الكتابة فقط',correct:false},{text:'النحو فقط',correct:false}],
    explanation:'الكفايات الأربع: استماع + تحدث + قراءة + كتابة.',goldenRule:'اللغة العربية أربع كفايات متكاملة.'},

  { id:'xcomp2', unit:'u2', lesson:'u2l1', page:54, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الوحدة الثانية تُنمّي قيماً تتعلق بالتعاون وحق الصديق والجار.',
    image: IMG.shake, paragraph:'الاتجاهات والقيم في الوحدة الثانية. (ص54)',
    correctAnswer:true, explanation:'الوحدة الثانية تُرسّخ قيم التعاون وحق الجار والصديق.',goldenRule:'قيم الوحدة: تعاون + جار + صديق.'},

  { id:'xcomp3', unit:'u1', lesson:'u1l2', page:18, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'في الكفايات اللغوية: أن يَرتّب الطالب الكلمات مُكوِّناً جملاً يعني:',
    image: IMG.book, paragraph:'الكفايات المستهدفة. (ص18/54)',
    options:[{text:'كفاية التحدث والكتابة',correct:true},{text:'الاستماع فقط',correct:false},{text:'القراءة الصامتة',correct:false},{text:'حفظ المفردات فقط',correct:false}],
    explanation:'ترتيب الكلمات لتكوين جمل كفاية في التحدث والكتابة.',goldenRule:'تكوين الجمل = تحدث + كتابة.'},

  { id:'xcomp4', unit:'u1', lesson:'u1l1', page:16, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'صفحة (16) من الكتاب تُعلّمنا:',
    image: IMG.book, paragraph:'أتعلّم فنّ الخط — قواعد الخط النسخي. (ص16)',
    options:[{text:'قواعد الخط النسخي',correct:true},{text:'قواعد الاستماع',correct:false},{text:'أدوات الاستفهام',correct:false},{text:'صلة الرحم',correct:false}],
    explanation:'ص16 خاصة بتعلّم فنّ الخط النسخي.',goldenRule:'الخط الجميل يعكس الشخصية.'},

  { id:'xcomp5', unit:'u2', lesson:'u2l2', page:82, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب الوحدات الأربع في كتاب لغتي:',
    image: IMG.book, paragraph:'فهرس الكتاب. (ص6)',
    items:['أقاربي','أصدقائي وجيراني','وطني السعودية','محاصيل من بلادي'],
    correctOrder:[0,1,2,3], explanation:'ترتيب الوحدات: أقاربي ← أصدقائي وجيراني ← وطني السعودية ← محاصيل من بلادي.',goldenRule:'ترتيب الوحدات في الكتاب ثابت.'},

  // ═══ دفعة تكميلية — للوصول إلى 400 سؤال ═══════════════════
  {id:'u1l1f1',unit:'u1',lesson:'u1l1',page:27,type:'multipleChoice',bloom:'remember',difficulty:'easy', image:IMG.family,
   question:'من أمر بصلة الرحم في الحديث الشريف؟',paragraph:'رواه البخاري. (ص27)',
   options:[{text:'النبي محمد ﷺ',correct:true},{text:'الوالد',correct:false},{text:'المعلم',correct:false},{text:'الجد',correct:false}],
   explanation:'الحديث قول النبي ﷺ.',goldenRule:'الحديث قول النبي ﷺ.',},

  {id:'u1l1f2',unit:'u1',lesson:'u1l1',page:30,type:'trueFalse',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'التنوين يلحق الأسماء النكرة.',paragraph:'التنوين ظاهرة في الأسماء. (ص18)',
   correctAnswer:true,explanation:'التنوين يلحق الأسماء النكرة.',goldenRule:'التنوين للنكرة.'},

  {id:'u1l1f3',unit:'u1',lesson:'u1l1',page:28,type:'multipleChoice',bloom:'apply',difficulty:'medium', image:IMG.family,
   question:'أيّ العبارات التالية من صلة الرحم؟',paragraph:'صلة الرحم أقوال وأفعال. (ص28)',
   options:[{text:'أتصل بخالي للاطمئنان عليه',correct:true},{text:'لا أزور أقاربي',correct:false},{text:'أنسى أعمامي',correct:false},{text:'أبتعد عن جدي',correct:false}],
   explanation:'الاتصال للاطمئنان صلة رحم.',goldenRule:'الاتصال بالأقارب صلة رحم.'},

  {id:'u1l1f4',unit:'u1',lesson:'u1l1',page:33,type:'fillBlank',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'"___ الإسلامَ رحمةٌ." أكمل.',paragraph:'إنَّ الإسلامَ رحمةٌ. (ص33)',
   blanks:['إنَّ'],wordBank:['إنَّ','أنّ','لكنّ'],
   explanation:'إنَّ حرف توكيد ونصب.',goldenRule:'إنّ = توكيد + نصب.'},

  {id:'u1l1f5',unit:'u1',lesson:'u1l1',page:26,type:'multipleChoice',bloom:'understand',difficulty:'easy', image:IMG.grandpa,
   question:'ما معنى "تأمّل" في النصيد؟',paragraph:'جدّتي — مفجمي الصغير. (ص26)',
   options:[{text:'التفكير والتدبّر',correct:true},{text:'النوم',correct:false},{text:'الهرب',correct:false},{text:'الصراخ',correct:false}],
   explanation:'تأمّل تعني التفكير والتدبّر.',goldenRule:'تأمّل = تفكير + تدبّر.'},

  {id:'u1l1f6',unit:'u1',lesson:'u1l1',page:32,type:'trueFalse',bloom:'apply',difficulty:'easy', image:IMG.family,
   question:'"اللهمّ احفظ وطني" دعاء مناسب لحماية الوطن.',paragraph:'الدعاء يناسب الحال. (ص32)',
   correctAnswer:true,explanation:'الدعاء مناسب للحال: وطن = احفظ.',goldenRule:'الدعاء يناسب الحال.'},

  {id:'u1l1f7',unit:'u1',lesson:'u1l1',page:34,type:'multipleChoice',bloom:'evaluate',difficulty:'hard', image:IMG.book,
   question:'لماذا يُهتم بخطّ التلميذ في كتاب لغتي؟',paragraph:'قواعد الخط النسخي. (ص16)',
   options:[{text:'لأن الخط الجميل يعكس الشخصية ويُسهّل القراءة',correct:true},{text:'لأنه أمر ثانوي',correct:false},{text:'لأنه غير مهم',correct:false},{text:'لأنه سهل',correct:false}],
   explanation:'الخط الجميل يعكس الشخصية ويسهّل التواصل.',goldenRule:'الخط الجميل مرآة الشخصية.'},

  {id:'u1l2f1',unit:'u1',lesson:'u1l2',page:40,type:'multipleChoice',bloom:'understand',difficulty:'easy', image:IMG.class,
   question:'كلمة "حنون" في النص مرادفها:',paragraph:'المعلم: إنّ الجدَّ عطوفٌ حنونٌ. (ص37)',
   options:[{text:'رحيم وعطوف',correct:true},{text:'صارم',correct:false},{text:'غاضب',correct:false},{text:'بعيد',correct:false}],
   explanation:'حنون = رحيم وعطوف.',goldenRule:'حنون = رحيم.'},

  {id:'u1l2f2',unit:'u1',lesson:'u1l2',page:36,type:'trueFalse',bloom:'evaluate',difficulty:'medium', image:IMG.grandpa,
   question:'الغضب دليل على أن الجد يهتم بفوّاز.',paragraph:'غضب الجد. (ص37)',
   correctAnswer:true,explanation:'الغضب أحياناً دليل الاهتمام والحبّ.',goldenRule:'الغضب على الخطأ دليل اهتمام.'},

  {id:'u1l2f3',unit:'u1',lesson:'u1l2',page:38,type:'multipleChoice',bloom:'apply',difficulty:'medium', image:IMG.class,
   question:'"صحِبَ المعلّمُ التلاميذَ إلى المكتبةِ." كلمة "المعلّم" في هذه الجملة:',paragraph:'التراكيب اللغوية. (ص40)',
   options:[{text:'فاعل',correct:true},{text:'مبتدأ',correct:false},{text:'مفعول به',correct:false},{text:'خبر',correct:false}],
   explanation:'"المعلّم" فاعل مرفوع لأنه من قام بالفعل.',goldenRule:'الفاعل يقوم بالفعل وهو مرفوع.'},

  {id:'u1l2f4',unit:'u1',lesson:'u1l2',page:45,type:'fillBlank',bloom:'apply',difficulty:'easy', image:IMG.lib,
   question:'"___ المعلّمُ التلاميذَ إلى مكتبة المدرسة."',paragraph:'جملة الخط. (ص45)',
   blanks:['صَحَبَ'],wordBank:['صَحَبَ','ذهب','هرب'],
   explanation:'صَحَبَ = رافق وصاحب.',goldenRule:'صَحَبَ = رافق.'},

  {id:'u2l1f1',unit:'u2',lesson:'u2l1',page:65,type:'multipleChoice',bloom:'evaluate',difficulty:'hard', image:IMG.shake,
   question:'مَن الذي يستحق لقب "صديق العمر"؟',paragraph:'الصديق الحقيقي. (ص65)',
   options:[{text:'من وقف معك في الشدّة والرخاء',correct:true},{text:'من جلس معك في المقهى',correct:false},{text:'من شاركك الطعام فقط',correct:false},{text:'من يعرفك قليلاً',correct:false}],
   explanation:'صديق العمر يقف في الشدّة والرخاء.',goldenRule:'صديق العمر وفيّ في الشدّة والرخاء.'},

  {id:'u2l1f2',unit:'u2',lesson:'u2l1',page:62,type:'trueFalse',bloom:'evaluate',difficulty:'medium', image:IMG.friends,
   question:'الصديق الذي هرب من الخطر قدّم نموذجاً سيّئاً للصداقة.',paragraph:'الصديق الغادر. (ص61)',
   correctAnswer:true,explanation:'الهروب وترك الصديق نموذج سيّئ للصداقة.',goldenRule:'الهروب من الخطر يهدم الصداقة.'},

  {id:'u2l1f3',unit:'u2',lesson:'u2l1',page:59,type:'multipleChoice',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'في كتاب لغتي ص2 الابتدائي الفصل الأول كم وحدة دراسية؟',paragraph:'فهرس الكتاب. (ص6)',
   options:[{text:'أربع وحدات',correct:true},{text:'ثلاث',correct:false},{text:'خمس',correct:false},{text:'ست',correct:false}],
   explanation:'الكتاب يحتوي أربع وحدات دراسية.',goldenRule:'الكتاب = 4 وحدات.'},

  {id:'u2l1f4',unit:'u2',lesson:'u2l1',page:60,type:'fillBlank',bloom:'understand',difficulty:'easy', image:IMG.book,
   question:'"الصداقة الحقيقية تبنى على ___ و الوفاء."',paragraph:'الصداقة. (ص65)',
   blanks:['الثقة'],wordBank:['الثقة','الخيانة','الكذب'],
   explanation:'الصداقة تبنى على الثقة والوفاء.',goldenRule:'الثقة والوفاء أساس الصداقة.'},

  {id:'u2l2f1',unit:'u2',lesson:'u2l2',page:72,type:'multipleChoice',bloom:'apply',difficulty:'medium', image:IMG.nb,
   question:'إذا سمعت ضجيجاً من منزل جارك ليلاً فعليك:',paragraph:'آداب الجوار. (ص72)',
   options:[{text:'التأكّد من سلامته',correct:true},{text:'تجاهله',correct:false},{text:'رفع الصوت أكثر',correct:false},{text:'الشكوى للجيران',correct:false}],
   explanation:'التأكّد من سلامة الجار عند الضجيج واجب الجوار.',goldenRule:'السؤال عن سلامة الجار واجب.'},

  {id:'u2l2f2',unit:'u2',lesson:'u2l2',page:76,type:'trueFalse',bloom:'evaluate',difficulty:'hard', image:IMG.nb,
   question:'"الجار قبل الدار" يعني أن اختيار الجار أهمّ من اختيار المنزل.',
   paragraph:'"الجار قبل الدار" مثل. (ص76)',
   correctAnswer:true,explanation:'المثل يُعلّم أن الجار الصالح أهمّ من المنزل الجيّد.',goldenRule:'الجار الصالح نعمة.'},

  {id:'u2l2f3',unit:'u2',lesson:'u2l2',page:78,type:'multipleChoice',bloom:'create',difficulty:'hard', image:IMG.family,
   question:'ألّف جملة تجمع صلة الرحم وحسن الجوار والصداقة:',paragraph:'القيم المتكاملة. (ص54)',
   options:[{text:'أصِل رحمي وأكرم جاري وأوفي لصديقي',correct:true},{text:'أهجر الجميع',correct:false},{text:'أنسى الكل',correct:false},{text:'أؤذي الجميع',correct:false}],
   explanation:'الجمع بين صلة الرحم والجوار والصداقة كمال الأخلاق.',goldenRule:'الأخلاق الكاملة = رحم + جار + صديق.'},

  {id:'u2l2f4',unit:'u2',lesson:'u2l2',page:80,type:'trueFalse',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'التراكيب اللغوية في الوحدة الثانية تشمل التضعيف وأسلوب الاستفهام.',
   paragraph:'التراكيب اللغوية في الوحدة الثانية. (ص54)',
   correctAnswer:true,explanation:'الوحدة الثانية تشمل ظاهرة التضعيف وأسلوب الاستفهام.',goldenRule:'تراكيب الوحدة الثانية: تضعيف + استفهام.'},

  {id:'u2l2f5',unit:'u2',lesson:'u2l2',page:75,type:'classify',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'صنّف الكلمات: تنتهي بتاء مفتوحة (ت) أم تاء مربوطة (ة)؟',
   paragraph:'التمييز بين التاء المفتوحة والمربوطة. (ص18)',
   categories:['تاء مفتوحة (ت)','تاء مربوطة (ة)'],
   items:[{text:'لعِبَت',correct_category:0},{text:'مكتبة',correct_category:1},{text:'قرأت',correct_category:0},{text:'مدرسة',correct_category:1},{text:'رأت',correct_category:0},{text:'روضة',correct_category:1}],
   explanation:'مفتوحة: لعبت، قرأت، رأت. مربوطة: مكتبة، مدرسة، روضة.',goldenRule:'التاء المفتوحة في الأفعال، المربوطة في الأسماء غالباً.'},

  {id:'u2l2f6',unit:'u2',lesson:'u2l2',page:74,type:'multipleChoice',bloom:'understand',difficulty:'easy', image:IMG.nb,
   question:'ما الفرق بين الجار والصديق؟',paragraph:'أصدقائي وجيراني. (ص54)',
   options:[{text:'الجار يجاورك في السكن، والصديق يجمعك به المحبّة والاختيار',correct:true},{text:'لا فرق بينهما',correct:false},{text:'الجار أهمّ دائماً',correct:false},{text:'الصديق لا يهمّ',correct:false}],
   explanation:'الجار جوار مكاني، والصديق جوار اختياري قائم على المحبّة.',goldenRule:'الجار = مكاني. الصديق = اختياري.'},

  {id:'u2l2f7',unit:'u2',lesson:'u2l2',page:77,type:'fillBlank',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'أكمل: "جمع "جار" هو ___ ."',paragraph:'الإفراد والجمع. (ص54)',
   blanks:['جيران'],wordBank:['جيران','جارون','جارات'],
   explanation:'جمع جار = جيران.',goldenRule:'جار ← جيران.'},

  {id:'u2l2f8',unit:'u2',lesson:'u2l2',page:79,type:'trueFalse',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'كلمة "مكتبةٌ" تنتهي بتاء مربوطة.',paragraph:'التاء المفتوحة والمربوطة. (ص18)',
   correctAnswer:true,explanation:'مكتبة تنتهي بتاء مربوطة.',goldenRule:'مكتبة = تاء مربوطة.'},

  {id:'xgen1',unit:'u1',lesson:'u1l1',page:7,type:'multipleChoice',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'في صفحة "مراجعة مكتسباتي السابقة" (ص7): ما أول حرف في الجدول الأول؟',paragraph:'مراجعة المكتسبات السابقة. (ص7)',
   options:[{text:'أ',correct:true},{text:'ب',correct:false},{text:'ت',correct:false},{text:'ث',correct:false}],
   explanation:'الجدول يبدأ بحرف الألف.',goldenRule:'الحروف تُكتب مع كلمات مصاحبة.'},

  {id:'xgen2',unit:'u1',lesson:'u1l1',page:8,type:'trueFalse',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'في نشاط "اقرأ ثم ارسم خطاً": التاء المفتوحة تختلف عن التاء المربوطة في طريقة نطقها.',paragraph:'التاء المفتوحة والمربوطة. (ص8)',
   correctAnswer:true,explanation:'التاء المفتوحة تُنطق تاءً دائماً. المربوطة قد تُنطق "ة" أو "ت".',goldenRule:'التاء المفتوحة دائماً تاء. المربوطة هاء في الوقف.'},

  {id:'xgen3',unit:'u1',lesson:'u1l1',page:11,type:'multipleChoice',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'في نشاط "أرتّب الكلمات" (ص14): الجملة "أحبّ ـ الشاطئَ ـ النظيف" مرتّبة تصبح:',paragraph:'أرتّب الكلمات لأكوّن جملة. (ص14)',
   options:[{text:'أحبّ الشاطئَ النظيف',correct:true},{text:'النظيف الشاطئَ أحبّ',correct:false},{text:'الشاطئَ أحبّ النظيف',correct:false},{text:'أحبّ النظيف الشاطئَ',correct:false}],
   explanation:'الجملة الصحيحة: أحبّ الشاطئَ النظيف.',goldenRule:'الفعل ← المفعول ← الصفة.'},

  {id:'xgen4',unit:'u2',lesson:'u2l2',page:16,type:'multipleChoice',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'صفحة (16) من الكتاب تتحدث عن فنّ الخط. ما عدد الأسطر المُحدِّدة لكتابة الحروف؟',paragraph:'أتعلّم فنّ الخط. (ص16)',
   options:[{text:'أربعة أسطر',correct:true},{text:'سطران',correct:false},{text:'ثلاثة أسطر',correct:false},{text:'خمسة أسطر',correct:false}],
   explanation:'في الخط النسخي تُحدِّد كتابة الحروف أربعة أسطر.',goldenRule:'الخط النسخي = 4 أسطر.'},

  {id:'xgen5',unit:'u1',lesson:'u1l1',page:15,type:'trueFalse',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'في كلمة "القمر" — ال قمرية لأن القاف حرف قمري.',paragraph:'ال القمرية. (ص30)',
   correctAnswer:true,explanation:'القاف حرف قمري فاللام تُنطق في "القمر".',goldenRule:'القاف = حرف قمري.'},

  {id:'xgen6',unit:'u1',lesson:'u1l2',page:16,type:'multipleChoice',bloom:'analyze',difficulty:'hard', image:IMG.book,
   question:'في الخط: الحروف التي تنزل تحت السطر مثل (ح، ج، ع)، ما خطّها؟',paragraph:'الخط السفلي. (ص16)',
   options:[{text:'الخط السفلي',correct:true},{text:'الخط العلوي',correct:false},{text:'الخط الوهمي',correct:false},{text:'الخط الوسط',correct:false}],
   explanation:'ج، ح، ع، غ تنزل للخط السفلي.',goldenRule:'الخط السفلي للحروف النازلة.'},

  {id:'xgen7',unit:'u2',lesson:'u2l1',page:55,type:'matching',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'صِل الوحدة بالدرس الأول الذي يتضمّنه:',paragraph:'فهرس الكتاب. (ص6)',
   pairs:[{left:'الوحدة الأولى',right:'صلة الرحم'},{left:'الوحدة الثانية',right:'الصديقان'},{left:'الوحدة الثالثة',right:'مدينتان مقدّستان'}],
   explanation:'درس 1 الوحدة 1: صلة الرحم. درس 1 الوحدة 2: الصديقان. درس 1 الوحدة 3: مدينتان مقدّستان.',goldenRule:'كل وحدة لها درسان.'},

  {id:'xgen8',unit:'u1',lesson:'u1l1',page:13,type:'multipleChoice',bloom:'apply',difficulty:'easy', image:IMG.book,
   question:'في نشاط (ص12): "أدخل (ال) على الكلمة ثم أكتبها في المكان المناسب". كلمة "بحر" بـ(ال الشمسية أم القمرية)؟',paragraph:'ال القمرية: الباء حرف قمري. (ص30)',
   options:[{text:'ال القمرية',correct:true},{text:'ال الشمسية',correct:false},{text:'لا تقبل ال',correct:false},{text:'كلتيهما',correct:false}],
   explanation:'الباء حرف قمري فاللام في "البحر" تُنطق.',goldenRule:'البحر: ال قمرية.'},

  {id:'xgen9',unit:'u2',lesson:'u2l2',page:82,type:'multipleChoice',bloom:'evaluate',difficulty:'hard', image:IMG.book,
   question:'عبارة "الجار قبل الدار والصديق قبل الطريق" تُعبّر عن:',paragraph:'حسن الجوار والصداقة. (ص76)',
   options:[{text:'أهمية اختيار الجار الصالح والصديق الوفيّ',correct:true},{text:'أهمية اختيار المنزل الكبير',correct:false},{text:'أهمية الطريق الطويل',correct:false},{text:'لا معنى لها',correct:false}],
   explanation:'المثل يُعلّم أن الجار والصديق أهمّ من المكان والطريق.',goldenRule:'الجار الصالح والصديق الوفيّ أثمن من أي شيء.'},

  {id:'xgen10',unit:'u1',lesson:'u1l2',page:36,type:'multipleChoice',bloom:'create',difficulty:'hard', image:IMG.class,
   question:'لو كنت مكان فوّاز ماذا تفعل عندما يطلب منك جدّك شيئاً؟',paragraph:'موقف فوّاز. (ص36)',
   options:[{text:'أُسرع إلى تنفيذ طلبه فوراً',correct:true},{text:'أتجاهله',correct:false},{text:'أقول له: لديّ وقت فراغ',correct:false},{text:'أعود إليه لاحقاً',correct:false}],
   explanation:'طاعة الجد الفورية أدب وواجب.',goldenRule:'الطاعة الفورية أفضل الاستجابات.'},

  {id:'xfin1',unit:'u1',lesson:'u1l1',page:29,type:'trueFalse',bloom:'analyze',difficulty:'medium', image:IMG.book,
   question:'في كلمة "الرحم" — الراء حرف شمسي.',paragraph:'ال الشمسية. (ص30)',
   correctAnswer:true,explanation:'الراء حرف شمسي فاللام في "الرحم" لا تُنطق.',goldenRule:'الراء = حرف شمسي.'},

  {id:'xfin2',unit:'u1',lesson:'u1l1',page:26,type:'multipleChoice',bloom:'remember',difficulty:'easy', image:IMG.grandpa,
   question:'كم بيت في نصيد "جدّتي"؟',paragraph:'نصيد جدّتي. (ص26)',
   options:[{text:'ستة أبيات',correct:true},{text:'ثلاثة أبيات',correct:false},{text:'عشرة',correct:false},{text:'اثنان',correct:false}],
   explanation:'النصيد يتضمن ستة أبيات.',goldenRule:'النصيد = 6 أبيات.'},

  {id:'xfin3',unit:'u1',lesson:'u1l2',page:40,type:'fillBlank',bloom:'remember',difficulty:'easy', image:IMG.book,
   question:'ضدّ كلمة "يساعد" هو "___ ".',paragraph:'الأضداد. (ص42)',
   blanks:['يتركُ'],wordBank:['يتركُ','يحبّ','يزور'],
   explanation:'ضد يساعد = يترك.',goldenRule:'يساعد × يترك.'},

  {id:'xfin4',unit:'u2',lesson:'u2l1',page:61,type:'multipleChoice',bloom:'understand',difficulty:'easy', image:IMG.friends,
   question:'الدبّ في القصة ترك الصديق الذي تظاهر بالموت لأن:',paragraph:'الدبّ لا يأكل الميت. (ص61)',
   options:[{text:'الدبّ لا يأكل الميت',correct:true},{text:'الدبّ رحيم',correct:false},{text:'الدبّ خائف',correct:false},{text:'الدبّ نائم',correct:false}],
   explanation:'الدبّ لا يأكل الجثث فتركه.',goldenRule:'الذكاء يستثمر معرفة سلوك الخطر.'},

  {id:'xfin5',unit:'u2',lesson:'u2l2',page:76,type:'trueFalse',bloom:'apply',difficulty:'easy', image:IMG.nb,
   question:'"بارك الله فيك" دعاء مناسب لشكر من أسدى إليك معروفاً.',paragraph:'الدعاء. (ص51)',
   correctAnswer:true,explanation:'"بارك الله فيك" دعاء للشكر والتقدير.',goldenRule:'بارك الله فيك = شكر بالدعاء.'},

  {id:'xfin6',unit:'u1',lesson:'u1l1',page:33,type:'multipleChoice',bloom:'analyze',difficulty:'hard', image:IMG.book,
   question:'"إنَّ الصلةَ واجبةٌ" — كم من حرف ناسخ في هذه الجملة؟',paragraph:'إنّ وأخواتها. (ص33)',
   options:[{text:'واحد (إنَّ)',correct:true},{text:'اثنان',correct:false},{text:'ثلاثة',correct:false},{text:'لا يوجد',correct:false}],
   explanation:'الجملة تحتوي حرفاً ناسخاً واحداً هو "إنَّ".',goldenRule:'إنّ حرف ناسخ واحد.'},

  {id:'xfin7',unit:'u2',lesson:'u2l2',page:72,type:'fillBlank',bloom:'remember',difficulty:'easy', image:IMG.nb,
   question:'جمع كلمة "جارٌ" هو "___ ".',paragraph:'الإفراد والجمع. (ص54)',
   blanks:['جِيرانٌ'],wordBank:['جِيرانٌ','جارون','جارات'],
   explanation:'جار ← جيران.',goldenRule:'جار ← جيران.'},

  {id:'xfin8',unit:'u1',lesson:'u1l2',page:43,type:'trueFalse',bloom:'apply',difficulty:'medium', image:IMG.book,
   question:'"طاعةَ الجد واجبةٌ" — كلمة "طاعة" هنا اسم إنّ منصوب.',paragraph:'إنَّ طاعةَ الجد واجبةٌ. (ص43)',
   correctAnswer:true,explanation:'"طاعة" اسم إنّ منصوب بالفتحة.',goldenRule:'اسم إنّ منصوب دائماً.'},
];