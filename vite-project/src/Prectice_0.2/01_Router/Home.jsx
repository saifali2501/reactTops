import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, NavLink } from 'reactstrap'

export default function Home() {
  // let [name,setName] = useState("")
  let array = ["kajal","saif","tahid","nimi","javed"]
  const navigate=useNavigate()
  return (
    <div>

      {/* <Input value={name} onChange={(e)=>setName(e.target.value.replace(/[^0-9]/i,""))}/> */}
     <h1>Home</h1> 
     <ul>
      {
        array.map((e,i)=>{
          return(
            <li key={i} role='button'onClick={()=>navigate(`/user/${e}`)} >
            {e}
          </li>
          )
        })
      }
     
      <li role='button' onClick={()=>navigate("/user/tahid")}>
        tahid
      </li>
     </ul>

    </div>
  )
}
