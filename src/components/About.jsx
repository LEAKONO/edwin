import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaCertificate } from 'react-icons/fa';

const About = () => {
  const { personal, qualifications, professionalTraining } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  const personalInfo = [
    { icon: FaUser, label: 'Age', value: personal.age },
    { icon: FaUser, label: 'Status', value: personal.status },
    { icon: FaMapMarkerAlt, label: 'Address', value: personal.address },
    { icon: FaPhone, label: 'Phone', value: personal.phone },
    { icon: FaEnvelope, label: 'Email', value: personal.email },
    { icon: FaGlobe, label: 'Languages', value: personal.languages.join(', ') },
  ];

  return (
    <section id="about" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Learn more about my background, qualifications, and career objectives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="text-blue-600 text-lg sm:text-xl flex-shrink-0">
                    <info.icon />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {info.label}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm truncate" title={info.value}>
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications & Objective */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Objective */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Career Objective
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {portfolioData.objective}
              </p>
            </div>

            {/* Core Qualifications */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Core Qualifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      {qualification}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaCertificate className="text-blue-600 mr-3" />
              Professional Training & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalTraining.map((training, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <p className="text-gray-700 text-sm leading-relaxed">{training}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              Passionate About Security & Innovation
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mb-4">
              Dedicated to creating safer environments through cutting-edge security solutions and data-driven approaches.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
            >
              Download Full CV
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;