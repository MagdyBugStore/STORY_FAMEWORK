import React from 'react';

/* ─────────────────────────────────────────────────────
   W01 — شاشة الموضوعات
   No header · No footer · No hero
   Font: Cairo
   Desktop 1260px
───────────────────────────────────────────────────── */

const FONT = "'Cairo', 'IBM Plex Sans', sans-serif";

const TOPICS = [
  {
    id: 'kadhm',
    title: 'كظم الغيظ',
    subtitle: 'فن السيطرة على النفس',
    duration: '٨ دقائق',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <circle cx="32" cy="32" r="30" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
        <path d="M32 48C22 48 16 40 16 32C16 24 22 20 26 15C26 22 30 26 30 26C30 26 28 18 35 12C37 21 44 23 46 30C48 37 44 44 32 48Z" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M32 42C28 42 25 39 25 36C25 33 28 29 32 26C36 29 39 33 39 36C39 39 36 42 32 42Z" fill="var(--g500)" opacity="0.5"/>
        <circle cx="32" cy="36" r="2.5" fill="var(--g600)"/>
      </svg>
    ),
  },
  {
    id: 'taawun',
    title: 'التعاون',
    subtitle: 'قوة الجماعة المؤمنة',
    duration: '١١ دقيقة',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <circle cx="32" cy="32" r="30" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="6" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
        <circle cx="42" cy="22" r="6" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
        <path d="M16 34 Q22 28 28 34" stroke="var(--g400)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M36 34 Q42 28 48 34" stroke="var(--g400)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M26 38 L30 32 L34 38" stroke="var(--g500)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <ellipse cx="32" cy="40" rx="5" ry="4" fill="var(--g400)" stroke="var(--g500)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 'hifz',
    title: 'حفظ اللسان',
    subtitle: 'الكلمة أمانة وأثر',
    duration: '٩ دقائق',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width={48} height={48}>
        <circle cx="32" cy="32" r="30" fill="var(--g100)" stroke="var(--g300)" strokeWidth="1.5"/>
        <path d="M16 20 Q16 14 22 14 L42 14 Q48 14 48 20 L48 34 Q48 40 42 40 L36 40 L32 46 L28 40 L22 40 Q16 40 16 34 Z" fill="var(--g200)" stroke="var(--g400)" strokeWidth="1.5"/>
        <rect x="26" y="24" width="12" height="10" rx="2" fill="var(--g500)" stroke="var(--g600)" strokeWidth="1.5"/>
        <path d="M28 24 Q28 20 32 20 Q36 20 36 24" stroke="var(--g500)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="29" r="1.5" fill="var(--g100)"/>
      </svg>
    ),
  },
];

export default function W01_TopicsScreen() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');`}</style>

      <div style={{
        background: 'var(--g100)',
        minHeight: 780,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        fontFamily: FONT,
      }}>
        <div style={{ width: '100%', maxWidth: 900 }}>

          {/* Section label */}
          <div style={{
            textAlign: 'center',
            marginBottom: 10,
            fontFamily: FONT,
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--g400)',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
          }}>سلسلة قيم إسلامية</div>

          {/* Title */}
          <div style={{
            textAlign: 'center',
            fontSize: 28,
            fontWeight: 900,
            color: 'var(--g900)',
            marginBottom: 6,
            fontFamily: FONT,
            lineHeight: 1.3,
          }}>اختر موضوعاً</div>

          <div style={{
            textAlign: 'center',
            fontFamily: FONT,
            fontSize: 13,
            color: 'var(--g500)',
            marginBottom: 48,
          }}>انقر على الموضوع لمشاهدة الفيديو</div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {TOPICS.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

function TopicCard({ topic }) {
  return (
    <div style={{
      background: '#fff',
      border: '1.5px solid var(--g200)',
      borderRadius: 20,
      padding: '32px 24px 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 0,
      cursor: 'pointer',
    }}>
      {/* Icon */}
      <div style={{
        width: 88,
        height: 88,
        borderRadius: '50%',
        background: 'var(--g100)',
        border: '1.5px solid var(--g200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        {topic.icon}
      </div>

      {/* Title */}
      <div style={{
        fontFamily: FONT,
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--g900)',
        marginBottom: 6,
      }}>{topic.title}</div>

      {/* Subtitle */}
      <div style={{
        fontFamily: FONT,
        fontSize: 12,
        color: 'var(--g500)',
        marginBottom: 20,
      }}>{topic.subtitle}</div>

      <div style={{ height: 1, width: '100%', background: 'var(--g200)', marginBottom: 20 }} />

      {/* Duration */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: FONT,
        fontSize: 11,
        color: 'var(--g500)',
        marginBottom: 20,
      }}>
        <span style={{ fontSize: 9 }}>▶</span>
        {topic.duration}
      </div>

      {/* Arrow CTA */}
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--g800)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: 0, height: 0,
          borderTop: '7px solid transparent',
          borderBottom: '7px solid transparent',
          borderLeft: '11px solid #fff',
          marginRight: -3,
        }} />
      </div>

    </div>
  );
}
