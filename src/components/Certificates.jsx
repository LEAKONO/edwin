import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaCertificate, FaCalendarAlt, FaBuilding, FaTimes, FaExternalLinkAlt, FaDownload, FaGraduationCap, FaAward } from 'react-icons/fa';

const Certificates = () => {
  const { certificates } = portfolioData;
  const { ref, isInView } = useScrollAnimation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [filter, setFilter] = useState('all');

  // Sort certificates by importance (degree first, then by importance level)
  const sortedCertificates = [...certificates].sort((a, b) => {
    const importanceOrder = { highest: 0, high: 1, medium: 2, low: 3 };
    return importanceOrder[a.importance] - importanceOrder[b.importance];
  });

  const filteredCertificates = filter === 'all' 
    ? sortedCertificates 
    : sortedCertificates.filter(cert => cert.category === filter);

  const categories = [
    { key: 'all', label: 'All Certificates', count: certificates.length },
    { key: 'degree', label: 'Degree', count: certificates.filter(c => c.category === 'degree').length },
    { key: 'academic', label: 'Academic', count: certificates.filter(c => c.category === 'academic').length },
    { key: 'professional', label: 'Professional', count: certificates.filter(c => c.category === 'professional').length },
    { key: 'technical', label: 'Technical', count: certificates.filter(c => c.category === 'technical').length },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  const handleImageError = (certificateId) => {
    setImageErrors(prev => ({ ...prev, [certificateId]: true }));
  };

  const downloadCertificate = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'degree': return FaGraduationCap;
      case 'academic': return FaAward;
      case 'professional': return FaCertificate;
      case 'technical': return FaBuilding;
      default: return FaCertificate;
    }
  };

  const getImportanceBadge = (importance) => {
    const styles = {
      highest: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
      high: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
      medium: 'bg-gradient-to-r from-green-500 to-teal-500 text-white',
      low: 'bg-gray-500 text-white'
    };
    
    const labels = {
      highest: 'Highest',
      high: 'High',
      medium: 'Medium',
      low: 'Basic'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[importance]}`}>
        {labels[importance]}
      </span>
    );
  };

  return (
    <section id="certificates" ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Professional certifications, academic qualifications, and training accomplishments
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.key)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 ${
                filter === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                filter === category.key ? 'bg-blue-800' : 'bg-gray-200'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCertificates.map((cert, index) => {
            const CategoryIcon = getCategoryIcon(cert.category);
            const isDegree = cert.category === 'degree';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden group cursor-pointer ${
                  isDegree 
                    ? 'border-2 border-yellow-400 shadow-xl' 
                    : 'border-gray-200'
                }`}
                onClick={() => openModal(cert)}
              >
                {/* Certificate Image with Degree Highlight */}
                <div className={`h-48 overflow-hidden relative ${
                  isDegree 
                    ? 'bg-gradient-to-br from-yellow-50 to-orange-50' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50'
                }`}>
                  {!imageErrors[index] ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className={`w-full h-full flex flex-col items-center justify-center p-4 text-center ${
                      isDegree ? 'bg-yellow-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      <CategoryIcon className="text-4xl mb-2" />
                      <p className="font-semibold">{cert.title}</p>
                      <p className="text-sm opacity-80 mt-1">{cert.issuer}</p>
                    </div>
                  )}
                  
                  {/* Importance Badge */}
                  <div className="absolute top-3 right-3">
                    {getImportanceBadge(cert.importance)}
                  </div>

                  {/* Degree Ribbon */}
                  {isDegree && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-r-lg font-bold text-sm shadow-lg">
                      <FaGraduationCap className="inline mr-1" />
                      DEGREE
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-semibold flex items-center">
                      <FaExternalLinkAlt className="mr-2" />
                      Click to View
                    </span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <CategoryIcon className={`text-xl mr-3 ${
                        isDegree ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FaBuilding className="text-sm mr-2" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="text-sm mr-2" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed mt-2 line-clamp-2">
                      {cert.description}
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-4 inline-block px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer ${
                      isDegree
                        ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    View Certificate
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`flex justify-between items-center p-6 border-b sticky top-0 z-10 ${
                  selectedCertificate.category === 'degree' 
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' 
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      {getImportanceBadge(selectedCertificate.importance)}
                      {selectedCertificate.category === 'degree' && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          <FaGraduationCap className="inline mr-1" />
                          DEGREE CERTIFICATE
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 truncate">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-gray-600 truncate">{selectedCertificate.issuer}</p>
                  </div>
                  <div className="flex items-center space-x-3 ml-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => downloadCertificate(selectedCertificate)}
                      className="bg-green-600 text-white p-3 rounded-lg font-semibold flex items-center text-sm"
                      title="Download Certificate"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </motion.button>
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Certificate Image */}
                    <div className="lg:w-2/3 flex justify-center">
                      <div className="relative">
                        {!imageErrors[selectedCertificate.title] ? (
                          <img 
                            src={selectedCertificate.image} 
                            alt={selectedCertificate.title}
                            className="max-w-full h-auto rounded-lg shadow-2xl border border-gray-200"
                            onError={() => handleImageError(selectedCertificate.title)}
                          />
                        ) : (
                          <div className={`w-full h-96 flex flex-col items-center justify-center rounded-lg p-8 text-center ${
                            selectedCertificate.category === 'degree'
                              ? 'bg-yellow-600 text-white'
                              : 'bg-blue-600 text-white'
                          }`}>
                            <CategoryIcon className="text-6xl mb-4" />
                            <h4 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h4>
                            <p className="text-lg opacity-90">{selectedCertificate.issuer}</p>
                            <p className="mt-4 opacity-80">Certificate image not available</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="lg:w-1/3 space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Certificate Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Issued by:</span>
                            <span className="font-semibold text-gray-900 text-right">{selectedCertificate.issuer}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Date Issued:</span>
                            <span className="font-semibold text-gray-900">{selectedCertificate.date}</span>
                          </div>
                          {selectedCertificate.serialNumber && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 font-medium">Serial Number:</span>
                              <span className="font-semibold text-blue-600 font-mono">{selectedCertificate.serialNumber}</span>
                            </div>
                          )}
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Category:</span>
                            <span className="font-semibold text-gray-900 capitalize">{selectedCertificate.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">Description</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedCertificate.description}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center"
                          onClick={() => window.open(selectedCertificate.image, '_blank')}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Open Full Size
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Academic & Professional Credentials</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { number: `${certificates.length}`, label: 'Total Certificates' },
                { number: certificates.filter(c => c.category === 'degree').length, label: 'Degrees' },
                { number: certificates.filter(c => c.category === 'professional').length, label: 'Professional Certs' },
                { number: '5+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;