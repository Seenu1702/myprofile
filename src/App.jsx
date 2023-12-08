/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, toggleImportanceOf } from './Reducers/noteReducer';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
function App() {

  const filterSelected =(value)=>{
    console.log(value);
  }

  return (
    <div>
      
      <NewNote />
      <br />
      <div>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('all')}
             />
          All
        </label>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('imp')}
             />
          Important
        </label>
        <label>
          <input 
            type="radio"
            name='filter'
            onClick={() => filterSelected('nonimp')}
             />
          Non-Important
        </label>
      </div>
      <Notes />
    </div>
  )
}

export default App;