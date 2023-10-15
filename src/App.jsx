/* eslint-disable react/prop-types */
import Note from "./Components/Note";

function App(props) {
  const {notes} = props;

  const itemList = [];
  notes.forEach((note) => {
    itemList.push(<Note key={ note.id } note = {note} />);
  });

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        { itemList }
      </ul>
    </div>
  )
}

export default App