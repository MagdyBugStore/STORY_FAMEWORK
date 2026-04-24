import React from 'react';

export default function ScreenList({ children, className }) {
  return (
    <div className={['flex flex-col gap-10 items-start', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
