import React, { useState } from 'react';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(data.map(project => project.category))];
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.category === filter);

  const ProjectCard = ({ project }) => (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-secondary-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors duration-300"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-secondary-900 transition-colors duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
          project.status === 'Completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-display font-semibold text-secondary-900">
            {project.title}
          </h3>
          <span className="text-xs text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-secondary-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <button
          onClick={() => setSelectedProject(project)}
          className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
        >
          Learn More →
        </button>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-2">
                {project.title}
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-primary-600 font-medium">{project.category}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">About This Project</h3>
              <p className="text-secondary-700 leading-relaxed mb-6">
                {project.longDescription}
              </p>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            amazing digital experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              No projects found
            </h3>
            <p className="text-secondary-600">
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-secondary-900 to-secondary-800 text-white">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-secondary-200 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;