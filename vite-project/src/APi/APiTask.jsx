import React, { useEffect, useState } from 'react'

export default function APiTask() {
    let[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json))  
    },[])
  return (
    <div>
      {
        data.map((e)=>{
            console.log(e);
            // <h1>{e?.id}</h1>
        })
      }
    </div>
  )
}
