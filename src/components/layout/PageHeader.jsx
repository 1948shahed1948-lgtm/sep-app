import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, backTo, breadcrumbs }) {
  const { isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;

  return (
    <div className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10" style={{ background: 'linear-gradient(135deg, #556895 0%, #3D5688 50%, #233a69 100%)' }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')] opacity-50" />
      <div className="relative flex items-center gap-4">
        {backTo && (
          <Link to={backTo} className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Back className="w-5 h-5 text-white" />
          </Link>
        )}
        <div>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-1.5">
              {breadcrumbs.map((b, i) => (
                <Fragment key={i}>
                  {i > 0 && <span>/</span>}
                  {b.path ? (
                    <Link to={b.path} className="hover:text-white/80 transition-colors">{b.label}</Link>
                  ) : (
                    <span className="text-white/80 font-medium">{b.label}</span>
                  )}
                </Fragment>
              ))}
            </nav>
          )}
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-white">{title}</h1>
          {subtitle && <p className="text-sm text-white/60 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}