import React from 'react';

export default function BoardLayout({ children, className }) {
  return (
    <div className={['board-layout', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
