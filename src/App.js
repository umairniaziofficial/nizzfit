import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import "./output.css";
import {BodyPartProvider } from "./context/BodyPartContext"
import ExerciseDetails from "./pages/ExerciseDetail"


const App = () => {
  return (
    <Router>
      <BodyPartProvider>
        <div className='min-h-screen w-full overflow-hidden'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
          </Routes>
        </div>
      </BodyPartProvider>
    </Router>
  );
};

export default App;