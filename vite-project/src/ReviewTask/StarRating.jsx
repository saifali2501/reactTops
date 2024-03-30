// StarRating.js
import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i} className={i <= rating ? "star-filled" : "star-empty"}>&#9733;</span>);
  }
  return <div className="star-rating fs-6"><p color="black" style={{color:"black",fontWeight:"700"}}>Rating:{stars}</p></div>;
};

export default StarRating;
