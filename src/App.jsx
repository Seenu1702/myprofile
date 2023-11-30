/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';

function App() {

  // console.log(props.notes);

  // define the state
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all');

  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  // get the data
  // useEffect(() => {
  //   setNotes(props.notes);
  // }, []);
  
  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
    // console.log(event.target.value);
  }

  const useNewNoteContentRef = useRef(null);

  useEffect(() => {
    useNewNoteContentRef.current.focus();
  },[])

const fetchNotes = async () => {
 try{
  const response = await axios.get('http://localhost:3000/notes');
  setNotes(response.data);
 }
 catch(error){
  console.log("Failed to fetch the note: ",error);
 }
  }



  useEffect(() => {
    fetchNotes();
  },[]);

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



  const addNote = (event) => {
    event.preventDefault();
    // console.log(newNoteContent, newNoteImportant);

    let newNoteObject = {
      content: newNoteContent,
      important: newNoteImportant === 'true',
    }

    // setNotes(notes.concat(newNoteObject));
    console.log("adding new note..")
    axios
      .post('http://localhost:3000/notes/', newNoteObject)
      .then(response => {
        console.log("Added new notes successfully");
      })

    setNewNoteContent('')
    setNewNoteImportant('');

    fetchNotes();
  }


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
      <hr />
      <h2>Add a New Note:</h2>
      <form onSubmit={addNote}>
        <label>
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
            type="text"
            placeholder='Type a new note...'
            onChange={(e) => setNewNoteContent(e.target.value)}
            value={newNoteContent}
            ref={useNewNoteContentRef}
            required />
        </label>
        <br /><br />
        <label>
          Is it important? &nbsp;&nbsp;
          <select 
            onChange={(e) => setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
            required
          >
            <option>--Select--</option>
            <option value='true'>True</option>
            <option value='false'>False</option>
          </select>
        </label>
        <br /><br />
        <button type='submit'>Add a New Note</button>
      </form>
      
    </div>
  )
}

export default App;