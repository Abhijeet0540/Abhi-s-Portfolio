import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MernStackLogo = () => {
  const logoRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={logoRef}
      className="relative w-[120px] h-[120px] xs:w-[140px] xs:h-[140px] sm:w-[150px] sm:h-[150px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] cursor-none"
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full rounded-full bg-[#0c1527] border border-gray-600 shadow-lg"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Circular Moving Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M100,20 a80,80 0 1,1 0,160 a80,80 0 1,1 0,-160"
                fill="none"
              />
            </defs>
            <text
              fill="white"
              fontSize="7"
              fontWeight="bold"
              letterSpacing="3"
            >
              <textPath
                href="#circlePath"
                startOffset="0%"
              >
                • MONGO • MYSQL • EXPRESS • REACT • NODE • MONGO • MYSQL • EXPRESS • REACT
              </textPath>
            </text>
          </motion.svg>
        </div>

        {/* Center Circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <h2
              className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl font-extrabold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #47A248, #303030, #61DBFB, #3C873A)" }}
            >
              MERN
            </h2>

            <motion.div
              className="text-[8px] xs:text-[10px] sm:text-xs md:text-[10px] lg:text-xs font-medium text-gray-300 mt-1"
            >
              STACK
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MernStackLogo;
