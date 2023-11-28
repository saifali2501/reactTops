import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";

export default function Input_fun() {
    let [Company,setcompany] = useState("")
    let [Company2,setcompany2] = useState("")
    let [myCompany,setmyCompany] = useState([])

    //get data from input

    const Data =(element,taskNumber) =>{
        
      if (taskNumber === 1) {
        setcompany(element.target.value);
      } else if (taskNumber === 2) {
        setcompany2(element.target.value);
      }
    }
    const addtask = () =>{
      setmyCompany([...myCompany,{Company,Company2}])
      setcompany("")
      setcompany2("")
    }
  return (
    <>
    {/* <h1>{Company}</h1> */}
      <div className="saif w-50 border border-5 border-dark p-5 m-5">
        
        <Label>NAME</Label>
        <Input value={Company} placeholder="Add your task" onChange={(e)=>Data(e,1)}/>

        <Input value={Company2} placeholder="Add your task" onChange={(e)=>Data(e,2)}/>

        <Button onClick={()=>addtask()} className="mt-5 w-100 " color="danger">
          Click Here
        </Button>
        </div>
      <div className="saif w-50 border border-2 border-dark p-4 m-2">
        
{
  myCompany.map((e,index) =>(
    <div key={index}>
    <h1>Task-1 {e.Company}</h1>
    <h1>Task-2 {e.Company2}</h1>
    </div>
  ))}

      </div>
    </>
  );
}
