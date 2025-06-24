import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';
import './LandingPage.js';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username == 'guest' && password == 'abcd') {
      navigate('/landing-page');
    } else {
      alert("Invalid Login Credentials");
    }
  };

  return (
    <div className='background'>

      <div className="loginContainer">
        
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />


        <button className="loginButton" onClick={handleLogin}>Login</button>



      </div>
    </div>
  );
}

export default LoginPage;