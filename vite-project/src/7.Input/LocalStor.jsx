import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

export default function LocalStor() {
  let [user, setuser] = useState("");
  let [myuser, setmyuser] = useState([]);
  
  

  const changeHandler = () => {
    setmyuser([...myuser, user]);
    setuser("")
    localStorage.setItem("kata",JSON.stringify([...myuser,user]))
    setuser("")
  };
  useEffect(()=>{
    let Jsondata = localStorage.getItem("kata")
    let normaldata = JSON.parse(Jsondata)
    setmyuser(normaldata || [])
  },[])

 
  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>TODO</h1>
      <div className="w-25 d-flex gap-3 m-auto">
        <Input
          value={user}
          id="exampleEmail"
          name="email"
          placeholder="Email placeholder"
          type="email"
          onChange={(e) => setuser(e.target.value)}
        />
        <Button onClick={changeHandler}>Todo..</Button>
        </div>
        
        {myuser.map((e,i)=>{
            return  <h1 className="text-center mt-3" key={i} >{e}</h1>
        })}
        

    </>
  );
}