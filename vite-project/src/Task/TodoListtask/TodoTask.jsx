import { CheckCircle, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Input, Label, Modal, ModalBody, ModalHeader, NavLink } from "reactstrap";
import Pending from "./Panding";
import Done from "./Done";

export default function TodoTask({modal,toggle}) {
  const [task, setTask] = useState("");
  const [mytask, setMytask] = useState([]);
  const [dontask, setDontask] = useState([]);
  // const [selectmytask, setselectmytask] = useState([]);
  // const [selectdontask, setselectdontsk] = useState([]);
  // const [local, setLocal] = useState([]);

  const addTask = (ele) => {
    setTask(ele.target.value);
  };

  const handleAddTask = () => {
    if (task.length > 0) {
      setMytask([...mytask, task]);
      setTask("");
      localStorage.setItem("mytask",JSON.stringify([...mytask, task]))
    } else {
      alert("Please fill in data");
      toggle();
      // setLocal([...local,mytask])
      
      // localStorage.setItem("addd",JSON.stringify([...local,task]))
    }
  };

  // const moveTaskToDone = (index) => {
  //   let done = confirm("Move this task to Done?");
  //   if (done) {
  //     setDontask([...dontask, mytask[index]]);
  //     let newData = mytask.filter((i) => i !== index);
  //     localStorage.setItem("dontask",JSON.stringify([...dontask, mytask[index]]))

  //     setMytask(newData);
  //   } else {
  //     alert("Task not moved to Done");
  //   }
  // };

  // const moveTaskToPending = (index) => {
  //   let pending = window.confirm("Move this task to Pending?");
  //   if (pending) {
  //     setMytask([...mytask, dontask[index]]);
  //     let newData = dontask.filter((_, i) => i !== index);
  //     setDontask(newData);
  //   } else {
  //     alert("Task not moved to Pending");
  //   }
  // };

  // const deleteTask = (index) => {
  //   setDontask(dontask.filter((_, i) => i !== index));
  // };

  // const transferSelectedTasks = () => {
  //   let firstConfirmation = window.confirm("Transfer selected tasks to Done?");

  //   if (firstConfirmation) {
  //     let secondConfirmation = window.confirm(
  //       "Are you sure you want to transfer these tasks?"
  //     );

  //     if (secondConfirmation) {
  //       let notDone = [];
  //       let done = [];

  //       mytask.forEach((e, i) => {
  //         if (selectmytask?.includes(i)) {
  //           done.push(e);
  //         } else {
  //           notDone.push(e);
  //         }
  //       });

  //       setMytask(notDone);
  //       setDontask([...dontask, ...done]);
  //       setselectmytask([]);
  //     } else {
  //       alert("Tasks transfer canceled.");
  //     }
  //   } else {
  //     alert("Tasks transfer canceled.");
  //   }
  // };
  //search input
  // useEffect(() => {
  //   setMytask(JSON.parse(localStorage.getItem("mytask") || "[]"));
  //   setDontask(JSON.parse(localStorage.getItem("donetask") || "[]"));
  // },[]);
  // const handleSelect = (index) => {
  //   let isSelected = selectmytask.includes(index);

  //   if (isSelected) {
  //     setselectmytask(selectmytask.filter((e) => e !== index));
  //   } else {
  //     setselectmytask([...selectmytask, index]);
  //   }
  // };

  // const handleCheckbox = () => {
  //   if (selectmytask.length !== mytask.length) {
  //     setselectmytask(mytask.map((e, index) => index));
  //   } else {
  //     setselectmytask([]);
  //   }
  // };

  // const handleSelectDone = (index) => {
  //   let isSelected = selectdontask.includes(index);
  //   if (isSelected) {
  //     selectdontask(selectdontask.filter((e) => e !== index));
  //   } else {
  //     setselectdontsk([...selectdontask, index]);
  //   }
  // };
  // const handleCheckboxDone = () => {
  //   if (selectdontask.length !== dontask.length) {
  //     setselectdontsk(dontask.map((e, index) => index));
  //   } else {
  //     setselectdontsk([]);
  //   }
  // };
  // setselectmytask((prev) => (event.target.checked ? mytask.map((_, i) => i) : []));

  // const transferSelecteddone = () => {
  //   let firstConfirmation = window.confirm("Transfer selected tasks to Done?");

  //   if (firstConfirmation) {
  //     let secondConfirmation = window.confirm(
  //       "Are you sure you want to transfer these tasks?"
  //     );

  //     if (secondConfirmation) {
  //       let notDone = [];
  //       let done = [];

  //       dontask.map((e, i) => {
  //         if (selectdontask?.includes(i)) {
  //           done.push(e);
  //         } else {
  //           notDone.push(e);
  //         }
  //       });

  //       setDontask(notDone);
  //       setMytask([...mytask, ...done]);
  //       setselectdontsk([]);
  //     } else {
  //       alert("Tasks transfer canceled.");
  //     }
  //   } else {
  //     alert("Tasks transfer canceled.");
  //   }
  // };

  const hendelKey = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
 {/* <NavLink to={"/panding"}>Local</NavLink> */}
 <div className="w-25 m-auto mt-3 p-3">
        <Label className="m-auto p-2 light">
          <h1>TodoList</h1>
        </Label>
        <div>

            <div className="d-flex align-items-center">
              <Input
                value={task}
                style={{
                  borderRadius: "50px",
                  // backgroundColor: "lightblue",
                  width: "300px",
                  height: "40px",
                  justifyContent: "center",
                  textAlign: "center",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                placeholder="Enter Your Todo"
                onKeyUp={hendelKey}
                // onChange={(ele) => setTodo(ele.target.value)}
              />

              <Button
              value={task}
                color="danger"
                onChange={(e) => addTask(e)}
                style={{
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                <Plus />
              </Button>
            </div>
        </div>
      </div>
      <div className="d-flex w-100 gap-4 p-5">
       <Pending mytask={mytask} setMytask={setMytask} doneTask={dontask} setDoneTask={setDontask}/>
       <Done doneTask={dontask} setDoneTask={setDontask} mytask={mytask} setMytask={setMytask}/>
        
      </div>
      
    </>
  );
}
