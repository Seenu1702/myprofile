import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

function EditNote({notes, setNotes}) {

    const [selectedOption, setSelectedOption] = useState('Select an ID');

    const selectHandler = (e) => {
        
        setSelectedOption(e.target.value);
        console.log(e.target.value);
    }


  return (
    <div>
        <h2>Edit Note</h2>
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
            {selectedOption !== 'Select an ID' && <UpdateForm selectedOption={selectedOption} notes={notes} setNotes = {setNotes} />}
        </div>
    </div>
  )
}

export default EditNote;