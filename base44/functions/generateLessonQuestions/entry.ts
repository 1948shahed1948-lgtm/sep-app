import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Admin only' }, { status: 403 });
    }
    const body = await req.json();
    const {
      subject_id, grade,
      subject_name_ar, subject_name_en,
      unit_title_ar, unit_title_en,
      lesson_title_ar, lesson_title_en,
      count = 10
    } = body;

    if (!subject_id || !grade || !lesson_title_ar) {
      return Response.json({ error: 'Missing required fields: subject_id, grade, lesson_title_ar' }, { status: 400 });
    }

    // دفعات صغيرة (٥) لأن التوقيع الغني (شرح + خطوات سبورة + قاعدة ذهبية + سؤال تغذية راجعة) أثقل
    const batchSize = 5;
    const all = [];

    while (all.length < count) {
      const thisBatch = Math.min(batchSize, count - all.length);
      const prompt = `أنت خبير تربوي متخصص في المناهج السعودية لوزارة التعليم.
المهمة: توليد ${thisBatch} أسئلة اختيار من متعدد (٤ خيارات) للدرس التالي، باللغتين العربية والإنجليزية، مبنية على المنهج السعودي الرسمي، بتوقيع "مخبر القياس" الكامل.

المادة: ${subject_name_ar || ''} / ${subject_name_en || ''}
الصف: ${grade}
الوحدة: ${unit_title_ar || ''} / ${unit_title_en || ''}
الدرس: ${lesson_title_ar || ''} / ${lesson_title_en || ''}

لكل سؤال يجب أن تتوفر:
- question_ar / question_en: نص السؤال.
- options_ar / options_en: ٤ خيارات، خيار واحد صحيح فقط.
- correct_answer: مؤشر الإجابة الصحيحة كنص: "0" أو "1" أو "2" أو "3".
- explanation_ar / explanation_en: شرح وافٍ يوضح سبب صحة الإجابة.
- solution_steps_ar / solution_en: خطوات الحل مفصّلة كما تُكتب على السبورة (خطوة بخطوة).
- golden_rule_ar / golden_rule_en: قاعدة ذهبية مختصرة تثبّت المعلومة.
- feedback_question_ar / feedback_question_en: سؤال تغذية راجعة قصير يعزّز الفهم بعد الإجابة.
- feedback_options_ar / feedback_options_en: ٤ خيارات لسؤال التغذية الراجعة.
- feedback_correct_answer: مؤشر الإجابة الصحيحة لسؤال التغذية كنص.
- feedback_explanation_ar / feedback_explanation_en: شرح إجابة التغذية الراجعة.
- difficulty: "easy" أو "medium" أو "hard".
- page_number: رقم صفحة تقريبية في كتاب الطالب حيث يظهر موضوع السؤال (رقم).
- paragraph: مرجع الفقرة/القسم داخل الصفحة (نص قصير).

تعليمات:
- الأسئلة متنوعة الصعوبة ولا تكرر المفهوم نفسه حرفياً.
- محتوى دقيق مطابق للمنهج السعودي لهذا الصف والدرس.
- أعد JSON بالشكل المطلوب فقط.`;

      const res = await base44.asServiceRole.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            questions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  question_ar: { type: "string" },
                  question_en: { type: "string" },
                  options_ar: { type: "array", items: { type: "string" } },
                  options_en: { type: "array", items: { type: "string" } },
                  correct_answer: { type: "string" },
                  explanation_ar: { type: "string" },
                  explanation_en: { type: "string" },
                  solution_steps_ar: { type: "string" },
                  solution_steps_en: { type: "string" },
                  golden_rule_ar: { type: "string" },
                  golden_rule_en: { type: "string" },
                  feedback_question_ar: { type: "string" },
                  feedback_question_en: { type: "string" },
                  feedback_options_ar: { type: "array", items: { type: "string" } },
                  feedback_options_en: { type: "array", items: { type: "string" } },
                  feedback_correct_answer: { type: "string" },
                  feedback_explanation_ar: { type: "string" },
                  feedback_explanation_en: { type: "string" },
                  difficulty: { type: "string", enum: ["easy", "medium", "hard"] },
                  page_number: { type: "number" },
                  paragraph: { type: "string" }
                },
                required: ["question_ar", "question_en", "options_ar", "options_en", "correct_answer", "explanation_ar", "explanation_en", "solution_steps_ar", "solution_steps_en", "golden_rule_ar", "golden_rule_en", "feedback_question_ar", "feedback_question_en", "feedback_options_ar", "feedback_options_en", "feedback_correct_answer", "feedback_explanation_ar", "feedback_explanation_en", "difficulty"]
              }
            }
          },
          required: ["questions"]
        }
      });

      const qs = Array.isArray(res) ? res : (res.questions || []);
      for (const q of qs) {
        if (all.length >= count) break;
        if (!q.options_ar || q.options_ar.length !== 4) continue;
        if (!q.feedback_options_ar || q.feedback_options_ar.length !== 4) continue;
        all.push({
          subject_id, grade,
          unit_title_ar: unit_title_ar || '',
          unit_title_en: unit_title_en || '',
          lesson_title_ar: lesson_title_ar || '',
          lesson_title_en: lesson_title_en || '',
          question_ar: q.question_ar,
          question_en: q.question_en,
          options_ar: q.options_ar,
          options_en: q.options_en || q.options_ar,
          correct_answer: String(q.correct_answer),
          explanation_ar: q.explanation_ar,
          explanation_en: q.explanation_en || q.explanation_ar,
          solution_steps_ar: q.solution_steps_ar || '',
          solution_steps_en: q.solution_steps_en || q.solution_steps_ar || '',
          golden_rule_ar: q.golden_rule_ar || '',
          golden_rule_en: q.golden_rule_en || q.golden_rule_ar || '',
          feedback_question_ar: q.feedback_question_ar || '',
          feedback_question_en: q.feedback_question_en || q.feedback_question_ar || '',
          feedback_options_ar: q.feedback_options_ar,
          feedback_options_en: q.feedback_options_en || q.feedback_options_ar,
          feedback_correct_answer: String(q.feedback_correct_answer || '0'),
          feedback_explanation_ar: q.feedback_explanation_ar || '',
          feedback_explanation_en: q.feedback_explanation_en || q.feedback_explanation_ar || '',
          difficulty: q.difficulty || 'medium',
          page_number: q.page_number || null,
          paragraph: q.paragraph || ''
        });
      }
      if (qs.length === 0) break;
    }

    if (all.length === 0) {
      return Response.json({ error: 'No questions generated', created: 0 }, { status: 500 });
    }

    let created = 0;
    for (let i = 0; i < all.length; i += 100) {
      const chunk = all.slice(i, i + 100);
      const r = await base44.asServiceRole.entities.QuestionBankQuestion.bulkCreate(chunk);
      created += Array.isArray(r) ? r.length : (r.created || chunk.length);
    }

    return Response.json({ created, requested: count, lesson: lesson_title_ar });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});