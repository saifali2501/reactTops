import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function BikeService() {
  return (
    <div>
      <h1>BikeService</h1>
      <NavLink to={"/Servis/Bike/sports"}>Sports</NavLink>

      <NavLink to={"/servis/bike/normal"}>Normal</NavLink>
      <Outlet/>
    </div>
  )
}
