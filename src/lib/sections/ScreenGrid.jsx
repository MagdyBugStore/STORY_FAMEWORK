import React from 'react';

export default function ScreenGrid({ children, className }) {
  return (
    <div className={['board-grid', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
