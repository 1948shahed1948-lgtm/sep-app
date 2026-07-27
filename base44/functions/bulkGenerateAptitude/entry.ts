import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Generates aptitude-test training questions for a single topic via LLM and stores them.
// Payload: { section: "verbal"|"quantitative", topic_index: number, grade: number, count: number }
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // Any authenticated student may trigger question generation for practice.
    // Database writes are performed with the service role below, so student
    // sessions never need direct create permissions on AptitudeQuestion.
    const body = await req.json().catch(() => ({}));
    const section = body.section === 'quantitative' ? 'quantitative' : 'verbal';
    const topicIndex = Number(body.topic_index) || 0;
    const grade = Math.min(Math.max(Number(body.grade) || 12, 1), 12);
    const count = Math.min(Number(body.count) || 20, 40);

    const topics = {
      verbal: ["استيعاب المقروء", "إكمال الجمل", "التناظر اللفظي", "الخطأ السياقي", "المفردات والمعاني"],
      quantitative: ["الحساب والأعداد", "الجبر والمعادلات", "الهندسة", "الإحصاء والاحتمالات", "المقارنات الكمية"]
    };
    const topicAr = topics[section][topicIndex] || topics[section][0];

    const all = [];
    let safety = 0;
    while (all.length < count && safety < 8) {
      safety++;
      const thisBatch = Math.min(8, count - all.length);
      const prompt = `أنت خبير في اختبارات القدرات (الاستعداد العام) التي تعقدها الجامعات السعودية (مركز قياس).
المهمة: توليد ${thisBatch} أسئلة اختيار من متعدد (4 خيارات) لقسم "${section === 'verbal' ? 'اللفظي' : 'الكمي'}"، موضوع "${topicAr}"، مناسب لمستوى طلاب الصف ${grade} (السعودية).

تعليمات صارمة:
- كل سؤال له 4 خيارات، خيار واحد صحيح فقط.
- correct_answer: مؤشر الإجابة الصحيحة كنص: "0" أو "1" أو "2" أو "3".
- question_ar: نص السؤال بالعربية الفصيحة الواضحة.
- question_en: ترجمة إنجليزية دقيقة للسؤال.
- options_ar: مصفوفة 4 خيارات عربية.
- options_en: مصفوفة 4 خيارات إنجليزية بنفس الترتيب.
- explanation_ar: شرح وافٍ لسبب صحة الإجابة ولماذا البدائل الأخرى خاطئة.
- explanation_en: ترجمة إنجليزية للشرح.
- تنوّع في الأسئلة ولا تكرر المفهوم حرفياً.
- اجعل الأسئلة واقعية ومطابقة لأسلوب اختبار القدرات السعودي.
- للقسم الكمي: اكتب الأرقام بالعربية في النص العربي والإنجليزية في النص الإنجليزي.

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
                  explanation_en: { type: "string" }
                },
                required: ["question_ar", "question_en", "options_ar", "options_en", "correct_answer", "explanation_ar", "explanation_en"]
              }
            }
          },
          required: ["questions"]
        }
      });

      const qs = Array.isArray(res) ? res : (res.questions || []);
      if (!qs.length) break;
      for (const q of qs) {
        if (all.length >= count) break;
        if (!q.options_ar || q.options_ar.length !== 4) continue;
        all.push({
          section,
          topic_index: topicIndex,
          grade,
          question_ar: q.question_ar,
          question_en: q.question_en,
          options_ar: q.options_ar,
          options_en: q.options_en || q.options_ar,
          correct_answer: String(q.correct_answer),
          explanation_ar: q.explanation_ar,
          explanation_en: q.explanation_en || q.explanation_ar
        });
      }
    }

    let created = 0;
    if (all.length) {
      for (let i = 0; i < all.length; i += 100) {
        const chunk = all.slice(i, i + 100);
        await base44.asServiceRole.entities.AptitudeQuestion.bulkCreate(chunk);
      }
      created = all.length;
    }

    return Response.json({ created, section, topic_index: topicIndex, grade, requested: count });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});