import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const { personal, certificates } = portfolioData;

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

  // CV Download URL - Direct download link
  const cvDownloadUrl = "https://drive.google.com/file/d/1IvLqF1JduLc746Ca9QH9hYTZAFySuCys/view?usp=sharing";

  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvDownloadUrl;
    link.setAttribute('download', 'Edwin_Ochieng_Opiyo_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden px-4 sm:px-6">
      {/* Background Elements */}
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-24 items-center min-h-[70vh]">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left w-full order-2 lg:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-3 sm:mb-4"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-1">
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

            <motion.div
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-blue-400 mb-3 sm:mb-4 font-light leading-tight"
            >
              <span className="typewriter-text break-words hyphens-auto">
                Criminologist &<br className="sm:hidden" /> Security Specialist
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Dedicated Criminologist & Security Specialist with expertise in data analytics, 
              security investigations, and research writing. Passionate about creating safer 
              environments through innovative security solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300 justify-center text-xs sm:text-sm md:text-base"
              >
                <FaEnvelope className="text-xs sm:text-sm" />
                Get In Touch
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-gray-900 transition-all duration-300 justify-center text-xs sm:text-sm md:text-base"
                onClick={handleDownloadCV}
              >
                <FaDownload className="text-xs sm:text-sm" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0"
            >
              {[
                { label: 'Years Exp', value: '5+' },
                { label: 'Certificates', value: `${certificates.length}+` },
                { label: 'Projects', value: '50+' },
                { label: 'Research', value: '25+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <div className="text-sm sm:text-base md:text-lg font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end w-full order-1 lg:order-2 mb-4 sm:mb-0"
          >
            <div className="relative lg:mr-8 xl:mr-12 2xl:mr-16">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 animate-glow">
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
                      className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hidden"
                    >
                      EO
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around the image */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full opacity-80"
                />
              </motion.div>
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
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

      {/* Download CV Tooltip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-24 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-40 hidden lg:block"
      >
        <div className="text-sm font-semibold">Download My CV</div>
        <div className="text-xs opacity-80">Get my complete profile</div>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-blue-600 transform rotate-45"></div>
      </motion.div>
    </section>
  );
};

export default Hero;