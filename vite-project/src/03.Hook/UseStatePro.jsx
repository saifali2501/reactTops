import React, { useState } from 'react'
import './Dtn.css'
export default function UseStatePro() {
    let [color,setcolor] = useState("red");
    let [textcolor,setTxtColor] = useState("white");

    const changeColorHandler = () => {
       setcolor("green")
       setTxtColor("black")
    }
  return (
    <div className='main'>
      <div
       style={{
        padding:"10px",
        textAlign:"center",
        backgroundColor:color,
        color:textcolor,
        }}>
      
        <h1>hello World</h1>
        
      </div>
      <button onClick={() => changeColorHandler()}>Change color</button>
      
    </div>
  )
}
