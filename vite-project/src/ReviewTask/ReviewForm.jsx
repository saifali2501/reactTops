// // ReviewForm.js
// import React, { useState } from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";

// export default function ReviewForm({ addReview, setAddReview }) {
//   const [review, setReview] = useState({
//     title: "",
//     rating: 0,
//     description: ""
//   });

//   const [rating, setRating] = useState(0);

//   // const handleStarClick = (starIndex) => {
//   //   setRating(starIndex + 1);
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const newReview = { ...review, rating: rating };
//     setAddReview([...addReview, {...review, rating:rating}]);
//     setReview({ title: "", rating: 0, description: "" });
//     setRating(0);
//   };

//   const ResetHandler = () =>{
//     setReview({ title: "", rating: 0, description: "" });
//     setRating(0);
//   }

//   const handleStarClick = (newRating) => {
//     setRating(newRating)
// }

//   const renderStars = () => {
//     const stars = []
//     for (let i = 1; i <= 5; i++) {
//         stars.push(
//             // <FontAwesomeIcon
//             //     key={i}
//             //     icon={i <= rating ? solidStar : regularStar}
//             //     onClick={() => handleRatingChange(i)}
//             //     style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'grey' }}
//             // />
//             <span
//             key={i + 1}
//             className={index < rating ? "star-filled" : "star-empty"}
//             onClick={() => handleStarClick(index)}
//           >
//             &#9733;
//           </span>
//         )
//     }
//     return stars
// }

//   return (
//     <div className="w-25  m-auto">
//       <Form
//         onSubmit={handleSubmit}
//         className="border border-1 w-100 m-auto my-4 p-3 rounded-2"
//         style={{ boxShadow: "0px 0px 3px" }}
//       >
//         <h2>Review</h2>
//         <div className="inputbox mt-3">
//           <Label>Title</Label>
//           <Input
//             required
//             name="title"
//             placeholder="Title"
//             type="text"
//             value={review.title}
//             onChange={(e) => setReview({ ...review, title: e.target.value })}
//           />
//         </div>
//         <div className="inputbox mt-3">
//           <div className="star-rating">
//             {/* {[...Array(5)].map((e, index) => (
//               <span
//                 key={index + 1}
//                 className={index < rating ? "star-filled" : "star-empty"}
//                 onClick={() => handleStarClick(index)}
//               >
//                 &#9733;
//               </span>
//             ))} */}
//              <FormGroup className='d-flex gap-4 align-items-center pb-3 pt-3'>
//                     <Label className='m-0'>Rating<span style={{ color: 'red' }}>*</span></Label>
//                     <div className='d-flex gap-3 align-items-center'>
//                         {renderStars()}
//                     </div>
//                 </FormGroup>

//           </div>
//         </div>
//         <div className="inputbox mt-3">
//           <Label>Description</Label>
//           <Input
//             name="Description"
//             placeholder="Description"
//             type="textarea"
//             value={review.description}
//             onChange={(e) => setReview({ ...review, description: e.target.value })}
//           />
//         </div>
//         <div className="d-flex gap-3 mt-3">
//           <Button type="submit" className="bg-danger w-50">
//             Submit
//           </Button>
//           <Button type="reset" onClick={ResetHandler} className="w-50">Reset</Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import ReviewCard from "./ReviewCard";

export default function ReviewForm({ addReview, setAddReview,toggle,modal }) {

  

  const [review, setReview] = useState({
    title: "",
    rating: 0,
    description: "",
  });

  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddReview([...addReview, { ...review, rating: rating }]);
    localStorage.setItem(
      "add",
      JSON.stringify([...addReview, { ...review, rating: rating }])
    );
    setReview({ title: "", rating: 0, description: "" });
    setRating(0);
    toggle()
  };

useEffect(()=>{
  let Jsondata = localStorage.getItem("add")
  let normaldata = JSON.parse(Jsondata)
  setAddReview(normaldata || [])
},[])


  const ResetHandler = () => {
    setReview({ title: "", rating: 0, description: "" });
    setRating(0);
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? "star-filled" : "star-empty"}
          onClick={() => handleStarClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
    <div className="d-flex gap-3 flex-wrap">
    <ReviewCard toggle={toggle}/>
    {/* <ReviewCard toggle={toggle}/> */}
    </div>
    
     <div className="w-25 m-auto">
        
    
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Form
          onSubmit={handleSubmit}
          className="border border-1 w-100 m-auto my-4 p-3 rounded-2"
          style={{ boxShadow: "0px 0px 3px" }}
        >
          <h2>Review</h2>
          <div className="inputbox mt-3">
            <Label>Title</Label>
            <Input
              required
              name="title"
              placeholder="Title"
              type="text"
              value={review.title}
              onChange={(e) => setReview({ ...review, title: e.target.value })}
            />
          </div>
          <div className="inputbox mt-3">
            <div className="star-rating">
              <FormGroup className="d-flex gap-4 align-items-center pb-3 pt-3">
                <Label className="m-0">
                  Rating<span style={{ color: "red" }}>*</span>
                </Label>
                <div className="d-flex gap-3 align-items-center">
                  {renderStars()}
                </div>
              </FormGroup>
            </div>
          </div>
          <div className="inputbox mt-3">
            <Label>Description</Label>
            <Input
              name="Description"
              placeholder="Description"
              type="textarea"
              value={review.description}
              onChange={(e) =>
                setReview({ ...review, description: e.target.value })
              }
            />
          </div>
          <div className="d-flex gap-3 mt-3">
            <Button type="submit" className="bg-danger w-50">
              Submit
            </Button>
            <Button type="button" onClick={ResetHandler} className="w-50">
              Reset
            </Button>
          </div>
        </Form> 
          </ModalBody>
         
        </Modal>
      
        
      </div>
    </>
   
  );
}
