import React from 'react';

/* ─────────────────────────────────────────────────────
   W01 — شاشة الموضوعات (اختر موضوعك)
   Desktop 1260px
───────────────────────────────────────────────────── */

const TOPICS = [
  {
    id: 'kadhm',
    title: 'كظم الغيظ',
    subtitle: 'فن السيطرة على النفس',
    desc: 'تعلّم كيف يُعلّمنا الإسلام ضبط النفس عند الغضب، وكيف يكون الحِلم طريقاً إلى الكمال الإنساني.',
    tag: 'أخلاق · نفس',
    duration: '٨ دقائق',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
        {/* flame shape — representing anger being extinguished */}
        <path d="M40 55 C30 55 24 48 24 40 C24 32 30 28 34 24 C34 30 38 33 38 33 C38 33 36 26 42 20 C44 28 50 30 52 36 C54 42 50 50 40 55Z" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* water drop overlay */}
        <path d="M40 48 C36 48 33 45 33 42 C33 39 36 35 40 32 C44 35 47 39 47 42 C47 45 44 48 40 48Z" fill="var(--g500)" opacity="0.5"/>
        {/* inner peaceful dot */}
        <circle cx="40" cy="42" r="3" fill="var(--g600)"/>
      </svg>
    ),
  },
  {
    id: 'taawun',
    title: 'التعاون',
    subtitle: 'قوة الجماعة المؤمنة',
    desc: 'كيف يبني التعاون مجتمعاً متماسكاً، وما أثره العميق في حياة الفرد والأمة من منظور إسلامي.',
    tag: 'مجتمع · قيم',
    duration: '١١ دقيقة',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
        {/* Two hands meeting */}
        <path d="M26 44 C26 44 24 40 26 37 C28 34 32 35 33 37 L36 43" stroke="var(--g500)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M54 44 C54 44 56 40 54 37 C52 34 48 35 47 37 L44 43" stroke="var(--g500)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* center clasp */}
        <ellipse cx="40" cy="44" rx="5" ry="4" fill="var(--g400)" stroke="var(--g500)" strokeWidth="1.5"/>
        <line x1="36" y1="44" x2="44" y2="44" stroke="var(--g600)" strokeWidth="1.5"/>
        {/* people icons above */}
        <circle cx="30" cy="28" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
        <circle cx="50" cy="28" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
        <path d="M24 36 Q30 32 36 36" stroke="var(--g400)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M44 36 Q50 32 56 36" stroke="var(--g400)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'hifz',
    title: 'حفظ اللسان',
    subtitle: 'الكلمة أمانة وأثر',
    desc: 'الكلمة الطيبة صدقة، والكلمة الجارحة جُرح. اكتشف حكمة الإسلام في آداب الكلام وحفظ اللسان.',
    tag: 'أخلاق · كلام',
    duration: '٩ دقائق',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
        <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
        {/* Speech bubble with lock */}
        <path d="M22 28 Q22 22 28 22 L52 22 Q58 22 58 28 L58 42 Q58 48 52 48 L44 48 L40 54 L36 48 L28 48 Q22 48 22 42 Z" fill="var(--g200)" stroke="var(--g400)" strokeWidth="1.5"/>
        {/* lock icon inside bubble */}
        <rect x="34" y="31" width="12" height="10" rx="2" fill="var(--g500)" stroke="var(--g600)" strokeWidth="1.5"/>
        <path d="M36 31 Q36 27 40 27 Q44 27 44 31" stroke="var(--g500)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="36" r="1.5" fill="var(--g100)"/>
      </svg>
    ),
  },
];

/* ── App Header ── */
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
      {/* Logo area */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: 'rgba(255,255,255,.1)',
          border: '1.5px solid rgba(255,255,255,.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
        }}>☪</div>
        <div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '.01em' }}>القيم الإسلامية</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Islamic Values · Series</div>
        </div>
      </div>

      {/* Right nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {['الرئيسية', 'الموضوعات', 'عن المشروع'].map((l, i) => (
          <div key={i} style={{
            padding: '6px 14px',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: i === 1 ? '#fff' : 'rgba(255,255,255,.45)',
            fontWeight: i === 1 ? 600 : 400,
            borderRadius: 6,
            background: i === 1 ? 'rgba(255,255,255,.08)' : 'transparent',
          }}>{l}</div>
        ))}
        <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,.1)', margin: '0 6px' }} />
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'var(--g600)',
          border: '2px solid var(--g500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--mono)',
          fontSize: 9,
          color: '#fff',
        }}>أح</div>
      </div>
    </div>
  );
}

/* ── Hero Banner ── */
function Hero() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--g800) 0%, var(--g700) 60%, var(--g600) 100%)',
      padding: '52px 40px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative geometric shapes */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 260, height: 260,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.06)',
      }} />
      <div style={{
        position: 'absolute', top: 20, right: 20,
        width: 160, height: 160,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.06)',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: 200,
        width: 200, height: 200,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,.04)',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,.08)',
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 20,
          padding: '5px 14px',
          marginBottom: 20,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.6)' }} />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.7)', letterSpacing: '.08em', textTransform: 'uppercase' }}>سلسلة قيم إسلامية · ٣ حلقات</span>
        </div>

        <div style={{ fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 10, maxWidth: 560 }}>
          رحلة في<br />
          <span style={{ color: 'rgba(255,255,255,.55)' }}>أخلاق الإسلام</span>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
          اختر موضوعاً وانطلق في رحلة قصيرة مع قصص وأمثلة من القرآن والسنة النبوية.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 28 }}>
          {[['٣', 'موضوعات'], ['٢٨ دقيقة', 'مجموع الوقت'], ['القرآن · السنة', 'المصادر']].map(([v, l], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 700, color: '#fff' }}>{v}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Topics Grid ── */
function TopicsGrid() {
  return (
    <div style={{ padding: '44px 40px 60px', background: 'var(--g100)' }}>
      {/* Section header */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 28,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>اختر موضوعاً</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--g800)' }}>الموضوعات المتاحة</div>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1.5px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: 'var(--g500)' }}>ℹ</div>
          انقر على الموضوع لمشاهدة الفيديو
        </div>
      </div>

      {/* Cards row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {TOPICS.map((topic, idx) => (
          <TopicCard key={topic.id} topic={topic} index={idx} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{
        marginTop: 40,
        padding: '16px 20px',
        background: '#fff',
        border: '1.5px solid var(--g200)',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--g200)', border: '1.5px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>📖</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>الهدف من السلسلة</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', lineHeight: 1.6 }}>
            رحلة تفاعلية قصيرة تُقدّم قيماً إسلامية من خلال قصص واقعية ومقاطع فيديو مُبسّطة — مناسبة لجميع الأعمار.
          </div>
        </div>
      </div>
    </div>
  );
}

function TopicCard({ topic, index }) {
  const isFirst = index === 0;
  return (
    <div style={{
      background: '#fff',
      border: `1.5px solid ${isFirst ? 'var(--g600)' : 'var(--g200)'}`,
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'box-shadow .2s',
      boxShadow: isFirst ? '0 8px 32px rgba(0,0,0,.08)' : 'none',
      position: 'relative',
    }}>
      {isFirst && (
        <div style={{
          position: 'absolute',
          top: 14,
          left: 14,
          background: 'var(--g800)',
          color: '#fff',
          fontFamily: 'var(--mono)',
          fontSize: 8,
          fontWeight: 600,
          padding: '3px 10px',
          borderRadius: 10,
          letterSpacing: '.06em',
          textTransform: 'uppercase',
        }}>مميّز</div>
      )}

      {/* Icon zone */}
      <div style={{
        height: 160,
        background: isFirst ? 'var(--g200)' : 'var(--g100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--g200)',
        position: 'relative',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', border: '1px solid var(--g200)' }} />
        <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', border: '1px solid var(--g300)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>{topic.icon}</div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          <div style={{
            padding: '3px 10px',
            borderRadius: 20,
            border: '1px solid var(--g200)',
            background: 'var(--g100)',
            fontFamily: 'var(--mono)',
            fontSize: 9,
            color: 'var(--g500)',
          }}>{topic.tag}</div>
          <div style={{
            padding: '3px 10px',
            borderRadius: 20,
            border: '1px solid var(--g200)',
            background: 'var(--g100)',
            fontFamily: 'var(--mono)',
            fontSize: 9,
            color: 'var(--g500)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}>
            <span style={{ fontSize: 8 }}>▶</span> {topic.duration}
          </div>
        </div>

        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--g900)', marginBottom: 4, lineHeight: 1.3 }}>{topic.title}</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', marginBottom: 12 }}>{topic.subtitle}</div>
        <div style={{ height: 1, background: 'var(--g200)', marginBottom: 12 }} />

        {/* Description lines */}
        <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--g600)', lineHeight: 1.7, marginBottom: 20 }}>
          {topic.desc}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: isFirst ? 'var(--g800)' : 'var(--g100)',
          borderRadius: 12,
          border: isFirst ? 'none' : '1.5px solid var(--g200)',
        }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            fontWeight: 600,
            color: isFirst ? '#fff' : 'var(--g700)',
            letterSpacing: '.03em',
          }}>ابدأ المشاهدة</div>
          <div style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: isFirst ? 'rgba(255,255,255,.15)' : 'var(--g200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: 10, color: isFirst ? '#fff' : 'var(--g600)' }}>▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page Footer ── */
function PageFooter() {
  return (
    <div style={{
      background: 'var(--g900)',
      padding: '24px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTop: '1px solid rgba(255,255,255,.05)',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>
        © ٢٠٢٦ · سلسلة القيم الإسلامية
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        {['الشروط والأحكام', 'سياسة الخصوصية', 'تواصل معنا'].map((l, i) => (
          <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function W01_TopicsScreen() {
  return (
    <div style={{ background: 'var(--g100)', minHeight: 780, display: 'flex', flexDirection: 'column' }}>
      <AppHeader />
      <Hero />
      <div style={{ flex: 1 }}>
        <TopicsGrid />
      </div>
      <PageFooter />
    </div>
  );
}
