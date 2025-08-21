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
      <div className="container-custom px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <div 
            className="text-lg sm:text-xl lg:text-2xl font-display font-bold cursor-pointer flex-shrink-0"
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
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105 px-2 py-1 ${
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
          <div className="hidden lg:block flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium text-sm xl:text-base px-4 xl:px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
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
            className="lg:hidden p-1.5 sm:p-2 flex-shrink-0 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1">
              <div className={`w-5 sm:w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 sm:w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 sm:w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-secondary-600' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen pb-4 sm:pb-6' : 'max-h-0'
        }`}>
          <div className="space-y-2 sm:space-y-3 px-1 sm:px-2">
            {portfolioData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`block w-full text-left font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-300 text-sm sm:text-base ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600 bg-primary-50'
                    : isScrolled
                      ? 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-3 sm:mt-4 bg-primary-600 text-white font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base"
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