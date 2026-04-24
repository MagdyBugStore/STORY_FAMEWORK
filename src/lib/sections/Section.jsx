import React from 'react';

export default function Section({ title, subtitle, count, children, className }) {
  const resolvedCount = count ?? React.Children.toArray(children).length;
  const resolvedSubtitle = subtitle ?? (resolvedCount ? `${resolvedCount} Screens` : undefined);

  return (
    <div className={['board-group', className].filter(Boolean).join(' ')}>
      <div className="board-group-header">
        <div className="board-group-title">{title}</div>
        {resolvedSubtitle ? <div className="board-group-subtitle">{resolvedSubtitle}</div> : null}
      </div>
      {children}
    </div>
  );
}
