import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// إرسال رسالة واتساب فردي أو جماعي للطلاب/أولياء الأمور.
// body: { mode: 'single' | 'broadcast', user_id?, message, audience: 'all' | 'parents' | 'students' }
// ينشئ أيضاً سجل AdminNotification ليصدر صوت/توست لدى المستخدمين.
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Forbidden: admin only' }, { status: 403 });
    }

    const body = await req.json().catch(() => ({}));
    const mode = body.mode || 'single';
    const message = (body.message || '').trim();
    const audience = body.audience || 'all';
    const grade = (body.grade || '').trim();
    if (!message) return Response.json({ error: 'message required' }, { status: 400 });

    const token = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');
    const credentialsMissing = !token || !phoneNumberId;

    // جمع المستلمين من StudentProfile
    let profiles = [];
    if (mode === 'single') {
      if (!body.user_id) return Response.json({ error: 'user_id required for single mode' }, { status: 400 });
      profiles = await base44.asServiceRole.entities.StudentProfile.filter({ user_id: body.user_id });
    } else {
      let page = await base44.asServiceRole.entities.StudentProfile.list('created_date', 1000);
      profiles.push(...page);
      while (page.length === 1000 && profiles.length < 5000) {
        page = await base44.asServiceRole.entities.StudentProfile.list('created_date', 1000, profiles.length);
        if (!page.length) break;
        profiles.push(...page);
      }
      // فلترة حسب الصف عند تحديده
      if (grade) profiles = profiles.filter((p) => (p.grade || '').trim() === grade);
    }

    const norm = (n) => (n ? String(n).replace(/[^\d]/g, '') : '');
    const recipients = [];
    profiles.forEach((p) => {
      const student = norm(p.phone);
      const parent = norm(p.parent_phone);
      if (audience === 'parents') {
        if (parent.length >= 8) recipients.push({ name: p.full_name, phone: parent });
      } else if (audience === 'students') {
        if (student.length >= 8) recipients.push({ name: p.full_name, phone: student });
      } else {
        [...new Set([student, parent].filter((n) => n.length >= 8))].forEach((n) =>
          recipients.push({ name: p.full_name, phone: n })
        );
      }
    });

    let sent = 0, failed = 0;
    const log = [];

    if (!credentialsMissing) {
      for (const r of recipients) {
        try {
          const text = `📩 رسالة من المشرف\n\n${message}`;
          const res = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ messaging_product: 'whatsapp', to: r.phone, type: 'text', text: { body: text } }),
          });
          if (!res.ok) throw new Error(await res.text());
          sent++;
        } catch (e) {
          failed++;
          log.push({ phone: r.phone, error: String(e.message || e).slice(0, 200) });
        }
      }
    } else {
      failed = recipients.length;
      log.push({ error: 'WHATSAPP_ACCESS_TOKEN not configured' });
    }

    // سجل إشعار داخل التطبيق → يُشغّل صوتاً وتوست لدى المستخدمين
    await base44.asServiceRole.entities.AdminNotification.create({
      target_user_id: mode === 'single' ? body.user_id : null,
      title_ar: mode === 'single' ? 'رسالة من المشرف' : 'إعلان جماعي من المشرف',
      body_ar: message,
      kind: mode === 'single' ? 'individual' : 'broadcast',
    });

    return Response.json({
      sent,
      failed,
      total: recipients.length,
      credentialsMissing,
      log: log.slice(0, 30),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});