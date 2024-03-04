import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Age() {
  const navigate = useNavigate();

  let data = useParams();
  return (
    <div>
      <div>
        <h1>My age is {data?.age}</h1>

        <Button onClick={() => navigate("/")}>Go Back</Button>
      </div>
    </div>
  );
}
