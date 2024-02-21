import { CheckCircle, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink,
} from "reactstrap";
import Pending from "./Panding";
import Done from "./Done";

export default function TodoTask({ modal, toggle }) {
  const [task, setTask] = useState("");
  const [mytask, setMytask] = useState([]);
  const [doneTask, setDoneTask] = useState([]);

  useEffect(() => {
    let doneData = JSON.parse(localStorage.getItem("doneTask") || "[]");
    setDoneTask(doneData);
    let myTaskData = JSON.parse(localStorage.getItem("mytask") || "[]");
    setMytask(myTaskData);
  }, []);

  const addTask = (ele) => {
    setTask(ele.target.value);
  };

  const handleAddTask = () => {
    if (task.length > 0) {
      setMytask([...mytask, task]);
      setTask("");
      localStorage.setItem("mytask", JSON.stringify([...mytask, task]));
    } else {
      alert("Please fill in data");
      toggle();
      // setLocal([...local,mytask])

      // localStorage.setItem("addd",JSON.stringify([...local,task]))
    }
  };

  const hendelKey = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      {/* <NavLink to={"/panding"}>Local</NavLink> */}
      <div className=" text-center main-todo">
        <Label className="m-auto p-2 light">
          <h1>TodoList</h1>
        </Label>
      </div>
      <div className=" d-flex " style={{ justifyContent: "center" }}>
        <input
          value={task}
          style={{
            borderRadius: "50px",

            width: "300px",
            height: "40px",
            justifyContent: "center",
            textAlign: "center",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            outline: "none",

            padding: "8px",
            fontSize: "20px",
            lineHeight: "100%",
            border: "2px solid transparent",
          }}
          placeholder="Enter Your Todo"
          onKeyUp={hendelKey}
          onChange={(e) => addTask(e)}
        />

        <Plus
          className="bg-danger color-white"
          onClick={(e) => handleAddTask(e)}
          style={{
            // borderColor:"green"
            // margin:"auto"
            height: "39px",
            width: "40px",
          }}
        />
      </div>

      <div className="d-flex w-100 gap-4 p-5">
        <Pending
          mytask={mytask}
          setMytask={setMytask}
          doneTask={doneTask}
          setDoneTask={setDoneTask}
        />
        <Done
          doneTask={doneTask}
          setDoneTask={setDoneTask}
          mytask={mytask}
          setMytask={setMytask}
        />
      </div>
    </>
  );
}

// const moveTaskToDone = (index) => {
//   let done = confirm("Move this task to Done?");
//   if (done) {
//     setDoneTask([...doneTask, mytask[index]]);
//     let newData = mytask.filter((i) => i !== index);
//     localStorage.setItem("doneTask",JSON.stringify([...doneTask, mytask[index]]))

//     setMytask(newData);
//   } else {
//     alert("Task not moved to Done");
//   }
// };

// const moveTaskToPending = (index) => {
//   let pending = window.confirm("Move this task to Pending?");
//   if (pending) {
//     setMytask([...mytask, doneTask[index]]);
//     let newData = doneTask.filter((_, i) => i !== index);
//     setDoneTask(newData);
//   } else {
//     alert("Task not moved to Pending");
//   }
// };

// const deleteTask = (index) => {
//   setDoneTask(doneTask.filter((_, i) => i !== index));
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
//       setDoneTask([...doneTask, ...done]);
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
//   setDoneTask(JSON.parse(localStorage.getItem("donetask") || "[]"));
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
//   if (selectdontask.length !== doneTask.length) {
//     setselectdontsk(doneTask.map((e, index) => index));
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

//       doneTask.map((e, i) => {
//         if (selectdontask?.includes(i)) {
//           done.push(e);
//         } else {
//           notDone.push(e);
//         }
//       });

//       setDoneTask(notDone);
//       setMytask([...mytask, ...done]);
//       setselectdontsk([]);
//     } else {
//       alert("Tasks transfer canceled.");
//     }
//   } else {
//     alert("Tasks transfer canceled.");
//   }
// };
