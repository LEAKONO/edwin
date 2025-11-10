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
            Continuous learning and professional development in criminology and data analytics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline - Mobile: Vertical, Desktop: Alternating */}
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {/* Mobile: Simple vertical timeline */}
            <div className="md:hidden space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex"
                >
                  {/* Timeline dot for mobile */}
                  <div className="flex-shrink-0 w-6 flex flex-col items-center mr-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10"></div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                    )}
                  </div>

                  {/* Content for mobile */}
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

            {/* Desktop: Alternating timeline */}
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
                  {/* Content */}
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

                  {/* Timeline dot */}
                  <div className="relative w-2/12 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"
                    ></motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center mt-8 md:mt-12"
          >
            <FaGraduationCap className="text-3xl md:text-4xl mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Continuous Learning</h3>
            <p className="text-blue-100 mb-4 text-sm md:text-base leading-relaxed">
              Committed to ongoing professional development in data science, security studies, and educational methodologies
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-5 py-2 md:px-6 md:py-2 rounded-full font-semibold cursor-pointer text-sm md:text-base"
            >
              View Certificates
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;