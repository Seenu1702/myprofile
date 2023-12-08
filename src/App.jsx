/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, toggleImportanceOf } from './Reducers/noteReducer';
import Notes from './Components/Notes';
import NewNote from './Components/NewNote';
import VisibilityFilter from './Components/VisibilityFilter';
function App() {


  return (
    <div>
      
      <NewNote />
      <br />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App;