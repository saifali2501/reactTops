// import React, { useState } from 'react'
// import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
// import ReviewForm from './ReviewForm';


// export default function ReviewCard() {
//   const [addReview, setAddReview] = useState([]);

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   const deleteHandler = (index) => {
//     window.alert("Are you sure you want to delete this review?");
//     setAddReview(addReview.filter((e, i) => index !== i));
//   };

//   const renderStars = (rating) => {
//     const stars = []
//     for (let i = 1; i <= 5; i++) {
//       stars.push(<span key={i} className={i <= rating ? "star-filled" : "star-empty"}>&#9733;</span>);
//     }
//     return stars
// }

//   return (
//     <>
     
//           <ReviewForm toggle={toggle} modal={modal}/>
//         <div>
//         <Card
//   style={{
//     width: '18rem'
//   }}
// >
//   <img
//     alt="Sample"
//     src="https://picsum.photos/300/200"
//   />
//   <CardBody>
//     <CardTitle tag="h5">
//       Card title
//     </CardTitle>
//     <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//     >
//       Card subtitle
//     </CardSubtitle>
//     <CardText>
//       Some quick example text to build on the card title and make up the bulk of the card‘s content.
//     </CardText>
//     <Button onClick={toggle}>
//       click
//     </Button>
//   </CardBody>
// </Card>
//         </div>
//     </>
   
//   )
// }


