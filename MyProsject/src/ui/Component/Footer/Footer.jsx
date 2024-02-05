import React from "react";
import "./Footer.css";
import  { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export default function Footer() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  }
  return (
    <>
      <div
        className="main d-flex w-100 justify-content-between black text-white "
        style={{
          margin:"0px 0px 20px 20px ",
          padding: "40px 40px",
          backgroundColor: "black",
          alignItems: "flex-start",
          margin: "0px 0px 0px 0px",
        }}
      >
        <div className="Categories text-center ">
          <h5 style={{ fontSize: "25px" }}>Categories</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li>Wayfer</li>
            <li>Aviator</li>
            <li>Round</li>
            <li>Square</li>
            <li>Clubmaster</li>
            <li>Oversize</li>
          </ul>
        </div>
        <div className="Buisness">
          <h5 style={{ fontSize: "25px" }}>Company</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>About US</li>
            <li style={{ margin: "0" }}>Blogs</li>
            <li style={{ margin: "0" }}>Term and conditions</li>
            <li style={{ margin: "0" }}>Privacy Policy</li>
          </ul>
        </div>
        <div className="Aboutt ">
          <h5 style={{ fontSize: "25px" }}>Location</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>
              Eklingpura Chouraha, Ahmedabad Main Road{" "}
            </li>
            <li style={{ margin: "0" }}>
              (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
            </li>
          </ul>
        </div>
        <div className="Useful_Links  ">
          <h5 style={{ fontSize: "25px" }}>NEED HELP</h5>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0",
              gap: "7px",
            }}
          >
            <li style={{ margin: "0" }}>Contact Us</li>
            <li style={{ margin: "0" }}>Return , Refund and Cancellation</li>
            <li style={{ margin: "0" }}>FAQ</li>
            <li style={{ margin: "0" }}>Track orders</li>
          </ul>
        </div>
       
      </div>
      <div className="accor">
      <Accordion  open={open} toggle={toggle}>
        <AccordionItem >
          <AccordionHeader style={{backgroundColor:"black"}} targetId="1"> Why Choose Us</AccordionHeader>
          <AccordionBody  accordionId="1">
            <h1>Why Choose Woggles Online Sunglasses Store for Sunglasses Shopping?</h1>
        <p>Woggles is India’s finest online sunglasses store for all your eye protection and fashion needs. Launched in 2022, Woggles is an ultimate online sunglasses destination offering premium sunglasses at a reasonable rate. </p>
        <p>It started with the motive of bringing a change in the sunglasses market by not just giving protection from the sun but also leaving customers happy with a smooth shopping</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader  targetId="2">Popular Categories</AccordionHeader>
          <AccordionBody accordionId="2">
          <h1>Popular Sunglasses</h1>
          <p>Wayfarer Sunglasses|Square Sunglasses|Aviator Sunglasses|Round Sunglasses |Clubmaster Sunglasses|Hexagonal Sunglasses</p>
          <p>Wayfarer Sunglasses|Square Sunglasses|Aviator Sunglasses|Round Sunglasses |Clubmaster Sunglasses|Hexagonal Sunglasses</p>
          </AccordionBody>
        </AccordionItem>
       
     
      </Accordion>
      </div>
      <div className="footer" style={{paddingTop:"25px",backgroundColor:"black"}}>
        <div className="footer_container">
          <div className="footer-email-social" style={{display:"flex"}}>
            <div className="footer-join-og-club">
              <div className="footer-og-club">
                <h1>JOIN THE OG CLUB!</h1>
              </div>
              <div className="footer-og-club-text">
                <div className="footer-email">
                  <input className="email" type="text" placeholder="Enter Your Email Id" />
                  <button  className="btn">JOIN</button>
                </div>
              </div>
            </div>
              {/* <h1>kjdhksjdhkj</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}
