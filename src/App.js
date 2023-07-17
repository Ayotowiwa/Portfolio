import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './hero';
import AboutMe from './about';
import Skills from './skills';
import Testimonials from './testimonials';
import Contactme from './contactme';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Testimonials />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
