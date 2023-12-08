/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createStore } from 'redux';

const noteReducer = (state=[], action) => {
  switch(action.type){
    case 'NEW_NOTE':
      return state.concat(action.payload);
    case 'TOGGLE_IMPORTANCE':
      // get the id from the action.payload

      const id = action.payload.id;
      const noteToChange = state.find(n => n.id === id);

      const changeNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      
      return state.map(note => 
        note.id != id ? note: changeNote)
      
  }

  return state;
}

const store =createStore(noteReducer);

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1,
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with an action.',
    important: false,
    id: 2,
  }
})

// store.dispatch({
//   type: 'TOGGLE_IMPORTANCE',
//   payload: {
//     id: 2,
//   }
// })

const toggleImportance =(id) => {
  console.log('button clicked');
  store.dispatch({
    type: 'TOGGLE_IMPORTANCE',
    payload: {
      id,
    }
  })
}

function App() {

  return (
    <div>
      {
        store.getState().map(note => 
            <li 
              key={note.id}
              onClick={() => toggleImportance(note.id)}
              >
              { note.content } {note.important ? '★' : ''}
            </li>
          )
      }
    </div>
  )
}

export default App;