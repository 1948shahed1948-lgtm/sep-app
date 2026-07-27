// يسجّل بداية التجربة لكل حساب بريد إلكتروني، أو يجلبها إن وُجدت.
// التجربة مرتبطة بالحساب (user_id) — لكل حساب جديد يومان فقط، ولا تُعاد بمسح بيانات الجهاز.

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const userId = body && body.user_id;
    if (!userId) {
      return Response.json({ error: 'user_id required' }, { status: 400 });
    }
    const deviceId = (body && body.device_id) || null;

    const existing = await base44.asServiceRole.entities.TrialRecord.filter({ user_id: userId });
    if (existing && existing[0]) {
      return Response.json({ trial_start: existing[0].created_date, trial_id: existing[0].id });
    }

    const created = await base44.asServiceRole.entities.TrialRecord.create({ user_id: userId, device_id: deviceId });
    return Response.json({ trial_start: created.created_date, trial_id: created.id });
  } catch (error) {
    console.error('getOrCreateTrial error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}