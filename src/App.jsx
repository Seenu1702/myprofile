/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

function App(props) {

  // console.log(props.notes);

  // define states
  const [notes, setNotes] = useState(props.notes);
  const [showStatus, setShowStatus] = useState('all');

  // states for adding new notes form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  // const [notes, setNotes] = useState([]);
  // get the data
  // useEffect(() =>{
  //   setNotes(props.notes);
  // }, []);

  const newNote = useRef(null);

  useEffect(() =>{
    newNote.current.focus();
  },[]);

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
 const addNewNote = (e) => {
  e.preventDefault();
    
  // create a new noteobject
  const noteObject = {
    id: notes.length + 1,
    content: newNoteContent,
    important: newNoteImportant === 'true',
  }

  setNotes(notes.concat(noteObject));
  setNewNoteContent('');
  setNewNoteImportant('');

 }

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
      <hr />
      <h1>Add a New Note : </h1>
      <form onSubmit={addNewNote}>
        <label htmlFor="">
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text"
          placeholder='Add a new note...' 
          onChange={(e) => setNewNoteContent(e.target.value)}
          value={newNoteContent}
          ref={newNote}
          required/>
        </label>
        <br /><br />
        <label htmlFor="">
          Is it Important? &nbsp;
          <select 
            onChange={(e) => setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
            required
          >
            <option>--Select--</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <br /><br />
        <button type='submit'>Add New Note</button>
      </form>
    </div>
  )
}

export default App;