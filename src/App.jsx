import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services'; // Added import for Services
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const percent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        id="scrollIndicator"
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollPercent / 100})` }}
      ></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Services /> {/* Added Services component */}
        <Contact />
        {/* Testimonials section would go here if it existed */}
      </main>
      <Footer />
    </>
  );
}

export default App;
