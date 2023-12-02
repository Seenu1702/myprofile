/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ReadNote from './Components/ReadNote';
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

  // useEffect(() => {
  //   useNewNoteContentRef.current.focus();
  // },[])

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

    setNewNoteContent('')
    setNewNoteImportant('');

    fetchNotes();
  }

  const padding = {
    padding: 15,
  }


  return (
    <div>
      
      <Router>

      

        <div>
          <Link to="/">Dashboard</Link>
          <Link to="/read" style={padding}>Read Notes</Link>
        </div>

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/read' element={<ReadNote showStatus={ showStatus } handleStatusChange={ handleStatusChange } notes={ notes } />} />
        </Routes>

        </Router>

    </div>
  )
}

export default App;