/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

function ChildComponent() {
    const message = useContext(MessageContext);
    
  return (
    <div>
        <h2>ChildComponent</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
        <GrandChildComponent />
    </div>
  )
}

export default ChildComponent;