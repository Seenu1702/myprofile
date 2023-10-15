/* eslint-disable react/prop-types */
import Note from "./Components/Note";

function App(props) {
  const {notes} = props;

  const itemList = [];
  notes.forEach((note) => {
    itemList.push(<Note key={ note.id } note = {note} />);
  });

  const addNote = (event) => {
    event.preventdefault();
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
        <input type="text" name="note"/>
        <button>Save Note</button>
      </form>
    </div>
  )
}

export default App