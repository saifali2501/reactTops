import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";

export default function Todo() {
  let [task, setTask] = useState("");

  let [mytask, setMytask] = useState([]);

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

  const handleCheckboxChange = (index) => {
    let filterData = mytask.filter((e, i) => index !== i);
    setMytask(filterData);
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
            border:"2px solid transparent",
            
             
          }}
          placeholder="Enter the name"
          onChange={(e) => addTask(e)}
          value={task}
        />
        {/* <Button className="rounded-0" >Click</Button> */}
        <Plus style={{marginLeft:"32px" ,marginTop:"0",height:"50px", backgroundColor:"blue"}} onClick={Handler} size={48} strokeWidth={3} />
      </div>
      {/* </div> */}
      <div className="p-4">
        <Table className="w-50 m-auto border p-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {mytask.map((e, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <Input
                    checked={task}
                    type="checkbox"
                    onClick={() => handleCheckboxChange(i)}
                  />{" "}
                </td>
                <td>
                  <Button onClick={() => EditHandler(e, i)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
