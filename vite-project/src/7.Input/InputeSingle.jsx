import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function InputeSingle() {
  let [city,setCity] = useState("");
  let [allcity,setAllcity] =useState([])
  

  const taskData = (element) => {
setCity(element.target.value)
  }
  const AddTask = () =>{
    setAllcity([...allcity,city])
    setCity("")
  }
  return (
    
    <div>
      <h1>{city}</h1>
      <input type="text" value={city} onChange={(e)=>taskData(e)} />
      {/* <button OnClick={()=>AddTask()}>Click===</button> */}
      <Button onClick={AddTask}>clicj</Button>
      <div>

      {
        allcity.map((e,i)=>{
          return <h1 key={i}>{e}</h1>
        })
      }
      </div>
    </div>
  )
}
