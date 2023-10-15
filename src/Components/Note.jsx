/* eslint-disable react/prop-types */
function Note({note}) {
  return(
    <li> 
      { note.important && '✅'} { note.content } 
    </li>
  )
  }

export default Note