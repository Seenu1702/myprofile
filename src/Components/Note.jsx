/* eslint-disable react/prop-types */
function Note({note}) {
  if(note.important) {
    return(
      <li> ✅ { note.content } </li>
    )
  }
  return(
    <li> ❌ { note.content } </li>
  )
  }

export default Note