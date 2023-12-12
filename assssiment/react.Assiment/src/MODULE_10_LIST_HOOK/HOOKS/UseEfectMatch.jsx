import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEfectMatch() {
  let [index, setindex] = useState(0);

  let arry = ["nikku", "saif", "jeel", "haji", "kaifu"];
  let arr = ["jeel", "haji", "kaifu"];

  const incre = () => {
    if (arry.length - 2 < index) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  };

  useEffect(() => {
    if (arr.includes(arry[index])) {
      alert("this is same");
    }
  }, [index]);

  return (
    <div className="border border-3 mt-5 w-50 text-center border-dark p-4 m-auto">
      <h1>name is {arry[index]}</h1>

      <Button onClick={() => incre()}>btn</Button>
    </div>
  );
}
