import React from 'react';

export default function ProgressBar({ step, total = 4 }) {
  return (
    <div className="prog-wrap">
      <div className="prog-top">
        <div className="prog-lbl">الخطوة {step} من {total}</div>
        <div className="prog-lbl">{Math.round((step / total) * 100)}%</div>
      </div>
      <div className="prog-bg">
        <div className="prog-fill" style={{ width: `${(step / total) * 100}%` }}></div>
      </div>
    </div>
  );
}
