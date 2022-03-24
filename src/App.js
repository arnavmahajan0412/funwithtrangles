import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Quiz from './Components/Quiz';
import Home from './Components/Home';
import Hypotenuse from './Components/Hypotenuse';
import Area from './Components/Area';

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Hypotenuse" element={<Hypotenuse />} />
        <Route path="/Area" element={<Area />} />
      </Routes>
    </div>

  );
}

export default App;
