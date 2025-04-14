import React, { useState } from "react";
import { FaApple, FaHome, FaInfoCircle, FaTools, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <FaApple /> Deniz Software
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <a href="#home"><FaHome /> Home</a>
            <a href="#about"><FaInfoCircle /> About</a>
            <a href="#services"><FaTools /> Services</a>
            <a href="#contact"><FaEnvelope /> Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome to Deniz Software</h1>
        <p>
          Innovative solutions for a better future. Explore our cutting-edge software services.
        </p>
        <a href="#services" className="cta-button">Learn More</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Deniz Software combines modern technology and creative solutions to deliver custom software services to its clients.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="icon-grid">
          <div className="icon-item">🏥 Hospital Systems</div>
          <div className="icon-item">💼 HR Systems</div>
          <div className="icon-item">🛡️ Defense Systems</div>
          <div className="icon-item">🏫 School Management</div>
          <div className="icon-item">🔧 Custom Projects</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>We would be happy to work with you. Reach out to us:</p>
        <p><strong>Email:</strong> info@denizsoftware.com</p>
        <p><strong>Phone:</strong> +90 555 555 5555</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Deniz Software. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
