#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
#  بوابة الأسئلة بلس — بناء ملف Android App Bundle (.aab)
#  Package: com.base6a664795ea19cd7af8bd2850.app  |  Version: 1.0.0
# ─────────────────────────────────────────────────────────────────────
set -e

APP_NAME="بوابة الأسئلة بلس"
APP_ID="com.base6a664795ea19cd7af8bd2850.app"
KEYSTORE_NAME="quizgate-release.keystore"
KEYSTORE_ALIAS="quizgate"
KEYSTORE_PASS="quizgate123"
KEYSTORE_VALIDITY=10000

echo "▶️  [1/6] تثبيت اعتماديات المشروع…"
npm install

echo "▶️  [2/6] بناء تطبيق الويب (Vite)…"
npm run build

echo "▶️  [3/6] إعادة إنشاء منصة Android لضبط اسم الحزمة com.base6a664795ea19cd7af8bd2850.app…"
rm -rf android
npx cap add android

echo "▶️  [4/6] مزامنة Capacitor مع Android + فرض اسم الحزمة و versionCode…"
npx cap sync android
GRADLE="android/app/build.gradle"
MANIFEST="android/app/src/main/AndroidManifest.xml"
if [ -f "$GRADLE" ]; then
  sed -i "s/applicationId [\"'].*/applicationId \"$APP_ID\"/" "$GRADLE"
  sed -i "s/versionCode [0-9]*/versionCode 8/" "$GRADLE"
  sed -i "s/versionName [\"'].*/versionName \"1.0.7\"/" "$GRADLE"
fi
if [ -f "$MANIFEST" ]; then
  sed -i "s/package=\"[^\"]*\"/package=\"$APP_ID\"/" "$MANIFEST"
fi
PKG_PATH=$(echo "$APP_ID" | tr '.' '/')
SRC_DIR="android/app/src/main/java"
if [ -d "$SRC_DIR" ] && [ ! -d "$SRC_DIR/$PKG_PATH" ]; then
  mkdir -p "$SRC_DIR/$PKG_PATH"
  find "$SRC_DIR" -maxdepth 5 -name "*.java" -exec cp {} "$SRC_DIR/$PKG_PATH/" \;
  find "$SRC_DIR" -mindepth 1 -type d ! -path "$SRC_DIR/$PKG_PATH*" -empty -delete 2>/dev/null || true
fi

echo "▶️  [5/6] توليد مفتاح التوقيع (Keystore) إن لم يوجد…"
if [ ! -f "$KEYSTORE_NAME" ]; then
  keytool -genkeypair -v \
    -keystore "$KEYSTORE_NAME" \
    -alias "$KEYSTORE_ALIAS" \
    -keyalg RSA -keysize 2048 \
    -validity "$KEYSTORE_VALIDITY" \
    -storepass "$KEYSTORE_PASS" \
    -keypass "$KEYSTORE_PASS" \
    -dname "CN=QuizGate Plus, OU=Education, O=QuizGate, L=Riyadh, ST=Riyadh, C=SA"
  echo "✅ تم إنشاء المفتاح: $KEYSTORE_NAME"
fi

echo "▶️  [6/6] بناء ملف AAB الموقّع…"
cd android
./gradlew bundleRelease \
  -Pandroid.injected.signing.store.file="../$KEYSTORE_NAME" \
  -Pandroid.injected.signing.store.password="$KEYSTORE_PASS" \
  -Pandroid.injected.signing.key.alias="$KEYSTORE_ALIAS" \
  -Pandroid.injected.signing.key.password="$KEYSTORE_PASS"

AAB_PATH="app/build/outputs/bundle/release/app-release.aab"
cd ..

if [ -f "android/$AAB_PATH" ]; then
  echo ""
  echo "🎉 ─────────────────────────────────────────"
  echo "✅ تم بناء الملف بنجاح!"
  echo "📁 المسار: android/$AAB_PATH"
  echo "📦 اسم الحزمة: $APP_ID"
  echo "🏷️  الإصدار: 1.0.0"
  echo "─────────────────────────────────────────"
  echo ""
  echo "📤 ارفع الملف الآن من:"
  echo "   https://play.google.com/console"
  echo "   → بوابة الأسئلة بلس → Production → Create release"
else
  echo "❌ فشل البناء — تحقق من الرسائل أعلاه"
  exit 1
fi