import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useToast } from '@/components/ui/use-toast';
import { useLang } from '@/lib/i18n';
import { Loader2, Send, Search, Phone, Users, Filter, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StudentsManager() {
  const { lang } = useLang();
  const { toast } = useToast();
  const [profiles, setProfiles] = useState(null);
  const [q, setQ] = useState('');
  const [gradeFilter, setGradeFilter] = useState(''); // '' = الكل
  const [target, setTarget] = useState(null); // student being messaged
  const [msg, setMsg] = useState('');
  const [sending, setSending] = useState(false);
  const [bulk, setBulk] = useState(null); // { grade } رسالة جماعية للصف
  const [audience, setAudience] = useState('all'); // all | students | parents — لمن يُرسل

  const load = async () => {
    try {
      const list = await base44.entities.StudentProfile.list('-created_date', 500);
      setProfiles(list || []);
    } catch (e) {
      setProfiles([]);
    }
  };
  useEffect(() => { load(); }, []);

  const filtered = (profiles || []).filter((p) => {
    const matchQ = !q || (p.full_name || '').includes(q) || (p.phone || '').includes(q) || (p.parent_phone || '').includes(q);
    const matchGrade = !gradeFilter || (p.grade || '').trim() === gradeFilter;
    return matchQ && matchGrade;
  });

  const grades = Array.from(new Set((profiles || []).map((p) => (p.grade || '').trim()).filter(Boolean))).sort();

  const sendBulk = async () => {
    if (!msg.trim() || !bulk) return;
    setSending(true);
    try {
      const res = await base44.functions.invoke('sendWhatsAppMessage', {
        mode: 'broadcast',
        message: msg.trim(),
        audience,
        grade: bulk.grade || '',
      });
      const d = res.data || res;
      toast({
        title: lang === 'ar'
          ? `إذاعة${bulk.grade ? ` (صف ${bulk.grade})` : ''}: ${d.sent} ناجح / ${d.failed} فشل (من ${d.total})`
          : `Broadcast${bulk.grade ? ` (grade ${bulk.grade})` : ''}: ${d.sent}/${d.failed} of ${d.total}`,
        description: d.credentialsMissing ? (lang === 'ar' ? 'لم يُرسل واتساب فعلياً — يلزم ضبط WHATSAPP_ACCESS_TOKEN' : 'Token missing — not sent') : '',
      });
      setBulk(null); setMsg('');
    } catch (e) {
      toast({ title: 'خطأ', description: e.message, variant: 'destructive' });
    }
    setSending(false);
  };

  const sendSingle = async () => {
    if (!msg.trim() || !target) return;
    setSending(true);
    try {
      const res = await base44.functions.invoke('sendWhatsAppMessage', {
        mode: 'single',
        user_id: target.user_id,
        message: msg.trim(),
        audience,
      });
      const d = res.data || res;
      toast({
        title: lang === 'ar' ? `تم الإرسال (${d.sent} ناجح / ${d.failed} فشل)` : `Sent (${d.sent}/${d.failed})`,
        description: d.credentialsMissing ? (lang === 'ar' ? 'لم يُرسل واتساب فعلياً — يلزم ضبط WHATSAPP_ACCESS_TOKEN' : 'WhatsApp not actually sent — token missing') : '',
      });
      setTarget(null); setMsg('');
    } catch (e) {
      toast({ title: 'خطأ', description: e.message, variant: 'destructive' });
    }
    setSending(false);
  };

  if (!profiles) {
    return <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Users className="w-4 h-4" />
        {lang === 'ar'
          ? `الكل: ${profiles.length}${gradeFilter || q ? ` • معروض: ${filtered.length}` : ''}`
          : `Total: ${profiles.length}${gradeFilter || q ? ` • shown: ${filtered.length}` : ''}`}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === 'ar' ? 'بحث بالاسم أو الرقم...' : 'Search name or phone...'}
            className="w-full rounded-xl border border-slate-200 ps-9 pe-4 py-2.5 text-sm focus:border-amber-400 focus:outline-none"
          />
        </div>
        <div className="relative">
          <Filter className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-slate-400" />
          <select
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="rounded-xl border border-slate-200 ps-9 pe-8 py-2.5 text-sm bg-white focus:border-amber-400 focus:outline-none"
          >
            <option value="">{lang === 'ar' ? 'كل الصفوف' : 'All grades'}</option>
            {grades.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <Button
          variant="outline"
          onClick={() => { setAudience('all'); setBulk({ grade: gradeFilter }); }}
          disabled={filtered.length === 0}
          className="shrink-0"
        >
          <Megaphone className="w-4 h-4" />
          {gradeFilter
            ? (lang === 'ar' ? `إذاعة لصف ${gradeFilter}` : `Broadcast grade ${gradeFilter}`)
            : (lang === 'ar' ? 'إذاعة للجميع' : 'Broadcast all')}
        </Button>
      </div>

      <div className="rounded-2xl border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="text-start font-medium px-4 py-3">{lang === 'ar' ? 'الاسم' : 'Name'}</th>
                <th className="text-start font-medium px-4 py-3">{lang === 'ar' ? 'هاتف الطالب' : 'Phone'}</th>
                <th className="text-start font-medium px-4 py-3">{lang === 'ar' ? 'ولي الأمر' : 'Parent'}</th>
                <th className="text-start font-medium px-4 py-3">{lang === 'ar' ? 'الصف' : 'Grade'}</th>
                <th className="text-start font-medium px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">{p.full_name || '—'}</td>
                  <td className="px-4 py-3 text-slate-600" dir="ltr">{p.phone || '—'}</td>
                  <td className="px-4 py-3 text-slate-600" dir="ltr">{p.parent_phone || '—'}</td>
                  <td className="px-4 py-3 text-slate-600">{p.grade || '—'}</td>
                  <td className="px-4 py-3">
                    <Button size="sm" variant="outline" onClick={() => { setTarget(p); setMsg(''); setAudience('all'); }}>
                      <Send className="w-3.5 h-3.5" />
                      {lang === 'ar' ? 'رسالة' : 'Message'}
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-slate-400 text-xs">{lang === 'ar' ? 'لا يوجد طلاب بعد' : 'No students yet'}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {target && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-600" />
              <h3 className="font-heading font-bold text-slate-900">{target.full_name}</h3>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-slate-500">{lang === 'ar' ? 'المستلم' : 'Recipient'}</p>
              <div className="flex gap-2">
                {[
                  { v: 'all', l: lang === 'ar' ? 'الكل' : 'All' },
                  { v: 'students', l: lang === 'ar' ? 'الطالب' : 'Student' },
                  { v: 'parents', l: lang === 'ar' ? 'ولي الأمر' : 'Parent' },
                ].map((o) => (
                  <button key={o.v} type="button" onClick={() => setAudience(o.v)} className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${audience === o.v ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400'}`}>{o.l}</button>
                ))}
              </div>
            </div>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={4}
              placeholder={lang === 'ar' ? 'اكتب الرسالة...' : 'Write message...'}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none resize-none"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setTarget(null)}>{lang === 'ar' ? 'إلغاء' : 'Cancel'}</Button>
              <Button onClick={sendSingle} disabled={sending || !msg.trim()} className="bg-emerald-600 hover:bg-emerald-500">
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {lang === 'ar' ? 'إرسال واتساب' : 'Send'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {bulk && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-amber-600" />
              <h3 className="font-heading font-bold text-slate-900">
                {bulk.grade
                  ? (lang === 'ar' ? `إذاعة لصف ${bulk.grade}` : `Broadcast to grade ${bulk.grade}`)
                  : (lang === 'ar' ? 'إذاعة لكل الطلاب' : 'Broadcast to all students')}
              </h3>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-slate-500">{lang === 'ar' ? 'المستلم' : 'Recipient'}</p>
              <div className="flex gap-2">
                {[
                  { v: 'all', l: lang === 'ar' ? 'الكل' : 'All' },
                  { v: 'students', l: lang === 'ar' ? 'الطلاب' : 'Students' },
                  { v: 'parents', l: lang === 'ar' ? 'أولياء الأمور' : 'Parents' },
                ].map((o) => (
                  <button key={o.v} type="button" onClick={() => setAudience(o.v)} className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-colors ${audience === o.v ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400'}`}>{o.l}</button>
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500">
              {lang === 'ar'
                ? `ستصل الرسالة لـ ${filtered.length} طالب/ولي أمر عبر واتساب + إشعار داخل التطبيق.`
                : `Will reach ${filtered.length} students/parents via WhatsApp + in-app notification.`}
            </p>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={4}
              placeholder={lang === 'ar' ? 'اكتب الرسالة الجماعية...' : 'Write broadcast message...'}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none resize-none"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setBulk(null)}>{lang === 'ar' ? 'إلغاء' : 'Cancel'}</Button>
              <Button onClick={sendBulk} disabled={sending || !msg.trim()} className="bg-emerald-600 hover:bg-emerald-500">
                {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {lang === 'ar' ? 'إرسال جماعي' : 'Broadcast'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}