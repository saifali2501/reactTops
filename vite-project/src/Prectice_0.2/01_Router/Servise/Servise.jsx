import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Servise() {
 const usenavi = useNavigate()
    

  return (
    <div>
      <h1>servise</h1>
      <Button onClick={()=>usenavi("/servise/car")}>Car</Button>
      <Button onClick={()=>usenavi("/servise/bike")}>Bike</Button>
<Outlet/>
    </div>
  )
}
