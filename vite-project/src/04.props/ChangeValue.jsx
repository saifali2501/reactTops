import { Button } from 'bootstrap'
import React, { useState } from 'react'

export default function ChangeValue(props) {
    let [change,setchange]=useState(props?.name)
    let [isProps,setisProps]=useState(false)
        const changeName=()=>{
            setchange(isProps ? props.name:"arman")
            setisProps(!isProps)
        }
        console.log("🚀 ~ file: ChangeValue.jsx:9 ~ changeName ~ changeName:", changeName)
    
  return (

    
    <>    
    <div className='m-4'>
      <h1>hello {change}</h1>
      <button onClick={changeName}>click</button>
    </div>
    </>
  )
}
