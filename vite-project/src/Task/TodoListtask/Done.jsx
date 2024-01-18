import { CheckCircle, Trash } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function Done({mytask,setMytask,dontask,setDontask}) {
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
        
  return (
    <div>
      
      <div
          style={{ backgroundColor: "black", width: "55%" }}
          className="m-auto mt-5 rounded-3 p-2 text-white p-3 "
        >
          {dontask?.length > 0 && (
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
  )
}
