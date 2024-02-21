import { Button } from "reactstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { incHandler } from "./feature/count";

export default function Update() {
  const disptch = useDispatch();
  return (
    <div>
      <Button onClick={() => disptch(incHandler())}>click</Button>
    </div>
  );
}
