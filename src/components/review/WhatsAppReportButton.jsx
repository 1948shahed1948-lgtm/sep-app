import React from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppReportButton({ session }) {
  const { lang } = useLang();
  const total = session.correct + session.wrong;
  const pct = total ? Math.round((session.correct / total) * 100) : 0;
  const date = new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB');

  const levelAr = pct >= 80 ? 'ممتاز' : pct >= 70 ? 'جيد' : pct >= 50 ? 'يحتاج مراجعة' : 'ضعيف';
  const levelEn = pct >= 80 ? 'Excellent' : pct >= 70 ? 'Good' : pct >= 50 ? 'Needs review' : 'Weak';

  const report = lang === 'ar'
    ? `📊 تقرير جلسة المراجعة — بنوك الأسئلة والاختبارات\n\n📅 التاريخ: ${date}\n📝 عدد الأسئلة: ${total}\n✅ إجابات صحيحة: ${session.correct}\n❌ إجابات خاطئة: ${session.wrong}\n🎯 الدقة: ${pct}%\n🏅 المستوى: ${levelAr}\n\n— تم التحميل تلقائياً من محاكي المراجعة.`
    : `📊 Review Session Report — Saudi Education Platform\n\n📅 Date: ${date}\n📝 Questions: ${total}\n✅ Correct: ${session.correct}\n❌ Wrong: ${session.wrong}\n🎯 Accuracy: ${pct}%\n🏅 Level: ${levelEn}\n\n— Auto-generated from the review simulator.`;

  const url = `https://wa.me/?text=${encodeURIComponent(report)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0">
        <MessageCircle className="w-4 h-4" />
        {lang === 'ar' ? 'إرسال التقرير إلى واتساب' : 'Send report to WhatsApp'}
      </Button>
    </motion.a>
  );
}