import React, { useState } from 'react'
import './Dtn.css'
export default function UseStatePro2() {
    const colorArr = ["red","black","yellow","blue","green"]
    let [index,setIndex] = useState(0);
    const changeColorHandler = () =>{
        if(index === colorArr.length){
             let con = window.confirm("this number is last")
             if(con){
                setIndex(0)
                
             }
            
          
        }else{
            setIndex(index+1)
        }
      
    }
  return (
    
    <div className='main'>
        <h1>{index}</h1>
    <div
     style={{
      padding:"10px",
      textAlign:"center",
      backgroundColor:colorArr[index],
      color:"black",
      }}>
    
      <h1>hello World</h1>
      
    </div>
    <button onClick={() => changeColorHandler()}>Change color</button>
    
  </div>
  )
}
