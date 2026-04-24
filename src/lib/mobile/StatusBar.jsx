import React from 'react';

export default function StatusBar({ className }) {
  return (
    <div className={['sb', className].filter(Boolean).join(' ')}>
      <div className="sb-time">9:41</div>
      <div className="sb-icons">
        <div className="sb-dot sm"></div>
        <div className="sb-dot sm"></div>
        <div className="sb-dot"></div>
      </div>
    </div>
  );
}
