import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import BottomTabs from '@/components/layout/BottomTabs';
import { useLang } from '@/lib/i18n.jsx';
import ProfileGate from '@/components/student/ProfileGate';
import NotificationListener from '@/components/admin/NotificationListener';
import useActivityTracking from '@/hooks/useActivityTracking';
import { useAccess } from '@/hooks/useAccess';
import { isPreviewAllowedPath } from '@/lib/access';
import PaywallCard from '@/components/subscription/PaywallCard';
import TrialBanner from '@/components/subscription/TrialBanner';
import { AnimatePresence, motion } from 'framer-motion';


const ALLOW_ALWAYS = ['/', '/subscribe', '/settings', '/progress', '/admin', '/admin/content-generator', '/privacy', '/store-guide'];

function isContentPath(pathname) {
  if (ALLOW_ALWAYS.some(p => pathname === p || pathname.startsWith(p + '/'))) return false;
  if (pathname.startsWith('/feature/')) return false;
  return true;
}

export default function AppLayout() {
  const { isRTL } = useLang();
  const location = useLocation();
  const { access, loading } = useAccess();
  useActivityTracking();

  const blocked = !loading && access === 'preview' && isContentPath(location.pathname) && !isPreviewAllowedPath(location.pathname);

  return (
    <div className="min-h-screen bg-background pt-safe" dir={isRTL ? 'rtl' : 'ltr'}>
      <ProfileGate />
      <NotificationListener />
      <TrialBanner />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-28 lg:pb-6 w-full">
          {blocked ? <PaywallCard /> : (
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? -12 : 12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>
      <Footer />
      <BottomTabs />
    </div>
  );
}