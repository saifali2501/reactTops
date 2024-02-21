import React from "react";
import { useSelector } from "react-redux";

export default function Amount() {
  let data = useSelector((state) => {
    console.log("------->", state);
    return state.AMOUNT.amount;
  });
  console.log("data:", data)
  return (
    <div>
      <h1>amount is {data}</h1>
    </div>
  );
}
