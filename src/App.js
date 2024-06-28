import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Example component for the home page
import Exercises from './pages/Exercises'; // Example component for exercises page
import "./output.css";

const App = () => {
  return (
    <Router>
      <div className='h-screen w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;