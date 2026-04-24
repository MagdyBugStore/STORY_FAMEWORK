import React from 'react';

const NAV_ITEMS = [
  { id: 'dashboard', icon: '▦', label: 'Dashboard' },
  { id: 'bookings', icon: '📋', label: 'الحجوزات' },
  { id: 'tours', icon: '🗺', label: 'الرحلات والوجهات' },
  { id: 'users', icon: '👥', label: 'المستخدمون' },
  { id: 'loyalty', icon: '⭐', label: 'الولاء والعملات' },
  { id: 'cms', icon: '📝', label: 'إدارة المحتوى' },
  { id: 'static-pages', icon: '📄', label: 'الصفحات الثابتة' },
  { id: 'reviews', icon: '⭐', label: 'التقييمات' },
  { id: 'flights', icon: '✈️', label: 'الطيران' },
  { id: 'hotels', icon: '🏨', label: 'الفنادق' },
  { id: 'coupons', icon: '🏷️', label: 'أكواد الخصم' },
  { id: 'broadcast', icon: '📢', label: 'إشعارات جماعية' },
  { id: 'currency', icon: '💱', label: 'العملات' },
  { id: 'reports', icon: '📊', label: 'التقارير' },
  { id: 'monitoring', icon: '🖥', label: 'المراقبة' },
  { id: 'settings', icon: '⚙', label: 'الإعدادات' },
];
export function AdminSidebar({ active = 'dashboard' }) {
  return (
    <div
      style={{
        width: 220,
        background: 'var(--g900)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          padding: '20px 18px 16px',
          borderBottom: '1px solid rgba(255,255,255,.07)',
        }}
      >
        <div style={{ width: 100, height: 24, background: 'var(--g600)', borderRadius: 5, marginBottom: 4 }} />
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 9,
            color: 'var(--g500)',
            letterSpacing: '.08em',
            textTransform: 'uppercase',
          }}
        >
          Admin Panel v1.1
        </div>
      </div>

      <div style={{ flex: 1, padding: '10px 0' }}>
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 18px',
                background: isActive ? 'rgba(255,255,255,.08)' : 'transparent',
                borderRight: isActive ? '3px solid #fff' : '3px solid transparent',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  width: 18,
                  textAlign: 'center',
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                {item.icon}
              </span>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: isActive ? '#fff' : 'var(--g500)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {item.label}
              </span>
              {item.id === 'monitoring' && (
                <div
                  style={{
                    marginRight: 'auto',
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--mono)',
                    fontSize: 8,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  3
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          padding: '14px 18px',
          borderTop: '1px solid rgba(255,255,255,.07)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'var(--g600)',
            border: '1.5px solid var(--g500)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: '#fff',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Super Admin
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', marginTop: 1 }}>
            admin@el-eman.com
          </div>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>↩</div>
      </div>
    </div>
  );
}

export function AdminTopbar({ breadcrumb = [], actions = null }) {
  return (
    <div
      style={{
        height: 52,
        background: '#fff',
        borderBottom: '1.5px solid var(--g200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11 }}>
        <span style={{ color: 'var(--g500)' }}>الإيمان للسياحة</span>
        {breadcrumb.map((b, i) => (
          <React.Fragment key={`${b}-${i}`}>
            <span style={{ color: 'var(--g300)' }}>/</span>
            <span
              style={{
                color: i === breadcrumb.length - 1 ? 'var(--g800)' : 'var(--g500)',
                fontWeight: i === breadcrumb.length - 1 ? 600 : 400,
              }}
            >
              {b}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            position: 'relative',
            width: 32,
            height: 32,
            borderRadius: 8,
            background: 'var(--g100)',
            border: '1px solid var(--g200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: 14 }}>🔔</span>
          <div
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#ef4444',
              border: '1.5px solid #fff',
            }}
          />
        </div>
        {actions}
      </div>
    </div>
  );
}

export function AdminFrame({ active, breadcrumb = [], actions = null, children }) {
  return (
    <div style={{ display: 'flex', height: 780, background: 'var(--g100)', overflow: 'hidden' }}>
      <AdminSidebar active={active} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <AdminTopbar breadcrumb={breadcrumb} actions={actions} />
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '24px' }}>{children}</div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, sub, trend, color = 'var(--g800)' }) {
  const isUp = trend > 0;
  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid var(--g200)', padding: '18px 20px' }}>
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: 'var(--g400)',
          textTransform: 'uppercase',
          letterSpacing: '.07em',
          marginBottom: 10,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 26, fontWeight: 700, color, marginBottom: 6 }}>{value}</div>
      {(sub || trend !== undefined) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {trend !== undefined && (
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: isUp ? '#16a34a' : '#dc2626',
                display: 'flex',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <span>{isUp ? '↑' : '↓'}</span>
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
          {sub && <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>{sub}</span>}
        </div>
      )}
    </div>
  );
}

export function AdminBtn({ label, primary = false, danger = false }) {
  const bg = danger ? '#dc2626' : primary ? 'var(--g800)' : '#fff';
  const color = danger || primary ? '#fff' : 'var(--g700)';
  const border = danger || primary ? 'none' : '1.5px solid var(--g300)';
  return (
    <div
      style={{
        padding: '8px 16px',
        background: bg,
        color,
        border,
        borderRadius: 8,
        fontFamily: 'var(--mono)',
        fontSize: 11,
        fontWeight: primary || danger ? 600 : 400,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      }}
    >
      {label}
    </div>
  );
}
