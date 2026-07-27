// مولّد أسئلة علمية تفاعلي — ينتج ٥٠ سؤالاً متنوعاً لكل درس
// الأنواع: اختيار من متعدد · صح/خطأ · تصنيف · مطابقة · ترتيب · تعبئة
// المصدر: محتوى دروس كتاب علوم الصف الخامس الفصل الثاني ١٤٤٧هـ

export const QUESTIONS_PER_LESSON = 50;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickN(pool, n) {
  return shuffle(pool).slice(0, n);
}

function toAr(n) { return String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]); }

// يولّد ٥٠ سؤالاً متنوعاً من بيانات الدرس
// بيانات الدرس: { terms: [{term, definition}], facts: [string], classifySets: [{question, categories, items}], ordering: {question, steps}, concepts: [string] }
export function generateLessonQuestions(lessonData, lessonId) {
  const { terms = [], facts = [], classifySets = [], ordering = null, concepts = [] } = lessonData;
  const questions = [];
  let qn = 0;
  const mkId = (s) => `${lessonId}_${s}_${qn++}`;

  // ═══ ١-١٢: اختيار من متعدد من المفردات ═══
  terms.forEach((t, i) => {
    const distractors = pickN(terms.filter((x) => x.term !== t.term), 3).map((x) => x.term);
    const opts = shuffle([t.term, ...distractors]);
    questions.push({
      id: mkId('mc'),
      type: 'multiple_choice',
      question_ar: `يُعرَّف مصطلح «${t.definition}» بأنه:`,
      options_ar: opts,
      correct_index: opts.indexOf(t.term),
      explanation_ar: `${t.definition} ← هذا هو تعريف «${t.term}».`,
      golden_rule: t.term,
    });
  });

  // ═══ ١٣-٢٠: اختيار من متعدد من الحقائق ═══
  facts.slice(0, 8).forEach((fact, i) => {
    const keyword = fact.split('،')[0].split('.')[0].split(':').slice(-1)[0].trim();
    const otherFacts = pickN(facts.filter((f) => f !== fact), 3);
    const opts = shuffle([fact, ...otherFacts]);
    // صياغة سؤال تقريري
    const topic = keyword.length > 5 ? keyword : 'المفهوم';
    questions.push({
      id: mkId('mc'),
      type: 'multiple_choice',
      question_ar: `أيٌّ مما يلي يُعدّ معلومة صحيحة وردت في الدرس؟`,
      options_ar: opts.map((o) => o.length > 80 ? o.slice(0, 77) + '…' : o),
      correct_index: opts.indexOf(fact),
      explanation_ar: `العبارة الصحيحة: ${fact}`,
      golden_rule: 'استحضر الحقائق التي تعلمتها في الدرس.',
    });
  });

  // ═══ ٢١-٢٨: صح/خطأ من المفردات ═══
  terms.slice(0, 8).forEach((t, i) => {
    const isTrue = i % 2 === 0;
    const wrongTerm = terms[(i + 1) % terms.length];
    const stmt = isTrue
      ? `${t.definition} — وهذا يصف «${t.term}».`
      : `${t.definition} — وهذا يصف «${wrongTerm.term}» لا «${t.term}».`;
    questions.push({
      id: mkId('tf'),
      type: 'true_false',
      question_ar: `العبارة التالية صحيحة أم خطأ: ${stmt}`,
      correct_answer: isTrue ? 'true' : 'false',
      explanation_ar: isTrue
        ? `صحيح: «${t.term}» يُعرَّف بأنه ${t.definition}.`
        : `خطأ: «${t.term}» لا يُعرَّف بهذا التعريف. التعريف الصحيح: ${t.definition}.`,
      golden_rule: `تأكد من التعريف قبل الحكم.`,
    });
  });

  // ═══ ٢٩-٣٦: صح/خطأ من الحقائق ═══
  facts.slice(8, 16).forEach((fact, i) => {
    const isTrue = i % 2 === 0;
    const negated = fact.replace(/يُعدّ|يُعتبر|يحتوي|تمتلك|لها/g, (m) => ({
      'يُعدّ':'لا يُعدّ','يُعتبر':'لا يُعتبر','يحتوي':'لا تحتوي','تمتلك':'لا تمتلك','لها':'ليس لها'
    }[m] || m));
    const stmt = isTrue ? fact : negated;
    questions.push({
      id: mkId('tf'),
      type: 'true_false',
      question_ar: `العبارة التالية صحيحة أم خطأ: ${stmt}`,
      correct_answer: isTrue ? 'true' : 'false',
      explanation_ar: isTrue
        ? `صحيح: ${fact}`
        : `خطأ: الصحيح هو: ${fact}`,
      golden_rule: `راجع الحقائق بعناية.`,
    });
  });

  // ═══ ٣٧-٤٢: تصنيف ═══
  classifySets.forEach((set, i) => {
    questions.push({
      id: mkId('cl'),
      type: 'classify',
      question_ar: set.question,
      categories_ar: set.categories,
      items_ar: set.items,
      explanation_ar: set.explanation,
      golden_rule: set.golden_rule || 'صنّف كل عنصر حسب خصائصه.',
    });
  });

  // ═══ ٤٣-٤٦: مطابقة المفردات ═══
  for (let i = 0; i < Math.min(4, Math.ceil(terms.length / 2)); i++) {
    const pairs = terms.slice(i * 2, i * 2 + 4).map((t) => ({
      right: t.term,
      left: t.definition.length > 30 ? t.definition.slice(0, 27) + '…' : t.definition,
    }));
    if (pairs.length >= 2) {
      questions.push({
        id: mkId('mt'),
        type: 'matching',
        question_ar: `صِل كل تعريف بالمصطلح المناسب:`,
        pairs_ar: pairs,
        explanation_ar: `كل تعريف يرتبط بمصطلحه الصحيح من الكتاب.`,
        golden_rule: `اربط التعريف بالمصطلح بدقة.`,
      });
    }
  }

  // ═══ ٤٧-٤٨: ترتيب ═══
  if (ordering) {
    questions.push({
      id: mkId('or'),
      type: 'ordering',
      question_ar: ordering.question,
      items_ar: ordering.steps,
      correct_order: ordering.steps.map((_, i) => i),
      explanation_ar: ordering.explanation,
      golden_rule: ordering.golden_rule || `اتبع الترتيب الصحيح للخطوات.`,
    });
    // ترتيب عكسي كاختبار
    if (ordering.steps.length >= 3) {
      const sub3 = ordering.steps.slice(0, 3);
      questions.push({
        id: mkId('or'),
        type: 'ordering',
        question_ar: `رتِّب أول ثلاث خطوات بالترتيب الصحيح:`,
        items_ar: sub3,
        correct_order: [0, 1, 2],
        explanation_ar: `الترتيب الصحيح يبدأ بالخطوة الأولى ثم الثانية فالثالثة.`,
        golden_rule: `ابدأ من البداية الصحيحة.`,
      });
    }
  }

  // ═══ ٤٩-٥٠ + تعبئة إضافية ═══
  terms.slice(0, 6).forEach((t, i) => {
    if (questions.length >= 50) return;
    const distractors = pickN(terms.filter((x) => x.term !== t.term), 3).map((x) => x.term);
    const opts = shuffle([t.term, ...distractors]);
    questions.push({
      id: mkId('fb'),
      type: 'fill_blank',
      question_ar: `${t.definition} — هذا هو تعريف «___».`,
      options_ar: opts,
      correct_index: opts.indexOf(t.term),
      explanation_ar: `الإجابة: ${t.term}.`,
      golden_rule: t.term,
    });
  });

  // تعبئة إضافية من الحقائق لو نحتاج
  if (questions.length < 50) {
    facts.slice(16).forEach((fact) => {
      if (questions.length >= 50) return;
      const words = fact.split(' ');
      if (words.length < 4) return;
      const blankIdx = Math.floor(words.length / 2);
      const blankWord = words[blankIdx];
      words[blankIdx] = '___';
      const otherFacts = pickN(facts.filter((f) => f !== fact), 3).map((f) => {
        const w = f.split(' ');
        return w[Math.floor(w.length / 2)] || w[0];
      });
      const opts = shuffle([blankWord, ...otherFacts.filter((w) => w !== blankWord)].slice(0, 4));
      questions.push({
        id: mkId('fb'),
        type: 'fill_blank',
        question_ar: `أكمل الفراغ: ${words.join(' ')}`,
        options_ar: opts,
        correct_index: opts.indexOf(blankWord),
        explanation_ar: `الكلمة الناقصة: ${blankWord}.`,
        golden_rule: `اقرأ الجملة كاملة ثم استنتج الكلمة المفقودة.`,
      });
    });
  }

  // اختيار من متعدد إضافي من المفاهيم لو نحتاج
  if (questions.length < 50) {
    concepts.forEach((c, i) => {
      if (questions.length >= 50) return;
      const otherConcepts = pickN(concepts.filter((x) => x !== c), 3);
      const opts = shuffle([c, ...otherConcepts]);
      questions.push({
        id: mkId('mc'),
        type: 'multiple_choice',
        question_ar: `أيٌّ من المفاهيم التالية يتعلق بدرس هذا الدرس؟`,
        options_ar: opts,
        correct_index: opts.indexOf(c),
        explanation_ar: `«${c}» من المفاهيم الأساسية في هذا الدرس.`,
        golden_rule: `كل مفهوم يرتبط بموضوع درسه.`,
      });
    });
  }

  return questions.slice(0, 50);
}