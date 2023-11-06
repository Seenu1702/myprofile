/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Notes from './Components/Notes';

function App(props) {
  // console.log(props.notes);

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  // console.log(notes);
  const addNote = (event) => {
    event.preventDefault();
    // console.log('button clicked...');
    // console.log(newNote);
    const newObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    setNotes(notes.concat(newObject));
    setNewNote('');


  }

  const handleNoteChange = (event) =>{
    // console.log(event.target.value);
    setNewNote(event.target.value);
    // console.log(newNote)
  }

  return (
    <div>
      <h1>Notes App</h1>
      <ul>
        {
          notes.map(note =>
            <Notes key={note.id} note = {note}/>
            )
        }
      </ul>

      <form onSubmit={addNote} >
        <input 
        value={newNote}
        placeholder='a new note....'
        onChange={handleNoteChange}/>
        <button type='submit'>Save Note</button>
      </form>
     
      
    </div>
  )
}

export default App