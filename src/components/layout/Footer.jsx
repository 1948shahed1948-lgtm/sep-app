import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/layout/SocialLinks';
import { Mail, ArrowLeft, ArrowRight, Shield } from 'lucide-react';

export default function Footer() {
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const quickLinks = [
    { label: t('home'), path: '/' },
    { label: t('nationalCurriculum'), path: '/curriculum/national' },
    { label: t('internationalCurriculum'), path: '/curriculum/international' },
    { label: t('aptitudeTests'), path: '/aptitude' },
  ];

const legalLinks = [
    { label: lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy', path: '/privacy' },
    { label: lang === 'ar' ? 'دليل النشر' : 'Store Guide', path: '/store-guide' },
    { label: lang === 'ar' ? 'اشترك الآن' : 'Subscribe', path: '/subscribe' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10 mt-12 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* القسم الأول: الهوية */}
          <div className="space-y-4">
            <Logo size={40} variant="light" showText={false} />
            <p className="text-white/55 text-sm leading-relaxed">
              {t('featuredDescription')}
            </p>
            <SocialLinks />
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-4 rounded-full bg-primary/70" />
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="group flex items-center gap-1.5 text-white/55 hover:text-white text-sm transition-colors">
                    <Arrow className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الثالث: تواصل معنا */}
          <div>
            <h3 className="text-white font-heading font-bold mb-4 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-4 rounded-full bg-primary/70" />
              {lang === 'ar' ? 'تواصل معنا' : 'Contact'}
            </h3>
            <a
              href="mailto:info@quizgate.sa"
              className="group inline-flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors mb-5"
            >
              <Mail className="w-4 h-4" />
              <span dir="ltr">info@quizgate.sa</span>
            </a>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="group flex items-center gap-1.5 text-white/55 hover:text-white text-sm transition-colors">
                    <Arrow className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* الشريط السفلي: شعار المنصة وحقوق الملكية */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/a3b8bd8fe_image.png"
                alt="بوابة الأسئلة بلس"
                className="h-12 w-auto object-contain"
              />
              <div className="text-start">
                <p className="text-white font-heading font-bold text-sm">مؤسسة بوابة الأسئلة</p>
                <p className="text-white/50 text-xs">س.ت: 7049801017</p>
              </div>
              <Link
                to="/admin"
                title={lang === 'ar' ? 'لوحة التحكم' : 'Admin Dashboard'}
                aria-label={lang === 'ar' ? 'لوحة التحكم' : 'Admin Dashboard'}
                className="ms-1 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600 shadow-md hover:scale-110 transition-transform"
              >
                <Shield className="w-4 h-4 text-white" />
              </Link>
            </div>
            <div className="text-center sm:text-end">
              <p className="text-white/60 text-xs font-medium">بنوك الأسئلة والاختبارات المعيارية السعودية</p>
              <p className="text-white/40 text-xs mt-0.5">© 2026 مؤسسة بوابة الأسئلة · جميع الحقوق محفوظة</p>
              <p className="text-white/30 text-xs">يُحظر النسخ أو إعادة النشر دون إذن رسمي</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}