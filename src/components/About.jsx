import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const About = () => {
  const { personal, qualifications } = portfolioData;
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
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-blue-600 text-xl">
                    <info.icon />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{info.label}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Qualifications & Objective */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Objective */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Objective</h3>
              <p className="text-gray-600 leading-relaxed">
                {portfolioData.objective}
              </p>
            </div>

            {/* Core Qualifications */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{qualification}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;