/* eslint-disable react/prop-types */

function App(props) {
  // console.log(props);

  // destructing
  const {notes} = props;
  // console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      
      <ul>
        {
          notes.map((note) =>{
            return <li key={ note.id }> { note.content } </li>
          })
        }
      </ul>

      <select name="" id="">
        {
          notes.map((note) =>{
            return <option key={ note.id }> { note.content } </option>
          })
        }
      </select>
    </div>
  )
}

export default App