import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  FaChalkboardTeacher, 
  FaUsers, 
  FaLightbulb, 
  FaCogs, 
  FaSearch,
  FaShieldAlt,
  FaUserTie,
  FaChartLine,
  FaFileAlt
} from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  const experiencePoints = [
    {
      icon: FaShieldAlt,
      title: "Security Coordinator",
      description: experience[1], // Black & Blue Limited
      color: "text-blue-400"
    },
    {
      icon: FaUserTie,
      title: "Deputy Presiding Officer",
      description: experience[0], // IEBC
      color: "text-green-400"
    },
    {
      icon: FaChalkboardTeacher,
      title: "Tuition Teacher",
      description: experience[2], // Eastleigh Tuition Center
      color: "text-yellow-400"
    },
    {
      icon: FaSearch,
      title: "Freelance Academic Research Consultant",
      description: experience[5], // Academic Research Assistant
      color: "text-purple-400"
    },
    {
      icon: FaChartLine,
      title: "Security Supervisor",
      description: experience[3], // Man Security Limited
      color: "text-red-400"
    },
    {
      icon: FaFileAlt,
      title: "Security Officer",
      description: experience[4], // Sekura International Limited
      color: "text-indigo-400"
    }
  ];

  const freelanceHighlights = [
    "Providing expert research consultation and data analysis services",
    "Assisting university students and professionals with academic writing",
    "Specializing in criminology, security studies, and social sciences research",
    "Utilizing data analytics tools (SPSS, Python, R, Stata) for research",
    "Offering comprehensive academic support across various disciplines"
  ];

  const allHighlights = [
    "Successfully coordinated security operations for major events",
    "Managed administrative and electoral processes as Deputy Presiding Officer",
    "Developed innovative teaching methodologies for diverse learners",
    "Provided freelance academic research consultation since 2020",
    "Supervised security teams in high-risk environments",
    "Implemented data analytics in security investigations"
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive experience in security management, academic research, and administrative leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiencePoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 group relative overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`${item.color} text-3xl mb-4 group-hover:${item.color.replace('400', '300')}`}
              >
                <item.icon />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Special highlight for freelance role */}
              {item.title === "Freelance Academic Research Consultant" && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="text-sm text-purple-300 font-semibold">
                    ⭐ 2020 - Present
                  </span>
                </div>
              )}
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"
                   style={{
                     background: `linear-gradient(45deg, ${item.color.replace('text-', '').replace('-400', '-600')}, purple)`
                   }}>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                   style={{
                     background: `linear-gradient(45deg, ${item.color.replace('text-', '').replace('-400', '-600')}, purple)`
                   }}>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Freelance Focus Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-800 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-center mb-6">
              <FaSearch className="text-purple-400 text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-center">Freelance Academic Research Consultation</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {freelanceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">
                Utilizing skills in: <span className="text-purple-300">Data Analytics</span>, 
                <span className="text-blue-300 ml-2">SPSS/Python/R</span>, 
                <span className="text-green-300 ml-2">Academic Writing</span>, 
                <span className="text-yellow-300 ml-2">Research Methodology</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline for Career Progression */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Career Milestones</h3>
            <div className="space-y-6">
              {allHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    highlight.includes("freelance") || highlight.includes("research") 
                      ? "bg-purple-400" 
                      : highlight.includes("data analytics")
                      ? "bg-blue-400"
                      : "bg-gray-400"
                  }`}></div>
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;