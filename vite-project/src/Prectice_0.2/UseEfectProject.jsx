import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const array = ["urvish", "meet", "manohar", "saif", "vivek", "nimesh", "nidhipriya"];
let arr = ["meet", "nimesh"];

export default function UseEffectExample() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const currentName = array[index];

    if (currentName.length > 5) {
      alert("Name is too long");
    }

    if (arr.includes(currentName)) {
      alert("Name is same");
    }
  }, [index]);

  const changeNameHandler = () => {
    if (array.length - 2 < index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className="border border-black p-4 d-flex flex-column gap-2">
        <h1>Name is {array[index]}</h1>
        <h1>Count is {count}</h1>
        <Button color="danger" onClick={changeNameHandler}>
          Change name
        </Button>
        <Button color="danger" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </>
  );
}
