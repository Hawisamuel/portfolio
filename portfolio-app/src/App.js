import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // Optional custom CSS file

// Import your components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;