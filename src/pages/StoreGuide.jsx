import React from 'react';
import { useLang } from '@/lib/i18n';
import { Printer, FileDown, BookOpen, CheckCircle2, Link2, CreditCard, KeyRound, Image, FileText, Shield, Send } from 'lucide-react';

export default function StoreGuide() {
  const { lang } = useLang();
  const isRTL = lang === 'ar';

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8 print:bg-white print:p-0">
      {/* Action bar (hidden in print) */}
      <div className="max-w-3xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <h1 className="text-lg font-heading font-bold text-slate-800">
          {isRTL ? 'دليل رفع التطبيق على المتاجر' : 'App Store Submission Guide'}
        </h1>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12204B] text-white text-sm font-medium hover:bg-[#1c2f63] transition-colors"
        >
          <Printer className="w-4 h-4" />
          {isRTL ? 'حفظ / طباعة PDF' : 'Save / Print PDF'}
        </button>
      </div>

      {/* PDF Document */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 print:shadow-none print:border-0 print:rounded-none space-y-10 text-slate-800 leading-relaxed">

        {/* Header */}
        <header className="border-b border-slate-200 pb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#12204B]">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl font-display font-bold">
              {isRTL ? 'بنوك الأسئلة والاختبارات المعيارية السعودية' : 'Saudi Questions Gateway'}
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {isRTL ? 'دليل النشر على App Store و Google Play' : 'Publishing Guide for App Store & Google Play'}
          </p>
        </header>

        {/* Phase 1 */}
        <Section icon={BookOpen} number="1" title={isRTL ? 'داخل Base44 — التجهيز التقني' : 'Phase 1 — Inside Base44 (Technical Setup)'}>
          <Step title={isRTL ? 'فحص التطبيق (App Scan)' : 'App Scan'}>
            {isRTL
              ? 'ادخل لوحة تحكم Base44 ← قسم Mobile ← اضغط App Scan للتأكد من عدم وجود مشاكل تمنع البناء. أصلح أي تحذيرات قبل المتابعة.'
              : 'Go to Base44 Dashboard → Mobile → click App Scan to ensure no blocking issues. Fix any warnings before continuing.'}
          </Step>
          <Step title={isRTL ? 'توليد ملفات المتجر' : 'Generate Store Files'}>
            {isRTL
              ? 'في نفس قسم Mobile: اضغط Create App Store files ← يولّد ملف IPA للآيفون. اضغط Create Google Play files ← يولّد ملف AAB للأندرويد. انتظر اكتمال التوليد قبل التنزيل.'
              : 'In Mobile section: click Create App Store files → generates IPA. Click Create Google Play files → generates AAB. Wait for completion before downloading.'}
          </Step>
        </Section>

        {/* Phase 2 */}
        <Section icon={CreditCard} number="2" title={isRTL ? 'حسابات المطوّرين' : 'Phase 2 — Developer Accounts'}>
          <Step title={isRTL ? 'حساب Apple Developer (فرد)' : 'Apple Developer Account (Individual)'}>
            {isRTL
              ? 'الاشتراك في Apple Developer Program عبر developer.apple.com/programs/enroll — التكلفة 99$ سنوياً. يتطلب: Apple ID + مصادقة ثنائية + هوية رسمية + بطاقة دفع. مدة التحقق 24–48 ساعة.'
              : 'Enroll in Apple Developer Program at developer.apple.com/programs/enroll — $99/year. Requires: Apple ID + 2FA + official ID + payment card. Verification takes 24–48 hours.'}
          </Step>
          <Step title={isRTL ? 'حساب Google Play Console' : 'Google Play Console Account'}>
            {isRTL
              ? 'الاشتراك عبر play.google.com/console — التكلفة 25$ لمرة واحدة. أكمل هوية المطوّر وبيانات الحساب.'
              : 'Enroll at play.google.com/console — $25 one-time fee. Complete developer identity and account details.'}
          </Step>
        </Section>

        {/* Phase 3 */}
        <Section icon={Image} number="3" title={isRTL ? 'الأصول والمحتوى (Metadata)' : 'Phase 3 — Assets & Metadata'}>
          <Step title={isRTL ? 'أيقونة التطبيق' : 'App Icon'}>
            {isRTL
              ? 'مقاس 1024×1024 بكسل، بدون زوايا مدوّرة، صيغة PNG بدون شفافية.'
              : '1024×1024 px, no rounded corners, PNG format, no transparency.'}
          </Step>
          <Step title={isRTL ? 'لقطات الشاشة' : 'Screenshots'}>
            {isRTL
              ? 'App Store (إلزامي): 6.7 بوصة = 1290×2796 بكسل. Google Play: 1080×1920 بكسل (16:9) أو أعلى. التقط 5–8 لقطات: الرئيسية، بنك الأسئلة، التقدّم، ذكي، الإعدادات. يُفضّل الوضع العربي و RTL وجوال.'
              : 'App Store (required): 6.7" = 1290×2796 px. Google Play: 1080×1920 px (16:9) or higher. Capture 5–8 shots: Home, Question Bank, Progress, Dhaki, Settings. Prefer Arabic RTL mobile mode.'}
          </Step>
          <Step title={isRTL ? 'الوصف الثنائي اللغة' : 'Bilingual Description'}>
            {isRTL
              ? 'الاسم: بنوك الأسئلة والاختبارات المعيارية السعودية / Saudi Questions Gateway. وصف مختصر (حتى 80 حرفاً). وصف كامل (حتى 4000 حرف). كلمات مفتاحية (App Store فقط).'
              : 'Name: Saudi Questions Gateway. Short description (up to 80 chars). Full description (up to 4000 chars). Keywords (App Store only).'}
          </Step>
          <Step title={isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}>
            {isRTL
              ? 'جاهزة داخل التطبيق على /privacy. انشر التطبيق ثم استخدم الرابط: https://اسم-تطبيقك.base44.app/privacy — يفتح بدون تسجيل دخول. استخدمه في حقل Privacy Policy URL في المتجرين.'
              : 'Available in-app at /privacy. Publish the app then use: https://yourapp.base44.app/privacy — opens without login. Use this URL in the Privacy Policy field in both stores.'}
          </Step>
          <Step title={isRTL ? 'رابط الدعم الفني' : 'Support URL'}>
            {isRTL ? 'بريد دعم ظاهر أو صفحة تواصل.' : 'Visible support email or contact page.'}
          </Step>
        </Section>

        {/* Phase 4 */}
        <Section icon={KeyRound} number="4" title={isRTL ? 'الإعداد في حسابات المطوّرين' : 'Phase 4 — Setup in Developer Accounts'}>
          <Step title={isRTL ? 'إنشاء App Store Connect API Keys' : 'Create App Store Connect API Keys'}>
            {isRTL
              ? 'بعد تفعيل حساب Apple: appstoreconnect.apple.com ← Users and Access ← Integrations ← App Store Connect API ← Generate API Key (Access: App Manager). احصل على Issuer ID، Key ID، ونزّل ملف .p8 (مرة واحدة فقط!). احصل على Team ID من developer.apple.com ← Membership.'
              : 'After Apple account activation: appstoreconnect.apple.com → Users and Access → Integrations → App Store Connect API → Generate API Key (Access: App Manager). Get Issuer ID, Key ID, and download .p8 file (one-time only!). Get Team ID from developer.apple.com → Membership.'}
          </Step>
          <Step title={isRTL ? 'إدخال البيانات في Base44 لرفع IPA تلقائياً' : 'Enter Credentials in Base44 for Automatic IPA Upload'}>
            {isRTL
              ? 'في محرر Base44 ← Mobile ← Generate App Store files. أدخل Issuer ID، Key ID، Team ID، وارفع ملف .p8. اضغط Generate — سيبني Base44 الـ IPA ويرفعه إلى App Store Connect تلقائياً.'
              : 'In Base44 editor → Mobile → Generate App Store files. Enter Issuer ID, Key ID, Team ID, and upload .p8 file. Click Generate — Base44 builds the IPA and uploads it to App Store Connect automatically.'}
          </Step>
          <Step title={isRTL ? 'في App Store Connect' : 'In App Store Connect'}>
            {isRTL
              ? 'أنشئ New App ← املأ الاسم والمعرّف و Bundle ID المطابق لـ Base44. املأ SKU، الفئة (Education)، سياسة الخصوصية، الفئة العمرية. ارفع الأيقونة ولقطات الشاشة والوصف. ارفع IPA (أو سيكون مرفوعاً تلقائياً).'
              : 'Create New App → fill name, identifier, and Bundle ID matching Base44. Fill SKU, Category (Education), Privacy Policy, Age Rating. Upload icon, screenshots, description. Upload IPA (or auto-uploaded).'}
          </Step>
          <Step title={isRTL ? 'في Google Play Console' : 'In Google Play Console'}>
            {isRTL
              ? 'أنشئ Create app ← اكمل بيانات المتجر. الفئة (Education)، المحتوى الهدف، سياسة الخصوصية. ارفع الأيقونة ولقطات الشاشة والوصف. في Release ← ارفع ملف AAB. أكمل Content rating questionnaire (استبيان التصنيف العمري).'
              : 'Create app → complete store details. Category (Education), target content, Privacy Policy. Upload icon, screenshots, description. In Release → upload AAB file. Complete Content Rating questionnaire.'}
          </Step>
        </Section>

        {/* Phase 5 */}
        <Section icon={Send} number="5" title={isRTL ? 'المراجعة والنشر' : 'Phase 5 — Review & Publish'}>
          <Step title={isRTL ? 'إرسال للمراجعة' : 'Submit for Review'}>
            {isRTL
              ? 'Apple: اضغط Submit for Review (تستغرق 1–3 أيام). Google: اضغط Send for review (ساعات إلى أيام).'
              : 'Apple: Submit for Review (1–3 days). Google: Send for review (hours to days).'}
          </Step>
          <Step title={isRTL ? 'معالجة الملاحظات' : 'Handle Feedback'}>
            {isRTL
              ? 'قد ترفض Apple/Google ويطلبان تعديلات شائعة: سياسة حذف الحساب (موجودة ✅)، رابط سياسة خصوصية فعّال، توضيح استخدام أرقام الهواتف (تقارير واتساب). عدّل وأعد الإرسال.'
              : 'Apple/Google may request fixes: Account deletion policy (done ✅), working privacy policy link, clarify phone number usage (WhatsApp reports). Fix and resubmit.'}
          </Step>
          <Step title={isRTL ? 'النشر' : 'Publish'}>
            {isRTL ? 'بعد القبول، اختر تاريخ النشر: فوري أو مجدول.' : 'After approval, choose release date: immediate or scheduled.'}
          </Step>
        </Section>

        {/* Checklist */}
        <Section icon={CheckCircle2} number="✓" title={isRTL ? 'قائمة التحقق النهائية' : 'Final Checklist'}>
          <Checklist items={[
            isRTL ? 'شريط تنقّل سفلي للجوال ✅' : 'Mobile bottom navigation ✅',
            isRTL ? 'مساحات أمان iOS ✅' : 'iOS safe areas ✅',
            isRTL ? 'حذف الحساب داخل التطبيق ✅' : 'Account deletion in-app ✅',
            isRTL ? 'صفحة سياسة الخصوصية ✅' : 'Privacy policy page ✅',
            isRTL ? 'رابط سياسة الخصوصية عام على ويب ⏳' : 'Public privacy policy web link ⏳',
            isRTL ? 'App Scan في Base44 ⏳' : 'App Scan in Base44 ⏳',
            isRTL ? 'توليد IPA و AAB ⏳' : 'Generate IPA & AAB ⏳',
            isRTL ? 'الأيقونة 1024² ⏳' : 'Icon 1024² ⏳',
            isRTL ? 'لقطات الشاشة ⏳' : 'Screenshots ⏳',
            isRTL ? 'الوصف عربي/إنجليزي ⏳' : 'Bilingual description ⏳',
          ]} />
        </Section>

        {/* Links */}
        <Section icon={Link2} number="🔗" title={isRTL ? 'روابط مهمة' : 'Important Links'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <LinkRow label="Apple Developer Enrollment" url="developer.apple.com/programs/enroll" />
            <LinkRow label="App Store Connect" url="appstoreconnect.apple.com" />
            <LinkRow label="Apple Developer" url="developer.apple.com" />
            <LinkRow label="Apple ID" url="appleid.apple.com" />
            <LinkRow label="Google Play Console" url="play.google.com/console" />
            <LinkRow label="D-U-N-S Number" url="uprev.dnb.com" />
            <LinkRow label="Apple Developer Support" url="developer.apple.com/support" />
          </div>
        </Section>

        <footer className="text-center text-xs text-slate-400 border-t border-slate-200 pt-6">
          {isRTL ? 'بنوك الأسئلة والاختبارات المعيارية السعودية — دليل النشر على المتاجر' : 'Saudi Questions Gateway — Store Publishing Guide'}
        </footer>
      </div>
    </div>
  );
}

function Section({ icon: Icon, number, title, children }) {
  return (
    <section className="space-y-3 break-inside-avoid">
      <div className="flex items-center gap-2 text-[#12204B]">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#12204B] text-white text-xs font-bold">
          {number}
        </div>
        <Icon className="w-5 h-5" />
        <h3 className="text-base font-heading font-bold">{title}</h3>
      </div>
      <div className="space-y-2 ms-9 text-sm">{children}</div>
    </section>
  );
}

function Step({ title, children }) {
  return (
    <div className="break-inside-avoid">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="text-slate-600 mt-0.5">{children}</p>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
          <span className="text-[#12204B]">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkRow({ label, url }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 break-inside-avoid">
      <Link2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
      <span className="text-slate-700 font-medium">{label}:</span>
      <span className="text-blue-600 truncate" dir="ltr">{url}</span>
    </div>
  );
}