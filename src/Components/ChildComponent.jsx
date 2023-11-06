/* eslint-disable react/prop-types */
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

function ChildComponent(props) {
    const message = 'Hello, GrandChild...'
  return (
    <div>
        <h2>ChildComponent</h2>
        <p>Message from Parent Component: <b>{props.message}</b></p>
        <GrandChildComponent message={message}/>
    </div>
  )
}

export default ChildComponent;