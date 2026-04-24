import React from 'react';

export default function WebFrame({ children, url = 'el-eman.com', breakpoint = 'Desktop — 1260px' }) {
  return (
    <div className="web-frame">
      <div className="chrome-bar">
        <div className="chrome-dots">
          <div className="chrome-dot" />
          <div className="chrome-dot" />
          <div className="chrome-dot" />
        </div>
        <div className="chrome-url">{url}</div>
        <div className="chrome-bp">{breakpoint}</div>
      </div>
      <div className="web-content">
        {children}
      </div>
    </div>
  );
}
