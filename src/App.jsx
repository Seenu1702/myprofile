// import React from 'react';
import { createContext, useState } from 'react';
import ChildComponent from './Components/ChildComponent';

// create a context
const MessageContext = createContext();

function App() {
  const [message, setMessage] = useState('Hello from Parent APP...');

  return (
    <div>
      <h1>Parent Component</h1>
      <MessageContext.Provider value = {message}>
      <ChildComponent />
      </MessageContext.Provider>

      
    </div>
  )
}

export {App as default, MessageContext}