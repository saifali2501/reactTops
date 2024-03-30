// ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addReview({ title, rating, description });
    setTitle('');
    setRating('');
    setDescription('');
  };

  const handleReset = () => {
    setTitle('');
    setRating('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", gap:"10px", flexDirection:"column"}}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title*" required />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating*" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Submit</button>

      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default ReviewForm;
