import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Image - Top on mobile, Right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end w-full order-1"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 animate-glow">
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden border-4 border-white">
                    <img 
                      src="/images/edu.jpg" 
                      alt="Edwin Ochieng Opiyo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold hidden"
                    >
                      EO
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Bottom on mobile, Left on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left w-full order-2"
          >
            {/* Full Name in one line - Less bold */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                {personal.name.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl text-blue-400 mb-4 font-light"
            >
              <span className="typewriter-text">{personal.title}</span>
            </motion.div>

            {/* Objective Summary */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Dedicated Criminologist & Security Specialist with expertise in data analytics, 
              security investigations, and research writing. Passionate about creating safer 
              environments through innovative security solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 justify-center text-sm sm:text-base"
              >
                <FaEnvelope />
                Get In Touch
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-gray-900 transition-all duration-300 justify-center text-sm sm:text-base"
                onClick={() => window.print()}
              >
                <FaDownload />
                Download CV
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'Years Exp', value: '5+' },
                { label: 'Projects', value: '50+' },
                { label: 'Research', value: '25+' },
                { label: 'Cases', value: '100+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <div className="text-base sm:text-lg font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white hidden sm:block"
      >
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;