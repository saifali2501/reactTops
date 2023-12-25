import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

let nameArr = ["saif", "tahid", "kajal", "wasim", "nimesh"];
export default function Homee() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <div className="d-flex justify-content-center gap-5">
        <ul>
          {nameArr.map((e, i) => {
            return (
              <li key={i + 1} role="button" onClick={() => navigate(`/user/${e}`)}>
                {e}
              </li>
            );
          })}
          {/* <li role="button" onClick={() => navigate("/user/saif")}>
            Saifu
          </li> */}
        </ul>
      </div>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
