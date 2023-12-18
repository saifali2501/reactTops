import React,{useContext} from 'react'
import ComB3 from './ComB3'
import { NameContaxt } from './UseContext';

export default function ComB2({name2}) {
    const don = useContext(NameContaxt);
    console.log("don:", don)
  return (
    <>
      <h1>ComB2</h1>
      <h1>my name is {don}</h1>
      <ComB3 name3={name2}/>
    </>
  )
}
