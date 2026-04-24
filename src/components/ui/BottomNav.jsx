import React from 'react';

// Player nav tabs
const PLAYER_TABS = ['الرئيسية', 'استكشف', 'حجوزاتي', 'حسابي'];
// Owner nav tabs
const OWNER_TABS = ['الرئيسية', 'التقويم', 'الحجوزات', 'الإعدادات'];

export default function BottomNav({ activeIndex = 0, variant = 'player' }) {
  const tabs = variant === 'owner' ? OWNER_TABS : PLAYER_TABS;
  return (
    <div className="bnav">
      {tabs.map((label, i) => (
        <div key={i} className={`bni${i === activeIndex ? ' on' : ''}`}>
          <div className={`bni-bar${i === activeIndex ? ' on' : ''}`}></div>
          <div className="bni-dot"></div>
          <div className={`bni-lbl${i === activeIndex ? ' on' : ''}`}>{label}</div>
        </div>
      ))}
    </div>
  );
}
