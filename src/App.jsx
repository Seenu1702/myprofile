/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, toggleImportanceOf } from './Reducers/noteReducer';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
function App() {

  return (
    <div>
      
      <NewNote />
      <Notes />
    </div>
  )
}

export default App;