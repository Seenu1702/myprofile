/* eslint-disable react/prop-types */
import React from 'react';

function Notes({note}) {
  return (
    <div>
        <li>{note.content}</li>
    </div>
  )
}

export default Notes;