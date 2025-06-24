import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage.js';
import LandingPage from './LandingPage.js';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
