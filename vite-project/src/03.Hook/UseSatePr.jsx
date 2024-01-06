import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseSatePr() {
  let [Count, SetCount] = useState(8000000);
  console.log("🚀 ~ file: UseSatePr.jsx:6 ~ UseSatePr ~ test:", test);

  const increment = () => {
    //    console.log(".....>")
    SetCount(Count + 1);
  };

  return (
    <>
      <h1>Count is:{Count}</h1>
      <Button className="btn btn bg-danger" onClick={increment}>
        {" "}
        Increment{" "}
      </Button>
    </>
  );
}
