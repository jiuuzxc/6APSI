import React from 'react';
import './LandingPage.css';

function LandingPage() {
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
        <h1>Welcome to the Landing Page!</h1>
        <p>You have successfully logged in. Enjoy exploring the site!</p>
      </div>
    </div>
  );
}

export default LandingPage;
