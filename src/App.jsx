/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

//passing props in functional component
function Hello({ name }){
  return(
    <div>Hello { name }!</div>
  )
}

function App() {
  return (
    <Hello name="Seenu"/>
  )
}

export default App