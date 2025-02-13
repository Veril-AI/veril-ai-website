import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      // price: '$199',
      description: 'Perfect for startups and small businesses',
      features: [
        'Core compliance checks',
        'Explainability tools',
        'Basic reporting',
        'Priority support'
      ]
    },
    {
      name: 'Professional Plan',
      // price: '$499',
      description: 'For growing mid-sized enterprises',
      features: [
        'Advanced auditing tools',
        '24/7 support',
        'Custom dashboards',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise Plan',
      price: '$10,000',
      description: 'Built for large-scale businesses',
      features: [
        'Dedicated manager',
        '24/7 support',
        'Custom integration',
        'Custom dashboards',
        'API access',
        'Advanced auditing and analytics'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.featured ? 'border-2 border-blue-500 transform scale-105' : ''
              }`}
            >
              <div className="px-6 py-8 bg-white">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>

                {/* Hide the pricing block */}
                {/* 
                <p className="mt-8">
                  {plan.name === 'Enterprise Plan' ? (
                    <span className="text-lg font-semibold text-gray-900">
                      Contact Sales
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-base font-medium text-gray-500">/month</span>
                    </>
                  )}
                </p>
                */}

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className={`block w-full px-6 py-3 text-center font-medium rounded-md ${
                      plan.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {plan.name === 'Enterprise Plan' ? 'Get Started' : 'Get started'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
