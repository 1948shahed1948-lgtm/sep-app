import React, { useState, useEffect } from 'react';
import { isCurrentUserAdmin } from '@/lib/adminAuth';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowLeft, Loader2, Lock, Sparkles, Users, Activity, Megaphone, CreditCard, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillManager from '@/components/admin/SkillManager';
import ExerciseManager from '@/components/admin/ExerciseManager';
import AIGenerationTools from '@/components/admin/AIGenerationTools';
import AdminPasscode from '@/components/admin/AdminPasscode';
import StudentsManager from '@/components/admin/StudentsManager';
import ActivityFeed from '@/components/admin/ActivityFeed';
import BroadcastSender from '@/components/admin/BroadcastSender';
import SubscriptionsManager from '@/components/admin/SubscriptionsManager';
import TeacherPayouts from '@/components/admin/TeacherPayouts';

export default function AdminDashboard() {
  const [status, setStatus] = useState('checking'); // checking | authed | denied
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!unlocked) return;
    isCurrentUserAdmin().then((ok) => setStatus(ok ? 'authed' : 'denied'));
  }, [unlocked]);

  if (!unlocked) {
    return <AdminPasscode onUnlock={() => setUnlocked(true)} />;
  }

  if (status === 'checking') {
    return (
      <div className="max-w-sm mx-auto mt-20 flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm text-center">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        <p className="text-xs text-slate-500 font-medium">جاري التحقق من الصلاحية...</p>
      </div>
    );
  }

  if (status === 'denied') {
    return (
      <div className="max-w-sm mx-auto mt-20 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm text-center">
        <Lock className="w-10 h-10 mx-auto text-slate-400" />
        <h1 className="font-heading font-bold text-lg text-slate-900 mt-2">لا تملك صلاحية المشرف</h1>
        <p className="text-xs text-slate-500 mt-1">هذه اللوحة مخصصة للمشرفين فقط.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors mt-4">
          <ArrowLeft className="w-4 h-4" />
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        العودة للرئيسية
      </Link>
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-emerald-600" />
        <h1 className="text-2xl font-heading font-bold text-slate-900">لوحة تحكم المشرف</h1>
      </div>
      <Tabs defaultValue="students">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="students"><span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />الطلاب</span></TabsTrigger>
          <TabsTrigger value="activity"><span className="flex items-center gap-1"><Activity className="w-3.5 h-3.5" />النشاط</span></TabsTrigger>
          <TabsTrigger value="broadcast"><span className="flex items-center gap-1"><Megaphone className="w-3.5 h-3.5" />رسائل جماعية</span></TabsTrigger>
          <TabsTrigger value="skills">إنشاء المهارات</TabsTrigger>
          <TabsTrigger value="exercises">إنشاء الاختبارات</TabsTrigger>
          <TabsTrigger value="ai-tools"><span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" />توليد الذكاء</span></TabsTrigger>
          <TabsTrigger value="subscriptions"><span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" />الاشتراكات</span></TabsTrigger>
          <TabsTrigger value="payouts"><span className="flex items-center gap-1"><Wallet className="w-3.5 h-3.5" />تسويات المعلمين</span></TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="pt-6">
          <StudentsManager />
        </TabsContent>
        <TabsContent value="activity" className="pt-6">
          <ActivityFeed />
        </TabsContent>
        <TabsContent value="broadcast" className="pt-6">
          <BroadcastSender />
        </TabsContent>
        <TabsContent value="skills" className="pt-6">
          <SkillManager />
        </TabsContent>
        <TabsContent value="exercises" className="pt-6">
          <ExerciseManager />
        </TabsContent>
        <TabsContent value="ai-tools" className="pt-6">
          <AIGenerationTools />
        </TabsContent>
        <TabsContent value="subscriptions" className="pt-6">
          <SubscriptionsManager />
        </TabsContent>
        <TabsContent value="payouts" className="pt-6">
          <TeacherPayouts />
        </TabsContent>
      </Tabs>
    </div>
  );
}