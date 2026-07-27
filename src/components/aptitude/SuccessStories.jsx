import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stories = [
  { name: 'Reem Al-Otaibi', gradeAr: 'الصف الثالث الثانوي', gradeEn: '12th Grade', quoteAr: 'تحسّن مستواي في الرياضيات بشكل كبير بفضل التدريب التكيّفي.', quoteEn: 'My math level improved significantly thanks to adaptive training.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces' },
  { name: 'Abdullah Al-Qahtani', gradeAr: 'الصف الثاني الثانوي', gradeEn: '11th Grade', quoteAr: 'استعداداتي لاختبار القدرات أصبحت أكثر تنظيماً وثقة.', quoteEn: 'My aptitude test preparation became more organized and confident.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces' },
  { name: 'Layla Al-Harbi', gradeAr: 'الصف الأول الثانوي', gradeEn: '10th Grade', quoteAr: 'لوحة الأداء تساعدني على معرفة نقاط ضعفي بدقة.', quoteEn: 'The performance dashboard helps me pinpoint my weak areas precisely.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces' },
  { name: 'Khalid Al-Dossari', gradeAr: 'الصف الثالث المتوسط', gradeEn: '9th Grade', quoteAr: 'الدروس واضحة ومنظمة وتواكب منهجي تماماً.', quoteEn: 'Lessons are clear, organized, and perfectly aligned with my curriculum.', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&crop=faces' },
  { name: 'Noura Al-Shehri', gradeAr: 'الصف السادس الابتدائي', gradeEn: '6th Grade', quoteAr: 'أحب التمارين التفاعلية، فهي تجعل التعلّم ممتعاً.', quoteEn: 'I love the interactive exercises — they make learning fun.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces' },
  { name: 'Faisal Al-Ghamdi', gradeAr: 'الصف الأول الابتدائي', gradeEn: '1st Grade', quoteAr: 'أتعلم القراءة والحساب بطريقة سهلة وممتعة.', quoteEn: 'I learn reading and math in an easy and fun way.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces' },
];

export default function SuccessStories() {
  const { lang } = useLang();

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'قصص نجاح طلابنا' : 'Our Students Success Stories'}
        </h2>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          {lang === 'ar' ? 'نماذج ملهمة من طلاب حققوا تقدماً ملموساً عبر المنصة.' : 'Inspiring models of students who achieved tangible progress through the platform.'}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stories.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-white border border-slate-100 p-5 hover:shadow-md transition-shadow">
            <Quote className="w-6 h-6 text-amber-400 mb-3" />
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{lang === 'ar' ? s.quoteAr : s.quoteEn}</p>
            <div className="flex items-center gap-3">
              <img src={s.img} alt={s.name} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-slate-800">{s.name}</p>
                <p className="text-[11px] text-slate-400">{lang === 'ar' ? s.gradeAr : s.gradeEn}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}