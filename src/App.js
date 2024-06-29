import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Exercises from './pages/ExercisesPage'; 
import "./output.css";
import {BodyPartProvider } from "./context/BodyPartContext"

const App = () => {
  return (
    <Router>
      <BodyPartProvider>
        <div className='min-h-screen w-full overflow-hidden'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </div>
      </BodyPartProvider>
    </Router>
  );
};

export default App;