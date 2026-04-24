import React from 'react';

/* Footer — shared across all public pages */

const COLS = [
  {
    title: 'روابط سريعة',
    links: ['الرئيسية', 'الوجهات', 'رحلاتنا', 'حجز طيران', 'حجز فنادق'],
  },
  {
    title: 'الشركة',
    links: ['من نحن', 'تواصل معنا', 'المدونة', 'الوظائف'],
  },
  {
    title: 'قانوني',
    links: ['سياسة الخصوصية', 'الشروط والأحكام'],
  },
];

export default function Footer() {
  return (
    <div className="w-footer">
      <div className="w-footer-grid">
        <div>
          <div className="w-footer-logo" />
          <div className="w-footer-desc">
            الإيمان للسياحة — وجهتك الأولى لرحلات الاسترخاء والعمرة
            وحجز الطيران والفنادق في مصر والعالم.
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <div className="w-footer-col-title">{col.title}</div>
            {col.links.map((l) => (
              <span key={l} className="w-footer-link">{l}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="w-footer-bottom">
        <span>© 2026 El-Eman Tourist. جميع الحقوق محفوظة.</span>
        <span>تصميم وتطوير — الإيمان للسياحة</span>
      </div>
    </div>
  );
}
