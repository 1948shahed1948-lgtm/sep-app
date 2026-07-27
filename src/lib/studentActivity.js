import { base44 } from '@/api/base44Client';

// يسجّل نشاط الطالب (دخول / دخول اختبار) ليراه المشرف. يتجاهل الأخطاء.
export async function trackActivity({ activity_type, label_ar, label_en, details, route }) {
  try {
    const u = await base44.auth.me();
    if (!u) return;
    await base44.entities.StudentActivity.create({
      user_id: u.id,
      full_name: u.full_name || '',
      activity_type,
      label_ar,
      label_en,
      details,
      route,
    });
  } catch {}
}