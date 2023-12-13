import { Button } from 'reactstrap'
import React, { useState } from 'react'

export default function UseStateSty() {
    let [color,setColor] = useState("red")
    let [text,settext] = useState("black")
    const increment = () =>{
        setColor("green")
        settext("blue")
    }
  return (
    <div>
        <div style={{
            backgroundColor:color,
            color:text
        }}>
            <h1>HEllO WORLD....!</h1>

        </div>
<Button onClick={()=>increment()}>Button...</Button>
    </div>
  )
}
