import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedSection, 
  AnimatedCard, 
  StaggeredContainer,
  MagneticButton,
  FloatingElement
} from './AnimatedComponents';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  cardHover,
  buttonHover,
  scaleIn
} from '../utils/animations';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(data.map(project => project.category))];
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => (
    <motion.div 
      className="card overflow-hidden group cursor-pointer"
      variants={staggerItem}
      {...cardHover}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => setSelectedProject(project)}
      layout
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
            <motion.div 
              className="flex space-x-1.5 sm:space-x-2"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.liveUrl && (
                <MagneticButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-secondary-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  as="a"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo
                </MagneticButton>
              )}
              {project.githubUrl && (
                <MagneticButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-white hover:text-secondary-900 transition-colors duration-300"
                  as="a"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </MagneticButton>
              )}
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {project.status}
        </motion.div>
      </div>
      
      <motion.div 
        className="p-3 sm:p-4 lg:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <motion.h3 
            className="text-base sm:text-lg lg:text-xl font-display font-semibold text-secondary-900 truncate"
            whileHover={{ color: "#2563eb" }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <motion.span 
            className="text-xs text-primary-600 bg-primary-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ml-2 flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {project.category}
          </motion.span>
        </div>
        
        <motion.p 
          className="text-secondary-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              variants={staggerItem}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary-100 text-secondary-700 rounded text-xs sm:text-sm"
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
          {project.technologies.length > 3 && (
            <motion.span 
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary-100 text-secondary-700 rounded text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              +{project.technologies.length - 3}
            </motion.span>
          )}
        </motion.div>
        
        <motion.button
          onClick={() => setSelectedProject(project)}
          className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 text-sm sm:text-base group"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn More 
          <motion.span
            className="inline-block ml-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <motion.div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-t-xl sm:rounded-t-2xl"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            onClick={onClose}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-secondary-900 mb-2">
                {project.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                <span className="text-primary-600 font-medium text-sm sm:text-base">{project.category}</span>
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm sm:text-base py-2 sm:py-2.5 px-4 sm:px-6"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center text-sm sm:text-base py-2 sm:py-2.5 px-4 sm:px-6"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-3 sm:mb-4">About This Project</h3>
              <p className="text-secondary-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {project.longDescription}
              </p>
              
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-3 sm:mb-4">Key Features</h3>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement className="absolute top-32 right-10">
          <div className="w-24 h-24 bg-primary-100 rounded-full opacity-20" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-16">
          <div className="w-20 h-20 bg-primary-200 rounded-full opacity-30" />
        </FloatingElement>
      </div>

      <div className="container-custom px-3 sm:px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16" animation="fadeInUp">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured <span className="text-gradient gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of my recent projects that showcase my skills and passion for creating 
            amazing digital experiences.
          </motion.p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <StaggeredContainer className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={staggerItem}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg neon-glow'
                  : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </StaggeredContainer>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-secondary-900 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              No projects found
            </motion.h3>
            <motion.p 
              className="text-secondary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Try selecting a different category to see more projects.
            </motion.p>
          </motion.div>
        )}

        {/* CTA Section */}
        <AnimatedSection className="mt-8 sm:mt-12 lg:mt-16 text-center" animation="scaleIn">
          <motion.div 
            className="card p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white"
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
              Have a Project in Mind?
            </motion.h3>
            <motion.p 
              className="text-secondary-200 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </motion.p>
            <MagneticButton
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 text-white font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base neon-glow-hover"
            >
              Let's Talk
            </MagneticButton>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;