import React, { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';

const SUGGESTED_QUESTIONS = {
  ar: [
    'ما هي ميزات بنوك الأسئلة والاختبارات؟',
    'كيف أستخدم بنك الأسئلة؟',
    'ما الفرق بين الاختبار التشخيصي والمعياري؟',
    'كيف يعمل تحدي العبقري؟',
  ],
  en: [
    'What are the features of the Saudi Education Platform?',
    'How do I use the question bank?',
    'What is the difference between diagnostic and criterion tests?',
    'How does the Genius Challenge work?',
  ],
};

export default function DahirChat() {
  const { lang, isRTL } = useLang();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, busy]);

  const send = async (text) => {
    const content = (text || input).trim();
    if (!content || busy) return;
    setInput('');
    const userMsg = { role: 'user', content };
    setMessages((p) => [...p, userMsg]);
    setBusy(true);
    try {
      const res = await base44.functions.invoke('dahirAssistant', { message: content, lang });
      const answer = res.data?.answer || res.answer;
      const inScope = res.data?.in_scope ?? res.in_scope;
      setMessages((p) => [...p, { role: 'assistant', content: answer, inScope }]);
    } catch (e) {
      setMessages((p) => [...p, { role: 'assistant', content: lang === 'ar' ? 'عذراً، حدث خطأ. حاول مرة أخرى.' : 'Sorry, an error occurred. Try again.', error: true }]);
    }
    setBusy(false);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col" style={{ height: 'min(70vh, 560px)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-heading font-bold text-slate-900">{lang === 'ar' ? 'داهر — مساعدك الذكي' : 'Dahir — Your Smart Assistant'}</p>
          <p className="text-[10px] text-slate-500">{lang === 'ar' ? 'يجيب ضمن نطاق المنصة التعليمية' : 'Answers within the educational platform scope'}</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-3 text-sm text-slate-600 max-w-[85%]">
              {lang === 'ar'
                ? 'مرحباً! أنا داهر، مساعدك الذكي في بنوك الأسئلة والاختبارات. اسألني عن أي ميزة أو كيفية استخدام المنصة.'
                : 'Hello! I am Dahir, your smart assistant for the Saudi Education Platform. Ask me about any feature or how to use the platform.'}
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{lang === 'ar' ? 'أسئلة مقترحة' : 'Suggested questions'}</p>
              {(lang === 'ar' ? SUGGESTED_QUESTIONS.ar : SUGGESTED_QUESTIONS.en).map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="block w-full text-start text-xs text-slate-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-lg px-3 py-2 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white'
                    : m.error
                    ? 'bg-red-50 text-red-700 border border-red-100'
                    : 'bg-slate-50 text-slate-700'
                }`}
              >
                {m.role === 'assistant' && m.inScope === false && !m.error && (
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 mb-1">
                    <AlertCircle className="w-3 h-3" />
                    {lang === 'ar' ? 'خارج نطاق المنصة' : 'Out of platform scope'}
                  </div>
                )}
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {busy && (
          <div className="flex justify-start">
            <div className="bg-slate-50 rounded-2xl px-3.5 py-2.5 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-xs text-slate-500">{lang === 'ar' ? 'داهر يفكّر...' : 'Dahir is thinking...'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-slate-100 p-3 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder={lang === 'ar' ? 'اكتب سؤالك هنا...' : 'Type your question here...'}
          disabled={busy}
          className="flex-1 text-sm rounded-xl border border-slate-200 px-3 py-2.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 disabled:opacity-50"
        />
        <button
          onClick={() => send()}
          disabled={busy || !input.trim()}
          className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center disabled:opacity-40 hover:shadow-lg transition-all flex-shrink-0"
        >
          {isRTL ? <Send className="w-4 h-4 -scale-x-100" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}