import React, { useState } from 'react';

const Experience = ({ data }) => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container-custom px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Positions of <span className="text-gradient">Responsibility</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My leadership roles and responsibilities in various organizations and technical societies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Responsibility List */}
          <div className="space-y-4">
            {data.map((exp, index) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(index)}
                className={`cursor-pointer p-4 sm:p-6 rounded-xl transition-all duration-300 ${
                  selectedExperience === index
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-primary-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate ${
                      selectedExperience === index ? 'text-white' : 'text-secondary-900'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className={`text-sm truncate ${
                      selectedExperience === index ? 'text-primary-100' : 'text-secondary-600'
                    }`}>
                      {exp.position}
                    </p>
                    <p className={`text-xs ${
                      selectedExperience === index ? 'text-primary-200' : 'text-secondary-500'
                    }`}>
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsibility Details */}
          <div className="lg:col-span-2">
            <div className="card p-4 sm:p-6 lg:p-8 h-full">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary-100">
                      <img
                        src={data[selectedExperience].logo}
                        alt={data[selectedExperience].company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-secondary-900">
                        {data[selectedExperience].position}
                      </h3>
                      <p className="text-primary-600 font-semibold">
                        {data[selectedExperience].company}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-secondary-600 mt-1">
                        <span>{data[selectedExperience].duration}</span>
                        <span>•</span>
                        <span>{data[selectedExperience].location}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                          {data[selectedExperience].type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-700 leading-relaxed">
                  {data[selectedExperience].description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {data[selectedExperience].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {data[selectedExperience].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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