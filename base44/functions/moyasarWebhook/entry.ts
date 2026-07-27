import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { verifyAndActivate, verifyAndMarkSessionPaid } from '../../shared/moyasar.ts';

/**
 * Moyasar webhook endpoint. Moyasar sends the payment object in the body
 * when a payment status changes. We re-fetch the payment from Moyasar
 * (server-side, with the secret key) to verify authenticity before
 * activating the subscription — so a forged request without a real paid
 * payment cannot grant access.
 *
 * Configure this URL in the Moyasar dashboard under webhook settings.
 */
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const paymentId = body.id || body.data?.id || body.payment_id;
    if (!paymentId) {
      return Response.json({ received: true });
    }
    // Peek at the payment metadata to route to the correct handler.
    // Session payments carry metadata.type === 'session'; subscription
    // payments carry metadata.plan. We re-fetch the payment server-side
    // inside each verifier, so a forged webhook without a real paid payment
    // cannot grant access or mark a booking paid.
    const meta = body.metadata || body.data?.metadata || {};
    try {
      if (meta.type === 'session') {
        await verifyAndMarkSessionPaid(base44, paymentId);
      } else {
        await verifyAndActivate(base44, paymentId);
      }
    } catch (e) {
      // Log but don't 500 — Moyasar retries on non-2xx, and a failure here
      // (e.g. payment not paid yet) should not trigger retries.
      console.error('moyasarWebhook verify failed', e.message);
    }
    return Response.json({ received: true });
  } catch (error) {
    console.error('moyasarWebhook error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});