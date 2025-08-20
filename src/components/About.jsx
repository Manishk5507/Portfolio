import React from 'react';
import { useCompetitiveProgramming } from '../hooks/useCompetitiveProgramming';

const About = ({ data }) => {
  // Fetch real-time ratings
  const { ratings, loading } = useCompetitiveProgramming(
    import.meta.env.VITE_CODEFORCES_HANDLE || '_.Manish._', // Codeforces handle
    import.meta.env.VITE_CODECHEF_HANDLE || 'manishk5507', // CodeChef handle
    1564, // Fallback Codeforces rating
    1889  // Fallback CodeChef rating
  );

  const stats = [
    { number: '9.21', label: 'CGPA at IIIT Lucknow' },
    { number: '800+', label: 'Problems Solved' },
    { 
      number: loading ? '...' : ratings.codeforces.toString(), 
      label: 'Codeforces Rating' 
    },
    { 
      number: loading ? '...' : ratings.codechef.toString(), 
      label: 'CodeChef Rating' 
    }
  ];

  const highlights = [
    {
      icon: '🏆',
      title: 'Competitive Programmer',
      description: '4-star CodeChef (1889) & Specialist Codeforces (1564) with 800+ problems solved.'
    },
    {
      icon: '🤖',
      title: 'AI/ML Specialist',
      description: 'Expert in LLMs, RAG applications, and AI integration with modern web technologies.'
    },
    {
      icon: '👨‍🏫',
      title: 'Tech Leader & Mentor',
      description: 'Trained 200+ students and organized hackathons as Web Wing Member at Axios.'
    },
    {
      icon: '🎯',
      title: 'Innovation Focused',
      description: 'Award-winning developer creating impactful solutions like TopicMaker and Absens.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed">
                I'm a passionate Computer Science student at IIIT Lucknow with an outstanding 9.21 CGPA, 
                specializing in full-stack development, AI/ML, and competitive programming. I combine 
                academic excellence with practical expertise to build innovative solutions that solve real-world problems.
              </p>
            </div>

            <div className="prose prose-base sm:prose-lg text-secondary-700 max-w-none">
              <p className="text-sm sm:text-base">
                As a 4-star rated competitive programmer on CodeChef (1889 rating) and Specialist on Codeforces (1564 rating), 
                I've solved 800+ algorithmic problems and achieved global rankings including rank 59 in CodeChef Starters 195. 
                This problem-solving mindset drives my approach to software development, where I create efficient, scalable solutions.
              </p>
              <p className="text-sm sm:text-base">
                Beyond coding, I'm a Web Wing Member at Axios (IIIT Lucknow's premier technical society), where I've trained 
                200+ students in web development and organized hackathons to strengthen campus tech culture. My projects like 
                TopicMaker (AI-powered lesson planner) and Absens (AI-driven missing persons detection) showcase my expertise 
                in integrating cutting-edge AI technologies with robust full-stack architectures.
              </p>
              <p className="text-sm sm:text-base">
                I'm the "Most Creative AI Idea Winner" at Hackofiesta v5 and actively contribute to the tech community through 
                leadership roles in E-Cell IIIT Lucknow. Whether it's building scalable web applications, implementing AI solutions, 
                or mentoring fellow developers, I'm passionate about leveraging technology to create meaningful impact.
              </p>
            </div>

            {/* View Resume Button */}
            <div className="pt-2 lg:pt-4">
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Stats and Highlights */}
          <div className="space-y-6 lg:space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-primary-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-secondary-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3 lg:space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-white transition-colors duration-300"
                >
                  <div className="text-xl sm:text-2xl flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1 text-sm sm:text-base">
                      {highlight.title}
                    </h3>
                    <p className="text-secondary-600 text-xs sm:text-sm leading-relaxed">
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