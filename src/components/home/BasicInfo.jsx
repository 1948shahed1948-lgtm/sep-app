import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import {
  Landmark, Hash, Layers, Users, GraduationCap, Clock,
  Award, CheckSquare, Repeat, Puzzle, Zap, Wifi
} from 'lucide-react';

const facts = [
  { icon: Landmark, labelAr: "اسم المنصة", labelEn: "Platform Name", valueAr: "بنوك الأسئلة والاختبارات المعيارية السعودية", valueEn: "Saudi Questions Gateway" },
  { icon: Hash, labelAr: "رمز المنصة", labelEn: "Platform Symbol", valueAr: "SQG", valueEn: "SQG" },
  { icon: Layers, labelAr: "نوع المنصة", labelEn: "Platform Type", valueAr: "وطنية ودولية", valueEn: "National & International" },
  { icon: Users, labelAr: "التوفر", labelEn: "Availability", valueAr: "لكل الطلاب السعوديين", valueEn: "For all Saudi students" },
  { icon: GraduationCap, labelAr: "الصفوف", labelEn: "Grades", valueAr: "من الروضة للثانوية", valueEn: "From kindergarten to high school" },
  { icon: Clock, labelAr: "مدة الاختبار", labelEn: "Test Duration", valueAr: "40 دقيقة لكل مهارة", valueEn: "40 minutes per skill" },
  { icon: Award, labelAr: "الدرجة", labelEn: "Score", valueAr: "من 100", valueEn: "Out of 100" },
  { icon: CheckSquare, labelAr: "طريقة التصحيح", labelEn: "Grading Method", valueAr: "تلقائي ويدوي", valueEn: "Automatic & manual" },
  { icon: Repeat, labelAr: "عدد الجولات", labelEn: "Number of Rounds", valueAr: "3 جولات خلال العام الدراسي", valueEn: "3 rounds per school year" },
  { icon: Puzzle, labelAr: "مكونات المنصة", labelEn: "Platform Components", valueAr: "النظام الوطني والدولي، اختبارات القدرات، التدريب التفاعلي، كشف نقاط الضعف", valueEn: "National & international systems, aptitude tests, interactive training, weakness detection" },
  { icon: Zap, labelAr: "النتائج", labelEn: "Results", valueAr: "فورية بعد كل تدريب", valueEn: "Instant after every practice" },
  { icon: Wifi, labelAr: "متطلبات المنصة", labelEn: "Platform Requirements", valueAr: "متصفح حديث، اتصال إنترنت، سماعة للقدرات الصوتية", valueEn: "Modern browser, internet connection, headphones for audio aptitude sections" },
];

export default function BasicInfo() {
  const { lang } = useLang();

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'معلومات أساسية' : 'Basic Information'}
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          {lang === 'ar'
            ? 'تعرف على بنوك الأسئلة والاختبارات المعيارية السعودية وكل تفاصيلها ومكوناتها وكيف تدعم نمو الطلاب في جميع الصفوف'
            : 'Learn about the Saudi Questions Gateway, its details, components, and how it supports student growth across all grades'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-2xl bg-white border border-slate-100 p-5"
          >
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <f.icon className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium mb-1">
                {lang === 'ar' ? f.labelAr : f.labelEn}
              </p>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                {lang === 'ar' ? f.valueAr : f.valueEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}