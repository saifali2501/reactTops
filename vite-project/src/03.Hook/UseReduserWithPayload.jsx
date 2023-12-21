import React, { useReducer, useState } from 'react';
import { Button } from 'reactstrap';

export default function UseReducerWithPayload() {

  const [plus, setplus] = useState('');

  const reducer = (state, action) => {
    if (action.actionType === 'INC') {
      return { count: state.count + + action.payload };
    }
    return state;
  };

  const handleInputChange = (e) => {
    setplus(e.target.value);
  };

  const handleButtonClick = () => {
    parseInt(plus, 10);
    
    if (!isNaN(plus)) {
      dispatch({ actionType: 'INC', payload: plus });
      if(plus > 0 ){

        setplus('')
      }else{
        alert("please put the value")
      }

    }
  };
   
  const [count, dispatch] = useReducer(reducer, { count: 1000 });
  return (
    <div>
      <h1>count is {count.count}</h1>
      <input type="text" value={plus} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Click</Button>
    </div>
  );
}
// const parsedValue =
