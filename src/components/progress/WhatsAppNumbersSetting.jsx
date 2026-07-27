import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Phone, Loader2, CheckCircle, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { base44 } from '@/api/base44Client';

export default function WhatsAppNumbersSetting() {
  const { lang } = useLang();
  const [studentPhone, setStudentPhone] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    base44.auth.me()
      .then((u) => {
        if (u?.phone) setStudentPhone(u.phone);
        if (u?.parent_phone) setParentPhone(u.parent_phone);
      })
      .catch(() => {});
  }, []);

  const save = async () => {
    setError('');
    const cleanStudent = studentPhone.replace(/[^\d]/g, '');
    const cleanParent = parentPhone.replace(/[^\d]/g, '');
    if (!cleanStudent && !cleanParent) {
      setError(lang === 'ar' ? 'أدخل رقماً واحداً على الأقل (الطالب أو ولي الأمر).' : 'Enter at least one number (student or parent).');
      return;
    }
    const payload = {};
    if (cleanStudent) payload.phone = cleanStudent;
    if (cleanParent) payload.parent_phone = cleanParent;
    setSaving(true);
    try {
      await base44.auth.updateMe(payload);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      setError(e.message || (lang === 'ar' ? 'تعذر الحفظ' : 'Could not save'));
    }
    setSaving(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white border border-slate-100 p-6"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <Phone className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'أرقام واتساب لاستلام التقرير الأسبوعي' : 'WhatsApp Numbers for Weekly Report'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {lang === 'ar'
              ? 'يُرسل التقرير الأسبوعي آلياً (كل سبت) إلى رقم الطالب وولي الأمر عند توفرهما.'
              : 'A weekly report is sent automatically (every Saturday) to the student and parent numbers when available.'}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'رقم الطالب' : 'Student number'}
          </label>
          <Input
            type="tel"
            dir="ltr"
            inputMode="tel"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
            placeholder="9665xxxxxxxx"
            className="text-start"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'رقم ولي الأمر' : 'Parent number'}
          </label>
          <Input
            type="tel"
            dir="ltr"
            inputMode="tel"
            value={parentPhone}
            onChange={(e) => setParentPhone(e.target.value)}
            placeholder="9665xxxxxxxx"
            className="text-start"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button onClick={save} disabled={saving} className="gap-2">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
          {lang === 'ar' ? 'حفظ الأرقام' : 'Save numbers'}
        </Button>
        {saved && (
          <span className="text-xs text-emerald-600 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" />
            {lang === 'ar' ? 'تم الحفظ بنجاح.' : 'Saved successfully.'}
          </span>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      <p className="text-[11px] text-slate-400 mt-2">
        {lang === 'ar' ? 'أدخل الأرقام بصيغة دولية بدون + أو مسافات (مثال: 966512345678).' : 'Enter numbers in international format without + or spaces (e.g. 966512345678).'}
      </p>
    </motion.div>
  );
}