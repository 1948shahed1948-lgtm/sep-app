import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * سهم عودة واضح — يستخدم history.goBack عند توفره، وإلا ينقل للمسار المحدد
 * to: مسار العودة (اختياري — إذا لم يُحدد يستخدم history.back)
 * label: نص بجانب السهم (اختياري)
 */
export default function BackArrow({ to, label = 'رجوع', className = '' }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else if (to) {
      navigate(to);
    }
  };

  const inner = (
    <>
      <ArrowRight className="w-5 h-5" />
      <span className="text-sm font-bold">{label}</span>
    </>
  );

  if (to && window.history.length <= 1) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/20 transition-all ${className}`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur text-white border border-white/20 transition-all shadow-md ${className}`}
    >
      {inner}
    </button>
  );
}