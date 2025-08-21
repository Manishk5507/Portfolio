import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      date: "August 2023",
      title: "Started B.Tech Journey",
      subtitle: "IIIT Lucknow Admission",
      description: "Got admission to Indian Institute of Information Technology, Lucknow for B.Tech in Computer Science and Business. Beginning of an exciting academic journey with a focus on technology and innovation.",
      icon: "🎓",
      category: "Education",
      achievements: ["Secured admission at prestigious IIIT Lucknow", "Started Computer Science and Business program"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      date: "September 2023 - May 2024",
      title: "Web Development Discovery",
      subtitle: "First Year - MERN Stack Mastery",
      description: "Developed deep interest in web development during first year. Started learning and mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) through hands-on projects and self-study.",
      icon: "💻",
      category: "Technical Growth",
      achievements: [
        "Learned MERN stack fundamentals",
        "Built first web applications",
        "Developed problem-solving mindset",
        "Established strong coding foundation"
      ],
      color: "bg-green-500"
    },
    {
      id: 3,
      date: "December 2023 - March 2024",
      title: "Project Development Phase",
      subtitle: "TourBuddy & Absens Creation",
      description: "Built comprehensive end-to-end projects showcasing full-stack development skills. Created TourBuddy, a real-time trip planning platform, and Absens, an AI-powered missing persons detection system.",
      icon: "🚀",
      category: "Projects",
      achievements: [
        "TourBuddy: Real-time group trip planning with AI insights",
        "Absens: AI-powered missing persons detection platform",
        "Implemented real-time features with Socket.IO",
        "Integrated AI/ML technologies for enhanced functionality"
      ],
      color: "bg-purple-500"
    },
    {
      id: 4,
      date: "January 2024 - June 2024",
      title: "AI/ML Technology Exploration",
      subtitle: "LLMs & RAG Applications",
      description: "Expanded technical expertise into artificial intelligence and machine learning. Learned to work with Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) applications, and modern AI frameworks.",
      icon: "🤖",
      category: "AI/ML",
      achievements: [
        "Mastered LLM integration and prompt engineering",
        "Built RAG applications for intelligent content generation",
        "Learned LangChain, TensorFlow, and Keras",
        "Implemented AI-driven features in projects"
      ],
      color: "bg-indigo-500"
    },
    {
      id: 5,
      date: "July 2024",
      title: "Leadership Role Achievement",
      subtitle: "Axios Web Wing Member",
      description: "Selected as Web Wing Member of Axios, the premier technical society at IIIT Lucknow. Started leading web development initiatives and training programs for fellow students.",
      icon: "👥",
      category: "Leadership",
      achievements: [
        "Selected for prestigious technical society role",
        "Trained 200+ students in web development",
        "Organized hackathons and coding events",
        "Led technical workshops on React and Node.js"
      ],
      color: "bg-orange-500"
    },
    {
      id: 6,
      date: "August 2024 - Present",
      title: "Competitive Programming Journey",
      subtitle: "CodeChef 4-Star & Codeforces Specialist",
      description: "Developed strong interest in competitive programming during second year. Practiced extensively on various platforms, solving complex algorithmic problems and participating in contests.",
      icon: "🏆",
      category: "Competitive Programming",
      achievements: [
        "Solved 700+ problems across platforms",
        "Achieved 4-star rating on CodeChef (1889 rating)",
        "Earned Specialist tag on Codeforces (1564 rating)",
        "Global rank 59 in CodeChef Starters 195",
        "Global rank 1201 in Codeforces Round 1003 (Div. 4)"
      ],
      color: "bg-red-500"
    },
    {
      id: 7,
      date: "June 2024 - Present",
      title: "Entrepreneurship & Event Management",
      subtitle: "E-Cell IIIT Lucknow Member",
      description: "Became an active member of the Entrepreneurship Cell at IIIT Lucknow. Contributed to organizing various technical events during college fests and managed cross-functional teams.",
      icon: "🎯",
      category: "Leadership",
      achievements: [
        "Managed volunteer teams effectively",
        "Coordinated cross-functional teams for technical fests",
        "Contributed to entrepreneurship initiatives",
        "Organized large-scale technical events and competitions"
      ],
      color: "bg-teal-500"
    },
    {
      id: 8,
      date: "April 2025",
      title: "Advanced AI Project",
      subtitle: "TopicMaker - AI Lesson Planner",
      description: "Created TopicMaker, an innovative AI-powered lesson planning platform that combines web crawling with Gemini LLM to generate contextual educational content, solving the time-consuming problem of manual lesson plan creation.",
      icon: "🎯",
      category: "Innovation",
      achievements: [
        "AI-powered content generation with context awareness",
        "Smart crawling & prompt optimization using Gemini LLM",
        "Interactive MDX content editor with live preview",
        "Real-time contextual crawling and relevance scoring",
        "Integrated multiple cutting-edge technologies"
      ],
      color: "bg-pink-500"
    }
  ];

  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-4 sm:mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-2">
            From a curious first-year student to a skilled developer and competitive programmer - 
            here's the story of my growth, achievements, and continuous learning journey at IIIT Lucknow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative px-1 sm:px-2 md:px-0">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-7 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>

          {/* Timeline Items */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 sm:left-7 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.color} rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 sm:ml-18 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Date Badge */}
                    <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${item.color} text-white`}>
                      {item.date}
                    </div>

                    {/* Category */}
                    <div className="text-xs sm:text-sm text-primary-600 font-medium mb-2">
                      {item.category}
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-secondary-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary-600 mb-3 leading-tight">
                      {item.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-secondary-600 mb-4 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-secondary-800 text-sm sm:text-base">Key Achievements:</h5>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm sm:text-base text-secondary-600">
                            <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="card p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-primary-50 to-secondary-50 mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-secondary-900 mb-6 sm:mb-8">
              Current Status
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">9.2</div>
                <div className="text-secondary-600 text-sm sm:text-base mt-1">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">3rd Year</div>
                <div className="text-secondary-600 text-sm sm:text-base mt-1">B.Tech CSE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">Active</div>
                <div className="text-secondary-600 text-sm sm:text-base mt-1">Learning & Building</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;