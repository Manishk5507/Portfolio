import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedProgressBar, 
  StaggeredContainer,
  AnimatedCounter
} from './AnimatedComponents';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  cardHover,
  buttonHover
} from '../utils/animations';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const SkillBar = ({ skill, index }) => (
    <AnimatedProgressBar
      percentage={skill.level}
      label={skill.name}
      icon={skill.icon}
      delay={index * 0.1}
    />
  );

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom px-3 sm:px-4 lg:px-8">
        <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16" animation="fadeInUp">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm passionate about learning new technologies and constantly improving my skills. 
            Here's what I'm currently working with.
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Technical Skills */}
          <AnimatedSection className="lg:col-span-2" animation="fadeInLeft">
            <div className="mb-6 sm:mb-8">
              <motion.h3 
                className="text-xl sm:text-2xl font-display font-semibold text-secondary-900 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Technical Skills
              </motion.h3>
              
              {/* Category Tabs */}
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {data.technical.map((category, index) => (
                  <motion.button
                    key={index}
                    variants={staggerItem}
                    onClick={() => setActiveCategory(index)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                      activeCategory === index
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Skills Grid */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  className="grid sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {data.technical[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="card p-3 sm:p-4 lg:p-6"
                      {...cardHover}
                    >
                      <SkillBar skill={skill} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Soft Skills */}
          <AnimatedSection animation="fadeInRight">
            <motion.h3 
              className="text-xl sm:text-2xl font-display font-semibold text-secondary-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Soft Skills
            </motion.h3>
            
            <StaggeredContainer className="space-y-2 sm:space-y-3 lg:space-y-4">
              {data.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="card p-3 sm:p-4"
                  {...cardHover}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <motion.div 
                      className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    />
                    <span className="font-medium text-secondary-900 text-sm sm:text-base">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </StaggeredContainer>

            {/* Additional Info */}
            <motion.div 
              className="mt-6 sm:mt-8 card p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-primary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold text-secondary-900 mb-2 sm:mb-3 text-sm sm:text-base">
                🎯 Always Learning
              </h4>
              <p className="text-secondary-700 text-xs sm:text-sm">
                I'm constantly exploring new technologies and methodologies to stay 
                current with industry trends and best practices.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Skills Summary */}
        <AnimatedSection className="mt-8 sm:mt-12 lg:mt-16 text-center" animation="scaleIn">
          <motion.div 
            className="card p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-lg sm:text-xl lg:text-2xl font-display font-semibold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Build Something Amazing?
            </motion.h3>
            <motion.p 
              className="text-primary-100 mb-4 sm:mb-6 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's combine these skills to create something extraordinary for your next project.
            </motion.p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg hover:bg-primary-50 transition-colors duration-300 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;