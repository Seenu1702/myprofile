/* eslint-disable react/prop-types */

import Note from "./Components/Note";

function App(props) {
  const {notes} = props;

  const itemList = [];
  notes.forEach((note) => {
    itemList.push(<Note key={ note.id } note = {note} />);
  });

  function addNote(event) {
    event.preventDefault();
    // console.log('button clicked');
    // console.log(event.target.elements.note.value);   
    // console.log(event);
  }

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        { itemList }
      </ul>

      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">Save Note</button>
      </form>
    </div>
  )
}

export default App