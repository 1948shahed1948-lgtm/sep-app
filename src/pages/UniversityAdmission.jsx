import React from 'react';
import { useLang } from '@/lib/i18n';
import { ExternalLink, GraduationCap, ClipboardCheck, Clock, Target } from 'lucide-react';

const EXTERNAL_URL = 'https://willowy-froyo-0857a0.netlify.app/';
const HERO_IMAGE = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/e0693526b_generated_image.png';

export default function UniversityAdmission() {
  const { lang } = useLang();
  const ar = lang === 'ar';

  const features = ar
    ? [
        { icon: ClipboardCheck, title: 'اختبارات تجريبية', desc: 'تمارين محاكية لاختبارات القبول الجامعي بأسلوب الامتحان الحقيقي' },
        { icon: Clock, title: 'تدريب بلا حدود', desc: 'تدرّب متى شئت بأسئلة مرتبة حسب المستوى والقسم' },
        { icon: Target, title: 'تركيز على المهارات', desc: 'بنوك أسئلة تستهدف نقاط الضعف وتقوّي مهاراتك قبل الاختبار' },
      ]
    : [
        { icon: ClipboardCheck, title: 'Mock Exams', desc: 'Realistic simulations of university admission tests' },
        { icon: Clock, title: 'Unlimited Practice', desc: 'Practice anytime with leveled, sectioned questions' },
        { icon: Target, title: 'Skill Focus', desc: 'Banks targeting weak spots before your test' },
      ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        <img src={HERO_IMAGE} alt={ar ? 'طلاب داخل قاعة الاختبار' : 'Students in exam hall'} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1738]/95 via-[#0C1738]/70 to-[#0C1738]/30" />
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-5">
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold text-white/90">{ar ? 'قسم جديد' : 'New Section'}</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight">
            {ar ? 'اختبارات القبول الجامعي' : 'University Admission Tests'}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {ar
              ? 'منصة تدريب متخصصة للاختبارات التنافسية للقبول الجامعي — تمارين محاكية وأسئلة مرتبة لتجهيزك ليوم الاختبار داخل قاعات الامتحان.'
              : 'A specialized training platform for competitive university admission exams — realistic mock tests and organized questions to prepare you for exam day.'}
          </p>
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95"
          >
            {ar ? 'ابدأ الاختبار الآن' : 'Start the test now'}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
            <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <f.icon className="w-5 h-5 text-primary" />
            </span>
            <h3 className="font-heading font-bold text-slate-800 mb-1">{f.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#0C1738] to-[#1b2c5e] p-8 text-center">
        <h2 className="font-heading font-bold text-xl text-white mb-2">
          {ar ? 'جاهز لاختبار قبولك الجامعي؟' : 'Ready for your admission test?'}
        </h2>
        <p className="text-white/70 text-sm mb-5">
          {ar ? 'انتقل مباشرة إلى منصة الاختبارات وابدأ التدريب' : 'Go straight to the testing platform and start practicing'}
        </p>
        <a
          href={EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
        >
          {ar ? 'افتح منصة الاختبارات' : 'Open testing platform'}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}