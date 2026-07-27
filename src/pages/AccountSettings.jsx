import React, { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { User as UserIcon, Trash2, Shield, AlertTriangle, LogOut, Loader2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export default function AccountSettings() {
  const { lang, t } = useLang();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const handleDelete = async () => {
    setDeleting(true);
    setError('');
    try {
      await base44.functions.invoke('deleteAccount');
      await base44.auth.logout();
      window.location.href = '/login';
    } catch (e) {
      setError(e?.response?.data?.error || e?.message || 'Error');
      setDeleting(false);
    }
  };

  const handleLogout = async () => {
    await base44.auth.logout();
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-slate-300 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={lang === 'ar' ? 'الإعدادات' : 'Settings'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'الإعدادات' : 'Settings' }]}
      />

      {/* Profile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="rounded-2xl border-slate-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <UserIcon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-slate-900 text-lg">{user?.full_name || (lang === 'ar' ? 'طالب' : 'Student')}</p>
                <p className="text-sm text-slate-500">{user?.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Security / Logout */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <Card className="rounded-2xl border-slate-100">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-slate-900">
                {lang === 'ar' ? 'الأمان والحساب' : 'Security & Account'}
              </h3>
            </div>
            <Button variant="outline" onClick={handleLogout} className="w-full justify-start gap-2 rounded-xl">
              <LogOut className="w-4 h-4" />
              {lang === 'ar' ? 'تسجيل الخروج' : 'Log out'}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Danger Zone — delete account */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card className="rounded-2xl border-red-100 bg-red-50/30">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="font-heading font-bold text-slate-900">
                {lang === 'ar' ? 'منطقة الخطر' : 'Danger Zone'}
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              {lang === 'ar'
                ? 'سيؤدي حذف حسابك إلى إزالة جميع بياناتك الشخصية ونتائجك وسجل تدريبك نهائياً. لا يمكن التراجع عن هذا الإجراء.'
                : 'Deleting your account will permanently remove all your personal data, results, and training history. This action cannot be undone.'}
            </p>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="gap-2 rounded-xl" disabled={deleting}>
                  {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                  {lang === 'ar' ? 'حذف حسابي' : 'Delete my account'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{lang === 'ar' ? 'تأكيد حذف الحساب' : 'Confirm account deletion'}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {lang === 'ar'
                      ? 'هل أنت متأكد؟ سيتم حذف جميع بياناتك نهائياً ولا يمكن التراجع عن هذا الإجراء.'
                      : 'Are you sure? All your data will be permanently deleted and this action cannot be undone.'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={deleting}>{lang === 'ar' ? 'إلغاء' : 'Cancel'}</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} disabled={deleting} className="bg-red-600 hover:bg-red-700 text-white">
                    {deleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    {lang === 'ar' ? 'حذف نهائي' : 'Delete permanently'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}