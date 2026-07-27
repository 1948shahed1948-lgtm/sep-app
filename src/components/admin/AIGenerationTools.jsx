import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles, BookOpen, Brain, Compass, Trophy, FileQuestion, Link as LinkIcon, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  { key: 'neom', ar: 'نيوم', en: 'NEOM' },
  { key: 'the_line', ar: 'ذا لاين', en: 'THE LINE' },
  { key: 'red_sea', ar: 'البحر الأحمر', en: 'Red Sea' },
  { key: 'qiddiya', ar: 'القدية', en: 'Qiddiya' },
  { key: 'industrial_valley', ar: 'الوادي الصناعي', en: 'Industrial Valley' },
  { key: 'rosnam', ar: 'روزنام', en: 'ROSNAM' },
];

const SUBJECTS = [
  { key: 'physics', ar: 'الفيزياء', en: 'Physics' },
  { key: 'math', ar: 'الرياضيات', en: 'Mathematics' },
  { key: 'chemistry', ar: 'الكيمياء', en: 'Chemistry' },
  { key: 'biology', ar: 'الأحياء', en: 'Biology' },
  { key: 'geology', ar: 'علوم الأرض', en: 'Earth Sciences' },
  { key: 'general', ar: 'عام', en: 'General' },
];

const STAGES = [
  { key: 'primary', ar: 'الابتدائية', en: 'Primary' },
  { key: 'intermediate', ar: 'المتوسطة', en: 'Intermediate' },
  { key: 'secondary', ar: 'الثانوية', en: 'Secondary' },
];

function GenCard({ icon: Icon, title, desc, children, color }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 space-y-3">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-sm text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{desc}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ResultBadge({ status, text }) {
  if (status === 'running') return <Loader2 className="w-4 h-4 animate-spin text-blue-600" />;
  if (status === 'done') return <span className="text-xs font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" />{text}</span>;
  if (status === 'error') return <span className="text-xs font-bold text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{text}</span>;
  return null;
}

export default function AIGenerationTools() {
  const { lang } = useLang();
  const isRTL = lang === 'ar';
  const Back = isRTL ? ChevronLeft : ChevronLeft;

  const [geniusStage, setGeniusStage] = useState('secondary');
  const [geniusCount, setGeniusCount] = useState(34);
  const [geniusRes, setGeniusRes] = useState({});

  const [rlProject, setRlProject] = useState('neom');
  const [rlSubject, setRlSubject] = useState('physics');
  const [rlCount, setRlCount] = useState(5);
  const [rlRes, setRlRes] = useState({});

  const [stdGrade, setStdGrade] = useState(7);
  const [stdType, setStdType] = useState('criterion');
  const [stdCount, setStdCount] = useState(25);
  const [stdRes, setStdRes] = useState({});

  const [aptSection, setAptSection] = useState('verbal');
  const [aptTopic, setAptTopic] = useState(0);
  const [aptGrade, setAptGrade] = useState(12);
  const [aptCount, setAptCount] = useState(20);
  const [aptRes, setAptRes] = useState({});

  const runGenius = async () => {
    setGeniusRes({ status: 'running' });
    try {
      const r = await base44.functions.invoke('generateGeniusQuestions', { stage: geniusStage, count: geniusCount });
      setGeniusRes({ status: 'done', text: `${r.data?.created ?? r.created} ✓` });
    } catch (e) { setGeniusRes({ status: 'error', text: e.message }); }
  };

  const runRealLife = async () => {
    setRlRes({ status: 'running' });
    try {
      const r = await base44.functions.invoke('generateRealLifeConnections', { subject: rlSubject, project: rlProject, count: rlCount });
      setRlRes({ status: 'done', text: `${r.data?.created ?? r.created} ✓` });
    } catch (e) { setRlRes({ status: 'error', text: e.message }); }
  };

  const runStandardized = async () => {
    setStdRes({ status: 'running' });
    try {
      const r = await base44.functions.invoke('generateStandardizedBatch', { grade: stdGrade, test_type: stdType, count: stdCount });
      setStdRes({ status: 'done', text: `${r.data?.created ?? r.created} ✓` });
    } catch (e) { setStdRes({ status: 'error', text: e.message }); }
  };

  const runAptitude = async () => {
    setAptRes({ status: 'running' });
    try {
      const r = await base44.functions.invoke('bulkGenerateAptitude', { section: aptSection, topic_index: aptTopic, grade: aptGrade, count: aptCount });
      setAptRes({ status: 'done', text: `${r.data?.created ?? r.created} ✓` });
    } catch (e) { setAptRes({ status: 'error', text: e.message }); }
  };

  const sel = "text-sm rounded-lg border border-slate-200 px-3 py-2 bg-white";

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
        <p className="text-xs text-blue-800 font-medium">
          {isRTL ? 'أدوات توليد المحتوى بالذكاء الاصطناعي — تستهلك رصيد التكاملات. شغّلها بحذر.' : 'AI content generation tools — consume integration credits. Use with care.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Lesson questions — link to ContentGenerator */}
        <GenCard icon={BookOpen} title={isRTL ? 'أسئلة الدروس (50/درس)' : 'Lesson Questions (50/lesson)'} desc={isRTL ? 'توليد أسئلة بنك الأسئلة لكل درس وفق المنهج السعودي' : 'Generate question bank questions per lesson'} color="bg-emerald-500">
          <Link to="/admin/content-generator">
            <Button variant="outline" size="sm" className="w-full gap-2">
              <FileQuestion className="w-4 h-4" />
              {isRTL ? 'فتح مولّد المحتوى' : 'Open Content Generator'}
            </Button>
          </Link>
        </GenCard>

        {/* Genius Challenge */}
        <GenCard icon={Trophy} title={isRTL ? 'تحدي العبقري' : 'Genius Challenge'} desc={isRTL ? 'أسئلة صعبة مع شرح الخطأ الشائع والقاعدة الذهبية' : 'Hard questions with common mistake & golden rule'} color="bg-yellow-500">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <select className={sel} value={geniusStage} onChange={(e) => setGeniusStage(e.target.value)}>
                {STAGES.map((s) => <option key={s.key} value={s.key}>{isRTL ? s.ar : s.en}</option>)}
              </select>
              <input type="number" min="10" max="50" className={`${sel} w-20`} value={geniusCount} onChange={(e) => setGeniusCount(Number(e.target.value))} />
            </div>
            <Button size="sm" onClick={runGenius} disabled={geniusRes.status === 'running'} className="w-full gap-2">
              {geniusRes.status === 'running' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isRTL ? 'توليد' : 'Generate'}
            </Button>
            <div className="flex justify-center min-h-[20px]"><ResultBadge {...geniusRes} /></div>
          </div>
        </GenCard>

        {/* Real Life Connections */}
        <GenCard icon={Compass} title={isRTL ? 'المنهج في الحياة' : 'Curriculum in Life'} desc={isRTL ? 'ربط الدروس بمشاريع رؤية 2030' : 'Link lessons to Vision 2030 projects'} color="bg-teal-500">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <select className={sel} value={rlProject} onChange={(e) => setRlProject(e.target.value)}>
                {PROJECTS.map((p) => <option key={p.key} value={p.key}>{isRTL ? p.ar : p.en}</option>)}
              </select>
              <select className={sel} value={rlSubject} onChange={(e) => setRlSubject(e.target.value)}>
                {SUBJECTS.map((s) => <option key={s.key} value={s.key}>{isRTL ? s.ar : s.en}</option>)}
              </select>
              <input type="number" min="3" max="15" className={`${sel} w-20`} value={rlCount} onChange={(e) => setRlCount(Number(e.target.value))} />
            </div>
            <Button size="sm" onClick={runRealLife} disabled={rlRes.status === 'running'} className="w-full gap-2">
              {rlRes.status === 'running' ? <Loader2 className="w-4 h-4 animate-spin" /> : <LinkIcon className="w-4 h-4" />}
              {isRTL ? 'توليد' : 'Generate'}
            </Button>
            <div className="flex justify-center min-h-[20px]"><ResultBadge {...rlRes} /></div>
          </div>
        </GenCard>

        {/* Standardized Questions */}
        <GenCard icon={Brain} title={isRTL ? 'الاختبارات المقننة' : 'Standardized Tests'} desc={isRTL ? 'أسئلة تشخيصية/معيارية/تكيفية لكل صف' : 'Diagnostic/criterion/adaptive questions per grade'} color="bg-fuchsia-500">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <input type="number" min="1" max="12" className={`${sel} w-20`} value={stdGrade} onChange={(e) => setStdGrade(Number(e.target.value))} />
              <select className={sel} value={stdType} onChange={(e) => setStdType(e.target.value)}>
                <option value="diagnostic">{isRTL ? 'تشخيصي' : 'Diagnostic'}</option>
                <option value="criterion">{isRTL ? 'معياري' : 'Criterion'}</option>
                <option value="adaptive">{isRTL ? 'تكيفي' : 'Adaptive'}</option>
              </select>
              <input type="number" min="10" max="40" className={`${sel} w-20`} value={stdCount} onChange={(e) => setStdCount(Number(e.target.value))} />
            </div>
            <Button size="sm" onClick={runStandardized} disabled={stdRes.status === 'running'} className="w-full gap-2">
              {stdRes.status === 'running' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isRTL ? 'توليد' : 'Generate'}
            </Button>
            <div className="flex justify-center min-h-[20px]"><ResultBadge {...stdRes} /></div>
          </div>
        </GenCard>

        {/* Aptitude Questions */}
        <GenCard icon={FileQuestion} title={isRTL ? 'أسئلة القدرات' : 'Aptitude Questions'} desc={isRTL ? 'توليد أسئلة تدريب على القدرات لكل موضوع والصف' : 'Generate aptitude training questions per topic & grade'} color="bg-orange-500">
          <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <select className={sel} value={aptSection} onChange={(e) => setAptSection(e.target.value)}>
                <option value="verbal">{isRTL ? 'لفظي' : 'Verbal'}</option>
                <option value="quantitative">{isRTL ? 'كمي' : 'Quantitative'}</option>
              </select>
              <input type="number" min="0" max="4" className={`${sel} w-20`} value={aptTopic} onChange={(e) => setAptTopic(Number(e.target.value))} />
              <input type="number" min="1" max="12" className={`${sel} w-20`} value={aptGrade} onChange={(e) => setAptGrade(Number(e.target.value))} />
              <input type="number" min="10" max="40" className={`${sel} w-20`} value={aptCount} onChange={(e) => setAptCount(Number(e.target.value))} />
            </div>
            <Button size="sm" onClick={runAptitude} disabled={aptRes.status === 'running'} className="w-full gap-2">
              {aptRes.status === 'running' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isRTL ? 'توليد' : 'Generate'}
            </Button>
            <div className="flex justify-center min-h-[20px]"><ResultBadge {...aptRes} /></div>
          </div>
        </GenCard>
      </div>
    </div>
  );
}