/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

const childMessageContext = createContext();

function ChildComponent() {
    const message = useContext(MessageContext);
    const childMessage = 'Hello from Child';
    
  return (
    <div>
        <h2>ChildComponent</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
        <childMessageContext.Provider value={childMessage}>
            <GrandChildComponent />
        </childMessageContext.Provider>
       
    </div>
  )
}

export {ChildComponent as default, childMessageContext} ;