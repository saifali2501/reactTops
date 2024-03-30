// ReviewsSection.js
import React from 'react';

const ReviewsSection = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.title}</h3>
          <p><strong>Rating:</strong> {review.rating}</p>
          {review.description && <p><strong>Description:</strong> {review.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
