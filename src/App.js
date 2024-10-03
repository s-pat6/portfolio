import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Footer />
      </div>
    </Router> 
  );
}

export default App;
