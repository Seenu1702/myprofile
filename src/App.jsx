/* eslint-disable react/prop-types */
/*
Hooks: 
    - any function that starts with "use" is called as hook.
    - they are special functions that are only available while React is rendering
  

    to create a counter, where the value is increased as function of time or at a click of button.
*/

import { useState } from "react"



function App() {

  const [counter, setCounter] = useState(0);

  const incrementHandler = () =>{
    setCounter(counter+1);
  };

  const zeroHandler = () =>{
    setCounter(0);
  };

  const decrementHandler = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  };
  

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={zeroHandler}>Zero</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}

export default App