// بنك رياضيات الصف الثاني — الفصل الخامس: جمع الأعداد المكونة من رقمين
// المصدر: كتاب الرياضيات الصف الثاني — وزارة التعليم

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const toAr = (n) => String(Math.max(0, Math.round(n))).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const round10 = (n) => (n % 10 >= 5) ? Math.ceil(n / 10) * 10 : Math.floor(n / 10) * 10;
const BLOOMS = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];
const DIFFS = ['easy', 'easy', 'medium', 'hard'];

export const UNITS = [
  { id: 'u1', title: 'جمع بدون حمل', icon: '➕', color: '#0f5132', page: 121,
    lessons: [{ id: 'l1', title: 'الدرس الأول: جمع بدون حمل', page: 121 }] },
  { id: 'u2', title: 'جمع مع الحمل', icon: '🔢', color: '#0891b2', page: 125,
    lessons: [{ id: 'l2', title: 'الدرس الثاني: جمع مع الحمل', page: 125 }] },
  { id: 'u3', title: 'تقدير المجموع', icon: '📊', color: '#7c3aed', page: 129,
    lessons: [{ id: 'l3', title: 'الدرس الثالث: تقدير المجموع', page: 129 }] },
  { id: 'u4', title: 'المسائل الكلامية', icon: '📝', color: '#d97706', page: 132,
    lessons: [{ id: 'l4', title: 'الدرس الرابع: المسائل الكلامية', page: 132 }] },
  { id: 'u5', title: 'مراجعة الفصل', icon: '📚', color: '#dc2626', page: 134,
    lessons: [{ id: 'l5', title: 'الدرس الخامس: مراجعة الفصل', page: 134 }] },
];

const WORD_T = [
  (a, b) => `عند أحمد ${toAr(a)} ريالاً وعند أخيه ${toAr(b)} ريالاً، كم المجموع؟`,
  (a, b) => `في المكتبة ${toAr(a)} كتاباً و${toAr(b)} كتاباً آخر، كم عدد الكتب؟`,
  (a, b) => `زرع المزارع ${toAr(a)} شجرة صباحاً و${toAr(b)} شجرة مساءً، كم عدد الأشجار؟`,
  (a, b) => `في الفصل ${toAr(a)} طالباً و${toAr(b)} طالبة، كم عدد الطلاب والطالبات؟`,
  (a, b) => `اشترت الأم ${toAr(a)} تفاحة و${toAr(b)} برتقالة، كم عدد الفواكه؟`,
  (a, b) => `قطع سالم ${toAr(a)} متراً ثم ${toAr(b)} متراً، كم المسافة الكلية؟`,
  (a, b) => `في الحديقة ${toAr(a)} وردة حمراء و${toAr(b)} وردة بيضاء، كم عدد الورود؟`,
  (a, b) => `عند ليلى ${toAr(a)} قلماً واشترت ${toAr(b)} قلماً، كم عدد الأقلام؟`,
];

function genPairs(rng, count, minA, maxA, minB, maxB, carry) {
  const pairs = [];
  let att = 0;
  while (pairs.length < count && att < count * 40) {
    att++;
    const a = Math.floor(rng() * (maxA - minA + 1)) + minA;
    const b = Math.floor(rng() * (maxB - minB + 1)) + minB;
    const ones = (a % 10) + (b % 10);
    if (carry === false && ones >= 10) continue;
    if (carry === true && ones < 10) continue;
    pairs.push({ a, b, sum: a + b });
  }
  return pairs;
}

function uniqOpts(rng, correct, n) {
  const set = new Set([correct]);
  let att = 0;
  while (set.size < n && att < 60) {
    att++;
    const d = correct + (Math.floor(rng() * 5) - 2) + (rng() < 0.5 ? 10 : -10);
    if (d > 0 && d !== correct) set.add(d);
  }
  while (set.size < n) set.add(correct + set.size * 4 + 3);
  return [...set].sort(() => rng() - 0.5);
}

function genLesson(rng, lessonId, unitId, page, cfg) {
  const out = [];
  let id = 0;
  const pairs = genPairs(rng, 90, cfg.minA, cfg.maxA, cfg.minB, cfg.maxB, cfg.carry);
  let pi = 0;
  const next = () => pairs[pi++ % pairs.length];
  const para = cfg.para;
  const est = !!cfg.estimate;
  const ans = (p) => est ? round10(p.a) + round10(p.b) : p.sum;
  const expl = (p) => est
    ? `نقرّب ${toAr(p.a)} إلى ${toAr(round10(p.a))} و${toAr(p.b)} إلى ${toAr(round10(p.b))}، المجموع ≈ ${toAr(ans(p))}.`
    : `${toAr(p.a)} + ${toAr(p.b)} = ${toAr(p.sum)}.`;
  const gr = est ? 'قرّب للعشرة الأقرب ثم اجمع.' : (cfg.carry === true ? 'إذا تجاوز الآحاد ٩ احمل ١ للعشرات.' : 'اجمع الآحاد معاً والعشرات معاً.');
  const fbQ = (a, b) => est ? `قدّر ${toAr(a)} + ${toAr(b)}` : `${toAr(a)} + ${toAr(b)} = ؟`;
  const fbAns = (a, b) => est ? round10(a) + round10(b) : a + b;

  // 8 MC
  for (let i = 0; i < 8; i++) {
    const p = next();
    const ca = ans(p);
    const question = cfg.word ? WORD_T[i % WORD_T.length](p.a, p.b) : (est ? `قدّر مجموع ${toAr(p.a)} + ${toAr(p.b)}` : `${toAr(p.a)} + ${toAr(p.b)} = ؟`);
    const opts = uniqOpts(rng, ca, 4);
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'multipleChoice', bloom: BLOOMS[i % 6], difficulty: DIFFS[i % 4],
      question, options: opts.map(toAr), correctAnswer: opts.indexOf(ca),
      explanation: expl(p), goldenRule: gr,
      feedbackQuestion: { q: fbQ(p.a + 2, p.b + 1), opts: [toAr(fbAns(p.a + 2, p.b + 1)), toAr(fbAns(p.a + 2, p.b + 1) + 1), toAr(fbAns(p.a + 2, p.b + 1) - 1), toAr(fbAns(p.a + 2, p.b + 1) + 10)], correct: 0 }
    });
  }

  // 7 TF
  for (let i = 0; i < 7; i++) {
    const p = next();
    const ca = ans(p);
    const isTrue = rng() < 0.5;
    const shown = isTrue ? ca : ca + (Math.floor(rng() * 3) + 1);
    const question = cfg.word
      ? WORD_T[(i + 2) % WORD_T.length](p.a, p.b) + ` (الجواب ${toAr(shown)})`
      : (est ? `تقدير ${toAr(p.a)} + ${toAr(p.b)} = ${toAr(shown)}` : `${toAr(p.a)} + ${toAr(p.b)} = ${toAr(shown)}`);
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'trueFalse', bloom: BLOOMS[(i + 1) % 6], difficulty: DIFFS[(i + 1) % 4],
      question, correctAnswer: isTrue,
      explanation: `${isTrue ? 'صحيح ✓' : 'خطأ ✗ — الصحيح: '}${isTrue ? '' : expl(p)}`,
      goldenRule: gr,
      feedbackQuestion: { q: `${toAr(p.a)} + ${toAr(p.b)} = ${toAr(p.sum)}`, opts: ['صح', 'خطأ'], correct: 0 }
    });
  }

  // 7 Ordering
  for (let i = 0; i < 7; i++) {
    const set = [];
    while (set.length < 4) { const p = next(); if (!set.some(s => ans(s) === ans(p))) set.push(p); }
    const items = set.map(p => `${toAr(p.a)} + ${toAr(p.b)}`);
    const correctOrder = set.map((_, idx) => idx).sort((x, y) => ans(set[x]) - ans(set[y]));
    const sorted = [...set].sort((x, y) => ans(x) - ans(y));
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'ordering', bloom: BLOOMS[(i + 2) % 6], difficulty: DIFFS[(i + 2) % 4],
      question: 'رتّب العمليات من الأصغر إلى الأكبر نتيجة:', items, correctOrder,
      explanation: `الترتيب الصحيح: ${sorted.map(p => toAr(ans(p))).join(' ← ')}.`,
      goldenRule: 'احسب كل عملية أولاً ثم رتّب حسب النتيجة.',
      feedbackQuestion: { q: 'أي عملية لها أكبر نتيجة؟', opts: items, correct: correctOrder[correctOrder.length - 1] }
    });
  }

  // 7 Matching
  for (let i = 0; i < 7; i++) {
    const set = [];
    while (set.length < 4) { const p = next(); if (!set.some(s => ans(s) === ans(p))) set.push(p); }
    const pairsM = set.map(p => ({ left: `${toAr(p.a)} + ${toAr(p.b)}`, right: toAr(ans(p)) }));
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'matching', bloom: BLOOMS[(i + 3) % 6], difficulty: DIFFS[(i + 3) % 4],
      question: 'وصل كل عملية بنتيجتها:', pairs: pairsM,
      explanation: `احسب كل عملية وصلها بنتيجتها الصحيحة.`,
      goldenRule: 'احسب ثم صل.',
      feedbackQuestion: { q: `${toAr(set[0].a)} + ${toAr(set[0].b)} = ؟`, opts: [toAr(ans(set[0])), toAr(ans(set[0]) + 1), toAr(ans(set[0]) - 1), toAr(ans(set[0]) + 10)], correct: 0 }
    });
  }

  // 7 Classify
  for (let i = 0; i < 7; i++) {
    const set = [];
    while (set.length < 5) { const p = next(); set.push(p); }
    let categories, items;
    if (est) {
      categories = ['يُقرّب لأعلى ⬆️', 'يُقرّب لأقل ⬇️'];
      items = set.map(p => ({ item: `${toAr(p.a)} + ${toAr(p.b)}`, correct_category: p.a % 10 >= 5 ? 0 : 1 }));
    } else if (cfg.carry === true || cfg.carry === null) {
      categories = ['مع حمل 🔴', 'بدون حمل 🟢'];
      items = set.map(p => ({ item: `${toAr(p.a)} + ${toAr(p.b)}`, correct_category: ((p.a % 10) + (p.b % 10)) >= 10 ? 0 : 1 }));
    } else {
      categories = ['المجموع زوجي ✓', 'المجموع فردي ✗'];
      items = set.map(p => ({ item: `${toAr(p.a)} + ${toAr(p.b)}`, correct_category: p.sum % 2 === 0 ? 0 : 1 }));
    }
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'classify', bloom: BLOOMS[(i + 4) % 6], difficulty: DIFFS[(i + 4) % 4],
      question: 'صنّف العمليات:', categories, items,
      explanation: `صنّف كل عملية حسب التصنيف الصحيح.`,
      goldenRule: 'تحقق من مجموع الآحاد لمعرفة الحمل.',
      feedbackQuestion: { q: `${toAr(set[0].a)} + ${toAr(set[0].b)} مع حمل أم بدون؟`, opts: ['مع حمل', 'بدون حمل'], correct: ((set[0].a % 10) + (set[0].b % 10)) >= 10 ? 0 : 1 }
    });
  }

  // 7 FillBlank
  for (let i = 0; i < 7; i++) {
    const p = next();
    const blankAns = p.b;
    const bank = uniqOpts(rng, blankAns, 5);
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'fillBlank', bloom: BLOOMS[(i + 5) % 6], difficulty: DIFFS[(i + 5) % 4],
      question: `أكمل: ${toAr(p.a)} + .... = ${toAr(p.sum)}`,
      blanks: [toAr(blankAns)], wordBank: bank.map(toAr),
      explanation: `${toAr(p.a)} + ${toAr(blankAns)} = ${toAr(p.sum)}.`,
      goldenRule: 'اطرح العدد المعروف من المجموع لإيجاد المجهول.',
      feedbackQuestion: { q: `${toAr(p.a + 3)} + .... = ${toAr(p.sum + 3)}`, opts: [toAr(blankAns), toAr(blankAns + 1), toAr(blankAns - 1), toAr(blankAns + 2)], correct: 0 }
    });
  }

  // 7 Compute (vertical addition)
  for (let i = 0; i < 7; i++) {
    const p = next();
    const ca = ans(p);
    const opts = uniqOpts(rng, ca, 4);
    out.push({
      id: ++id, unit: unitId, lesson: lessonId, page, paragraph: `${para} (ص${toAr(page)})`,
      type: 'compute', bloom: BLOOMS[i % 6], difficulty: DIFFS[i % 4],
      question: est ? `احسب بالتقريب:` : `اجمع عمودياً:`,
      a: p.a, b: p.b, sum: ca,
      options: opts.map(toAr), correctAnswer: opts.indexOf(ca),
      explanation: expl(p), goldenRule: gr,
      feedbackQuestion: { q: fbQ(p.a + 4, p.b + 3), opts: [toAr(fbAns(p.a + 4, p.b + 3)), toAr(fbAns(p.a + 4, p.b + 3) + 1), toAr(fbAns(p.a + 4, p.b + 3) - 1), toAr(fbAns(p.a + 4, p.b + 3) + 10)], correct: 0 }
    });
  }

  return out;
}

const LESSON_CFG = {
  l1: { minA: 10, maxA: 45, minB: 10, maxB: 44, carry: false, para: 'جمع بدون حمل: نجمع الآحاد معاً والعشرات معاً.' },
  l2: { minA: 15, maxA: 49, minB: 15, maxB: 49, carry: true, para: 'جمع مع الحمل: عند تجاوز الآحاد ٩ نحمل ١ للعشرات.' },
  l3: { minA: 12, maxA: 88, minB: 12, maxB: 88, carry: null, para: 'تقدير المجموع: نقرّب كل عدد لأقرب عشرة ثم نجمع.', estimate: true },
  l4: { minA: 12, maxA: 48, minB: 12, maxB: 48, carry: null, para: 'المسائل الكلامية: نحوّل المسألة إلى عملية جمع.', word: true },
  l5: { minA: 10, maxA: 89, minB: 10, maxB: 89, carry: null, para: 'مراجعة شاملة لجمع الأعداد المكونة من رقمين.' },
};

let _globalId = 0;
export const QUESTIONS = [];
for (const u of UNITS) {
  for (const l of u.lessons) {
    const rng = mulberry32(l.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0) * 137);
    const cfg = { ...LESSON_CFG[l.id], word: l.id === 'l4' ? true : LESSON_CFG[l.id].word };
    const qs = genLesson(rng, l.id, u.id, l.page, cfg);
    qs.forEach(q => { q.id = ++_globalId; QUESTIONS.push(q); });
  }
}

export const BLOOM_LABELS = {
  remember: 'تذكّر 💭', understand: 'فهم 📖', apply: 'تطبيق ✏️',
  analyze: 'تحليل 🔍', create: 'تركيب 🌟', evaluate: 'تقويم ⚖️',
};
export const DIFFICULTY_LABELS = { easy: 'سهل 🟢', medium: 'متوسط 🟡', hard: 'صعب 🔴' };
export const TYPE_LABELS = {
  multipleChoice: 'اختيار من متعدد', trueFalse: 'صح/خطأ', ordering: 'ترتيب',
  matching: 'مطابقة', classify: 'تصنيف', fillBlank: 'ملء فراغ', compute: 'حساب عمودي',
};
export const META = {
  subject: 'الرياضيات', grade: 'الصف الثاني', term: 'الفصل الخامس',
  title: 'جمع الأعداد المكونة من رقمين',
  publisher: 'وزارة التعليم — بنوك الأسئلة المعيارية السعودية',
  totalQuestions: QUESTIONS.length,
};
export function getQuestionsForLesson(lessonId) { return QUESTIONS.filter(q => q.lesson === lessonId); }
export function getQuestionsForUnit(unitId) { return QUESTIONS.filter(q => q.unit === unitId); }