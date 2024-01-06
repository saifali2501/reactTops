// import React, { useState } from "react";
// import { Button, Input, Table } from "reactstrap";

// export default function TodoTask() {
//   let [task, setTask] = useState("");
//   let [mytask, setMytask] = useState([]);

//   const addTask = (e) => {
//     setTask(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (task.length > 0) {
//       setMytask([...mytask,task]);
//       setTask("");
//     } else {
//       alert("Please fill in data");
//     }
//   };

// const handleCheckboxChange = (index) => {
//   let filterData = mytask.filter((e, i) => index !== i);
//   setMytask(filterData);
// };

//   const handleEdit = (index, newName) => {
//     const updatedTasks = [...mytask];
//     updatedTasks[index] = { ...updatedTasks[index], name: newName };
//     setMytask(updatedTasks);
//   };

//   return (
//     <>
//       <div className="d-flex gap-3 mt-5" style={{ marginLeft: "40%" }}>
//         <Input
//           className="w-25 border-2 border-dark "
//           placeholder="Enter the name"
//           onChange={(e) => addTask(e)}
//           value={task}
//         />
//         <Button onClick={handleAddTask}>Click</Button>
//       </div>
//       <div className="p-4">
//         <Table className="w-50 m-auto border p-5">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mytask.map((e, i) => (
//               <tr key={i}>
//                 <th scope="row">{i + 1}</th>
//                 <td>{e}</td>
//                 <td>
// <Input
// checked={e}
//   type="checkbox"
//   onClick={() => handleCheckboxChange(i)}
//   />
//                 </td>
//                 <td>
//                   <Button onClick={() => handleEdit(index, prompt("Enter new name:", task.name))}>Edit</Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </>
//   );
// }

// {
//   /* <td>
//   <Button onClick={() => handleDelete(index)}>Delete</Button>
// </td> */
// }
// // checked={task.completed}

// // const handleDelete = (index) => {
// //   const updatedTasks = [...mytask];
// //   updatedTasks.splice(index, 1);
// //   setMytask(updatedTasks);
// // };

import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";

export default function TodoTask() {
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

  const EditHandler=(data,index)=>{
    setTask(data)
  }
  return (
    <>
      <div className="d-flex gap-3 mt-5" style={{ marginLeft: "40%" }}>
        {/* <input type="text" /> */}
        <Input
          className="w-25 border-2 border-dark "
          placeholder="Enter the name"
          onChange={(e) => addTask(e)}
          value={task}
        />
        <Button onClick={Handler}>Click</Button>
      </div>
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
                  <Button onClick={()=>EditHandler(e,i)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
