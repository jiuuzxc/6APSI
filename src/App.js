import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage.js';
import LandingPage from './LandingPage.js';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
