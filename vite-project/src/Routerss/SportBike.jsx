import { Button } from 'react-bootstrap'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SportBike() {
    const navigate = useNavigate()
  return (
    <div>
<h1>Sport Bike</h1> 
<Button onClick={()=>navigate(-1)}><ArrowLeft size={36} color="#cf2020" strokeWidth={2.5} /></Button>     
    </div>
  )
}
