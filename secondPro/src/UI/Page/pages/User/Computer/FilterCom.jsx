import React from 'react'
import { Input } from 'reactstrap'

export default function FilterCom({filter,setFilter}) {
    const checkBoxHaandler = (category,e) =>{
        if(e?.target?.checked){
    
            setFilter({...filter, category:[...filter.category,category]})
        }else{
            let newArr = filter?.category?.filter((e)=>e !== category)
            setFilter({...filter,category:newArr})
        }
      } 
  return (
    <div>
       <label htmlFor="">5g</label>
      <Input type="checkbox" onChange={(e)=>checkBoxHaandler("5g",e)}/>
      <label htmlFor="">smartphones</label>
      <Input type="checkbox" onChange={(e)=>checkBoxHaandler("smartphones",e)}/>
      <label htmlFor="">smartphones</label>
      <Input type="checkbox" onChange={(e)=>checkBoxHaandler("3g",e)}/>
    </div>
  )
}
