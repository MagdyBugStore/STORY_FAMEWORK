import React from 'react';

export default function BoardGroup({ title, count, subtitle, children }) {
  return (
    <div className="board-group">
      <div className="board-group-header">
        <div className="board-group-title">{title}</div>
        <div className="board-group-subtitle">
          {subtitle || `${count} Screens`}
        </div>
      </div>
      <div className="board-grid">
        {children}
      </div>
    </div>
  );
}
