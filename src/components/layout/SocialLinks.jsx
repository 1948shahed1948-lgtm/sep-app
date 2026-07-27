import React from 'react';
import { useLang } from '@/lib/i18n';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const socials = [
  { key: 'facebook', icon: Facebook, url: 'https://www.facebook.com/share/14heW8XZ7oU/?mibextid=wwXIfr', color: '#1877F2' },
  { key: 'instagram', icon: Instagram, url: 'https://www.instagram.com/bonukalasilah?igsh=MWhpdThnYmgwbGtobw==', color: '#E1306C' },
  { key: 'youtube', icon: Youtube, url: 'https://www.youtube.com/@bonukalasilah', color: '#FF0000' },
  { key: 'tiktok', icon: null, url: 'https://www.tiktok.com/@bonukalasilah?_r=1&_t=ZS-988fyhM8KtV', color: '#fff' },
  { key: 'snapchat', icon: null, url: 'https://www.snapchat.com/add/bonukalasilah?share_id=Pa17S5XOn2Q&locale=ar-SA', color: '#FFFC00' },
];

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.01a8.18 8.18 0 0 0 4.77 1.52V7.08a4.85 4.85 0 0 1-.86-.39z" />
    </svg>
  );
}

function SnapchatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.2 2c2.37 0 4.28 1.94 4.36 4.3 0 .13 0 .26.01.39.07.79.08 1.57.02 2.36.32.18.7.2 1.06.1.38-.1.71-.07.93.22.24.32.06.65-.2.86-.37.3-.88.42-1.3.6-.23.1-.26.23-.2.46.33 1.04 1 1.84 1.95 2.4.28.16.6.27.9.38.28.1.5.27.5.6 0 .35-.24.55-.52.7-.4.2-.84.3-1.28.4-.22.05-.34.16-.4.38-.1.36-.18.73-.4 1.04-.3.42-.73.5-1.2.46-.5-.05-1-.2-1.5-.2-.8 0-1.5.3-2.2.6-.7.3-1.43.5-2.2.5-1.1-.02-2.1-.4-3-.97-.5-.3-1-.5-1.6-.5-.4 0-.8.1-1.2.1-.6.05-1.1-.1-1.4-.64-.2-.33-.3-.7-.4-1.07-.05-.2-.16-.3-.36-.35-.43-.1-.86-.2-1.25-.4-.3-.15-.55-.36-.55-.7 0-.32.22-.5.5-.6.3-.1.62-.22.9-.38.95-.56 1.62-1.36 1.95-2.4.06-.23.03-.36-.2-.46-.42-.18-.93-.3-1.3-.6-.26-.21-.44-.54-.2-.86.22-.29.55-.32.93-.22.36.1.74.08 1.06-.1-.06-.79-.05-1.57.02-2.36.01-.13.01-.26.01-.39C7.92 3.94 9.83 2 12.2 2z" />
    </svg>
  );
}

export default function SocialLinks({ compact = false }) {
  const { lang } = useLang();
  return (
    <div className={compact ? '' : 'mt-4'}>
      {!compact && (
        <p className="text-white/40 text-xs mb-3">{lang === 'ar' ? 'تابعنا على' : 'Follow us'}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {socials.map((s) => {
          const Icon = s.icon;
          const IconEl = Icon
            ? <Icon className="w-4 h-4 transition-transform hover:scale-110" style={{ color: s.color }} />
            : s.key === 'tiktok'
              ? <TikTokIcon className="w-4 h-4 transition-transform hover:scale-110" style={{ color: s.color }} />
              : <SnapchatIcon className="w-4 h-4 transition-transform hover:scale-110" style={{ color: s.color }} />;
          return (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.key}
              className={compact
                ? "w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                : "w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"}
            >
              {IconEl}
            </a>
          );
        })}
      </div>
    </div>
  );
}