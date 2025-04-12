import React from 'react';
import ibmLogo from '../assets/ibm-logo.jpg';
import microsoftLogo from '../assets/microsoft-for-startups-logo.png';

const PartnersAndMentions = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Partners and Mentions
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted by leading organizations and programs
        </p>
      </div>

      {/* Responsive layout */}
      <div className="mt-12 flex flex-col items-center space-y-12 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-24">
        {/* IBM */}
        <div className="flex flex-col items-center">
          <img src={ibmLogo} alt="IBM For Startups Program" className="h-16 object-contain" />
          <p className="mt-4 text-lg font-medium text-blue-600 text-center">
            IBM For Startups
          </p>
        </div>

        {/* Microsoft */}
        <div className="flex flex-col items-center">
          <img src={microsoftLogo} alt="Microsoft For Startups" className="h-16 object-contain" />
          <p className="mt-4 text-lg font-medium text-blue-600 text-center">
            Microsoft For Startups
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersAndMentions;
