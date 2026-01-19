// Journey.tsx
import React from 'react';
import Navbar from './Navbar';
import VerilAILogo from '../assets/Veril-AI-logo.png';
import OndgLogo from '../assets/ondg-logo.jpg';
import OdouriumLogo from "../assets/odourium.png";
import DeloitteLogo from "../assets/deloitteLogo.png";
import NHSLogo from "../assets/nhs-logo-880x4951.jpeg";
import InstagramLogo from "../assets/instagram-logo.png";
import ecommerceLogo from "../assets/ecommerce-icon.png";
import BeforeItBlowsLogo from "../assets/before-it-blows-logo.png";
import MidlandsTvLogo from "../assets/MidlandsTv-logo.png"
import YouthBeyondBordersLogo from "../assets/youth_beyond_borders_logo.jpeg"
import FiverrLogo from "../assets/Fiverr_logo.png"

const timelineData = [
  {
    year: '2025',
    title: 'Founded Before It Blows',
    description: 'Before It Blows is an AI-powered Gen Z trend radar platform that helps brands detect and leverage viral trends, slang, sounds, memes, and cultural shifts before they go mainstream.',
    image: BeforeItBlowsLogo,
  },
  {
    year: '2025',
    title: 'Founded Veril AI',
    description: 'Launched Veril AI, AI tech startup focusing on AI compliance and ethics, with partnerships established with Microsoft for Startups and IBM for Startups.',
    image: VerilAILogo,
  },
  {
    year: '2023',
    title: 'Founded Odourium',
    description: 'Established Odourium, tech startup that specialises in detecting harmful gasses by developing innovative e-Nose smell sensors. Partnered with Santander X for startups program.',
    image: OdouriumLogo, 
  },
  {
    year: '2022',
    title: 'Founded Ondg',
    description: 'Established Ondg, an ethnic food delivery app for delivering unique ethnic foods not available on existing food delivery apps. Partnered with Innovate UK Edge',
    image: OndgLogo,
  },
  {
    year: '2017',
    title: 'Work experience at Deloitte',
    description: 'Gained professional experience as strategic consultant, working on reducing costs and thinking of innovative ways for my secondary school.',
    image: DeloitteLogo,
  },
  {
    year: '2016',
    title: 'Work experience at NHS Heartlands Hospital',
    description: 'Gained first professional experience as a system admin intern, working on resolving technical difficulties with peoples IT laptops.',
    image: NHSLogo,
  },
  {
    year: '2016',
    title: 'Founded Instagram business page',
    description: 'Founded and grew an Instagram page to over 100,000 followers and sold it for an undisclosed amount.',
    image: InstagramLogo,
  },
  {
    year: '2014',
    title: 'Founded MajorNeeds',
    description: 'Founded e-commerce website selling cat products to customers in over 15 countries in Europe and North America. MajorNeeds got acquired in 2015 for an undisclosed amount.',
    image: ecommerceLogo,
  },
].sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));

const Journey = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Journey</h1>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-8 ml-4">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 relative">
              {/* Year bubble */}
              <div className="absolute -left-10 top-2 bg-blue-500 text-white text-sm font-semibold py-1 px-3 rounded-full z-10">
                {item.year}
              </div>

              {/* Card content */}
              {/* <div className="bg-white rounded-lg shadow-md p-6 ml-4 flex items-center space-x-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-full bg-gray-100"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div> */}

            <div className="bg-white rounded-lg shadow-md p-6 ml-4 flex items-center space-x-4">
                {item.title === 'Founded Before It Blows' ? (
                  <a
                    href="https://www.beforeitblows.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:opacity-90 transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded-full bg-gray-100"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600 underline">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </a>
                ) : (
                  <>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded-full bg-gray-100"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;

