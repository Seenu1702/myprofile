/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ReadNote from './Components/ReadNote';
import CreateNewNotes from './Components/CreateNewNotes';
import DeleteNote from './Components/DeleteNote';
import EditNote from './Components/EditNote';
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

    setNewNoteContent('');
    setNewNoteImportant('');

    fetchNotes();
  }

  const padding = {
    "paddingRight": 15
  }


  return (
      
      <Router>

        <div>
          <Link to="/"style={padding}>Dashboard</Link>
          <Link to="/read" style={padding}>Read Notes</Link>
          <Link to="/create" style={padding}>Create Notes</Link>
          <Link to="/edit" style={padding}>Edit Notes</Link>
          <Link to="/delete" style={padding}>Delete Notes</Link>
        </div>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/read' element={<ReadNote showStatus={ showStatus } handleStatusChange={ handleStatusChange } notes={ notes } />} />
          <Route path='/create' element={<CreateNewNotes addNote={ addNote } setNewNoteContent={ setNewNoteContent } newNoteContent={ newNoteContent} newNoteImportant={newNoteImportant} setNewNoteImportant={ setNewNoteImportant} useNewNoteContentRef={ useNewNoteContentRef} />} />
          <Route path='/edit' element={<EditNote notes={notes} setNotes={setNotes} />} />
          <Route path='/delete' element={<DeleteNote notes={notes} setNotes={setNotes} />} />
        </Routes>

      </Router>
  )
}

export default App;