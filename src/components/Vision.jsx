import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Vision
          </h2>
          <div className="mt-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              At Veril AI, we envision a world where AI systems are not only operationally efficient but also ethically sound, fostering a future of responsible AI innovation and governance.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Trust</h3>
            <p className="text-gray-600">Building trust through transparent AI systems and ethical practices.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Innovation</h3>
            <p className="text-gray-600">Driving innovation while maintaining the highest ethical standards.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Impact</h3>
            <p className="text-gray-600">Creating positive impact through responsible AI deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;