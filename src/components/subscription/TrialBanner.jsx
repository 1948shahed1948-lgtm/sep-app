import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccess } from '@/hooks/useAccess';
import { useLang } from '@/lib/i18n';
import { trialRemainingMs, formatRemaining } from '@/lib/access';
import { Clock, X } from 'lucide-react';

export default function TrialBanner() {
  const { lang } = useLang();
  const { access, loading } = useAccess();
  const [remaining, setRemaining] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const ar = lang === 'ar';

  useEffect(() => {
    if (access !== 'trial') return;
    const update = () => setRemaining(trialRemainingMs());
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, [access]);

  if (loading || access !== 'trial' || dismissed) return null;

  return (
    <div className="sticky top-0 z-40 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium shadow-md relative">
      <Clock className="w-4 h-4 flex-shrink-0" />
      <span>
        {ar
          ? `تجربة مجانية مفعّلة — متبقٍ: ${formatRemaining(remaining, true)}`
          : `Free trial active — ${formatRemaining(remaining, false)} left`}
      </span>
      <Link to="/subscribe" className="underline font-bold hover:no-underline">
        {ar ? 'اشترك' : 'Subscribe'}
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute ltr:right-2 rtl:left-2 text-white/80 hover:text-white"
        aria-label="dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}