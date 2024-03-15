import React from 'react'
import CountDisplay from './CountDisplay'
import CountUpdate from './CountUpdate'
import AmountDisplay from './AmountDisplay'
import Amountupdate from './Amountupdate'
import PointDisplay from './PointDisplay'
import PountUpdate from './PountUpdate'
import Amount from '../../redux2/Amount'
import Crud from './Crud'
import CrudDisplay from './CrudDisplay'

export default function Count() {
  return (
    <div>
      {/* <CountDisplay/>
      <CountUpdate/>
      <AmountDisplay/>
      <Amountupdate/>
      <PointDisplay/>
      <PountUpdate/> */}
      <Crud/>
      <CrudDisplay/>
      {/* <Amount/> */}
    </div>
  )
}
