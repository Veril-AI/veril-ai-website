import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogEditor from './components/BlogEditor';
// Create a Home component that combines the components for the landing page
const Home = () => {
  return (
    <>
      <HomePage />
      {/* <About />
      <Journey />
      <Contact /> */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* <Navbar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/journey" element={<Journey/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/new" element={<BlogEditor/>} />
            <Route path="/blog/:slug" element={<BlogPost/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;