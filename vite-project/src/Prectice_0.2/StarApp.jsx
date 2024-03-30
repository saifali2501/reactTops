import React from 'react';
import StarRating from './StarRating';

const StarApp = () => {
  return (
    <div>
      <h1>Star Rating Component</h1>
      <StarRating totalStars={5} />
    </div>
  );
};

export default  StarApp;
