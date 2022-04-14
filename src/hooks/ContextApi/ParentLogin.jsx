import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile';
import { LoginContext } from './LoginContext';

const ParentLogin = () => {

    const [showProfile, setShowProfile] = useState(false);
    const [userName, setUserName] = useState("")


  return (
    <div>
        <h2>ParentLogin Context</h2>
        <LoginContext.Provider value={{userName, setUserName, setShowProfile}}>
            {
                showProfile ? <Profile/> : <Login/>
            }
        </LoginContext.Provider>
    </div>
  )
}

export default ParentLogin