import React from "react";

import "./Pag_sec.css";
// import Imge1 from "../../../Images/Page_2/mobile.webp";
// import Imge2 from "../../../Images/Page_2/HeadPhone.webp";
import Imge1 from "../../../../assets/Images/Page_2/mobile.webp";
import Imge2 from "../../../../assets/Images/Page_2/HeadPhone.webp";

import { Button, NavLink } from "react-bootstrap";

export default function PageSecond() {
  return (
    <>
      <section className="hkj">
        <div className="container hkj_container py-5">
          <div className="row">
            <div className="col-sm-6 col-12 mb-3 mb-sm-0">
              <div className="imge1">
                <div className="img">
                  <img className="w-100 h-100" src={Imge1} alt="" />
                  <div
                    className="text1"
                    style={{
                      position: "absolute",
                      top: "100px",
                      bottom: "0",
                      left: "60px",
                    }}
                  >
                    <p>Holiday Deals</p>
                    <h1
                      style={{
                        width: "30%",
                        fontWeight: "700",
                        fontSize: "45px",
                      }}
                    >
                      Up to 30% off
                    </h1>
                    <p>Selected Smartphone Brands</p>
                    <Button className="btk w-25" style={{ height: "151%" }}>
                      <NavLink>Shop</NavLink>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6  col-12">
              <div className="img">
                <img className="w-100 h-100" src={Imge2} alt="" />
                <div
                  className="text1"
                  style={{
                    position: "absolute",
                    top: "80px",
                    bottom: "0",
                    left: "60px",
                  }}
                >
                  <p>Just In</p>
                  <h1
                    style={{
                      width: "40%",
                      fontWeight: "700",
                      fontSize: "45px",
                    }}
                  >
                    Take Your Sound Anywhere
                  </h1>
                  <p>Top Headphone Brands</p>
                  <Button className="btk2 w-25 h-100">
                    <NavLink>Shop Now</NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
