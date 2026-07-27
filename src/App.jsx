import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
const PageNotFound = lazy(() => import('./lib/PageNotFound'));
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { LangProvider } from '@/lib/i18n.jsx';

// Auth pages
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));

// App pages
const AppLayout = lazy(() => import('@/components/layout/AppLayout'));
const Home = lazy(() => import('@/pages/Home'));
const CurriculumGrades = lazy(() => import('@/pages/CurriculumGrades'));
const GradeSubjects = lazy(() => import('@/pages/GradeSubjects'));
const SubjectLessons = lazy(() => import('@/pages/SubjectLessons'));
const LessonDetail = lazy(() => import('@/pages/LessonDetail'));
const Practice = lazy(() => import('@/pages/Practice'));
const LessonQuiz = lazy(() => import('@/pages/LessonQuiz'));
const AptitudeTests = lazy(() => import('@/pages/AptitudeTests'));
const AptitudePractice = lazy(() => import('@/pages/AptitudePractice'));
const AptitudeGradePractice = lazy(() => import('@/pages/AptitudeGradePractice'));
const MyProgress = lazy(() => import('@/pages/MyProgress'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const StandardizedAbout = lazy(() => import('@/pages/StandardizedAbout'));
const StandardizedIntro = lazy(() => import('@/pages/StandardizedIntro'));
const StandardizedGrades = lazy(() => import('@/pages/StandardizedGrades'));
const StandardizedPractice = lazy(() => import('@/pages/StandardizedPractice'));
const QuestionBank = lazy(() => import('@/pages/QuestionBank'));
const MistakeJournal = lazy(() => import('@/pages/MistakeJournal'));
const DailyReview = lazy(() => import('@/pages/DailyReview'));
const ContentGenerator = lazy(() => import('@/pages/ContentGenerator'));
const FeatureDetail = lazy(() => import('@/pages/FeatureDetail'));
const AccountSettings = lazy(() => import('@/pages/AccountSettings'));
import PrivacyPolicy from '@/pages/PrivacyPolicy';
const StoreGuide = lazy(() => import('@/pages/StoreGuide'));
const Subscribe = lazy(() => import('@/pages/Subscribe'));
const CurriculumInLife = lazy(() => import('@/pages/CurriculumInLife'));
const GeniusChallenge = lazy(() => import('@/pages/GeniusChallenge'));
const QuestionBankGrades = lazy(() => import('@/pages/questionbank/QuestionBankGrades'));
const QuestionBankSemesters = lazy(() => import('@/pages/questionbank/QuestionBankSemesters'));
const QuestionBankSubjects = lazy(() => import('@/pages/questionbank/QuestionBankSubjects'));
const QuestionBankSubjectPractice = lazy(() => import('@/pages/questionbank/QuestionBankSubjectPractice'));
const ExternalBankViewer = lazy(() => import('@/pages/questionbank/ExternalBankViewer'));
const AptitudeLanding = lazy(() => import('@/pages/AptitudeLanding'));
const EnglishGrade1S2 = lazy(() => import('@/pages/EnglishGrade1S2'));
const EnglishGrade3S2 = lazy(() => import('@/pages/EnglishGrade3S2'));
const EnglishGrade3S1WeCanWorkbook = lazy(() => import('@/pages/EnglishGrade3S1WeCanWorkbook'));
const LughatiGrade2S1 = lazy(() => import('@/pages/LughatiGrade2S1'));
const MathGrade2S1 = lazy(() => import('@/pages/MathGrade2S1'));
const MathGrade2S2 = lazy(() => import('@/pages/MathGrade2S2'));
const LughatiGrade2S2 = lazy(() => import('@/pages/LughatiGrade2S2'));
const LughatiGrade3S2 = lazy(() => import('@/pages/LughatiGrade3S2'));
const LughatiGrade3S1 = lazy(() => import('@/pages/LughatiGrade3S1'));
const ArtGrade2S2 = lazy(() => import('@/pages/ArtGrade2S2'));
const LifeSkillsGrade1S2 = lazy(() => import('@/pages/LifeSkillsGrade1S2'));
const ScienceGrade1S2 = lazy(() => import('@/pages/ScienceGrade1S2'));
const ScienceGrade2S2 = lazy(() => import('@/pages/ScienceGrade2S2'));
const IslamicGrade1S2 = lazy(() => import('@/pages/IslamicGrade1S2'));
const MathGrade1S2 = lazy(() => import('@/pages/MathGrade1S2'));
const IslamicGrade2S2 = lazy(() => import('@/pages/IslamicGrade2S2'));
const TawheedGrade7S1 = lazy(() => import('@/pages/TawheedGrade7S1'));
const Grade34Bank = lazy(() => import('@/pages/Grade34Bank'));
const TawheedGrade3S1 = lazy(() => import('@/pages/TawheedGrade3S1'));
const MathGrade3S2 = lazy(() => import('@/pages/MathGrade3S2'));
const MathGrade3S1 = lazy(() => import('@/pages/MathGrade3S1'));
const AptitudeUniversity2 = lazy(() => import('@/pages/AptitudeUniversity2'));
const Dahir = lazy(() => import('@/pages/Dahir'));
const LifeSkillsGrade3S2 = lazy(() => import('@/pages/LifeSkillsGrade3S2'));
const ScienceGrade3S2 = lazy(() => import('@/pages/ScienceGrade3S2'));
const ScienceGrade3S2SoundLight = lazy(() => import('@/pages/ScienceGrade3S2SoundLight'));
const NeomCurriculumBank = lazy(() => import('@/pages/NeomCurriculumBank'));
const InternationalStandardizedAbout = lazy(() => import('@/pages/InternationalStandardizedAbout'));
const BloomPyramidBank = lazy(() => import('@/pages/BloomPyramidBank'));
const PerformanceBank = lazy(() => import('@/pages/PerformanceBank'));
const PlayLearn = lazy(() => import('@/pages/PlayLearn'));
const PreschoolBank = lazy(() => import('@/pages/PreschoolBank'));
const SocialGrade5S1 = lazy(() => import('@/pages/SocialGrade5S1'));
const EnglishTopGoal2 = lazy(() => import('@/pages/EnglishTopGoal2'));
const EnglishGrade6S2 = lazy(() => import('@/pages/EnglishGrade6S2'));
const TajweedGrade5S2 = lazy(() => import('@/pages/TajweedGrade5S2'));
const ArtGrade5S2 = lazy(() => import('@/pages/ArtGrade5S2'));
const LughatiGrade5S2 = lazy(() => import('@/pages/LughatiGrade5S2'));
const ComputerGrade5S1 = lazy(() => import('@/pages/ComputerGrade5S1'));
const LifeSkillsGrade5S2 = lazy(() => import('@/pages/LifeSkillsGrade5S2'));
const ScienceGrade5S2 = lazy(() => import('@/pages/ScienceGrade5S2'));
const MathGrade5S2Ch2 = lazy(() => import('@/pages/MathGrade5S2Ch2'));
const MathGrade5S2Ch3 = lazy(() => import('@/pages/MathGrade5S2Ch3'));
const MathGrade5S2Ch4 = lazy(() => import('@/pages/MathGrade5S2Ch4'));
const MathGrade5S2Ch5 = lazy(() => import('@/pages/MathGrade5S2Ch5'));
const MathGrade5S2Ch6 = lazy(() => import('@/pages/MathGrade5S2Ch6'));
const MathGrade5S2Ch8 = lazy(() => import('@/pages/MathGrade5S2Ch8'));
const MathGrade5S2Ch7 = lazy(() => import('@/pages/MathGrade5S2Ch7'));
const MathGrade5S2Ch9 = lazy(() => import('@/pages/MathGrade5S2Ch9'));
const MathGrade5S2Ch10 = lazy(() => import('@/pages/MathGrade5S2Ch10'));
const MathGrade5S2Ch11 = lazy(() => import('@/pages/MathGrade5S2Ch11'));
const LughatiGrade6S2 = lazy(() => import('@/pages/LughatiGrade6S2'));
const MathGrade6 = lazy(() => import('@/pages/MathGrade6'));
const MathGrade6Ch6 = lazy(() => import('@/pages/MathGrade6Ch6'));
const MathGrade6Ch8 = lazy(() => import('@/pages/MathGrade6Ch8'));
const MathGrade6Ch9 = lazy(() => import('@/pages/MathGrade6Ch9'));
const MathGrade6Ch10 = lazy(() => import('@/pages/MathGrade6Ch10'));
const MathGrade6Ch10Part2 = lazy(() => import('@/pages/MathGrade6Ch10Part2'));
const LifeSkillsGrade6S1 = lazy(() => import('@/pages/LifeSkillsGrade6S1'));
const ComputerGrade6S1 = lazy(() => import('@/pages/ComputerGrade6S1'));
const ComputerGrade6S2 = lazy(() => import('@/pages/ComputerGrade6S2'));
const LifeSkillsMiscBank = lazy(() => import('@/pages/LifeSkillsMiscBank'));
const IslamicGrade6S1 = lazy(() => import('@/pages/IslamicGrade6S1'));
const IslamicGrade6S2 = lazy(() => import('@/pages/IslamicGrade6S2'));
const FiqhGrade6S2 = lazy(() => import('@/pages/FiqhGrade6S2'));
const IslamicGrade6Comprehensive = lazy(() => import('@/pages/IslamicGrade6Comprehensive'));
const ScienceSemester2Cover = lazy(() => import('@/pages/ScienceSemester2Cover'));
const ArtGrade6S2 = lazy(() => import('@/pages/ArtGrade6S2'));
const TajweedGrade6S2 = lazy(() => import('@/pages/TajweedGrade6S2'));
const SocialGrade6S2 = lazy(() => import('@/pages/SocialGrade6S2'));
const ScienceGrade1S1 = lazy(() => import('@/pages/ScienceGrade1S1'));
const LughatiGrade1S1Page = lazy(() => import('@/pages/LughatiGrade1S1'));
const IslamicGrade1S1Page = lazy(() => import('@/pages/IslamicGrade1S1'));
const EnglishGrade1S1 = lazy(() => import('@/pages/EnglishGrade1S1'));
const LughatiGrade1S1 = lazy(() => import('@/pages/LughatiGrade1S1'));
const MathG2Ch5 = lazy(() => import('@/pages/MathG2Ch5'));
const EnglishGrade2S1WeCanBank = lazy(() => import('@/pages/EnglishGrade2S1WeCanBank'));
const LifeSkillsGrade2S1Bank = lazy(() => import('@/pages/LifeSkillsGrade2S1Bank'));
const IslamicGrade2S1Bank = lazy(() => import('@/pages/IslamicGrade2S1Bank'));
const ScienceGrade2S1Bank = lazy(() => import('@/pages/ScienceGrade2S1Bank'));
const ScienceGrade3S1Bank = lazy(() => import('@/pages/ScienceGrade3S1Bank'));
const LughatiGrade2S1BankNew = lazy(() => import('@/pages/LughatiGrade2S1Bank'));
const ArtGrade2S1BankNew = lazy(() => import('@/pages/ArtGrade2S1Bank'));
const SocialGrade2S1Bank = lazy(() => import('@/pages/SocialGrade2S1Bank'));
const ComputerGrade2S1Bank = lazy(() => import('@/pages/ComputerGrade2S1Bank'));
const ArtGrade3S1Bank = lazy(() => import('@/pages/ArtGrade3S1Bank'));
const LifeSkillsGrade3S1Bank = lazy(() => import('@/pages/LifeSkillsGrade3S1Bank'));
const MathGrade1S1Bank = lazy(() => import('@/pages/MathGrade1S1Bank'));
const ScienceGrade4S1Bank = lazy(() => import('@/pages/ScienceGrade4S1Bank'));
const IslamicGrade4S1Bank = lazy(() => import('@/pages/IslamicGrade4S1Bank'));
const EnglishTopGoal1S1Bank = lazy(() => import('@/pages/EnglishTopGoal1S1Bank'));
const MathGrade4S1Bank = lazy(() => import('@/pages/MathGrade4S1Bank'));
const LughatiGrade4S1 = lazy(() => import('@/pages/LughatiGrade4S1'));
const SocialGrade4S1 = lazy(() => import('@/pages/SocialGrade4S1'));
const ComputerGrade4S1 = lazy(() => import('@/pages/ComputerGrade4S1'));
const ArtGrade4S1Bank = lazy(() => import('@/pages/ArtGrade4S1Bank'));
const SocialGrade5S1Bank = lazy(() => import('@/pages/SocialGrade5S1Bank'));
const LughatiGrade5S1Bank = lazy(() => import('@/pages/LughatiGrade5S1Bank'));
const IslamicGrade5S1Bank = lazy(() => import('@/pages/IslamicGrade5S1Bank'));
const LifeSkillsGrade5S1Bank = lazy(() => import('@/pages/LifeSkillsGrade5S1Bank'));
const EnglishTopGoal2S1Bank = lazy(() => import('@/pages/EnglishTopGoal2S1Bank'));
const MathGrade5S1Bank = lazy(() => import('@/pages/MathGrade5S1Bank'));
const ScienceGrade5S2Bank = lazy(() => import('@/pages/ScienceGrade5S2Bank'));
const ComputerGrade5S2 = lazy(() => import('@/pages/ComputerGrade5S2'));
const ArtGrade6S1 = lazy(() => import('@/pages/ArtGrade6S1'));
const SocialGrade6S1 = lazy(() => import('@/pages/SocialGrade6S1'));
const LifeSkillsG6S1Bank = lazy(() => import('@/pages/LifeSkillsG6S1Bank'));
const PlatformShowcase = lazy(() => import('@/pages/PlatformShowcase'));
const TeachersLanding = lazy(() => import('@/pages/TeachersLanding'));
const TeacherProfileView = lazy(() => import('@/pages/TeacherProfileView'));
const TeacherRegister = lazy(() => import('@/pages/TeacherRegister'));
const TeacherDashboard = lazy(() => import('@/pages/TeacherDashboard'));
const TeacherLogin = lazy(() => import('@/pages/TeacherLogin'));
const MyBookings = lazy(() => import('@/pages/MyBookings'));
const UniversityAdmission = lazy(() => import('@/pages/UniversityAdmission'));


const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-sm text-slate-500 font-medium">بنوك الأسئلة والاختبارات</p>
        </div>
      </div>
    );
  }

  if (authError) {
    // Public route: privacy policy must be viewable without login (store requirement)
    if (window.location.pathname.startsWith('/privacy')) {
      return <PrivacyPolicy />;
    }
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Suspense fallback={(
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    )}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/curriculum/:curriculum" element={<CurriculumGrades />} />
        <Route path="/curriculum/:curriculum/:grade" element={<GradeSubjects />} />
        <Route path="/curriculum/:curriculum/:grade/subject/:subjectId" element={<SubjectLessons />} />
        <Route path="/curriculum/:curriculum/:grade/subject/:subjectId/lesson/:lessonId" element={<LessonDetail />} />
        <Route path="/curriculum/:curriculum/:grade/subject/:subjectId/lesson/:lessonId/skill/:skillId/practice" element={<Practice />} />
        <Route path="/curriculum/:curriculum/:grade/subject/:subjectId/lesson/:lessonId/quiz" element={<LessonQuiz />} />
        <Route path="/aptitude-landing" element={<AptitudeLanding />} />
        <Route path="/aptitude" element={<AptitudeTests />} />
        <Route path="/aptitude/:section/:topicIndex" element={<AptitudePractice />} />
        <Route path="/aptitude/:section/:topicIndex/:grade" element={<AptitudeGradePractice />} />
        <Route path="/progress" element={<MyProgress />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/standardized/about" element={<StandardizedAbout />} />
        <Route path="/standardized/:type/intro" element={<StandardizedIntro />} />
        <Route path="/standardized/:type/grades" element={<StandardizedGrades />} />
        <Route path="/standardized/:type/:grade" element={<StandardizedPractice />} />
        <Route path="/question-bank" element={<QuestionBank />} />
        <Route path="/mistake-journal" element={<MistakeJournal />} />
        <Route path="/review" element={<DailyReview />} />
        <Route path="/admin/content-generator" element={<ContentGenerator />} />
        <Route path="/feature/:key" element={<FeatureDetail />} />
        <Route path="/settings" element={<AccountSettings />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/store-guide" element={<StoreGuide />} />
        <Route path="/curriculum-in-life" element={<CurriculumInLife />} />
        <Route path="/genius-challenge" element={<GeniusChallenge />} />
        <Route path="/question-bank/grades" element={<QuestionBankGrades />} />
        <Route path="/question-bank/:grade" element={<QuestionBankSemesters />} />
        <Route path="/question-bank/:grade/:semester" element={<QuestionBankSubjects />} />
        <Route path="/question-bank/:grade/:semester/subject/:subjectId" element={<QuestionBankSubjectPractice />} />
        <Route path="/question-bank/:grade/:semester/external/:subject" element={<ExternalBankViewer />} />
        <Route path="/english-grade1-s2" element={<EnglishGrade1S2 />} />
        <Route path="/english-grade3-s2" element={<EnglishGrade3S2 />} />
        <Route path="/english-grade3-s1-workbook" element={<EnglishGrade3S1WeCanWorkbook />} />
        <Route path="/lughati-grade2-s1" element={<LughatiGrade2S1 />} />
        <Route path="/math-grade2-s1" element={<MathGrade2S1 />} />
        <Route path="/math-grade2-s2" element={<MathGrade2S2 />} />
        <Route path="/lughati-grade2-s2" element={<LughatiGrade2S2 />} />
        <Route path="/lughati-grade3-s2" element={<LughatiGrade3S2 />} />
        <Route path="/lughati-grade3-s1" element={<LughatiGrade3S1 />} />
        <Route path="/art-grade2-s2" element={<ArtGrade2S2 />} />
        <Route path="/life-skills-grade1-s2" element={<LifeSkillsGrade1S2 />} />
        <Route path="/science-grade1-s2" element={<ScienceGrade1S2 />} />
        <Route path="/science-grade2-s2" element={<ScienceGrade2S2 />} />
        <Route path="/islamic-grade1-s2" element={<IslamicGrade1S2 />} />
        <Route path="/math-grade1-s2" element={<MathGrade1S2 />} />
        <Route path="/islamic-grade2-s2" element={<IslamicGrade2S2 />} />
        <Route path="/tawheed-grade7-s1" element={<TawheedGrade7S1 />} />
        <Route path="/grade-3-4-bank" element={<Grade34Bank />} />
        <Route path="/tawheed-grade3-s1" element={<TawheedGrade3S1 />} />
        <Route path="/math-grade3-s2" element={<MathGrade3S2 />} />
        <Route path="/math-grade3-s1" element={<MathGrade3S1 />} />
        <Route path="/aptitude-university-2" element={<AptitudeUniversity2 />} />
        <Route path="/dahir" element={<Dahir />} />
        <Route path="/life-skills-grade3-s2" element={<LifeSkillsGrade3S2 />} />
        <Route path="/science-grade3-s2" element={<ScienceGrade3S2 />} />
        <Route path="/science-grade3-s2-sound-light" element={<ScienceGrade3S2SoundLight />} />
        <Route path="/neom-curriculum" element={<NeomCurriculumBank />} />
        <Route path="/international-standardized" element={<InternationalStandardizedAbout />} />
        <Route path="/bloom-pyramid" element={<BloomPyramidBank />} />
        <Route path="/performance-bank" element={<PerformanceBank />} />
        <Route path="/play-learn" element={<PlayLearn />} />
        <Route path="/preschool-bank" element={<PreschoolBank />} />
        <Route path="/social-grade5-s1" element={<SocialGrade5S1 />} />
        <Route path="/english-topgoal2" element={<EnglishTopGoal2 />} />
        <Route path="/english-grade6-s2" element={<EnglishGrade6S2 />} />
        <Route path="/tajweed-grade5-s2" element={<TajweedGrade5S2 />} />
        <Route path="/art-grade5-s2" element={<ArtGrade5S2 />} />
        <Route path="/lughati-grade5-s2" element={<LughatiGrade5S2 />} />
        <Route path="/computer-grade5-s1" element={<ComputerGrade5S1 />} />
        <Route path="/life-skills-grade5-s2" element={<LifeSkillsGrade5S2 />} />
        <Route path="/science-grade5-s2" element={<ScienceGrade5S2 />} />
        <Route path="/math-grade5-s2-ch2" element={<MathGrade5S2Ch2 />} />
        <Route path="/math-grade5-s2-ch3" element={<MathGrade5S2Ch3 />} />
        <Route path="/math-grade5-s2-ch4" element={<MathGrade5S2Ch4 />} />
        <Route path="/math-grade5-s2-ch5" element={<MathGrade5S2Ch5 />} />
        <Route path="/math-grade5-s2-ch6" element={<MathGrade5S2Ch6 />} />
        <Route path="/math-grade5-s2-ch8" element={<MathGrade5S2Ch8 />} />
        <Route path="/math-grade5-s2-ch7" element={<MathGrade5S2Ch7 />} />
        <Route path="/math-grade5-s2-ch9" element={<MathGrade5S2Ch9 />} />
        <Route path="/math-grade5-s2-ch10" element={<MathGrade5S2Ch10 />} />
        <Route path="/math-grade5-s2-ch11" element={<MathGrade5S2Ch11 />} />
        <Route path="/math-grade6" element={<MathGrade6 />} />
        <Route path="/lughati-grade6-s2" element={<LughatiGrade6S2 />} />
        <Route path="/math-grade6-ch6" element={<MathGrade6Ch6 />} />
        <Route path="/math-grade6-ch8" element={<MathGrade6Ch8 />} />
        <Route path="/math-grade6-ch9" element={<MathGrade6Ch9 />} />
        <Route path="/math-grade6-ch10" element={<MathGrade6Ch10 />} />
        <Route path="/math-grade6-ch10-p2" element={<MathGrade6Ch10Part2 />} />
        <Route path="/life-skills-grade6-s1" element={<LifeSkillsGrade6S1 />} />
        <Route path="/computer-grade6-s1" element={<ComputerGrade6S1 />} />
        <Route path="/computer-grade6-s2" element={<ComputerGrade6S2 />} />
        <Route path="/life-skills-misc-bank" element={<LifeSkillsMiscBank />} />
        <Route path="/islamic-grade6-s1" element={<IslamicGrade6S1 />} />
        <Route path="/islamic-grade6-s2" element={<IslamicGrade6S2 />} />
        <Route path="/fiqh-grade6-s2" element={<FiqhGrade6S2 />} />
        <Route path="/islamic-grade6-comprehensive" element={<IslamicGrade6Comprehensive />} />
        <Route path="/science-grade6-s2-cover" element={<ScienceSemester2Cover />} />
        <Route path="/art-grade6-s2" element={<ArtGrade6S2 />} />
        <Route path="/tajweed-grade6-s2" element={<TajweedGrade6S2 />} />
        <Route path="/social-grade6-s2" element={<SocialGrade6S2 />} />
        <Route path="/science-grade1-s1" element={<ScienceGrade1S1 />} />
        <Route path="/lughati-grade1-s1" element={<LughatiGrade1S1Page />} />
        <Route path="/islamic-grade1-s1" element={<IslamicGrade1S1Page />} />
        <Route path="/english-grade1-s1" element={<EnglishGrade1S1 />} />
        <Route path="/lughati-grade1-s1" element={<LughatiGrade1S1 />} />
        <Route path="/math-g2-ch5" element={<MathG2Ch5 />} />
        <Route path="/english-grade2-s1-wecan" element={<EnglishGrade2S1WeCanBank />} />
        <Route path="/life-skills-grade2-s1" element={<LifeSkillsGrade2S1Bank />} />
        <Route path="/islamic-grade2-s1-adab" element={<IslamicGrade2S1Bank />} />
        <Route path="/islamic-grade2-s1" element={<IslamicGrade2S1Bank />} />
        <Route path="/science-grade2-s1" element={<ScienceGrade2S1Bank />} />
        <Route path="/science-grade3-s1-fossils" element={<ScienceGrade3S1Bank />} />
        <Route path="/lughati-grade2-s1-new" element={<LughatiGrade2S1BankNew />} />
        <Route path="/art-grade2-s1-new" element={<ArtGrade2S1BankNew />} />
        <Route path="/social-grade2-s1" element={<SocialGrade2S1Bank />} />
        <Route path="/computer-grade2-s1" element={<ComputerGrade2S1Bank />} />
        <Route path="/art-grade3-s1" element={<ArtGrade3S1Bank />} />
        <Route path="/life-skills-grade3-s1" element={<LifeSkillsGrade3S1Bank />} />
        <Route path="/math-grade1-s1" element={<MathGrade1S1Bank />} />
        <Route path="/science-grade4-s1" element={<ScienceGrade4S1Bank />} />
        <Route path="/islamic-grade4-s1" element={<IslamicGrade4S1Bank />} />
        <Route path="/english-topgoal1-s1" element={<EnglishTopGoal1S1Bank />} />
      <Route path="/math-grade4-s1" element={<MathGrade4S1Bank />} />
      <Route path="/lughati-grade4-s1" element={<LughatiGrade4S1 />} />
      <Route path="/social-grade4-s1" element={<SocialGrade4S1 />} />
      <Route path="/computer-grade4-s1" element={<ComputerGrade4S1 />} />
      <Route path="/art-grade4-s1" element={<ArtGrade4S1Bank />} />
      <Route path="/social-grade5-s1-bank" element={<SocialGrade5S1Bank />} />
      <Route path="/lughati-grade5-s1" element={<LughatiGrade5S1Bank />} />
      <Route path="/islamic-grade5-s1" element={<IslamicGrade5S1Bank />} />
      <Route path="/english-topgoal2-s1" element={<EnglishTopGoal2S1Bank />} />
      <Route path="/life-skills-grade5-s1-new" element={<LifeSkillsGrade5S1Bank />} />
      <Route path="/math-grade5-s1" element={<MathGrade5S1Bank />} />
      <Route path="/science-grade5-s2-bank" element={<ScienceGrade5S2Bank />} />
      <Route path="/computer-grade5-s2" element={<ComputerGrade5S2 />} />
      <Route path="/art-grade6-s1" element={<ArtGrade6S1 />} />
      <Route path="/social-grade6-s1" element={<SocialGrade6S1 />} />
      <Route path="/life-skills-grade6-s1-bank" element={<LifeSkillsG6S1Bank />} />
      <Route path="/platform-showcase" element={<PlatformShowcase />} />
      <Route path="/teachers" element={<TeachersLanding />} />
      <Route path="/teachers/:id" element={<TeacherProfileView />} />
      <Route path="/teacher/register" element={<TeacherRegister />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/university-admission" element={<UniversityAdmission />} />

      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
};

function App() {
  // System dark mode sync — toggle `dark` class on <html> to match OS preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => document.documentElement.classList.toggle('dark', mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <AuthProvider>
      <LangProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <ScrollToTop />
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </LangProvider>
    </AuthProvider>
  )
}

export default App