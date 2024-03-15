import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function FreeShoping() {
  return (
    <div>
      <section style={{ backgroundColor: "gray", }}>
        <div className="container py-3">
          <div style={{ backgroundColor: "white", height:"200px",padding:"20px" ,paddingLeft:"10px" ,textAlign:"center"}} className="row ">
            <div className="col-3">
              <div className="text">
                <h4>Curb-side pickup</h4>
              </div>
            </div>
            <div className="col-3">
            <div className="text pe-5 ">
                <h4>Curb-side pickup</h4>
              </div>
            </div>
            <div className="col-3">
            <div className="text ">
                <h4> Curb-side pickup</h4>
              </div>

            </div>
            <div className="col-3">
            <h4><FontAwesomeIcon icon={faSackDollar}/> Curb-side pickup</h4>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
