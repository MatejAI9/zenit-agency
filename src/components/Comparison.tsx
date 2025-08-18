import React from 'react';
import { X, Check } from 'lucide-react';

const Comparison = () => {
  const workingAlone = [
    "No consistent strategy",
    "Difficult to grow audience", 
    "No professional marketing",
    "Takes all your free time",
    "Limited monetization"
  ];

  const workingWithZenit = [
    "Passive income",
    "Full content creation guidance",
    "Proven marketing strategies", 
    "24/7 support from our team",
    "Focus only on creating – we handle the rest"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Choice Is Clear
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the difference between going it alone and partnering with professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Working On Your Own Card */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Working On Your Own
            </h3>
            <div className="space-y-4">
              {workingAlone.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <X className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Working With Zenit Card */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 shadow-lg border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Working With Zenit
            </h3>
            <div className="space-y-4">
              {workingWithZenit.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;