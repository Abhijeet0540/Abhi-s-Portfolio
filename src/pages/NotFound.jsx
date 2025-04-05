import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-zinc-800 rounded-full opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      {/* Glitch effect for 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.h1
          className="text-9xl font-bold text-[#CDEA68] relative inline-block"
          animate={{
            textShadow: [
              '0 0 5px rgba(205, 234, 104, 0.5), 0 0 10px rgba(205, 234, 104, 0.3)',
              '0 0 15px rgba(205, 234, 104, 0.7), 0 0 20px rgba(205, 234, 104, 0.5)',
              '0 0 5px rgba(205, 234, 104, 0.5), 0 0 10px rgba(205, 234, 104, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
          <motion.span
            className="absolute top-0 left-0 w-full h-full text-red-500 opacity-30"
            animate={{ x: [-2, 2, -2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            404
          </motion.span>
        </motion.h1>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Page Not Found</h2>

        <p className="text-lg md:text-xl text-zinc-400 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#CDEA68] text-black font-bold py-3 px-6 rounded-full hover:bg-[#b8d356] transition-all duration-300 hover:scale-105"
          >
            <FaHome /> Home
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-2 bg-zinc-800 text-white font-bold py-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-300 hover:scale-105"
          >
            <FaProjectDiagram /> Projects
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-zinc-800 text-white font-bold py-3 px-6 rounded-full hover:bg-zinc-700 transition-all duration-300 hover:scale-105"
          >
            <FaEnvelope /> Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
