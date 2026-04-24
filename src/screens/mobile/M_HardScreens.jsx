import React from 'react';
import {
  MobileNavbar,
  MobileFooter,
} from '../../components/web/MobileFrame';

/* ════════════════════════════════════════════════════
   SHARED MOBILE COMPONENTS
════════════════════════════════════════════════════ */

function MobileStatusBar() {
  return (
    <div className="sb">
      <div className="sb-time">9:41</div>
      <div className="sb-icons">
        <div className="sb-dot sm" />
        <div className="sb-dot sm" />
        <div className="sb-dot" />
      </div>
    </div>
  );
}

function MobileAppHeader({ showBack = false, title = '' }) {
  return (
    <div style={{
      background: 'var(--g900)',
      padding: '0 16px',
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
      gap: 10,
    }}>
      {showBack ? (
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'rgba(255,255,255,.1)',
          border: '1px solid rgba(255,255,255,.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--mono)', fontSize: 13, color: '#fff', flexShrink: 0,
        }}>←</div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13,
          }}>☪</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>القيم الإسلامية</div>
        </div>
      )}

      {title && (
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600,
          color: '#fff', flex: 1, textAlign: 'center',
        }}>{title}</div>
      )}

      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        background: 'var(--g600)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--mono)', fontSize: 9, color: '#fff', flexShrink: 0,
      }}>أح</div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   M01 — شاشة الموضوعات (Mobile)
════════════════════════════════════════════════════ */
export function M01_TopicsScreen() {
  const topics = [
    {
      id: 'kadhm', title: 'كظم الغيظ', subtitle: 'فن السيطرة على النفس',
      tag: 'أخلاق', duration: '٨ دق', accent: 'var(--g700)', icon: '🔥',
    },
    {
      id: 'taawun', title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة',
      tag: 'مجتمع', duration: '١١ دق', accent: 'var(--g600)', icon: '🤝',
    },
    {
      id: 'hifz', title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر',
      tag: 'أخلاق', duration: '٩ دق', accent: 'var(--g500)', icon: '🔒',
    },
  ];

  return (
    <div style={{ background: 'var(--g100)', display: 'flex', flexDirection: 'column' }}>
      <MobileStatusBar />
      <MobileAppHeader />

      {/* Scrollable content */}
      <div className="content" style={{ background: 'var(--g100)' }}>
        {/* Hero section */}
        <div style={{
          background: 'var(--g900)',
          padding: '20px 16px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 160, height: 160, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.05)',
          }} />
          <div style={{
            position: 'absolute', top: 10, right: 10,
            width: 100, height: 100, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.05)',
          }} />

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 20, padding: '4px 10px', marginBottom: 12,
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,.5)' }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)', letterSpacing: '.06em' }}>٣ موضوعات · سلسلة تعليمية</span>
          </div>

          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: 8 }}>
            رحلة في<br />
            <span style={{ color: 'rgba(255,255,255,.5)' }}>أخلاق الإسلام</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.4)', lineHeight: 1.7, marginBottom: 18 }}>
            اختر موضوعاً وانطلق في رحلة قصيرة مع قصص من القرآن والسنة.
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[['٣', 'حلقات'], ['٢٨ دق', 'مجموع الوقت']].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 700, color: '#fff' }}>{v}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section label */}
        <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', textTransform: 'uppercase', letterSpacing: '.1em' }}>اختر موضوعاً</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>انقر للمشاهدة</div>
        </div>

        {/* Topics list */}
        <div style={{ padding: '0 12px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {topics.map((topic, idx) => (
            <div key={topic.id} style={{
              background: '#fff',
              borderRadius: 16,
              border: `1.5px solid ${idx === 0 ? 'var(--g500)' : 'var(--g200)'}`,
              overflow: 'hidden',
              boxShadow: idx === 0 ? '0 4px 20px rgba(0,0,0,.08)' : 'none',
            }}>
              {/* Image area */}
              <div style={{
                height: 110,
                background: idx === 0 ? 'var(--g200)' : 'var(--g100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--g200)',
                position: 'relative',
              }}>
                {idx === 0 && (
                  <div style={{
                    position: 'absolute', top: 10, left: 10,
                    background: 'var(--g800)', color: '#fff',
                    fontFamily: 'var(--mono)', fontSize: 8,
                    padding: '2px 8px', borderRadius: 8,
                  }}>مميّز</div>
                )}
                {/* Decorative circles */}
                <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', border: '1px solid var(--g200)' }} />
                <div style={{ position: 'absolute', width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--g300)' }} />
                <div style={{ fontSize: 30, position: 'relative', zIndex: 2 }}>{topic.icon}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '14px 16px' }}>
                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                  <div style={{
                    padding: '2px 8px', borderRadius: 20,
                    border: '1px solid var(--g200)', background: 'var(--g100)',
                    fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)',
                  }}>{topic.tag}</div>
                  <div style={{
                    padding: '2px 8px', borderRadius: 20,
                    border: '1px solid var(--g200)', background: 'var(--g100)',
                    fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)',
                    display: 'flex', alignItems: 'center', gap: 3,
                  }}>
                    <span style={{ fontSize: 7 }}>▶</span> {topic.duration}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--g900)', marginBottom: 2 }}>{topic.title}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{topic.subtitle}</div>
                  </div>

                  {/* CTA */}
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: idx === 0 ? 'var(--g800)' : 'var(--g200)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <div style={{
                      width: 0, height: 0,
                      borderTop: '7px solid transparent',
                      borderBottom: '7px solid transparent',
                      borderLeft: `10px solid ${idx === 0 ? '#fff' : 'var(--g600)'}`,
                      marginRight: -3,
                    }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div style={{
          margin: '0 12px 24px',
          padding: '12px 14px',
          background: '#fff',
          border: '1px solid var(--g200)',
          borderRadius: 12,
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <div style={{ fontSize: 18, flexShrink: 0 }}>📖</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>الهدف من السلسلة</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', lineHeight: 1.6 }}>
              قصص واقعية وفيديوهات مُبسّطة — مناسبة لجميع الأعمار.
            </div>
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
  );
}

/* ════════════════════════════════════════════════════
   M02 — شاشة الفيديو (Mobile)
════════════════════════════════════════════════════ */
export function M02_VideoScreen() {
  const chapters = [
    { time: '0:00', title: 'المقدمة والتعريف', active: true },
    { time: '1:45', title: 'قصة من السيرة النبوية', active: false },
    { time: '4:10', title: 'الآيات والأحاديث', active: false },
    { time: '6:00', title: 'كيف تطبّقها في حياتك؟', active: false },
  ];

  return (
    <div style={{ background: 'var(--g100)', display: 'flex', flexDirection: 'column' }}>
      <MobileStatusBar />
      <MobileAppHeader showBack title="كظم الغيظ" />

      <div className="content" style={{ background: 'var(--g100)' }}>
        {/* VIDEO PLAYER */}
        <div style={{
          width: '100%',
          aspectRatio: '16 / 9',
          background: 'var(--g800)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Gradient bg */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, var(--g700), var(--g900))',
          }} />

          {/* Decorative rings */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 130, height: 130, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.06)',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 90, height: 90, borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.08)',
          }} />

          {/* Episode label */}
          <div style={{
            position: 'absolute', top: 8, right: 10,
            background: 'rgba(0,0,0,.4)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 5,
            padding: '3px 8px',
            fontFamily: 'var(--mono)', fontSize: 8, color: '#fff',
          }}>حلقة ١ من ٣</div>

          {/* Play button */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(255,255,255,.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,.3)',
            zIndex: 2,
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '16px solid var(--g800)',
              marginRight: -3,
            }} />
          </div>

          {/* Bottom overlay */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '20px 12px 8px',
            background: 'linear-gradient(to top, rgba(0,0,0,.75), transparent)',
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>كظم الغيظ</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)' }}>٨ دقائق</div>
          </div>
        </div>

        {/* Controls */}
        <div style={{
          background: 'var(--g900)',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '9px solid var(--g800)', marginRight: -2 }} />
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)', flexShrink: 0 }}>0:22 / 8:00</div>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,.15)', borderRadius: 2, position: 'relative' }}>
            <div style={{ width: '4.5%', height: '100%', background: '#fff', borderRadius: 2 }} />
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.5)', flexShrink: 0 }}>⛶</div>
        </div>

        {/* Title + tags */}
        <div style={{ background: '#fff', padding: '16px 14px', borderBottom: '1px solid var(--g200)' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--g900)', marginBottom: 8, lineHeight: 1.35 }}>
            كظم الغيظ — فن السيطرة على النفس
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
            {['أخلاق · نفس', '٨ دقائق', 'الحلقة ١ من ٣'].map((tag, i) => (
              <div key={i} style={{
                padding: '3px 10px', borderRadius: 20,
                border: '1px solid var(--g200)', background: 'var(--g100)',
                fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
              }}>{tag}</div>
            ))}
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--g600)', lineHeight: 1.75 }}>
            رحلة مع مفهوم كظم الغيظ في الإسلام — قصص من السيرة وآيات قرآنية كريمة.
          </div>
        </div>

        {/* Ayah */}
        <div style={{
          margin: '12px 12px 0',
          padding: '12px 14px',
          background: 'var(--g100)',
          border: '1.5px dashed var(--g300)',
          borderRadius: 12,
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>آية قرآنية</div>
          <div style={{ fontSize: 13, color: 'var(--g800)', fontWeight: 500, lineHeight: 1.8, textAlign: 'right', direction: 'rtl' }}>
            ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ﴾
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', marginTop: 4 }}>آل عمران · ١٣٤</div>
        </div>

        {/* Chapters */}
        <div style={{ padding: '16px 12px 4px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>فصول الفيديو</div>
          <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 12, overflow: 'hidden' }}>
            {chapters.map((ch, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '11px 14px',
                borderBottom: i < chapters.length - 1 ? '1px solid var(--g100)' : 'none',
                background: ch.active ? 'var(--g100)' : '#fff',
                borderRight: ch.active ? '3px solid var(--g700)' : '3px solid transparent',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', width: 32, flexShrink: 0 }}>{ch.time}</div>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: ch.active ? 'var(--g800)' : 'var(--g200)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {ch.active
                    ? <span style={{ fontSize: 7, color: '#fff' }}>▶</span>
                    : <span style={{ fontFamily: 'var(--mono)', fontSize: 7, color: 'var(--g500)' }}>{i + 1}</span>}
                </div>
                <div style={{ fontSize: 11, color: ch.active ? 'var(--g800)' : 'var(--g600)', fontWeight: ch.active ? 600 : 400, flex: 1 }}>{ch.title}</div>
                {ch.active && (
                  <div style={{
                    padding: '1px 6px', borderRadius: 8,
                    background: 'var(--g800)', fontFamily: 'var(--mono)', fontSize: 7, color: '#fff',
                  }}>الآن</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress / Next episodes */}
        <div style={{ padding: '16px 12px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>تقدّمك في السلسلة</div>

          {/* Progress bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)' }}>اكتملت ١ من ٣ حلقات</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 600, color: 'var(--g700)' }}>٣٣٪</div>
          </div>
          <div style={{ height: 4, background: 'var(--g200)', borderRadius: 2, overflow: 'hidden', marginBottom: 14 }}>
            <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 2 }} />
          </div>

          {/* Episode list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { title: 'كظم الغيظ', num: '١', status: 'current' },
              { title: 'التعاون', num: '٢', status: 'locked' },
              { title: 'حفظ اللسان', num: '٣', status: 'locked' },
            ].map((ep, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 10,
                border: `1.5px solid ${ep.status === 'current' ? 'var(--g700)' : 'var(--g200)'}`,
                background: ep.status === 'current' ? 'var(--g800)' : '#fff',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                  background: ep.status === 'current' ? 'rgba(255,255,255,.15)' : 'var(--g200)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--mono)', fontSize: 9,
                  color: ep.status === 'current' ? '#fff' : 'var(--g500)',
                }}>{ep.num}</div>
                <div style={{
                  fontSize: 12, flex: 1, fontWeight: 500,
                  color: ep.status === 'current' ? '#fff' : 'var(--g600)',
                }}>{ep.title}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 9,
                  color: ep.status === 'current' ? 'rgba(255,255,255,.5)' : 'var(--g400)',
                }}>
                  {ep.status === 'current' ? '▶ تشاهد' : '🔒'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hadith card */}
        <div style={{
          margin: '0 12px 24px',
          padding: '14px',
          background: 'var(--g900)',
          borderRadius: 14,
          textAlign: 'right',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', marginBottom: 8 }}>الحديث النبوي الشريف</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.8)', lineHeight: 1.8, direction: 'rtl' }}>
            «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الغَضَبِ»
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', marginTop: 6 }}>رواه البخاري ومسلم</div>
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
  );
}
