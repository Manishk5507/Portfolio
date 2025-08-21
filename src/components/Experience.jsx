import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedSection, 
  StaggeredContainer,
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

const Experience = ({ data }) => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="section-padding bg-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="absolute top-20 left-10">
          <div className="w-32 h-32 bg-primary-100 rounded-full opacity-20" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-32 right-16">
          <div className="w-24 h-24 bg-primary-200 rounded-full opacity-30" />
        </FloatingElement>
        <motion.div
          className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full opacity-10"
          {...pulseAnimation}
        />
      </div>

      <div className="container-custom px-3 sm:px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16" animation="fadeInUp">
          <motion.h2 
            className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Positions of <span className="text-gradient gradient-text">Responsibility</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My leadership roles and responsibilities in various organizations and technical societies.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Responsibility List */}
          <AnimatedSection animation="fadeInLeft">
            <StaggeredContainer className="space-y-4">
              {data.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  onClick={() => setSelectedExperience(index)}
                  className={`cursor-pointer p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                    selectedExperience === index
                      ? 'bg-primary-600 text-white shadow-lg neon-glow'
                      : 'bg-white hover:bg-primary-50 hover:shadow-md'
                  }`}
                  whileHover={{ 
                    scale: selectedExperience === index ? 1.05 : 1.02,
                    y: -5
                  }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3 
                        className={`font-semibold truncate ${
                          selectedExperience === index ? 'text-white' : 'text-secondary-900'
                        }`}
                        layout
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.p 
                        className={`text-sm truncate ${
                          selectedExperience === index ? 'text-primary-100' : 'text-secondary-600'
                        }`}
                        layout
                      >
                        {exp.position}
                      </motion.p>
                      <motion.p 
                        className={`text-xs ${
                          selectedExperience === index ? 'text-primary-200' : 'text-secondary-500'
                        }`}
                        layout
                      >
                        {exp.duration}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggeredContainer>
          </AnimatedSection>

          {/* Responsibility Details */}
          <AnimatedSection className="lg:col-span-2" animation="fadeInRight">
            <motion.div 
              className="card p-4 sm:p-6 lg:p-8 h-full"
              layout
              key={selectedExperience}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedExperience}
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-16 h-16 rounded-xl overflow-hidden bg-secondary-100"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={data[selectedExperience].logo}
                          alt={data[selectedExperience].company}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-2xl font-display font-bold text-secondary-900"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {data[selectedExperience].position}
                        </motion.h3>
                        <motion.p 
                          className="text-primary-600 font-semibold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {data[selectedExperience].company}
                        </motion.p>
                        <motion.div 
                          className="flex items-center space-x-4 text-sm text-secondary-600 mt-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <span>{data[selectedExperience].duration}</span>
                          <span>•</span>
                          <span>{data[selectedExperience].location}</span>
                          <span>•</span>
                          <motion.span 
                            className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {data[selectedExperience].type}
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-secondary-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {data[selectedExperience].description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                    <motion.ul 
                      className="space-y-2"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {data[selectedExperience].achievements.map((achievement, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start space-x-3"
                          variants={staggerItem}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          />
                          <span className="text-secondary-700">{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4 className="font-semibold text-secondary-900 mb-3">Technologies Used:</h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {data[selectedExperience].technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={staggerItem}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#3b82f6",
                            color: "#ffffff"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Timeline View for Mobile */}
        <div className="lg:hidden mt-12 sm:mt-16">
          <div className="relative px-2 sm:px-0">
            <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            <div className="space-y-6 sm:space-y-8">
              {data.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-4 sm:space-x-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ml-0.5 sm:ml-1">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="card p-3 sm:p-4 md:p-6 flex-1 min-w-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-secondary-900 text-sm sm:text-base leading-tight">{exp.position}</h3>
                        <p className="text-primary-600 font-medium text-sm sm:text-base">{exp.company}</p>
                        <p className="text-xs sm:text-sm text-secondary-600">{exp.duration}</p>
                      </div>
                    </div>
                    <p className="text-secondary-700 text-xs sm:text-sm mb-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs font-medium">
                          +{exp.technologies.length - 3} more
                        </span>
                      )}
                    </div>
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

export default Experience;