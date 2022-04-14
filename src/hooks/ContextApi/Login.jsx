import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const Login = () => {

    const valueContext = useContext(LoginContext);

  return (
    <div style ={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    }}>
        <input
            type="text"
            placeholder="Username..."
            onChange={(e) => valueContext.setUserName(e.target.value)}
        />
        <input type="text" placeholder="Password..." />
        <button
        onClick={() => {
            valueContext.setShowProfile(true);
        }}>
            LOGIN
        </button>
    </div>
  )
}

export default Login