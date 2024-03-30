import React, { useState } from 'react';
import './Star.css'; // Import CSS file for styling
import { current } from '@reduxjs/toolkit';

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex +1);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index+1}
          className={index < rating ? "star-filled" : "star-empty"}
          onClick={() => handleStarClick(index)}
        >
          &#9733; 
        </span>
      ))}
    </div>
  );
};

export default StarRating;
