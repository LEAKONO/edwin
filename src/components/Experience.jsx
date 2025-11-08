import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaCogs } from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  const experiencePoints = [
    {
      icon: FaChalkboardTeacher,
      title: "Lead Educator",
      description: experience[0]
    },
    {
      icon: FaCogs,
      title: "Strategic Planning",
      description: experience[1]
    },
    {
      icon: FaLightbulb,
      title: "Innovative Activities",
      description: experience[2]
    },
    {
      icon: FaUsers,
      title: "Collaboration & Critical Thinking",
      description: experience[3]
    }
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
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Leveraging expertise in education and security to drive exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiencePoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-blue-400 text-3xl mb-4 group-hover:text-blue-300"
              >
                <item.icon />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Timeline for Career Progression */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Career Highlights</h3>
            <div className="space-y-6">
              {[
                "Successfully led multiple academic teams to achieve target results",
                "Developed and implemented innovative teaching methodologies",
                "Integrated technology to enhance learning experiences",
                "Mentored students in critical thinking and analytical skills"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
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