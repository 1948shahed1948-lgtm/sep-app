import React from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { Shield, FileText, Database, Trash2, Mail, Globe, Lock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  const { lang, t } = useLang();
  const isAr = lang === 'ar';

  const sections = [
    {
      icon: Database,
      title: isAr ? 'البيانات التي نجمعها' : 'Data We Collect',
      body: isAr
        ? 'نجمع الاسم، البريد الإلكتروني، رقم الهاتف (الطالب وولي الأمر)، ونتائج الاختبارات والتقدّم التعليمي لتقديم الخدمة وتحسينها.'
        : 'We collect name, email, phone numbers (student and guardian), and assessment results and progress data to provide and improve the service.',
    },
    {
      icon: Lock,
      title: isAr ? 'كيف نستخدم بياناتك' : 'How We Use Your Data',
      body: isAr
        ? 'تُستخدم البيانات لعرض التقدّم، إرسال تقارير الأداء الأسبوعية عبر واتساب لأولياء الأمور، وتخصيص المحتوى التعليمي. لا نبيع بياناتك لأطراف ثالثة.'
        : 'Data is used to show progress, send weekly performance reports to guardians via WhatsApp, and personalize educational content. We never sell your data to third parties.',
    },
    {
      icon: Globe,
      title: isAr ? 'التخزين والأمان' : 'Storage & Security',
      body: isAr
        ? 'تُخزَّن البيانات بشكل آمن على خوادم موثوقة، ويقتصر الوصول على فريق الصيانة المعتمد فقط.'
        : 'Data is stored securely on trusted servers, with access limited to authorized maintenance staff only.',
    },
    {
      icon: Trash2,
      title: isAr ? 'حذف حسابك وبياناتك' : 'Deleting Your Account & Data',
      body: isAr
        ? 'يمكنك حذف حسابك وكل بياناتك نهائياً من صفحة الإعدادات داخل التطبيق، أو بمراسلتنا عبر البريد أدناه. الحذف لا يمكن التراجع عنه.'
        : 'You can permanently delete your account and all your data from the Settings page in the app, or by emailing us below. Deletion cannot be undone.',
    },
    {
      icon: FileText,
      title: isAr ? 'حقوقك' : 'Your Rights',
      body: isAr
        ? 'لك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب حذفها في أي وقت وفقاً لأنظمة حماية البيانات المعمول بها.'
        : 'You have the right to access, correct, or request deletion of your data at any time under applicable data protection regulations.',
    },
    {
      icon: Mail,
      title: isAr ? 'تواصل معنا' : 'Contact Us',
      body: isAr
        ? 'لأي استفسار حول الخصوصية، راسلنا:'
        : 'For any privacy inquiries, contact us:',
      email: 'info@quizgate.sa',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: isAr ? 'سياسة الخصوصية' : 'Privacy Policy' }]}
      />

      <Card className="rounded-2xl border-slate-100">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="font-heading font-bold text-slate-900">
              {isAr ? 'التزامنا بحماية خصوصيتك' : 'Our Commitment to Your Privacy'}
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {isAr
              ? 'تحترم بنوك الأسئلة والاختبارات المعيارية السعودية خصوصية مستخدميها وتلتزم بحماية بياناتهم الشخصية وفقاً لسياسة النشر في متجري التطبيقات وأنظمة حماية البيانات المعمول بها في المملكة العربية السعودية.'
              : 'The Saudi Questions Gateway respects the privacy of its users and is committed to protecting their personal data in accordance with app store guidelines and applicable data protection regulations in the Kingdom of Saudi Arabia.'}
          </p>
        </CardContent>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((s, i) => (
          <Card key={i} className="rounded-2xl border-slate-100">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm">{s.title}</h3>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-1">
                <p>{s.body}</p>
                {s.email && (
                  <a href={`mailto:${s.email}`} className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium">
                    <Mail className="w-4 h-4" />
                    {s.email}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs text-slate-400 text-center pt-2">
        {isAr ? 'آخر تحديث: يوليو 2026' : 'Last updated: July 2026'}
      </p>
    </div>
  );
}