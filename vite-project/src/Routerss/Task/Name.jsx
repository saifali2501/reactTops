import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Name() {
  const navigate = useNavigate()

 let data = useParams()
  return (
    <div>
      <h1>My name is {data?.name}</h1>

      <Button onClick={()=>navigate("/")}>Go Back</Button>

    </div>
  )
}
