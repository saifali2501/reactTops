import { CheckCircle, Circle, Plus, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
// import { MDBIcon } from "mdb-react-ui-kit";
export default function Todo() {
  let [task, setTask] = useState("");

  let [mytask, setMytask] = useState([]);

  let [dontask, setDontask] = useState([]);

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const Handler = () => {
    if (task.length > 0) {
      setMytask([...mytask, task]);
      setTask("");
    } else {
      alert("please fill data");
    }
  };

  const DonTaskHandeler = (index) => {
    console.log("=================",mytask[index]);
    // mytask[index]  
    setDontask([...dontask,mytask[index]])

    let newData = mytask.filter((e))
  };

  const EditHandler = (data, index) => {
    setTask(data);
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "50px",
          backgroundColor: "green",
          margin: "auto",
          marginTop: "10px",
        }}
        className="rounded-4"
      >
        <input
          type="text"
          style={{
            width: "80%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
        <Button>add</Button>
      </div>

      {/* <div className="  mt-5 " style={{ margin: "40%" }}> */}
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
        {/* <Button className="rounded-0" >Click</Button> */}
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
      {/* </div> */}
      <div className="d-flex gap-3">
        <div
          style={{ backgroundColor: "darkcyan", width: "55%" }}
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

                <p role="button" onClick={() => EditHandler(i)}>
                  <CheckCircle
                    role="button"
                    onClick={() => DonTaskHandeler(i)}
                  />
                </p>
              </div>
            );
          })}
        </div>
        <div
          style={{ backgroundColor: "darkcyan", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          <h5 className="text-center">Don task</h5>

          {dontask.map((e, i) => {
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

                {/* <p role="button" onClick={() => EditHandler(i)}>
                <i class="fas fa-circle-plus"></i>
                <i class="bi bi-0-square"></i>
                
              </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
