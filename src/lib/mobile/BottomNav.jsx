import React from 'react';

const PLAYER_TABS = ['الرئيسية', 'استكشف', 'حجوزاتي', 'حسابي'];
const OWNER_TABS = ['الرئيسية', 'التقويم', 'الحجوزات', 'الإعدادات'];

export default function BottomNav({
  activeIndex = 0,
  variant = 'player',
  tabs,
  className,
}) {
  const resolvedTabs = tabs ?? (variant === 'owner' ? OWNER_TABS : PLAYER_TABS);

  return (
    <div className={['bnav', className].filter(Boolean).join(' ')}>
      {resolvedTabs.map((label, i) => (
        <div key={`${label}-${i}`} className={`bni${i === activeIndex ? ' on' : ''}`}>
          <div className={`bni-bar${i === activeIndex ? ' on' : ''}`}></div>
          <div className="bni-dot"></div>
          <div className={`bni-lbl${i === activeIndex ? ' on' : ''}`}>{label}</div>
        </div>
      ))}
    </div>
  );
}
