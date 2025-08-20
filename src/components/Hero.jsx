import React, { useState, useEffect } from 'react';

const Hero = ({ data, social }) => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-lg font-medium text-white/80 animate-fade-in">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-white/90">
                  <span className="inline-block animate-fade-in">
                    {titles[currentTitle]}
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              {data.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {Object.entries(social).map(([platform, url]) => (
                socialIcons[platform] && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    {socialIcons[platform]}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-white/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Profile image */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;