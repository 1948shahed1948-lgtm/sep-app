// Returns the Moyasar publishable key to the frontend so the payment form
// can be initialized. The secret key stays server-side only.

Deno.serve(async (req) => {
  try {
    const publishableKey = Deno.env.get('MOYASAR_PUBLISHABLE_KEY');
    if (!publishableKey) {
      return Response.json({ error: 'MOYASAR_PUBLISHABLE_KEY not set' }, { status: 500 });
    }
    return Response.json({ publishable_key: publishableKey });
  } catch (error) {
    console.error('getMoyasarConfig error', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});