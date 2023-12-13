import React, { useState } from 'react'
// import './Dtn.css'

export default function UseStateFun() {
 let [Count,setCount] = useState(100)
  let x = 0;
  const incrementCount = () => {
    x += 1;
    console.log("x",x);
    setCount(Count + 1)
  }
  return (
    <div>
      <div className="main">
        <h1>x is ffflkj{x}</h1>
      <h1 className='text-primary'>Count is {Count}</h1>
      

      <button onClick={() => incrementCount ()}>click here</button>
      </div>
    </div>
  )
}
