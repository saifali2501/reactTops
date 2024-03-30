// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import ReviewForm from './ReviewForm';
import ReviewsSection from './Reviews';
// import ReviewsSection from './ReviewsSection';

function ReviewApp() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className="App">
      <h1>Review Application</h1>
      <div className="container">
        <div className="card w-50 ">
        <div className="section">
          <h2>Give Review</h2>
          <ReviewForm addReview={addReview} />
        </div>
        <div className="section">
          <h2>Reviews</h2>
          <ReviewsSection reviews={reviews} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReviewApp;
