import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const Results = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "230%",
      label: "Average earnings growth in the first 3 months",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      number: "95%",
      label: "Of our models stay with us long-term",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: DollarSign,
      number: "$200,000+",
      label: "Earned for our creators in the past year",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="results" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Results That Speak For Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – here are the real numbers from our creator partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-6`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                {stat.number}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to become our next success story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the creators who've already transformed their content into consistent revenue streams
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;