import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
    const cardControls = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cardControls[index].start({ y: 0 });
    };

    const handleHoverEnd = (index) => {
        cardControls[index].start({ y: '100%' });
    };

    // Project data (replace with your own projects)
    const projects = [
        {
            title: 'React Web App',
            description: 'A sleek web app built with React and Tailwind CSS to streamline user workflows.',
            image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D', // Replace with your project image
        },
        {
            title: 'Portfolio-Site',
            description: 'A responsive portfolio site designed with Framer Motion for smooth animations.',
            image: 'https://images.unsplash.com/photo-1622050756792-5b1180bbb873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your project image
        },
    ];

    return (
        <div className="w-full py-10 md:py-20 bg-zinc-900 text-white">
            {/* Header */}
            <div className="w-full px-6 sm:px-10 md:px-20 pb-6 sm:pb-10 border-b-[0.5px] border-zinc-700">
                <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-wide">
                    Featured Projects
                </h1>
            </div>

            {/* Projects Grid */}
            <div className="px-6 sm:px-10 md:px-20">
                <div className="cards w-full flex flex-col md:flex-row gap-8 md:gap-10 mt-8 md:mt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            onHoverStart={() => handleHoverStart(index)}
                            onHoverEnd={() => handleHoverEnd(index)}
                            className="relative w-full md:w-1/2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
                        >
                            {/* Animated Project Title - Hidden on mobile */}
                            <h1
                                className={`absolute hidden md:flex overflow-hidden ${index === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'
                                    } top-1/2 -translate-y-1/2 uppercase text-5xl lg:text-7xl xl:text-8xl z-10 leading-none text-[#CDEA68] font-extrabold tracking-tight`}
                            >
                                {project.title.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ y: '100%' }}
                                        animate={cardControls[index]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: charIndex * 0.05 }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </h1>

                            {/* Mobile Project Title */}
                            <h2 className="hidden text-xl font-bold text-[#CDEA68] mb-2">
                                {project.title}
                            </h2>

                            {/* Card Content */}
                            <div className="card w-full h-full rounded-xl overflow-hidden relative group">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={project.image}
                                    alt={project.title}
                                />
                                {/* Overlay with Description */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 sm:p-5"
                                >
                                    <p className="text-xs sm:text-sm md:text-base text-white">
                                        {project.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-8 sm:mt-10 md:mt-16 text-center">
                    <Link to="/projects" className="inline-block " >
                        <button
                            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#CDEA68] text-black uppercase rounded-full hover:bg-[#b8d356] transition-colors text-sm sm:text-base"
                        >
                            See All Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;