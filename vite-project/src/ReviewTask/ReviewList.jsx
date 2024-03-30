// ReviewList.js
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import StarRating from "./StarRating"; // Import the StarRating component
import { Delete } from "lucide-react";

export default function ReviewList() {
  const [addReview, setAddReview] = useState([]);

  const deleteHandler = (index) => {
    window.alert("Are you sure you want to delete this review?");
    setAddReview(addReview.filter((e, i) => index !== i));
  };

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={i <= rating ? "star-filled" : "star-empty"}>&#9733;</span>);
    }
    return stars
}


  return (
    <>
      <div className="" >
        {/* <ReviewForm addReview={addReview} setAddReview={setAddReview} /> */}
        <ReviewForm addReview={addReview} setAddReview={setAddReview} />
        <div className="d-flex flex-wrap justify-content-center ">
          {addReview.map((review, index) => (
            <Card
              key={index}
              style={{ width: "20rem", height: "auto", margin: "10px" }}
              >
             
              <CardBody>
                <CardTitle
                  style={{ fontSize: "20px", fontWeight: "600" }}
                  tag="h4"
                >
                  Tittle:
                  <span style={{ color: "gray" }} className="fs-5">
                    {review.title}
                  </span>
                </CardTitle>

                <CardText className="">
                  {/* <StarRating rating={review.rating} /> */}
                  <div>Rating: {renderStars(review?.rating)}</div>

                </CardText>

                <CardText style={{ color: "black", fontWeight: "700" }}>
                  Description: {review.description}
                </CardText>
                <Button
                  color="danger"
                  className="w-100"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
