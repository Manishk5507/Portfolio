// Portfolio Data - Update this file with your resume information
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Manish Kumar",
    title: "Full Stack Developer & AI Enthusiast",
    subtitle: "Computer Science Student at IIIT Lucknow",
    email: "7055ranamanish@gmail.com",
    phone: "+91 7055447591",
    location: "Lucknow, UP, India",
    website: import.meta.env.VITE_PORTFOLIO_URL || "https://manishkumar.dev",
    avatar: import.meta.env.VITE_AVATAR_URL || "https://res.cloudinary.com/dbhs1y7co/image/upload/v1755716582/me1_ihy3go.jpg",
    bio: "I'm a passionate Computer Science student at IIIT Lucknow with a CGPA of 9.21. I specialize in full-stack development, AI/ML, and competitive programming. I love building innovative solutions that solve real-world problems using cutting-edge technologies.",
    resumeUrl: import.meta.env.VITE_RESUME_URL || "https://drive.google.com/file/d/1dNRgHpTZ2RLMdXn8bJqssGYuTxP0iANZ/view"
  },

  // Social Links
  social: {
    github: "https://github.com/Manishk5507",
    linkedin: "https://www.linkedin.com/in/manish-kumar-257580291",
    twitter: "https://x.com/Manish657770",
    instagram: "https://instagram.com/_rana_manish_",
    youtube: "https://youtube.com/@Manish_iiitl",
    medium: "https://medium.com/@7055ranamanish",
  },

  // Navigation Menu
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Responsibility", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" }
  ],

  // Skills
  skills: {
    technical: [
      {
        category: "Programming Languages",
        skills: [
          { name: "JavaScript", level: 95, icon: "🟨" },
          { name: "TypeScript", level: 85, icon: "🔷" },
          { name: "Java", level: 80, icon: "☕" },
          { name: "Python", level: 85, icon: "🐍" },
          { name: "C++", level: 90, icon: "⚡" },
          { name: "SQL", level: 80, icon: "🗃️" }
        ]
      },
      {
        category: "Frontend & Frameworks",
        skills: [
          { name: "React.js", level: 90, icon: "⚛️" },
          { name: "Next.js", level: 88, icon: "▲" },
          { name: "Redux", level: 85, icon: "🔄" },
          { name: "Tailwind CSS", level: 90, icon: "💨" },
          { name: "Three.js", level: 75, icon: "🎮" },
          { name: "EJS", level: 80, icon: "📄" }
        ]
      },
      {
        category: "Backend & Database",
        skills: [
          { name: "Node.js", level: 90, icon: "🟢" },
          { name: "Express.js", level: 88, icon: "⚡" },
          { name: "Hono", level: 80, icon: "🔥" },
          { name: "SpringBoot", level: 75, icon: "🍃" },
          { name: "MongoDB", level: 85, icon: "🍃" },
          { name: "PostgreSQL", level: 85, icon: "🐘" },
          { name: "Prisma", level: 80, icon: "🔷" }
        ]
      },
      {
        category: "AI/ML & Tools",
        skills: [
          { name: "LangChain", level: 85, icon: "🔗" },
          { name: "TensorFlow", level: 80, icon: "🧠" },
          { name: "Keras", level: 75, icon: "🤖" },
          { name: "FastAPI", level: 80, icon: "⚡" },
          { name: "Docker", level: 80, icon: "🐳" },
          { name: "AWS", level: 75, icon: "☁️" },
          { name: "Git", level: 95, icon: "📝" },
          { name: "Linux/UNIX", level: 85, icon: "🐧" }
        ]
      }
    ],
    soft: [
      "Competitive Programming",
      "Problem Solving",
      "Team Leadership",
      "Web Development Training",
      "Event Organization",
      "Cross-functional Collaboration",
      "Project Management",
      "Technical Mentoring"
    ]
  },

  // Positions of Responsibility
  experience: [
    {
      id: 1,
      company: "Axios (Technical Society at IIITL)",
      position: "Web Wing Member",
      duration: "Jul 2024 - Present",
      location: "IIIT Lucknow",
      type: "Leadership Role",
      description: "Leading web development initiatives and training programs at the premier technical society of IIIT Lucknow.",
      achievements: [
        "Trained web development to more than 200 students",
        "Organized hackathons and coding(Web) events to strengthen the web culture on campus",
        "Mentored students in modern web technologies and best practices",
        "Led technical workshops on React, Node.js, and full-stack development"
      ],
      technologies: ["React", "Node.js", "JavaScript", "Web Development", "Teaching"],
      logo: "https://media.licdn.com/dms/image/v2/C510BAQFfrQ_rZAqEiQ/company-logo_200_200/company-logo_200_200/0/1630568622145?e=1758758400&v=beta&t=3w9tky38JPHM3wKuiqMhmVeoRMukNb4Mq-4mUawl3Pw"
    },
    {
      id: 2,
      company: "E-Cell, IIIT Lucknow",
      position: "Member",
      duration: "Jun 2024 - Present",
      location: "IIIT Lucknow",
      type: "Leadership Role",
      description: "Active member of the Entrepreneurship Cell, managing teams and organizing technical events.",
      achievements: [
        "Managed volunteers team and ensured teamwork and timely work delivery",
        "Coordinated with cross-functional teams to organize technical fests in college",
        "Contributed to entrepreneurship initiatives and startup culture development",
        "Organized and managed large-scale technical events and competitions"
      ],
      technologies: ["Project Management", "Team Leadership", "Event Organization"],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHC_UfK23lLig/company-logo_200_200/company-logo_200_200/0/1630640870769?e=1758758400&v=beta&t=f_j_0LhwV1fGzyCExyLEBb5VWTpDUIfm9g8NfZ5mc_w"
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Topic Maker",
      description: "Dynamic Real-Time Lesson Planner with AI-powered content generation and smart crawling capabilities.",
      longDescription: "Built an AI-driven platform that generates context-aware educational content by combining large language models with web crawling. Features real-time contextual crawling, relevance scoring, and interactive MDX content editing.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
      technologies: ["Hono", "React", "PostgreSQL", "FastAPI", "Gemini API", "crawl4ai", "LangChain"],
      features: [
        "AI-Powered Lesson Authoring with context-aware content generation",
        "Smart Crawling & Prompt Optimization using Google Gemini LLM",
        "Interactive MDX Content Editor with live preview",
        "User Authentication & File Management via Kinde Auth",
        "Real-time contextual crawling and relevance scoring",
        "Structured content refinement and optimization",
        "Secure file storage using Bun, PostgreSQL, and Drizzle ORM"
      ],
      liveUrl: "https://topicmarker-project.onrender.com/",
      githubUrl: "https://github.com/Manishk5507/TopicMarker-main",
      status: "Ongoing",
      category: "AI/ML Application",
      date: "Apr 2025"
    },
    {
      id: 2,
      title: "Absens",
      description: "AI-Powered Missing Persons Detection platform reuniting loved ones using facial recognition and age progression.",
      longDescription: "Built a platform leveraging facial recognition and AI-driven age progression to identify and help reunite missing individuals, even after years. Features secure identity management and real-time nationwide alerts.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop&crop=center",
      technologies: ["MERN", "Redux", "TensorFlow", "Keras", "FaceNet", "Dialogflow"],
      features: [
        "AI-Powered Missing Persons Detection with facial recognition",
        "AI-driven age progression for long-term missing cases",
        "Secure Identity Management with robust authentication",
        "Real-Time Nationwide Alerts for instant match notifications",
        "Sighting reports system across the country",
        "Verified user and authority access control",
        "Advanced machine learning for face matching accuracy"
      ],
      liveUrl: "https://absens-hof-frontend.vercel.app/",
      githubUrl: "https://github.com/Manishk5507/ABSENS_HOF",
      status: "Completed",
      category: "AI/ML Application",
      date: "Feb 2025"
    },
    {
      id: 3,
      title: "TourBuddy",
      description: "Explore, Discuss and Review - A comprehensive travel planning platform with AI-powered insights.",
      longDescription: "Enabled real-time group trip planning with live conversations, AI-powered destination insights, and smart search with live weather integration for informed travel decisions.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center",
      technologies: ["EJS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Gemini API"],
      features: [
        "Real-Time Group Trip Planning with live conversations",
        "Multi-user collaborative itinerary planning",
        "AI-Powered Destination Insights using large language models",
        "Smart Search with significantly faster query times",
        "Live Weather Integration for informed travel decisions",
        "Tailored, descriptive destination overviews",
        "Enhanced trip discovery and planning tools"
      ],
      liveUrl: "https://tourbuddy-d6zy.onrender.com/",
      githubUrl: "https://github.com/Manishk5507/TourBuddy",
      status: "Completed",
      category: "Web Application",
      date: "Aug 2024"
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Indian Institute of Information Technology, Lucknow",
      degree: "Bachelor of Technology - Computer Science and Business",
      duration: "Jul 2023 - Jul 2027",
      location: "Lucknow, UP",
      gpa: "9.21/10.0",
      description: "Pursuing B.Tech in Computer Science and Business with exceptional academic performance. Focused on software engineering, algorithms, data structures, and business applications.",
      achievements: [
        "Outstanding CGPA of 9.21/10.0",
        "Most Creative AI Idea Winner @Hackofiesta v5",
        "Web Wing Member at Axios (Technical Society)",
        "Member of E-Cell, IIIT Lucknow",
        "Trained 200+ students in web development"
      ],
      logo: "https://iiitl.ac.in/wp-content/uploads/2019/10/Final_Logo_IIITL-800x718.png"
    },
    {
      id: 2,
      institution: "Harpati Memorial Public School",
      degree: "CBSE Class XII & Class X",
      duration: "Mar 2019 - May 2022",
      location: "Bijnor, UP",
      description: "Completed secondary and higher secondary education with exceptional academic performance in CBSE curriculum.",
      achievements: [
        "CBSE Class XII - 95.2%",
        "CBSE Class X - 96.6%",
        "Consistent academic excellence",
        "Strong foundation in Mathematics and Science"
      ],
      logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=60&h=60&fit=crop&crop=center"
    }
  ],

  // Achievements
  achievements: [
    {
      name: "Most Creative AI Idea Winner",
      issuer: "Hackofiesta v5",
      date: "2024",
      credentialId: "HACK-AI-2024",
      url: "#"
    },
    {
      name: "Special Mention - Equinox World MUN 2023",
      issuer: "Equinox World MUN",
      date: "2024",
      credentialId: "EWMUN-2024",
      url: "https://drive.google.com/file/d/1is1lCh1b3PBavu1eDnxnJ0rq89kIu2-b/view?usp=sharing"
    },
    {
      name: "4-star Rated - CodeChef",
      issuer: "CodeChef",
      date: "2025",
      credentialId: "manishk5507",
      url: "https://www.codechef.com/users/manishk5507"
    },
    {
      name: "Specialist - Codeforces",
      issuer: "Codeforces",
      date: "2025",
      credentialId: "_.Manish._",
      url: "https://codeforces.com/profile/_.Manish._"
    },
    {
      name: "Knight - LeetCode",
      issuer: "LeetCode",
      date: "2025",
      credentialId: "Manishk5507",
      url: "https://leetcode.com/Manishk5507"
    }
  ],

  // Competitive Programming Stats
  competitiveProgramming: {
    platforms: [
      {
        name: "CodeChef",
        rating: 1889,
        maxRating: 1889,
        rank: "4-star",
        profile: "manishk5507",
        achievements: ["Global rank 59 in Codechef Starters 195"]
      },
      {
        name: "Codeforces",
        rating: 1564,
        maxRating: 1564,
        rank: "Specialist",
        profile: "_.Manish._",
        achievements: ["Global rank 1201 in Codeforces Round 1003 (Div. 4) among 25000+ participants"]
      },
      {
        name: "LeetCode",
        rating: 1845,
        maxRating: 1845,
        rank: "Knight",
        profile: "Manishk5507",
        achievements: ["Solved 800+ questions across all platforms"]
      }
    ],
    totalProblems: "800+",
    highlights: [
      "Global rank 59 in Codechef Starters 195",
      "Global rank 1201 in Codeforces Round 1003 (Div. 4)",
      "Consistent performance across multiple platforms"
    ]
  },



  // Blog Posts (if you have a blog)
  blog: [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for building large-scale React applications that are maintainable and performant.",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      url: "https://blog.example.com/scalable-react-apps",
      tags: ["React", "JavaScript", "Performance"]
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore modern CSS features and techniques that can significantly improve user experience.",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      url: "https://blog.example.com/modern-css-techniques",
      tags: ["CSS", "UX", "Web Design"]
    }
  ],

  // Contact Information
  contact: {
    title: "Let's Work Together",
    subtitle: "I'm always interested in new opportunities and exciting projects.",
    email: "7055ranamanish@gmail.com",
    phone: "+91 7055447591",
    address: "Lucknow, UP, India",
    availability: "Available for internships and projects",
    responseTime: "Usually responds within 24 hours"
  }
};

export default portfolioData;