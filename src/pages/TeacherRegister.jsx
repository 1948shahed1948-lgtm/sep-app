import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Upload, Clock, CheckCircle2 } from 'lucide-react';

export default function TeacherRegister() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ full_name: '', phone: '', bio_ar: '', specialization_ar: '', avatar_url: '' });

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {
      alert(isAr ? 'سجّل دخولك أولاً' : 'Please login first');
      nav('/login');
    });
  }, []);

  const handleAvatar = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm((f) => ({ ...f, avatar_url: file_url }));
    setLoading(false);
  };

  const submit = async () => {
    if (!form.full_name || !form.phone) {
      alert(isAr ? 'أكمل الاسم ورقم الواتساب' : 'Fill name and WhatsApp number');
      return;
    }
    setLoading(true);
    await base44.entities.TeacherProfile.create({
      user_id: user.id,
      full_name: form.full_name,
      phone: form.phone,
      bio_ar: form.bio_ar,
      specialization_ar: form.specialization_ar,
      avatar_url: form.avatar_url,
      status: 'pending',
    });
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="space-y-6">
        <PageHeader title={isAr ? 'تم التسجيل' : 'Registered'} backTo="/teachers" breadcrumbs={[{ label: isAr ? 'المعلمون' : 'Tutors', path: '/teachers' }]} />
        <Card className="rounded-2xl border-amber-200 bg-amber-50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-heading font-bold text-xl text-slate-900">{isAr ? 'بانتظار موافقة الأدمن' : 'Pending Admin Approval'}</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {isAr
                ? 'تم تسجيلك بنجاح. سيقوم الأدمن بمراجعة طلبك وتفعيل حسابك قريباً. بمجرد التفعيل ستظهر للطلاب ويمكنك إدارة موادك من لوحة التحكم.'
                : 'Registration successful. An admin will review and activate your account soon. Once active, students can find you and you can manage subjects from your dashboard.'}
            </p>
            <Button onClick={() => nav('/teachers')} className="bg-primary text-primary-foreground rounded-xl px-6">
              {isAr ? 'العودة للمعلمين' : 'Back to Tutors'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader title={isAr ? 'تسجيل معلم جديد' : 'Register as Tutor'} backTo="/teachers" breadcrumbs={[{ label: isAr ? 'المعلمون' : 'Tutors', path: '/teachers' }, { label: isAr ? 'تسجيل' : 'Register' }]} />

      <Card className="rounded-2xl border-slate-100">
        <CardContent className="p-6 space-y-5">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto">
              <GraduationCap className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">{isAr ? 'انضم كمعلم موثوق' : 'Join as a Trusted Tutor'}</h2>
            <p className="text-sm text-slate-500">{isAr ? 'املأ بياناتك وانتظر موافقة الأدمن' : 'Fill your details and wait for admin approval'}</p>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">{isAr ? 'صورة شخصية (اختياري)' : 'Avatar (optional)'}</label>
            <div className="flex items-center gap-3">
              {form.avatar_url && <img src={form.avatar_url} alt="avatar" className="w-16 h-16 rounded-xl object-cover" />}
              <label className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50">
                <Upload className="w-4 h-4" />
                {isAr ? 'رفع صورة' : 'Upload'}
                <input type="file" accept="image/*" onChange={handleAvatar} className="hidden" />
              </label>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1 block">{isAr ? 'الاسم الكامل' : 'Full Name'}</label>
              <input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 mb-1 block">{isAr ? 'رقم واتساب' : 'WhatsApp Number'}</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="9665XXXXXXXX" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 mb-1 block">{isAr ? 'التخصص' : 'Specialization'}</label>
            <input value={form.specialization_ar} onChange={(e) => setForm({ ...form, specialization_ar: e.target.value })} placeholder={isAr ? 'مثال: رياضيات، علوم، لغة عربية' : 'e.g. Math, Science, Arabic'} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 mb-1 block">{isAr ? 'نبذة تعريفية' : 'Bio'}</label>
            <textarea value={form.bio_ar} onChange={(e) => setForm({ ...form, bio_ar: e.target.value })} rows={3} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>

          <Button onClick={submit} disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl h-12">
            {loading ? (isAr ? 'جارٍ الإرسال…' : 'Submitting…') : (isAr ? 'إرسال الطلب' : 'Submit Request')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}