/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function DeleteForm ({selectedOption, notes, setNotes}) {

  let selectedNote =  notes.find(note => note.id == selectedOption);
  
  const navigate = useNavigate();

  const deletedNote = async () => {
    console.log('deleting the note ...');
      try{
        let response = await axios.delete(`http://localhost:3000/notes/${selectedOption}`);
        console.log('deleted successfully...');
        console.log(response);

        let updatedNotes = notes.filter(n => n.id !== selectedNote.id);
        setNotes(updatedNotes);
        navigate('/read');

      }
      catch(error){
        console.log('Error deleting the note:', error);
      }
  }
  

  return (
    <div>
      <br /><br />
      <label>
        ID: {selectedNote.id}
        <br /><br />
        Content: {selectedNote.content}
        <br /><br />
        Important: {selectedNote.important ? 'True' : 'False'}
      </label>
      <br /><br />
      <button onClick={deletedNote}>Delecte Note</button>
           
    </div>
  )
}



function DeleteNote({notes, setNotes}) {


    const [selectedOption, setSelectedOption] = useState('Select an ID');

    const selectHandler = (e) => {
        
        setSelectedOption(e.target.value);
        console.log(e.target.value);
    }

  return (
    <div>
        <h2>Delete Note</h2>
        <label>
            Select the Note ID to Edit/Update: &nbsp; &nbsp;
            <select onChange={selectHandler}>
                <option>{'Select an ID'}</option>   
                {
                    notes.map(note => 
                        <option key={note.id}>{note.id}</option>)
                }
                
            </select>
        </label>

        <div>
            {selectedOption !== 'Select an ID' && <DeleteForm setNotes={setNotes} notes={notes} selectedOption={selectedOption} />}
        </div>

        
    </div>
     
    
  )
}

export default DeleteNote;
