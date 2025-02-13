import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Revolutionizing</span>
            <span className="block text-blue-200">AI Compliance & Ethics</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Build trust in your systems with Veril AI's innovative platform for auditing, certifying, and monitoring AI systems to ensure fairness, transparency, and compliance.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Request A Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;