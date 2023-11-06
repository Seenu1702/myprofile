import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent({message}) {
  return (
    <div>
        <h2>ChildComponent</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
        <GrandChildComponent message={message}/>
    </div>
  )
}

export default ChildComponent;