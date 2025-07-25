import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MatrixBackground />
      <Header />
      <main className="main-content">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
