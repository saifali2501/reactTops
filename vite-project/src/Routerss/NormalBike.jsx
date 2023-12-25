import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NormalBike() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Normal Bike</h1>
      <Button onClick={()=>navigate(-1)}><ArrowLeft size={36} color="#cf2020" strokeWidth={2.5} /></Button> 
    </div>
  )
}
