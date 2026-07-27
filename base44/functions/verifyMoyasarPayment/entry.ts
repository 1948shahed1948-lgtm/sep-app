import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { verifyAndActivate } from '../../shared/moyasar.ts';

/**
 * Called by the frontend after Moyasar redirects back to the app with
 * the payment id. Verifies the payment with Moyasar and activates the
 * subscription for the paid period.
 *
 * Body: { payment_id }
 * Returns: { activated, plan, current_period_end } or { activated: false, status }
 */
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const paymentId = body.payment_id;
    if (!paymentId) {
      return Response.json({ error: 'payment_id required' }, { status: 400 });
    }
    const result = await verifyAndActivate(base44, paymentId);
    return Response.json(result);
  } catch (error) {
    console.error('verifyMoyasarPayment error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});