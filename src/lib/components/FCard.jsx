import React from 'react';

export default function FCard({
  name,
  price,
  rating,
  imgBg,
  address,
  format,
  players,
  className,
}) {
  const gameFormat = format || players;
  const hasDetails = Boolean(address) || Boolean(gameFormat);

  return (
    <div className={['fcard', className].filter(Boolean).join(' ')}>
      <div className="fcard-img" style={imgBg ? { background: imgBg } : {}}>
        [Content Image]
        <div className="fcard-img-badge">⭐ {rating || '4.8'}</div>
      </div>
      <div className="fcard-body">
        <div className="fcard-top">
          <div className="fcard-name">{name}</div>
          <div className="fcard-price">{price || '150 ج/ساعة'}</div>
        </div>
        {hasDetails ? (
          <div className="fcard-details">
            <div className="fcard-address">{address}</div>
            <div className="fcard-format">{gameFormat ? `نظام اللعب: ${gameFormat}` : ''}</div>
          </div>
        ) : (
          <div className="fcard-meta">
            <div className="mbar" style={{ width: '80px' }}></div>
            <div className="mbar" style={{ width: '55px' }}></div>
            <div className="mbar" style={{ width: '38px' }}></div>
          </div>
        )}
        <div className="btn-primary">احجز</div>
      </div>
    </div>
  );
}
