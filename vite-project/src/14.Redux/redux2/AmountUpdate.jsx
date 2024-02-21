import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { InxreamentAmount, intTen } from './feature/amount'

export default function AmountUpdate() {
  let disptch =  useDispatch()
  
  return (
    <div>
      <Button onClick={()=>disptch(InxreamentAmount())}>ClickInc</Button>
      <Button onClick={()=>disptch(intTen())}>ClickInc</Button>

    </div>
  )
}
