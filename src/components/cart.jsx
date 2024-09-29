// Card.jsx
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
