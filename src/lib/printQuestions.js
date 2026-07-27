import { getGradeName } from '@/lib/gradeData';

export function printQuestions(questions, subject, grade, lang) {
  const isAR = lang === 'ar';
  const dir = isAR ? 'rtl' : 'ltr';
  const w = window.open('', '_blank');
  if (!w) return;

  const qHTML = questions.map((q, i) => {
    const opts = (isAR ? q.options_ar : q.options_en) || [];
    const correctIdx = Number(q.correct_answer);
    const optsHTML = opts.map((o, oi) => {
      const isCorrect = oi === correctIdx;
      return `<li style="margin:6px 0;padding:8px 12px;border-radius:8px;background:${isCorrect ? '#dcfce7' : '#f8fafc'};border:1px solid ${isCorrect ? '#16a34a' : '#e2e8f0'};font-weight:${isCorrect ? '700' : '400'}">${String.fromCharCode(65 + oi)}. ${o} ${isCorrect ? '✓' : ''}</li>`;
    }).join('');
    return `
      <div style="margin-bottom:18px;padding:16px;border:1px solid #e2e8f0;border-radius:12px;page-break-inside:avoid">
        <div style="display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-bottom:6px">
          <span><b>س${i + 1}</b> · ${q.difficulty || ''} ${q.page_number ? '· ' + (isAR ? 'صفحة' : 'p.') + ' ' + q.page_number : ''} ${q.paragraph ? '· ' + q.paragraph : ''}</span>
        </div>
        <p style="font-weight:700;margin:0 0 10px">${isAR ? q.question_ar : q.question_en}</p>
        <ul style="list-style:none;padding:0;margin:0">${optsHTML}</ul>
        ${q.explanation_ar ? `<p style="margin-top:8px;font-size:13px;color:#334155"><b>${isAR ? 'الشرح: ' : 'Explanation: '}</b>${isAR ? q.explanation_ar : q.explanation_en}</p>` : ''}
        ${q.golden_rule_ar ? `<div style="margin-top:8px;padding:10px;background:#fef9c3;border:1px solid #facc15;border-radius:8px;font-size:13px"><b>👑 ${isAR ? 'القاعدة الذهبية: ' : 'Golden Rule: '}</b>${isAR ? q.golden_rule_ar : q.golden_rule_en}</div>` : ''}
      </div>`;
  }).join('');

  w.document.write(`<!DOCTYPE html><html dir="${dir}" lang="${lang}"><head><meta charset="utf-8"><title>بنك الأسئلة</title>
  <style>
    body{font-family:'Almarai','IBM Plex Sans Arabic',system-ui,sans-serif;padding:24px;color:#0f172a;max-width:800px;margin:auto}
    h1{font-size:20px;color:#1e293b;margin:0 0 4px}
    .meta{color:#64748b;font-size:13px;margin-bottom:18px;border-bottom:2px solid #263D84;padding-bottom:8px}
    @media print{body{padding:12px}}
  </style></head><body>
  <h1>${isAR ? 'بنك الأسئلة الإلكترونية' : 'Question Bank'}</h1>
  <div class="meta">${isAR ? subject?.name_ar : subject?.name_en} · ${getGradeName(grade, lang)} · ${questions.length} ${isAR ? 'سؤال' : 'questions'}</div>
  ${qHTML}
  <script>window.onload=function(){setTimeout(function(){window.print()},300)}</script>
  </body></html>`);
  w.document.close();
}