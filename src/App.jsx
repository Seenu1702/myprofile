import React from 'react';
import { useRef } from 'react';
import SetInputFocus from './Components/SetInputFocus';




function App() {

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // console.log('button clicked');
      // console.log(inputRef.current.value);
      inputRef.current.focus();

  }

  return (
    <div>
      <input 
        type="text"
        ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
      <SetInputFocus reference = {inputRef}/>
    </div>
  )
}

export default App;