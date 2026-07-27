import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Volume2, Printer, User, Trophy, Moon, Sun, Star, BookOpen, X, Crown, CheckCircle2, XCircle, Home } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { META, UNITS, BLOOM_LABELS, DIFFICULTY_LABELS, QUESTIONS_UNITS_1_2 } from '@/lib/weCanGrade2S1Bank_Units1to2';
import { QUESTIONS_UNITS_3_5 } from '@/lib/weCanGrade2S1Bank_Units3to5';

const ALL_QUESTIONS = [...QUESTIONS_UNITS_1_2, ...QUESTIONS_UNITS_3_5];
const STORAGE_KEY = 'wecan_g2_s1_progress';
const STORAGE_STUDENT = 'wecan_g2_student_name';

const OPTION_COLORS = ['#e91e8c','#0891b2','#059669','#d97706'];
const OPTION_LETTERS = ['A','B','C','D'];

function toAr(n) { return String(n).replace(/[0-9]/g, d=>'٠١٢٣٤٥٦٧٨٩'[d]); }

function loadProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}'); } catch { return {}; } }
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }

// ── Typewriter Effect ────────────────────────────────────────────────────────
function TypewriterText({ text, speed=25 }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => { i++; setDisplayed(text.slice(0,i)); if(i>=text.length) clearInterval(id); }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <>{displayed}<span className="animate-pulse">▌</span></>;
}

// ── Teacher SVG ──────────────────────────────────────────────────────────────
function TeacherSVG() {
  return (
    <svg width="120" height="160" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="155" rx="35" ry="8" fill="#e8d5b7" opacity="0.5"/>
      {/* Body */}
      <rect x="35" y="90" width="50" height="60" rx="12" fill="#1e3a6e"/>
      {/* Tie */}
      <polygon points="60,92 55,110 60,118 65,110" fill="#c9a227"/>
      {/* Head */}
      <circle cx="60" cy="72" r="24" fill="#f5d0a9"/>
      {/* Hair */}
      <ellipse cx="60" cy="52" rx="24" ry="12" fill="#3d2b1f"/>
      {/* Eyes */}
      <circle cx="53" cy="70" r="3.5" fill="white"/>
      <circle cx="67" cy="70" r="3.5" fill="white"/>
      <circle cx="54" cy="71" r="2" fill="#2c1810"/>
      <circle cx="68" cy="71" r="2" fill="#2c1810"/>
      <circle cx="54.7" cy="70.3" r="0.7" fill="white"/>
      <circle cx="68.7" cy="70.3" r="0.7" fill="white"/>
      {/* Eyebrows */}
      <path d="M49 66 Q53 64 57 66" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <path d="M63 66 Q67 64 71 66" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      {/* Nose */}
      <ellipse cx="60" cy="75" rx="2" ry="3" fill="#e8b88a"/>
      {/* Smile */}
      <path d="M52 80 Q60 86 68 80" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      {/* Chalk in hand */}
      <rect x="82" y="95" width="4" height="20" rx="2" fill="white" transform="rotate(20 82 95)"/>
      {/* Left arm */}
      <rect x="20" y="90" width="16" height="10" rx="5" fill="#1e3a6e" transform="rotate(-20 20 90)"/>
      {/* Glasses */}
      <circle cx="53" cy="70" r="6" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <circle cx="67" cy="70" r="6" stroke="#3d2b1f" strokeWidth="1.5" fill="none"/>
      <line x1="59" y1="70" x2="61" y2="70" stroke="#3d2b1f" strokeWidth="1.5"/>
    </svg>
  );
}

// ── Green Blackboard ─────────────────────────────────────────────────────────
function Blackboard({ text }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border-4" style={{borderColor:'#5C3A1E', background:'#1a3a2a'}}>
      <div className="flex items-center gap-2 px-3 py-1.5" style={{background:'#5C3A1E'}}>
        {['#ef4444','#f59e0b','#22c55e'].map((c,i)=><div key={i} className="w-3 h-3 rounded-full" style={{background:c}}/>)}
        <span className="text-xs text-amber-200 font-mono mr-auto">السبورة الذكية ✦</span>
      </div>
      <div className="p-4 font-mono text-green-100 text-sm leading-relaxed min-h-24">
        <TypewriterText text={text} />
      </div>
    </div>
  );
}

// ── Golden Seal ───────────────────────────────────────────────────────────────
function GoldenSeal({ size='sm' }) {
  const sz = size==='sm'?'w-10 h-10 text-xs':'w-16 h-16 text-base';
  return (
    <div className={`${sz} rounded-full flex items-center justify-center font-bold text-white shadow-lg flex-shrink-0`}
      style={{background:'linear-gradient(135deg,#c9a227,#f4d03f,#c9a227)',animation:'pulse 2s infinite'}}>
      ⭐⭐⭐
    </div>
  );
}

// ── Golden Rule Box ───────────────────────────────────────────────────────────
function GoldenRuleBox({ text }) {
  return (
    <div className="rounded-xl p-4 border-2 mt-3" style={{borderColor:'#c9a227',background:'linear-gradient(135deg,#fef9e7,#fff8dc)'}}>
      <div className="flex items-center gap-2 mb-1.5">
        <Crown className="w-4 h-4 text-amber-600"/>
        <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
        <Crown className="w-4 h-4 text-amber-600"/>
      </div>
      <p className="text-slate-800 text-sm font-medium">{text}</p>
    </div>
  );
}

// ── MC Question ───────────────────────────────────────────────────────────────
function MCQuestion({ q, onAnswer, answered }) {
  return (
    <div className="space-y-2.5">
      {q.options.map((opt,i)=>{
        const isCorrect=opt.correct, isChosen=answered?.chosen===i;
        const showOk=answered&&isCorrect, showBad=answered&&isChosen&&!isCorrect;
        return (
          <button key={i} disabled={!!answered} onClick={()=>!answered&&onAnswer(i,isCorrect)}
            className="w-full text-start rounded-xl p-3.5 border-2 transition-all flex items-center gap-3 disabled:cursor-default hover:scale-[1.01]"
            style={{borderColor:showOk?'#059669':showBad?'#dc2626':OPTION_COLORS[i]+'55',background:showOk?'#ecfdf5':showBad?'#fef2f2':'white'}}>
            <span className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0 text-sm" style={{background:OPTION_COLORS[i]}}>
              {OPTION_LETTERS[i]}
            </span>
            <span className="flex-1 font-body text-slate-800">{opt.text}</span>
            {showOk&&<CheckCircle2 className="w-5 h-5 text-emerald-600"/>}
            {showBad&&<XCircle className="w-5 h-5 text-red-600"/>}
          </button>
        );
      })}
    </div>
  );
}

// ── True/False ────────────────────────────────────────────────────────────────
function TrueFalseQuestion({ q, onAnswer, answered }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[true,false].map((val,i)=>{
        const isChosen=answered?.chosen===val, showOk=answered&&val===q.correctAnswer, showBad=answered&&isChosen&&val!==q.correctAnswer;
        return (
          <button key={i} disabled={!!answered} onClick={()=>!answered&&onAnswer(val,val===q.correctAnswer)}
            className="rounded-2xl p-5 border-2 transition-all flex flex-col items-center gap-2 disabled:cursor-default"
            style={{borderColor:showOk?'#059669':showBad?'#dc2626':(val?'#05966955':'#dc262655'),background:showOk?'#ecfdf5':showBad?'#fef2f2':'white'}}>
            {val?<CheckCircle2 className="w-10 h-10 text-emerald-600"/>:<XCircle className="w-10 h-10 text-red-500"/>}
            <span className="font-heading font-bold text-base">{val?'True ✓':'False ✗'}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Ordering ──────────────────────────────────────────────────────────────────
function OrderingQuestion({ q, onAnswer }) {
  const [items, setItems] = useState(()=>q.items.map((t,i)=>({t,original:i})).sort(()=>Math.random()-0.5));
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = items.every((it,i)=>it.original===q.correctOrder[i]);
  const move=(from,to)=>{ if(submitted)return; const n=[...items]; const[m]=n.splice(from,1); n.splice(to,0,m); setItems(n); };
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500">Use the arrows to reorder the items:</p>
      {items.map((it,i)=>(
        <div key={i} className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs flex-shrink-0">{toAr(i+1)}</span>
          <div className="flex-1 rounded-xl p-2.5 border-2 border-slate-200 bg-white text-slate-800 text-sm">{it.t}</div>
          <button disabled={i===0||submitted} onClick={()=>move(i,i-1)} className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 text-slate-600">▲</button>
          <button disabled={i===items.length-1||submitted} onClick={()=>move(i,i+1)} className="p-1.5 rounded-lg bg-slate-100 disabled:opacity-30 text-slate-600">▼</button>
        </div>
      ))}
      {!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full mt-2 rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">Check Answer ✓</button>}
      {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>
        {isCorrect?'✓ Correct order!':'✗ Correct: '+q.correctOrder.map(i=>q.items[i]).join(' → ')}
      </div>}
    </div>
  );
}

// ── Matching ──────────────────────────────────────────────────────────────────
function MatchingQuestion({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const rights = useMemo(()=>[...q.pairs].map((p,i)=>({text:p.right,original:i})).sort(()=>Math.random()-0.5),[q]);
  const pick=(side,idx)=>{ if(submitted)return; if(side==='left'){setSelected(idx);} else { if(selected===null)return; setMatches({...matches,[selected]:idx}); setSelected(null); }};
  const isCorrect=q.pairs.every((p,i)=>matches[i]===i);
  const allDone=Object.keys(matches).length===q.pairs.length;
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-500">Click a left item, then click the matching right item:</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {q.pairs.map((p,i)=>(
            <button key={i} onClick={()=>pick('left',i)} disabled={submitted||matches[i]!==undefined}
              className={`w-full rounded-xl p-2.5 border-2 text-start text-sm ${selected===i?'border-amber-500 bg-amber-50':'border-slate-200 bg-white'} ${matches[i]!==undefined?'opacity-50':''}`}>
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rights.map((r,i)=>{
            const matched=Object.entries(matches).find(([,v])=>v===i);
            return <button key={i} onClick={()=>pick('right',i)} disabled={submitted||!!matched}
              className={`w-full rounded-xl p-2.5 border-2 text-start text-sm ${matched?'border-emerald-400 bg-emerald-50':'border-slate-200 bg-white'}`}>
              {r.text}
            </button>;
          })}
        </div>
      </div>
      {allDone&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">Check ✓</button>}
      {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ Correct!':'✗ Review the pairs'}</div>}
    </div>
  );
}

// ── Classify ─────────────────────────────────────────────────────────────────
function ClassifyQuestion({ q, onAnswer }) {
  const [buckets, setBuckets] = useState(q.categories.map(()=>[]));
  const [pool, setPool] = useState(q.items.map((it,i)=>({...it,id:i})));
  const [sel, setSel] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const moveTo=(catIdx)=>{
    if(submitted||sel===null)return;
    setBuckets(buckets.map((b,i)=>i===catIdx?[...b.filter(x=>x.id!==sel.id),sel]:b.filter(x=>x.id!==sel.id)));
    setPool(pool.filter(x=>x.id!==sel.id)); setSel(null);
  };
  const removeFromBucket=(item,catIdx)=>{
    if(submitted)return;
    setBuckets(buckets.map((b,i)=>i===catIdx?b.filter(x=>x.id!==item.id):b));
    setPool([...pool,item]);
  };
  const isCorrect=q.items.every((it,i)=>{ const bIdx=buckets.findIndex(b=>b.some(x=>x.id===i)); return bIdx===it.correct_category; });
  const allPlaced=pool.length===0;
  return (
    <div className="space-y-3">
      {pool.length>0&&<div className="rounded-xl bg-slate-50 p-3">
        <p className="text-xs text-slate-500 mb-2">Click an item, then click the correct category:</p>
        <div className="flex flex-wrap gap-2">
          {pool.map(it=>(
            <span key={it.id} onClick={()=>setSel(it)} className={`px-3 py-1.5 rounded-lg border cursor-pointer text-sm ${sel?.id===it.id?'border-amber-500 bg-amber-50':'bg-white border-slate-300 hover:border-amber-400'}`}>{it.text}</span>
          ))}
        </div>
      </div>}
      <div className={`grid gap-3`} style={{gridTemplateColumns:`repeat(${Math.min(q.categories.length,3)},1fr)`}}>
        {q.categories.map((cat,ci)=>(
          <div key={ci} onClick={()=>moveTo(ci)} className="rounded-xl border-2 border-slate-200 p-3 min-h-28 cursor-pointer hover:border-emerald-300 transition-colors">
            <h4 className="font-bold text-xs text-center mb-2 text-slate-700 border-b pb-1">{cat}</h4>
            <div className="space-y-1.5">
              {buckets[ci].map(it=>(
                <div key={it.id} onClick={e=>{e.stopPropagation();removeFromBucket(it,ci);}} className="text-xs rounded-lg bg-white border px-2 py-1 flex justify-between items-center cursor-pointer hover:bg-red-50">
                  <span>{it.text}</span><X className="w-3 h-3 text-red-400"/>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {allPlaced&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">Check ✓</button>}
      {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ Correct classification!':'✗ Review your answers'}</div>}
    </div>
  );
}

// ── Fill Blank ─────────────────────────────────────────────────────────────────
function FillBlankQuestion({ q, onAnswer }) {
  const [filled, setFilled] = useState(q.blanks.map(()=>null));
  const [pool, setPool] = useState(q.wordBank.map((w,i)=>({w,id:i,used:false})));
  const [selectedWord, setSelectedWord] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const placeInBlank=(blankIdx)=>{
    if(submitted||selectedWord===null)return;
    const next=[...filled]; const prevWord=next[blankIdx];
    setPool(pool.map(p=>{ if(p.id===selectedWord)return{...p,used:true}; if(prevWord!==null&&p.id===prevWord)return{...p,used:false}; return p; }));
    next[blankIdx]=selectedWord; setFilled(next); setSelectedWord(null);
  };
  const removeFromBlank=(blankIdx)=>{
    if(submitted)return; const next=[...filled]; const wId=next[blankIdx]; if(wId===null)return;
    next[blankIdx]=null; setFilled(next); setPool(pool.map(p=>p.id===wId?{...p,used:false}:p));
  };
  const isCorrect=filled.every((f,i)=>pool.find(p=>p.id===f)?.w===q.blanks[i]);
  const allFilled=filled.every(f=>f!==null);
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500">Click a word, then click the blank to fill it. Double-click blank to remove.</p>
      <div className="rounded-xl p-4 bg-white border-2 border-slate-200 text-sm leading-8">
        {q.blanks.map((b,i)=>(
          <React.Fragment key={i}>
            <button onClick={()=>placeInBlank(i)} disabled={submitted} onDoubleClick={()=>removeFromBlank(i)}
              className={`inline-block mx-1 px-3 py-0.5 rounded-lg border-2 border-dashed min-w-16 text-center text-sm ${filled[i]!==null?'border-emerald-400 bg-emerald-50':'border-amber-400 bg-amber-50 hover:bg-amber-100'}`}>
              {filled[i]!==null?pool.find(p=>p.id===filled[i])?.w:'___'}
            </button>
            {i<q.blanks.length-1&&' '}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map(w=>(
          <button key={w.id} disabled={w.used||submitted} onClick={()=>!w.used&&setSelectedWord(w.id)}
            className={`px-3 py-1.5 rounded-lg border-2 text-sm transition-all ${w.used?'opacity-30 border-slate-200 bg-slate-50':selectedWord===w.id?'border-emerald-500 bg-emerald-50 scale-105':'border-slate-300 bg-white hover:border-emerald-400 cursor-pointer'}`}>
            {w.w}
          </button>
        ))}
      </div>
      {allFilled&&!submitted&&<button onClick={()=>{setSubmitted(true);onAnswer(isCorrect,isCorrect);}} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 text-sm">Check ✓</button>}
      {submitted&&<div className={`rounded-xl p-3 font-bold text-sm ${isCorrect?'bg-emerald-50 text-emerald-700':'bg-red-50 text-red-700'}`}>{isCorrect?'✓ Correct!':'✗ Correct: '+q.blanks.join(' | ')}</div>}
    </div>
  );
}

// ── Audio Question ────────────────────────────────────────────────────────────
function AudioQuestion({ q, onAnswer, answered }) {
  const [speaking, setSpeaking] = useState(false);
  const speak = () => {
    if(!window.speechSynthesis||speaking)return;
    setSpeaking(true);
    const u = new SpeechSynthesisUtterance(q.audioWord||q.question);
    u.lang='en-US'; u.rate=0.8;
    u.onend=()=>setSpeaking(false);
    window.speechSynthesis.speak(u);
  };
  return (
    <div className="space-y-3">
      <button onClick={speak} disabled={speaking}
        className="w-full rounded-xl py-4 flex items-center justify-center gap-3 font-bold text-white text-sm transition-all"
        style={{background:speaking?'#6b7280':'#0891b2'}}>
        <Volume2 className={`w-5 h-5 ${speaking?'animate-pulse':''}`}/>
        {speaking?'Playing...':'🔊 Click to Listen'}
      </button>
      <MCQuestion q={q} onAnswer={onAnswer} answered={answered}/>
    </div>
  );
}

// ── Question Renderer ─────────────────────────────────────────────────────────
function QuestionRenderer({ q, onAnswer, answered }) {
  if(q.type==='multipleChoice'||q.type==='audio'&&!q.audioWord) return <MCQuestion q={q} onAnswer={onAnswer} answered={answered}/>;
  if(q.type==='audio') return <AudioQuestion q={q} onAnswer={onAnswer} answered={answered}/>;
  if(q.type==='trueFalse') return <TrueFalseQuestion q={q} onAnswer={onAnswer} answered={answered}/>;
  if(q.type==='ordering') return <OrderingQuestion q={q} onAnswer={onAnswer}/>;
  if(q.type==='matching') return <MatchingQuestion q={q} onAnswer={onAnswer}/>;
  if(q.type==='classify') return <ClassifyQuestion q={q} onAnswer={onAnswer}/>;
  if(q.type==='fillBlank') return <FillBlankQuestion q={q} onAnswer={onAnswer}/>;
  return <MCQuestion q={q} onAnswer={onAnswer} answered={answered}/>;
}

// ── Feedback Question (after wrong answer) ────────────────────────────────────
function FeedbackQuestion({ fq, onFeedback, feedbackAnswered }) {
  if(!fq) return null;
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 mt-3">
      <p className="font-bold text-blue-800 text-sm mb-2">💡 Similar Practice Question</p>
      <p className="mb-3 text-slate-700 text-sm">{fq.question}</p>
      <MCQuestion q={fq} onAnswer={onFeedback} answered={feedbackAnswered}/>
    </div>
  );
}

// ── Question Runner ───────────────────────────────────────────────────────────
function QuestionRunner({ questions, title, onExit }) {
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [feedbackAnswered, setFeedbackAnswered] = useState(null);
  const [score, setScore] = useState({ correct:0, total:0 });
  const [showFeedback, setShowFeedback] = useState(false);
  const [progress, setProgress] = useState(loadProgress());
  const q = questions[idx];

  useEffect(()=>{ setAnswered(null); setFeedbackAnswered(null); setShowFeedback(false); }, [idx]);

  if(!q) return null;

  const handleAnswer=(chosen,isCorrect)=>{
    setAnswered({chosen,isCorrect});
    setScore(s=>({correct:s.correct+(isCorrect?1:0),total:s.total+1}));
    const prog=loadProgress(); prog[q.id]={isCorrect,ts:Date.now()}; saveProgress(prog); setProgress(prog);
    if(isCorrect) setTimeout(()=>{ if(idx<questions.length-1) setIdx(idx+1); }, 1800);
    else if(q.feedbackQuestion) setTimeout(()=>setShowFeedback(true),600);
  };

  const next=()=>{ if(idx<questions.length-1) setIdx(idx+1); else onExit(score); };

  const pct = Math.round((idx/questions.length)*100);
  const TYPE_LABELS = { multipleChoice:'MCQ', trueFalse:'True/False', ordering:'Ordering', matching:'Matching', classify:'Classify', fillBlank:'Fill Blank', audio:'Listen & Choose' };

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
        <button onClick={()=>onExit(score)} className="flex items-center gap-1 hover:text-slate-800"><ChevronRight className="w-4 h-4"/>Back to Lessons</button>
        <span className="font-bold">{toAr(idx+1)} / {toAr(questions.length)}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-emerald-500 transition-all duration-300" style={{width:`${pct}%`}}/>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:0.2}}
          className="relative rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-sm">
          <GoldenSeal/>
          {/* Meta badges */}
          <div className="flex flex-wrap gap-1.5 mb-3 pe-12 text-xs">
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">p.{q.page}</span>
            <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700">{BLOOM_LABELS[q.bloom]}</span>
            <span className={`px-2 py-0.5 rounded-full ${q.difficulty==='easy'?'bg-emerald-100 text-emerald-700':q.difficulty==='medium'?'bg-amber-100 text-amber-700':'bg-red-100 text-red-700'}`}>
              {DIFFICULTY_LABELS[q.difficulty]}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{TYPE_LABELS[q.type]||q.type}</span>
          </div>

          {/* Question text */}
          <h3 className="font-body font-bold text-base text-slate-900 mb-4 pe-12 leading-snug">{q.question}</h3>

          <QuestionRenderer q={q} onAnswer={handleAnswer} answered={answered}/>

          {/* Wrong answer feedback */}
          {answered && !answered.isCorrect && (
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="mt-4 space-y-3">
              <div className="rounded-xl p-3 border-r-4 border-red-500 bg-red-50 text-xs text-red-700">
                <strong>📖 From the textbook (p.{q.page}):</strong> {q.paragraph}
              </div>
              <div className="flex items-start gap-3">
                <TeacherSVG/>
                <div className="flex-1">
                  <Blackboard text={q.explanation}/>
                </div>
              </div>
              <GoldenRuleBox text={q.goldenRule}/>
              {q.feedbackQuestion && showFeedback && (
                <FeedbackQuestion fq={q.feedbackQuestion} onFeedback={(c,ok)=>setFeedbackAnswered({chosen:c,isCorrect:ok})} feedbackAnswered={feedbackAnswered}/>
              )}
            </motion.div>
          )}

          {/* Correct answer celebration */}
          {answered?.isCorrect && (
            <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}}
              className="mt-3 rounded-xl p-3 bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-2xl">🌟</span>
              <p className="text-emerald-700 font-bold text-sm">Excellent! Well done!</p>
            </motion.div>
          )}

          {/* Next button */}
          {answered && (
            <div className="mt-4 flex justify-between items-center">
              <button onClick={next} className="rounded-xl bg-primary text-white font-bold px-5 py-2.5 text-sm hover:bg-primary/90">
                {idx<questions.length-1?'Next Question →':'Finish Lesson ✓'}
              </button>
              <div className="text-xs text-slate-500">{toAr(score.correct)}/{toAr(score.total)} correct</div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── Unit Cards ────────────────────────────────────────────────────────────────
function UnitCard({ unit, onClick, progress }) {
  const totalQ = ALL_QUESTIONS.filter(q=>q.unit===unit.id).length;
  const doneQ = ALL_QUESTIONS.filter(q=>q.unit===unit.id&&progress[q.id]?.isCorrect).length;
  const pct = totalQ>0?Math.round((doneQ/totalQ)*100):0;
  return (
    <motion.button onClick={onClick} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} whileHover={{scale:1.02}}
      className="relative rounded-3xl p-6 text-start overflow-hidden transition-all shadow-lg hover:shadow-xl"
      style={{background:`linear-gradient(135deg,${unit.color}cc,${unit.color})`}}>
      <div className="absolute inset-3 rounded-2xl bg-white/10 border border-white/20"/>
      <div className="absolute top-3 right-3 text-2xl">✦</div>
      <div className="relative">
        <div className="text-4xl mb-3">{unit.icon}</div>
        <h3 className="font-heading font-bold text-white text-base mb-0.5">{unit.title}</h3>
        <p className="text-white/70 text-xs">{unit.titleAr}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-white/30 overflow-hidden">
            <div className="h-full bg-white/90" style={{width:`${pct}%`}}/>
          </div>
          <span className="text-white/80 text-xs font-bold">{pct}%</span>
        </div>
        <p className="text-white/60 text-xs mt-1">{unit.lessons.length} lessons · {toAr(doneQ)}/{toAr(totalQ)} correct</p>
      </div>
    </motion.button>
  );
}

// ── Lesson Tiles ──────────────────────────────────────────────────────────────
function LessonTile({ lesson, onClick, progress }) {
  const questions = ALL_QUESTIONS.filter(q=>q.lesson===lesson.id);
  const done = questions.filter(q=>progress[q.id]?.isCorrect).length;
  const pct = questions.length>0?Math.round((done/questions.length)*100):0;
  return (
    <button onClick={onClick} className="w-full rounded-2xl p-4 bg-white border-2 border-slate-200 hover:border-emerald-400 transition-all text-start flex items-center gap-3 hover:shadow-md">
      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm flex-shrink-0">p.{lesson.page}</div>
      <div className="flex-1 min-w-0">
        <h4 className="font-body font-semibold text-slate-800 text-sm leading-tight">{lesson.title}</h4>
        <div className="mt-1.5 h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-emerald-500 transition-all" style={{width:`${pct}%`}}/>
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="text-xs text-slate-400">{toAr(done)}/{toAr(questions.length)}</span>
        {pct>=80&&<div className="text-xs text-emerald-600">✓</div>}
      </div>
    </button>
  );
}

// ── Student Profile ────────────────────────────────────────────────────────────
function StudentProfileModal({ onClose, studentName }) {
  const progress = loadProgress();
  const totalAnswered = ALL_QUESTIONS.filter(q=>progress[q.id]).length;
  const totalCorrect = ALL_QUESTIONS.filter(q=>progress[q.id]?.isCorrect).length;
  const accuracy = totalAnswered>0?Math.round((totalCorrect/totalAnswered)*100):0;
  const badges = [];
  if(totalCorrect>=1) badges.push({icon:'🥇',label:'First Correct!'});
  if(totalCorrect>=10) badges.push({icon:'🔥',label:'On Fire!'});
  if(totalCorrect>=50) badges.push({icon:'🧠',label:'Genius!'});
  if(accuracy>=90&&totalAnswered>=10) badges.push({icon:'⭐',label:'Star Student!'});
  UNITS.forEach(u=>{
    const uQ=ALL_QUESTIONS.filter(q=>q.unit===u.id);
    const uDone=uQ.filter(q=>progress[q.id]?.isCorrect).length;
    if(uQ.length>0&&uDone===uQ.length) badges.push({icon:'📚',label:`${u.title} Master!`});
  });
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} onClick={e=>e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2"><User className="w-5 h-5"/>Student Profile — {studentName}</h3>
          <button onClick={onClose}><X className="w-5 h-5 text-slate-400"/></button>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{v:totalAnswered,l:'Questions Answered'},{v:totalCorrect,l:'Correct Answers'},{v:`${accuracy}%`,l:'Accuracy'}].map((s,i)=>(
            <div key={i} className="rounded-xl bg-slate-50 p-3 text-center">
              <p className="text-xl font-bold text-primary">{typeof s.v==='number'?toAr(s.v):s.v}</p>
              <p className="text-xs text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
        {badges.length>0&&<div className="mb-4"><p className="font-bold text-sm mb-2 text-slate-700">🏆 Badges Earned</p>
          <div className="flex flex-wrap gap-2">{badges.map((b,i)=><span key={i} className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">{b.icon} {b.label}</span>)}</div>
        </div>}
        <div className="space-y-3">
          {UNITS.map(u=>{
            const uQ=ALL_QUESTIONS.filter(q=>q.unit===u.id);
            const done=uQ.filter(q=>progress[q.id]?.isCorrect).length;
            const pct=uQ.length>0?Math.round((done/uQ.length)*100):0;
            return <div key={u.id} className="rounded-xl border p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{u.icon}</span>
                <p className="font-bold text-sm">{u.title}</p>
                <span className="text-xs text-slate-400 ml-auto">{toAr(done)}/{toAr(uQ.length)}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full transition-all" style={{width:`${pct}%`,background:u.color}}/>
              </div>
            </div>;
          })}
        </div>
      </motion.div>
    </div>
  );
}

// ── Print Modal ───────────────────────────────────────────────────────────────
function PrintModal({ onClose }) {
  const [opts, setOpts] = useState({ units: UNITS.map(u=>u.id), withExplanations:true, difficulty:'all' });
  const toggle=(id)=>setOpts(o=>({...o,units:o.units.includes(id)?o.units.filter(x=>x!==id):[...o.units,id]}));
  const filtered = ALL_QUESTIONS.filter(q=>opts.units.includes(q.unit)&&(opts.difficulty==='all'||q.difficulty===opts.difficulty));
  const doPrint=()=>{
    const w=window.open('','_blank');
    const html=`<html dir="ltr"><head><title>We Can! 2 Question Bank</title><style>
      body{font-family:Arial,sans-serif;padding:20px;color:#222;direction:ltr}
      .q{border:1px solid #ccc;border-radius:8px;padding:14px;margin:10px 0;page-break-inside:avoid;position:relative}
      .opts{margin:8px 0}.opt{padding:5px 10px;margin:3px 0;border-radius:4px;display:flex;align-items:center;gap:8px}
      .correct{background:#d4f4dd;border:1px solid #059669;font-weight:bold}
      .exp{background:#fef9e7;border:1px solid #c9a227;border-radius:6px;padding:8px;margin:6px 0;font-size:13px}
      .rule{background:#fff8dc;border:2px solid #c9a227;border-radius:8px;padding:8px;margin:6px 0;font-size:13px}
      .seal{position:absolute;top:10px;right:10px;font-size:18px}
      .pg{color:#0891b2;font-weight:bold;font-size:12px}
      h1{text-align:center;color:#0a1628;border-bottom:3px solid #c9a227;padding-bottom:10px}
      .badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11px;background:#f0f4ff;color:#333;margin:0 2px}
      .footer{margin-top:30px;text-align:center;font-size:11px;color:#888;border-top:1px solid #ddd;padding-top:10px}
      .meta{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
    </style></head><body>
      <h1>We Can! 2 — Grade 2 English — Term 1 Question Bank</h1>
      <p style="text-align:center;color:#666">${META.publisher} · ${filtered.length} Questions</p>
      ${filtered.map((q,qi)=>`<div class="q"><span class="seal">⭐⭐⭐</span>
        <div class="meta"><span class="badge">Q${qi+1}</span><span class="badge">p.${q.page}</span><span class="badge">${BLOOM_LABELS[q.bloom]}</span><span class="badge">${DIFFICULTY_LABELS[q.difficulty]}</span></div>
        <div class="pg">${q.type==='trueFalse'?'True or False':'Multiple Choice'}</div>
        <p style="font-weight:bold;margin:6px 0">${q.question}</p>
        <div class="opts">${q.type==='trueFalse'?
          `<div class="opt correct">✓ True</div><div class="opt">✗ False</div>`:
          (q.options||[]).map((o,i)=>`<div class="opt ${o.correct?'correct':''}"><span style="background:${['#e91e8c','#0891b2','#059669','#d97706'][i]};color:white;padding:2px 7px;border-radius:4px;font-weight:bold">${['A','B','C','D'][i]}</span>${o.text}</div>`).join('')
        }</div>
        ${opts.withExplanations?`<div class="exp"><strong>Explanation:</strong> ${q.explanation}</div><div class="rule">👑 <strong>Golden Rule:</strong> ${q.goldenRule}</div>`:''}
        <p class="pg"><em>📖 Textbook reference (p.${q.page}): ${q.paragraph}</em></p>
      </div>`).join('')}
      <div class="footer">${META.publisher} · ${META.book}</div>
    </body></html>`;
    w.document.write(html); w.document.close(); w.print();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} onClick={e=>e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full p-5 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">Custom PDF Print</h3><button onClick={onClose}><X className="w-5 h-5 text-slate-400"/></button></div>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-sm mb-2">Select Units:</p>
            <div className="space-y-2">{UNITS.map(u=>(
              <label key={u.id} className="flex items-center gap-2 p-2 rounded-lg border cursor-pointer hover:bg-slate-50">
                <input type="checkbox" checked={opts.units.includes(u.id)} onChange={()=>toggle(u.id)} className="rounded"/>
                <span className="text-sm">{u.icon} {u.title}</span>
              </label>
            ))}</div>
          </div>
          <div>
            <p className="font-bold text-sm mb-2">Difficulty:</p>
            {['all','easy','medium','hard'].map(d=>(
              <label key={d} className="flex items-center gap-2 p-2 cursor-pointer">
                <input type="radio" name="diff" checked={opts.difficulty===d} onChange={()=>setOpts(o=>({...o,difficulty:d}))}/>
                <span className="text-sm capitalize">{d==='all'?'All Levels':DIFFICULTY_LABELS[d]||d}</span>
              </label>
            ))}
          </div>
          <label className="flex items-center gap-2"><input type="checkbox" checked={opts.withExplanations} onChange={e=>setOpts(o=>({...o,withExplanations:e.target.checked}))}/><span className="text-sm">Include Explanations & Golden Rules</span></label>
          <p className="text-sm text-slate-500">Selected questions: <strong>{toAr(filtered.length)}</strong></p>
          <button onClick={doPrint} className="w-full rounded-xl bg-emerald-600 text-white font-bold py-3 flex items-center justify-center gap-2"><Printer className="w-5 h-5"/>Print Now</button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function EnglishGrade2S1WeCanBank() {
  const [progress, setProgress] = useState(loadProgress());
  const [view, setView] = useState('home'); // home | unit | lesson | running
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showPrint, setShowPrint] = useState(false);
  const [darkMode, setDarkMode] = useState(()=>localStorage.getItem('wecan_dark')==='true');
  const [studentName, setStudentName] = useState(()=>localStorage.getItem(STORAGE_STUDENT)||'');
  const [nameInput, setNameInput] = useState('');

  useEffect(()=>{ localStorage.setItem('wecan_dark', darkMode); }, [darkMode]);

  const refreshProgress = () => setProgress(loadProgress());

  const totalCorrect = ALL_QUESTIONS.filter(q=>progress[q.id]?.isCorrect).length;

  if(!studentName) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{background:'#faf8f0'}}>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-2" style={{borderColor:'#c9a227'}}>
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">📚</div>
            <h1 className="font-heading font-bold text-2xl text-slate-800">We Can! 2</h1>
            <p className="text-slate-500 text-sm">Grade 2 English — Term 1 Question Bank</p>
            <p className="text-xs text-slate-400 mt-1">{META.publisher}</p>
          </div>
          <p className="text-sm text-slate-600 mb-3 text-center">Enter your name to start:</p>
          <input value={nameInput} onChange={e=>setNameInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&nameInput.trim()&&(localStorage.setItem(STORAGE_STUDENT,nameInput.trim()),setStudentName(nameInput.trim()))}
            placeholder="Your name..." className="w-full rounded-xl border-2 border-slate-200 p-3 text-slate-800 mb-4 focus:border-amber-400 outline-none text-center"/>
          <button disabled={!nameInput.trim()} onClick={()=>{localStorage.setItem(STORAGE_STUDENT,nameInput.trim());setStudentName(nameInput.trim());}}
            className="w-full rounded-xl bg-primary text-white font-bold py-3 disabled:opacity-40">
            Start Learning! 🚀
          </button>
        </motion.div>
      </div>
    );
  }

  const activeQuestions = selectedLesson ? ALL_QUESTIONS.filter(q=>q.lesson===selectedLesson.id) : [];

  return (
    <div className={`min-h-screen transition-colors ${darkMode?'bg-gray-900':'bg-[#faf8f0]'}`}>
      {/* Header */}
      <div className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between shadow-sm" style={{background:darkMode?'#0a1628':'#0a1628', borderBottom:'2px solid #c9a227'}}>
        <div className="flex items-center gap-3">
          <Link to="/question-bank/grade_2/first"><button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Home className="w-4 h-4 text-white"/></button></Link>
          <div>
            <p className="text-white font-bold text-sm">We Can! 2</p>
            <p className="text-white/50 text-xs">Grade 2 · Term 1</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-amber-500/20 px-2.5 py-1 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-amber-400"/>
            <span className="text-amber-300 font-bold text-xs">{toAr(totalCorrect)}</span>
          </div>
          <button onClick={()=>setShowPrint(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Printer className="w-4 h-4 text-white"/></button>
          <button onClick={()=>setShowProfile(true)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><User className="w-4 h-4 text-white"/></button>
          <button onClick={()=>setDarkMode(!darkMode)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">{darkMode?<Sun className="w-4 h-4 text-yellow-300"/>:<Moon className="w-4 h-4 text-white"/>}</button>
        </div>
      </div>

      {/* Islamic corner decoration */}
      <div className="absolute top-16 left-2 text-amber-200/30 text-4xl pointer-events-none select-none">✦</div>
      <div className="absolute top-16 right-2 text-amber-200/30 text-4xl pointer-events-none select-none">✦</div>

      <div className={`max-w-2xl mx-auto px-4 py-5 pb-12 ${darkMode?'text-white':''}`}>

        {/* HOME: Unit cards */}
        {view==='home' && (
          <div className="space-y-5">
            {/* Hero */}
            <div className="relative rounded-3xl overflow-hidden p-6 text-center shadow-xl" style={{background:'linear-gradient(135deg,#0a1628,#1a3a5a)'}}>
              <div className="absolute top-3 right-3 text-2xl opacity-60">⭐⭐⭐</div>
              <div className="absolute top-3 left-3 text-amber-400/40 text-3xl">✦</div>
              <BookOpen className="w-10 h-10 text-amber-400 mx-auto mb-2"/>
              <h1 className="text-white font-heading font-bold text-xl mb-1">We Can! 2</h1>
              <p className="text-white/60 text-sm mb-1">Grade 2 English · Term 1 · 2025</p>
              <p className="text-white/40 text-xs">{toAr(UNITS.length)} Units · {toAr(UNITS.reduce((s,u)=>s+u.lessons.length,0))} Lessons · {toAr(ALL_QUESTIONS.length)} Questions</p>
              <div className="mt-3 flex justify-center gap-2">
                <div className="bg-white/10 px-3 py-1.5 rounded-full text-xs text-white/80">{studentName} 👋</div>
                <div className="bg-amber-500/20 px-3 py-1.5 rounded-full text-xs text-amber-300">{toAr(totalCorrect)} correct ✓</div>
              </div>
            </div>

            <h2 className={`font-heading font-bold text-base ${darkMode?'text-white':'text-slate-800'}`}>Choose a Unit:</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {UNITS.map(u=>(
                <UnitCard key={u.id} unit={u} progress={progress} onClick={()=>{setSelectedUnit(u);setView('unit');}}/>
              ))}
            </div>
          </div>
        )}

        {/* UNIT: Lesson list */}
        {view==='unit' && selectedUnit && (
          <div className="space-y-4">
            <button onClick={()=>setView('home')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm">
              <ChevronRight className="w-4 h-4"/>Back to Units
            </button>
            <div className="rounded-2xl p-4 text-white shadow-lg" style={{background:`linear-gradient(135deg,${selectedUnit.color},${selectedUnit.color}99)`}}>
              <div className="text-3xl mb-1">{selectedUnit.icon}</div>
              <h2 className="font-heading font-bold text-lg">{selectedUnit.title}</h2>
              <p className="text-white/70 text-sm">{selectedUnit.titleAr}</p>
              <p className="text-white/50 text-xs mt-1">Pages {selectedUnit.pages} · {selectedUnit.lessons.length} lessons</p>
            </div>
            <h3 className={`font-bold text-sm ${darkMode?'text-white':'text-slate-700'}`}>Choose a Lesson:</h3>
            <div className="space-y-2">
              {selectedUnit.lessons.map(l=>(
                <LessonTile key={l.id} lesson={l} progress={progress} onClick={()=>{setSelectedLesson(l);setView('lesson');}}/>
              ))}
            </div>
          </div>
        )}

        {/* LESSON: question list & start button */}
        {view==='lesson' && selectedLesson && view!=='running' && (
          <div className="space-y-4">
            <button onClick={()=>setView('unit')} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm">
              <ChevronRight className="w-4 h-4"/>Back to {selectedUnit?.title}
            </button>
            <div className={`rounded-2xl p-4 border ${darkMode?'bg-slate-800 border-slate-700':'bg-white border-slate-200'} shadow-sm`}>
              <h2 className={`font-heading font-bold text-base mb-1 ${darkMode?'text-white':'text-slate-800'}`}>{selectedLesson.title}</h2>
              <p className={`text-xs mb-3 ${darkMode?'text-slate-400':'text-slate-500'}`}>Textbook page {selectedLesson.page} · {toAr(activeQuestions.length)} questions</p>
              <div className="space-y-2 mb-4">
                {activeQuestions.map((q,i)=>(
                  <div key={q.id} className={`flex items-center gap-3 rounded-lg p-2.5 ${darkMode?'bg-slate-700':'bg-slate-50'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${progress[q.id]?.isCorrect?'bg-emerald-500 text-white':'bg-slate-200 text-slate-600'}`}>{toAr(i+1)}</div>
                    <span className={`text-sm flex-1 truncate ${darkMode?'text-slate-200':'text-slate-700'}`}>{q.question}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${q.difficulty==='easy'?'bg-emerald-100 text-emerald-700':q.difficulty==='medium'?'bg-amber-100 text-amber-700':'bg-red-100 text-red-700'}`}>{DIFFICULTY_LABELS[q.difficulty]}</span>
                  </div>
                ))}
              </div>
              <button onClick={()=>setView('running')} className="w-full rounded-xl bg-primary text-white font-bold py-3 text-sm hover:bg-primary/90">
                Start Lesson → {toAr(activeQuestions.length)} Questions
              </button>
            </div>
          </div>
        )}

        {/* RUNNING: question runner */}
        {view==='running' && selectedLesson && activeQuestions.length>0 && (
          <QuestionRunner
            questions={activeQuestions}
            title={selectedLesson.title}
            onExit={(finalScore)=>{ refreshProgress(); setView('lesson'); }}
          />
        )}
      </div>

      {showProfile && <StudentProfileModal onClose={()=>setShowProfile(false)} studentName={studentName}/>}
      {showPrint && <PrintModal onClose={()=>setShowPrint(false)}/>}
    </div>
  );
}