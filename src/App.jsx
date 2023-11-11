import React, { createContext, useState } from 'react';
import Profile from './Components/Profile';


const profileNameContext = createContext();

function App() {

  const [profileName, setProfileName] = useState('');   

  return (
    <div>
      <profileNameContext.Provider value={{profileName, setProfileName}}>
        <Profile />
      </profileNameContext.Provider>
    </div>
  )
}

export {App as default, profileNameContext};