#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
#  إصلاح اسم الحزمة في مشروع Android موجود → com.base6a664795ea19cd7af8bd2850.app
# ─────────────────────────────────────────────────────────────────────
set -e

TARGET_ID="com.base6a664795ea19cd7af8bd2850.app"
GRADLE_FILE="android/app/build.gradle"
MANIFEST="android/app/src/main/AndroidManifest.xml"

echo "🔧 إصلاح اسم الحزمة إلى: $TARGET_ID"

if [ ! -f "$GRADLE_FILE" ]; then
  echo "❌ لم يتم العثور على android/app/build.gradle"
  echo "   شغّل أولاً: npx cap add android"
  exit 1
fi

# 1) تحديث applicationId في build.gradle
if grep -q "applicationId" "$GRADLE_FILE"; then
  sed -i.bak "s/applicationId [\"'].*/applicationId \"$TARGET_ID\"/" "$GRADLE_FILE"
  rm -f "$GRADLE_FILE.bak"
  echo "✅ build.gradle → applicationId = $TARGET_ID"
fi

# 2) تحديث namespace في build.gradle
if grep -q "namespace" "$GRADLE_FILE"; then
  sed -i.bak "s/namespace [\"'].*/namespace \"$TARGET_ID\"/" "$GRADLE_FILE"
  rm -f "$GRADLE_FILE.bak"
  echo "✅ build.gradle → namespace = $TARGET_ID"
fi

# 3) تحديث package في AndroidManifest.xml (إن وُجد)
if [ -f "$MANIFEST" ]; then
  sed -i.bak "s/package=\"[^\"]*\"/package=\"$TARGET_ID\"/" "$MANIFEST"
  rm -f "$MANIFEST.bak"
  echo "✅ AndroidManifest.xml → package = $TARGET_ID"
fi

echo ""
echo "🎉 تم الإصلاح! الآن شغّل:"
echo "   npx cap sync android"
echo "   cd android && ./gradlew bundleRelease"