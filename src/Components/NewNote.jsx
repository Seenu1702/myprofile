import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../Reducers/noteReducer';

function NewNote() {

    const dispatch = useDispatch();
  

    const addNote = (event) => {
      event.preventDefault();
      const content = event.target.note.value;
      event.target.note.value = '';
      dispatch(createNote(content))
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
    </div>
  )

}

export default NewNote;