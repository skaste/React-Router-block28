import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./Components/Blue";
import Red from "./Components/Red";




const App = () => {
  return (
    
    <div id="main-section">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      
      <Routes>
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>}/>
      </Routes>
     
      
    </div>
    
  );
};
export default App;
