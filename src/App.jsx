/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, toggleImportanceOf } from './Reducers/noteReducer';
function App() {

  const dispatch = useDispatch();
  const notes = useSelector(state => state);

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNote(content))
  }

  const toggleImportance = (id) =>{
    dispatch(toggleImportanceOf(id));
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input 
          placeholder='type a new note..'
          name='note'
          />
        <br /><br />
        <button type='submit'>Add/Save</button>
      </form>

      <ul>
      {
        notes.map(note => 
            <li 
              key={note.id}
              onClick={() => toggleImportance(note.id)}
              >
              { note.content } {note.important ? '★' : ''}
            </li>
          )
      }
      </ul>
    </div>
  )
}

export default App;