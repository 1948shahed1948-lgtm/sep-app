// مولّد موحّد للبنوك التفاعلية — ١٨ تمرينًا لكل درس بأنماط متنوعة.
// الأنواع: وصل · تصنيف · ترتيب · نعم/لا · ما هذا؟ · كم عدد؟ · معلومة
// mode: 'letter' (لغتي/الإنجليزية — العنصر = حرف، الترتيب = حروف الوحدة)
//     | 'topic'  (المهارات/العلوم — العنصر = عنوان الدرس، الترتيب = خطوات الدرس)

export const EXERCISES_PER_LESSON = 18;

export function makeBankGenerator(units, wordEmoji, mode) {
  const emoji = (w) => (wordEmoji[w] || '❓');
  const allLessons = units.flatMap((u, ui) => u.lessons.map((l, li) => ({ ...l, unitIdx: ui, lessonIdx: li, unit: u })));
  const totalLessons = allLessons.length;
  const totalQuestions = totalLessons * EXERCISES_PER_LESSON;

  const labelOf = (lesson) => (mode === 'letter' ? lesson.letter : lesson.title_ar);
  const orderingOf = (lesson, unit) => (mode === 'letter' ? unit.lessons.map((l) => l.letter) : lesson.ordering_items);
  const starts = (label) => (mode === 'letter' ? `يبدأ بـ(${label})` : `من درس ${label}`);
  const notStarts = (label) => (mode === 'letter' ? `لا يبدأ بـ(${label})` : `ليس من درس ${label}`);
  const matchPrompt = mode === 'letter' ? `صِل الحرف بالصورة التي تبدأ به` : `صِل الكلمة بالصورة التي تدل عليها`;
  const classifyQ = (label) => (mode === 'letter' ? `ما الذي يبدأ بحرف (${label})؟` : `ما الذي ينتمي إلى درس «${label}»؟`);
  const belongs = (label) => (mode === 'letter' ? `تبدأ بـ(${label})` : `من درس «${label}»`);
  const toArNum = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

  function pickOthers(pool, idx, count) {
    const out = [];
    for (let i = 1; i <= count; i++) out.push(pool[(idx + i) % pool.length]);
    return out;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getExercisesForLesson(unitIdx, lessonIdx) {
    const unit = units[unitIdx];
    const me = unit.lessons[lessonIdx];
    const label = labelOf(me);
    const words = me.words;
    const orderSeq = orderingOf(me, unit);
    const pool = mode === 'letter' ? unit.lessons : allLessons;
    const myIdx = mode === 'letter' ? lessonIdx : allLessons.findIndex((l) => l.unitIdx === unitIdx && l.lessonIdx === lessonIdx);
    const others4 = pickOthers(pool, myIdx, 4);
    const others3 = others4.slice(0, 3);
    const others2 = others4.slice(0, 2);
    const out = [];

    // ١: وصل (٣ عناصر)
    {
      const trio = [me, ...others3];
      out.push({
        type: 'matching',
        question_ar: matchPrompt,
        matching_pairs_ar: trio.map((l) => ({ left: labelOf(l), right: emoji(l.words[0]), word: l.words[0] })),
        explanation_ar: mode === 'letter'
          ? `الحرف (${label}) يبدأ به «${words[0]}» ${emoji(words[0])}.`
          : `كلمة «${words[0]}» تدل عليها الصورة ${emoji(words[0])}.`,
        golden_rule_ar: mode === 'letter' ? `الكلمة التي تبدأ بـ(${label}) أول حرف فيها هو (${label}).` : `كل كلمة لها صورة تعبّر عن معناها.`,
      });
    }

    // ٢: ما هذا؟ (إيموجي ← كلمة) — تنويع بصري
    {
      const correct = words[0];
      const distractors = shuffle([others3[0].words[0], others3[1].words[0], others3[2].words[0]]).slice(0, 2);
      const opts = shuffle([correct, ...distractors]);
      out.push({
        type: 'identify',
        question_ar: 'ما هذا؟',
        visual_emoji: emoji(correct),
        options_ar: opts,
        correct_index: opts.indexOf(correct),
        explanation_ar: `هذه صورة ${emoji(correct)} واسمها «${correct}»${mode === 'letter' ? ` وتبدأ بـ(${label})` : ''}.`,
        golden_rule_ar: `انظر للصورة واستخرج اسمها.`,
      });
    }

    // ٣: تصنيف ثنائي (٤ صور)
    {
      const same = [words[0], words[1 % words.length]];
      const diff = [others3[0].words[0], others3[1].words[0]];
      out.push({
        type: 'classify',
        question_ar: `صنّف الصور: ${classifyQ(label)}`,
        classify_categories_ar: [starts(label), notStarts(label)],
        classify_items_ar: [
          ...same.map((w) => ({ item: emoji(w), word: w, correct_category: 0 })),
          ...diff.map((w) => ({ item: emoji(w), word: w, correct_category: 1 })),
        ],
        explanation_ar: `الصور ${same.map((w) => emoji(w) + '«' + w + '»').join(' و')} ${belongs(label)}.`,
        golden_rule_ar: `كل صورة تنتمي للعنصر الذي تتعلمه.`,
      });
    }

    // ٤: نعم/لا — سؤال بصري
    {
      const isYes = Math.random() > 0.5;
      const targetWord = isYes ? words[0] : others3[0].words[0];
      out.push({
        type: 'yesno',
        question_ar: mode === 'letter'
          ? `هل تبدأ كلمة «${targetWord}» بالحرف (${label})؟`
          : `هل تنتمي «${targetWord}» إلى درس «${label}»؟`,
        visual_emoji: emoji(targetWord),
        options_ar: ['نعم', 'لا'],
        correct_index: isYes ? 0 : 1,
        explanation_ar: isYes
          ? `نعم، «${targetWord}» ${belongs(label)}.`
          : `لا، «${targetWord}» ${mode === 'letter' ? 'لا يبدأ بـ' : 'ليس من درس'} (${label}).`,
        golden_rule_ar: `اختبار الانتماء يثبّت المعلومة.`,
      });
    }

    // ٥: كم عدد؟ — عدّ بصري
    {
      const count = 2 + Math.floor(Math.random() * 4); // ٢–٥
      const countWord = words[0];
      const emojis = Array(count).fill(emoji(countWord));
      const nums = shuffle([count, count + 1, count - 1].filter((n) => n > 0)).slice(0, 3);
      if (!nums.includes(count)) nums[0] = count;
      const shuffledNums = shuffle(nums);
      out.push({
        type: 'count',
        question_ar: `كم عدد ${emoji(countWord)} «${countWord}»؟`,
        visual_emojis: emojis,
        options_ar: shuffledNums.map(toArNum),
        correct_index: shuffledNums.indexOf(count),
        explanation_ar: `عدّنا الصور: ${toArNum(count)} ${emoji(countWord)}.`,
        golden_rule_ar: `عُدّ كل صورة واحدة بواحدة.`,
      });
    }

    // ٦: ترتيب التسلسل كاملًا
    out.push({
      type: 'ordering',
      question_ar: mode === 'letter'
        ? `رتّب حروف وحدة «${unit.title_ar}» كما درستها`
        : `رتّب خطوات درس «${label}» بالترتيب الصحيح`,
      ordering_items_ar: orderSeq,
      explanation_ar: `الترتيب الصحيح: ${orderSeq.join(' ← ')}.`,
      golden_rule_ar: `الترتيب الصحيح يثبّت المعلومة.`,
    });

    // ٧: وصل (٤ عناصر)
    {
      const four = [me, ...others3];
      out.push({
        type: 'matching',
        question_ar: `${matchPrompt} (٤ عناصر)`,
        matching_pairs_ar: four.map((l) => ({ left: labelOf(l), right: emoji(l.words[0]), word: l.words[0] })),
        explanation_ar: mode === 'letter' ? `الحرف (${label}) يبدأ به ${emoji(words[0])} «${words[0]}».` : `كلمة «${words[0]}» → ${emoji(words[0])}.`,
        golden_rule_ar: `اربط العنصر بصورته.`,
      });
    }

    // ٨: معلومة — سؤال معرفة
    {
      const correct = words[0];
      const distractors = shuffle([others3[0].words[0], others3[1].words[0], others3[2].words[0]]).slice(0, 2);
      const opts = shuffle([correct, ...distractors]);
      out.push({
        type: 'info',
        question_ar: mode === 'letter'
          ? `أيٌّ من هذه الكلمات يبدأ بالحرف (${label})؟`
          : `أيٌّ من هذه ينتمي إلى درس «${label}»؟`,
        options_ar: opts,
        correct_index: opts.indexOf(correct),
        explanation_ar: `«${correct}» ${belongs(label)}.`,
        golden_rule_ar: `كل كلمة تنتمي لعنصرها.`,
      });
    }

    // ٩: تصنيف ثلاثي (٦ صور)
    {
      const cats = [me, others2[0], others2[1]];
      out.push({
        type: 'classify',
        question_ar: `صنّف الصور حسب ${mode === 'letter' ? 'الحرف الذي تبدأ به' : 'الدرس الذي تنتمي إليه'}`,
        classify_categories_ar: cats.map((c) => starts(labelOf(c))),
        classify_items_ar: [
          ...me.words.slice(0, 2).map((w) => ({ item: emoji(w), word: w, correct_category: 0 })),
          ...others2[0].words.slice(0, 2).map((w) => ({ item: emoji(w), word: w, correct_category: 1 })),
          ...others2[1].words.slice(0, 2).map((w) => ({ item: emoji(w), word: w, correct_category: 2 })),
        ],
        explanation_ar: `صور ${emoji(me.words[0])} و${emoji(me.words[1])} ${belongs(label)}.`,
        golden_rule_ar: `كل صورة تنتمي لعنصرها.`,
      });
    }

    // ١٠: ما هذا؟ (كلمة ← إيموجي) — عكسي
    {
      const correct = words[1 % words.length];
      const distractors = shuffle([others3[0].words[0], others3[1].words[0]]).slice(0, 2);
      const opts = shuffle([emoji(correct), ...distractors.map(emoji)]);
      const correctEmoji = emoji(correct);
      out.push({
        type: 'identify',
        question_ar: `أيٌّ من هذه الصور هي «${correct}»؟`,
        visual_emoji: null,
        options_ar: opts,
        correct_index: opts.indexOf(correctEmoji),
        explanation_ar: `«${correct}» صورتها ${correctEmoji}.`,
        golden_rule_ar: `كل كلمة لها صورة تعبّر عنها.`,
      });
    }

    // ١١: نعم/لا — سؤال معرفة
    {
      const isYes = Math.random() > 0.5;
      const correctWord = isYes ? words[0] : others3[1].words[0];
      const otherLabel = labelOf(others3[0]);
      const askLabel = isYes ? label : otherLabel;
      out.push({
        type: 'yesno',
        question_ar: mode === 'letter'
          ? `هل صورة ${emoji(correctWord)} «${correctWord}» تبدأ بـ(${askLabel})؟`
          : `هل «${correctWord}» من درس «${askLabel}»؟`,
        visual_emoji: emoji(correctWord),
        options_ar: ['نعم', 'لا'],
        correct_index: isYes ? 0 : 1,
        explanation_ar: isYes
          ? `نعم، ${emoji(correctWord)} «${correctWord}» ${belongs(askLabel)}.`
          : `لا، ${emoji(correctWord)} «${correctWord}» لا ${belongs(askLabel)}.`,
        golden_rule_ar: `تأكد من الانتماء قبل الإجابة.`,
      });
    }

    // ١٢: كم عدد؟ — عدّ مختلط
    {
      const count = 3 + Math.floor(Math.random() * 3); // ٣–٥
      const targetWord = words[0];
      const fillers = [others3[0].words[0], others3[1].words[0]];
      const items = [];
      for (let i = 0; i < count; i++) items.push(emoji(targetWord));
      for (let i = 0; i < 2; i++) items.push(emoji(fillers[i]));
      const shuffledItems = shuffle(items);
      const nums = shuffle([count, count + 1, count + 2]);
      out.push({
        type: 'count',
        question_ar: `كم عدد ${emoji(targetWord)} «${targetWord}» فقط؟`,
        visual_emojis: shuffledItems,
        options_ar: nums.map(toArNum),
        correct_index: nums.indexOf(count),
        explanation_ar: `عدّنا ${emoji(targetWord)} فقط: ${toArNum(count)}.`,
        golden_rule_ar: `عُدّ نوعاً واحداً فقط وتجاهل الباقي.`,
      });
    }

    // ١٣: ترتيب أول ٣
    {
      const sub = orderSeq.slice(0, Math.min(3, orderSeq.length));
      out.push({
        type: 'ordering',
        question_ar: `رتّب هذه العناصر الثلاثة بترتيبها الصحيح`,
        ordering_items_ar: sub,
        explanation_ar: `الترتيب الصحيح: ${sub.join(' ← ')}.`,
        golden_rule_ar: `ابدأ بالأول ثم الذي يليه.`,
      });
    }

    // ١٤: معلومة — ما الأول؟
    {
      const correct = mode === 'letter' ? label : words[0];
      const distractors = mode === 'letter'
        ? shuffle([labelOf(others3[0]), labelOf(others3[1])]).slice(0, 2)
        : shuffle([others3[0].words[0], others3[1].words[0]]).slice(0, 2);
      const opts = shuffle([correct, ...distractors]);
      out.push({
        type: 'info',
        question_ar: mode === 'letter'
          ? `ما الحرف الذي يبدأ به «${words[0]}»؟`
          : `ما الكلمة التي تتعلمها في هذا الدرس؟`,
        visual_emoji: mode === 'letter' ? emoji(words[0]) : null,
        options_ar: opts,
        correct_index: opts.indexOf(correct),
        explanation_ar: mode === 'letter'
          ? `«${words[0]}» ${emoji(words[0])} يبدأ بـ(${label}).`
          : `تتعلم في هذا الدرس: «${words[0]}» ${emoji(words[0])}.`,
        golden_rule_ar: `استحضر ما تعلمته في الدرس.`,
      });
    }

    // ١٥: وصل (٥ عناصر)
    {
      const five = [me, ...others4];
      out.push({
        type: 'matching',
        question_ar: `${matchPrompt} (٥ عناصر)`,
        matching_pairs_ar: five.map((l) => ({ left: labelOf(l), right: emoji(l.words[0]), word: l.words[0] })),
        explanation_ar: mode === 'letter' ? `الحرف (${label}) يبدأ به ${emoji(words[0])} «${words[0]}».` : `كلمة «${words[0]}» → ${emoji(words[0])}.`,
        golden_rule_ar: `اربط العنصر بصورته.`,
      });
    }

    // ١٦: تصنيف ثنائي (٦ صور)
    {
      const same = words.slice(0, 3);
      const diff = [others3[0].words[0], others3[1].words[0], others3[2].words[0]];
      out.push({
        type: 'classify',
        question_ar: `صنّف الصور (٦ صور): ${classifyQ(label)}`,
        classify_categories_ar: [starts(label), notStarts(label)],
        classify_items_ar: [
          ...same.map((w) => ({ item: emoji(w), word: w, correct_category: 0 })),
          ...diff.map((w) => ({ item: emoji(w), word: w, correct_category: 1 })),
        ],
        explanation_ar: `الصور ${same.map((w) => emoji(w) + '«' + w + '»').join('، ')} ${belongs(label)}.`,
        golden_rule_ar: `انظر للصورة وحدد انتماءها.`,
      });
    }

    // ١٧: نعم/لا — سؤال مقارنة
    {
      const isSameGroup = Math.random() > 0.5;
      const w1 = words[0];
      const w2 = isSameGroup ? words[1 % words.length] : others3[2].words[0];
      out.push({
        type: 'yesno',
        question_ar: `هل ${emoji(w1)} و${emoji(w2)} ${mode === 'letter' ? 'يبدآن بنفس الحرف؟' : 'من نفس الدرس؟'}`,
        visual_emoji: null,
        options_ar: ['نعم', 'لا'],
        correct_index: isSameGroup ? 0 : 1,
        explanation_ar: isSameGroup
          ? `نعم، ${emoji(w1)} «${w1}» و${emoji(w2)} «${w2}» ${mode === 'letter' ? `يبدآن بـ(${label})` : `من درس «${label}»`}.`
          : `لا، ${emoji(w1)} «${w1}» ${belongs(label)} أمّا ${emoji(w2)} «${w2}» فلا.`,
        golden_rule_ar: `قارن العنصرين قبل الإجابة.`,
      });
    }

    // ١٨: ترتيب (٤ عناصر)
    {
      const n = Math.min(4, orderSeq.length);
      const sub = orderSeq.slice(0, n);
      out.push({
        type: 'ordering',
        question_ar: `رتّب هذه العناصر (${toArNum(n)}) بترتيبها الصحيح`,
        ordering_items_ar: sub,
        explanation_ar: `الترتيب الصحيح: ${sub.join(' ← ')}.`,
        golden_rule_ar: `التزام الترتيب يثبّت المعلومة.`,
      });
    }

    // تفصيل المعلم لكل تمرين
    out.forEach((e) => {
      if (e.type === 'matching') {
        e.detail_ar = mode === 'letter'
          ? `تأمل العنصر، ثم نطّق اسم الصورة، وأول صوت في الاسم هو الحرف — وصّله به.`
          : `تأمل الصورة، واستحضر معناها، ثم وصّلها بالكلمة التي تدل عليها.`;
      } else if (e.type === 'classify') {
        e.detail_ar = `انظر لكل صورة، حدد العنصر الذي تنتمي إليه، ثم ضعها في الفئة الصحيحة.`;
      } else if (e.type === 'ordering') {
        e.detail_ar = `اقرأ كل العناصر أولًا، استحضر الترتيب الذي تعلمته، ثم رتّبها من الأول إلى الأخير.`;
      } else if (e.type === 'yesno') {
        e.detail_ar = `انظر للصورة وفكّر في الانتماء، ثم أجب بنعم أو لا فقط.`;
      } else if (e.type === 'identify') {
        e.detail_ar = `تأمل الصورة جيداً، استخرج اسمها، ثم اختر الكلمة الصحيحة.`;
      } else if (e.type === 'count') {
        e.detail_ar = `عُدّ الصور المطلوبة واحدة بواحدة، ثم اختر العدد الصحيح.`;
      } else if (e.type === 'info') {
        e.detail_ar = `استحضر ما تعلمته في الدرس، فكّر في كل خيار، ثم اختر الإجابة الصحيحة.`;
      }
    });
    return out;
  }

  // سُلّم تكيفي: صعب ← متوسط ← سهل
  function getAdaptiveLadder(unitIdx, lessonIdx) {
    const unit = units[unitIdx];
    const me = unit.lessons[lessonIdx];
    const label = labelOf(me);
    const words = me.words;
    const pool = mode === 'letter' ? unit.lessons : allLessons;
    const myIdx = mode === 'letter' ? lessonIdx : allLessons.findIndex((l) => l.unitIdx === unitIdx && l.lessonIdx === lessonIdx);
    const others = pickOthers(pool, myIdx, 3);
    const w0 = words[0];
    const w1 = words[1 % words.length];
    const ow0 = others[0].words[0];
    const ow1 = others[1].words[0];
    const otherLabel = labelOf(others[0]);

    if (mode === 'letter') {
      return [
        {
          level: 'hard',
          question_ar: `أيٌّ من هذه الكلمات لا يبدأ بالحرف (${label})؟`,
          options_ar: [w0, w1, ow0, ow1],
          correct_value: ow0,
          explanation_ar: `كلمتا «${w0}» و«${w1}» يبدآن بالحرف (${label})، أمّا «${ow0}» فتبدأ بحرف آخر.`,
          detail_ar: `نطّق كل كلمة، واستمع لأول صوت فيها: إن كان (${label}) فهي تنتمي للحرف.`,
          golden_rule_ar: `أول حرف في الكلمة يحدد الحرف الذي تنتمي إليه.`,
        },
        {
          level: 'medium',
          question_ar: `أيٌّ من هذه الصور يبدأ بالحرف (${label})؟`,
          options_ar: [emoji(w0), emoji(ow0), emoji(ow1)],
          correct_value: emoji(w0),
          explanation_ar: `صورة ${emoji(w0)} = «${w0}» وتبدأ بالحرف (${label}).`,
          detail_ar: `تأمل الصورة، سمِّها، ثم اختبر أول حرف في اسمها.`,
          golden_rule_ar: `الصورة ← اسم ← أول حرف.`,
        },
        {
          level: 'easy',
          question_ar: `الحرف (${label}) يبدأ به اسم:`,
          options_ar: [w0, ow0],
          correct_value: w0,
          explanation_ar: `«${w0}» يبدأ بالحرف (${label}).`,
          detail_ar: `نطّق «${w0}» ببطء: أول صوت تسمعه هو (${label}).`,
          golden_rule_ar: `أول صوت في الاسم = الحرف.`,
        },
      ];
    }

    return [
      {
        level: 'hard',
        question_ar: `أيٌّ من هذه لا ينتمي إلى درس «${label}»؟`,
        options_ar: [w0, w1, ow0, ow1],
        correct_value: ow0,
        explanation_ar: `«${w0}» و«${w1}» من درس «${label}»، أمّا «${ow0}» فمن درس آخر.`,
        detail_ar: `استحضر ما تعلمته في درس «${label}»، ثم اختبر كل عنصر.`,
        golden_rule_ar: `كل عنصر ينتمي للدرس الذي تعلمته فيه.`,
      },
      {
        level: 'medium',
        question_ar: `أيٌّ من هذه الصور من درس «${label}»؟`,
        options_ar: [emoji(w0), emoji(ow0), emoji(ow1)],
        correct_value: emoji(w0),
        explanation_ar: `صورة ${emoji(w0)} = «${w0}» ومن درس «${label}».`,
        detail_ar: `تأمل الصورة، وتذكّر إن كانت من مفاهيم درس «${label}».`,
        golden_rule_ar: `الصورة ← معناها ← درسها.`,
      },
      {
        level: 'easy',
        question_ar: `صورة ${emoji(w0)} تنتمي إلى درس:`,
        options_ar: [label, otherLabel],
        correct_value: label,
        explanation_ar: `صورة ${emoji(w0)} = «${w0}» وهي من درس «${label}».`,
        detail_ar: `تذكّر أن «${w0}» تعلمته في درس «${label}».`,
        golden_rule_ar: `كل صورة تنتمي لدرسها.`,
      },
    ];
  }

  return { getExercisesForLesson, getAdaptiveLadder, totalLessons, totalQuestions, exercisesPerLesson: EXERCISES_PER_LESSON };
}