import React, { useState } from 'react';
import { Printer, X } from 'lucide-react';
import { UNITS, QUESTIONS, META, getQuestionsForLesson } from '@/lib/mathG2Ch5Bank';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const LETTERS = ['أ', 'ب', 'ج', 'د'];

export default function PrintModal({ onClose }) {
  const [opts, setOpts] = useState({ units: [], withExplanations: true, difficulty: 'all', types: [] });
  const toggleUnit = (id) => setOpts(o => ({ ...o, units: o.units.includes(id) ? o.units.filter(x => x !== id) : [...o.units, id] }));
  const toggleType = (t) => setOpts(o => ({ ...o, types: o.types.includes(t) ? o.types.filter(x => x !== t) : [...o.types, t] }));
  const TYPES = ['multipleChoice', 'trueFalse', 'ordering', 'matching', 'classify', 'fillBlank', 'compute'];
  const TYPE_LABELS = { multipleChoice: 'اختيار', trueFalse: 'صح/خطأ', ordering: 'ترتيب', matching: 'مطابقة', classify: 'تصنيف', fillBlank: 'فراغ', compute: 'حساب' };

  const filtered = QUESTIONS.filter(q => {
    if (opts.units.length > 0 && !opts.units.includes(q.unit)) return false;
    if (opts.difficulty !== 'all' && q.difficulty !== opts.difficulty) return false;
    if (opts.types.length > 0 && !opts.types.includes(q.type)) return false;
    return true;
  });

  const doPrint = () => {
    const w = window.open('', '_blank');
    const html = `<html dir="rtl"><head><title>بنك رياضيات - طباعة</title><style>
      body{font-family:Tajawal,sans-serif;padding:20px;color:#222}
      .q{border:1px solid #ccc;border-radius:8px;padding:12px;margin:10px 0;page-break-inside:avoid}
      .opt{padding:4px 8px;margin:3px 0;border-radius:4px}
      .correct{background:#d4f4dd;border:1px solid #059669;font-weight:bold}
      .exp{background:#fef9e7;border:1px solid #c9a227;border-radius:6px;padding:8px;margin:5px 0}
      .rule{background:#fff8dc;border:2px solid #c9a227;border-radius:8px;padding:8px;margin:5px 0}
      h1{text-align:center;color:#0a1628}
      .footer{margin-top:30px;text-align:center;font-size:11px;color:#888;border-top:1px solid #ddd;padding-top:10px}
      .cover{background:linear-gradient(135deg,#0a1628,#1a3a5a);color:white;padding:40px;text-align:center;border-radius:12px;margin-bottom:20px}
    </style></head><body>
      <div class="cover"><h1 style="color:#f4d03f">رياضيات الصف الثاني — الفصل الخامس</h1><p>جمع الأعداد المكونة من رقمين</p><p>${META.publisher}</p></div>
      <p style="text-align:center">${toAr(filtered.length)} سؤال</p>
      ${filtered.map(q => `<div class="q"><span style="color:#d97706;font-weight:bold">ص${toAr(q.page)}</span><h3>${q.question}</h3><div>${q.type === 'trueFalse' ? '<div class="opt correct">صح ✓</div><div class="opt">خطأ ✗</div>' : (q.options || []).map((o, i) => `<div class="opt ${i === q.correctAnswer ? 'correct' : ''}">${LETTERS[i]} ) ${o}</div>`).join('')}</div>${opts.withExplanations ? `<div class="exp"><strong>الشرح:</strong> ${q.explanation}</div><div class="rule">👑 <strong>القاعدة الذهبية:</strong> ${q.goldenRule}</div>` : ''}<p style="color:#888;font-size:11px"><em>${q.paragraph}</em></p></div>`).join('')}
      <div class="footer">أعدّ هذا البنك ضمن منصة بنوك الأسئلة والاختبارات المعيارية السعودية</div>
    </body></html>`;
    w.document.write(html); w.document.close(); w.print();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">طباعة PDF مخصّصة</h3><button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button></div>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-sm mb-2">اختر الدروس:</p>
            <div className="grid grid-cols-1 gap-2">
              {UNITS.map(u => (
                <label key={u.id} className="flex items-center gap-2 p-2 rounded-lg border cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" checked={opts.units.includes(u.id)} onChange={() => toggleUnit(u.id)} />
                  <span className="text-sm">{u.icon} {u.title}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-2">أنماط الأسئلة:</p>
            <div className="grid grid-cols-4 gap-2">
              {TYPES.map(t => (
                <label key={t} className="flex items-center gap-1 p-2 rounded-lg border cursor-pointer hover:bg-slate-50">
                  <input type="checkbox" checked={opts.types.includes(t)} onChange={() => toggleType(t)} />
                  <span className="text-xs">{TYPE_LABELS[t]}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-sm mb-2">الصعوبة:</p>
            <select value={opts.difficulty} onChange={e => setOpts(o => ({ ...o, difficulty: e.target.value }))} className="w-full rounded-lg border p-2">
              <option value="all">الكل</option>
              <option value="easy">سهل</option>
              <option value="medium">متوسط</option>
              <option value="hard">صعب</option>
            </select>
          </div>
          <label className="flex items-center gap-2"><input type="checkbox" checked={opts.withExplanations} onChange={e => setOpts(o => ({ ...o, withExplanations: e.target.checked }))} /><span className="text-sm">مع الشروحات والقاعدة الذهبية</span></label>
          <p className="text-sm text-slate-500">عدد الأسئلة: <strong>{toAr(filtered.length)}</strong></p>
          <button onClick={doPrint} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3 flex items-center justify-center gap-2"><Printer className="w-5 h-5" /> طباعة الآن</button>
        </div>
      </div>
    </div>
  );
}