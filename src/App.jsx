import React from 'react';
import { useRef } from 'react';
// useRef - hook: used to create a mutable reference to an element or  a value that persists across render cycles.

// Example: Focus the input text element on click of a button



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
    </div>
  )
}

export default App;