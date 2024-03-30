import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function SecReviForm({toggle,modal,review,setReview,rating,setRating,setAddReview,addReview}) {

  
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
                      className={i <= rating ? "star-filled" : "star-empty "}
                      onClick={() => handleStarClick(i)}
                    >
                      &#9733;
                    </span>
                  );
                }
                return stars;
              };
  return (
    <div>
        <div>
    
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Review</ModalHeader>
        <ModalBody>
        <Form
          onSubmit={handleSubmit}
          className="border border-1 w-100 m-auto my-4 p-3 rounded-2"
          style={{ boxShadow: "0px 0px 3px" }}
        >
          <h2>Review Application</h2>
          <div className="inputbox mt-3">
            <Label>Title<span style={{ color: "red" }}>*</span></Label>
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
                <Label style={{fontSize:"18px"}} className="m-0 ">
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
              required
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
    </div>
  )
}
