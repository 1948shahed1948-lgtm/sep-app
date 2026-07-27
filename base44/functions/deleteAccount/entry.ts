import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    // Delete user-owned data for privacy compliance
    try { await base44.asServiceRole.entities.QuizResult.deleteMany({ user_id: user.id }); } catch {}
    try { await base44.asServiceRole.entities.MistakeEntry.deleteMany({ user_id: user.id }); } catch {}
    try { await base44.asServiceRole.entities.UserProgress.deleteMany({ user_id: user.id }); } catch {}

    // Delete the user account itself (requires service role)
    await base44.asServiceRole.entities.User.delete(user.id);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});