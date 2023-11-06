/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Notes from './Components/Notes';

function App(props) {
  // console.log(props.notes);

  const [notes, setNotes] = useState(props.notes);

  console.log(notes);
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
     
      
    </div>
  )
}

export default App