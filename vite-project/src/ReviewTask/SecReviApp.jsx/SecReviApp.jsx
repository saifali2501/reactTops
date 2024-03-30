import React, { useState } from "react";
import SecReviCard from "./SecReviCard";
import SecReviForm from "./SecReviForm";

export default function SecReviApp() {
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
      
      <SecReviCard
        toggle={toggle}
        addReview={addReview}
        setAddReview={setAddReview}
      />

      <SecReviForm
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
