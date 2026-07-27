import React, { useState, useEffect, useRef } from 'react';

/**
 * Basic, non-blocking pull-to-refresh for iOS WebView packaging.
 * Only engages when the page is scrolled to the top, so normal
 * scrolling is never blocked. Default action reloads the page.
 */
export default function PullToRefresh({ onRefresh, threshold = 70 }) {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const startY = useRef(null);
  const pulling = useRef(false);
  const pullDist = useRef(0);
  const refreshingRef = useRef(false);
  const onRefreshRef = useRef(onRefresh);
  const thresholdRef = useRef(threshold);

  useEffect(() => { onRefreshRef.current = onRefresh; }, [onRefresh]);
  useEffect(() => { thresholdRef.current = threshold; }, [threshold]);

  useEffect(() => {
    const touchStart = (e) => {
      if (refreshingRef.current) { startY.current = null; return; }
      startY.current = window.scrollY <= 0 ? e.touches[0].clientY : null;
    };
    const touchMove = (e) => {
      if (startY.current === null || refreshingRef.current) return;
      const dy = e.touches[0].clientY - startY.current;
      if (dy > 0 && window.scrollY <= 0) {
        pulling.current = true;
        pullDist.current = Math.min(dy * 0.5, thresholdRef.current * 1.5);
        setPull(pullDist.current);
      }
    };
    const touchEnd = async () => {
      if (pulling.current && pullDist.current >= thresholdRef.current && !refreshingRef.current) {
        refreshingRef.current = true;
        setRefreshing(true);
        setPull(thresholdRef.current);
        try {
          const fn = onRefreshRef.current;
          if (fn) await fn();
          else window.location.reload();
        } catch { /* noop */ }
        refreshingRef.current = false;
        setRefreshing(false);
      }
      setPull(0);
      pullDist.current = 0;
      pulling.current = false;
      startY.current = null;
    };
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchmove', touchMove, { passive: true });
    window.addEventListener('touchend', touchEnd);
    return () => {
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('touchend', touchEnd);
    };
  }, []);

  const progress = Math.min(pull / threshold, 1);
  const visible = pull > 0 || refreshing;

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-center z-[60] pointer-events-none"
      style={{
        transform: `translateY(${pull}px)`,
        opacity: visible ? 1 : 0,
        transition: refreshing ? 'none' : 'transform 0.18s ease, opacity 0.18s ease',
      }}
    >
      <div className="mt-2 w-9 h-9 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center">
        <div
          className={`w-5 h-5 border-2 border-slate-200 border-t-primary rounded-full ${refreshing ? 'animate-spin' : ''}`}
          style={{ transform: refreshing ? 'none' : `rotate(${progress * 360}deg)` }}
        />
      </div>
    </div>
  );
}