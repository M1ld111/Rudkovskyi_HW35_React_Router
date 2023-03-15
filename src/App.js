import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/Albums' element={<Albums />} />
          <Route path='/Photos' element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
