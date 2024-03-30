// ReviewForm.js
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function ReviewForm({ onReviewSubmit }) {
  const [review, setReview] = useState({
    title: '',
    rating: 0,
    description: ''
  });

  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ ...review, rating });
    setReview({ title: '', rating: 0, description: '' });
    setRating(0);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input type="text" value={review.title} onChange={(e) => setReview({ ...review, title: e.target.value })} required />
        </FormGroup>
        <FormGroup>
          <Label>Rating</Label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= rating ? 'star-filled' : 'star-empty'} onClick={() => handleStarClick(star)}>
                &#9733;
              </span>
            ))}
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input type="textarea" value={review.description} onChange={(e) => setReview({ ...review, description: e.target.value })} required />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
