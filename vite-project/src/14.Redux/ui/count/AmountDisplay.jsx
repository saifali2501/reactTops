import React from "react";
import { useSelector } from "react-redux";

export default function AmountDisplay() {
  let data = useSelector((state) => {
    console.log("---------jhjgjhdgjh", state);
    return state.AMOUNT;
  });
  return (
    <div>
      <hr />
      <h1>Amount is {data.amount}</h1>
    </div>
  );
}
