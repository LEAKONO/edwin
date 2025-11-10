import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { skills, hobbies } = portfolioData;
  const { ref, isInView } = useScrollAnimation();

  const SkillBar = ({ skill, level, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-700">{skill}</span>
        <span className="text-blue-600 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );

  const SkillChip = ({ skill, index, category }) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold m-1 ${
        category === 'professional' 
          ? 'bg-blue-100 text-blue-800 border border-blue-300'
          : category === 'personal'
          ? 'bg-green-100 text-green-800 border border-green-300'
          : 'bg-purple-100 text-purple-800 border border-purple-300'
      }`}
    >
      {skill}
    </motion.span>
  );

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Proficiency</h3>
            {[
              { skill: 'Data Analytics', level: 90 },
              { skill: 'Security Investigations', level: 85 },
              { skill: 'Research Writing', level: 95 },
              { skill: 'SPSS Software', level: 80 },
              { skill: 'Microsoft Office', level: 88 },
              { skill: 'Python & R Programming', level: 75 },
            ].map((item, index) => (
              <SkillBar key={index} {...item} index={index} />
            ))}
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-8">
            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Skills</h3>
              <div className="flex flex-wrap">
                {skills.professional.map((skill, index) => (
                  <SkillChip key={index} skill={skill} index={index} category="professional" />
                ))}
              </div>
            </motion.div>

            {/* Personal Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Attributes</h3>
              <div className="flex flex-wrap">
                {skills.personal.map((skill, index) => (
                  <SkillChip key={index} skill={skill} index={index} category="personal" />
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="flex flex-wrap">
                {skills.technical.map((skill, index) => (
                  <SkillChip key={index} skill={skill} index={index} category="technical" />
                ))}
              </div>
            </motion.div>

            {/* Hobbies & Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hobbies & Interests</h3>
              <div className="flex flex-wrap">
                {hobbies.map((hobby, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold m-1 border border-orange-300"
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;