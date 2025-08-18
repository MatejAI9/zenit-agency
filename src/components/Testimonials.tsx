import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna M.",
      image: "/anna.png.png",
      text: "Zenit Agency allowed me to build a passive income of over $2,000 per month with almost no extra work, just by following their guidance."
    },
    {
      name: "Sofia R.",
      image: "/sofia.png.png",
      text: "I felt lost on OnlyFans and couldn't attract fans. With Zenit, my profit doubled and I finally understood the right strategies."
    },
    {
      name: "Emily T.",
      image: "/emily.png.jpg",
      text: "Working with Zenit turned my hobby into a serious business. They handled the management and marketing so I could focus only on creating."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Real stories from real creators who've transformed their earnings with Zenit Agency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
              
              <p className="text-gray-600 text-center italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;