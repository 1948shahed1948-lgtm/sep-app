import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// داهر — مساعد المنصة الذكي
// يجيب عن أسئلة المستخدمين ضمن نطاق المنصة التعليمية فقط.
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const userMessage = (body.message || '').trim();
    const lang = body.lang === 'en' ? 'en' : 'ar';

    if (!userMessage) {
      return Response.json({ error: 'Empty message' }, { status: 400 });
    }

    const systemPrompt = `أنت "داهر"، المساعد الذكي للمنصة السعودية للتعليم (SEP).
نطاقك مقتصر حصراً على المنصة ومحتواها التعليمي:
- المناهج السعودية (النظام الوطني) لجميع الصفوف من 1 إلى 12.
- النظام الدولي.
- اختبارات القدرات الجامعية (لفظي وكمي) والتحصيلي.
- الاختبارات المقننة: التشخيصية، المعيارية، التكيفية.
- بنك الأسئلة، تحدي العبقري، المراجعة اليومية، دفتر الأخطاء.
- ربط المنهج بمشاريع رؤية 2030 (نيوم، ذا لاين، البحر الأحمر...).
- تتبع تقدم الطالب وإتقان المهارات.

قواعد صارمة:
1. أجب فقط عن الأسئلة المتعلقة بالمنصة التعليمية أو المناهج السعودية أو الميزات المذكورة.
2. إذا كان السؤال خارج النطاق (مثلاً: طبي، سياسي، رياضي عام، ترفيهي)، اعتذر بأدب ووضّح أنك مخصص للمنصة التعليمية فقط.
3. لا تكتب محتوى إبداعياً حراً (قصص، قصائد) ولا تولّد أسئلة اختبارات — هذه ميزة منفصلة يديرها المشرف.
4. كن دقيقاً وموجزاً ومفيداً. أجب بلغة المستخدم (${lang === 'ar' ? 'العربية' : 'الإنجليزية'}).
5. إذا سُئلت عن كيفية استخدام ميزة في المنصة، اشرح الخطوات بوضوح.
6. لا تذكر أي تفاصيل داخلية عن البنية التقنية للنظام.`;

    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `${systemPrompt}\n\nسؤال المستخدم: ${userMessage}`,
      response_json_schema: {
        type: "object",
        properties: {
          answer: { type: "string", description: "إجابة داهر على سؤال المستخدم" },
          in_scope: { type: "boolean", description: "هل السؤال ضمن نطاق المنصة" }
        },
        required: ["answer", "in_scope"]
      }
    });

    return Response.json({ answer: res.answer, in_scope: res.in_scope });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});