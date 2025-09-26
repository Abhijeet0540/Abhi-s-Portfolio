import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  // Simplified cursor implementation to avoid potential issues
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on initial load
    checkMobile();

    // Check on resize
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't add event listeners on mobile devices
    if (isMobile) return;

    // Track mouse position with a simple implementation
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateCursorPosition);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [isMobile]);

  useEffect(() => {
    // Don't add event listeners on mobile devices
    if (isMobile) return;

    // Track hover state for interactive elements
    const handleMouseEnter = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.classList.contains('cursor-hover') ||
        e.target.closest('.cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners for all interactive elements
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot - follows cursor exactly */}
      <motion.div
        id="cursor"
        className="fixed rounded-full pointer-events-none z-[9999]"
        style={{
          background: "rgba(255, 255, 255, 1)",
          mixBlendMode: "difference"
        }}
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? '10px' : '8px',
          height: isHovering ? '10px' : '8px',
          scale: isHovering ? 1.3 : 4,
        }}
        transition={{
          x: { type: "tween", ease: "circOut", duration: 0.05 },
          y: { type: "tween", ease: "circOut", duration: 0.05 },
          scale: { type: "spring", damping: 12, stiffness: 300 },
          width: { type: "spring", damping: 15, stiffness: 300 },
          height: { type: "spring", damping: 15, stiffness: 300 }
        }}
      />
    </>
  );
};

export default Cursor;
