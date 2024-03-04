import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function SportsBike() {
 const navigate = useNavigate()
  return (
    <div>
      <h1>SportsBike</h1>
      <Button onClick={()=>navigate(-1)}>Go Back</Button>
    </div>
  )
}
