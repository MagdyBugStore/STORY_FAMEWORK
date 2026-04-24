import React from 'react';
import StatusBar from './StatusBar';

export default function Phone({ children, showStatusBar = true }) {
  return (
    <div className="phone">
      {showStatusBar && <StatusBar />}
      {children}
    </div>
  );
}
