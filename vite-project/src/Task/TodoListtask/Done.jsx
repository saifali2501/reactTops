import { CheckCircle, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Done({ mytask, setMytask, doneTask, setDoneTask }) {
  console.log("🚀 ~ Done ~ doneTask:", doneTask)
  const [selectdontask, setselectdontsk] = useState([]);
  const handleSelectDone = (index) => {
    let isSelected = selectdontask.includes(index);
    if (isSelected) {
      selectdontask(selectdontask.filter((e) => e !== index));
    } else {
      setselectdontsk([...selectdontask, index]);
    }
  };
  const handleCheckboxDone = () => {
    if (selectdontask.length !== doneTask.length) {
      setselectdontsk(doneTask.map((e, index) => index));
    } else {
      setselectdontsk([]);
    }
  };

  

  const transferSelecteddone = () => {
    let firstConfirmation = window.confirm("Transfer selected tasks to Done?");
    console.log("🚀 ~ transferSelecteddone ~ firstConfirmation:", firstConfirmation)

    if (firstConfirmation) {
      let secondConfirmation = window.confirm(
        "Are you sure you want to transfer these tasks?"
      );

      if (secondConfirmation) {
        let notDone = [];
        let done = [];
        
        doneTask.map((e, i) => {
          if (selectdontask?.includes(i)) {
            notDone.push(e);
          } else {
            done.push(e);
          }
        });
        console.log("done---->", done);
        setDoneTask(done);
        setMytask([...mytask, ...notDone]);
        localStorage.setItem("doneTask",JSON.stringify(done))
        localStorage.setItem("mytask",JSON.stringify([...mytask,...notDone]))
        setselectdontsk([]);
      } else {
        alert("Tasks transfer canceled.");
      }
    } else {
      alert("Tasks transfer canceled.");
    }
  };

  return (
    <div
      style={{ backgroundColor: "black", width: "55%" }}
      className="m-auto mt-4 rounded-3 p-2 text-white p-3 "
    >
      {doneTask?.length > 0 && (
        <input type="checkbox" onChange={handleCheckboxDone} />
      )}
      <h5 className="text-center">Done task</h5>

      {doneTask?.map((e, i) => (
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
              onClick={() => moveTaskToPending(i)}
            />{" "}
            <input
              onChange={() => handleSelectDone(i)}
              className="h-75 w-100"
              type="checkbox"
              checked={selectdontask.includes(i)}
            />
            <Trash role="button" onClick={() => deleteTask(i)} />
          </p>
        </div>
      ))}
      <Button onClick={transferSelecteddone}>Move to panding</Button>
    </div>
  );
}
