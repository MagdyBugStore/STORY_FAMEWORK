import React from 'react';
import WebFrame from '../web/WebFrame';
import { MobileFrame } from '../web/MobileFrame';

/*
  BoardItem — renders desktop + mobile side by side
  Props:
    id           Screen ID (e.g. "W01")
    name         Screen name label
    url          URL to show in browser chrome
    children     Desktop screen component
    mobile       Mobile screen component (optional)
*/
export default function BoardItem({ id, name, url, children, mobile }) {
  const mobileView = mobile ?? children;

  return (
    <div className="board-item">
      <div className="board-item-id">{id}</div>
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>

        {/* Desktop */}
        <div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600,
            color: 'var(--g500)', letterSpacing: '.1em', textTransform: 'uppercase',
            marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--g400)' }} />
            DESKTOP — 1260px
          </div>
          <WebFrame url={url}>{children}</WebFrame>
        </div>

        {/* Mobile */}
        {!url.includes("dashboard") && (
        <div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600,
            color: 'var(--g500)', letterSpacing: '.1em', textTransform: 'uppercase',
            marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--g400)' }} />
            MOBILE — 390px
          </div>
          <MobileFrame url={url}>{mobileView}</MobileFrame>
        </div>
        )}
      </div>

      <div className="board-item-name">{name}</div>
    </div>
  );
}
