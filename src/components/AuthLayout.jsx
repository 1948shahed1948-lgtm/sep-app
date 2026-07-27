import React from "react";

export default function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Brand header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary shadow-lg mb-3">
            {Icon ? <Icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" /> : null}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{subtitle}</p>}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-7">
          {children}
        </div>

        {footer && (
          <p className="text-center text-sm text-muted-foreground mt-5">{footer}</p>
        )}

        {/* Brand footer */}
        <p className="text-center text-xs text-slate-400 mt-6">بنوك الأسئلة والاختبارات المعيارية السعودية</p>
      </div>
    </div>
  );
}