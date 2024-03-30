import React from "react";
import img1 from "../../pages/page_4/Image/laptop.webp";
import img2 from "../../pages/page_4/Image/ph.webp";
import img3 from "../../pages/page_4/Image/mbl.webp";
import img4 from "../../pages/page_4/Image/sound.webp";
import img10 from "../../pages/page_4/Image/ph.webp";
import img5 from "../../pages/page_4/Image/watch.webp";
import img6 from "../../pages/page_4/Image/dron.webp";
import img7 from "../../pages/page_4/Image/air.webp";
import img9 from "../../pages/page_4/Image/dron.webp";
import img8 from "../../pages/page_4/Image/watch.webp";
import { NavLink } from "reactstrap";
import "./Cetagry.css"

export default function Cetagary() {
  let cetgary = [
    {
      name: img1,
    },
    {
      name: img2,
    },

    {
      name: img3,
    },
    {
      name: img4,
    },
    {
      name: img5,
    },
    {
      name: img6,
    },
    {
      name: img7,
    },
    {
      name: img8,
    },
    {
      name: img9,
    },
    {
      name: img10,
    },
  ];

  return (
    <>

     
        
      <div className="mobile ">
        <div style={{backgroundColor:"white"}} className="container p-5">
        <h1
        className="text-center mt-1 mb-3"
        style={{ fontWeight: "400", padding: "15px" }}
        
        >
        Shop by Category
      </h1>
          <div className="mobile_grid">
            {cetgary.map((e, i) => {
              return (
                <div key={i} className="mobile_skin">
                  <NavLink
                    to={"/layercollect"}
                    className="text-decoration-none text-black"
                  >
                    <div className="mobile_image" >
                      <img
                        src={e?.name}
                        alt=""
                       
                      />
                      {/* <span className="text-white mobile_text">
                        {e?.mobileText}
                      </span> */}
                    </div>
                    {/* <div className="d-flex justify-content-between pt-3 pb-3">
                      <span className="skin_text">{e?.mobileType}</span>
                      <span>{e?.MobilePrice}</span>
                    </div> */}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
