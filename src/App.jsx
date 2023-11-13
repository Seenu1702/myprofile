/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import { useState } from 'react';
import { initialState, reducer } from './Reducer/Count';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() =>dispatch({type:'increment'})}>Increment</button>
      <button onClick={() =>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={() =>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default App;