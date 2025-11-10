import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const { education } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education Background
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Academic qualifications and continuous learning journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-6 flex flex-col items-center mr-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10"></div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl shadow-lg p-4 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 flex-1"
                  >
                    <div className="flex items-center space-x-2 text-blue-600 mb-2">
                      <FaCalendarAlt className="text-sm" />
                      <span className="font-semibold text-sm">{edu.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {edu.course}
                    </h3>
                    <p className="text-gray-600 font-semibold mb-2 text-sm">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-2 text-green-600">
                      <FaAward className="text-sm" />
                      <span className="font-semibold text-sm">{edu.grade}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 rounded-2xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2 text-blue-600 mb-2">
                        <FaCalendarAlt />
                        <span className="font-semibold">{edu.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.course}
                      </h3>
                      <p className="text-gray-600 font-semibold mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-green-600">
                        <FaAward />
                        <span className="font-semibold">{edu.grade}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative w-2/12 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
                    ></motion.div>
                  </div>

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Degree Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8 md:mt-12 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaGraduationCap className="text-blue-600 mr-3" />
              Bachelor of Arts in Criminology & Security Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Second Class Honours (Upper Division)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Member of Integrity, Cohesion and Security Club
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Security Detail during University Elections
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Specialized Courses</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Security Management & Investigation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Criminal Justice System
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Emergency & Risk Management
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;