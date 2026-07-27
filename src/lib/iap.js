import { Capacitor } from '@capacitor/core';
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { base44 } from '@/api/base44Client';
import { getDeviceId } from '@/lib/access';

/**
 * In-App Purchase service — RevenueCat (Google Play Billing + Apple StoreKit).
 *
 * On native builds (Capacitor) this drives real IAP via RevenueCat.
 * On web it is a no-op; the app falls back to Stripe (see Subscribe.jsx).
 *
 * ── MANUAL SETUP (one time) ──────────────────────────────────────────
 * 1. Create a free account at https://app.revenuecat.com
 * 2. Add an Android app (package id) and an iOS app (bundle id)
 * 3. In Google Play Console link the in-app products; in App Store Connect
 *    create subscription products with the same product ids.
 * 4. In RevenueCat → Products, add those product ids. Then create an
 *    Entitlement named "premium" and an Offering whose packages use
 *    identifiers "$rc_monthly" and "$rc_annual".
 * 5. Paste the public SDK keys below (they are safe to ship in the app):
 *      REVENUECAT_PUBLIC_SDK_KEY_ANDROID  → goog_xxxxxx
 *      REVENUECAT_PUBLIC_SDK_KEY_IOS       → appl_xxxxxx
 *    And the server secret (sk_xxxxxx) into platform secrets as
 *    REVENUECAT_API_KEY (done via Base44 secrets).
 * ─────────────────────────────────────────────────────────────────────
 */

export const REVENUECAT_PUBLIC_SDK_KEY_ANDROID = 'goog_gqOhYBceoZvrIeyUGrSWdffVbgU';
export const REVENUECAT_PUBLIC_SDK_KEY_IOS = 'test_BwtMFkszEszrFlluelHGpbQEBMm';
export const ENTITLEMENT_ID = 'بوابة الأسئلة بلس Pro';

let initialized = false;

/** True only when running inside a Capacitor native shell (Android/iOS). */
export function isIapAvailable() {
  try {
    return Capacitor.isNativePlatform();
  } catch {
    return false;
  }
}

async function ensureInit() {
  if (!isIapAvailable()) return false;
  if (initialized) return true;
  const platform = Capacitor.getPlatform();
  const apiKey =
    platform === 'ios' ? REVENUECAT_PUBLIC_SDK_KEY_IOS : REVENUECAT_PUBLIC_SDK_KEY_ANDROID;
  if (!apiKey) return false;
  try {
    await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
    await Purchases.configure({ apiKey });
    initialized = true;
    return true;
  } catch (e) {
    console.error('RevenueCat init failed', e);
    return false;
  }
}

/** Log the device in to RevenueCat using the local device id as appUserID. */
async function loginDevice() {
  const deviceId = getDeviceId();
  if (!deviceId) return;
  try {
    await Purchases.logIn({ appUserID: deviceId });
  } catch (e) {
    // already logged in or harmless — ignore
  }
}

/** Fetch live offerings from RevenueCat (price strings come from the store). */
export async function getIapOfferings() {
  const ok = await ensureInit();
  if (!ok) return null;
  await loginDevice();
  const { currentOffering, offerings } = await Purchases.getOfferings();
  const offering = currentOffering || (offerings && offerings[0]);
  if (!offering) return null;
  const mapPkg = (p) => ({
    identifier: p.identifier,
    product_id: p.product?.identifier,
    price_string: p.product?.priceString,
    plan: /annual|year/i.test(p.identifier || p.product?.identifier || '')
      ? 'yearly'
      : 'monthly',
    raw: p,
  });
  return {
    packages: (offering.availablePackages || []).map(mapPkg),
  };
}

/** Purchase a plan ('monthly' | 'yearly') via the native store. */
export async function iapPurchase(plan) {
  const ok = await ensureInit();
  if (!ok) throw new Error('IAP not available on this platform');
  await loginDevice();
  const offerings = await getIapOfferings();
  if (!offerings) throw new Error('no offerings configured');
  const targetId = plan === 'yearly' ? '$rc_annual' : '$rc_monthly';
  const pkg =
    offerings.packages.find((p) => p.identifier === targetId) ||
    offerings.packages.find((p) => p.plan === plan);
  if (!pkg) throw new Error('package not found for plan: ' + plan);
  const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg.raw });
  await syncEntitlement();
  return customerInfo;
}

/** Restore previous purchases (e.g. after reinstall / new device). */
export async function iapRestore() {
  const ok = await ensureInit();
  if (!ok) throw new Error('IAP not available on this platform');
  await loginDevice();
  const { customerInfo } = await Purchases.restorePurchases();
  await syncEntitlement();
  return customerInfo;
}

/** Verify the current entitlement with the backend (updates Subscription entity). */
export async function syncEntitlement() {
  const ok = await ensureInit();
  if (!ok) return null;
  const deviceId = getDeviceId();
  if (!deviceId) return null;
  try {
    const res = await base44.functions.invoke('syncIapEntitlement', {
      device_id: deviceId,
      app_user_id: deviceId,
      platform: Capacitor.getPlatform() === 'ios' ? 'ios' : 'android',
    });
    return res?.data || res;
  } catch (e) {
    console.error('syncEntitlement failed', e);
    return null;
  }
}

/** Check current entitlement status without purchasing. */
export async function getIapCustomerInfo() {
  const ok = await ensureInit();
  if (!ok) return null;
  try {
    const { customerInfo } = await Purchases.getCustomerInfo();
    const ent = customerInfo?.entitlements?.active?.[ENTITLEMENT_ID];
    return ent
      ? {
          active: true,
          expires: ent.expirationDate || null,
          product_id: ent.productIdentifier,
        }
      : { active: false };
  } catch {
    return null;
  }
}