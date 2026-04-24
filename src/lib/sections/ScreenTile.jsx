import React from 'react';

export default function ScreenTile({
  id,
  name,
  type = 'mobile',
  breakpoints,
  children,
  className,
}) {
  const resolvedBreakpoints = breakpoints ?? (type === 'web' ? ['desktop', 'tablet', 'mobile'] : []);
  const renderFor = (breakpoint) =>
    typeof children === 'function' ? children({ type, breakpoint }) : children;

  return (
    <div className={['board-item', className].filter(Boolean).join(' ')}>
      <div className="board-item-name">{name}</div>
      {type === 'web' ? (
        <div className="wf-previews-bg">
          <div className="wf-previews">
            {resolvedBreakpoints.map((bp) => (
              <div key={bp} className="wf-preview">
                <div className="wf-preview-label">{bp}</div>
                <div className="wf-preview-frame" data-bp={bp}>
                  {renderFor(bp)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        children
      )}
      <div className="board-item-id">{id}</div>
    </div>
  );
}
