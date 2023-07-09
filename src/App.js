import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/home"
import Education from "./screens/education"
import Project from "./screens/projects"
import Contact from "./screens/contact"

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
