import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function NormalBike() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>NormalBike</h1>
      <Button onClick={()=>navigate(-1)}>Go Bake</Button>
    </div>
  )
}
