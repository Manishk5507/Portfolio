import React from 'react';

const About = ({ data }) => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const highlights = [
    {
      icon: '🚀',
      title: 'Performance Focused',
      description: 'I build fast, optimized applications that provide excellent user experience.'
    },
    {
      icon: '🎨',
      title: 'Design Minded',
      description: 'I believe great code should be paired with beautiful, intuitive design.'
    },
    {
      icon: '🔧',
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'All my applications are built with mobile responsiveness as a priority.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-xl text-secondary-600 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating digital experiences 
                that make a difference. With expertise in modern web technologies, I help businesses 
                and individuals bring their ideas to life.
              </p>
            </div>

            <div className="prose prose-lg text-secondary-700">
              <p>
                My journey in web development started over 3 years ago, and I've been constantly 
                learning and evolving ever since. I specialize in React.js, Node.js, and modern 
                web technologies, but I'm always excited to explore new tools and frameworks.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring the latest trends in web development. 
                I believe in writing clean, maintainable code and creating applications that 
                users love to interact with.
              </p>
            </div>

            {/* View Resume Button */}
            <div className="pt-4">
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Stats and Highlights */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card p-6 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl font-display font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors duration-300"
                >
                  <div className="text-2xl flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;