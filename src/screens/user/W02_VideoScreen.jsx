import React from 'react';

/* ─────────────────────────────────────────────────────
   W02 — شاشة الفيديو
   No header · No footer · No hero
   Font: Cairo
   Video: Portrait 9:16 (مصوّر من الموبايل)
   Desktop 1260px
───────────────────────────────────────────────────── */

const FONT = "'Cairo', 'IBM Plex Sans', sans-serif";

export default function W02_VideoScreen() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');`}</style>

      <div style={{
        background: 'var(--g100)',
        minHeight: 780,
        display: 'flex',
        fontFamily: FONT,
      }}>

        {/* Left: Video column */}
        <div style={{
          width: 360,
          flexShrink: 0,
          background: 'var(--g900)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 24px',
        }}>
          <PortraitVideo />
        </div>

        {/* Right: Info column */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 52px',
        }}>
          <InfoPanel />
        </div>

      </div>
    </>
  );
}

/* ── Portrait Video Player (9:16) ── */
function PortraitVideo() {
  // 9:16 ratio — phone video
  const width = 260;
  const height = Math.round(width * 16 / 9); // 462px

  return (
    <div style={{
      width,
      height,
      borderRadius: 18,
      background: 'var(--g700)',
      position: 'relative',
      overflow: 'hidden',
      border: '2px solid rgba(255,255,255,.08)',
      boxShadow: '0 20px 60px rgba(0,0,0,.4)',
    }}>
      {/* Gradient bg simulating video thumbnail */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, var(--g600) 0%, var(--g800) 55%, var(--g900) 100%)',
      }} />

      {/* Decorative pattern */}
      <div style={{
        position: 'absolute', top: -30, right: -30,
        width: 160, height: 160, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.06)',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 100, height: 100, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.04)',
      }} />

      {/* Resolution label */}
      <div style={{
        position: 'absolute', top: 10, left: 0, right: 0,
        textAlign: 'center',
        fontFamily: FONT,
        fontSize: 8,
        color: 'rgba(255,255,255,.2)',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
      }}>9 : 16 — فيديو موبايل</div>

      {/* Play button */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 56, height: 56,
        borderRadius: '50%',
        background: 'rgba(255,255,255,.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(0,0,0,.3)',
        zIndex: 2,
      }}>
        <div style={{
          width: 0, height: 0,
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: '17px solid var(--g800)',
          marginRight: -4,
        }} />
      </div>

      {/* Bottom title overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: '32px 14px 14px',
        background: 'linear-gradient(to top, rgba(0,0,0,.85), transparent)',
      }}>
        <div style={{
          fontFamily: FONT, fontSize: 15, fontWeight: 700,
          color: '#fff', marginBottom: 3,
        }}>كظم الغيظ</div>
        <div style={{
          fontFamily: FONT, fontSize: 10,
          color: 'rgba(255,255,255,.55)',
        }}>٨ دقائق · حلقة ١ من ٣</div>
      </div>

      {/* Minimal progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 3, background: 'rgba(255,255,255,.15)',
      }}>
        <div style={{
          width: '4%', height: '100%',
          background: '#fff', borderRadius: 2,
        }} />
      </div>
    </div>
  );
}

/* ── Info Panel ── */
function InfoPanel() {
  return (
    <div style={{ maxWidth: 460 }}>

      {/* Back link */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        marginBottom: 32,
        fontFamily: FONT, fontSize: 12, color: 'var(--g400)',
        cursor: 'pointer',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          border: '1.5px solid var(--g200)',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, color: 'var(--g600)',
        }}>←</div>
        العودة للموضوعات
      </div>

      {/* Topic tag */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 12px', borderRadius: 20,
        border: '1px solid var(--g200)', background: '#fff',
        fontFamily: FONT, fontSize: 10, color: 'var(--g500)',
        marginBottom: 14,
      }}>
        <span>أخلاق · نفس</span>
        <span style={{ color: 'var(--g300)' }}>·</span>
        <span>٨ دقائق</span>
      </div>

      {/* Title */}
      <div style={{
        fontFamily: FONT, fontSize: 30, fontWeight: 900,
        color: 'var(--g900)', lineHeight: 1.35, marginBottom: 12,
      }}>كظم الغيظ</div>

      <div style={{
        fontFamily: FONT, fontSize: 14, fontWeight: 600,
        color: 'var(--g600)', marginBottom: 24,
      }}>فن السيطرة على النفس</div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--g200)', marginBottom: 24 }} />

      {/* Ayah */}
      <div style={{
        padding: '16px 18px',
        background: 'var(--g100)',
        border: '1.5px dashed var(--g300)',
        borderRadius: 14,
        marginBottom: 28,
        textAlign: 'right',
        direction: 'rtl',
      }}>
        <div style={{
          fontFamily: FONT, fontSize: 8, color: 'var(--g400)',
          textTransform: 'uppercase', letterSpacing: '.1em',
          marginBottom: 8, direction: 'ltr', textAlign: 'left',
        }}>آية قرآنية</div>
        <div style={{
          fontFamily: FONT, fontSize: 14, fontWeight: 600,
          color: 'var(--g800)', lineHeight: 1.9,
        }}>
          ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾
        </div>
        <div style={{
          fontFamily: FONT, fontSize: 10, color: 'var(--g400)',
          marginTop: 6,
        }}>سورة آل عمران · الآية ١٣٤</div>
      </div>

      {/* Progress in series */}
      <div style={{ marginBottom: 28 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 8,
          fontFamily: FONT,
        }}>
          <div style={{ fontSize: 11, color: 'var(--g500)' }}>تقدّمك في السلسلة</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--g700)' }}>١ / ٣</div>
        </div>
        <div style={{
          height: 5, background: 'var(--g200)', borderRadius: 3, overflow: 'hidden',
        }}>
          <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 3 }} />
        </div>
      </div>

      {/* Related topics */}
      <div>
        <div style={{
          fontFamily: FONT, fontSize: 10, color: 'var(--g400)',
          textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12,
        }}>الحلقات التالية</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة', duration: '١١ دق', num: '٢' },
            { title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر', duration: '٩ دق', num: '٣' },
          ].map((ep, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 14px', borderRadius: 12,
              border: '1.5px solid var(--g200)', background: '#fff',
              opacity: 0.65,
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                border: '1.5px solid var(--g300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT, fontSize: 9, color: 'var(--g400)', flexShrink: 0,
              }}>{ep.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: 'var(--g700)' }}>{ep.title}</div>
                <div style={{ fontFamily: FONT, fontSize: 10, color: 'var(--g400)' }}>{ep.subtitle}</div>
              </div>
              <div style={{
                fontFamily: FONT, fontSize: 9, color: 'var(--g400)',
              }}>{ep.duration} · 🔒</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
