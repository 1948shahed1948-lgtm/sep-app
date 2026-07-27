# دليل تفعيل الشراء داخل التطبيق (In-App Purchase) — RevenueCat

تم تجهيز الكود بالكامل. هذه الخطوات اليدوية المتبقية لتفعيل الدفع الحقيقي على Google Play و App Store.

---

## 1️⃣ حساب RevenueCat (مجاني حتى 10 آلاف دولار شهرياً)
1. سجّل في https://app.revenuecat.com
2. أنشئ مشروعاً جديداً → انسخ:
   - **Public SDK Key (Android)** — يبدأ بـ `goog_`
   - **Public SDK Key (iOS)** — يبدأ بـ `appl_`
   - **Secret API Key** — يبدأ بـ `sk_`

## 2️⃣ ضبط المفاتيح
### المفاتيح العامة (في الكود):
افتح `src/lib/iap.js` وعدّل:
```js
export const REVENUECAT_PUBLIC_SDK_KEY_ANDROID = 'goog_xxxxx';  // ← الصق هنا
export const REVENUECAT_PUBLIC_SDK_KEY_IOS = 'appl_xxxxx';      // ← الصق هنا
```

### المفتاح السري (في منصة Base44):
Dashboard → Settings → Secrets → أضف:
- `REVENUECAT_API_KEY` = `sk_xxxxx`

## 3️⃣ إعداد المنتجات في RevenueCat
1. في لوحة RevenueCat → **Products** → أضف معرّفات منتجات Google Play (مثال: `quizgate_monthly`, `quizgate_yearly`)
2. في **Entitlements** → أنشئ استحقاقاً باسم `premium` واربطه بالمنتجين
3. في **Offerings** → أنشئ Offering واحداً (اجعله Current) يحتوي على:
   - Package بمعرّف `$rc_monthly` → المنتج الشهري
   - Package بمعرّف `$rc_annual` → المنتج السنوي

## 4️⃣ Google Play Console (منتجاتك جاهزة ✅)
- تأكد أن معرّفات المنتجات في Play Console تطابق ما أضفته في RevenueCat
- اربط تطبيق Play Console بمشروع RevenueCat (Service Account + Billing key)
- فعّل اختبار الاشتراكات بحساب اختباري

## 5️⃣ App Store Connect (للأيفون — لاحقاً)
- أنشئ منتجي اشتراك بنفس المعرّفات (`quizgate_monthly`, `quizgate_yearly`)
- اربط App Store Connect بـ RevenueCat (Shared Secret + App Store Connect API key)

## 6️⃣ بناء التطبيق الأصلي (محلياً)
```bash
npm run build
npx cap add android
npx cap sync
npx cap open android   # → Android Studio → بناء APK/AAB
```
للأيفون (لاحقاً):
```bash
npx cap add ios
npx cap sync ios
npx cap open ios       # → Xcode → بناء
```

> 💡 قبل البناء، ضع package id في `capacitor.config.ts` (`appId`) مطابقاً لما في Google Play Console.

## 7️⃣ آلية العمل في التطبيق
- **داخل التطبيق الأصلي** (Android/iOS): يظهر شراء RevenueCat تلقائياً
- **على الويب**: يبقى شراء Stripe كحل بديل
- التطبيق يكتشف البيئة تلقائياً ويعرض الطريقة المناسبة
- بعد كل شراء، يتواصل الكود مع دالة `syncIapEntitlement` لتحديث حالة الاشتراك في قاعدة البيانات