import React from 'react'

import Review from './ReviewList'
import ReviewCard from './ReviewCard'
import ReviewList from './ReviewList'

export default function ReviApp() {
  
  return (
    <div>
      {/* <ReviewCard/> */}
      <ReviewList/>
    
    </div>
  )
}

// ReviApp.js
// import React, { useState } from 'react';
// import ReviewCard from './ReviewCard';

// export default function ReviApp() {
//   const [reviews, setReviews] = useState([]);

//   const handleReviewSubmit = (reviewData) => {
//     setReviews([...reviews, reviewData]);
//   };

//   return (
//     <div>
//       <ReviewCard onReviewSubmit={handleReviewSubmit} />
//       {/* Render other ReviewCard components if needed */}
//       {reviews.map((review, index) => (
//         <div key={index}>
//           <p>Title: {review.title}</p>
//           <p>Rating: {review.rating}</p>
//           <p>Description: {review.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

