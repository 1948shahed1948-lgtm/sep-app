import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

// Sends weekly student performance reports via Meta WhatsApp Cloud API.
// Recipients: the student's own number (User.phone) AND the parent's number (User.parent_phone).
// Called by a scheduled workflow (no user auth context) — uses service role.
// Optional body { "user_id": "..." } sends to a single user (for manual testing).
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const token = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
    const phoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");
    if (!token || !phoneNumberId) {
      return Response.json({ error: "WhatsApp credentials not configured (WHATSAPP_ACCESS_TOKEN / WHATSAPP_PHONE_NUMBER_ID)" }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const targetUserId = body.user_id || null;

    // Auth: admin user (manual) OR scheduled workflow via shared CRON_SECRET.
    const user = await base44.auth.me().catch(() => null);
    const cronSecret = Deno.env.get("CRON_SECRET");
    const providedSecret = req.headers.get('x-cron-secret') || body.cron_secret;
    if ((!user || user.role !== 'admin') && !(cronSecret && providedSecret && providedSecret === cronSecret)) {
      return Response.json({ error: 'Forbidden: admin or valid cron secret required' }, { status: 403 });
    }

    // 1. List all users with at least one WhatsApp number.
    let users = [];
    let page = await base44.asServiceRole.entities.User.list('created_date', 1000);
    users.push(...page);
    while (page.length === 1000 && users.length < 5000) {
      page = await base44.asServiceRole.entities.User.list('created_date', 1000, users.length);
      if (!page.length) break;
      users.push(...page);
    }
    const recipients = users.filter((u) => (u.phone || u.parent_phone) && (!targetUserId || u.id === targetUserId));

    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    let sent = 0, failed = 0, skipped = 0;
    const log = [];

    const sendWhatsApp = async (phoneNum, text) => {
      const res = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ messaging_product: 'whatsapp', to: phoneNum, type: 'text', text: { body: text } })
      });
      if (!res.ok) throw new Error(await res.text());
    };

    for (const user of recipients) {
      try {
        const numbers = [...new Set([user.phone, user.parent_phone]
          .map((n) => (n ? String(n).replace(/[^\d]/g, '') : ''))
          .filter((n) => n.length >= 8))];
        if (!numbers.length) { skipped++; continue; }

        // 2. Weekly quiz results.
        const results = await base44.asServiceRole.entities.QuizResult.filter({ user_id: user.id }, '-created_date', 100);
        const weekResults = results.filter((r) => new Date(r.created_date) >= weekAgo);
        const totalQuizzes = weekResults.length;
        const avgScore = totalQuizzes ? Math.round(weekResults.reduce((a, r) => a + (r.score_percentage || 0), 0) / totalQuizzes) : 0;
        const totalCorrect = weekResults.reduce((a, r) => a + (r.correct_count || 0), 0);
        const totalWrong = weekResults.reduce((a, r) => a + (r.wrong_count || 0), 0);

        // 3. Mastery by skill/lesson.
        const progress = await base44.asServiceRole.entities.UserProgress.filter({ user_id: user.id }, '-updated_date', 300);
        const skillIds = [...new Set(progress.map((p) => p.skill_id).filter(Boolean))];
        const lessonIds = [...new Set(progress.map((p) => p.lesson_id).filter(Boolean))];
        const skillMap = {}, lessonMap = {};
        await Promise.all(skillIds.map(async (id) => { try { skillMap[id] = await base44.asServiceRole.entities.Skill.get(id); } catch {} }));
        await Promise.all(lessonIds.map(async (id) => { try { lessonMap[id] = await base44.asServiceRole.entities.Lesson.get(id); } catch {} }));

        const labelOf = (p) => {
          if (p.skill_id && skillMap[p.skill_id]) return skillMap[p.skill_id].name_ar || skillMap[p.skill_id].name_en;
          if (p.lesson_id && lessonMap[p.lesson_id]) return lessonMap[p.lesson_id].title_ar || lessonMap[p.lesson_id].title_en;
          return null;
        };
        const byLabel = {};
        progress.forEach((p) => {
          const label = labelOf(p);
          if (!label) return;
          const m = p.mastery_percentage || 0;
          if (!byLabel[label] || m > byLabel[label]) byLabel[label] = m;
        });
        const mastered = Object.entries(byLabel).filter(([, m]) => m >= 80).sort((a, b) => b[1] - a[1]).slice(0, 6);
        const focus = Object.entries(byLabel).filter(([, m]) => m < 60).sort((a, b) => a[1] - b[1]).slice(0, 6);

        const masteredLines = mastered.length ? mastered.map(([l, m]) => `✅ ${l} (${m}%)`).join('\n') : '— لا توجد مهارات متقنة بعد.';
        const focusLines = focus.length ? focus.map(([l, m]) => `⚠️ ${l} (${m}%)`).join('\n') : '— لا توجد نقاط ضعف واضحة. أحسنت!';

        const name = user.full_name || 'الطالب';
        const text = `📊 التقرير الأسبوعي لأداء الطالب\nبنوك الأسئلة والاختبارات\n\n👤 الطالب: ${name}\n📅 الفترة: آخر ٧ أيام\n\n— الأداء الأسبوعي —\n📝 اختبارات: ${totalQuizzes}\n🎯 المتوسط: ${avgScore}%\n✅ صحيحة: ${totalCorrect}\n❌ خاطئة: ${totalWrong}\n\n🏅 المهارات المتقنة:\n${masteredLines}\n\n🎯 نقاط تحتاج تركيز:\n${focusLines}\n\n— بنوك الأسئلة والاختبارات`;

        // 4. Send to student + parent numbers.
        for (const num of numbers) {
          try {
            await sendWhatsApp(num, text);
            sent++;
            log.push({ user: user.id, phone: num, ok: true });
          } catch (e) {
            failed++;
            log.push({ user: user.id, phone: num, error: String(e.message || e).slice(0, 300) });
          }
        }
      } catch (e) {
        failed++;
        log.push({ user: user.id, error: e.message });
      }
    }

    return Response.json({ sent, failed, skipped, total: recipients.length, log: log.slice(0, 50) });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});