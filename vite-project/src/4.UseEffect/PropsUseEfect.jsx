import React, { useEffect } from 'react'

export default function PropsUseEfect({count
}) {
    useEffect(()=>{
        alert("test")
    },[count])
  return (
    <>
    <hr />
<h1>PropsUSeefect</h1>   
<h1>count is {count}</h1>   
    </>
  )
}
