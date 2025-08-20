import React from 'react';

const Education = ({ data, achievements }) => {
  return (
    <section id="education" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My educational background and achievements that have shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-8">
              🎓 Education
            </h3>
            <div className="space-y-6">
              {data.map((edu) => (
                <div key={edu.id} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary-100 flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-secondary-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-secondary-600 mb-3">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        {edu.gpa && (
                          <>
                            <span>•</span>
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </>
                        )}
                      </div>
                      <p className="text-secondary-700 text-sm mb-4">
                        {edu.description}
                      </p>
                      {edu.achievements && (
                        <div>
                          <h5 className="font-medium text-secondary-900 mb-2">Achievements:</h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-secondary-700">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>{achievement}</span>
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
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-8">
              🏆 Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((cert, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-secondary-900">
                      {cert.name}
                    </h4>
                    <span className="text-sm text-secondary-600 bg-secondary-100 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-600">
                      ID: {cert.credentialId}
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-300"
                    >
                      Verify →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Journey */}
            <div className="mt-8 card p-6 bg-gradient-to-br from-primary-50 to-primary-100">
              <h4 className="font-semibold text-secondary-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                Continuous Learning
              </h4>
              <p className="text-secondary-700 text-sm mb-4">
                I believe in lifelong learning and staying updated with the latest technologies 
                and industry best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-xs font-medium">
                  Currently Learning: Next.js 14
                </span>
                <span className="px-3 py-1 bg-primary-200 text-primary-800 rounded-full text-xs font-medium">
                  Exploring: AI/ML Integration
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Development Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-8 text-center">
            Learning Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
            <div className="space-y-12">
              {[
                { year: '2019', title: 'Started Web Development', description: 'Began learning HTML, CSS, and JavaScript' },
                { year: '2020', title: 'Frontend Frameworks', description: 'Mastered React.js and Vue.js' },
                { year: '2021', title: 'Backend Development', description: 'Learned Node.js, Express, and databases' },
                { year: '2022', title: 'Cloud & DevOps', description: 'Explored AWS, Docker, and CI/CD' },
                { year: '2023', title: 'Advanced Concepts', description: 'Microservices, GraphQL, and performance optimization' },
                { year: '2024', title: 'AI Integration', description: 'Exploring AI/ML integration in web applications' }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card p-4">
                      <div className="text-primary-600 font-bold text-lg mb-1">{milestone.year}</div>
                      <h4 className="font-semibold text-secondary-900 mb-2">{milestone.title}</h4>
                      <p className="text-secondary-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;