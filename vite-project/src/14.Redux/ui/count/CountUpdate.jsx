import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";
import { incByInput, incOne, incTen } from "../../redux/feature/Count";

export default function CountUpdate() {
  const [no,setNo] = useState(0)

  const adddata=()=>{
    dipatch(incByInput(no))
    setNo("")
  }
  let dipatch = useDispatch();
  return (
    <div>
      <hr />
      <Button onClick={() => dipatch(incOne())}>Inc-1</Button>
      <Button onClick={() => dipatch(incTen())}>Inc-10</Button>
      {/* <input type="text" /> */}
      <div className="pt-5 d-flex gap-2">
      <Input className="w-25 " value={no} onChange={(e)=> setNo(e.target.value)}/>
      <Button color="danger" className="" onClick={()=>adddata() }>click</Button>
      </div>
      

    </div>
  );
}
