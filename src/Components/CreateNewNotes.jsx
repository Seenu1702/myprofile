import React from 'react';

function CreateNewNotes() {
  return (
    <div>
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

export default CreateNewNotes;