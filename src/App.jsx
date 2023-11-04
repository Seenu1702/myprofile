/* eslint-disable no-undef */
// import React from 'react'

import { useState } from "react";

function ChildComponent({onMessage}){
  const message = `Hello from child component`;

  return(
    <div>
      <h2>Child Component</h2>
      <button onClick={() => onMessage(message)}>Send Message to the Parent</button>
    </div>
  )
}

function App() {
  const [message, setMessage] = useState(``);

  const handleMessage = (data) => {
    setMessage(data);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from child component: { message }</p>
      <ChildComponent onMessage = {handleMessage}/>
    </div>
  )
}

export default App