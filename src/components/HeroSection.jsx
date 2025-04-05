import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Hi, I'm <span className="text-[#CDEA68]">Abhijeet</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">Frontend Developer & UI Designer</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
          I create engaging, responsive web experiences with modern technologies.
          Passionate about clean code, intuitive UIs, and solving complex problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="bg-[#CDEA68] text-black px-8 py-3 rounded-full font-bold hover:bg-[#b8d356] transition-all duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Me
          </Link>
          <a
            href="#"
            className="bg-zinc-800 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-700 transition-all duration-300 flex items-center gap-2"
          >
            <FaFileDownload />
            Resume
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Abhijeet0540"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {[
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center p-3 mb-2">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm text-zinc-400">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2  flex flex-col items-center"
      >
        <span className="text-zinc-500 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-zinc-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
