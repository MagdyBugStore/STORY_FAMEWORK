import React from 'react';
import LiveChat from '../../components/web/LiveChat';
import Navbar from '../../components/web/Navbar';
import Footer from '../../components/web/Footer';

/* ─────────────────────────────────────────────────────
   W01 — الصفحة الرئيسية
   States: Guest (default shown) | User (navbar variant noted)
   Breakpoints: Desktop 1260 → Tablet 768 → Mobile 375
───────────────────────────────────────────────────── */
function Hero() {
  return (
    <div className="w-hero">
      <div className="w-hero-overlay" />
      <div className="w-hero-label">HERO BANNER — يُدار من CMS</div>
      <div className="w-hero-content">
        <div className="w-hero-title">اكتشف مصر .. ارسم رحلتك</div>
        <div className="w-hero-sub">رحلات داخلية · عمرة · نايل كروز · برامج خاصة</div>
        <div className="sp" />
        {/* Search bar */}
        <div className="w-search-bar">
          <div className="w-search-field">
            <div className="w-sf-lbl">الوجهة</div>
            <div className="w-sf-val" style={{ width: '120px' }} />
          </div>
          <div className="w-search-field">
            <div className="w-sf-lbl">تاريخ المغادرة</div>
            <div className="w-sf-val" style={{ width: '90px' }} />
          </div>
          <div className="w-search-field">
            <div className="w-sf-lbl">عدد المسافرين</div>
            <div className="w-sf-val" style={{ width: '70px' }} />
          </div>
          <div className="w-search-field">
            <div className="w-sf-lbl">الميزانية القصوى</div>
            <div className="w-sf-val" style={{ width: '80px' }} />
          </div>
          <div className="w-search-btn">بحث</div>
        </div>
      </div>
    </div>
  );
}

function CategoryChips() {
  const cats = ['الكل', 'رحلات ترفيهية', 'رحلات دينية', 'رحلات ثقافية', 'نايل كروز', 'شهر عسل', 'رحلات عائلية'];
  return (
    <div className="w-container">
      <div className="w-section-sm">
        <div className="w-chips">
          {cats.map((c, i) => (
            <span key={i} className={`w-chip${i === 0 ? ' on' : ''}`}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DestinationsSection() {
  const dests = [
    { name: 'شرم الشيخ', count: '12 رحلة' },
    { name: 'الغردقة', count: '8 رحلات' },
    { name: 'الأقصر', count: '5 رحلات' },
    { name: 'أسوان', count: '4 رحلات' },
    { name: 'القاهرة', count: '9 رحلات' },
    { name: 'الإسكندرية', count: '6 رحلات' },
  ];
  return (
    <div style={{ background: '#fff', padding: '40px 0' }}>
      <div className="w-container">
        <div className="w-sec-hdr">
          <div>
            <div className="w-sec-title">استكشف الوجهات</div>
            <div className="w-sec-subtitle">اختر وجهتك وابدأ رحلتك</div>
          </div>
          <span className="w-sec-link">عرض الكل</span>
        </div>
        <div className="w-grid-3" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px' }}>
          {dests.map((d, i) => (
            <div key={i} className="w-dest-card" style={{ cursor: 'pointer' }}>
              <div className="w-dest-img">[صورة]</div>
              <div className="w-dest-overlay" />
              <div className="w-dest-info">
                <div className="w-dest-name">{d.name}</div>
                <div className="w-dest-count">{d.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedPackages() {
  const tours = [
    { name: 'رحلة شرم الشيخ الفاخرة', dest: 'شرم الشيخ', price: '8,500 ج', days: '5 أيام', type: 'ترفيهية', rating: 5 },
    { name: 'برنامج عمرة رمضان', dest: 'مكة المكرمة', price: '35,000 ج', days: '10 أيام', type: 'دينية', rating: 5 },
    { name: 'نايل كروز الأقصر وأسوان', dest: 'الأقصر — أسوان', price: '12,000 ج', days: '7 أيام', type: 'نايل كروز', rating: 4 },
    { name: 'القاهرة الحضارة والتاريخ', dest: 'القاهرة', price: '4,200 ج', days: '3 أيام', type: 'ثقافية', rating: 4 },
    { name: 'شهر عسل دهب', dest: 'دهب', price: '9,800 ج', days: '6 أيام', type: 'شهر عسل', rating: 5 },
    { name: 'مرسى علم الغوص', dest: 'مرسى علم', price: '7,500 ج', days: '4 أيام', type: 'ترفيهية', rating: 4 },
  ];
  return (
    <div className="w-container">
      <div className="w-section">
        <div className="w-sec-hdr">
          <div>
            <div className="w-sec-title">البرامج المميزة</div>
            <div className="w-sec-subtitle">الأكثر حجزاً هذا الموسم</div>
          </div>
          <span className="w-sec-link">عرض الكل</span>
        </div>
        <div className="w-grid-3">
          {tours.map((t, i) => (
            <div key={i} className="w-tour-card">
              <div className="w-tour-img">
                [صورة الرحلة]
                <div className="w-tour-badge">⭐ {t.rating}.0</div>
                <div className="w-tour-badge type">{t.type}</div>
              </div>
              <div className="w-tour-body">
                <div className="w-tour-name">{t.name}</div>
                <div className="w-tour-dest">📍 {t.dest}</div>
                <div className="w-tour-footer">
                  <div>
                    <div className="w-tour-price-lbl">يبدأ من</div>
                    <div className="w-tour-price">{t.price}</div>
                    <div className="w-tour-loyalty">⭐ +10 نقاط ولاء</div>
                  </div>
                  <div>
                    <div className="w-tour-duration">{t.days}</div>
                    <div className="sp-sm" />
                    <div className="w-tour-cta">احجز الآن</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PromoSection() {
  return (
    <div style={{ background: '#fff', padding: '0 0 40px' }}>
      <div className="w-container">
        <div className="w-promo">
          <div>
            <div className="w-promo-title">عروض العمرة — موسم 1446</div>
            <div className="w-promo-sub">برامج عمرة متكاملة بأسعار تنافسية · من 25,000 ج فقط</div>
            <div className="w-promo-btn">اعرف أكثر</div>
          </div>
          <div className="w-promo-img" />
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  const articles = [
    { cat: 'سياحة دينية', title: 'دليلك الشامل للعمرة: كل ما تحتاج معرفته' },
    { cat: 'وجهات', title: 'أفضل 5 أماكن لقضاء الإجازة في شرم الشيخ' },
    { cat: 'نصائح السفر', title: 'كيف تختار الرحلة المناسبة لشهر العسل؟' },
    { cat: 'نايل كروز', title: 'تجربة نايل كروز: رحلة لا تُنسى بين الأقصر وأسوان' },
  ];
  return (
    <div className="w-container">
      <div className="w-section">
        <div className="w-sec-hdr">
          <div>
            <div className="w-sec-title">مدونة السفر</div>
            <div className="w-sec-subtitle">نصائح ووجهات وتجارب من الميدان</div>
          </div>
          <span className="w-sec-link">كل المقالات</span>
        </div>
        <div className="w-grid-4">
          {articles.map((a, i) => (
            <div key={i} className="w-blog-card">
              <div className="w-blog-img">[صورة المقال]</div>
              <div className="w-blog-body">
                <div className="w-blog-cat">{a.cat}</div>
                <div className="w-blog-title">{a.title}</div>
                <div className="w-tl w70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function W01_HomePage() {
  return (
    <>
      {/* ── Guest State (default) ── */}
      <Navbar variant="guest" activeLink="home" />
      <Hero />
      <CategoryChips />
      <DestinationsSection />
      <FeaturedPackages />
      <PromoSection />
      <BlogSection />
      <Footer />
      {/* WhatsApp floating */}
      <LiveChat />
    </>
  );
}
