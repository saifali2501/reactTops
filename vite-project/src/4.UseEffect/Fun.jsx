import React, { useEffect, useState } from 'react'

export default function Fun() {
    let[index,setindex]=useState(0)
    

    let arry=["nikku","saif","jeel","haji","kaifu"]
    let arr=["jeel","haji","kaifu"]
    
   const incre=()=>{
    
    if(arry.length-2 < index ){
      setindex(0)

      

    }else{
      setindex(index + 1)
    }
     
    

    }
   
useEffect(()=>{
  if(arr.includes(arry[index])){
    alert("this is same")
  }
},[index])
     
    // useEffect()=()=>{

    // }
    
  //   if(arry[index].includes(arr)){
  //     alert("match this value")
 
  //   }
  //   else{
  //     setindex(index+1)
  // }

    
  return (
    <div>
      <h1>name is {arry[index]}</h1>
      

      <button onClick={()=>incre()}>btn</button>
    </div>
  )
  }
