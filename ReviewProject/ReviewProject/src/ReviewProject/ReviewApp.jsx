import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewData from "./ReviewData";

export default function ReviewApp() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    title: "",
    rating: 0,
    description: "",
  });
  const [addReview, setAddReview] = useState([]);


  return (
    <div>
      
      <ReviewData
        toggle={toggle}
        addReview={addReview}
        setAddReview={setAddReview}
      />

      <ReviewForm
        review={review}
        setReview={setReview}
        rating={rating}
        setRating={setRating}
        toggle={toggle}
        modal={modal}
        addReview={addReview}
        setAddReview={setAddReview}
      />
    </div>
  );
}
