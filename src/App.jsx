import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import React from "react";

const App = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />
      </Routes>
    </div>
  );
};
export default App;
