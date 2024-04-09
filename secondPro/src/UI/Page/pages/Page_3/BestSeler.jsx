import React from "react";
import "./BestSeler.css";
import Img1 from "../Page_3/Image/img1.webp";
import Img2 from "../Page_3/Image/img2.webp";
import Img3 from "../Page_3/Image/img3.webp";
import Img4 from "../Page_3/Image/img4.webp";
import Img5 from "../Page_3/Image/img5.webp";
import Img6 from "../Page_3/Image/img6.webp";
import Img7 from "../Page_3/Image/img7.webp";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  NavLink,
} from "reactstrap";

export default function BestSeler() {
  let brandData = [
    {
      name: Img1,
      text: "JP - Space Tablet 10.4 Wi-Fi 32GB",
      price: "$85.00",
    },
    {
      name: Img2,
      text: "Ocean Pro 11 - 12.3 Touch Screen",
      price: "$97.00",
    },
    {
      name: Img3,
      text: "Shel 50 Class LED 4K UHD Smart TV",
      price: "$70.00",
    },
    {
      name: Img4,
      text: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking",
      price: "$87.00",
    },
    {
      name: Img5,
      text: "Smartphone Z Pixel Max 128GB Unlocked",
      price: "$60.00",
    },
    {
      name: Img6,
      text: "65 Class Nano LED 4K UHD Smart TV",
      price: "$76.00",
    },
    {
      name: Img7,
      text: "JP - Space Tablet 10.4 Wi-Fi 32GB",
      price: "$78.00",
    },
  ];

  return (
    <>
      <section className="main_brand p-5">
        <div style={{ backgroundColor: "white " }} className="container p-5 ">
          {/* <div className="row "> */}
          <h1 className="text-center  mb-4  " style={{ fontWeight: "400" }}>
            Select Your Brand
          </h1>

          <div className="owl-carousel owl-theme ">
            {brandData?.map((e, i) => {
              return (
                <div key={i}>
                  <NavLink className="">
                 

                    <Card
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img alt="Sample" src={e?.name} className="img-fluid" />
                      <CardBody className="cardbd ">
                      
                        <CardSubtitle className="mb-2 w-75 text-muted" tag="h6">
                          {e.text}
                        </CardSubtitle>
                        <CardText style={{color:"#5b0ffd",fontSize:"19px"}}>{e.price}</CardText>
                      </CardBody>
                    </Card>
                    
                  </NavLink>
                </div>
              );
            })}
          </div>
          <Button className="view_all ">
            <NavLink>View All</NavLink>
          </Button>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
