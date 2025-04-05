import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Your GitHub username
        const username = 'Abhijeet0540';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Project card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#CDEA68]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Projects</h2>
        <p>{error}</p>
        <p className="mt-4">
          Please check your internet connection or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#CDEA68]">My Projects</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-6">
          A showcase of my work from GitHub repositories, featuring web applications, tools, and experiments.
        </p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <a
            href="https://github.com/Abhijeet0540"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full transition-all duration-300 border border-zinc-700"
          >
            <FaGithub size={20} />
            View GitHub Profile
          </a>
          <a
            href="mailto:abhijeetd439@gmail.com"
            className="flex items-center gap-2 bg-[#CDEA68] hover:bg-[#b8d356] text-black px-6 py-3 rounded-full transition-all duration-300"
          >
            <FaExternalLinkAlt size={16} />
            Hire Me
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          // Define project images based on name or type
          const projectImages = {
            'register-form': 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'NodeScribe': 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'StreamVibe': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'blog_ad': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'React-Task': 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'E-commerce': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'Blog-Website-': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'tesseract': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'MarvelHeroes': 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          };

          // Default image for projects without specific images
          const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

          // Get project image or use default
          const projectImage = projectImages[project.name] || defaultImage;

          // Get project language color
          const languageColors = {
            JavaScript: '#f1e05a',
            TypeScript: '#3178c6',
            HTML: '#e34c26',
            CSS: '#563d7c',
            EJS: '#a91e50',
            'C++': '#f34b7d',
            Kotlin: '#A97BFF',
          };

          return (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-zinc-700 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={projectImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <span className="flex items-center text-yellow-400 bg-zinc-900 bg-opacity-70 px-2 py-1 rounded-md text-xs">
                    <FaStar className="mr-1" /> {project.stargazers_count}
                  </span>
                  <span className="flex items-center text-blue-400 bg-zinc-900 bg-opacity-70 px-2 py-1 rounded-md text-xs">
                    <FaCodeBranch className="mr-1" /> {project.forks_count}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name.replace(/-/g, ' ')}</h3>
                  {project.language && (
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: languageColors[project.language] || '#555', color: '#fff' }}
                    >
                      {project.language}
                    </span>
                  )}
                </div>

                <p className="text-zinc-400 mb-4 flex-grow">
                  {project.description || "A project showcasing my development skills and creativity."}
                </p>

                {project.topics && project.topics.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.topics.slice(0, 3).map(topic => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-zinc-700 text-[#CDEA68]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-700">
                  <span className="text-sm text-zinc-500">
                    Updated: {new Date(project.updated_at).toLocaleDateString()}
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#CDEA68] transition-colors p-2 bg-zinc-700 rounded-full"
                      title="View on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#CDEA68] transition-colors p-2 bg-zinc-700 rounded-full"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
