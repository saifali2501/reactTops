import React from "react";
import { useSelector } from "react-redux";

export default function Countttt() {
  const data = useSelector((state) => {
    return state.COUNT.count;
  });
  return (
    <div>
      <h1>count is {data}</h1>
    </div>
  );
}
