import { CheckCircle, Circle, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
// import { MDBIcon } from "mdb-react-ui-kit";
export default function Todo() {
  let [task, setTask] = useState("");

  let [mytask, setMytask] = useState([]);

  let [dontask, setDontask] = useState(null);

  let [color,setMycolor] = useState("black")

  let [selectIndex,setselectIndex] = useState([1,2,3])

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const Handler = () => {
    if (task.length > 0) {
      setMytask([...mytask, task]);
      setTask("");
      setMycolor("black")
    } else {
      alert("please fill data");
    }
  };
console.log(dontask);
  const DonTaskHandeler = (index) => {
    console.log("=================", mytask[index]);

    let done = confirm("your data go donetask");
    if (done) {
      // mytask[index]
      setDontask([...dontask, mytask[index]]);

      let newData = mytask.filter((e, i) => i !== index);
      setMytask(newData);
    } else {
      alert("your data not go done task");
    }
  };

  const transferHandeler = (index) => {
    let panding = confirm("your data go panding task");
    if (panding) {
      // mytask[index]
      setMytask([...mytask, dontask[index]]);

      let newData = mytask.filter((e, i) => i !== index);
      setDontask(newData);
    } else {
      alert("your data go panding task");
    }
  };

  const DeleteHandler = (index) => {
    setDontask(dontask.filter((e, i) => i !== index));
  };

  const TrancferData = () => {
    setDontask(mytask)
    setMytask([])
    setMycolor("green")
    // setMycolor("black")
  };
  
  return (
    <>
    
      <div
        style={{
          width: "400px",
          height: "50px",
          backgroundColor: "gray",
          margin: "auto",
          marginTop: "5px",
        }}
        className="rounded-0"
      >
        <input
          className="rounded-0"
          style={{
            width: "80%",
            height: "90%",
            backgroundColor: "transparent",
            border: "none",

            outline: "none",
            padding: "8px",
            fontSize: "20px",
            lineHeight: "100%",
            border: "2px solid transparent",
          }}
          placeholder="Enter the name"
          onChange={(e) => addTask(e)}
          value={task}
        />
        <Plus
          style={{
            marginLeft: "32px",
            marginTop: "0",
            height: "50px",
            backgroundColor: "blue",
          }}
          onClick={Handler}
          size={48}
          strokeWidth={3}
        />
      </div>
      
      <div className="d-flex gap-3">
        <div
          style={{ backgroundColor: color, width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          <h5 className="text-center">To do list</h5>

          {mytask.map((e, i) => {
            return (
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  borderBottom: "2px solid white",
                  marginBottom: "20px",
                  height: "35px",
                }}
                key={i}
              >
                <p>
                  {i + 1}. {e}
                </p>

                <p role="button" className="d-flex align-items-center gap-3">
                  <CheckCircle
                    role="button"
                    onClick={() => DonTaskHandeler(i)}
                  />
                  <input className="h-75 w-100" type="checkbox" checked={selectIndex.includes(i)}/>
                </p>
              </div>
            );
          })}
          <Button onClick={TrancferData}>click</Button>
        </div>

        <div
          style={{ backgroundColor: "black", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          <h5 className="text-center">Done task</h5>

          {dontask?.map((e, i) => {
            return (
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  borderBottom: "2px solid white",
                  marginBottom: "20px",
                  height: "35px",
                }}
                key={i}
              >
                <p>
                  {i + 1}. {e}
                </p>

                <p role="button" className="d-flex gap-4">
                  <CheckCircle
                    role="button"
                    className="bg-danger"
                    
                    onClick={() => transferHandeler()}
                  />
                  <Trash role="button" onClick={() => DeleteHandler(i)} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
