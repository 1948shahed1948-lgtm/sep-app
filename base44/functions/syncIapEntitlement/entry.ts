import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

const ENTITLEMENT_ID = 'بوابة الأسئلة بلس Pro';
const RC_BASE = 'https://api.revenuecat.com/v1/subscribers';

/**
 * Verifies a user's in-app purchase entitlement with RevenueCat and
 * syncs the result into the Subscription entity (by device_id / user_id).
 *
 * Body: { device_id, app_user_id?, user_id?, platform? }
 *   - device_id: the local device identifier (used as RevenueCat appUserID)
 *   - platform: 'android' | 'ios' (sent as X-Platform header)
 *
 * Returns: { status, plan, current_period_end, store }
 */
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const deviceId = body.device_id;
    const appUserId = body.app_user_id || deviceId;
    if (!appUserId) {
      return Response.json({ error: 'device_id required' }, { status: 400 });
    }

    const apiKey = Deno.env.get('REVENUECAT_API_KEY');
    if (!apiKey) {
      console.error('syncIapEntitlement: REVENUECAT_API_KEY not set');
      return Response.json({ error: 'REVENUECAT_API_KEY not set' }, { status: 500 });
    }

    // Resolve the user id (best-effort; IAP works without login too)
    let userId = body.user_id || '';
    if (!userId) {
      try {
        const u = await base44.auth.me();
        userId = u?.id || '';
      } catch (_) { /* public app — ok */ }
    }

    // Query RevenueCat
    const platform = body.platform === 'ios' ? 'ios' : 'android';
    const res = await fetch(`${RC_BASE}/${encodeURIComponent(appUserId)}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-Platform': platform,
      },
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      console.error('RevenueCat fetch failed', res.status, txt);
      return Response.json(
        { error: 'RevenueCat fetch failed', status: res.status },
        { status: 502 }
      );
    }
    const data = await res.json();
    const entitlements = data?.subscriber?.entitlements || {};
    const ent = entitlements[ENTITLEMENT_ID];

    let status = 'expired';
    let plan: string | null = null;
    let periodEnd: string | null = null;
    let store = 'revenuecat';

    if (ent) {
      const expiresDate = ent.expires_date || null;
      const productId: string = ent.product_identifier || ent.product_id || '';
      const isActive =
        typeof ent.is_active === 'boolean'
          ? ent.is_active
          : !expiresDate || new Date(expiresDate).getTime() > Date.now();

      if (isActive) {
        status = 'active';
        periodEnd = expiresDate ? new Date(expiresDate).toISOString() : null;
        store = (data?.subscriber?.subscriptions?.[productId]?.store) || store;
        plan = /year|annual/i.test(productId) ? 'yearly' : 'monthly';
      }
    }

    // Find existing Subscription record (by device or user)
    let existing: any = null;
    const lists: any[] = [];
    if (deviceId) {
      const l1 = await base44.asServiceRole.entities.Subscription.filter({ device_id: deviceId });
      if (l1 && l1[0]) lists.push(l1[0]);
    }
    if (!lists[0] && userId) {
      const l2 = await base44.asServiceRole.entities.Subscription.filter({ user_id: userId });
      if (l2 && l2[0]) lists.push(l2[0]);
    }
    existing = lists[0] || null;

    const recordData = {
      user_id: userId || null,
      device_id: deviceId || null,
      status,
      plan: plan || (existing?.plan ?? 'monthly'),
      current_period_end: periodEnd,
    };

    if (existing) {
      await base44.asServiceRole.entities.Subscription.update(existing.id, recordData);
    } else if (status === 'active') {
      await base44.asServiceRole.entities.Subscription.create(recordData);
    }

    return Response.json({
      status,
      plan,
      current_period_end: periodEnd,
      store,
    });
  } catch (error) {
    console.error('syncIapEntitlement error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});