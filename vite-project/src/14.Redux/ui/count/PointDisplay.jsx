import React from 'react'
import { useSelector } from 'react-redux'

export default function PointDisplay() {
 let data = useSelector((store)=>{
     console.log("===store===",store);
    return store.POINT
  })
  console.log(" data:", data)
  return (
    <div>
      <hr />
      <h1>Count is {data.point}</h1>
    </div>
  )
}
