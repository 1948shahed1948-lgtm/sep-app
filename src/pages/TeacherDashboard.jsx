import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Upload, CheckCircle2, Clock, XCircle, FileText, Trash2, Plus, ExternalLink, Link2, Wallet } from 'lucide-react';
import TeacherEarnings from '@/components/teacher/TeacherEarnings';

export default function TeacherDashboard() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('bookings');
  const [subjects, setSubjects] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [newSubject, setNewSubject] = useState({ subject_name_ar: '', grade: '', session_type: 'online_link', description: '', materials_url: '' });

  useEffect(() => {
    base44.auth.me().then(async (u) => {
      setUser(u);
      const profiles = await base44.entities.TeacherProfile.filter({ user_id: u.id });
      setProfile(profiles?.[0] || null);
      setLoading(false);
    }).catch(() => nav('/login'));
  }, []);

  const refresh = async () => {
    if (!user) return;
    const [subs, books, pays] = await Promise.all([
      base44.entities.TeacherSubject.filter({ teacher_id: user.id }),
      base44.entities.TeacherBooking.filter({ teacher_id: user.id }),
      base44.entities.TeacherPayout.filter({ teacher_id: user.id }),
    ]);
    setSubjects(subs || []);
    setBookings(books || []);
    setPayouts(pays || []);
  };

  useEffect(() => {
    if (profile?.status === 'active') refresh();
  }, [profile]);

  if (loading) return <div className="text-center py-20 text-slate-400 text-sm">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</div>;

  if (!profile) {
    return (
      <div className="space-y-6">
        <PageHeader title={isAr ? 'لوحة المعلم' : 'Tutor Dashboard'} backTo="/" breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }]} />
        <Card className="rounded-2xl border-emerald-100 bg-emerald-50">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="font-heading font-bold text-lg text-slate-900">{isAr ? 'ليس لديك ملف معلم بعد' : 'No tutor profile yet'}</h2>
            <Button onClick={() => nav('/teacher/register')} className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6">{isAr ? 'سجّل الآن' : 'Register now'}</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (profile.status === 'pending') {
    return (
      <div className="space-y-6">
        <PageHeader title={isAr ? 'لوحة المعلم' : 'Tutor Dashboard'} backTo="/" breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }]} />
        <Card className="rounded-2xl border-amber-200 bg-amber-50">
          <CardContent className="p-8 text-center space-y-3">
            <Clock className="w-12 h-12 text-amber-500 mx-auto" />
            <h2 className="font-heading font-bold text-lg text-slate-900">{isAr ? 'بانتظار موافقة الأدمن' : 'Pending Admin Approval'}</h2>
            <p className="text-sm text-slate-600">{isAr ? 'سيتم تفعيل حسابك قريباً' : 'Your account will be activated soon'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (profile.status === 'suspended') {
    return (
      <div className="space-y-6">
        <PageHeader title={isAr ? 'لوحة المعلم' : 'Tutor Dashboard'} backTo="/" breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }]} />
        <Card className="rounded-2xl border-red-200 bg-red-50">
          <CardContent className="p-8 text-center space-y-3">
            <XCircle className="w-12 h-12 text-red-500 mx-auto" />
            <h2 className="font-heading font-bold text-lg text-slate-900">{isAr ? 'حسابك موقوف' : 'Account Suspended'}</h2>
            <p className="text-sm text-slate-600">{isAr ? 'تواصل مع الأدمن' : 'Contact admin'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const addSubject = async () => {
    if (!newSubject.subject_name_ar || !newSubject.grade) { alert(isAr ? 'أكمل المادة والصف' : 'Fill subject and grade'); return; }
    await base44.entities.TeacherSubject.create({
      ...newSubject,
      teacher_id: user.id,
      teacher_name: profile.full_name,
    });
    setNewSubject({ subject_name_ar: '', grade: '', session_type: 'online_link', description: '', materials_url: '' });
    setShowAddSubject(false);
    refresh();
  };

  const uploadMaterials = async (e, target, id) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    if (target === 'subject') {
      await base44.entities.TeacherSubject.update(id, { materials_url: file_url });
    } else {
      await base44.entities.TeacherBooking.update(id, { materials_url: file_url });
    }
    refresh();
    alert(isAr ? 'تم رفع الملف وتحويله إلى رابط ✓' : 'File uploaded and converted to link ✓');
  };

  const approveBooking = async (b) => {
    const link = prompt(isAr ? 'أدخل رابط الجلسة (Zoom/Meet):' : 'Enter session link (Zoom/Meet):');
    if (!link) return;
    const priceStr = prompt(isAr ? 'أدخل سعر الجلسة بالريال السعودي:' : 'Enter session price (SAR):', '0');
    const price = Number(priceStr) || 0;
    await base44.entities.TeacherBooking.update(b.id, { status: 'approved', session_link: link, session_price: price });
    refresh();
  };

  const completeBooking = async (id) => {
    await base44.entities.TeacherBooking.update(id, { status: 'completed' });
    refresh();
  };

  const cancelBooking = async (id) => {
    await base44.entities.TeacherBooking.update(id, { status: 'canceled' });
    refresh();
  };

  const deleteSubject = async (id) => {
    if (!confirm(isAr ? 'حذف هذه المادة؟' : 'Delete this subject?')) return;
    await base44.entities.TeacherSubject.delete(id);
    refresh();
  };

  const statusBadge = (st) => {
    if (st === 'pending') return <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 rounded-full px-2.5 py-1 text-xs font-bold"><Clock className="w-3 h-3" />{isAr ? 'بانتظار' : 'Pending'}</span>;
    if (st === 'approved') return <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 text-xs font-bold"><CheckCircle2 className="w-3 h-3" />{isAr ? 'معتمد' : 'Approved'}</span>;
    if (st === 'completed') return <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 rounded-full px-2.5 py-1 text-xs font-bold"><CheckCircle2 className="w-3 h-3" />{isAr ? 'مكتمل' : 'Done'}</span>;
    if (st === 'canceled') return <span className="inline-flex items-center gap-1 text-red-700 bg-red-50 rounded-full px-2.5 py-1 text-xs font-bold"><XCircle className="w-3 h-3" />{isAr ? 'ملغى' : 'Canceled'}</span>;
  };

  return (
    <div className="space-y-6">
      <PageHeader title={isAr ? 'لوحة المعلم' : 'Tutor Dashboard'} backTo="/" breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }, { label: profile.full_name }]} />

      {/* Profile summary */}
      <Card className="rounded-2xl border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardContent className="p-5 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
            {profile.avatar_url ? <img src={profile.avatar_url} alt={profile.full_name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-emerald-500 flex items-center justify-center"><BookOpen className="w-7 h-7 text-white" /></div>}
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-slate-900">{profile.full_name}</h2>
            <p className="text-sm text-emerald-600">{profile.specialization_ar}</p>
            <p className="text-xs text-slate-500 mt-0.5">{isAr ? 'واتساب:' : 'WhatsApp:'} {profile.phone}</p>
          </div>
          {profile.rating > 0 && <span className="text-amber-500 font-bold text-sm">⭐ {profile.rating.toFixed(1)}</span>}
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="flex gap-2">
        <button onClick={() => setTab('bookings')} className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${tab === 'bookings' ? 'bg-primary text-primary-foreground' : 'bg-white border border-slate-200 text-slate-600'}`}>
          {isAr ? 'الحجوزات' : 'Bookings'} ({bookings.length})
        </button>
        <button onClick={() => setTab('earnings')} className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${tab === 'earnings' ? 'bg-primary text-primary-foreground' : 'bg-white border border-slate-200 text-slate-600'}`}>
          <Wallet className="w-4 h-4 inline -mt-0.5" /> {isAr ? 'الأرباح' : 'Earnings'}
        </button>
        <button onClick={() => setTab('subjects')} className={`flex-1 rounded-xl py-2.5 text-sm font-bold transition ${tab === 'subjects' ? 'bg-primary text-primary-foreground' : 'bg-white border border-slate-200 text-slate-600'}`}>
          {isAr ? 'المواد' : 'Subjects'} ({subjects.length})
        </button>
      </div>

      {/* Bookings tab */}
      {tab === 'bookings' && (
        <div className="space-y-3">
          {bookings.length === 0 ? (
            <Card className="rounded-2xl"><CardContent className="p-8 text-center text-slate-400 text-sm">{isAr ? 'لا توجد حجوزات بعد' : 'No bookings yet'}</CardContent></Card>
          ) : bookings.map((b) => (
            <Card key={b.id} className="rounded-2xl border-slate-100">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900">{b.student_name}</h4>
                    <p className="text-xs text-slate-500">{b.student_phone}</p>
                  </div>
                  {statusBadge(b.status)}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="bg-slate-50 rounded-lg px-2 py-1">📚 {b.subject_name} — {b.grade}</span>
                  {b.preferred_date && <span className="bg-slate-50 rounded-lg px-2 py-1">📅 {b.preferred_date}</span>}
                </div>
                {b.notes && <p className="text-xs text-slate-400 bg-slate-50 rounded-lg p-2">{b.notes}</p>}
                {b.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button onClick={() => approveBooking(b)} size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-9">
                      <CheckCircle2 className="w-4 h-4" /> {isAr ? 'اعتماد + رابط' : 'Approve + Link'}
                    </Button>
                    <Button onClick={() => cancelBooking(b.id)} size="sm" variant="outline" className="rounded-lg h-9 text-red-600 border-red-200">
                      <XCircle className="w-4 h-4" /> {isAr ? 'رفض' : 'Reject'}
                    </Button>
                  </div>
                )}
                {b.status === 'approved' && (
                  <div className="space-y-2">
                    <a href={b.session_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline">
                      <Link2 className="w-3.5 h-3.5" /> {b.session_link}
                    </a>
                    <div className="flex items-center gap-2">
                      <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium hover:bg-slate-50">
                        <Upload className="w-3.5 h-3.5" /> {isAr ? 'رفع ملفات الجلسة' : 'Upload materials'}
                        <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={(e) => uploadMaterials(e, 'booking', b.id)} className="hidden" />
                      </label>
                      {b.materials_url && <a href={b.materials_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"><FileText className="w-3.5 h-3.5" /> {isAr ? 'الملف' : 'File'}</a>}
                      <Button onClick={() => completeBooking(b.id)} size="sm" variant="outline" className="rounded-lg h-8 text-xs">{isAr ? 'إنهاء' : 'Complete'}</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Earnings tab */}
      {tab === 'earnings' && (
        <TeacherEarnings bookings={bookings} payouts={payouts} />
      )}

      {/* Subjects tab */}
      {tab === 'subjects' && (
        <div className="space-y-3">
          {!showAddSubject ? (
            <Button onClick={() => setShowAddSubject(true)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-11 gap-2">
              <Plus className="w-4 h-4" /> {isAr ? 'إضافة مادة' : 'Add Subject'}
            </Button>
          ) : (
            <Card className="rounded-2xl border-emerald-200">
              <CardContent className="p-4 space-y-3">
                <div className="grid sm:grid-cols-2 gap-2">
                  <input value={newSubject.subject_name_ar} onChange={(e) => setNewSubject({ ...newSubject, subject_name_ar: e.target.value })} placeholder={isAr ? 'اسم المادة' : 'Subject name'} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                  <input value={newSubject.grade} onChange={(e) => setNewSubject({ ...newSubject, grade: e.target.value })} placeholder={isAr ? 'الصف' : 'Grade'} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <select value={newSubject.session_type} onChange={(e) => setNewSubject({ ...newSubject, session_type: e.target.value })} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
                  <option value="online_link">{isAr ? 'رابط مباشر' : 'Live link'}</option>
                  <option value="recorded">{isAr ? 'مسجّل' : 'Recorded'}</option>
                  <option value="both">{isAr ? 'كلاهما' : 'Both'}</option>
                </select>
                <textarea value={newSubject.description} onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })} placeholder={isAr ? 'وصف المادة' : 'Description'} rows={2} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                <p className="text-xs text-slate-400">{isAr ? 'يمكنك رفع ملفات المادة بعد حفظها من قائمة المواد' : 'You can upload materials after saving, from the subjects list'}</p>
                <div className="flex gap-2">
                  <Button onClick={addSubject} size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">{isAr ? 'حفظ' : 'Save'}</Button>
                  <Button onClick={() => setShowAddSubject(false)} size="sm" variant="outline" className="rounded-lg">{isAr ? 'إلغاء' : 'Cancel'}</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {subjects.map((s) => (
            <Card key={s.id} className="rounded-2xl border-slate-100">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{s.subject_name_ar}</h4>
                    <p className="text-xs text-slate-500">{s.grade} — {s.session_type === 'online_link' ? (isAr ? 'مباشر' : 'Live') : s.session_type === 'recorded' ? (isAr ? 'مسجّل' : 'Recorded') : (isAr ? 'كلاهما' : 'Both')}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <label className="cursor-pointer p-1.5 rounded-lg hover:bg-slate-50">
                      <Upload className="w-4 h-4 text-slate-500" />
                      <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={(e) => uploadMaterials(e, 'subject', s.id)} className="hidden" />
                    </label>
                    <button onClick={() => deleteSubject(s.id)} className="p-1.5 rounded-lg hover:bg-red-50">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                {s.materials_url && (
                  <a href={s.materials_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline">
                    <FileText className="w-3.5 h-3.5" /> {isAr ? 'عرض ملفات المادة' : 'View materials'}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}