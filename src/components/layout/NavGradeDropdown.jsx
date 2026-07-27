import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { gradeStages, getGradeName } from '@/lib/gradeData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';

// categories: array of { key, label, path } (direct link) OR { key, label, getPath(grade) } (grade submenu)
export default function NavGradeDropdown({ label, categories, allowedGrades }) {
  const { lang } = useLang();
  const navigate = useNavigate();

  const stages = allowedGrades
    ? Object.values(gradeStages)
        .map((stage) => ({ ...stage, grades: stage.grades.filter((g) => allowedGrades.includes(g)) }))
        .filter((stage) => stage.grades.length > 0)
    : Object.values(gradeStages);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all">
          {label}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 max-h-96 overflow-y-auto">
        {categories.map((category) =>
          category.getPath ? (
            <DropdownMenuSub key={category.key}>
              <DropdownMenuSubTrigger className="cursor-pointer">
                {category.label}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="w-56 max-h-80 overflow-y-auto">
                  {stages.map((stage, i) => (
                    <div key={stage.name_en}>
                      {i > 0 && <DropdownMenuSeparator />}
                      <DropdownMenuLabel className="text-xs text-slate-400">
                        {lang === 'ar' ? stage.name_ar : stage.name_en}
                      </DropdownMenuLabel>
                      {stage.grades.map((grade) => (
                        <DropdownMenuItem key={grade} onClick={() => navigate(category.getPath(grade))} className="cursor-pointer">
                          {getGradeName(grade, lang)}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem key={category.key} onClick={() => navigate(category.path)} className="cursor-pointer">
              {category.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}