import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [changingPage, setChangingPage] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const projectsPerPage = 6; // Projects per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = 'Abhijeet0540';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data);
        setTotalPages(Math.ceil(data.length / projectsPerPage));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const getCurrentProjects = () => {
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    return projects.slice(indexOfFirst, indexOfLast);
  };

  const handlePageChange = (pageNumber) => {
    setChangingPage(true);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setChangingPage(false);
    }, 300);
  };

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

  if (loading || changingPage) {
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
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 md:px-20 bg-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#CDEA68]">My Projects</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-6">
          A showcase of my GitHub repositories.
        </p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <a
            href="https://github.com/Abhijeet0540"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full transition-all duration-300 border border-zinc-700"
          >
            <FaGithub size={20} />
            View GitHub
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCurrentProjects().map((project, index) => {
          const projectImages = {
            'register-form': 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2076',
            'NodeScribe': 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070',
            'StreamVibe': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025',
            'blog_ad': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
            'React-Task': 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070',
            'E-commerce': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070',
            'Blog-Website-': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072',
            'tesseract': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070',
            'MarvelHeroes': 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070'
          };

          const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
          const projectImage = projectImages[project.name] || defaultImage;

          const languageColors = {
            JavaScript: '#f1e05a',
            TypeScript: '#3178c6',
            HTML: '#e34c26',
            CSS: '#563d7c',
            EJS: '#a91e50',
            'C++': '#f34b7d',
            Kotlin: '#A97BFF',
          };

          // Determine vertical position based on index
          // This creates a staggered pattern where:
          // - First card: normal position
          // - Second card: moved down
          // - Third card: moved up
          // - Pattern repeats
          const getPositionClass = (idx) => {
            const position = idx % 3;
            if (position === 0) return "lg:mt-0";
            if (position === 1) return "lg:mt-12";
            if (position === 2) return "lg:-mt-8";
            return "";
          };

          return (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className={`bg-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${getPositionClass(index)}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 pb-3">
                <div className="flex justify-between items-start mb-2">
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
                <div className="flex space-x-2 mb-3">
                  <span className="flex items-center text-yellow-400 text-xs">
                    <FaStar className="mr-1" /> {project.stargazers_count}
                  </span>
                  <span className="flex items-center text-blue-400 text-xs">
                    <FaCodeBranch className="mr-1" /> {project.forks_count}
                  </span>
                </div>
              </div>

              <div className="px-4 pb-4">
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  animate={{
                    scale: hoveredId === project.id ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={projectImage}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-6 pt-2 flex-grow flex flex-col">
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
                        title="View Live"
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

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center mt-16 gap-2"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === 1 ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-zinc-800 text-white hover:bg-zinc-700'} transition-colors`}
          >
            <FaChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              const shouldShow = pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1;
              if (!shouldShow) return null;

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${pageNum === currentPage ? 'bg-[#CDEA68] text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === totalPages ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-zinc-800 text-white hover:bg-zinc-700'} transition-colors`}
          >
            <FaChevronRight size={16} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;

