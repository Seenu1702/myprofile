/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App(props) {

  // console.log(props.notes);

  // define the state
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(props.notes);
  const [showStatus, setShowStatus] = useState('all');

  // get the data
  // useEffect(() => {
  //   setNotes(props.notes);
  // }, []);
  
  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
    // console.log(event.target.value);
  }

  let filterdNotes = (notes, showStatus) => {
    switch(showStatus){
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
    }
  }

  const notesFiltered = filterdNotes(notes, showStatus);


  return (
    <div>
      <h1>Notes</h1>
      <label>
        <input 
        type="radio"
        name='filter'
        value='all'
        onChange={handleStatusChange}
        checked={showStatus === 'all'}
         /> 
         All notes
      </label>
      <label>
        <input 
        type="radio"
        name='filter'
        value='imp'
        onChange={handleStatusChange}
        checked={showStatus === 'imp'}
         />
          Important notes
      </label>
      <label>
        <input 
        type="radio" 
        name='filter'
        value='nonimp'
        onChange={handleStatusChange}
        checked={showStatus === 'nonimp'}
        />
         Non-Important notes
      </label>
      <ul>
        {
          notesFiltered.map(note => 
            <li key={note.id}>{note.content}</li>)
        }
      </ul>
    </div>
  )
}

export default App;