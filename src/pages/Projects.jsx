import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { preloadProjectImages, loadProjectImage } from '../utils/unsplashApi.ts';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [changingPage, setChangingPage] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [projectImages, setProjectImages] = useState({});
  const [imageLoading, setImageLoading] = useState({});

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

        // Load images for the first page of projects
        const firstPageProjects = data.slice(0, projectsPerPage);
        const images = await preloadProjectImages(firstPageProjects);
        setProjectImages(images);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectsPerPage]);

  // Load images when page changes
  useEffect(() => {
    const loadImagesForCurrentPage = async () => {
      if (projects.length === 0 || !changingPage) return;

      const currentProjects = getCurrentProjects();

      // Mark all current projects as loading
      const loadingState = {};
      currentProjects.forEach(project => {
        loadingState[project.id] = true;
      });
      setImageLoading(loadingState);

      try {
        // Load images for current page
        const newImages = await preloadProjectImages(currentProjects);

        // Update project images and clear loading state
        setProjectImages(prevImages => ({
          ...prevImages,
          ...newImages
        }));
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setImageLoading({});
        setChangingPage(false);
      }
    };

    loadImagesForCurrentPage();
  }, [currentPage, projects, changingPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // Clear image loading states when component unmounts
  useEffect(() => {
    return () => {
      // This cleanup function runs when the component unmounts
      setImageLoading({});
    };
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

  // Function to handle loading an image for a specific project
  const handleLoadImage = useCallback((projectId) => {
    // Set loading state for this project
    setImageLoading(prev => ({
      ...prev,
      [projectId]: true
    }));

    // Find the project by ID
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Load the image
    loadProjectImage(project, (name, imageUrl) => {
      // Update project images
      setProjectImages(prev => ({
        ...prev,
        [name]: imageUrl
      }));

      // Clear loading state
      setImageLoading(prev => ({
        ...prev,
        [projectId]: false
      }));
    });
  }, [projects]);

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
          // Get image from our dynamic image state, or use a placeholder while loading
          const isImageLoading = imageLoading[project.id];
          const defaultImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&h=450&fit=crop';
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
                  className="overflow-hidden rounded-2xl relative group"
                  animate={{
                    scale: hoveredId === project.id ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Loading overlay */}
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center z-10">
                      <div className="w-8 h-8 border-2 border-t-transparent border-[#CDEA68] rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* Project image with blur-up loading effect */}
                  <motion.div className="relative w-full h-48">
                    {isImageLoading && (
                      <div className="absolute inset-0 bg-zinc-800 flex flex-col items-center justify-center z-10">
                        <div className="w-8 h-8 border-2 border-t-transparent border-[#CDEA68] rounded-full animate-spin mb-2"></div>
                        <span className="text-xs text-zinc-400">Generating image based on repo description...</span>
                      </div>
                    )}
                    <motion.img
                      src={projectImage}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      initial={{ filter: "blur(10px)", opacity: 0.8 }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        transition: { duration: 0.5 }
                      }}
                      onLoad={() => {
                        if (isImageLoading) {
                          setImageLoading(prev => ({
                            ...prev,
                            [project.id]: false
                          }));
                        }
                      }}
                      onError={() => {
                        handleLoadImage(project.id);
                      }}
                    />
                  </motion.div>

                  {/* Overlay gradient for better text contrast */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-40"
                    style={{ mixBlendMode: 'multiply' }}
                  />

                  {/* Refresh image button */}
                  {!isImageLoading && (
                    <button
                      className="absolute top-2 right-2 bg-black bg-opacity-50 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        try {
                          // Clear the cached image and load a new one
                          localStorage.removeItem(`unsplash_image_${project.name}`);
                        } catch (error) {
                          console.warn('Error removing from localStorage:', error);
                        }
                        handleLoadImage(project.id);
                      }}
                      title="Get new image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  )}
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

