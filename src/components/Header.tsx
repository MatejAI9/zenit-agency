import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 md:flex-none flex justify-center md:justify-start w-full md:w-auto">
            <img 
              src="logo.png"
              alt="Zenit Agency" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('why-hire-us')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Why Hire Us
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              Join
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('why-hire-us')}
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                Why Hire Us
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                Join
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
