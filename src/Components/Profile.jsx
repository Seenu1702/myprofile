/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { profileNameContext } from '../App';

function Profile() {

    const {profileName, setProfileName} = useContext(profileNameContext);
    // console.log(profileName);

    const profileNameHandler = (event) => {
      // console.log(event.target.value);
      setProfileName(event.target.value);
      
    }

  return (
    <div>
      <p>Profile Name: {profileName}</p>
      <input 
        type="text"
        value={profileName}
        onChange={profileNameHandler} />
    </div>
  )
}

export default Profile