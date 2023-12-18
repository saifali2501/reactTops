import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const NameContaxt = createContext()
export const Agecontaxt = createContext()
export default function UseContext() {
    let [name,setName] = useState("saif ali")
    let [age,setage] = useState(22)
  return (
    <>
    <h1>USECONTEXT</h1>
    <NameContaxt.Provider value={name}>
        
      <ComB name={name}/>
    <Agecontaxt.Provider value={age}>

      <ComA age={age}/>
    </Agecontaxt.Provider>
    </NameContaxt.Provider>
      
    </>
  )
}
