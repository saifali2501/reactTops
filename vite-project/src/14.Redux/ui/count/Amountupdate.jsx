import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { amountIncement, amountTen } from '../../redux/feature/Amount'

export default function Amountupdate() {
 let disptch =   useDispatch()
    
  return (
    <div>
      <Button onClick={()=>disptch(amountIncement())}>IncAmount</Button>
      <Button onClick={()=>disptch(amountTen())}>IncAmount</Button>

    </div>
  )
}
