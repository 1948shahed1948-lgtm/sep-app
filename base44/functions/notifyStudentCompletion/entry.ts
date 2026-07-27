import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// يُستدعى من طرف الطالب عند إتمام اختبار/درس — يُنشئ سجل StudentActivity + AdminNotification (للمشرف فقط).
// body: { kind: 'test_completed' | 'lesson_finished', label_ar, label_en, details?, route? }
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const kind = body.kind || 'test_completed';
    const label_ar = (body.label_ar || '').trim();
    const label_en = (body.label_en || '').trim();
    const details = (body.details || '').trim();
    const route = body.route || '';
    const full_name = user.full_name || body.full_name || 'طالب';

    // سجل النشاط (يراه المشرف في لوحة النشاط)
    await base44.asServiceRole.entities.StudentActivity.create({
      user_id: user.id,
      full_name,
      activity_type: kind,
      label_ar,
      label_en,
      details,
      route,
    });

    // إشعار فوري للمشرف (broadcast لكن kind=report → يُعرض للمشرف فقط عبر NotificationListener)
    await base44.asServiceRole.entities.AdminNotification.create({
      target_user_id: null,
      title_ar: `${full_name} — ${label_ar}`,
      body_ar: details || label_ar,
      kind: 'report',
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});