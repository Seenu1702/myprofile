/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react';
import Home from './Components/Home';
import Users from './Components/Users';
import Notes from './Components/Notes';

function App() {
  const [page, setPage] = useState('home');

  const toPage = (page) => (event) =>{
    event.preventDefault();
    setPage(page);
  }

  const content = () =>{
    if(page === 'home'){
      return <Home />
    }
    else if(page === 'users'){
      return <Users />
    }
    else if(page === 'notes'){
      return <Notes />
    }
  }

  const padding = {
    padding: 10
  }

  return (
    <div>
      <a href="" onClick={toPage('home')} style={padding}>Home</a>
      <a href="" onClick={toPage('users')}style={padding}>Users</a>
      <a href="" onClick={toPage('notes')}style={padding}>Notes</a>

      {content()}
    </div>

    
  )
}

export default App