import React from 'react';

const Education = ({ data, achievements }) => {
  return (
    <section id="education" className="section-padding bg-secondary-50">
      <div className="container-custom px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My educational background and achievements that have shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-secondary-900 mb-6 sm:mb-8">
              🎓 Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {data.map((edu) => (
                <div key={edu.id} className="card p-3 sm:p-4 lg:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-secondary-100 flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-1 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-secondary-600 mb-3">
                        <span>{edu.duration}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.location}</span>
                        {edu.gpa && (
                          <>
                            <span className="hidden sm:inline">•</span>
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </>
                        )}
                      </div>
                      <p className="text-secondary-700 text-xs sm:text-sm mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      {edu.achievements && (
                        <div>
                          <h5 className="font-medium text-secondary-900 mb-2 text-sm">Achievements:</h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-secondary-700">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-secondary-900 mb-6 sm:mb-8">
              🏆 Achievements
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((cert, index) => (
                <div key={index} className="card p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <h4 className="font-semibold text-secondary-900 text-sm sm:text-base leading-tight flex-1">
                      {cert.name}
                    </h4>
                    <span className="text-xs sm:text-sm text-secondary-600 bg-secondary-100 px-2 sm:px-3 py-1 rounded-full flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm text-secondary-600 truncate">
                      ID: {cert.credentialId}
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-xs sm:text-sm font-medium transition-colors duration-300 flex-shrink-0"
                    >
                      Verify →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Journey */}
            <div className="mt-6 sm:mt-8 card p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-primary-50 to-primary-100">
              <h4 className="font-semibold text-secondary-900 mb-3 flex items-center text-sm sm:text-base">
                <span className="text-xl sm:text-2xl mr-2">📚</span>
                Continuous Learning
              </h4>
              <p className="text-secondary-700 text-xs sm:text-sm mb-4 leading-relaxed">
                I believe in lifelong learning and staying updated with the latest technologies 
                and industry best practices.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2 sm:px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-xs font-medium">
                  Currently Learning: Next.js 14
                </span>
                <span className="px-2 sm:px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-xs font-medium">
                  Exploring: AI/ML Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;