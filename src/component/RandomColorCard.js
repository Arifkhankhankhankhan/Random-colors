// RandomColorCard.js
import React from 'react';
import './RandomColor.css';

const RandomColorCard = () => {
  const hexcode = '0123456789ABCDEF';

  const getRandomColor = () => {
    let color = '#';
    for (let j = 0; j < 6; j++) {
      color += hexcode[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const renderColorCards = () => {
    const colorCards = [];
    for (let i = 0; i < 30; i++) {
      const color = getRandomColor();
      colorCards.push(
        <div key={i} className="color-card" style={{ backgroundColor: color }}>
          {color}
        </div>
      );
    }
    return colorCards;
  };

  return (
    <div className="container">
      {renderColorCards()}
    </div>
  );
};

export default RandomColorCard;
