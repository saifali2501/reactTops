import React, { useEffect, useState } from 'react'

export default function UseEfectMatch() {
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
     
  
    
  return (
    <div>
      <h1>name is {arry[index]}</h1>
      

      <button onClick={()=>incre()}>btn</button>
    </div>
  )
  }
