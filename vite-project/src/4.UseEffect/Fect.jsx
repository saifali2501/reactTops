
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import PropsUseEfect from './PropsUseEfect';

export default function Fect() {
    let [count,setcount]=useState(0)
    let [count2,setcount2]=useState(0)
    
    useEffect(()=>{
        console.log("WITHOUT DIPENENCY");
    })
    // useEffect(()=>{
    //     console.log("withdipendency");
    // },[])

    useEffect(()=>{
        
        console.log("Dipency");
        // if(count % 5 === 0 && count !== 0){
        //     alert(`count-1 is ${count}`)
        // }
    },[count])

    useEffect(()=>{
        
        console.log("Dipency");
        // if(count2 % 2 === 0 && count2 !== 0){
        //     alert(`count-1 is ${count2}`)
        // }
    },[count2])

    useEffect(()=>{
        console.log("WITHOUT DIPENENCY");
    },[count],[count2])
  return (
    <>
    <div>

      <h1>Useefefct</h1>
      <h1>count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>incremet</button>
      <hr />
      <h1>count is {count2}</h1>
      <button onClick={()=>setcount2(count2+1)}>incremet</button>
    </div>
    <PropsUseEfect count={count}/>
    </>
  )
}
