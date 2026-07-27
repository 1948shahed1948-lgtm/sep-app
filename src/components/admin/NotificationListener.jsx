import React, { useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useToast } from '@/components/ui/use-toast';

function playBeep() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    o.type = 'sine';
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    o.start();
    o.stop(ctx.currentTime + 0.6);
  } catch {}
}

// يستمع لإشعارات المشرف الجديدة → يُشغّل صوتاً ويعرض توست للمستخدم.
export default function NotificationListener() {
  const { toast } = useToast();

  useEffect(() => {
    let meId = null;
    let meRole = null;
    base44.auth.me().then((u) => { meId = u ? u.id : null; meRole = u ? u.role : null; }).catch(() => {});

    const unsub = base44.entities.AdminNotification.subscribe((event) => {
      const d = event && event.data;
      if (!d) return;
      // إشعارات الإتمام (report) تُعرض للمشرف فقط
      if (d.kind === 'report' && meRole !== 'admin') return;
      // إذاعة (null) أو موجهة لي شخصياً
      if (d.target_user_id && d.target_user_id !== meId) return;
      playBeep();
      toast({
        title: d.title_ar || 'إشعار',
        description: d.body_ar || '',
      });
    });
    return () => unsub();
  }, [toast]);

  return null;
}