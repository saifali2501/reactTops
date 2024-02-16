import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
 let data = useSelector((store)=>{
     console.log("===store===",store);
    return store.COUNT
  })
  console.log(" data:", data)
  return (
    <div>
      <h1>Count is {data.count}</h1>
    </div>
  )
}
