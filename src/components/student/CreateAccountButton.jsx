import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useToast } from '@/components/ui/use-toast';
import { useLang } from '@/lib/i18n';
import { useAuth } from '@/lib/AuthContext';
import { UserPlus, UserCog, Loader2, X, Users, LogIn } from 'lucide-react';

// زر "أنشئ حساب" بجانب صورة الهيدر — للطالب نفسه داخل المنصة.
// يفتح نموذج (الاسم/الهاتف/ولي الأمر) ويحفظه في قاعدة بيانات الطلاب.
export default function CreateAccountButton() {
  const { lang } = useLang();
  const { toast } = useToast();
  const { user, authChecked } = useAuth();
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ full_name: '', phone: '', parent_phone: '', parent_name: '', parent_relation: '', grade: '' });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (!authChecked || !user) return; // يظهر الزر دائماً، ويُحمّل الملف فقط للمسجّلين
    (async () => {
      try {
        const list = await base44.entities.StudentProfile.filter({ user_id: user.id });
        const p = list && list[0] ? list[0] : null;
        setProfile(p);
        if (p) setForm({ full_name: p.full_name || '', phone: p.phone || '', parent_phone: p.parent_phone || '', parent_name: p.parent_name || '', parent_relation: p.parent_relation || '', grade: p.grade || '' });
        else setForm({ full_name: user.full_name || '', phone: '', parent_phone: '', parent_name: '', parent_relation: '', grade: '' });
      } catch {
        /* تجاهل — يبقى الزر ظاهراً */
      }
    })();
  }, [authChecked, user]);

  const ar = lang === 'ar';
  const loggedIn = !!user;
  const label = profile
    ? (profile.full_name || (ar ? 'بياناتي' : 'My profile'))
    : loggedIn
      ? (ar ? 'بياناتي' : 'My profile')
      : (ar ? 'دخول' : 'Login');
  const Icon = profile ? UserCog : (loggedIn ? UserCog : LogIn);
  const tip = loggedIn
    ? (ar ? 'بياناتي الشخصية' : 'My profile')
    : (ar ? 'سجّل لتتبع تقدمك وأخطائك (اختياري)' : 'Login to track progress (optional)');

  const handleClick = () => {
    if (!user) {
      base44.auth.redirectToLogin(window.location.href);
      return;
    }
    setOpen(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!form.full_name.trim() || !form.phone.trim()) {
      setErr(ar ? 'الاسم ورقم الهاتف مطلوبان' : 'Name and phone are required');
      return;
    }
    setBusy(true);
    try {
      const payload = {
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        parent_phone: form.parent_phone.trim(),
        parent_name: form.parent_name.trim(),
        parent_relation: form.parent_relation || '',
        grade: form.grade.trim(),
      };
      if (profile) {
        await base44.entities.StudentProfile.update(profile.id, payload);
      } else {
        await base44.entities.StudentProfile.create({ user_id: user.id, ...payload });
      }
      toast({ title: ar ? 'تم الحفظ' : 'Saved', description: ar ? 'حُفظت بيانات الطالب' : 'Student profile saved' });
      setOpen(false);
      // refresh local profile
      const list = await base44.entities.StudentProfile.filter({ user_id: user.id });
      setProfile(list && list[0] ? list[0] : null);
    } catch (e2) {
      setErr(e2.message || 'حدث خطأ');
    }
    setBusy(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        title={tip}
        className={`flex-shrink-0 inline-flex items-center gap-1 h-8 px-3 rounded-full transition-colors shadow ${
          loggedIn ? 'bg-amber-500 hover:bg-amber-400' : 'bg-white/10 hover:bg-white/20 border border-white/15'
        }`}
      >
        <Icon className="w-4 h-4 text-white" />
        <span className="hidden sm:inline text-[11px] font-bold text-white">{label}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/50 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-slate-900">{label}</h3>
              <button onClick={() => setOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <p className="text-sm text-slate-500">
              {ar ? 'أدخل بياناتك لتُحفظ في قاعدة الطلاب ويراك المشرف ويرسل لك التقارير.' : 'Enter your details to be stored & receive reports.'}
            </p>
            <form onSubmit={submit} className="space-y-3">
              <input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder={ar ? 'الاسم الكامل' : 'Full name'} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={ar ? 'رقم الهاتف (واتساب)' : 'Phone (WhatsApp)'} inputMode="tel" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none" />
              <input value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} placeholder={ar ? 'الصف (اختياري)' : 'Grade (optional)'} className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none" />

              {/* قسم ولي الأمر */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 space-y-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <Users className="w-4 h-4" />
                  <h4 className="font-heading font-bold text-sm">{ar ? 'بيانات ولي الأمر' : 'Parent / Guardian'}</h4>
                </div>
                <input value={form.parent_name} onChange={(e) => setForm({ ...form, parent_name: e.target.value })} placeholder={ar ? 'اسم ولي الأمر' : 'Parent name'} className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm focus:border-amber-400 focus:outline-none" />
                <input value={form.parent_phone} onChange={(e) => setForm({ ...form, parent_phone: e.target.value })} placeholder={ar ? 'رقم هاتف ولي الأمر (واتساب)' : 'Parent phone (WhatsApp)'} inputMode="tel" className="w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm focus:border-amber-400 focus:outline-none" />
                <div className="flex gap-2">
                  {[
                    { v: 'father', l: ar ? 'الأب' : 'Father' },
                    { v: 'mother', l: ar ? 'الأم' : 'Mother' },
                    { v: 'guardian', l: ar ? 'الوصي' : 'Guardian' },
                  ].map((o) => (
                    <button key={o.v} type="button" onClick={() => setForm({ ...form, parent_relation: form.parent_relation === o.v ? '' : o.v })} className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${form.parent_relation === o.v ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-amber-700 border-amber-200 hover:border-amber-400'}`}>{o.l}</button>
                  ))}
                </div>
              </div>

              {err && <p className="text-xs text-rose-600">{err}</p>}
              <button type="submit" disabled={busy} className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2">
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Icon className="w-4 h-4" />}
                {ar ? 'حفظ' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}