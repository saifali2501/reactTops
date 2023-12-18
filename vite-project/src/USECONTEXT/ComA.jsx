import React, { useContext } from 'react'
import { Agecontaxt } from './UseContext'

export default function ComA() {
  const data2 = useContext(Agecontaxt)
  return (
    <div>
      <h1>ComA</h1>
      <h1>2. my name is {data2}</h1>
    </div>
  )
}
