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
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
        <li>{notes[3].content}</li>
        <li>{notes[4].content}</li>
      </ul>
    </div>
  )
}

export default App