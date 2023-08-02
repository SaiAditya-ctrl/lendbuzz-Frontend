

import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = ({ rating }) => {
   
  const filledStars = Math.floor(rating / 2); 
  const halfStar = rating % 2 !== 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0); 

  return (
    <div className="star-rating">
      {Array.from({ length: filledStars }, (_, index) => (
        <FaStar key={index} className="star-icon filled" />
      ))}
      {halfStar && <FaStar className="star-icon half" />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaStar key={index} className="star-icon empty" />
      ))}
    </div>
  );
};

export default StarRating;
