import React from 'react';

/*
  Navbar — shared across all pages
  Props:
    variant:    'guest' | 'user' | 'minimal'   (default: 'guest')
    activeLink: 'home' | 'destinations' | 'tours' | 'flights' | 'hotels' | 'blog' | 'contact'
*/

const NAV_LINKS = [
  { id: 'home',         label: 'الرئيسية' },
  { id: 'destinations', label: 'الوجهات' },
  { id: 'tours',        label: 'رحلاتنا' },
  { id: 'flights',      label: 'حجز طيران' },
  { id: 'hotels',       label: 'حجز فنادق' },
  { id: 'blog',         label: 'المدونة' },
  { id: 'contact',      label: 'تواصل معنا' },
];

export default function Navbar({ variant = 'guest', activeLink = '' }) {
  return (
    <nav className="w-nav">
      <div className="w-nav-logo" title="El-Eman Tourist" />

      {variant !== 'minimal' && (
        <div className="w-nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <span key={id} className={`w-nav-link${activeLink === id ? ' on' : ''}`}>
              {label}
            </span>
          ))}
        </div>
      )}

      {variant === 'minimal' && <div style={{ flex: 1 }} />}

      <div className="w-nav-actions">
        <span className="w-nav-currency">EGP ▾</span>

        {variant === 'user' && (
          <div className="w-nav-user">
            <div className="w-nav-user-av" />
            <div>
              <div className="w-nav-user-name">أحمد محمد</div>
              <div className="w-nav-points">⭐ 120 نقطة</div>
            </div>
          </div>
        )}

        {(variant === 'guest' || variant === 'minimal') && (
          <>
            <span className="w-nav-btn ghost">تسجيل الدخول</span>
            <span className="w-nav-btn solid">إنشاء حساب</span>
          </>
        )}
      </div>
    </nav>
  );
}
