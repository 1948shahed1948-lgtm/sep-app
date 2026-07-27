import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Printer, Moon, Sun, Crown, CheckCircle2, XCircle, Home, X, Palette, Trophy } from 'lucide-react';
import { META, UNITS, BLOOM_LABELS, DIFFICULTY_LABELS, ALL_QUESTIONS } from '@/lib/artGrade2S1Bank_Data';

const STORAGE_KEY = 'art_g2_s1_progress';
const STUDENT_KEY = 'art_g2_student';
const COLORS = ['#e91e8c','#0891b2','#059669','#d97706'];
const LETTERS = ['أ','ب','ج','د'];

function toAr(n){return String(n).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);}
function loadProg(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');}catch{return {};}}
function saveProg(p){localStorage.setItem(STORAGE_KEY,JSON.stringify(p));}

function TeacherSVG({size=80}){
  return(
    <svg width={size} height={Math.round(size*1.4)} viewBox="0 0 100 140" fill="none">
      <ellipse cx="50" cy="135" rx="28" ry="6" fill="#e8d5b7" opacity="0.4"/>
      <rect x="28" y="75" width="44" height="58" rx="12" fill="#fce4ec"/>
      <rect x="38" y="75" width="24" height="6" rx="3" fill="#e91e8c" opacity="0.7"/>
      <circle cx="50" cy="56" r="22" fill="#f5d0a9"/>
      <ellipse cx="50" cy="40" rx="22" ry="11" fill="#c2185b"/>
      <rect x="28" y="40" width="44" height="18" rx="4" fill="#c2185b"/>
      <circle cx="43" cy="57" r="3" fill="white"/>
      <circle cx="57" cy="57" r="3" fill="white"/>
      <circle cx="44" cy="58" r="1.5" fill="#2c1810"/>
      <circle cx="58" cy="58" r="1.5" fill="#2c1810"/>
      <path d="M43 65 Q50 70 57 65" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      <rect x="72" y="78" width="4" height="18" rx="2" fill="#e91e8c" transform="rotate(15 72 78)"/>
      <circle cx="76" cy="74" r="4" fill="#c9a227"/>
      <rect x="14" y="82" width="16" height="8" rx="4" fill="#fce4ec" transform="rotate(-20 14 82)"/>
    </svg>
  );
}

function Blackboard({text}){
  const [shown,setShown]=useState('');
  useEffect(()=>{setShown('');let i=0;const id=setInterval(()=>{i++;setShown(text.slice(0,i));if(i>=text.length)clearInterval(id);},24);return()=>clearInterval(id);},[text]);
  return(
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{border:'6px solid #5C3A1E'}}>
      <div className="flex items-center gap-1.5 px-3 py-1.5" style={{background:'#5C3A1E'}}>
        {['#ef4444','#f59e0b','#22c55e'].map((c,i)=><div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>)}
        <span className="text-xs text-amber-200 mr-auto font-mono">🎨 السبورة الفنية</span>
      </div>
      <div className="p-4 font-mono text-green-100 text-sm leading-relaxed min-h-16 text-right" dir="rtl" style={{background:'#1a3a2a'}}>
        {shown}<span className="animate-pulse">▌</span>
      </div>
    </div>
  );
}

function GoldenSeal(){
  return<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg flex-shrink-0"
    style={{background:'linear-gradient(135deg,#c9a227,#f4d03f,#c9a227)',animation:'pulse 2s infinite'}}>⭐⭐⭐</div>;
}

function GoldenRule({text}){
  return<div className="rounded-xl p-3 border-2 mt-3" style={{borderColor:'#c9a227',background:'linear-gradient(135deg,#fef9e7,#fff8dc)'}}>
    <div className="flex items-center gap-1.5 mb-1"><Crown className="w-4 h-4 text-amber-600"/><span className="font-bold text-amber-800 text-xs">القاعدة الذهبية</span></div>
    <p className="text-slate-800 text-xs font-medium" dir="rtl">{text}</p>
  </div>;
}

function MCQ({q,onAnswer,answered}){
  return<div className="space-y-2" dir="rtl">
    {q.options.map((opt,i)=>{
      const ok=opt.correct,chosen=answered?.chosen===i;
      const showOk=answered&&ok,showBad=answered&&chosen&&!ok;
      return<button key={i} disabled={!!answered} onClick={()=>!answered&&onAnswer(i,ok)}
        className="w-full text-right rounded-xl p-3 border-2 transition-all flex items-center gap-2.5 disabled:cursor-default"
        style={{borderColor:showOk?'#059669':showBad?'#dc2626':COLORS[i]+'55',background:showOk?'#ecfdf5':showBad?'#fef2f2':'white'}}>
        <span className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-sm" style={{background:COLORS[i]}}>{LETTERS[i]}</span>
        <span className="flex-1 text-slate-800 text-sm">{opt.text}</span>
        {showOk&&<CheckCircle2 className="w-5 h-5 text-emerald-600"/>}
        {showBad&&<XCircle className="w-5 h-5 text-red-600"/>}
      </button>;
    })}
  </div>;
}

function TFQ({q,onAnswer,answered}){
  return<div className="grid grid-cols-2 gap-4 mt-2" dir="rtl">
    {[true,false].map((val,i)=>{
      const chosen=answered?.chosen===val,showOk=answered&&val===q.correctAnswer,showBad=answered&&chosen&&val!==q.correctAnswer;
      return<button key={i} disabled={!!answered} onClick={()=>!answered&&onAnswer(val,val===q.correctAnswer)}
        className="rounded-2xl p-4 border-2 transition-all flex flex-col items-center gap-2 disabled:cursor-default"
        style={{borderColor:showOk?'#059669':showBad?'#dc2626':(val?'#05966955':'#dc262655'),background:showOk?'#ecfdf5':showBad?'#fef2f2':'white'}}>
        {val?<CheckCircle2 className="w-9 h-9 text-emerald-600"/>:<XCircle className="w-9 h-9 text-red-500"/>}
        <span className="font-bold text-sm">{val?'صواب ✓':'خطأ ✗'}</span>
      </button>;
    })}
  </div>;
}

function OrderingQ({q,onAnswer}){
  const [items,setItems]=useState(()=>q.items.map((t,i)=>({t,original:i})).sort(()=>Math.random()-0.5));
  const [submitted,setSubmitted]=useState(false);
  const isCorrect=items.every((it,i)=>it.original===q.correctOrder[i]);
  const move=(from,to)=>{if(submitted)return;const n=[...items];const[m]=n.splice(from,1);n.splice(to,0,m);setItems(n);};
  return<div className="space-y-2" dir="rtl">
    <p className="text-xs text-slate-500 mb-1">رتّب باستخدام الأسهم:</p>
    {items.map((it,i)=><div key={i} className="flex items-center gap-2">
      <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i+1)}</span>
      <div className="flex-1 rounded-xl p-2 border-2 border-slate-200 bg-white text-slate-800 text-sm">{it.t}</div>
      <button disabled={i===0||submitted} onClick={()=>move(i,i-1)} className="p-1 rounded-lg bg-slate-100 disabled:opacity-30 text-xs">▲</button>
      <button disabled={i===items.length-1||submitted} onClick={()=>move(i,i+1)} className="p-1 rounded-lg bg-slate-100 disabled:opacity-30 text-xs">▼</button>
    </div>)}
    {!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full mt-2 rounded-xl bg-emerald-600 text-white font-bold py-2 text-sm">تحقّق ✓</button>}
    {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ ترتيب صحيح!':'✗ الترتيب الصحيح: '+q.correctOrder.map(i=>q.items[i]).join(' ← ')}</div>}
  </div>;
}

function MatchingQ({q,onAnswer}){
  const [matches,setMatches]=useState({});
  const [selected,setSelected]=useState(null);
  const [submitted,setSubmitted]=useState(false);
  const rights=useMemo(()=>[...q.pairs].map((p,i)=>({text:p.right,original:i})).sort(()=>Math.random()-0.5),[q]);
  const pick=(side,idx)=>{if(submitted)return;if(side==='left'){setSelected(idx);}else{if(selected===null)return;setMatches({...matches,[selected]:idx});setSelected(null);}};
  const isCorrect=q.pairs.every((p,i)=>matches[i]===i);
  return<div className="space-y-2" dir="rtl">
    <p className="text-xs text-slate-500">اضغط من اليمين ثم من اليسار للمطابقة:</p>
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-1.5">{q.pairs.map((p,i)=><button key={i} onClick={()=>pick('left',i)} disabled={submitted||matches[i]!==undefined}
        className={`w-full rounded-xl p-2 border-2 text-right text-xs ${selected===i?'border-amber-500 bg-amber-50':'border-slate-200 bg-white'} ${matches[i]!==undefined?'opacity-50':''}`}>{p.left}</button>)}</div>
      <div className="space-y-1.5">{rights.map((r,i)=>{const matched=Object.entries(matches).find(([,v])=>v===i);
        return<button key={i} onClick={()=>pick('right',i)} disabled={submitted||!!matched}
          className={`w-full rounded-xl p-2 border-2 text-right text-xs ${matched?'border-emerald-400 bg-emerald-50':'border-slate-200 bg-white'}`}>{r.text}</button>;})}</div>
    </div>
    {Object.keys(matches).length===q.pairs.length&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2 text-sm">تحقّق ✓</button>}
    {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ مطابقة صحيحة!':'✗ راجع الإجابات'}</div>}
  </div>;
}

function ClassifyQ({q,onAnswer}){
  const [buckets,setBuckets]=useState(q.categories.map(()=>[]));
  const [pool,setPool]=useState(q.items.map((it,i)=>({...it,id:i})));
  const [sel,setSel]=useState(null);
  const [submitted,setSubmitted]=useState(false);
  const moveTo=(ci)=>{if(submitted||sel===null)return;setBuckets(buckets.map((b,i)=>i===ci?[...b.filter(x=>x.id!==sel.id),sel]:b.filter(x=>x.id!==sel.id)));setPool(pool.filter(x=>x.id!==sel.id));setSel(null);};
  const removeFrom=(item,ci)=>{if(submitted)return;setBuckets(buckets.map((b,i)=>i===ci?b.filter(x=>x.id!==item.id):b));setPool([...pool,item]);};
  const isCorrect=q.items.every((it,i)=>{const bi=buckets.findIndex(b=>b.some(x=>x.id===i));return bi===it.correct_category;});
  return<div className="space-y-3" dir="rtl">
    {pool.length>0&&<div className="rounded-xl bg-slate-50 p-3">
      <p className="text-xs text-slate-500 mb-2">اضغط عنصراً ثم اضغط العمود:</p>
      <div className="flex flex-wrap gap-2">{pool.map(it=><span key={it.id} onClick={()=>setSel(it)} className={`px-2.5 py-1 rounded-lg border cursor-pointer text-xs ${sel?.id===it.id?'border-amber-500 bg-amber-50':'bg-white border-slate-300 hover:border-amber-400'}`}>{it.text}</span>)}</div>
    </div>}
    <div className={`grid gap-2`} style={{gridTemplateColumns:`repeat(${Math.min(q.categories.length,2)},1fr)`}}>
      {q.categories.map((cat,ci)=><div key={ci} onClick={()=>moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-2.5 min-h-20 cursor-pointer hover:border-pink-300 transition-colors">
        <h4 className="font-bold text-xs text-center mb-1.5 text-slate-700 border-b pb-1">{cat}</h4>
        <div className="space-y-1">{buckets[ci].map(it=><div key={it.id} onClick={e=>{e.stopPropagation();removeFrom(it,ci);}} className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between cursor-pointer hover:bg-red-50">
          <span>{it.text}</span><X className="w-3 h-3 text-red-400"/></div>)}</div>
      </div>)}
    </div>
    {pool.length===0&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2 text-sm">تحقّق ✓</button>}
    {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ تصنيف صحيح!':'✗ راجع التصنيف'}</div>}
  </div>;
}

function FillBlankQ({q,onAnswer}){
  const [filled,setFilled]=useState(q.blanks.map(()=>null));
  const [pool,setPool]=useState(q.wordBank.map((w,i)=>({w,id:i,used:false})));
  const [selWord,setSelWord]=useState(null);
  const [submitted,setSubmitted]=useState(false);
  const place=(bi)=>{if(submitted||selWord===null)return;const next=[...filled];const prev=next[bi];setPool(pool.map(p=>{if(p.id===selWord)return{...p,used:true};if(prev!==null&&p.id===prev)return{...p,used:false};return p;}));next[bi]=selWord;setFilled(next);setSelWord(null);};
  const remove=(bi)=>{if(submitted)return;const next=[...filled];const wId=next[bi];if(wId===null)return;next[bi]=null;setFilled(next);setPool(pool.map(p=>p.id===wId?{...p,used:false}:p));};
  const isCorrect=filled.every((f,i)=>pool.find(p=>p.id===f)?.w===q.blanks[i]);
  return<div className="space-y-3" dir="rtl">
    <p className="text-xs text-slate-500">اضغط كلمة ثم الفراغ:</p>
    <div className="rounded-xl p-3 bg-white border-2 border-slate-200 text-sm leading-8">
      {q.blanks.map((b,i)=><button key={i} onClick={()=>place(i)} disabled={submitted} onDoubleClick={()=>remove(i)}
        className={`inline-block mx-1 px-2 py-0.5 rounded-lg border-2 border-dashed min-w-14 text-center text-xs ${filled[i]!==null?'border-emerald-400 bg-emerald-50':'border-amber-400 bg-amber-50 hover:bg-amber-100'}`}>
        {filled[i]!==null?pool.find(p=>p.id===filled[i])?.w:'___'}
      </button>)}
    </div>
    <div className="flex flex-wrap gap-2">{pool.map(w=><button key={w.id} disabled={w.used||submitted} onClick={()=>!w.used&&setSelWord(w.id)}
      className={`px-3 py-1.5 rounded-lg border-2 text-xs transition-all ${w.used?'opacity-30 border-slate-200 bg-slate-50':selWord===w.id?'border-emerald-500 bg-emerald-50 scale-105':'border-slate-300 bg-white hover:border-emerald-400 cursor-pointer'}`}>
      {w.w}</button>)}</div>
    {filled.every(f=>f!==null)&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2 text-sm">تحقّق ✓</button>}
    {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ صحيح!':'✗ الإجابة: '+q.blanks.join(' — ')}</div>}
  </div>;
}

function QRenderer({q,onAnswer,answered}){
  if(q.type==='multipleChoice')return<MCQ q={q} onAnswer={onAnswer} answered={answered}/>;
  if(q.type==='trueFalse')return<TFQ q={q} onAnswer={onAnswer} answered={answered}/>;
  if(q.type==='ordering')return<OrderingQ q={q} onAnswer={onAnswer}/>;
  if(q.type==='matching')return<MatchingQ q={q} onAnswer={onAnswer}/>;
  if(q.type==='classify')return<ClassifyQ q={q} onAnswer={onAnswer}/>;
  if(q.type==='fillBlank')return<FillBlankQ q={q} onAnswer={onAnswer}/>;
  return<MCQ q={q} onAnswer={onAnswer} answered={answered}/>;
}

function PrintModal({onClose}){
  const [opts,setOpts]=useState({units:UNITS.map(u=>u.id),withExp:true,diff:'all'});
  const toggle=(id)=>setOpts(o=>({...o,units:o.units.includes(id)?o.units.filter(x=>x!==id):[...o.units,id]}));
  const filtered=ALL_QUESTIONS.filter(q=>opts.units.includes(q.unit)&&(opts.diff==='all'||q.difficulty===opts.diff));
  const doPrint=()=>{
    const w=window.open('','_blank');
    const html=`<html dir="rtl"><head><title>${META.title}</title><style>
      body{font-family:Tajawal,Arial,sans-serif;padding:20px;color:#222;direction:rtl;font-size:12px}
      .q{border:1px solid #ccc;border-radius:8px;padding:10px;margin:8px 0;page-break-inside:avoid;position:relative}
      .meta{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px;font-size:10px}
      .badge{padding:2px 6px;border-radius:10px;background:#fce4ec;color:#c2185b}
      .opt{padding:3px 8px;margin:2px 0;border-radius:4px;display:flex;align-items:center;gap:6px;font-size:11px}
      .correct{background:#d4f4dd;border:1px solid #059669;font-weight:bold}
      .exp{background:#e8f5e9;border:1px solid #c2185b;border-radius:5px;padding:6px;margin:4px 0;font-size:11px}
      .rule{background:#fff8dc;border:2px solid #c9a227;border-radius:6px;padding:5px;margin:4px 0;font-size:11px}
      .seal{position:absolute;top:6px;left:6px;font-size:13px}
      .pg{color:#e91e8c;font-weight:bold;font-size:10px}
      h1{text-align:center;color:#c2185b;border-bottom:3px solid #e91e8c;padding-bottom:6px}
      .footer{margin-top:16px;text-align:center;font-size:10px;color:#888;border-top:1px solid #ddd;padding-top:6px}
    </style></head><body>
      <h1>${META.title}</h1>
      <p style="text-align:center;color:#666">${META.subject} — ${META.grade} — ${META.term} · ${filtered.length} سؤال</p>
      ${filtered.map((q,qi)=>`<div class="q"><span class="seal">⭐⭐⭐</span>
        <div class="meta"><span class="badge">س${qi+1}</span><span class="badge">ص${q.page}</span><span class="badge">${BLOOM_LABELS[q.bloom]}</span><span class="badge">${DIFFICULTY_LABELS[q.difficulty]}</span></div>
        <p style="font-weight:bold;margin:4px 0;font-size:12px">${q.question}</p>
        <div>${q.type==='trueFalse'?
          '<div class="opt">( ) صواب ✓</div><div class="opt">( ) خطأ ✗</div>':
          (q.options||[]).map((o,i)=>`<div class="opt ${o.correct?'correct':''}"><span style="background:${['#e91e8c','#0891b2','#059669','#d97706'][i]};color:white;padding:1px 5px;border-radius:3px;font-weight:bold">${['أ','ب','ج','د'][i]}</span>${o.text}</div>`).join('')
        }</div>
        ${opts.withExp?`<div class="exp"><strong>الشرح:</strong> ${q.explanation}</div><div class="rule">👑 <strong>القاعدة الذهبية:</strong> ${q.goldenRule}</div>`:''}
        <p class="pg">📖 من الكتاب (ص${q.page}): ${q.paragraph}</p>
      </div>`).join('')}
      <div class="footer">${META.publisher} · ${META.book}</div>
    </body></html>`;
    w.document.write(html);w.document.close();w.print();
  };
  return<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
    <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} onClick={e=>e.stopPropagation()}
      className="bg-white rounded-2xl max-w-md w-full p-5 max-h-[90vh] overflow-y-auto" dir="rtl">
      <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-base">طباعة PDF مخصّصة</h3><button onClick={onClose}><X className="w-5 h-5 text-slate-400"/></button></div>
      <div className="space-y-3">
        {UNITS.map(u=><label key={u.id} className="flex items-center gap-2 p-2 rounded-lg border cursor-pointer hover:bg-slate-50">
          <input type="checkbox" checked={opts.units.includes(u.id)} onChange={()=>toggle(u.id)} className="rounded"/>
          <span className="text-sm">{u.icon} {u.title}</span>
        </label>)}
        <div>
          <p className="font-bold text-sm mb-1">الصعوبة:</p>
          {['all','easy','medium','hard'].map(d=><label key={d} className="flex items-center gap-2 p-1 cursor-pointer">
            <input type="radio" name="diff" checked={opts.diff===d} onChange={()=>setOpts(o=>({...o,diff:d}))}/>
            <span className="text-sm">{d==='all'?'الكل':DIFFICULTY_LABELS[d]}</span>
          </label>)}
        </div>
        <label className="flex items-center gap-2"><input type="checkbox" checked={opts.withExp} onChange={e=>setOpts(o=>({...o,withExp:e.target.checked}))}/><span className="text-sm">مع الشروحات والقاعدة الذهبية</span></label>
        <p className="text-sm text-slate-500">الأسئلة المختارة: <strong>{toAr(filtered.length)}</strong></p>
        <button onClick={doPrint} className="w-full rounded-xl text-white font-bold py-3 flex items-center justify-center gap-2" style={{background:'#c2185b'}}><Printer className="w-5 h-5"/>طباعة الآن</button>
      </div>
    </motion.div>
  </div>;
}

function QuestionRunner({questions,onExit}){
  const [idx,setIdx]=useState(0);
  const [answered,setAnswered]=useState(null);
  const [feedbackAns,setFeedbackAns]=useState(null);
  const [showFeedback,setShowFeedback]=useState(false);
  const [score,setScore]=useState({correct:0,total:0});
  const q=questions[idx];
  useEffect(()=>{setAnswered(null);setFeedbackAns(null);setShowFeedback(false);},[idx]);
  if(!q)return null;
  const handleAnswer=(chosen,isCorrect)=>{
    setAnswered({chosen,isCorrect});
    setScore(s=>({correct:s.correct+(isCorrect?1:0),total:s.total+1}));
    const prog=loadProg();prog[q.id]={isCorrect,ts:Date.now()};saveProg(prog);
    if(isCorrect)setTimeout(()=>{if(idx<questions.length-1)setIdx(idx+1);},1600);
    else if(q.feedbackQuestion)setTimeout(()=>setShowFeedback(true),600);
  };
  const next=()=>{if(idx<questions.length-1)setIdx(idx+1);else onExit(score);};
  const TYPE_LABELS={multipleChoice:'اختيار متعدد',trueFalse:'صواب أم خطأ',ordering:'ترتيب',matching:'مطابقة',classify:'تصنيف',fillBlank:'تعبئة فراغ'};
  return<div className="space-y-4" dir="rtl">
    <div className="flex items-center justify-between text-xs text-slate-500">
      <button onClick={()=>onExit(score)} className="flex items-center gap-1 hover:text-slate-800"><ChevronRight className="w-4 h-4"/>رجوع</button>
      <span className="font-bold">{toAr(idx+1)} / {toAr(questions.length)}</span>
    </div>
    <div className="h-2 rounded-full bg-slate-200 overflow-hidden"><div className="h-full transition-all" style={{width:`${(idx/questions.length)*100}%`,background:'#e91e8c'}}/></div>
    <AnimatePresence mode="wait">
      <motion.div key={idx} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:0.2}}
        className="relative rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
        <div className="absolute top-4 left-4"><GoldenSeal/></div>
        <div className="flex flex-wrap gap-1.5 mb-3 text-xs" dir="rtl">
          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">ص{toAr(q.page)}</span>
          <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">{BLOOM_LABELS[q.bloom]}</span>
          <span className={`px-2 py-0.5 rounded-full ${q.difficulty==='easy'?'bg-emerald-100 text-emerald-700':q.difficulty==='medium'?'bg-amber-100 text-amber-700':'bg-red-100 text-red-700'}`}>{DIFFICULTY_LABELS[q.difficulty]}</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{TYPE_LABELS[q.type]||q.type}</span>
        </div>
        <h3 className="font-body font-bold text-sm text-slate-900 mb-3 leading-snug pe-12" dir="rtl">{q.question}</h3>
        <QRenderer q={q} onAnswer={handleAnswer} answered={answered}/>
        {answered&&!answered.isCorrect&&(
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mt-3 space-y-3">
            <div className="rounded-xl p-3 border-r-4 border-pink-500 bg-pink-50 text-xs text-pink-800" dir="rtl">
              <strong>📖 من الكتاب (ص{toAr(q.page)}):</strong> {q.paragraph}
            </div>
            <div className="flex items-start gap-3">
              <TeacherSVG size={72}/>
              <div className="flex-1"><Blackboard text={q.explanation}/></div>
            </div>
            <GoldenRule text={q.goldenRule}/>
            {q.feedbackQuestion&&showFeedback&&(
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-3">
                <p className="font-bold text-blue-800 text-xs mb-2">💡 سؤال مشابه للتدرّب</p>
                <p className="mb-2 text-slate-700 text-sm" dir="rtl">{q.feedbackQuestion.question}</p>
                <MCQ q={q.feedbackQuestion} onAnswer={(c,ok)=>setFeedbackAns({chosen:c,isCorrect:ok})} answered={feedbackAns}/>
              </div>
            )}
          </motion.div>
        )}
        {answered?.isCorrect&&(
          <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} className="mt-3 rounded-xl p-3 text-center" style={{background:'#fce4ec'}}>
            <span className="text-xl">🌟</span>
            <p className="font-bold text-sm" style={{color:'#c2185b'}}>ممتاز! إجابة صحيحة</p>
          </motion.div>
        )}
        {answered&&<div className="mt-3 flex justify-between items-center" dir="rtl">
          <button onClick={next} className="rounded-xl text-white font-bold px-5 py-2 text-sm" style={{background:'#c2185b'}}>
            {idx<questions.length-1?'التالي ←':'إنهاء الدرس ✓'}
          </button>
          <div className="text-xs text-slate-500">{toAr(score.correct)}/{toAr(score.total)} صحيحة</div>
        </div>}
      </motion.div>
    </AnimatePresence>
  </div>;
}

function UnitCard({unit,onClick,progress}){
  const total=ALL_QUESTIONS.filter(q=>q.unit===unit.id).length;
  const done=ALL_QUESTIONS.filter(q=>q.unit===unit.id&&progress[q.id]?.isCorrect).length;
  const pct=total>0?Math.round((done/total)*100):0;
  return<motion.button onClick={onClick} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} whileHover={{scale:1.02}}
    className="relative rounded-3xl p-5 text-right overflow-hidden shadow-lg w-full"
    style={{background:`linear-gradient(135deg,${unit.color}cc,${unit.color})`}}>
    <div className="absolute inset-3 rounded-2xl bg-white/10 border border-white/20"/>
    <div className="absolute top-3 left-3 text-amber-200/60 text-xl">✦</div>
    <div className="relative">
      <div className="text-3xl mb-1">{unit.icon}</div>
      <h3 className="font-bold text-white text-sm mb-0.5">{unit.title}</h3>
      <p className="text-white/60 text-xs">{toAr(unit.lessons.length)} موضوعات · {toAr(total)} سؤال</p>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-white/30 overflow-hidden"><div className="h-full bg-white/90" style={{width:`${pct}%`}}/></div>
        <span className="text-white/80 text-xs font-bold">{pct}%</span>
      </div>
    </div>
  </motion.button>;
}

function LessonTile({lesson,onClick,progress}){
  const qs=ALL_QUESTIONS.filter(q=>q.lesson===lesson.id);
  const done=qs.filter(q=>progress[q.id]?.isCorrect).length;
  const pct=qs.length>0?Math.round((done/qs.length)*100):0;
  return<button onClick={onClick} className="w-full rounded-2xl p-3.5 bg-white border-2 border-slate-200 hover:border-pink-400 transition-all text-right flex items-center gap-3 hover:shadow-md">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0" style={{background:'#fce4ec',color:'#c2185b'}}>ص{toAr(lesson.page)}</div>
    <div className="flex-1 min-w-0" dir="rtl">
      <h4 className="font-bold text-slate-800 text-xs">{lesson.title}</h4>
      <div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden"><div className="h-full" style={{width:`${pct}%`,background:'#e91e8c'}}/></div>
    </div>
    <span className="text-xs text-slate-400 flex-shrink-0">{toAr(done)}/{toAr(qs.length)}</span>
  </button>;
}

export default function ArtGrade2S1Bank(){
  const [progress,setProgress]=useState(loadProg());
  const [view,setView]=useState('home');
  const [selUnit,setSelUnit]=useState(null);
  const [selLesson,setSelLesson]=useState(null);
  const [showPrint,setShowPrint]=useState(false);
  const [dark,setDark]=useState(()=>localStorage.getItem('art_g2_dark')==='true');
  const [studentName,setStudentName]=useState(()=>localStorage.getItem(STUDENT_KEY)||'');
  const [nameInput,setNameInput]=useState('');
  useEffect(()=>{localStorage.setItem('art_g2_dark',dark);},[dark]);
  const refresh=()=>setProgress(loadProg());
  const totalCorrect=ALL_QUESTIONS.filter(q=>progress[q.id]?.isCorrect).length;
  const lessonQ=selLesson?ALL_QUESTIONS.filter(q=>q.lesson===selLesson.id):[];

  if(!studentName)return(
    <div className="min-h-screen flex items-center justify-center p-4" style={{background:'#faf8f0'}}>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
        className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border-2" style={{borderColor:'#e91e8c'}} dir="rtl">
        <div className="text-center mb-6">
          <Palette className="w-14 h-14 mx-auto mb-3" style={{color:'#e91e8c'}}/>
          <h1 className="font-bold text-xl text-slate-800">{META.title}</h1>
          <p className="text-slate-500 text-sm">{META.subject}</p>
          <p className="text-xs text-slate-400 mt-1">{META.grade} — {META.term}</p>
        </div>
        <input value={nameInput} onChange={e=>setNameInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&nameInput.trim()&&(localStorage.setItem(STUDENT_KEY,nameInput.trim()),setStudentName(nameInput.trim()))}
          placeholder="اكتب اسمك هنا..." className="w-full rounded-xl border-2 border-slate-200 p-3 text-slate-800 mb-4 focus:border-pink-400 outline-none text-center" dir="rtl"/>
        <button disabled={!nameInput.trim()} onClick={()=>{localStorage.setItem(STUDENT_KEY,nameInput.trim());setStudentName(nameInput.trim());}}
          className="w-full rounded-xl text-white font-bold py-3 disabled:opacity-40" style={{background:'#e91e8c'}}>
          ابدأ التعلم 🎨
        </button>
      </motion.div>
    </div>
  );

  return(
    <div className={`min-h-screen transition-colors ${dark?'bg-gray-900':'bg-[#faf8f0]'}`} dir="rtl">
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-sm" style={{background:'#0a1628',borderBottom:'2px solid #e91e8c'}}>
        <div className="flex items-center gap-2">
          <button onClick={()=>setDark(!dark)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">{dark?<Sun className="w-4 h-4 text-yellow-300"/>:<Moon className="w-4 h-4 text-white"/>}</button>
          <button onClick={()=>setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Printer className="w-4 h-4 text-white"/></button>
          <div className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{background:'rgba(233,30,140,0.2)'}}>
            <Trophy className="w-3.5 h-3.5" style={{color:'#f48fb1'}}/>
            <span className="font-bold text-xs" style={{color:'#f48fb1'}}>{toAr(totalCorrect)}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-sm">التربية الفنية</p>
          <p className="text-white/50 text-xs">{META.grade}</p>
        </div>
        <Link to="/question-bank/grade_2/first"><button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Home className="w-4 h-4 text-white"/></button></Link>
      </div>

      <div className={`max-w-2xl mx-auto px-4 py-5 pb-12 ${dark?'text-white':''}`}>
        {view==='home'&&(
          <div className="space-y-5">
            <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-xl" style={{background:'linear-gradient(135deg,#0a1628,#880e4f)'}}>
              <div className="absolute top-3 left-3 text-xl opacity-60">⭐⭐⭐</div>
              <Palette className="w-10 h-10 mx-auto mb-2" style={{color:'#f48fb1'}}/>
              <h1 className="text-white font-bold text-xl mb-1">{META.title}</h1>
              <p className="text-white/60 text-sm mb-1">{META.subject}</p>
              <p className="text-white/40 text-xs">{toAr(UNITS.length)} وحدات · {toAr(ALL_QUESTIONS.length)} سؤال</p>
              <div className="mt-3 flex justify-center gap-2">
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/80">{studentName} 👋</div>
                <div className="px-3 py-1 rounded-full text-xs" style={{background:'rgba(233,30,140,0.3)',color:'#f48fb1'}}>{toAr(totalCorrect)} صحيحة ✓</div>
              </div>
            </div>
            <h2 className={`font-bold text-sm ${dark?'text-white':'text-slate-800'}`}>اختر الوحدة:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {UNITS.map(u=><UnitCard key={u.id} unit={u} progress={progress} onClick={()=>{setSelUnit(u);setView('unit');}}/>)}
            </div>
          </div>
        )}

        {view==='unit'&&selUnit&&(
          <div className="space-y-4">
            <button onClick={()=>setView('home')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm"><ChevronRight className="w-4 h-4"/>رجوع للوحدات</button>
            <div className="rounded-2xl p-4 text-white shadow-lg" style={{background:`linear-gradient(135deg,${selUnit.color},${selUnit.color}99)`}}>
              <div className="text-3xl mb-1">{selUnit.icon}</div>
              <h2 className="font-bold text-base">{selUnit.title}</h2>
            </div>
            <h3 className={`font-bold text-xs ${dark?'text-white':'text-slate-700'}`}>اختر الموضوع:</h3>
            <div className="space-y-2">{selUnit.lessons.map(l=><LessonTile key={l.id} lesson={l} progress={progress} onClick={()=>{setSelLesson(l);setView('lesson');}}/>)}</div>
          </div>
        )}

        {view==='lesson'&&selLesson&&view!=='running'&&(
          <div className="space-y-4">
            <button onClick={()=>setView('unit')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm"><ChevronRight className="w-4 h-4"/>رجوع لـ {selUnit?.title}</button>
            <div className={`rounded-2xl p-4 border ${dark?'bg-slate-800 border-slate-700':'bg-white border-slate-200'} shadow-sm`}>
              <h2 className={`font-bold text-sm mb-1 ${dark?'text-white':'text-slate-800'}`}>{selLesson.title}</h2>
              <p className={`text-xs mb-3 ${dark?'text-slate-400':'text-slate-500'}`}>صفحة {toAr(selLesson.page)} · {toAr(lessonQ.length)} سؤال</p>
              <div className="space-y-1.5 mb-4">
                {lessonQ.map((q,i)=>(
                  <div key={q.id} className={`flex items-center gap-2 rounded-lg p-2 ${dark?'bg-slate-700':'bg-slate-50'}`}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{background:progress[q.id]?.isCorrect?'#e91e8c':'#e2e8f0',color:progress[q.id]?.isCorrect?'white':'#475569'}}>{toAr(i+1)}</div>
                    <span className={`text-xs flex-1 truncate ${dark?'text-slate-200':'text-slate-700'}`}>{q.question}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${q.difficulty==='easy'?'bg-emerald-100 text-emerald-700':q.difficulty==='medium'?'bg-amber-100 text-amber-700':'bg-red-100 text-red-700'}`}>{DIFFICULTY_LABELS[q.difficulty]}</span>
                  </div>
                ))}
              </div>
              <button onClick={()=>setView('running')} className="w-full rounded-xl text-white font-bold py-3 text-sm" style={{background:'#e91e8c'}}>
                ابدأ الموضوع ← {toAr(lessonQ.length)} سؤال
              </button>
            </div>
          </div>
        )}

        {view==='running'&&selLesson&&lessonQ.length>0&&(
          <QuestionRunner questions={lessonQ} onExit={()=>{refresh();setView('lesson');}}/>
        )}
      </div>

      {showPrint&&<PrintModal onClose={()=>setShowPrint(false)}/>}
    </div>
  );
}