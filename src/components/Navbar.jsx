import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="text-2xl font-display font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}>
              {portfolioData.personal.name.split(' ')[0]}
            </span>
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-secondary-600' : 'text-white/80'
            }`}>
              {portfolioData.personal.name.split(' ')[1]}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? isScrolled 
                      ? 'text-primary-600 border-b-2 border-primary-600' 
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-secondary-600 hover:text-primary-600'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                  : 'bg-white text-primary-600 hover:bg-white/90 shadow-lg'
              }`}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="space-y-4">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`block w-full text-left font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600'
                    : isScrolled
                      ? 'text-secondary-600 hover:text-primary-600'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;