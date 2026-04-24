import React from 'react';

export default function BoardItem({ id, name, children, className }) {
  return (
    <div className={['board-item', className].filter(Boolean).join(' ')}>
      <div className="board-item-id">{id}</div>
      {children}
      <div className="board-item-name">{name}</div>
    </div>
  );
}
