// محوّل (adapter) يطبّع أسئلة بنك التربية الإسلامية الصف الثالث (المخطط الجديد)
// إلى المخطط الذي تتوقعه صفحة TawheedGrade3S1 ومكوّنات الأسئلة المشتركة.

function typeMap(t) {
  switch (t) {
    case 'multipleChoice': return 'multiple_choice';
    case 'trueFalse': return 'true_false';
    case 'word_sentence_ordering': return 'word_sentence_ordering';
    default: return t; // matching / classify / ordering
  }
}

// يحوّل سؤال ملء الفراغ إلى اختيار من متعدد باستخدام بنك الكلمات
function fillBlankToMC(q) {
  const blanks = q.blanks || [];
  const bank = q.wordBank || [];
  const answer = blanks[0] || '';
  // خيارات = بنك الكلمات مع إجابة ضمنية مضمّنة
  const options = bank.length ? bank : [answer];
  const correct = Math.max(0, options.indexOf(answer));
  return {
    type: 'multiple_choice',
    question_ar: q.question,
    image_url: q.image || null,
    options_ar: options,
    correct,
    explanation_ar: q.explanation || `الإجابة: ${answer}`,
    golden_rule_ar: q.goldenRule || '',
    _sourceType: 'fillBlank',
  };
}

export function normalizeIslamicG3(q) {
  if (!q) return q;
  // إن كان السؤال بالفعل بالمخطط القديم (يملك question_ar أو options_ar) أعِده كما هو
  if (q.question_ar || q.options_ar || q.matching_pairs_ar || q.classify_categories_ar || q.ordering_items_ar) {
    return { ...q, image_url: q.image_url || q.image || null };
  }
  const type = typeMap(q.type);

  switch (q.type) {
    case 'multipleChoice': {
      const opts = q.options || [];
      const correctIdx = Math.max(0, opts.findIndex((o) => o && o.correct));
      return {
        ...q,
        type: 'multiple_choice',
        question_ar: q.question,
        image_url: q.image || null,
        options_ar: opts.map((o) => (typeof o === 'string' ? o : o.text)),
        correct: correctIdx,
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    }
    case 'trueFalse':
      return {
        ...q,
        type: 'true_false',
        question_ar: q.question,
        image_url: q.image || null,
        correct: q.correctAnswer ? 'true' : 'false',
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    case 'matching':
      return {
        ...q,
        type: 'matching',
        question_ar: q.question,
        image_url: q.image || null,
        matching_pairs_ar: q.pairs || [],
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    case 'classify':
      return {
        ...q,
        type: 'classify',
        question_ar: q.question,
        image_url: q.image || null,
        classify_categories_ar: q.categories || [],
        classify_items_ar: (q.items || []).map((it) => ({
          item: it.text,
          correct_category: it.correct_category,
        })),
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    case 'ordering': {
      // items = العناصر بالترتيب الأصلي، correctOrder = ترتيب المؤشرات الصحيح
      const items = q.items || [];
      const order = q.correctOrder || items.map((_, i) => i);
      const ordered = order.map((i) => items[i]).filter(Boolean);
      return {
        ...q,
        type: 'ordering',
        question_ar: q.question,
        image_url: q.image || null,
        ordering_items_ar: ordered,
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    }
    case 'fillBlank':
      return fillBlankToMC(q);
    case 'word_sentence_ordering':
      return {
        ...q,
        type: 'word_sentence_ordering',
        question_ar: q.question,
        image_url: q.image || null,
        explanation_ar: q.explanation || '',
        golden_rule_ar: q.goldenRule || '',
      };
    default:
      return {
        ...q,
        type,
        question_ar: q.question || q.question_ar || '',
        image_url: q.image || q.image_url || null,
        explanation_ar: q.explanation || q.explanation_ar || '',
        golden_rule_ar: q.goldenRule || q.golden_rule_ar || '',
      };
  }
}

export function normalizeIslamicG3Batch(questions) {
  if (!Array.isArray(questions)) return questions;
  return questions.map(normalizeIslamicG3);
}