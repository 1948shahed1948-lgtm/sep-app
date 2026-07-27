import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import { Loader2, UserPlus } from 'lucide-react';

// يطلب من الطالب إكمال بياناته (اسم + هاتف + هاتف ولي الأمر اختياري) عند أول دخول.
// يتجاوزه المشرف تلقائياً.
export default function ProfileGate() {
  const { lang } = useLang();
  const [state, setState] = useState('loading'); // loading | skip | needed
  const [form, setForm] = useState({ full_name: '', phone: '', parent_phone: '', grade: '' });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const u = await base44.auth.me();
        if (!u) { setState('skip'); return; }
        if (u.role === 'admin') { setState('skip'); return; }
        const list = await base44.entities.StudentProfile.filter({ user_id: u.id });
        if (list && list.length) setState('skip');
        else {
          setForm((f) => ({ ...f, full_name: u.full_name || '' }));
          setState('needed');
        }
      } catch {
        setState('skip');
      }
    })();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    if (!form.full_name.trim() || !form.phone.trim()) {
      setErr(lang === 'ar' ? 'الاسم ورقم الهاتف مطلوبان' : 'Name and phone are required');
      return;
    }
    setSaving(true);
    try {
      const u = await base44.auth.me();
      await base44.entities.StudentProfile.create({
        user_id: u.id,
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        parent_phone: form.parent_phone.trim(),
        grade: form.grade.trim(),
      });
      setState('skip');
    } catch (e2) {
      setErr(e2.message || 'حدث خطأ');
    }
    setSaving(false);
  };

  if (state !== 'needed') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl space-y-5">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 mb-3">
            <UserPlus className="w-7 h-7 text-amber-600" />
          </div>
          <h2 className="text-xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'أكمل بياناتك' : 'Complete your profile'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'ar' ? 'تُحفظ بياناتك ليراها المشرف ويرسل لك التقارير' : 'Stored so admin can view & send reports'}
          </p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full name'}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none"
          />
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder={lang === 'ar' ? 'رقم الهاتف (واتساب)' : 'Phone (WhatsApp)'}
            inputMode="tel"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none"
          />
          <input
            value={form.parent_phone}
            onChange={(e) => setForm({ ...form, parent_phone: e.target.value })}
            placeholder={lang === 'ar' ? 'رقم ولي الأمر (اختياري)' : 'Parent phone (optional)'}
            inputMode="tel"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none"
          />
          <input
            value={form.grade}
            onChange={(e) => setForm({ ...form, grade: e.target.value })}
            placeholder={lang === 'ar' ? 'الصف (اختياري)' : 'Grade (optional)'}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none"
          />
          {err && <p className="text-xs text-rose-600">{err}</p>}
          <button
            type="submit"
            disabled={saving}
            className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : (lang === 'ar' ? 'حفظ ومتابعة' : 'Save & continue')}
          </button>
        </form>
      </div>
    </div>
  );
}