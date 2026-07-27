import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MessageCircle, UserPlus, Search, GraduationCap, Calendar } from 'lucide-react';

export default function TeachersLanding() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    base44.entities.TeacherProfile.filter({ status: 'active' })
      .then((rows) => {
        setTeachers(rows || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = teachers.filter((t) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (t.full_name || '').toLowerCase().includes(q) ||
      (t.specialization_ar || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title={isAr ? 'المعلمون الخصوصيون' : 'Private Tutors'}
        backTo="/"
        breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }, { label: isAr ? 'المعلمون' : 'Tutors' }]}
      />

      <Card className="rounded-2xl border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 text-center sm:text-start">
            <h2 className="font-heading font-bold text-slate-900 text-lg">
              {isAr ? 'سوق المعلمين الموثوقين' : 'Trusted Tutors Marketplace'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {isAr
                ? 'تصفّح المعلمين، تواصل عبر واتساب، واتفق على الجلسة — الدفع مباشر بينك وبين المعلم.'
                : 'Browse tutors, contact via WhatsApp, agree on sessions — payment is direct between you and the tutor.'}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/teacher/login"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold shadow hover:opacity-90 transition"
            >
              <GraduationCap className="w-4 h-4" />
              {isAr ? 'دخول المعلم' : 'Tutor Login'}
            </Link>
            <Link
              to="/teacher/register"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 px-4 py-2.5 text-sm font-bold transition"
            >
              <UserPlus className="w-4 h-4" />
              {isAr ? 'سجّل جديد' : 'Register'}
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Link to="/my-bookings" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800">
          <Calendar className="w-4 h-4" />
          {isAr ? 'حجوزاتي' : 'My Bookings'}
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isAr ? 'ابحث بالاسم أو التخصص…' : 'Search by name or specialization…'}
          className="w-full rounded-xl border border-slate-200 bg-white ps-10 pe-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      {loading ? (
        <div className="text-center py-16 text-slate-400 text-sm">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          {isAr ? 'لا يوجد معلمون بعد — كن أول من يسجّل!' : 'No tutors yet — be the first to register!'}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t) => (
            <Link key={t.id} to={`/teachers/${t.id}`}>
              <Card className="rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <div className="relative h-32 bg-gradient-to-br from-emerald-400 to-teal-500">
                  {t.avatar_url ? (
                    <img src={t.avatar_url} alt={t.full_name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <GraduationCap className="w-12 h-12 text-white/80" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-slate-900">{t.full_name}</h3>
                    {t.rating > 0 && (
                      <span className="inline-flex items-center gap-1 text-amber-500 text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400" />
                        {t.rating.toFixed(1)}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-emerald-600 font-medium">{t.specialization_ar || '—'}</p>
                  <p className="text-sm text-slate-500 line-clamp-2">{t.bio_ar || ''}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-full px-3 py-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}