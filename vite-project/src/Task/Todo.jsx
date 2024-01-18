import { CheckCircle, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Todo() {
  const [task, setTask] = useState("");
  const [mytask, setMytask] = useState([]);
  const [dontask, setDontask] = useState([]);
  const [selectmytask, setselectmytask] = useState([]);
  const [selectdontask, setselectdontsk] = useState([]);

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.length > 0) {
      setMytask([...mytask, task]);
      setTask("");
      localStorage.setItem("mytask",JSON.stringify([...mytask, task]))
    } else {
      alert("Please fill in data");
    }
  };

  const moveTaskToDone = (index) => {
    let done = confirm("Move this task to Done?");
    if (done) {
      setDontask([...dontask, mytask[index]]);
      let newData = mytask.filter((i) => i !== index);
      localStorage.setItem("dontask",JSON.stringify([...dontask, mytask[index]]))

      setMytask(newData);
    } else {
      alert("Task not moved to Done");
    }
  };

  const moveTaskToPending = (index) => {
    let pending = window.confirm("Move this task to Pending?");
    if (pending) {
      setMytask([...mytask, dontask[index]]);
      let newData = dontask.filter((_, i) => i !== index);
      setDontask(newData);
    } else {
      alert("Task not moved to Pending");
    }
  };

  const deleteTask = (index) => {
    setDontask(dontask.filter((_, i) => i !== index));
  };

  const transferSelectedTasks = () => {
    let firstConfirmation = window.confirm("Transfer selected tasks to Done?");

    if (firstConfirmation) {
      let secondConfirmation = window.confirm(
        "Are you sure you want to transfer these tasks?"
      );

      if (secondConfirmation) {
        let notDone = [];
        let done = [];

        mytask.forEach((e, i) => {
          if (selectmytask?.includes(i)) {
            done.push(e);
          } else {
            notDone.push(e);
          }
        });

        setMytask(notDone);
        setDontask([...dontask, ...done]);
        setselectmytask([]);
      } else {
        alert("Tasks transfer canceled.");
      }
    } else {
      alert("Tasks transfer canceled.");
    }
  };
  //search input
  useEffect(() => {
    setMytask(JSON.parse(localStorage.getItem("mytask") || "[]"));
    setDontask(JSON.parse(localStorage.getItem("donetask") || "[]"));
  },[]);
  const handleSelect = (index) => {
    let isSelected = selectmytask.includes(index);

    if (isSelected) {
      setselectmytask(selectmytask.filter((e) => e !== index));
    } else {
      setselectmytask([...selectmytask, index]);
    }
  };

  const handleCheckbox = () => {
    if (selectmytask.length !== mytask.length) {
      setselectmytask(mytask.map((e, index) => index));
    } else {
      setselectmytask([]);
    }
  };

  const handleSelectDone = (index) => {
    let isSelected = selectdontask.includes(index);
    if (isSelected) {
      selectdontask(selectdontask.filter((e) => e !== index));
    } else {
      setselectdontsk([...selectdontask, index]);
    }
  };
  const handleCheckboxDone = () => {
    if (selectdontask.length !== dontask.length) {
      setselectdontsk(dontask.map((e, index) => index));
    } else {
      setselectdontsk([]);
    }
  };
  
  const transferSelecteddone = () => {
    let firstConfirmation = window.confirm("Transfer selected tasks to Done?");
    
    if (firstConfirmation) {
      let secondConfirmation = window.confirm(
        "Are you sure you want to transfer these tasks?"
        );
        
        if (secondConfirmation) {
          let notDone = [];
          let done = [];
          
          dontask.map((e, i) => {
            if (selectdontask?.includes(i)) {
              done.push(e);
            } else {
              notDone.push(e);
            }
          });
          
          setDontask(notDone);
          setMytask([...mytask, ...done]);
          setselectdontsk([]);
        } else {
          alert("Tasks transfer canceled.");
        }
      } else {
        alert("Tasks transfer canceled.");
      }
    };
    
    // setselectmytask((prev) => (event.target.checked ? mytask.map((_, i) => i) : []));
  const hendelKey = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "50px",
          backgroundColor: "blue",
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
          onKeyUp={hendelKey}
        />

        <Plus
          style={{
            marginLeft: "32px",
            marginTop: "0",
            height: "50px",
            backgroundColor: "blue",
          }}
          onClick={handleAddTask}
          size={48}
          strokeWidth={3}
        />
      </div>

      <div className="d-flex gap-3">
        <div
          style={{ backgroundColor: "black", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          {mytask.length > 0 && (
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
          {mytask.map((e, i) => (
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

        <div
          style={{ backgroundColor: "black", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          {dontask.length > 0 && (
            <input type="checkbox" onChange={handleCheckboxDone} />
          )}
          <h5 className="text-center">Done task</h5>

          {dontask?.map((e, i) => (
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
          <Button onClick={transferSelecteddone}>Move to Done</Button>
        </div>
      </div>
    </>
  );
}
