import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastTimeRef = React.useRef(0);

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

    // Track mouse position and calculate velocity
    const updateCursorPosition = (e) => {
      const currentTime = performance.now();
      const timeDelta = currentTime - lastTimeRef.current;

      // Update previous position before setting new position
      setPrevPosition(position);

      // Set new position
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);

      // Calculate velocity (distance / time)
      if (timeDelta > 0) {
        const dx = newPosition.x - prevPosition.x;
        const dy = newPosition.y - prevPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const newVelocity = Math.min(distance / timeDelta * 20, 10); // Scale and cap velocity
        setVelocity(newVelocity);
      }

      lastTimeRef.current = currentTime;
    };

    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateCursorPosition);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [isMobile, position, prevPosition]);

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
          // boxShadow: `0 0 8px 2px rgba(255, 255, 255, 0.8)`,
          background: "rgba(255, 255, 255, 1)",
          mixBlendMode: "difference"
        }}
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? '10px' : '8px',
          height: isHovering ? '10px' : '8px',
          scale: velocity > 3 ? 1.3 : 4, // Enhanced scaling based on velocity
        }}
        transition={{
          x: { type: "tween", ease: "circOut", duration: 0.05 }, // Faster following
          y: { type: "tween", ease: "circOut", duration: 0.05 }, // Faster following
          scale: { type: "spring", damping: 12, stiffness: 300 },
          width: { type: "spring", damping: 15, stiffness: 300 },
          height: { type: "spring", damping: 15, stiffness: 300 }
        }}
      />
    </>
  );
};

export default Cursor;
