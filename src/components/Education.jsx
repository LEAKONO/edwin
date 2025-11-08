import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const { education } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education Background
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in criminology and data analytics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

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

          {/* Additional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12"
          >
            <FaGraduationCap className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 mb-4">
              Committed to ongoing professional development in data science, security studies, and educational methodologies
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold cursor-pointer"
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