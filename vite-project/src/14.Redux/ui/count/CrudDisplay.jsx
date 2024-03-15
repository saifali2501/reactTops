import React from 'react'
import { useSelector } from 'react-redux'

export default function CrudDisplay() {
    let data = useSelector((store)=>{
        return store.USER.user
    })
    console.log("🚀 ~ data ~ data:", data)
  return (
    <div>
      <h1>{data.users}</h1>
    </div>
  )
}
