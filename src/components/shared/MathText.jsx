import React from 'react';

// مكوّن عرض رياضي يدعم:
// - الكسور التلقائية: ١/٢ → كسر أفقي (بسط فوق مقام بخط أفقي)
// - الكسور الصريحة: \frac{بسط}{مقام}
// - الجذور الكاملة: \sqrt{جذر} | \sqrt[3]{جذر} | الجذر المكشوف √N أو √(...)
// - الأُسّ: أساس^{أُس} | أساس^أُس — يُعرض ب أرقام عربية-هندية (٠-٩)
// بأرقام عربية واتجاه RTL

function readBrace(text, start) {
  let depth = 1, i = start, content = '';
  while (i < text.length && depth > 0) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') { depth--; if (depth === 0) { i++; break; } }
    if (depth > 0) content += text[i];
    i++;
  }
  return { content, end: i };
}

// قراءة محتوى بين قوسين (...) مع مطابقة الإغلاق
function readParen(text, start) {
  let depth = 1, i = start, content = '';
  while (i < text.length && depth > 0) {
    if (text[i] === '(') depth++;
    else if (text[i] === ')') { depth--; if (depth === 0) { i++; break; } }
    if (depth > 0) content += text[i];
    i++;
  }
  return { content, end: i };
}

// تحويل الأرقام اللاتينية إلى عربية-هندية (للأسس)
function toArabicDigits(s) {
  return String(s).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);
}

function parseMath(text) {
  const tokens = [];
  let buf = '';
  let i = 0;
  const flush = () => { if (buf) { tokens.push({ type: 'text', content: buf }); buf = ''; } };

  while (i < text.length) {
    // \frac{num}{den}
    if (text.startsWith('\\frac{', i)) {
      flush();
      const num = readBrace(text, i + 6);
      let den = { content: '', end: num.end };
      if (text[num.end] === '{') den = readBrace(text, num.end + 1);
      tokens.push({ type: 'frac', num: num.content, den: den.content });
      i = den.end;
      continue;
    }
    // \sqrt[ n ]{ rad }  أو \sqrt{ rad }
    if (text.startsWith('\\sqrt', i)) {
      flush();
      let idx = i + 5;
      let rootN = null;
      if (text[idx] === '[') {
        let depth = 1, j = idx + 1, n = '';
        while (j < text.length && depth > 0) { if (text[j] === ']') { depth--; if (depth === 0) break; } if (depth > 0) n += text[j]; j++; }
        rootN = n; idx = j + 1;
      }
      if (text[idx] === '{') {
        const rad = readBrace(text, idx + 1);
        tokens.push({ type: 'sqrt', rad: rad.content, rootN });
        i = rad.end;
        continue;
      }
    }
    // الجذر المكشوف: √N أو √(...) — يُعرض كجذر كامل بخط علوي
    if (text[i] === '√') {
      flush();
      let idx = i + 1;
      if (text[idx] === '(') {
        const rad = readParen(text, idx + 1);
        tokens.push({ type: 'sqrt', rad: rad.content, rootN: null });
        i = rad.end;
        continue;
      }
      const m = /^[٠-٩0-9.]+/.exec(text.slice(idx));
      if (m) {
        tokens.push({ type: 'sqrt', rad: m[0], rootN: null });
        i = idx + m[0].length;
        continue;
      }
      // رمز الجذر وحيد بدون محتوى — اتركه كنص
      buf += text[i];
      i++;
      continue;
    }
    // الأسس: base^{exp} أو base^exp
    if (text[i] === '^') {
      flush();
      const last = tokens[tokens.length - 1];
      let base = '';
      if (last && last.type === 'text' && last.content.length > 0) {
        base = last.content.slice(-1);
        last.content = last.content.slice(0, -1);
        if (last.content === '') tokens.pop();
      }
      let exp;
      if (text[i + 1] === '{') { const e = readBrace(text, i + 2); exp = e.content; i = e.end; }
      else { exp = text[i + 1] || ''; i += 2; }
      tokens.push({ type: 'exp', base, exp });
      continue;
    }
    // كشف تلقائي: رقم/رقم → كسر أفقي
    const fracAuto = /^[٠-٩0-9]+\/[٠-٩0-9]+/.exec(text.slice(i));
    if (fracAuto) {
      flush();
      const match = fracAuto[0];
      const [num, den] = match.split('/');
      tokens.push({ type: 'frac', num, den });
      i += match.length;
      continue;
    }
    buf += text[i];
    i++;
  }
  flush();
  return tokens;
}

function renderToken(tok, key) {
  if (tok.type === 'text') return <span key={key}>{tok.content}</span>;
  if (tok.type === 'frac') {
    return (
      <span key={key} className="inline-flex flex-col items-center justify-center align-middle mx-0.5" style={{ verticalAlign: 'middle', lineHeight: 1.1 }}>
        <span className="px-1.5 pb-0.5" style={{ fontSize: '0.85em' }}>{tok.num}</span>
        <span className="block w-full border-t-2 border-current" />
        <span className="px-1.5 pt-0.5" style={{ fontSize: '0.85em' }}>{tok.den}</span>
      </span>
    );
  }
  if (tok.type === 'sqrt') {
    return (
      <span key={key} className="inline-flex items-stretch align-middle mx-0.5" style={{ verticalAlign: 'middle' }}>
        {tok.rootN && <sup style={{ fontSize: '0.6em', marginRight: '-0.2em', alignSelf: 'flex-start' }}>{tok.rootN}</sup>}
        <span style={{ fontSize: '1.1em', lineHeight: 1, alignSelf: 'center' }}>√</span>
        <span className="border-t-2 border-current px-0.5" style={{ marginTop: '0.05em', alignSelf: 'center' }}>
          <MathText text={tok.rad} />
        </span>
      </span>
    );
  }
  if (tok.type === 'exp') {
    return (
      <span key={key}>
        {tok.base}
        <sup style={{ fontSize: '0.65em', verticalAlign: 'super', lineHeight: 0 }}>{toArabicDigits(tok.exp)}</sup>
      </span>
    );
  }
  return null;
}

export default function MathText({ text, className }) {
  if (!text) return null;
  const tokens = parseMath(String(text));
  return <span className={className} dir="rtl">{tokens.map((tok, i) => renderToken(tok, i))}</span>;
}