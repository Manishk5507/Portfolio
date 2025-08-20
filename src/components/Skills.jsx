import React, { useState } from 'react';

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const SkillBar = ({ skill }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-secondary-900">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-primary-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            I'm passionate about learning new technologies and constantly improving my skills. 
            Here's what I'm currently working with.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6">
                Technical Skills
              </h3>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {data.technical.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === index
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {data.technical[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <SkillBar skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-display font-semibold text-secondary-900 mb-6">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {data.soft.map((skill, index) => (
                <div
                  key={index}
                  className="card p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="font-medium text-secondary-900">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 card p-6 bg-gradient-to-br from-primary-50 to-primary-100">
              <h4 className="font-semibold text-secondary-900 mb-3">
                🎯 Always Learning
              </h4>
              <p className="text-secondary-700 text-sm">
                I'm constantly exploring new technologies and methodologies to stay 
                current with industry trends and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-primary-100 mb-6">
              Let's combine these skills to create something extraordinary for your next project.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;