import React, { useContext } from 'react'
import { LoginContext } from './LoginContext';

const Profile = () => {

    const valueContext = useContext(LoginContext);


  return (
    <div>
        <h1>My profile</h1>
        <h2>Username: {valueContext.userName}</h2>
    </div>
  )
}

export default Profile