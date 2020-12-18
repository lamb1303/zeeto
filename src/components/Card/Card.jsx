import React from "react";
import "./Card.scss";
const Card = ({ type, title, price, image, rating }) => {
  return (
    <div className="card">
      <div className="card__info">
        <p>{title}</p>
        <p className="card__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="card__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img alt="someImage.png" className="card__image" src={image} />
      <button>View Details</button>
    </div>
  );
};

export default Card;
