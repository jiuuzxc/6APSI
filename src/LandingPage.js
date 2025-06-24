import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LandingPage.css';
import './LoginPage.js';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landingContainer"
      style={{
        backgroundImage: `url("/mark-zuckerberg.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1>Ni hao, Welcome to Landing Page!</h1>
        <button className="loginButton" onClick={() => navigate('/login-page')}>Login</button>
      </div>
    </div>
  );
}

export default LandingPage;
