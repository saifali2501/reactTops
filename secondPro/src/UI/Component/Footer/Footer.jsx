import React from "react";
import "./Footer.css";
import { NavLink } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";
import Imge1 from "../../../assets/Images/brand-mastercard@3x.png";
import Imge2 from "../../../assets/Images/brand-chinaunionpay@3x.png";
import Imge3 from "../../../assets/Images/brand.png";
import Imge4 from "../../../assets/Images/Diners.png";
import Imge5 from "../../../assets/Images/brand-jcb@3x.png";
import Imge6 from "../../../assets/Images/Discover.png";

// import Imge3 from "../../Images/brand.png";
// import Imge4 from "../../Images/Diners.png";
// import Imge5 from "../../Images/";
// import Imge6 from "../../Images/";



export default function Footer() {
  let brand = [
    {
      name: Imge1,
    },
    {
      name: Imge2,
    },
    {
      name: Imge3,
    },
    {
      name: Imge4,
    },
    {
        name: Imge5,
      },
      {
        name: Imge6,
      },
  
  ];

  return (
    <div>
      <footer>
        <div className="container py-4">
          <div className="main d-flex justify-content-between">
            <div className="grid-1">
              <h4>Store Location</h4>
              <ul className="ul_flex">
                <li>
                  <a href="/">500 Terry Francine Street</a>
                </li>
                <li>
                  <a href="/">San Francisco, CA 94158</a>
                </li>
                <li>
                  <a href="mailto:info@mysite.com">info@mysite.com</a>
                </li>
                <li>
                  <a href="tel:123-456-7890">123-456-7890</a>
                </li>
              </ul>
              <div className="icons">
                <ul className="d-flex gap-2 py-2">
                  <li>
                    <Facebook />
                  </li>
                  <li>
                    <Instagram />
                  </li>
                  <li>
                    <Twitter />
                  </li>
                  <li>
                    <Linkedin />
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-2">
              <h4>Product Categories</h4>
              <ul className="ul_flex">
                <li>
                  <NavLink to="/">Shop All</NavLink>
                </li>
                <li>
                  <NavLink to="/">Computers</NavLink>
                </li>
                <li>
                  <NavLink to="/">Tablets</NavLink>
                </li>
                <li>
                  <NavLink to="/">Drones & Cameras</NavLink>
                </li>
                <li>
                  <NavLink to="/">Audio</NavLink>
                </li>
                <li>
                  <NavLink to="/">Mobile</NavLink>
                </li>
                <li>
                  <NavLink to="/">TV & Home Cinema</NavLink>
                </li>
              </ul>
            </div>
            <div className="grid-3">
              <h4>Company</h4>
              <ul className="ul_flex">
                <li>
                  <NavLink to="/">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Help Center</NavLink>
                </li>
                <li>
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Careers</NavLink>
                </li>
              </ul>
            </div>
            <div className="grid-4">
              <h4>Customer Service</h4>
              <ul className="ul_flex">
                <li>
                  <NavLink to="/">Shipping & Returns</NavLink>
                </li>
                <li>
                  <NavLink to="/">Terms & Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/">Payment Methods</NavLink>
                </li>
                <li>
                  <NavLink to="/">FAQ</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copy">
          <div className="txt">
            <p style={{ textAlign: "center" }}>
              We accept the following paying methods
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-5 py-5">
            {
                brand.map((e,i)=>{
                    return(
                        <div key={i}>
                            <img src={e.name} alt="" />
                        </div>
                    )
                })
            }
          </div>
        </div>
      </footer>
    </div>
  );
}
