import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;