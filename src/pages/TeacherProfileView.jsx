import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MessageCircle, GraduationCap, BookOpen, Calendar, Phone, User, CheckCircle2, FileText, ExternalLink } from 'lucide-react';

export default function TeacherProfileView() {
  const { id } = useParams();
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const [teacher, setTeacher] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Promise.all([
      base44.entities.TeacherProfile.get(id),
      base44.entities.TeacherSubject.filter({ teacher_id: id }),
    ])
      .then(([t, subs]) => {
        setTeacher(t);
        setSubjects(subs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    // عبّئ بيانات الطالب تلقائياً من حسابه
    base44.auth.me().then(async (u) => {
      setCurrentUser(u);
      const profiles = await base44.entities.StudentProfile.filter({ user_id: u.id });
      const sp = profiles?.[0];
      setBookingName(sp?.full_name || u.full_name || '');
      setBookingPhone(sp?.phone || '');
    }).catch(() => {});
  }, [id]);

  if (loading) return <div className="text-center py-20 text-slate-400 text-sm">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</div>;
  if (!teacher) return <div className="text-center py-20 text-slate-400 text-sm">{isAr ? 'المعلم غير موجود' : 'Teacher not found'}</div>;

  const whatsappLink = (subjectName) => {
    const phone = (teacher.phone || '').replace(/\D/g, '');
    const msg = isAr
      ? `السلام عليكم ${teacher.full_name} 👋\nأرغب بحجز جلسة في مادة: ${subjectName || ''}\nالصف: —\nالتاريخ المفضل: —\nالاسم: —`
      : `Hello ${teacher.full_name} 👋\nI'd like to book a session for: ${subjectName || ''}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  const handleBooking = async (subject) => {
    if (!bookingPhone) {
      alert(isAr ? 'أدخل اسمك ورقم هاتفك أولاً' : 'Enter your name and phone first');
      return;
    }
    await base44.entities.TeacherBooking.create({
      teacher_id: teacher.user_id || teacher.id,
      teacher_name: teacher.full_name,
      subject_name: subject?.subject_name_ar || '',
      grade: subject?.grade || '',
      student_name: bookingName || 'طالب',
      student_phone: bookingPhone,
      student_user_id: currentUser?.id || '',
      status: 'pending',
    });
    // افتح واتساب مباشرة
    window.open(whatsappLink(subject?.subject_name_ar), '_blank');
    const goBookings = confirm(isAr ? 'تم إرسال طلبك للمعلم! ✅\n\nهل تريد رؤية سجل حجوزاتك؟' : 'Request sent! ✅\n\nView your bookings?');
    if (goBookings) window.location.href = '/my-bookings';
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={teacher.full_name}
        backTo="/teachers"
        breadcrumbs={[{ label: isAr ? 'المعلمون' : 'Tutors', path: '/teachers' }, { label: teacher.full_name }]}
      />

      {/* Teacher header */}
      <Card className="rounded-2xl overflow-hidden">
        <div className="relative h-40 bg-gradient-to-br from-emerald-500 to-teal-600">
          {teacher.avatar_url && (
            <img src={teacher.avatar_url} alt={teacher.full_name} className="w-full h-full object-cover opacity-90" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <CardContent className="p-6 -mt-16 relative">
          <div className="flex items-end gap-4">
            <div className="w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
              {teacher.avatar_url ? (
                <img src={teacher.avatar_url} alt={teacher.full_name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-emerald-50">
                  <GraduationCap className="w-10 h-10 text-emerald-500" />
                </div>
              )}
            </div>
            <div className="flex-1 pb-1">
              <h2 className="font-heading font-bold text-xl text-slate-900">{teacher.full_name}</h2>
              <p className="text-sm text-emerald-600 font-medium">{teacher.specialization_ar || '—'}</p>
              {teacher.rating > 0 && (
                <span className="inline-flex items-center gap-1 text-amber-500 text-sm font-bold mt-1">
                  <Star className="w-4 h-4 fill-amber-400" />
                  {teacher.rating.toFixed(1)} ({teacher.review_count || 0})
                </span>
              )}
            </div>
          </div>
          {teacher.bio_ar && <p className="text-sm text-slate-600 leading-relaxed mt-4">{teacher.bio_ar}</p>}
        </CardContent>
      </Card>

      {/* Subjects list */}
      <section className="space-y-4">
        <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          {isAr ? 'المواد المتاحة' : 'Available Subjects'}
        </h3>
        {subjects.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-8">{isAr ? 'لا توجد مواد مضافة بعد' : 'No subjects added yet'}</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {subjects.map((s) => (
              <Card key={s.id} className="rounded-2xl border-slate-100">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900">{s.subject_name_ar}</h4>
                    <span className="text-xs font-medium text-white bg-emerald-500 rounded-full px-2.5 py-1">{s.grade}</span>
                  </div>
                  <p className="text-xs text-slate-500">{s.description || ''}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    {s.session_type === 'online_link' && <span>🔗 {isAr ? 'رابط مباشر' : 'Live link'}</span>}
                    {s.session_type === 'recorded' && <span>🎬 {isAr ? 'مسجّل' : 'Recorded'}</span>}
                    {s.session_type === 'both' && <span>🔗🎬 {isAr ? 'مباشر + مسجّل' : 'Live + Recorded'}</span>}
                    {s.materials_url && (
                      <a href={s.materials_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
                        <FileText className="w-3.5 h-3.5" /> {isAr ? 'ملفات المادة' : 'Materials'}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Booking + WhatsApp */}
      <Card className="rounded-2xl border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            {isAr ? 'احجز جلستك' : 'Book Your Session'}
          </h3>
          <p className="text-sm text-slate-500">
            {isAr
              ? 'أدخل بياناتك ثم تواصل مع المعلم عبر واتساب للتسوية المالية. بعد الدفع يعتمد المعلم حجزك وتحصل على رابط الجلسة.'
              : 'Enter your details, contact the tutor via WhatsApp for payment. After payment, the tutor approves and you get the session link.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              placeholder={isAr ? 'اسمك' : 'Your name'}
              onChange={(e) => setBookingName(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              placeholder={isAr ? 'رقم هاتفك' : 'Your phone'}
              value={bookingPhone}
              onChange={(e) => setBookingPhone(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <select
            id="subject-select"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
            defaultValue=""
          >
            <option value="" disabled>{isAr ? 'اختر المادة' : 'Select subject'}</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>{s.subject_name_ar} — {s.grade}</option>
            ))}
          </select>
          <Button
            onClick={() => {
              const sel = document.getElementById('subject-select');
              const subject = subjects.find((s) => s.id === sel.value);
              handleBooking(subject);
            }}
            className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl h-12 gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}