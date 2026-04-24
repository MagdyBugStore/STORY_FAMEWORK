import React from 'react';
import StatusBar from './StatusBar.jsx';

export default function Phone({ children, showStatusBar = true, className }) {
  return (
    <div className={['phone', className].filter(Boolean).join(' ')}>
      {showStatusBar && <StatusBar />}
      {children}
    </div>
  );
}
