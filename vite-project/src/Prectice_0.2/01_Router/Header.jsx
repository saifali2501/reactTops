import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <ul className='d-flex justify-content-center align-content-center gap-2'>
        <li>
            <NavLink to={"/"}>Home</NavLink>

        </li>
        <li>
            <NavLink to={"contact"}>Contact</NavLink>
            
        </li>
        <li>
            <NavLink to={"servise"}>Servise</NavLink>
            
        </li>
        <li>
            <NavLink to={"userdata"}>MyData</NavLink>
            
        </li>
      </ul>
    </div>
  )
}
