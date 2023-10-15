/* eslint-disable react/prop-types */
import Note from "./Components/Note";

function App(props) {
  const {notes} = props;
  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {
          notes.map((note) =>{
            return <Note key={ note.id } note = {note} />
          })
        }
      </ul>
    </div>
  )
}

export default App