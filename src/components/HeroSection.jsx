import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const getGradient = (tech) => {
  switch (tech) {
    case 'React':
      return {
        text: 'linear-gradient(to right, #61DAFB, #3ECF8E)',
        bgFrom: '#61DAFB',
        glow: '#61DAFB',
      };
    case 'JavaScript':
      return {
        text: 'linear-gradient(to right, #F7DF1E, #FCEA10)',
        bgFrom: '#F7DF1E',
        glow: '#F7DF1E',
      };
    case 'TypeScript':
      return {
        text: 'linear-gradient(to right, #3178C6, #66B2FF)',
        bgFrom: '#3178C6',
        glow: '#3178C6',
      };
    case 'HTML5':
      return {
        text: 'linear-gradient(to right, #E34F26, #FF6A00)',
        bgFrom: '#E34F26',
        glow: '#E34F26',
      };
    case 'CSS3':
      return {
        text: 'linear-gradient(to right, #1572B6, #33AADD)',
        bgFrom: '#1572B6',
        glow: '#1572B6',
      };
    case 'Tailwind':
      return {
        text: 'linear-gradient(to right, #38BDF8, #06B6D4)',
        bgFrom: '#38BDF8',
        glow: '#38BDF8',
      };
    case 'Bootstrap':
      return {
        text: 'linear-gradient(to right, #563D7C, #7952B3)',
        bgFrom: '#563D7C',
        glow: '#563D7C',
      };
    case 'jQuery':
      return {
        text: 'linear-gradient(to right, #0769AD, #117AC9)',
        bgFrom: '#0769AD',
        glow: '#0769AD',
      };
    case 'Next.js':
      return {
        text: 'linear-gradient(to right, #000000, #434343)',
        bgFrom: '#000000',
        glow: '#000000',
      };
    case 'Express':
      return {
        text: 'linear-gradient(to right, #404040, #2D2D2D)',
        bgFrom: '#404040',
        glow: '#404040',
      };
    case 'Node.js':
      return {
        text: 'linear-gradient(to right, #3C873A, #4CAF50)',
        bgFrom: '#3C873A',
        glow: '#3C873A',
      };
    case 'Git':
      return {
        text: 'linear-gradient(to right, #F1502F, #E44D26)',
        bgFrom: '#F1502F',
        glow: '#F1502F',
      };
    default:
      return {
        text: 'linear-gradient(to right, #FFFFFF, #CCCCCC)',
        bgFrom: '#999999',
        glow: '#FFFFFF',
      };
  }
};


const HeroSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-20 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* my name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Hi, I'm <span className="text-[#CDEA68] font-['Dollan']">Abhijeet</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Frontend Developer & UI Designer</span>
        </h1>

        <p className="text-base md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto px-4">
          I create engaging, responsive web experiences with modern technologies.
          Passionate about clean code, intuitive UIs, and solving complex problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            to="/projects"
            className="bg-[#CDEA68] text-black px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-[#b8d356] transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
          >
            Contact Me
          </Link>
          <a
            href="#"
            className="bg-zinc-800 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-zinc-700 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
          >
            <FaFileDownload />
            <span className="hidden sm:inline">Resume</span>
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
            href="https://www.linkedin.com/in/abhijeet-dongre-838359296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaFileDownload size={28} />
          </a> */}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10  w-full  mx-auto rounded-2xl overflow-hidden">
        <div
          ref={sliderRef}
          className="flex items-center gap-8 md:gap-12 py-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex flex-col items-center justify-center gap-3 p-4 cursor-pointer transition-all duration-500"
            >
              {/* Glowing Radial Background on Hover */}
              <div className="absolute inset-0 z-0 scale-110 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${getGradient(tech.name).bgFrom}, transparent 70%)`
                }}
              ></div>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-zinc-80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[3deg] shadow-lg shadow-zinc-700/40">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
              </div>

              {/* Gradient Text with Glow */}
              <span
                className={`text-sm md:text-base font-semibold bg-clip-text text-transparent group-hover:scale-105 group-hover:tracking-wider transition-all duration-500`}
                style={{
                  backgroundImage: getGradient(tech.name).text,
                  filter: `drop-shadow(0 0 4px ${getGradient(tech.name).glow})`
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-zinc-500 text-xs md:text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-8 md:w-6 md:h-10 border-2 border-zinc-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 md:w-1.5 md:h-3 bg-zinc-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default HeroSection;


