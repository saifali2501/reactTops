import React from 'react'
import { pointInc } from '../../redux/feature/Point'
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

export default function PountUpdate() {
    let dipatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dipatch(pointInc())}>Inc-1</Button>
    </div>
  )
}
