import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./Components/Blue";


import React from "react";

const App = () => {
  return (
    
    <div id="main-section">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      
      <Routes>
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />
      </Routes>
     
      
    </div>
    
  );
};
export default App;
