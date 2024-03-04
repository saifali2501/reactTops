import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function BikeServisc() {
    const  navigate = useNavigate()
  return (
    <div>
      <h1>Bikeservise</h1>
      <Button onClick={()=>navigate("/servise/bike/sports")}>sports</Button>
      <Button onClick={()=>navigate("/servise/bike/normal")}>Normal</Button>
      <Outlet/>
    </div>
  )
}
