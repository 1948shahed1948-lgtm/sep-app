import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor configuration — wraps the web build as a native Android/iOS app
 * to enable In-App Purchases via RevenueCat.
 *
 * Manual steps (run from your local machine, not in the builder):
 *   npm run build
 *   npx cap add android
 *   npx cap add ios
 *   npx cap sync
 *   npx cap open android   # → Android Studio → set package id to appId below
 *   npx cap open ios       # → Xcode → set bundle id to appId below
 *
 * Before building, install the native RevenueCat pods/plugins:
 *   For iOS:   cd ios/App && pod install   (Capacitor plugin auto-linked)
 *   RevenueCat plugin @revenuecat/purchases-capacitor is auto-synced via `cap sync`.
 */
const config: CapacitorConfig = {
  appId: 'com.base6a664795ea19cd7af8bd2850.app',
  appName: 'بوابة الأسئلة بلس',
  webDir: 'dist',
  android: {
    allowMixedContent: false,
    versionCode: 8,
  },
  server: {
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'always',
  },
};

export default config;