import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const subject = body.subject || 'physics';
    const project = body.project || 'neom';
    const count = Number(body.count) || 5;

    const projects = {
      neom: { ar: 'نيوم', en: 'NEOM', goal_ar: 'مدينة المستقبل الذكية', goal_en: 'Smart future city' },
      the_line: { ar: 'ذا لاين', en: 'THE LINE', goal_ar: 'مدن خطية صفرية الكربون', goal_en: 'Zero-carbon linear cities' },
      red_sea: { ar: 'البحر الأحمر', en: 'Red Sea Project', goal_ar: 'سياحة فاخرة مستدامة', goal_en: 'Sustainable luxury tourism' },
      industrial_valley: { ar: 'الوادي الصناعي', en: 'Industrial Valley', goal_ar: 'تصنيع وتقنية متقدمة', goal_en: 'Advanced manufacturing & tech' },
      qiddiya: { ar: 'القدية', en: 'Qiddiya', goal_ar: 'عاصمة الترفيه والرياضة', goal_en: 'Entertainment & sports capital' },
      rosnam: { ar: 'روزنام', en: 'ROSNAM', goal_ar: 'تطوير جبلي مستدام', goal_en: 'Sustainable mountain development' },
      vision2030: { ar: 'رؤية 2030', en: 'Vision 2030', goal_ar: 'تنويع الاقتصاد', goal_en: 'Economic diversification' }
    };

    const proj = projects[project] || projects.neom;

    const subjects = {
      physics: { ar: 'الفيزياء', en: 'Physics', topics_ar: ['الانعكاس والمرايا', 'الضوء والانكسار', 'الحركة والتسارع', 'الطاقة والموجات', 'الكهرباء والمغناطيسية'], topics_en: ['Reflection & Mirrors', 'Light & Refraction', 'Motion & Acceleration', 'Energy & Waves', 'Electricity & Magnetism'] },
      math: { ar: 'الرياضيات', en: 'Mathematics', topics_ar: ['النسبة والتناسب', 'الهندسة والمساحات', 'الإحصاء والاحتمالات', 'الدوال والمعادلات', 'التفاضل والتكامل'], topics_en: ['Ratio & Proportion', 'Geometry & Areas', 'Statistics & Probability', 'Functions & Equations', 'Calculus'] },
      chemistry: { ar: 'الكيمياء', en: 'Chemistry', topics_ar: ['الروابط الكيميائية', 'التفاعلات والأحماض', 'الكمية والذرّات', 'الحالة والخصائص', 'الكيمياء الخضراء'], topics_en: ['Chemical Bonds', 'Reactions & Acids', 'Stoichiometry & Atoms', 'States & Properties', 'Green Chemistry'] },
      biology: { ar: 'الأحياء', en: 'Biology', topics_ar: ['الخلايا والتكاثر', 'الوراثة والجينات', 'الأنظمة البيئية', 'التركيب والوظيفة', 'التكيف والبيئة'], topics_en: ['Cells & Reproduction', 'Genetics', 'Ecosystems', 'Structure & Function', 'Adaptation & Environment'] },
      geology: { ar: 'علوم الأرض', en: 'Earth Sciences', topics_ar: ['المعادن والصخور', 'المياه الجوفية', 'الطاقة المتجددة', 'التغير المناخي', 'الجيولوجيا الهندسية'], topics_en: ['Minerals & Rocks', 'Groundwater', 'Renewable Energy', 'Climate Change', 'Engineering Geology'] },
      general: { ar: 'عام', en: 'General', topics_ar: ['التفكير النقدي', 'حل المشكلات', 'العمل الجماعي', 'الابتكار'], topics_en: ['Critical Thinking', 'Problem Solving', 'Teamwork', 'Innovation'] }
    };

    const sub = subjects[subject] || subjects.physics;

    const schema = {
      type: "object",
      properties: {
        connections: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title_ar: { type: "string" },
              title_en: { type: "string" },
              lesson_topic_ar: { type: "string" },
              lesson_topic_en: { type: "string" },
              question_ar: { type: "string" },
              question_en: { type: "string" },
              explanation_ar: { type: "string" },
              explanation_en: { type: "string" }
            },
            required: ["title_ar", "title_en", "question_ar", "question_en", "explanation_ar", "explanation_en"]
          }
        }
      },
      required: ["connections"]
    };

    const prompt = `أنت خبير تربوي سعودي تربط المفاهيم الدراسية بمشاريع رؤية المملكة 2030 الواقعية.
استخدم البحث في الإنترنت للحصول على معلومات حقيقية ودقيقة عن مشروع "${proj.ar}" (${proj.en}).
أنشئ ${count} روابط تفاعلية تربط مفاهيم مادة "${sub.ar}" بمشروع ${proj.ar}.
المفاهيم المتاحة: ${sub.topics_ar.join('، ')}.
لكل رابط:
- title_ar / title_en: عنوان جذّاب يربط المفهوم بالمشروع (مثال: "كيف تستخدم مرايا ذا لاين قوانين الانعكاس؟")
- lesson_topic_ar / lesson_topic_en: اسم المفهوم الدراسي
- question_ar / question_en: سؤال يحفّز التفكير: "أين نستخدم هذا الدرس في حياتنا؟"
- explanation_ar / explanation_en: شرح تفصيلي (3-5 أسطر) كيف يُطبَّق المفهوم فعلياً في المشروع، بأمثلة واقعية وأرقام إن أمكن.
الشرح يجب أن يكون دقيقاً علمياً ومرتبطاً بمعلومات حقيقية عن المشروع من الإنترنت.`;

    const res = await base44.integrations.Core.InvokeLLM({
      prompt,
      add_context_from_internet: true,
      model: 'gemini_3_flash',
      response_json_schema: schema
    });

    const connections = (res.connections || []).map((c, i) => ({
      title_ar: c.title_ar,
      title_en: c.title_en,
      project,
      project_ar: proj.ar,
      project_en: proj.en,
      subject_ar: sub.ar,
      subject_en: sub.en,
      grade: 'general',
      lesson_topic_ar: c.lesson_topic_ar || sub.topics_ar[i % sub.topics_ar.length],
      lesson_topic_en: c.lesson_topic_en || sub.topics_en[i % sub.topics_en.length],
      question_ar: c.question_ar,
      question_en: c.question_en,
      explanation_ar: c.explanation_ar,
      explanation_en: c.explanation_en,
      vision_goal_ar: proj.goal_ar,
      vision_goal_en: proj.goal_en,
      order: i
    }));

    let created = 0;
    if (connections.length > 0) {
      await base44.asServiceRole.entities.RealLifeConnection.bulkCreate(connections);
      created = connections.length;
    }

    return Response.json({ project: proj.ar, subject: sub.ar, requested: count, generated: connections.length, created });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});