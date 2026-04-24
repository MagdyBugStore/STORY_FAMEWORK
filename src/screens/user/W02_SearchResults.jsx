import React from 'react';
import LiveChat from '../../components/web/LiveChat';
import Navbar from '../../components/web/Navbar';
import Footer from '../../components/web/Footer';

/* ─────────────────────────────────────────────────────
   W02 — البحث ونتائج البحث
   Desktop: Sidebar filters (fixed 260px) + Results grid
   Mobile:  Filter icon → bottom drawer overlay
   Breakpoints noted below
───────────────────────────────────────────────────── */
/* ── Sticky search bar (below navbar) ── */
function SearchBanner() {
  return (
    <div style={{ background: '#fff', borderBottom: '1.5px solid var(--g200)', padding: '16px 40px' }}>
      <div className="w-search-bar" style={{ maxWidth: '900px' }}>
        <div className="w-search-field">
          <div className="w-sf-lbl">الوجهة</div>
          <div className="w-sf-val" style={{ width: '100px' }} />
        </div>
        <div className="w-search-field">
          <div className="w-sf-lbl">التاريخ</div>
          <div className="w-sf-val" style={{ width: '80px' }} />
        </div>
        <div className="w-search-field">
          <div className="w-sf-lbl">المسافرون</div>
          <div className="w-sf-val" style={{ width: '60px' }} />
        </div>
        <div className="w-search-field">
          <div className="w-sf-lbl">الميزانية</div>
          <div className="w-sf-val" style={{ width: '70px' }} />
        </div>
        <div className="w-search-btn">تعديل البحث</div>
      </div>
    </div>
  );
}

/* ── Filter Sidebar ── */
function FilterSidebar() {
  return (
    <div className="w-sidebar">
      <div className="w-sidebar-hdr">
        <span className="w-sidebar-title">الفلاتر</span>
        <span className="w-sidebar-reset">مسح الكل</span>
      </div>

      {/* نوع الرحلة */}
      <div className="w-filter-section">
        <div className="w-filter-title">نوع الرحلة</div>
        {[['ترفيهية', 14], ['دينية', 8], ['ثقافية', 6], ['نايل كروز', 4], ['شهر عسل', 5]].map(([lbl, cnt], i) => (
          <div key={i} className="w-filter-row">
            <div className={`w-filter-check${i < 2 ? ' on' : ''}`} />
            <span className="w-filter-lbl">{lbl}</span>
            <span className="w-filter-count">{cnt}</span>
          </div>
        ))}
      </div>

      {/* السعر */}
      <div className="w-filter-section">
        <div className="w-filter-title">نطاق السعر</div>
        <div className="w-range-bar">
          <div className="w-range-fill" />
        </div>
        <div className="w-range-vals">
          <span>2,000 ج</span>
          <span>40,000 ج</span>
        </div>
      </div>

      {/* مدة الرحلة */}
      <div className="w-filter-section">
        <div className="w-filter-title">مدة الرحلة</div>
        {[['1–3 أيام', 7], ['4–7 أيام', 18], ['أكثر من أسبوع', 12]].map(([lbl, cnt], i) => (
          <div key={i} className="w-filter-row">
            <div className={`w-filter-check${i === 1 ? ' on' : ''}`} />
            <span className="w-filter-lbl">{lbl}</span>
            <span className="w-filter-count">{cnt}</span>
          </div>
        ))}
      </div>

      {/* نوع الإقامة */}
      <div className="w-filter-section">
        <div className="w-filter-title">نوع الإقامة</div>
        {[['5 نجوم', 10], ['4 نجوم', 15], ['3 نجوم', 12]].map(([lbl, cnt], i) => (
          <div key={i} className="w-filter-row">
            <div className={`w-filter-check${i === 0 ? ' on' : ''}`} />
            <span className="w-filter-lbl">{lbl}</span>
            <span className="w-filter-count">{cnt}</span>
          </div>
        ))}
      </div>

      {/* التقييم */}
      <div className="w-filter-section">
        <div className="w-filter-title">التقييم</div>
        {[['5 نجوم', 9], ['4+ نجوم', 22], ['3+ نجوم', 37]].map(([lbl, cnt], i) => (
          <div key={i} className="w-filter-row">
            <div className={`w-filter-check${i === 1 ? ' on' : ''}`} />
            <span className="w-filter-lbl">{lbl}</span>
            <span className="w-filter-count">{cnt}</span>
          </div>
        ))}
      </div>

      {/* Apply */}
      <div style={{ padding: '16px 18px' }}>
        <div className="w-bw-cta">تطبيق الفلاتر</div>
      </div>
    </div>
  );
}

/* ── Results Area ── */
function ResultsArea() {
  const tours = [
    { name: 'رحلة شرم الشيخ الفاخرة', dest: 'شرم الشيخ', price: '8,500 ج', days: '5 أيام', type: 'ترفيهية', rating: 5 },
    { name: 'برنامج عمرة رمضان المبارك', dest: 'مكة المكرمة', price: '35,000 ج', days: '10 أيام', type: 'دينية', rating: 5 },
    { name: 'نايل كروز الأقصر وأسوان', dest: 'الأقصر — أسوان', price: '12,000 ج', days: '7 أيام', type: 'نايل كروز', rating: 4 },
    { name: 'القاهرة التاريخية', dest: 'القاهرة', price: '4,200 ج', days: '3 أيام', type: 'ثقافية', rating: 4 },
    { name: 'شهر عسل دهب الساحر', dest: 'دهب', price: '9,800 ج', days: '6 أيام', type: 'شهر عسل', rating: 5 },
    { name: 'مرسى علم الغوص والاسترخاء', dest: 'مرسى علم', price: '7,500 ج', days: '4 أيام', type: 'ترفيهية', rating: 4 },
    { name: 'الإسكندرية الساحرة', dest: 'الإسكندرية', price: '3,800 ج', days: '2 أيام', type: 'ترفيهية', rating: 4 },
    { name: 'برنامج أسوان والنوبة', dest: 'أسوان', price: '6,900 ج', days: '4 أيام', type: 'ثقافية', rating: 5 },
  ];

  return (
    <div>
      {/* Sort bar */}
      <div className="w-sort-bar">
        <span className="w-results-count">37 رحلة متاحة</span>
        <div className="w-sort-options">
          <span className="w-sort-opt">الأكثر حجزاً</span>
          <span className="w-sort-opt on">السعر: من الأقل</span>
          <span className="w-sort-opt">التقييم</span>
          <span className="w-sort-opt">المدة</span>
        </div>
      </div>

      {/* Cards grid — 2 columns inside the results area */}
      <div className="w-grid-2">
        {tours.map((t, i) => (
          <div key={i} className="w-tour-card" style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="w-tour-img" style={{ width: '180px', height: '100%', minHeight: '160px', flexShrink: 0 }}>
              [صورة]
              <div className="w-tour-badge type">{t.type}</div>
            </div>
            <div className="w-tour-body" style={{ flex: 1 }}>
              <div className="w-tour-name">{t.name}</div>
              <div className="w-tour-dest">📍 {t.dest}</div>
              {/* Rating */}
              <div className="w-tour-rating" style={{ marginBottom: '8px' }}>
                <div className="w-stars">
                  {[...Array(5)].map((_, si) => (
                    <div key={si} className={`w-star${si < t.rating ? ' on' : ''}`} />
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)' }}>{t.rating}.0</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '8px' }}>
                <div>
                  <div className="w-tour-price-lbl">يبدأ من</div>
                  <div className="w-tour-price">{t.price}</div>
                  <div className="w-tour-loyalty">⭐ +10 نقاط</div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div className="w-tour-duration">{t.days}</div>
                  <div className="sp-sm" />
                  <div className="w-tour-cta">التفاصيل</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
        {[1, 2, 3, '...', 5].map((p, i) => (
          <div
            key={i}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              border: '1.5px solid', borderColor: i === 0 ? 'var(--g700)' : 'var(--g200)',
              background: i === 0 ? 'var(--g800)' : '#fff',
              color: i === 0 ? '#fff' : 'var(--g600)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: '500',
            }}
          >{p}</div>
        ))}
      </div>
    </div>
  );
}

export default function W02_SearchResults() {
  return (
    <>
      <Navbar variant="guest" activeLink="tours" />
      <SearchBanner />
      <div className="w-container">
        {/* Breadcrumb */}
        <div className="w-breadcrumb">
          <span>الرئيسية</span>
          <span className="w-breadcrumb-sep">/</span>
          <span className="w-breadcrumb-cur">نتائج البحث — "شرم الشيخ"</span>
        </div>

        {/* Sidebar + Results */}
        <div className="w-layout-sidebar" style={{ paddingBottom: '48px' }}>
          <FilterSidebar />
          <ResultsArea />
        </div>
      </div>
      <Footer />
      <LiveChat />
    </>
  );
}
