import { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { computeAccess, getDeviceId } from '@/lib/access';

export function useAccess() {
  const { user, authChecked } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [serverTrialStart, setServerTrialStart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authChecked) return;
    const deviceId = getDeviceId();
    let unsub = null;
    (async () => {
      try {
        // التجربة مرتبطة بحساب البريد — تُسجَّل وتُجلب من الخادم للمسجّلين فقط
        if (user) {
          try {
            const res = await base44.functions.invoke('getOrCreateTrial', { user_id: user.id, device_id: deviceId });
            if (res?.data?.trial_start) setServerTrialStart(res.data.trial_start);
          } catch (_) {}
        }
        let list = await base44.entities.Subscription.filter({ device_id: deviceId });
        if ((!list || !list[0]) && user) {
          list = await base44.entities.Subscription.filter({ user_id: user.id });
        }
        setSubscription(list && list[0] ? list[0] : null);
      } catch (_) {
        setSubscription(null);
      }
      setLoading(false);
      try {
        unsub = base44.entities.Subscription.subscribe((event) => {
          if (event && event.data) {
            const data = event.data;
            if (data.device_id === deviceId || (user && data.user_id === user.id)) {
              setSubscription(event.type === 'delete' ? null : event.data);
            }
          }
        });
      } catch (_) {}
    })();
    return () => { if (unsub) unsub(); };
  }, [authChecked, user]);

  const access = computeAccess(user, subscription, serverTrialStart);
  return { access, subscription, loading, isAdmin: user?.role === 'admin' };
}