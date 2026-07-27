import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const grade = Number(body.grade);
    const count = Number(body.count) || 25;
    const test_type = body.test_type || 'criterion'; // diagnostic | criterion | adaptive
    const difficulty = body.difficulty || null; // for adaptive top-up: easy | medium | hard
    const use_web_search = body.use_web_search !== false; // default true; set false for fast bulk generation
    if (!grade || grade < 1 || grade > 12) {
      return Response.json({ error: 'Invalid grade (1-12)' }, { status: 400 });
    }
    if (!['diagnostic', 'criterion', 'adaptive'].includes(test_type)) {
      return Response.json({ error: 'Invalid test_type' }, { status: 400 });
    }

    const stage = grade <= 6 ? 'primary' : grade <= 9 ? 'intermediate' : 'secondary';
    const isPrimary = stage === 'primary';

    const stageTopics = {
      primary: {
        ar: ['الجمع والطرح', 'الضرب والقسمة', 'الكلمات والمرادفات', 'قراءة وفهم', 'الأشكال الهندسية', 'الوحدات والقياس', 'الكسور', 'الأنماط والتسلسل', 'الأعداد الزوجية والفردية', 'العملات والنقود'],
        en: ['Addition & Subtraction', 'Multiplication & Division', 'Vocabulary & Synonyms', 'Reading Comprehension', 'Geometric Shapes', 'Units & Measurement', 'Fractions', 'Patterns & Sequences', 'Even & Odd Numbers', 'Coins & Money']
      },
      intermediate: {
        ar: ['الجبر والمعادلات', 'النسبة والتناسب', 'الهندسة والمساحات', 'الإحصاء والاحتمالات', 'الأعداد النسبية', 'القوى والجذور', 'المفردات السياقية', 'الاستدلال المنطقي'],
        en: ['Algebra & Equations', 'Ratio & Proportion', 'Geometry & Areas', 'Statistics & Probability', 'Rational Numbers', 'Exponents & Roots', 'Contextual Vocabulary', 'Logical Reasoning']
      },
      secondary: {
        ar: ['الدوال والنهايات', 'التفاضل والتكامل', 'الجبر المتقدم', 'المتجهات والمقذوفات', 'الكيمياء الجزيئية', 'الوراثة والجينات', 'الاستيعاب النقدي', 'المنطق والاستدلال'],
        en: ['Functions & Limits', 'Differentiation & Integration', 'Advanced Algebra', 'Vectors & Projectiles', 'Molecular Chemistry', 'Genetics', 'Critical Comprehension', 'Logic & Reasoning']
      }
    };

    const topics = stageTopics[stage];

    const interactiveSchema = {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              topic_ar: { type: "string" },
              topic_en: { type: "string" },
              question_type: { type: "string", enum: ["matching", "ordering", "classify"] },
              question_ar: { type: "string" },
              question_en: { type: "string" },
              matching_pairs_ar: { type: "array", items: { type: "object", properties: { left: { type: "string" }, right: { type: "string" } } } },
              matching_pairs_en: { type: "array", items: { type: "object", properties: { left: { type: "string" }, right: { type: "string" } } } },
              ordering_items_ar: { type: "array", items: { type: "string" } },
              ordering_items_en: { type: "array", items: { type: "string" } },
              classify_categories_ar: { type: "array", items: { type: "string" } },
              classify_categories_en: { type: "array", items: { type: "string" } },
              classify_items_ar: { type: "array", items: { type: "object", properties: { item: { type: "string" }, correct_category: { type: "number" } } } },
              classify_items_en: { type: "array", items: { type: "object", properties: { item: { type: "string" }, correct_category: { type: "number" } } } },
              explanation_ar: { type: "string" },
              explanation_en: { type: "string" }
            },
            required: ["topic_ar", "topic_en", "question_type", "question_ar", "question_en"]
          }
        }
      },
      required: ["questions"]
    };

    const mcqSchema = {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              topic_ar: { type: "string" },
              topic_en: { type: "string" },
              question_ar: { type: "string" },
              question_en: { type: "string" },
              options_ar: { type: "array", items: { type: "string" } },
              options_en: { type: "array", items: { type: "string" } },
              correct_answer: { type: "string" },
              explanation_ar: { type: "string" },
              explanation_en: { type: "string" }
            },
            required: ["topic_ar", "topic_en", "question_ar", "question_en", "options_ar", "options_en", "correct_answer"]
          }
        }
      },
      required: ["questions"]
    };

    // difficulty guidance
    const difficultyAr = difficulty === 'easy' ? 'سهل' : difficulty === 'hard' ? 'صعب' : 'متوسط';
    const difficultyGuidance = difficulty
      ? `مستوى الصعوبة المطلوب لهذه المجموعة: ${difficultyAr}.`
      : (test_type === 'criterion' ? 'مستوى الصعوبة: متوسط وثابت (معيار إتقان 70%).'
         : test_type === 'diagnostic' ? 'مستوى الصعوبة: متنوع (سهل ومتوسط وصعب) لتشخيص نقاط الضعف.'
         : 'مستوى الصعوبة: متنوع (سهل ومتوسط وصعب).');

    const typeGuidance = test_type === 'diagnostic'
      ? 'هذا اختبار تشخيصي: غطِّ مهارات متنوعة وحدد لكل سؤال المفهوم (topic) الذي يقيسه بدقة.'
      : test_type === 'adaptive'
      ? 'هذا اختبار تكيّفي: الأسئلة ستُقدّم حسب أداء الطالب.'
      : 'هذا اختبار معياري محكّم بمستوى صعوبة ثابت.';

    let prompt, schema;
    if (isPrimary) {
      prompt = `أنت خبير في إعداد أسئلة تفاعلية حقيقية من المنهج السعودي للمرحلة الابتدائية (الصف ${grade}).
استخدم البحث في الإنترنت للعثور على أمثلة وأسئلة حقيقية من كتب ومناهج الصف ${grade} السعودية.
${typeGuidance}
${difficultyGuidance}
أنشئ ${count} سؤالاً تفاعلياً يغطي المفاهيم التالية: ${topics.ar.join('، ')}.
وزّع الأسئلة بالتساوي بين ثلاثة أنواع تفاعلية:
1. "matching" (توصيل): يربط الطالب عناصر من العمود الأيمن بالأيسر. أرسل matching_pairs_ar و matching_pairs_en (مصفوفة من {left, right}).
2. "ordering" (ترتيب): يرتّب الطالب العناصر بالترتيب الصحيح. أرسل ordering_items_ar و ordering_items_en (مصفوفة بالترتيب الصحيح).
3. "classify" (تصنيف بالسحب): يسحب الطالب العناصر إلى صناديق الفئات. أرسل classify_categories_ar/en (أسماء الفئات) و classify_items_ar/en (مصفوفة {item, correct_category} حيث correct_category هو مؤشر الفئة الصحيحة).
لكل سؤال حدد topic_ar/topic_en (المفهوم) و question_ar/question_en (التعليمات) و explanation_ar/en.
الأسئلة يجب أن تكون حقيقية ومناسبة للصف، وغير مكررة.`;
      schema = interactiveSchema;
    } else {
      prompt = `أنت خبير في إعداد أسئلة حقيقية من المنهج السعودي للمرحلة ${stage === 'intermediate' ? 'المتوسطة' : 'الثانوية'} (الصف ${grade}).
استخدم البحث في الإنترنت للعثور على أمثلة وأسئلة حقيقية من كتب ومناهج الصف ${grade} السعودية.
${typeGuidance}
${difficultyGuidance}
أنشئ ${count} سؤالاً متعدد الخيارات (4 خيارات) يغطي المفاهيم التالية: ${topics.ar.join('، ')}.
لكل سؤال حدد topic_ar/topic_en (المفهوم) و question_ar/question_en و options_ar/options_en (4 خيارات) و correct_answer (0-3) و explanation_ar/en.
الأسئلة حقيقية وغير مكررة ومناسبة للصف.`;
      schema = mcqSchema;
    }

    const res = await base44.integrations.Core.InvokeLLM({
      prompt,
      add_context_from_internet: use_web_search,
      model: 'gemini_3_flash',
      response_json_schema: schema
    });

    // determine difficulty per record
    const pickDifficulty = () => {
      if (difficulty) return difficulty;
      if (test_type === 'criterion') return 'medium';
      const opts = ['easy', 'medium', 'hard'];
      return opts[Math.floor(Math.random() * opts.length)];
    };

    const questions = (res.questions || []).map((q) => {
      const base = {
        test_type,
        grade,
        topic_ar: q.topic_ar,
        topic_en: q.topic_en,
        difficulty: pickDifficulty(),
        question_type: isPrimary ? q.question_type : 'multiple_choice',
        question_ar: q.question_ar,
        question_en: q.question_en,
        explanation_ar: q.explanation_ar || '',
        explanation_en: q.explanation_en || ''
      };
      if (!isPrimary) {
        base.options_ar = q.options_ar;
        base.options_en = q.options_en;
        base.correct_answer = q.correct_answer;
      } else if (q.question_type === 'matching') {
        base.matching_pairs_ar = q.matching_pairs_ar;
        base.matching_pairs_en = q.matching_pairs_en;
      } else if (q.question_type === 'ordering') {
        base.ordering_items_ar = q.ordering_items_ar;
        base.ordering_items_en = q.ordering_items_en;
      } else if (q.question_type === 'classify') {
        base.classify_categories_ar = q.classify_categories_ar;
        base.classify_categories_en = q.classify_categories_en;
        base.classify_items_ar = q.classify_items_ar;
        base.classify_items_en = q.classify_items_en;
      }
      return base;
    });

    let created = 0;
    if (questions.length > 0) {
      await base44.asServiceRole.entities.StandardizedQuestion.bulkCreate(questions);
      created = questions.length;
    }

    return Response.json({ grade, stage, isPrimary, test_type, difficulty, requested: count, generated: questions.length, created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});