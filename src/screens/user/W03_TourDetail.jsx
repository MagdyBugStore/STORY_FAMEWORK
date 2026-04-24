import React from 'react';
import LiveChat from '../../components/web/LiveChat';
import Navbar from '../../components/web/Navbar';
import Footer from '../../components/web/Footer';

/* ─────────────────────────────────────────────────────
   W03 — تفاصيل الرحلة
   Two-column: Main content (scrollable) + Sticky booking widget
   Guest:  زر الحجز يوجّه لصفحة تسجيل الدخول مع note
   User:   زر الحجز نشط + إضافة للمفضلة
   Mobile: Single column — Sticky bottom bar (السعر + احجز الآن)
───────────────────────────────────────────────────── */
function Gallery() {
  return (
    <div className="w-gallery">
      <div className="w-gallery-main">
        [الصورة الرئيسية للرحلة]
        {/* Nav arrows */}
        <div style={{ position: 'absolute', insetInlineStart: '14px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: 'rgba(255,255,255,.85)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g700)' }}>‹</div>
        <div style={{ position: 'absolute', insetInlineEnd: '14px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: 'rgba(255,255,255,.85)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g700)' }}>›</div>
        {/* Gallery count */}
        <div style={{ position: 'absolute', bottom: '12px', insetInlineEnd: '14px', background: 'rgba(0,0,0,.5)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px' }}>1 / 12</div>
      </div>
      <div className="w-gallery-thumbs">
        {[...Array(3)].map((_, i) => <div key={i} className="w-gallery-thumb">[صورة {i + 2}]</div>)}
        <div className="w-gallery-thumb more">+8</div>
      </div>
    </div>
  );
}

/* ── Main content (scrollable) ── */
function TourMainContent() {
  return (
    <div>
      {/* Title area */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span style={{ background: 'var(--g800)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px', borderRadius: '20px' }}>ترفيهية</span>
              <span style={{ background: 'var(--g100)', color: 'var(--g600)', fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px', borderRadius: '20px', border: '1px solid var(--g200)' }}>5 أيام</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--g800)', marginBottom: '6px' }}>
              رحلة شرم الشيخ الفاخرة — فندق 5 نجوم
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="w-tour-rating">
                <div className="w-stars">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-star on" />)}
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--g500)' }}>5.0 (48 تقييم)</span>
              </div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g500)' }}>📍 شرم الشيخ، سيناء</span>
            </div>
          </div>
          {/* Fav button — USER only */}
          <div style={{ flexShrink: 0, padding: '8px 16px', border: '1.5px solid var(--g300)', borderRadius: 'var(--rmd)', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g600)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ♡ المفضلة
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-tabs" style={{ marginBottom: '24px' }}>
        <div className="w-tab on">الوصف</div>
        <div className="w-tab">البرنامج اليومي</div>
        <div className="w-tab">ما يشمله السعر</div>
        <div className="w-tab">الشروط</div>
        <div className="w-tab">التقييمات (48)</div>
      </div>

      {/* Tab: الوصف */}
      <div className="w-detail-section">
        <div className="w-detail-section-title">عن الرحلة</div>
        {[100, 85, 90, 70, 60].map((w, i) => (
          <div key={i} className="w-tl" style={{ width: `${w}%` }} />
        ))}
        <div className="sp" />
        {[95, 80, 75, 55].map((w, i) => (
          <div key={i} className="w-tl" style={{ width: `${w}%` }} />
        ))}
      </div>

      {/* Highlights */}
      <div className="w-detail-section">
        <div className="w-detail-section-title">أبرز مميزات الرحلة</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {['إقامة 5 نجوم على الشاطئ', 'طيران مباشر ذهاباً وإياباً', 'جولات سياحية يومية', 'وجبات مشمولة (3 وجبات)', 'خدمة نقل المطار', 'مرشد سياحي متخصص'].map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--g200)', border: '2px solid var(--g400)', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: 'var(--g700)' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Day-by-day itinerary */}
      <div className="w-detail-section">
        <div className="w-detail-section-title">البرنامج اليومي</div>
        {[
          { day: 1, title: 'يوم الوصول — الاستقبال والإقامة', sub: 'استقبال في المطار · نقل للفندق · عشاء ترحيبي' },
          { day: 2, title: 'جولة خليج العقبة وشرم القديم', sub: 'رحلة بحرية · غداء · جولة شرم القديم' },
          { day: 3, title: 'رسان الزجاجي وأم القمارى', sub: 'غوص وسنوركل · استجمام على الشاطئ' },
          { day: 4, title: 'جزيرة تيران والسفاري', sub: 'رحلة لجزيرة تيران · سفاري صحراوية مساءً' },
          { day: 5, title: 'يوم المغادرة', sub: 'إفطار · تسليم الغرفة · نقل للمطار' },
        ].map((d) => (
          <div key={d.day} className="w-day-item">
            <div className="w-day-num">{d.day}</div>
            <div className="w-day-body">
              <div className="w-day-title">{d.title}</div>
              <div className="w-tl w85" />
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g500)', marginTop: '6px' }}>{d.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Includes/Excludes */}
      <div className="w-detail-section">
        <div className="w-detail-section-title">ما يشمله السعر / ما لا يشمله</div>
        <div className="w-inc-grid">
          {[
            [true, 'طيران ذهاباً وإياباً'],
            [false, 'تأشيرات السفر'],
            [true, 'إقامة 5 أيام فندق 5 نجوم'],
            [false, 'المصروف الشخصي'],
            [true, 'وجبات (إفطار + عشاء)'],
            [false, 'الغداء'],
            [true, 'نقل المطار'],
            [false, 'التأمين السياحي'],
          ].map(([inc, lbl], i) => (
            <div key={i} className="w-inc-item">
              <div className={`w-inc-dot${inc ? ' yes' : ''}`} />
              <span className="w-inc-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Booking widget (sticky sidebar) ── */
function BookingWidget({ variant = 'user' }) {
  return (
    <div className="w-booking-widget">
      <div className="w-bw-header">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          <div className="w-bw-price">8,500 ج</div>
          <div className="w-bw-price-lbl">/ للشخص</div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
          <div className="w-bw-loyalty">⭐ تكسب 10 نقاط ولاء</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ background: 'var(--g200)', padding: '2px 8px', borderRadius: '20px', border: '1px solid var(--g200)' }}>EGP</span>
          </div>
        </div>
      </div>
      <div className="w-bw-body">
        {/* Date field */}
        <div className="w-bw-field">
          <div className="w-bw-field-lbl">تاريخ الرحلة</div>
          <div className="w-bw-field-val" />
        </div>
        {/* Travelers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
          <div className="w-bw-field">
            <div className="w-bw-field-lbl">بالغين</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>−</div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '600', color: 'var(--g800)' }}>2</span>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>+</div>
            </div>
          </div>
          <div className="w-bw-field">
            <div className="w-bw-field-lbl">أطفال</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>−</div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '600', color: 'var(--g800)' }}>0</span>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>+</div>
            </div>
          </div>
        </div>

        <hr className="w-bw-divider" />

        {/* Price breakdown */}
        <div className="w-bw-row">
          <span className="w-bw-lbl">8,500 ج × 2 بالغ</span>
          <span className="w-bw-val">17,000 ج</span>
        </div>
        <div className="w-bw-row">
          <span className="w-bw-lbl">رسوم الخدمة</span>
          <span className="w-bw-val">850 ج</span>
        </div>
        <div className="w-bw-total-row">
          <span className="w-bw-total-lbl">الإجمالي</span>
          <span className="w-bw-total-val">17,850 ج</span>
        </div>

        {/* CTA — User vs Guest */}
        {variant === 'user' ? (
          <div className="w-bw-cta">احجز الآن</div>
        ) : (
          <>
            <div className="w-bw-cta">تسجيل الدخول للحجز</div>
            <div className="w-bw-guest-note">
              سيتم الاحتفاظ بالرحلة المختارة بعد تسجيل الدخول
            </div>
          </>
        )}

        {/* Availability note */}
        <div style={{ marginTop: '12px', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)' }}>
          ⚡ 3 أماكن متبقية فقط
        </div>
      </div>
    </div>
  );
}

export default function W03_TourDetail() {
  return (
    <>
      <Navbar variant="user" activeLink="tours" />
      <div className="w-container">
        <div className="w-breadcrumb">
          <span>الرئيسية</span>
          <span className="w-breadcrumb-sep">/</span>
          <span>الوجهات</span>
          <span className="w-breadcrumb-sep">/</span>
          <span>شرم الشيخ</span>
          <span className="w-breadcrumb-sep">/</span>
          <span className="w-breadcrumb-cur">رحلة شرم الشيخ الفاخرة</span>
        </div>

        {/* Gallery — full width */}
        <Gallery />

        {/* Two-column detail layout */}
        <div className="w-detail-layout" style={{ paddingBottom: '60px' }}>
          <TourMainContent />
          <BookingWidget variant="user" />
        </div>
      </div>
      <Footer />
      <LiveChat />
    </>
  );
}
