import React from 'react';

/* ════════════════════════════════════════════════════
   MOBILE SCREENS — بدون header · footer · hero
   Font: Cairo
   Video: Portrait 9:16
════════════════════════════════════════════════════ */

const FONT = "'Cairo', 'IBM Plex Sans', sans-serif";

const IMPORT_CAIRO = `@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');`;

/* ════════════════════════════════════════════════════
   M01 — شاشة الموضوعات (Mobile)
════════════════════════════════════════════════════ */
export function M01_TopicsScreen() {
  const topics = [
    {
      id: 'kadhm',
      title: 'كظم الغيظ',
      subtitle: 'فن السيطرة على النفس',
      duration: '٨ دق',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width={32} height={32}>
          <circle cx="24" cy="24" r="22" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
          <path d="M24 36C18 36 14 30 14 24C14 18 18 15 21 11C21 16 24 19 24 19C24 19 22 13 27 9C29 16 34 17 35 23C37 28 34 34 24 36Z" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.2"/>
          <path d="M24 32C21 32 19 30 19 28C19 26 21 23 24 21C27 23 29 26 29 28C29 30 27 32 24 32Z" fill="var(--g500)" opacity="0.5"/>
          <circle cx="24" cy="28" r="1.8" fill="var(--g600)"/>
        </svg>
      ),
    },
    {
      id: 'taawun',
      title: 'التعاون',
      subtitle: 'قوة الجماعة المؤمنة',
      duration: '١١ دق',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width={32} height={32}>
          <circle cx="24" cy="24" r="22" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
          <circle cx="17" cy="17" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.2"/>
          <circle cx="31" cy="17" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.2"/>
          <path d="M12 28 Q17 23 22 28" stroke="var(--g400)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M26 28 Q31 23 36 28" stroke="var(--g400)" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <ellipse cx="24" cy="31" rx="4" ry="3" fill="var(--g400)" stroke="var(--g500)" strokeWidth="1.2"/>
        </svg>
      ),
    },
    {
      id: 'hifz',
      title: 'حفظ اللسان',
      subtitle: 'الكلمة أمانة وأثر',
      duration: '٩ دق',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" width={32} height={32}>
          <circle cx="24" cy="24" r="22" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
          <path d="M12 15 Q12 10 17 10 L31 10 Q36 10 36 15 L36 26 Q36 31 31 31 L27 31 L24 36 L21 31 L17 31 Q12 31 12 26 Z" fill="var(--g200)" stroke="var(--g400)" strokeWidth="1.2"/>
          <rect x="19" y="18" width="10" height="8" rx="2" fill="var(--g500)" stroke="var(--g600)" strokeWidth="1.2"/>
          <path d="M21 18 Q21 15 24 15 Q27 15 27 18" stroke="var(--g500)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="24" cy="22" r="1.2" fill="var(--g100)"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{IMPORT_CAIRO}</style>
      <div style={{ background: 'var(--g100)', fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>

        {/* Status bar */}
        <div className="sb">
          <div className="sb-time">9:41</div>
          <div className="sb-icons">
            <div className="sb-dot sm" /><div className="sb-dot sm" /><div className="sb-dot" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="content" style={{ background: 'var(--g100)', padding: '28px 16px 32px' }}>

          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 4 }}>
            <div style={{
              fontFamily: FONT, fontSize: 9, fontWeight: 600,
              color: 'var(--g400)', letterSpacing: '.12em',
              textTransform: 'uppercase', marginBottom: 6,
            }}>سلسلة قيم إسلامية</div>
            <div style={{
              fontFamily: FONT, fontSize: 22, fontWeight: 900,
              color: 'var(--g900)', lineHeight: 1.35, marginBottom: 6,
            }}>اختر موضوعاً</div>
            <div style={{
              fontFamily: FONT, fontSize: 11, color: 'var(--g500)',
              marginBottom: 28,
            }}>انقر لمشاهدة الفيديو</div>
          </div>

          {/* Topics list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {topics.map((topic) => (
              <MobileTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="bnav">
          {['الرئيسية', 'الموضوعات', 'حسابي'].map((label, i) => (
            <div key={i} className={`bni${i === 1 ? ' on' : ''}`}>
              <div className={`bni-bar${i === 1 ? ' on' : ''}`} />
              <div className="bni-dot" />
              <div className={`bni-lbl${i === 1 ? ' on' : ''}`}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MobileTopicCard({ topic }) {
  return (
    <div style={{
      background: '#fff',
      border: '1.5px solid var(--g200)',
      borderRadius: 16,
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}>
      {/* Icon circle */}
      <div style={{
        width: 58, height: 58,
        borderRadius: '50%',
        background: 'var(--g100)',
        border: '1.5px solid var(--g200)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {topic.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: FONT, fontSize: 15, fontWeight: 700,
          color: 'var(--g900)', marginBottom: 2,
        }}>{topic.title}</div>
        <div style={{
          fontFamily: FONT, fontSize: 10, color: 'var(--g500)',
          marginBottom: 6,
        }}>{topic.subtitle}</div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontFamily: FONT, fontSize: 9, color: 'var(--g400)',
        }}>
          <span style={{ fontSize: 7 }}>▶</span> {topic.duration}
        </div>
      </div>

      {/* Arrow */}
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: 'var(--g800)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: 0, height: 0,
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '8px solid #fff',
          marginRight: -2,
        }} />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   M02 — شاشة الفيديو (Mobile)
   Portrait video centered — 9:16
════════════════════════════════════════════════════ */
export function M02_VideoScreen() {
  return (
    <>
      <style>{IMPORT_CAIRO}</style>
      <div style={{ background: 'var(--g100)', fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>

        {/* Status bar */}
        <div className="sb">
          <div className="sb-time">9:41</div>
          <div className="sb-icons">
            <div className="sb-dot sm" /><div className="sb-dot sm" /><div className="sb-dot" />
          </div>
        </div>

        {/* Back bar */}
        <div style={{
          background: '#fff',
          borderBottom: '1px solid var(--g200)',
          padding: '0 14px',
          height: 44,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            border: '1.5px solid var(--g200)', background: 'var(--g100)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, color: 'var(--g600)',
          }}>←</div>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: 'var(--g800)' }}>كظم الغيظ</div>
        </div>

        {/* Scrollable */}
        <div className="content" style={{ background: 'var(--g100)' }}>

          {/* Video: portrait 9:16 */}
          <div style={{
            background: 'var(--g900)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 16px',
          }}>
            {/* Portrait video container */}
            <div style={{
              width: 220,
              height: Math.round(220 * 16 / 9), // 391px
              borderRadius: 16,
              background: 'var(--g700)',
              position: 'relative',
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,.08)',
              boxShadow: '0 12px 40px rgba(0,0,0,.4)',
            }}>
              {/* BG gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(160deg, var(--g600), var(--g900))',
              }} />

              {/* Rings */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 100, height: 100, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,.06)',
              }} />

              {/* Label */}
              <div style={{
                position: 'absolute', top: 8, left: 0, right: 0,
                textAlign: 'center',
                fontFamily: FONT, fontSize: 7, color: 'rgba(255,255,255,.2)',
                letterSpacing: '.08em',
              }}>9 : 16</div>

              {/* Play */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,.3)',
                zIndex: 2,
              }}>
                <div style={{
                  width: 0, height: 0,
                  borderTop: '9px solid transparent',
                  borderBottom: '9px solid transparent',
                  borderLeft: '14px solid var(--g800)',
                  marginRight: -3,
                }} />
              </div>

              {/* Bottom overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '24px 12px 10px',
                background: 'linear-gradient(to top, rgba(0,0,0,.85), transparent)',
              }}>
                <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>
                  كظم الغيظ
                </div>
                <div style={{ fontFamily: FONT, fontSize: 9, color: 'rgba(255,255,255,.55)' }}>
                  ٨ دقائق · حلقة ١ من ٣
                </div>
              </div>

              {/* Progress bar */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 2, background: 'rgba(255,255,255,.15)',
              }}>
                <div style={{ width: '4%', height: '100%', background: '#fff' }} />
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div style={{
            background: 'var(--g900)',
            padding: '8px 20px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid var(--g800)', marginRight: -2 }} />
            </div>
            <div style={{ fontFamily: FONT, fontSize: 9, color: 'rgba(255,255,255,.5)', flexShrink: 0 }}>0:22 / 8:00</div>
            <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,.15)', borderRadius: 2, position: 'relative' }}>
              <div style={{ width: '4.5%', height: '100%', background: '#fff', borderRadius: 2 }} />
            </div>
          </div>

          {/* Info block */}
          <div style={{ padding: '20px 14px' }}>

            {/* Tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 10px', borderRadius: 20,
              border: '1px solid var(--g200)', background: '#fff',
              fontFamily: FONT, fontSize: 9, color: 'var(--g500)',
              marginBottom: 12,
            }}>أخلاق · ٨ دقائق</div>

            {/* Title */}
            <div style={{
              fontFamily: FONT, fontSize: 20, fontWeight: 900,
              color: 'var(--g900)', marginBottom: 4, lineHeight: 1.35,
            }}>كظم الغيظ</div>
            <div style={{
              fontFamily: FONT, fontSize: 12, color: 'var(--g500)',
              marginBottom: 20,
            }}>فن السيطرة على النفس</div>

            <div style={{ height: 1, background: 'var(--g200)', marginBottom: 18 }} />

            {/* Ayah */}
            <div style={{
              padding: '12px 14px',
              background: 'var(--g100)',
              border: '1.5px dashed var(--g300)',
              borderRadius: 12,
              marginBottom: 20,
              textAlign: 'right', direction: 'rtl',
            }}>
              <div style={{
                fontFamily: FONT, fontSize: 7, color: 'var(--g400)',
                textTransform: 'uppercase', letterSpacing: '.1em',
                marginBottom: 6, direction: 'ltr', textAlign: 'left',
              }}>آية قرآنية</div>
              <div style={{
                fontFamily: FONT, fontSize: 12, fontWeight: 600,
                color: 'var(--g800)', lineHeight: 1.9,
              }}>﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ﴾</div>
              <div style={{
                fontFamily: FONT, fontSize: 9, color: 'var(--g400)', marginTop: 4,
              }}>آل عمران · ١٣٤</div>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: 18 }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', marginBottom: 6,
                fontFamily: FONT,
              }}>
                <div style={{ fontSize: 10, color: 'var(--g500)' }}>تقدّمك في السلسلة</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--g700)' }}>١ / ٣</div>
              </div>
              <div style={{ height: 4, background: 'var(--g200)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 2 }} />
              </div>
            </div>

            {/* Next episodes */}
            <div style={{
              fontFamily: FONT, fontSize: 9, color: 'var(--g400)',
              textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10,
            }}>الحلقات التالية</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {[
                { title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة', num: '٢', duration: '١١ دق' },
                { title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر', num: '٣', duration: '٩ دق' },
              ].map((ep, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 12px', borderRadius: 10,
                  border: '1.5px solid var(--g200)', background: '#fff', opacity: 0.65,
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    border: '1.5px solid var(--g300)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: FONT, fontSize: 9, color: 'var(--g400)', flexShrink: 0,
                  }}>{ep.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600, color: 'var(--g700)' }}>{ep.title}</div>
                    <div style={{ fontFamily: FONT, fontSize: 9, color: 'var(--g400)' }}>{ep.subtitle}</div>
                  </div>
                  <div style={{ fontFamily: FONT, fontSize: 9, color: 'var(--g400)' }}>{ep.duration} 🔒</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="bnav">
          {['الرئيسية', 'الموضوعات', 'حسابي'].map((label, i) => (
            <div key={i} className={`bni${i === 1 ? ' on' : ''}`}>
              <div className={`bni-bar${i === 1 ? ' on' : ''}`} />
              <div className="bni-dot" />
              <div className={`bni-lbl${i === 1 ? ' on' : ''}`}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
