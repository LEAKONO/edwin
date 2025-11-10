import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const { personal, references } = portfolioData;
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: personal.address,
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaFacebook, href: '#', label: 'Facebook' }
  ];

  return (
    <section id="contact" ref={ref} className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ready to discuss security solutions or potential collaborations? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 8, color: '#60a5fa' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-3 md:space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 group p-2 md:p-0"
                  >
                    <div className="text-blue-400 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <info.icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base">{info.label}</div>
                      <div className="text-sm md:text-base truncate">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">References</h3>
              <div className="space-y-4 md:space-y-6">
                {references.slice(0, 2).map((ref, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="border-l-4 border-blue-400 pl-3 md:pl-4"
                  >
                    <h4 className="font-bold text-base md:text-lg leading-tight">{ref.name}</h4>
                    <p className="text-blue-400 text-sm md:text-base">{ref.position}</p>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">{ref.organization}</p>
                    <p className="text-gray-300 text-xs md:text-sm break-all">{ref.email}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Follow Me</h3>
              <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 flex-shrink-0"
                    aria-label={social.label}
                  >
                    <social.icon className="text-sm md:text-base" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="sm:col-span-2 md:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="sm:col-span-2 md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white transition-colors duration-300 resize-none text-sm md:text-base"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;