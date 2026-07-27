import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const stage = body.stage || 'secondary'; // primary | intermediate | secondary
    const count = Number(body.count) || 34;

    if (!['primary', 'intermediate', 'secondary'].includes(stage)) {
      return Response.json({ error: 'Invalid stage' }, { status: 400 });
    }

    const stageGrades = {
      primary: [1, 2, 3, 4, 5, 6],
      intermediate: [7, 8, 9],
      secondary: [10, 11, 12]
    };

    const stageSubjects = {
      primary: {
        ar: ['الرياضيات', 'العلوم', 'اللغة العربية'],
        en: ['Mathematics', 'Science', 'Arabic Language']
      },
      intermediate: {
        ar: ['الرياضيات', 'العلوم', 'الفيزياء', 'الكيمياء', 'الأحياء'],
        en: ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology']
      },
      secondary: {
        ar: ['الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء'],
        en: ['Mathematics', 'Physics', 'Chemistry', 'Biology']
      }
    };

    const grades = stageGrades[stage];
    const subjects = stageSubjects[stage];

    const stageNameAr = stage === 'primary' ? 'الابتدائية' : stage === 'intermediate' ? 'المتوسطة' : 'الثانوية';

    const prompt = `أنت خبير في تأليف أسئلة "تحدي العبقري" — أسئلة صعبة جداً لا يحلها إلا القلّة من المتفوقين، للمرحلة ${stageNameAr} في المنهج السعودي.
استخدم البحث في الإنترنت للعثور على مفاهيم وأمثلة حقيقية من مناهج الصفوف ${grades.join('، ')} السعودية.
المواد المعنية: ${subjects.ar.join('، ')}.

أنشئ ${count} سؤالاً بمستوى صعوبة "عبقري" (ليست أسئلة عادية بل ألغاز ومشكلات تتطلب تفكيراً عميقاً وخطوات متعددة وكشف فخاخ شائعة).
وزّع الأسئلة بالتساوي على الصفوف ${grades.join('، ')} والمواد ${subjects.ar.join('، ')}.

لكل سؤال حدّد:
- grade (رقم الصف 1-12)
- subject_ar / subject_en (المادة)
- topic_ar / topic_en (المفهوم)
- question_ar / question_en (نص السؤال — اجعله مشوقاً وواضحاً)
- options_ar / options_en (4 خيارات، خيارات الإجابات الخاطئة يجب أن تكون "فخاخ" منطقية يقع فيها الطالب العادي)
- correct_answer (مؤشر الإجابة الصحيحة 0-3)
- explanation_ar / explanation_en (شرح تفصيلي خطوة بخطوة للحل الصحيح — يجب أن يكون دقيقاً ومفصلاً جداً)
- common_mistake_ar / common_mistake_en (شرح تفصيلي للخطأ الشائع: لماذا يقع الطلاب في هذا الفخ؟ ما الخطأ المنطقي أو الحسابي؟ وكيف يكشف المعلم عن هذا الخطأ؟)
- golden_rule_ar / golden_rule_en (قاعدة ذهبية مختصرة帮助学生 يتذكرها)

الأسئلة يجب أن تكون حقيقية ومناسبة لمستوى الصف ولكنها صعبة استثنائياً، ومتنوعة وغير مكررة.`;

    const schema = {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              grade: { type: "number" },
              subject_ar: { type: "string" },
              subject_en: { type: "string" },
              topic_ar: { type: "string" },
              topic_en: { type: "string" },
              question_ar: { type: "string" },
              question_en: { type: "string" },
              options_ar: { type: "array", items: { type: "string" } },
              options_en: { type: "array", items: { type: "string" } },
              correct_answer: { type: "string" },
              explanation_ar: { type: "string" },
              explanation_en: { type: "string" },
              common_mistake_ar: { type: "string" },
              common_mistake_en: { type: "string" },
              golden_rule_ar: { type: "string" },
              golden_rule_en: { type: "string" }
            },
            required: ["grade", "subject_ar", "subject_en", "question_ar", "question_en", "options_ar", "options_en", "correct_answer", "explanation_ar", "explanation_en", "common_mistake_ar", "common_mistake_en"]
          }
        }
      },
      required: ["questions"]
    };

    const res = await base44.integrations.Core.InvokeLLM({
      prompt,
      add_context_from_internet: true,
      model: 'gemini_3_flash',
      response_json_schema: schema
    });

    const questions = (res.questions || []).map((q) => ({
      grade: Number(q.grade) || grades[0],
      stage,
      subject_ar: q.subject_ar || subjects.ar[0],
      subject_en: q.subject_en || subjects.en[0],
      topic_ar: q.topic_ar || '',
      topic_en: q.topic_en || '',
      question_ar: q.question_ar,
      question_en: q.question_en,
      options_ar: q.options_ar,
      options_en: q.options_en,
      correct_answer: q.correct_answer,
      explanation_ar: q.explanation_ar,
      explanation_en: q.explanation_en,
      common_mistake_ar: q.common_mistake_ar || '',
      common_mistake_en: q.common_mistake_en || '',
      golden_rule_ar: q.golden_rule_ar || '',
      golden_rule_en: q.golden_rule_en || ''
    }));

    let created = 0;
    if (questions.length > 0) {
      await base44.asServiceRole.entities.GeniusChallenge.bulkCreate(questions);
      created = questions.length;
    }

    return Response.json({ stage, requested: count, generated: questions.length, created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});