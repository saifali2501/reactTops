import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function ReduserPayload() {
  let [add, setadd] = useState("");
  const reduser = (state, action) => {
    if (action.actionType === "INC") {
      return { count: state.count + +action.payload };
    } else {
      return state;
    }
  };
  const handleInputChange = (e) => {
    setadd(e.target.value);
  };

  const [count, dispatch] = useReducer(reduser, { count: 1000 });
  const handleButtonClick = () => {
    dispatch({ actionType: "INC", payload: add });
    setadd("")
  };

  return (
    <div>
      <h1>{count.count}</h1>
      <input type="text" value={add} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>ADD</Button>
    </div>
  );
}
