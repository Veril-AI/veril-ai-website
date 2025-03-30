import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ModelDashboard from './components/ModelDashboard';
import PartnersAndMentions from './components/PartnersAndMentions';

// Create a Home component that combines the components for the landing page
const Home = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Features />
      <Pricing />
      <PartnersAndMentions />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<ModelDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;