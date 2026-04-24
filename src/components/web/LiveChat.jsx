import React from 'react';

/*
  LiveChat — Desktop floating support widget
  Per FRD FR-SUPPORT-001 + FR-SUPPORT-002:
    - WhatsApp floating button (always visible)
    - Live Chat bubble (optional, via Intercom/Freshchat)
  
  Props:
    state: 'closed' | 'chat_open' | 'wa_open'  (default: 'closed')
*/
export default function LiveChat({ state = 'closed' }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      left: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10,
      zIndex: 999,
      pointerEvents: 'none',
    }}>

      {/* ── Live Chat panel (open state) ── */}
      {state === 'chat_open' && (
        <div style={{
          width: 320,
          background: '#fff',
          borderRadius: 16,
          border: '1.5px solid var(--g200)',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,.14)',
          marginBottom: 4,
        }}>
          {/* Chat header */}
          <div style={{
            background: 'var(--g800)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--g600)', border: '2px solid var(--g500)', position: 'relative' }}>
                {/* Online dot */}
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: 9, height: 9, borderRadius: '50%', background: '#4ade80', border: '2px solid var(--g800)' }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>خدمة العملاء</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>متاح الآن · رد خلال دقائق</div>
              </div>
            </div>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 12, color: '#fff' }}>✕</div>
          </div>

          {/* Messages area */}
          <div style={{ padding: '14px 14px 10px', background: 'var(--g100)', minHeight: 160, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Agent message */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
              <div style={{ background: '#fff', borderRadius: '12px 12px 12px 2px', padding: '8px 12px', maxWidth: '75%', border: '1px solid var(--g200)' }}>
                <div style={{ fontSize: 12, color: 'var(--g800)', lineHeight: 1.5 }}>أهلاً! كيف يمكنني مساعدتك اليوم؟</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', marginTop: 3 }}>10:32 ص</div>
              </div>
            </div>
            {/* User message */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ background: 'var(--g700)', borderRadius: '12px 12px 2px 12px', padding: '8px 12px', maxWidth: '75%' }}>
                <div style={{ fontSize: 12, color: '#fff', lineHeight: 1.5 }}>أريد الاستفسار عن رحلة شرم الشيخ</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', marginTop: 3, textAlign: 'right' }}>10:33 ص</div>
              </div>
            </div>
            {/* Typing indicator */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
              <div style={{ background: '#fff', borderRadius: '12px 12px 12px 2px', padding: '10px 14px', border: '1px solid var(--g200)' }}>
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--g400)' }} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div style={{ padding: '10px 12px', borderTop: '1px solid var(--g200)', background: '#fff', display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ flex: 1, height: 36, background: 'var(--g100)', border: '1.5px solid var(--g200)', borderRadius: 20, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
              <div style={{ height: 8, background: 'var(--g300)', borderRadius: 4, width: '60%' }} />
            </div>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--g800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '9px solid #fff', marginRight: -2 }} />
            </div>
          </div>

          {/* Powered by */}
          <div style={{ padding: '6px 14px', background: '#fff', borderTop: '1px solid var(--g100)', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textAlign: 'center' }}>
            Powered by Intercom
          </div>
        </div>
      )}

      {/* ── WhatsApp panel (open state) ── */}
      {state === 'wa_open' && (
        <div style={{
          width: 280,
          background: '#fff',
          borderRadius: 16,
          border: '1.5px solid var(--g200)',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,.14)',
          marginBottom: 4,
        }}>
          <div style={{ background: '#25D366', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💬</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>واتساب — الإيمان للسياحة</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.75)' }}>نرد خلال دقائق · متاح 9ص–9م</div>
            </div>
          </div>
          <div style={{ padding: 14 }}>
            <div style={{ background: '#f0f8f0', border: '1px solid #d0e8d0', borderRadius: 12, padding: '10px 12px', marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: '#2d6a2d', lineHeight: 1.5 }}>أهلاً! ابدأ المحادثة وسيرد عليك فريقنا فوراً.</div>
            </div>
            <div style={{ height: 40, background: '#25D366', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <div style={{ fontSize: 15 }}>💬</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>ابدأ المحادثة</div>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textAlign: 'center', marginTop: 8 }}>سيتم فتح واتساب تلقائياً</div>
          </div>
        </div>
      )}

      {/* ── Floating buttons row ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 48, height: 48,
              borderRadius: '50%',
              background: 'var(--g800)',
              border: '2.5px solid var(--g600)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,.22)',
              cursor: 'pointer',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" opacity=".9"/>
              </svg>
            </div>
            <div style={{ position: 'absolute', top: -3, right: -3, width: 16, height: 16, borderRadius: '50%', background: '#ef4444', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 8, fontWeight: 700, color: '#fff' }}>1</div>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)', whiteSpace: 'nowrap' }}>Live Chat</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{
            width: 48, height: 48,
            borderRadius: '50%',
            background: '#25D366',
            border: '2.5px solid #1da851',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(37,211,102,.35)',
            cursor: 'pointer',
            fontSize: 22,
          }}>💬</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)', whiteSpace: 'nowrap' }}>واتساب</div>
        </div>
      </div>
    </div>
  );
}
