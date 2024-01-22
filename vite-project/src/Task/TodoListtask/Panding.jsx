import { CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function Pending({ mytask, setMytask, doneTask, setDoneTask }) {
  console.log("🚀 ~ Pending ~ doneTask:", doneTask);
  const [selectmytask, setselectmytask] = useState([]);

  const moveTaskToDone = (index) => {
    let done = confirm("Move this task to Done?");
    // console.log("🚀 ~ moveTaskToDone ~ done:", done);
    if (done) {
      console.log("🚀 ~ Pending ~ doneTask:", doneTask);
      setDoneTask([...doneTask, mytask[index]]);
      let newData = mytask.filter((_,i) => i !== index);
      console.log("🚀 ~ moveTaskToDone ~ newData:", newData)
      setMytask(newData);
      localStorage.setItem(
        "doneTask",
        JSON.stringify([...doneTask, mytask[index]])
      );
      localStorage.setItem("mytask", JSON.stringify(newData));

  
    } else {
      
      alert("Task not moved to Done");
    }
  };

  const transferSelectedTasks = () => {
    console.log(" transferSelectedTasks:", transferSelectedTasks);
    let firstConfirmation = window.confirm("Transfer selected tasks to Done?");

    if (firstConfirmation) {
      let secondConfirmation = window.confirm(
        "Are you sure you want to transfer these tasks?"
      );

      if (secondConfirmation) {
        let notDone = [];
        console.log("🚀 ~ transferSelectedTasks ~ notDone:", notDone);
        let done = [];
        console.log("🚀 ~ transferSelectedTasks ~ done:", done);

        mytask.map((e, i) => {
          if (selectmytask?.includes(i)) {
            done.push(e);
          } else {
            notDone.push(e);
          }
        });

        setMytask(notDone);
        setDoneTask([...doneTask, ...done]);
        localStorage.setItem(
          "doneTask",
          JSON.stringify([...doneTask, ...done])
        );
        localStorage.setItem("mytask", JSON.stringify(notDone));
        setselectmytask([]);
      } else {
        alert("Tasks transfer canceled.");
      }
    } else {
      alert("Tasks transfer canceled.");
    }
  };
  // const transferSelectedTasks = () => {
  //   let firstConfirmation = window.confirm("Transfer selected tasks to Done?");
  //   if (firstConfirmation) {
  //     let secondConfirmation = window.confirm("Are you sure you want to transfer these tasks?");
  //     if (secondConfirmation) {
  //       let notDone = [];
  //       let done = [];

  //       mytask.map((e, i) => {
  //         if (selectmytask?.includes(i)) {
  //           done.push(mytask[i]);
  //         } else {
  //           notDone.push(mytask[i]);
  //         }
  //       });

  //       setMytask(notDone);
  //       setDoneTask([...doneTask, ...done]);
  //       setselectmytask([]);
  //     } else {
  //       alert("Tasks transfer canceled.");
  //     }
  //   } else {
  //     alert("Tasks transfer canceled.");
  //   }
  // };

  const handleCheckbox = () => {
    if (selectmytask.length !== mytask.length) {
      setselectmytask(mytask.map((e, index) => index));
    } else {
      setselectmytask([]);
    }
  };
  const handleSelect = (index) => {
    let isSelected = selectmytask.includes(index);

    if (isSelected) {
      setselectmytask(selectmytask.filter((e) => e !== index));
    } else {
      setselectmytask([...selectmytask, index]);
    }
  };

  return (
    // <div className="w-100">

    <div
      style={{ backgroundColor: "black", width: "50%" }}
      className="m-auto mt-4 rounded-3 p-2 text-white p-3 "
      >
      {mytask?.length > 0 && (
        <input type="checkbox" onChange={handleCheckbox} />
        )}

      <h5 className="text-center">To do list</h5>
      <div className="d-flex justify-content-end">
        <input
          className="rounded-1"
          style={{
            width: "50%",
            height: "90%",
            backgroundColor: "red",
            border: "none",
            outline: "none",
            padding: "8px",
            fontSize: "20px",
            lineHeight: "100%",
            border: "2px solid blue",
          }}
          />
      </div>
      {mytask?.map((e, i) => (
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
            <CheckCircle role="button" onClick={() => moveTaskToDone(i)} />

            <input
              onChange={() => handleSelect(i)}
              className="h-75 w-100"
              type="checkbox"
              checked={selectmytask.includes(i)}
              />
          </p>
        </div>
      ))}
      <Button onClick={transferSelectedTasks}>Move to Done</Button>
    </div>
      // </div>
  );
}
