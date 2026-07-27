// Shared Moyasar payment verification + subscription activation logic.
// Used by verifyMoyasarPayment (frontend redirect) and moyasarWebhook (Moyasar callback).

const PLAN_AMOUNTS = {
  monthly: 7500,   // 75 SAR in halalas
  yearly: 70000   // 700 SAR in halalas
};

const PLAN_DAYS = {
  monthly: 30,
  yearly: 365
};

/**
 * Fetch a payment from Moyasar, verify it is paid with the expected amount,
 * then create/update the Subscription record from the payment's metadata.
 * Returns { activated, plan, current_period_end } or { activated: false, status }.
 */
async function sendWhatsAppConfirmation(base44, userId, plan, periodEnd) {
  try {
    if (!userId) return;
    const token = Deno.env.get('WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID');
    if (!token || !phoneNumberId) return;
    const profiles = await base44.asServiceRole.entities.StudentProfile.filter({ user_id: userId });
    const profile = profiles && profiles[0] ? profiles[0] : null;
    if (!profile) return;
    const raw = (profile.phone || '').replace(/[^\d]/g, '');
    if (!raw) return;
    let to = raw;
    if (to.startsWith('00')) to = to.slice(2);
    if (to.startsWith('966')) to = to;
    else if (to.startsWith('0')) to = '966' + to.slice(1);
    else if (to.startsWith('5') && to.length === 9) to = '966' + to;
    const name = profile.full_name || 'عزيزي المشترك';
    const planLabel = plan === 'yearly' ? 'سنوية' : 'شهرية';
    const text = `✦ تم تأكيد اشتراكك بنجاح\n\nأهلاً ${name} 👋\nتم تفعيل اشتراكك في «بوابة الأسئلة بلس».\n\n📋 الخطة: ${planLabel}\n📅 يتجدد في: ${periodEnd}\n\nوصولك الكامل مفعّل الآن — يمكنك استخدام كل البنوك والاختبارات.\n\nشكراً لثقتك 🌹`;
    await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text } }),
    });
  } catch (e) {
    console.error('whatsapp notify failed', e.message);
  }
}

export async function verifyAndActivate(base44, paymentId) {
  const secretKey = Deno.env.get('MOYASAR_SECRET_KEY');
  if (!secretKey) throw new Error('MOYASAR_SECRET_KEY not set');

  const auth = btoa(secretKey + ':');
  const res = await fetch(`https://api.moyasar.com/v1/payments/${encodeURIComponent(paymentId)}`, {
    headers: { Authorization: `Basic ${auth}` }
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Moyasar fetch failed (${res.status}): ${txt}`);
  }
  const payment = await res.json();

  if (payment.status !== 'paid') {
    return { activated: false, status: payment.status };
  }

  const meta = payment.metadata || {};
  const plan = meta.plan;
  if (!plan || !PLAN_AMOUNTS[plan]) {
    throw new Error('invalid or missing plan in payment metadata');
  }
  // Guard against amount tampering: the paid amount must match the selected plan.
  if (Number(payment.amount) !== PLAN_AMOUNTS[plan]) {
    throw new Error(`amount mismatch: expected ${PLAN_AMOUNTS[plan]} got ${payment.amount}`);
  }

  const deviceId = meta.device_id || '';
  const userId = meta.user_id || '';
  if (!deviceId && !userId) {
    throw new Error('payment metadata missing device_id and user_id');
  }

  const periodEnd = new Date(Date.now() + PLAN_DAYS[plan] * 86400000).toISOString();

  // Find existing Subscription record (by device or user)
  let existing = null;
  if (deviceId) {
    const l1 = await base44.asServiceRole.entities.Subscription.filter({ device_id: deviceId });
    if (l1 && l1[0]) existing = l1[0];
  }
  if (!existing && userId) {
    const l2 = await base44.asServiceRole.entities.Subscription.filter({ user_id: userId });
    if (l2 && l2[0]) existing = l2[0];
  }

  const recordData = {
    user_id: userId || null,
    device_id: deviceId || null,
    status: 'active',
    plan,
    store: 'moyasar',
    current_period_end: periodEnd
  };

  const wasActive = existing?.status === 'active';
  if (existing) {
    await base44.asServiceRole.entities.Subscription.update(existing.id, recordData);
  } else {
    await base44.asServiceRole.entities.Subscription.create(recordData);
  }

  // أرسل تأكيد WhatsApp عند التفعيل الأول فقط (لا يتكرر عند إعادة التحقق)
  if (!wasActive && userId) {
    const periodEndLabel = new Date(periodEnd).toLocaleDateString('ar');
    await sendWhatsAppConfirmation(base44, userId, plan, periodEndLabel);
  }

  return { activated: true, plan, current_period_end: periodEnd };
}

/**
 * Verify a Moyasar payment for a tutoring session and mark the booking as paid.
 * The payment metadata must include: type='session', booking_id, session_price (SAR).
 * The paid amount (halalas) must equal session_price * 100.
 * Returns { marked: true, booking_id, session_price } or { marked: false, status }.
 */
export async function verifyAndMarkSessionPaid(base44, paymentId) {
  const secretKey = Deno.env.get('MOYASAR_SECRET_KEY');
  if (!secretKey) throw new Error('MOYASAR_SECRET_KEY not set');

  const auth = btoa(secretKey + ':');
  const res = await fetch(`https://api.moyasar.com/v1/payments/${encodeURIComponent(paymentId)}`, {
    headers: { Authorization: `Basic ${auth}` }
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Moyasar fetch failed (${res.status}): ${txt}`);
  }
  const payment = await res.json();

  if (payment.status !== 'paid') {
    return { marked: false, status: payment.status };
  }

  const meta = payment.metadata || {};
  if (meta.type !== 'session') {
    throw new Error('not a session payment');
  }
  const bookingId = meta.booking_id;
  const expectedPrice = Number(meta.session_price || 0);
  if (!bookingId) {
    throw new Error('missing booking_id in payment metadata');
  }
  // Amount in halalas must match the session price (SAR * 100)
  if (Number(payment.amount) !== Math.round(expectedPrice * 100)) {
    throw new Error(`amount mismatch: expected ${expectedPrice * 100} got ${payment.amount}`);
  }

  const booking = await base44.asServiceRole.entities.TeacherBooking.get(bookingId);
  if (!booking) {
    throw new Error(`booking ${bookingId} not found`);
  }
  if (booking.payment_status !== 'paid') {
    await base44.asServiceRole.entities.TeacherBooking.update(bookingId, {
      payment_status: 'paid',
      moyasar_payment_id: paymentId
    });
  }

  return { marked: true, booking_id: bookingId, session_price: expectedPrice };
}