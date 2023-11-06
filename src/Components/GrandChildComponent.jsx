/* eslint-disable react/prop-types */
// import React from 'react';

function GrandChildComponent({message}) {
  return (
    <div>
        <h2>GrandChildComponent</h2>
        <p>Message from Parent Component: <b>{message}</b></p>
    </div>
  )
}

export default GrandChildComponent;