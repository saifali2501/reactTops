import React from 'react'
import { useParams } from 'react-router-dom'

export default function UseParms() {
  const data =  useParams()
  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  )
}
