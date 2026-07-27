import React from 'react';
import { useLang } from '@/lib/i18n';

const MBS_URL = 'https://saudipedia.com/var/site/storage/images/4/1/5/1/7301514-1-ara-SA/8ec6c4e38368-87311.jpg';
const SALMAN_URL = 'https://saudipedia.com/var/site/storage/images/4/4/2/2/4092244-1-ara-SA/1bed9d748c19-66099.jpg';

export default function HeaderPortraits() {
  const { lang } = useLang();
  const ar = lang === 'ar';

  const mbsLabel = ar ? 'ولي العهد رئيس مجلس الوزراء الأمير محمد بن سلمان' : 'Crown Prince Mohammed bin Salman';
  const kingLabel = ar ? 'خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز' : 'King Salman bin Abdulaziz';

  return (
    <div className="border-b border-white/10 bg-[#0C1738]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-3">
        {/* الأول (يمين في RTL) — الملك سلمان */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex-shrink-0 w-9 h-9 rounded-full p-[2px] bg-gradient-to-br from-amber-400 via-emerald-500 to-[#3E57A4]">
            <img
              src={SALMAN_URL}
              alt={ar ? 'الملك سلمان بن عبدالعزيز' : 'King Salman'}
              className="rounded-full w-full h-full object-cover object-top bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="hidden sm:block truncate text-[11px] sm:text-xs font-medium text-white/85 text-right">
            {kingLabel}
          </span>
        </div>

        {/* الثاني (يسار في RTL) — الأمير محمد بن سلمان */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="hidden sm:block truncate text-[11px] sm:text-xs font-medium text-white/85">
            {mbsLabel}
          </span>
          <div className="flex-shrink-0 w-9 h-9 rounded-full p-[2px] bg-gradient-to-br from-amber-400 via-emerald-500 to-[#3E57A4]">
            <img
              src={MBS_URL}
              alt={ar ? 'الأمير محمد بن سلمان' : 'Mohammed bin Salman'}
              className="rounded-full w-full h-full object-cover object-top bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}