import React from 'react';

/* ─────────────────────────────────────────────────────
   W02 — شاشة الفيديو
   Desktop 1260px
   الموضوع الافتراضي: كظم الغيظ (يمكن تغييره بالـ props)
───────────────────────────────────────────────────── */

const RELATED = [
  { title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة', duration: '١١ دق', done: false },
  { title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر', duration: '٩ دق', done: false },
];

const CHAPTERS = [
  { time: '0:00', title: 'المقدمة والتعريف', active: true },
  { time: '1:45', title: 'قصة من السيرة النبوية', active: false },
  { time: '4:10', title: 'الآيات والأحاديث', active: false },
  { time: '6:00', title: 'كيف تطبّقها في حياتك؟', active: false },
  { time: '7:30', title: 'الخلاصة والدعاء', active: false },
];

/* ── App Header (shared) ── */
function AppHeader() {
  return (
    <div style={{
      background: 'var(--g900)',
      borderBottom: '1px solid rgba(255,255,255,.06)',
      padding: '0 40px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'rgba(255,255,255,.1)', border: '1.5px solid rgba(255,255,255,.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
        }}>☪</div>
        <div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '.01em' }}>القيم الإسلامية</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Islamic Values · Series</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {['الرئيسية', 'الموضوعات', 'عن المشروع'].map((l, i) => (
          <div key={i} style={{
            padding: '6px 14px', fontFamily: 'var(--mono)', fontSize: 11,
            color: 'rgba(255,255,255,.45)', borderRadius: 6, background: 'transparent',
          }}>{l}</div>
        ))}
        <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,.1)', margin: '0 6px' }} />
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'var(--g600)', border: '2px solid var(--g500)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--mono)', fontSize: 9, color: '#fff',
        }}>أح</div>
      </div>
    </div>
  );
}

/* ── Breadcrumb / Back Bar ── */
function BreadcrumbBar() {
  return (
    <div style={{
      background: '#fff',
      borderBottom: '1px solid var(--g200)',
      padding: '0 40px',
      height: 46,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      {/* Back arrow */}
      <div style={{
        width: 28, height: 28, borderRadius: 8,
        border: '1.5px solid var(--g200)', background: 'var(--g100)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--g600)', marginLeft: 4,
      }}>←</div>

      {/* Breadcrumb */}
      {['الموضوعات', 'كظم الغيظ'].map((crumb, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g300)' }}>/</span>}
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 11,
            color: i === 1 ? 'var(--g800)' : 'var(--g500)',
            fontWeight: i === 1 ? 600 : 400,
          }}>{crumb}</span>
        </React.Fragment>
      ))}

      <div style={{ flex: 1 }} />

      {/* Progress pill */}
      <div style={{
        padding: '4px 12px', borderRadius: 20,
        background: 'var(--g100)', border: '1px solid var(--g200)',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)' }}>التقدم</div>
        <div style={{ width: 60, height: 4, background: 'var(--g200)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: '20%', height: '100%', background: 'var(--g600)', borderRadius: 2 }} />
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g600)', fontWeight: 600 }}>١ / ٣</div>
      </div>
    </div>
  );
}

/* ── Main Video Player ── */
function VideoPlayer() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '16 / 9',
      background: 'var(--g800)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Thumbnail placeholder */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, var(--g700) 0%, var(--g900) 100%)',
      }} />

      {/* Geometric decoration */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 200, height: 200,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.06)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 140, height: 140,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.08)',
      }} />

      {/* Content label */}
      <div style={{
        position: 'absolute',
        top: 12, right: 14,
        fontFamily: 'var(--mono)',
        fontSize: 8,
        color: 'rgba(255,255,255,.25)',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
      }}>VIDEO PLACEHOLDER — ١٢٨٠×٧٢٠</div>

      {/* Topic label (top left) */}
      <div style={{
        position: 'absolute',
        top: 14, left: 14,
        display: 'flex', alignItems: 'center', gap: 6,
        background: 'rgba(0,0,0,.4)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 6,
        padding: '4px 10px',
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', animation: 'pulse 1s infinite' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#fff', letterSpacing: '.06em' }}>حلقة ١ من ٣</span>
      </div>

      {/* Center play button */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 72, height: 72,
        borderRadius: '50%',
        background: 'rgba(255,255,255,.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,.3)',
        zIndex: 2,
      }}>
        <div style={{
          width: 0, height: 0,
          borderTop: '14px solid transparent',
          borderBottom: '14px solid transparent',
          borderLeft: '22px solid var(--g800)',
          marginRight: -4,
        }} />
      </div>

      {/* Title overlay (bottom) */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: '32px 20px 16px',
        background: 'linear-gradient(to top, rgba(0,0,0,.8), transparent)',
      }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>كظم الغيظ</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,.6)' }}>فن السيطرة على النفس · ٨ دقائق</div>
      </div>

      {/* Playback controls bar */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,.75)',
        backdropFilter: 'blur(4px)',
        padding: '8px 16px',
        display: 'none', // will appear on hover in real implementation
      }} />
    </div>
  );
}

/* ── Controls Bar ── */
function ControlsBar() {
  return (
    <div style={{
      background: 'var(--g900)',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}>
      {/* Play */}
      <div style={{
        width: 36, height: 36, borderRadius: '50%',
        background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '11px solid var(--g800)', marginRight: -2 }} />
      </div>

      {/* Time */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,.7)', flexShrink: 0 }}>
        0:22 / 8:00
      </div>

      {/* Progress bar */}
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.15)', borderRadius: 2, position: 'relative' }}>
        <div style={{ width: '4.5%', height: '100%', background: '#fff', borderRadius: 2 }} />
        <div style={{
          position: 'absolute', top: '50%', left: '4.5%',
          transform: 'translate(-50%,-50%)',
          width: 12, height: 12, borderRadius: '50%', background: '#fff',
        }} />
      </div>

      {/* Right controls */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
        {['⏮', '⏭'].map((icon, i) => (
          <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'rgba(255,255,255,.6)' }}>{icon}</div>
        ))}
        <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,.15)' }} />
        <div style={{
          padding: '3px 8px', borderRadius: 4,
          border: '1px solid rgba(255,255,255,.2)',
          fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)',
        }}>1×</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.6)' }}>CC</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.6)' }}>⛶</div>
      </div>
    </div>
  );
}

/* ── Video Info Section ── */
function VideoInfo() {
  return (
    <div style={{ padding: '24px 0' }}>
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--g900)', marginBottom: 6, lineHeight: 1.3 }}>
            كظم الغيظ — فن السيطرة على النفس
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              padding: '3px 10px', borderRadius: 20,
              background: 'var(--g100)', border: '1px solid var(--g200)',
              fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
            }}>أخلاق · نفس</div>
            <div style={{
              padding: '3px 10px', borderRadius: 20,
              background: 'var(--g100)', border: '1px solid var(--g200)',
              fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
            }}>٨ دقائق</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>· الحلقة ١ من ٣</div>
          </div>
        </div>
        {/* Actions */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          {[
            { icon: '↗', label: 'مشاركة' },
            { icon: '⤓', label: 'حفظ' },
          ].map((action, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '7px 14px', borderRadius: 8,
              border: '1.5px solid var(--g200)', background: '#fff',
              fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)',
            }}>
              <span>{action.icon}</span>
              <span>{action.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--g200)', marginBottom: 16 }} />

      {/* Description */}
      <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--g600)', lineHeight: 1.8, maxWidth: 680, marginBottom: 20 }}>
        يتناول هذا الفيديو مفهوم كظم الغيظ في الإسلام من خلال قصص من السيرة النبوية وآيات قرآنية كريمة.
        ستتعلم كيف يمكن أن يكون ضبط النفس طريقاً للقرب من الله وبناء شخصية مؤمنة قوية ومتوازنة.
      </div>

      {/* Key verses */}
      <div style={{
        padding: '16px 20px',
        background: 'var(--g100)',
        border: '1.5px dashed var(--g300)',
        borderRadius: 12,
        marginBottom: 20,
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>آية قرآنية</div>
        <div style={{ fontSize: 15, color: 'var(--g800)', fontWeight: 500, lineHeight: 1.8, textAlign: 'right', direction: 'rtl' }}>
          ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', marginTop: 6 }}>سورة آل عمران · الآية ١٣٤</div>
      </div>
    </div>
  );
}

/* ── Chapters List ── */
function ChaptersList() {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>فصول الفيديو</div>
      <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 12, overflow: 'hidden' }}>
        {CHAPTERS.map((ch, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '12px 16px',
            borderBottom: i < CHAPTERS.length - 1 ? '1px solid var(--g100)' : 'none',
            background: ch.active ? 'var(--g100)' : '#fff',
            borderRight: ch.active ? '3px solid var(--g700)' : '3px solid transparent',
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', flexShrink: 0, width: 36 }}>{ch.time}</div>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: ch.active ? 'var(--g800)' : 'var(--g200)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {ch.active
                ? <span style={{ fontSize: 8, color: '#fff' }}>▶</span>
                : <span style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)' }}>{i + 1}</span>
              }
            </div>
            <div style={{ fontSize: 12, color: ch.active ? 'var(--g800)' : 'var(--g600)', fontWeight: ch.active ? 600 : 400 }}>{ch.title}</div>
            {ch.active && (
              <div style={{
                marginRight: 'auto',
                padding: '2px 8px', borderRadius: 10,
                background: 'var(--g800)', fontFamily: 'var(--mono)', fontSize: 8, color: '#fff',
              }}>الآن</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Sidebar: Related & Progress ── */
function Sidebar() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Series progress */}
      <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g200)' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)' }}>تقدّمك في السلسلة</div>
        </div>
        <div style={{ padding: '14px 16px' }}>
          {/* Overall bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>اكتملت ١ من ٣ حلقات</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: 'var(--g700)' }}>٣٣٪</div>
          </div>
          <div style={{ height: 6, background: 'var(--g200)', borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 3 }} />
          </div>

          {/* Episode pills */}
          {[
            { title: 'كظم الغيظ', status: 'current', num: '١' },
            { title: 'التعاون', status: 'locked', num: '٢' },
            { title: 'حفظ اللسان', status: 'locked', num: '٣' },
          ].map((ep, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '9px 12px', marginBottom: 6,
              borderRadius: 10,
              border: `1.5px solid ${ep.status === 'current' ? 'var(--g700)' : 'var(--g200)'}`,
              background: ep.status === 'current' ? 'var(--g800)' : 'var(--g100)',
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                background: ep.status === 'current' ? 'rgba(255,255,255,.15)' : 'var(--g200)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontSize: 10,
                color: ep.status === 'current' ? '#fff' : 'var(--g500)',
              }}>{ep.num}</div>
              <div style={{
                fontSize: 12, fontWeight: 500,
                color: ep.status === 'current' ? '#fff' : 'var(--g600)',
                flex: 1,
              }}>{ep.title}</div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 9,
                color: ep.status === 'current' ? 'rgba(255,255,255,.5)' : 'var(--g400)',
              }}>{ep.status === 'current' ? '▶ تشاهد الآن' : '🔒'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Related topics */}
      <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g200)' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)' }}>الحلقات التالية</div>
        </div>
        {RELATED.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 12,
            padding: '14px 16px',
            borderBottom: i < RELATED.length - 1 ? '1px solid var(--g100)' : 'none',
            alignItems: 'center',
          }}>
            {/* Thumbnail */}
            <div style={{
              width: 68, height: 52, borderRadius: 10,
              background: 'var(--g200)',
              border: '1px solid var(--g300)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, position: 'relative',
            }}>
              <div style={{
                width: 0, height: 0,
                borderTop: '7px solid transparent',
                borderBottom: '7px solid transparent',
                borderLeft: '11px solid rgba(0,0,0,.3)',
              }} />
              <div style={{
                position: 'absolute', bottom: 4, right: 4,
                background: 'rgba(0,0,0,.5)', borderRadius: 4,
                fontFamily: 'var(--mono)', fontSize: 7, color: '#fff', padding: '1px 4px',
              }}>{item.duration}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>{item.title}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{item.subtitle}</div>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', flexShrink: 0 }}>🔒</div>
          </div>
        ))}
        <div style={{ padding: '12px 16px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textAlign: 'center', lineHeight: 1.5 }}>
            أكمل مشاهدة هذه الحلقة لفتح التالية
          </div>
        </div>
      </div>

      {/* Ayah card */}
      <div style={{
        padding: '16px',
        background: 'var(--g900)',
        borderRadius: 16,
        textAlign: 'right',
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>الحديث النبوي الشريف</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,.8)', lineHeight: 1.8, direction: 'rtl', marginBottom: 8 }}>
          «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الغَضَبِ»
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)' }}>رواه البخاري ومسلم</div>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function W02_VideoScreen() {
  return (
    <div style={{ background: 'var(--g100)', minHeight: 780, display: 'flex', flexDirection: 'column' }}>
      <AppHeader />
      <BreadcrumbBar />

      {/* Main layout */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Video + Controls (full width) */}
        <div style={{ background: 'var(--g900)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <VideoPlayer />
            <ControlsBar />
          </div>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
          {/* Left: info + chapters */}
          <div>
            <VideoInfo />
            <ChaptersList />
          </div>
          {/* Right: sidebar */}
          <div style={{ paddingTop: 24 }}>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: 'var(--g900)',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,.05)',
      }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>© ٢٠٢٦ · سلسلة القيم الإسلامية</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {['الشروط والأحكام', 'سياسة الخصوصية', 'تواصل معنا'].map((l, i) => (
            <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
