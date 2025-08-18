import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import WhyHireUs from './components/WhyHireUs';
import Comparison from './components/Comparison';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Process />
      <WhyHireUs />
      <Comparison />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;