import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incOne, incTen } from "../../redux/feature/Count";

export default function CountUpdate() {
  let dipatch = useDispatch();
  return (
    <div>
      <hr />
      <Button onClick={() => dipatch(incOne())}>Inc-1</Button>
      <Button onClick={() => dipatch(incTen())}>Inc-10</Button>

    </div>
  );
}
