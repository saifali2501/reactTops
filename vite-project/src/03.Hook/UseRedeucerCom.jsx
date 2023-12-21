import React, { useReducer } from 'react'
import { Button } from 'reactstrap'

export default function UseRedeucerCom() {
        const reducer = (state,action)=>{
            if(action=== "INC"){
                return {count:state.count + 1};
            }else if (action === "DEC"){
                return {count:state.count - 1}
            }else{
                return state
            }
        }


        let [count,dispatch] = useReducer(reducer,{count:1000})
  return (
    <div>
      <h1>count is{count.count}</h1>
      <Button onClick={()=>dispatch("INC")}>INCREMENT</Button>
      <Button onClick={()=>dispatch("DEC")}>DECREMENT</Button>
      <Button onClick={()=>dispatch("galti")}>wrong</Button>

    </div>
  )
}
