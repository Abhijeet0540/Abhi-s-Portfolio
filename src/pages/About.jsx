import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';

const About = () => {
  // Skills data
  const skills = [
    {
      category: 'Frontend',
      icon: <FaLaptopCode className="text-4xl text-[#CDEA68]" />,
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS','Bootstrap', 'Framer Motion', 'GSAP']
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-4xl text-[#CDEA68]" />,
      items: ['Node.js', 'Express', 'RESTful APIs']
    },
    {
      category: 'Mobile',
      icon: <FaMobileAlt className="text-4xl text-[#CDEA68]" />,
      items: ['Responsive Design']
    },
    {
      category: 'Database',
      icon: <FaDatabase className="text-4xl text-[#CDEA68]" />,
      items: ['MongoDB', 'MySQL']
    },
    {
      category: 'Tools',
      icon: <FaTools className="text-4xl text-[#CDEA68]" />,
      items: ['Git', 'VS Code']
    },
    {
      category: 'Languages',
      icon: <FaCode className="text-4xl text-[#CDEA68]" />,
      items: ['JavaScript', 'TypeScript' ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-6 md:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#CDEA68]">About Me</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400">
          I'm a passionate developer focused on creating beautiful, functional, and user-friendly applications.
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-zinc-800 rounded-xl p-8 mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">My Journey</h2>
        <p className="text-zinc-300 mb-4">
          I started my coding journey with a curiosity about how websites work. That curiosity evolved into a passion for building digital experiences that are both beautiful and functional.
        </p>
        <p className="text-zinc-300 mb-4">
          With a background in computer science and a love for problem-solving, I've developed a diverse skill set that allows me to tackle challenges from multiple angles. I believe in clean code, thoughtful architecture, and putting users first.
        </p>
        <p className="text-zinc-300">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning something new to add to my toolkit.
        </p>
      </motion.div>

      {/* Skills Section */}
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold mb-10 text-center text-white"
        >
          My Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-[#CDEA68] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3 text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-center">
                    <span className="w-2 h-2 bg-[#CDEA68] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education & Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-zinc-800 rounded-xl p-8 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Education & Experience</h2>

        <div className="space-y-6">
          <div className="border-l-2 border-[#CDEA68] pl-4">
            <h3 className="text-xl font-bold text-white">(BCCA) Bachelor of Commerce in Computer Application.</h3>
            <p className="text-[#CDEA68]">Vmv College of Commerce & Computer Application • 2018-2021</p>
            <p className="text-zinc-400 mt-2">
              Studied core computer science concepts, data structures, algorithms, and software development methodologies.
            </p>
          </div>

          <div className="border-l-2 border-[#CDEA68] pl-4">
            <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
            <p className="text-[#CDEA68]">CodebergIT • 2024-Present</p>
            <p className="text-zinc-400 mt-2">
              Working on building responsive and interactive web applications using modern JavaScript frameworks.
            </p>
          </div>

          <div className="border-l-2 border-[#CDEA68] pl-4">
            <h3 className="text-xl font-bold text-white">Freelance Web Developer</h3>
            <p className="text-[#CDEA68]">Self-employed • 2020-2022</p>
            <p className="text-zinc-400 mt-2">
              Designed and developed websites for small businesses and startups, focusing on clean design and optimal performance.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
