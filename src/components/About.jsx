import React from 'react';
import Navbar from './Navbar';
import mainBg from '../assets/kwame-fiverr-pic-main.jpg';
import midlandsTvLogo from "../assets/MidlandsTv-logo.png";
import youthBeyondBordersLogo from "../assets/youth_beyond_borders_logo.jpeg";
import fiverrLogo from "../assets/Fiverr_logo.png";

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <Navbar />

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 mt-12">Who is Kwame Nyantakyi?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div>
          <img
            src={mainBg}
            alt="Kwame Nyantakyi Profile"
            className="rounded-md shadow-md w-full h-auto"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Samsung KX - King's Cross, London
          </p>
        </div>

        {/* Text Content Section */}
        <div>
          <p className="text-gray-700 mb-4">
            Born in Ghana, Kwame moved to England, UK, as a child and is the youngest of three siblings. From a young age, he exhibited a keen interest in both the world of business and technology.
            Kwame Nyantakyi is a driven and multifaceted individual with a deep passion for technology, entrepreneurship, and creating a positive impact. 
          </p>

          <p className="text-gray-700 mb-4">
            Fueling his early interests, Kwame pursued Computer Science at Aston University, laying a strong foundation for his technical pursuits. He worked as a Software Engineer at Version 1, contributing his expertise to impactful government projects. His entrepreneurial spirit shines through as the founder of Veril AI, a startup focused on AI compliance and ethics. Notably, Veril AI has established partnerships with industry leaders Microsoft for Startups and IBM for Startups.
          </p>

          <p className="text-gray-700 mb-4">
            Kwame's entrepreneurial journey includes the founding of Ondg (2022-2024), an ethnic food delivery service. Prior to this, his first venture, MajorNeeds, was a successful online e-commerce store specializing in cat products, reaching over 1000 customers across more than 15 countries in Europe and North America. Demonstrating his understanding of online presence, Kwame also built an Instagram page with over 100,000 followers, which he later sold before establishing Ondg.
          </p>

          <p className="text-gray-700 mb-4">
            Kwame's core expertise lies in software engineering, building startups, and effective public speaking. His professional experience extends to notable firms such as Deloitte and the NHS, showcasing his adaptability and diverse skill set. He has also been recognized for his potential and achievements, being featured in the Midlands Tv, Youth Beyond Borders and the Fiverr Program for entrepreneurs.
          </p>

          <p className="text-gray-700 mb-4">
            In 2025, Kwame launched Before It Blows, an AI-powered trend radar platform designed to help brands stay ahead of emerging Gen Z trends. The platform uses AI agents to scan social media platforms in real time, surfacing viral content, slang, and cultural shifts before they become mainstream. With this venture, Kwame is pushing the boundaries of cultural intelligence and helping companies connect more authentically with younger audiences.
         </p>

          <p className="text-gray-700">
            Beyond his professional endeavors, Kwame enjoys an active lifestyle, frequenting the gym and finding solace in walks and spending time in nature. He is also committed to giving back as a mentor and sharing his insights as a public speaker, driven by a desire to solve problems and contribute to a better world.
          </p>
        </div>
      </div>

      {/* Optional: "Featured In" or similar section */}
        <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured In</h2>
        <div className="flex justify-center space-x-12 items-start">
          
          {/* Midlands TV */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 mb-2">Midlands TV</span>
            <img src={midlandsTvLogo} alt="Midlands TV Logo" className="h-12 object-contain" />
          </div>

          {/* Youth Beyond Borders */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 mb-2">Youth Beyond Borders</span>
            <img src={youthBeyondBordersLogo} alt="Youth Beyond Borders Logo" className="h-12 object-contain" />
          </div>

          {/* Fiverr */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 mb-2">Fiverr Program</span>
            <img src={fiverrLogo} alt="Fiverr Logo" className="h-12 object-contain" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;