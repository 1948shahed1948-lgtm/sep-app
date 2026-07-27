// Frontend helpers for the Moyasar payment form.

const MOYASAR_FORM_VERSION = '2.2.10';
const MOYASAR_CSS = `https://cdn.jsdelivr.net/npm/moyasar-payment-form@${MOYASAR_FORM_VERSION}/dist/moyasar.css`;
const MOYASAR_JS = `https://cdn.jsdelivr.net/npm/moyasar-payment-form@${MOYASAR_FORM_VERSION}/dist/moyasar.umd.min.js`;

/** Amount in halalas (smallest SAR unit). 60 SAR monthly, 500 SAR yearly. */
export const MOYASAR_AMOUNTS = {
  monthly: 7500,
  yearly: 70000
};

let loadingPromise = null;

/** Load the Moyasar form script+css once; resolves with the global `Moyasar` class. */
export function loadMoyasarForm() {
  if (window.Moyasar) return Promise.resolve(window.Moyasar);
  if (loadingPromise) return loadingPromise;

  if (!document.querySelector(`link[href="${MOYASAR_CSS}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = MOYASAR_CSS;
    document.head.appendChild(link);
  }

  loadingPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${MOYASAR_JS}"]`);
    if (existing) {
      if (window.Moyasar) return resolve(window.Moyasar);
      existing.addEventListener('load', () => resolve(window.Moyasar));
      existing.addEventListener('error', () => reject(new Error('failed to load Moyasar form')));
      return;
    }
    const script = document.createElement('script');
    script.src = MOYASAR_JS;
    script.async = true;
    script.onload = () => resolve(window.Moyasar);
    script.onerror = () => reject(new Error('failed to load Moyasar form'));
    document.head.appendChild(script);
  });
  return loadingPromise;
}