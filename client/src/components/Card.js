import React from 'react';
import './Card.css';

const Card = ({ key, imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
