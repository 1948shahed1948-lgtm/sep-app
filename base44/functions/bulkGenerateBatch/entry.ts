import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Autonomous bulk question generator. Called by a scheduled workflow (no user auth context).
// Processes up to `batch_size` lessons lacking 50 questions, then returns remaining count.
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    // Auth: admin user (manual) OR scheduled workflow via shared CRON_SECRET.
    const user = await base44.auth.me().catch(() => null);
    const cronSecret = Deno.env.get("CRON_SECRET");
    const providedSecret = req.headers.get('x-cron-secret') || body.cron_secret;
    if ((!user || user.role !== 'admin') && !(cronSecret && providedSecret && providedSecret === cronSecret)) {
      return Response.json({ error: 'Forbidden: admin or valid cron secret required' }, { status: 403 });
    }

    const batchSize = Math.min(Number(body.batch_size) || 1, 2);

    // 1. Load all curriculum lessons (one row per lesson).
    const lessons = [];
    let page = await base44.asServiceRole.entities.CurriculumUnit.list('order', 1000);
    lessons.push(...page);
    // paginate if more (safety)
    while (page.length === 1000 && lessons.length < 5000) {
      page = await base44.asServiceRole.entities.CurriculumUnit.list('order', 1000, lessons.length);
      if (!page.length) break;
      lessons.push(...page);
    }

    // 2. Load existing question counts per lesson.
    const counts = {};
    let qPage = await base44.asServiceRole.entities.QuestionBankQuestion.list('-created_date', 1000);
    for (const q of qPage) {
      const k = `${q.subject_id}|${q.grade}|${q.lesson_title_ar}`;
      counts[k] = (counts[k] || 0) + 1;
    }
    while (qPage.length === 1000) {
      qPage = await base44.asServiceRole.entities.QuestionBankQuestion.list('-created_date', 1000);
      if (!qPage.length) break;
      for (const q of qPage) {
        const k = `${q.subject_id}|${q.grade}|${q.lesson_title_ar}`;
        counts[k] = (counts[k] || 0) + 1;
      }
    }

    // 3. Lessons still needing questions.
    const pending = lessons.filter((l) => (counts[`${l.subject_id}|${l.grade}|${l.lesson_title_ar}`] || 0) < 50);
    const total = lessons.length;
    const remaining = pending.length;
    const todo = pending.slice(0, batchSize);

    let processed = 0;
    let createdTotal = 0;

    for (const lesson of todo) {
      const all = [];
      while (all.length < 25) {
        const thisBatch = Math.min(8, 25 - all.length);
        const prompt = `أنت خبير تربوي متخصص في المناهج السعودية لوزارة التعليم.
المهمة: توليد ${thisBatch} أسئلة اختيار من متعدد (٤ خيارات) للدرس التالي، باللغتين العربية والإنجليزية، مبنية على المنهج السعودي الرسمي.

المادة: ${lesson.subject_name_ar || ''} / ${lesson.subject_name_en || ''}
الصف: ${lesson.grade}
الوحدة: ${lesson.unit_title_ar || ''} / ${lesson.unit_title_en || ''}
الدرس: ${lesson.lesson_title_ar || ''} / ${lesson.lesson_title_en || ''}

التعليمات الصارمة:
- الصعوبة: متوسط (medium) أو صعب (hard) فقط — لا تُنتج أسئلة سهلة أبداً. نوّع بينهما.
- كل سؤال له ٤ خيارات، خيار واحد صحيح فقط.
- correct_answer هو مؤشر الإجابة الصحيحة كنص: "0" أو "1" أو "2" أو "3".
- explanation: شرح وافٍ يوضح سبب صحة الإجابة ولماذا البدائل الأخرى خاطئة.
- solution_steps: خطوات الحل مرقّمة ومفصّلة (مثال: ١) ... ٢) ... ٣) ...).
- golden_rule: قاعدة ذهبية واحدة مختصرة تلخّص الفكرة الجوهرية للسؤال.
- feedback_question: سؤال تتبعي إضافي مرتبط بنفس المفهوم (٤ خيارات) مع feedback_correct_answer و feedback_explanation.
- page_number: رقم صفحة تقريبي في الكتاب المدرسي حيث يرد موضوع السؤال (رقم بين 1 و 200).
- paragraph: الفقرة/القسم المرجعي (مثال: "الفقرة ٢" أو "نشاط ١").
- الأسئلة متنوعة ولا تكرر المفهوم حرفياً.
- استخدم محتوى دقيقاً مطابقاً للمنهج السعودي لهذا الصف والدرس.

أعد JSON بالشكل المطلوب فقط.`;
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
                    difficulty: { type: "string", enum: ["medium", "hard"] },
                    page_number: { type: "number" },
                    paragraph: { type: "string" }
                  },
                  required: ["question_ar", "question_en", "options_ar", "options_en", "correct_answer", "explanation_ar", "explanation_en", "solution_steps_ar", "solution_steps_en", "golden_rule_ar", "golden_rule_en", "feedback_question_ar", "feedback_question_en", "feedback_options_ar", "feedback_options_en", "feedback_correct_answer", "feedback_explanation_ar", "feedback_explanation_en", "difficulty", "page_number", "paragraph"]
                }
              }
            },
            required: ["questions"]
          }
        });
        const qs = Array.isArray(res) ? res : (res.questions || []);
        for (const q of qs) {
          if (all.length >= 50) break;
          if (!q.options_ar || q.options_ar.length !== 4) continue;
          if (!q.feedback_options_ar || q.feedback_options_ar.length !== 4) continue;
          all.push({
            subject_id: lesson.subject_id, grade: lesson.grade,
            unit_title_ar: lesson.unit_title_ar || '',
            unit_title_en: lesson.unit_title_en || '',
            lesson_title_ar: lesson.lesson_title_ar || '',
            lesson_title_en: lesson.lesson_title_en || '',
            question_ar: q.question_ar,
            question_en: q.question_en,
            options_ar: q.options_ar,
            options_en: q.options_en || q.options_ar,
            correct_answer: String(q.correct_answer),
            explanation_ar: q.explanation_ar,
            explanation_en: q.explanation_en || q.explanation_ar,
            solution_steps_ar: q.solution_steps_ar,
            solution_steps_en: q.solution_steps_en || q.solution_steps_ar,
            golden_rule_ar: q.golden_rule_ar,
            golden_rule_en: q.golden_rule_en || q.golden_rule_ar,
            feedback_question_ar: q.feedback_question_ar,
            feedback_question_en: q.feedback_question_en || q.feedback_question_ar,
            feedback_options_ar: q.feedback_options_ar,
            feedback_options_en: q.feedback_options_en || q.feedback_options_ar,
            feedback_correct_answer: String(q.feedback_correct_answer),
            feedback_explanation_ar: q.feedback_explanation_ar,
            feedback_explanation_en: q.feedback_explanation_en || q.feedback_explanation_ar,
            difficulty: (q.difficulty === 'hard') ? 'hard' : 'medium',
            page_number: Number(q.page_number) || 0,
            paragraph: q.paragraph || ''
          });
        }
        if (qs.length === 0) break;
      }
      if (all.length) {
        for (let i = 0; i < all.length; i += 100) {
          const chunk = all.slice(i, i + 100);
          await base44.asServiceRole.entities.QuestionBankQuestion.bulkCreate(chunk);
        }
        createdTotal += all.length;
        processed++;
      }
    }

    return Response.json({ processed, created: createdTotal, remaining: remaining - processed, total, batch_size: batchSize });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});