import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { Award } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { standardizedTestTypesList } from '@/lib/standardizedTestTypes';

export default function StandardizedTestsMenu() {
  const { lang } = useLang();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          title={lang === 'ar' ? 'الاختبارات المقننة' : 'Standardized Tests'}
          className="flex items-center justify-center w-9 h-9 rounded-lg text-white bg-gradient-to-r from-fuchsia-500 to-orange-500 hover:opacity-90 shadow-md transition-all"
        >
          <Award className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64">
        {standardizedTestTypesList.map((type) => (
          <DropdownMenuItem
            key={type.key}
            onClick={() => navigate(`/standardized/${type.key}/intro`)}
            className="flex flex-col items-start gap-0.5 py-2.5 cursor-pointer"
          >
            <span className="font-bold text-sm text-slate-800">
              {lang === 'ar' ? type.titleAr : type.titleEn}
            </span>
            <span className="text-xs text-slate-400">
              {lang === 'ar' ? type.shortDescAr : type.shortDescEn}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}