import React from 'react';

const Offer = ({ title, price, img }) => {
  return (
    <div className="offer" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${img})` }}>
      <div className="offer-title">{title}</div>
      <div className="offer-price">{price}</div>
    </div>
  );
}

export default Offer;