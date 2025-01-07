import React from 'react';
import { Shield, BarChart2, Award, Layout } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Comprehensive Audits',
      description: 'Evaluate AI models for bias, transparency, and compliance with global standards.',
      icon: Shield,
    },
    {
      name: 'Real-Time Insights',
      description: 'Actionable feedback and improvement recommendations for your AI systems.',
      icon: BarChart2,
    },
    {
      name: 'Certification Levels',
      description: 'Showcase ethical AI compliance with Gold, Silver, or Bronze certifications.',
      icon: Award,
    },
    {
      name: 'Custom Dashboards',
      description: 'Industry-specific dashboards.',
      icon: Layout,
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Platform Features
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;