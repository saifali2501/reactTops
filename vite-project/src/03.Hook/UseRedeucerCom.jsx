import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function UseRedeucerCom() {
        const reducer = (state,action)=>{
            if(action=== "INC"){
                return state + 1;
            }else if (action === "DEC"){
                return state - 1
            }else{
                return state
            }
        }


        let [count,dispatch] = useReducer(reducer,1000)
  return (
    <div>
      <h1>count is{count}</h1>
      <Button onClick={()=>dispatch("INC")}>INCREMENT</Button>
      <Button onClick={()=>dispatch("DEC")}>DECREMENT</Button>
      <Button></Button>

    </div>
  )
}
