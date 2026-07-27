import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useToast } from '@/components/ui/use-toast';
import { useLang } from '@/lib/i18n';
import { Loader2, Send, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BroadcastSender() {
  const { lang } = useLang();
  const { toast } = useToast();
  const [msg, setMsg] = useState('');
  const [audience, setAudience] = useState('all');
  const [sending, setSending] = useState(false);

  const send = async () => {
    if (!msg.trim()) return;
    setSending(true);
    try {
      const res = await base44.functions.invoke('sendWhatsAppMessage', {
        mode: 'broadcast',
        message: msg.trim(),
        audience,
      });
      const d = res.data || res;
      toast({
        title: lang === 'ar' ? `إذاعة: ${d.sent} ناجح / ${d.failed} فشل (من ${d.total})` : `Broadcast: ${d.sent}/${d.failed} of ${d.total}`,
        description: d.credentialsMissing ? (lang === 'ar' ? 'لم يُرسل واتساب فعلياً — يلزم WHATSAPP_ACCESS_TOKEN' : 'Token missing — not sent') : '',
      });
      setMsg('');
    } catch (e) {
      toast({ title: 'خطأ', description: e.message, variant: 'destructive' });
    }
    setSending(false);
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 flex items-center gap-3">
        <Megaphone className="w-5 h-5 text-amber-600" />
        <p className="text-sm text-amber-800">
          {lang === 'ar' ? 'رسالة جماعية تصل لكل الطلاب/أولياء الأمور عبر واتساب + إشعار صوتي داخل التطبيق.' : 'Broadcast to all students/parents via WhatsApp + in-app sound notification.'}
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-2">
          {lang === 'ar' ? 'الجمهور' : 'Audience'}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: 'all', ar: 'الجميع', en: 'All' },
            { v: 'students', ar: 'الطلاب فقط', en: 'Students' },
            { v: 'parents', ar: 'أولياء الأمور', en: 'Parents' },
          ].map((o) => (
            <button
              key={o.v}
              onClick={() => setAudience(o.v)}
              className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-colors ${
                audience === o.v ? 'bg-amber-500 border-amber-500 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
              }`}
            >
              {lang === 'ar' ? o.ar : o.en}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700 block mb-2">
          {lang === 'ar' ? 'نص الرسالة' : 'Message'}
        </label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          placeholder={lang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message...'}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-amber-400 focus:outline-none resize-none"
        />
      </div>

      <Button onClick={send} disabled={sending || !msg.trim()} className="bg-emerald-600 hover:bg-emerald-500 w-full sm:w-auto">
        {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {lang === 'ar' ? 'إرسال جماعي' : 'Broadcast'}
      </Button>
    </div>
  );
}