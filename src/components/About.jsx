import React from 'react';
import { motion } from 'framer-motion';
import { useCompetitiveProgramming } from '../hooks/useCompetitiveProgramming';
import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedCounter,
  StaggeredContainer,
  MagneticButton,
  FloatingElement
} from './AnimatedComponents';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  staggerItem,
  cardHover,
  pulseAnimation
} from '../utils/animations';

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
    <section id="about" className="section-padding bg-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="absolute top-20 left-10">
          <div className="w-20 h-20 bg-primary-100 rounded-full opacity-20" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 right-16">
          <div className="w-16 h-16 bg-primary-200 rounded-full opacity-30" />
        </FloatingElement>
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full opacity-10"
          {...pulseAnimation}
        />
      </div>

      <div className="container-custom px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="fadeInLeft">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  About <span className="text-gradient gradient-text">Me</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-secondary-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm a passionate Computer Science student at IIIT Lucknow with an outstanding 9.21 CGPA, 
                  specializing in full-stack development, AI/ML, and competitive programming. I combine 
                  academic excellence with practical expertise to build innovative solutions that solve real-world problems.
                </motion.p>
              </motion.div>

              <StaggeredContainer className="prose prose-sm sm:prose-base lg:prose-lg text-secondary-700 max-w-none">
                <motion.p 
                  className="text-sm sm:text-base leading-relaxed"
                  variants={staggerItem}
                >
                  As a 4-star rated competitive programmer on CodeChef (1889 rating) and Specialist on Codeforces (1564 rating), 
                  I've solved 800+ algorithmic problems and achieved global rankings including rank 59 in CodeChef Starters 195. 
                  This problem-solving mindset drives my approach to software development, where I create efficient, scalable solutions.
                </motion.p>
                <motion.p 
                  className="text-sm sm:text-base leading-relaxed"
                  variants={staggerItem}
                >
                  Beyond coding, I'm a Web Wing Member at Axios (IIIT Lucknow's premier technical society), where I've trained 
                  200+ students in web development and organized hackathons to strengthen campus tech culture. My projects like 
                  TopicMaker (AI-powered lesson planner) and Absens (AI-driven missing persons detection) showcase my expertise 
                  in integrating cutting-edge AI technologies with robust full-stack architectures.
                </motion.p>
                <motion.p 
                  className="text-sm sm:text-base leading-relaxed"
                  variants={staggerItem}
                >
                  I'm the "Most Creative AI Idea Winner" at Hackofiesta v5 and actively contribute to the tech community through 
                  leadership roles in E-Cell IIIT Lucknow. Whether it's building scalable web applications, implementing AI solutions, 
                  or mentoring fellow developers, I'm passionate about leveraging technology to create meaningful impact.
                </motion.p>
              </StaggeredContainer>

              {/* View Resume Button */}
              <motion.div 
                className="pt-2 lg:pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <MagneticButton
                  href={data.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 neon-glow-hover"
                  as="a"
                >
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </motion.svg>
                  <span>View Resume</span>
                </MagneticButton>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Stats and Highlights */}
          <AnimatedSection animation="fadeInRight">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Stats Grid */}
              <StaggeredContainer className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="card p-3 sm:p-4 lg:p-6 text-center glass-morphism"
                    {...cardHover}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <motion.div 
                      className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary-600 mb-1 sm:mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.number.includes('+') || stat.number.includes('.') ? (
                        stat.number
                      ) : (
                        <AnimatedCounter end={parseInt(stat.number) || 0} duration={2} />
                      )}
                    </motion.div>
                    <motion.div 
                      className="text-xs sm:text-sm text-secondary-600 font-medium leading-tight"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </StaggeredContainer>

              {/* Highlights */}
              <StaggeredContainer className="space-y-2 sm:space-y-3 lg:space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 rounded-lg hover:bg-white transition-all duration-300 group cursor-pointer"
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <motion.div 
                      className="text-lg sm:text-xl lg:text-2xl flex-shrink-0"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {highlight.icon}
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="font-semibold text-secondary-900 mb-1 text-xs sm:text-sm lg:text-base group-hover:text-primary-600 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {highlight.title}
                      </motion.h3>
                      <motion.p 
                        className="text-secondary-600 text-xs sm:text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {highlight.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </StaggeredContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;