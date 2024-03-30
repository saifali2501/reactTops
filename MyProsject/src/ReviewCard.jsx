// ReviewCard.js
import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
// import ReviewForm from './ReviewForm';

export default function ReviewCard() {
  const [reviewData, setReviewData] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleReviewSubmit = (data) => {
    setReviewData(data);
    setIsFormOpen(false);
  };

  return (
    <>
      <div>
        <Card style={{ width: '18rem' }}>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
            <Button onClick={toggleForm}>Open Form</Button>
          </CardBody>
        </Card>
      </div>
      {isFormOpen && <ReviewForm onReviewSubmit={handleReviewSubmit} />}
      {reviewData && (
        <div className="mt-3">
          <h5>Submitted Review:</h5>
          <p>Title: {reviewData.title}</p>
          <p>Rating: {reviewData.rating}</p>
          <p>Description: {reviewData.description}</p>
        </div>
      )}
    </>
  );
}
