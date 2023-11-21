import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./Components/Blue";
import Red from "./Components/Red";
import Home from "./Components/Home";



const App = () => {
  return (
    
    <div id="main-section">
      <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>}/>
      </Routes>
     
      
    </div>
    
  );
};
export default App;
