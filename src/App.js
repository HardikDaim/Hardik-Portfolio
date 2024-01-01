// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Education from "./screens/education";
import Project from "./screens/projects";
import Contact from "./screens/contact";
import FeedbackModal from "./components/FeedbackModal";
import Feedback from './screens/Feedback.js'
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []); // Run once on component mount

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    handleCloseModal();
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/education/*" element={<Education />} />
        <Route path="/projects/*" element={<Project />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/feedback/*" element={<Feedback />} />
      </Routes>

      {showModal && (
        <FeedbackModal onClose={handleCloseModal} onClick={handleClick} />
      )}
    </Router>
  );
}

export default App;
