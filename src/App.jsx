/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function App(props) {

  // console.log(props.notes);

  // define states
  
  const [notes, setNotes] = useState(props.notes);
  const [showStatus, setShowStatus] = useState('all');

  // const [notes, setNotes] = useState([]);
  // get the data
  // useEffect(() =>{
  //   setNotes(props.notes);
  // }, []);

 const handleStatusChange = (event) => {
  
  setShowStatus(event.target.value);
  

 }

 let filteredNotes = (notes, showStatus) => {
  switch(showStatus){
    case 'all':
      return notes;
    case 'imp':
      return notes.filter((note) => note.important === true);
    case 'nonimp':
      return notes.filter((note) => note.important === false);
  }

 }

 const notesFiltered = filteredNotes(notes, showStatus);

  return (
    <div>
      <h1>Notes</h1>

      <label>
        <input 
        type="radio"
        name='filter'
        checked={showStatus === 'all'}
        onChange={handleStatusChange}
        value='all' />
        All Notes
      </label>

      <label>
        <input 
        type="radio"
        name='filter'
        checked={showStatus === 'imp'}
        onChange={handleStatusChange}
        value='imp' />
        Important Notes
      </label>

      <label>
        <input 
        type="radio"
        name='filter'
        checked={showStatus === 'nonimp'}
        onChange={handleStatusChange}
        value='nonimp' />
        Non-Important Notes
      </label>

      <ul>
        {
          notesFiltered.map((note) => {
            return <li key={note.id}>{ note.content }</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;