import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="logo.png"
              alt="Zenit Agency" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-gray-300 leading-relaxed">
              Transform your content into passive income with professional OnlyFans management and proven marketing strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={scrollToTop}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('why-hire-us')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Why Hire Us
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Join
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/447561599782"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+44 7561 599782</span>
              </a>
              <a
                href="tel:+447561599782"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+44 7561 599782</span>
              </a>
              <a
                href="mailto:office@zenitagency.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>office@zenitagency.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Zenit Agency. All rights reserved. | Professional OnlyFans Management & Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
