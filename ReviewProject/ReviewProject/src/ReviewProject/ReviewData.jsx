
import React from "react";
import "./Review.css";
import {
  Button,
 
} from "reactstrap";

export default function ReviewData({ toggle, addReview, setAddReview }) {
 

  const deleteHandler = (index) => {
    window.alert("Are you sure you want to delete this review?");
    setAddReview(addReview.filter((e, i) => index !== i));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star-filled" : "star-empty"}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div>
        <section>
          <div className="main-div">
            <div className="lode">
              <div className="immge">
              </div>
              <img 
                className=" "
                src="https://hips.hearstapps.com/hmg-prod/images/lordoftherings-1636391090.jpg?resize=1200:*"
                alt=""
              />
             

              <div className="text ">
                <h3 className="">
                  The Lord of the Rings
                  <span style={{ color: "red" }}> by Harper Lee </span>
                </h3>
                <p>
                  "The Lord of the Rings" is a classic high-fantasy trilogy by
                  J.R.R. Tolkien. It follows the journey of Frodo Baggins and
                  his companions as they seek to destroy the One Ring, an object
                  of great power sought by the dark lord Sauron. Along the way,
                  they face numerous challenges, battles, and adventures,
                  ultimately culminating in the epic confrontation between good
                  and evil. The trilogy explores themes of friendship, heroism,
                  and the struggle against corruption.
                </p>
                <Button className="toggle_btn w-100" onClick={toggle}>
                  Give Review
                </Button>
                <div>
                  {addReview.length > 0 ? (
                    <div className="border ms-2 me-1  mt-2 showdata"  style={{ maxHeight: "300px", overflowY: "auto" }}>
                      {addReview.map((e, i) => {
                        return (
                          <div
                            key={i}
                            className="border border-dark p-2 d-flex mb-1 justify-content-between "
                          >
                            <div>
                              <div>
                                <b>Title : </b>{" "}
                                <span style={{ color: "#8a8a8a" }}>
                                  {" "}
                                  {e.title}
                                </span>
                              </div>

                              {e.description.length > 0 && (
                                <div>
                                  <b>Description : </b>{" "}
                                  <span style={{ color: "#8a8a8a" }}>
                                    {" "}
                                    {e.description}
                                  </span>
                                </div>
                              )}
                              {/* <div>
                    <b>Rating : </b> <span>{getStars(e.rating)} </span>
                  </div> */}
                              <div className="d-flex  gap-1 align-items-center">
                                <div>
                                  <b>Rating:</b> {renderStars(e?.rating)}
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button
                                color="danger"
                                onClick={() => deleteHandler(i)}
                              >
                                delete
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="emptytable text-center pt-5 ">
                      <h1> Review Not Available </h1>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
     
    </>
  );
}
