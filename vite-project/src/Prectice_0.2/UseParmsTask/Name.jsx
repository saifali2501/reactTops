import React from 'react'
import { useParams } from 'react-router-dom'

export default function Name() {
  let  data = useParams()
  return (
    <div>
      <h1>my name is {data.name}</h1>
    </div>
  )
}
