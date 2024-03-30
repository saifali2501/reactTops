// import React, { useState } from 'react';
// import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
// import SecReviForm from './SecReviForm';

// export default function SecReviList() {
//   const [addReview, setAddReview] = useState([]);
//   const deleteHandler = (index) => {
//     window.alert("Are you sure you want to delete this review?");
//     setAddReview(addReview.filter((_, i) => index !== i));
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(<span key={i} className={i <= rating ? "star-filled" : "star-empty"}>&#9733;</span>);
//     }
//     return stars;
//   };

//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <SecReviForm toggle={toggle} modal={modal} addReview={addReview} setAddReview={setAddReview} />
      {addReview.map((review, index) => (
        <Card key={index} style={{ width: "20rem", margin: "10px" }}>
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle style={{ fontSize: "20px", fontWeight: "600" }} tag="h4">
              Title: <span style={{ color: "gray" }} className="fs-5">{review.title}</span>
            </CardTitle>
            <CardText>
              Rating: {renderStars(review?.rating)}
            </CardText>
            <CardText style={{ color: "black", fontWeight: "700" }}>
              Description: {review.description}
            </CardText>
            <div className='d-flex'>
              <Button color="danger" className="w-100" onClick={() => deleteHandler(index)}>Delete</Button>
              {/* Assuming this button toggles the modal */}
              <Button color="danger" className="w-100" onClick={toggle}>Open Modal</Button>
            </div>
          </CardBody>
        </Card>
      ))}
//     </div>
//   );

// }

// import React from 'react'

// export default function SecReviList() {
//   return (
//     <div>
//       jhkfjhjkggjl
//     </div>
//   )
// }

