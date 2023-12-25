import { Button } from 'reactstrap'
import React from 'react'
import { useNavigate ,Outlet} from 'react-router-dom'

export default function Servis() {
const  navigate = useNavigate()
  return (
    <>
    <div>

<div style={{display:"flex",gap:"10px"}}>

      <Button onClick={()=>navigate("/Servis/Bike")}>Bike</Button>
      <Button onClick={()=>navigate("/Servis/Car")}>Car</Button>
</div>
      <h1>sirvise</h1>
      <Outlet/>
    </div>
    </>
  )
}
