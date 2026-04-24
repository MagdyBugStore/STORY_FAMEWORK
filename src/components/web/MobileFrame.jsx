import React from 'react';

export function MobileFrame({ children, url = 'el-eman.com' }) {
  return (
    <div style={{ width: 390, borderRadius: 16, overflow: 'hidden', border: '2px solid var(--g300)', background: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,.12)' }}>
      <div style={{ height: 36, background: 'var(--g100)', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: 'var(--g700)' }}>9:41</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[12,8,12].map((w,i) => <div key={i} style={{ width: w, height: 4, background: 'var(--g400)', borderRadius: 2 }} />)}
        </div>
      </div>
      <div style={{ height: 36, background: 'var(--g100)', borderBottom: '1.5px solid var(--g200)', display: 'flex', alignItems: 'center', padding: '0 12px', flexShrink: 0 }}>
        <div style={{ flex: 1, height: 22, background: '#fff', border: '1px solid var(--g200)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>{url}</span>
        </div>
      </div>
      <div style={{ maxHeight: 700, overflowY: 'auto', overflowX: 'hidden', background: 'var(--g100)', position: 'relative', transform: 'translate3d(0,0,0)', contain: 'paint', isolation: 'isolate', clipPath: 'inset(0)' }}>
        {children}
      </div>
    </div>
  );
}

export function MobileNavbar({ showBack = false, title = '' }) {
  return (
    <div style={{ height: 52, background: '#fff', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', position: 'sticky', top: 0, zIndex: 10, flexShrink: 0 }}>
      {showBack ? <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--g100)', border: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--g600)' }}>←</div>
        : <div style={{ width: 88, height: 22, background: 'var(--g200)', borderRadius: 4 }} />}
      {title && <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--g800)' }}>{title}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)', border: '1px solid var(--g300)', padding: '3px 8px', borderRadius: 6 }}>EGP</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 4 }}>
          {[20,14,20].map((w,i) => <div key={i} style={{ width: w, height: 2, background: 'var(--g600)', borderRadius: 1 }} />)}
        </div>
      </div>
    </div>
  );
}

export function MobileNavbarUser({ showBack = false, title = '' }) {
  return (
    <div style={{ height: 52, background: '#fff', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', position: 'sticky', top: 0, zIndex: 10, flexShrink: 0 }}>
      {showBack ? <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--g100)', border: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--g600)' }}>←</div>
        : <div style={{ width: 88, height: 22, background: 'var(--g200)', borderRadius: 4 }} />}
      {title && <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--g800)', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>{title}</div>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>⭐ 120</div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--g200)', border: '1.5px solid var(--g300)' }} />
      </div>
    </div>
  );
}

export function MobileFooter() {
  return (
    <div style={{ background: 'var(--g800)', padding: '20px 16px' }}>
      <div style={{ width: 80, height: 20, background: 'var(--g600)', borderRadius: 4, marginBottom: 12 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px', marginBottom: 14 }}>
        {['الرئيسية','الوجهات','رحلاتنا','حجز طيران','حجز فنادق','من نحن','المدونة','تواصل'].map((l,i) => (
          <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{l}</div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--g700)', paddingTop: 12, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>© 2026 El-Eman Tourist</div>
    </div>
  );
}

export function MobileStickyBar({ price, priceLabel = '/ للشخص', ctaLabel = 'احجز الآن', ghost = '' }) {
  return (
    <div style={{ position: 'sticky', bottom: 0, background: '#fff', borderTop: '1.5px solid var(--g200)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, zIndex: 20 }}>
      {price && <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>يبدأ من</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 700, color: 'var(--g800)' }}>{price}</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>{priceLabel}</div>
      </div>}
      {ghost && <div style={{ flex: 1, padding: '12px 0', border: '1.5px solid var(--g300)', borderRadius: 10, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g600)' }}>{ghost}</div>}
      <div style={{ flex: price ? 1 : 2, padding: '13px 0', background: 'var(--g800)', borderRadius: 10, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600, color: '#fff' }}>{ctaLabel}</div>
    </div>
  );
}

export function MobileStepDots({ total = 5, active = 1 }) {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--g200)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', whiteSpace: 'nowrap' }}>الخطوة {active} من {total}</div>
      <div style={{ flex: 1, display: 'flex', gap: 4 }}>
        {[...Array(total)].map((_,i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < active ? 'var(--g700)' : 'var(--g200)' }} />)}
      </div>
    </div>
  );
}

/* ── Live Chat + WhatsApp floating widget ── */
export function MobileLiveChat({ state = 'closed' }) {
  return (
    <div style={{ position: 'relative' }}>
      {state === 'chat_open' && (
        <div style={{ margin: '0 12px 8px', background: '#fff', borderRadius: 14, border: '1.5px solid var(--g200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }}>
          <div style={{ background: 'var(--g800)', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--g600)', border: '2px solid var(--g500)', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderRadius: '50%', background: '#4ade80', border: '2px solid var(--g800)' }} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>خدمة العملاء</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)' }}>متاح · رد خلال دقائق</div>
              </div>
            </div>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: '#fff' }}>✕</div>
          </div>
          <div style={{ padding: '12px', background: 'var(--g100)', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 130 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
              <div style={{ background: '#fff', borderRadius: '10px 10px 10px 2px', padding: '7px 10px', border: '1px solid var(--g200)' }}>
                <div style={{ fontSize: 11, color: 'var(--g800)', lineHeight: 1.5 }}>أهلاً! كيف يمكنني مساعدتك؟</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ background: 'var(--g700)', borderRadius: '10px 10px 2px 10px', padding: '7px 10px' }}>
                <div style={{ fontSize: 11, color: '#fff', lineHeight: 1.5 }}>استفسار عن رحلة شرم الشيخ</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
              <div style={{ background: '#fff', borderRadius: '10px 10px 10px 2px', padding: '8px 12px', border: '1px solid var(--g200)' }}>
                <div style={{ display: 'flex', gap: 3 }}>{[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--g400)' }} />)}</div>
              </div>
            </div>
          </div>
          <div style={{ padding: '8px 10px', borderTop: '1px solid var(--g200)', background: '#fff', display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ flex: 1, height: 32, background: 'var(--g100)', border: '1.5px solid var(--g200)', borderRadius: 16, display: 'flex', alignItems: 'center', padding: '0 10px' }}>
              <div style={{ height: 7, background: 'var(--g300)', borderRadius: 3, width: '50%' }} />
            </div>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--g800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '7px solid #fff', marginRight: -2 }} />
            </div>
          </div>
          <div style={{ padding: '5px', background: '#fff', fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)', textAlign: 'center' }}>Powered by Intercom</div>
        </div>
      )}
      {state === 'wa_open' && (
        <div style={{ margin: '0 12px 8px', background: '#fff', borderRadius: 14, border: '1.5px solid var(--g200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }}>
          <div style={{ background: '#25D366', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💬</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>واتساب — الإيمان</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.75)' }}>رد خلال دقائق</div>
            </div>
          </div>
          <div style={{ padding: 12 }}>
            <div style={{ background: '#f0f8f0', border: '1px solid #d0e8d0', borderRadius: 10, padding: '8px 10px', marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: '#2d6a2d', lineHeight: 1.5 }}>أهلاً! راسلنا وسيرد فريقنا فوراً.</div>
            </div>
            <div style={{ height: 38, background: '#25D366', borderRadius: 19, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <span style={{ fontSize: 14 }}>💬</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>ابدأ المحادثة</span>
            </div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '8px 14px 4px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--g800)', border: '2px solid var(--g600)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 12px rgba(0,0,0,.2)' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" opacity=".9"/></svg>
          </div>
          <div style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: '50%', background: '#ef4444', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 7, fontWeight: 700, color: '#fff' }}>1</div>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#25D366', border: '2px solid #1da851', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 12px rgba(37,211,102,.35)', fontSize: 20 }}>💬</div>
      </div>
    </div>
  );
}

/* ── Filter Bottom Sheet ── */
export function MobileFilterDrawer({ type = 'tours' }) {
  const tourFilters = [
    { title: 'نوع الرحلة', options: [['ترفيهية',14,true],['دينية',8,true],['ثقافية',6,false],['نايل كروز',4,false],['شهر عسل',5,false]] },
    { title: 'مدة الرحلة', options: [['1–3 أيام',7,false],['4–7 أيام',18,true],['أكثر من أسبوع',12,false]] },
    { title: 'نوع الإقامة', options: [['5 نجوم',10,true],['4 نجوم',15,false],['3 نجوم',12,false]] },
  ];
  const flightFilters = [
    { title: 'عدد التوقفات', options: [['بدون توقف',12,true],['توقف واحد',28,true],['توقفان',8,false]] },
    { title: 'شركة الطيران', options: [['مصر للطيران',18,true],['فلاي دبي',11,false],['طيران ناس',9,false]] },
    { title: 'الأمتعة', options: [['حقيبة مجانية',22,true],['بتكلفة إضافية',26,false]] },
  ];
  const hotelFilters = [
    { title: 'تصنيف الفندق', options: [['5 نجوم',8,true],['4 نجوم',14,true],['3 نجوم',11,false]] },
    { title: 'نوع الإقامة', options: [['إفطار مشمول',19,true],['نصف إقامة',12,false],['بدون وجبات',22,false]] },
    { title: 'المرافق', options: [['شاطئ خاص',14,true],['بركة سباحة',28,true],['سبا',18,false]] },
  ];
  const filters = type === 'flights' ? flightFilters : type === 'hotels' ? hotelFilters : tourFilters;

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 30, top: -700 }} />
      <div style={{ position: 'relative', zIndex: 31, background: '#fff', borderRadius: '20px 20px 0 0', boxShadow: '0 -8px 32px rgba(0,0,0,.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 0' }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--g300)' }} />
        </div>
        <div style={{ padding: '12px 16px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--g200)' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--g800)' }}>الفلاتر</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', textDecoration: 'underline' }}>مسح الكل</div>
        </div>
        {/* Price range */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g100)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, color: 'var(--g600)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>
            {type === 'flights' ? 'سعر التذكرة' : type === 'hotels' ? 'السعر / الليلة' : 'نطاق السعر'}
          </div>
          <div style={{ position: 'relative', height: 4, background: 'var(--g200)', borderRadius: 2, margin: '16px 8px' }}>
            <div style={{ position: 'absolute', right: '10%', left: '30%', height: '100%', background: 'var(--g700)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translate(50%,-50%)', width: 18, height: 18, borderRadius: '50%', background: '#fff', border: '2.5px solid var(--g700)', boxShadow: '0 2px 6px rgba(0,0,0,.15)' }} />
            <div style={{ position: 'absolute', left: '30%', top: '50%', transform: 'translate(-50%,-50%)', width: 18, height: 18, borderRadius: '50%', background: '#fff', border: '2.5px solid var(--g700)', boxShadow: '0 2px 6px rgba(0,0,0,.15)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            {[type==='flights'?'900 ج':type==='hotels'?'800 ج':'2,000 ج', type==='flights'?'5,000 ج':type==='hotels'?'8,000 ج':'35,000 ج'].map((v,i) => (
              <div key={i} style={{ background: 'var(--g100)', border: '1.5px solid var(--g300)', borderRadius: 8, padding: '5px 10px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g700)' }}>{v}</div>
            ))}
          </div>
        </div>
        {filters.map((section, si) => (
          <div key={si} style={{ padding: '12px 16px', borderBottom: si < filters.length-1 ? '1px solid var(--g100)' : 'none' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, color: 'var(--g600)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>{section.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {section.options.map(([label, count, selected], oi) => (
                <div key={oi} style={{ padding: '6px 12px', borderRadius: 20, border: `1.5px solid ${selected?'var(--g800)':'var(--g300)'}`, background: selected?'var(--g800)':'#fff', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: selected?'#fff':'var(--g600)', fontWeight: selected?600:400 }}>{label}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: selected?'var(--g300)':'var(--g400)' }}>({count})</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ padding: '14px 16px 20px', background: '#fff' }}>
          <div style={{ height: 48, background: 'var(--g800)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 600, color: '#fff' }}>تطبيق الفلاتر</span>
            <span style={{ background: 'rgba(255,255,255,.2)', borderRadius: 10, padding: '2px 8px', fontFamily: 'var(--mono)', fontSize: 10, color: '#fff' }}>3 نشطة</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileFilterFAB({ label = 'فلاتر', count = 0 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 16px 12px', position: 'sticky', bottom: 16, zIndex: 20 }}>
      <div style={{ background: 'var(--g800)', color: '#fff', borderRadius: 24, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[14,10,6].map((w,i) => <div key={i} style={{ width: w, height: 2, background: '#fff', borderRadius: 1 }} />)}
        </div>
        {label}
        {count > 0 && <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{count}</div>}
      </div>
    </div>
  );
}

export function MobileWA() {
  return <MobileLiveChat state="closed" />;
}
