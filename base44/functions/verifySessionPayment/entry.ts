import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';
import { verifyAndMarkSessionPaid } from '../../shared/moyasar.ts';

/**
 * Called by the frontend after Moyasar redirects back to /my-bookings with
 * a payment_id. Verifies the session payment with Moyasar and marks the
 * booking as paid.
 *
 * Body: { payment_id }
 * Returns: { marked, booking_id, session_price } or { marked: false, status }
 */
export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const paymentId = body.payment_id;
    if (!paymentId) {
      return Response.json({ error: 'payment_id required' }, { status: 400 });
    }
    const result = await verifyAndMarkSessionPaid(base44, paymentId);
    return Response.json(result);
  } catch (error) {
    console.error('verifySessionPayment error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}