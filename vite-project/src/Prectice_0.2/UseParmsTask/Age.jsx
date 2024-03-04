import React from 'react'
import { useParams } from 'react-router-dom'

export default function Age() {
  let  data = useParams()
  return (
    <div>
      <h1>My age {data?.age}</h1>
    </div>
  )
}
