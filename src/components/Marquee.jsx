import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    const marqueeText = 'INNOVATE CREATE ELEVATE';

    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.1"
            className="w-full py-10 sm:py-20 mt-20 bg-[#004D43] rounded-tl-3xl rounded-xl"
        >
            <div className="border-t-2 border-b-2 border-zinc-400 font-['Neue Montreal'] font-bold flex whitespace-nowrap overflow-hidden">
                {[1, 2, 3].map((_, index) => (
                    <motion.h1
                        key={index}
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ ease: 'linear', repeat: Infinity, duration: 12 }}
                        className="text-[clamp(2rem,10vw,6rem)] leading-none uppercase pl-8 sm:pl-20"
                    >
                        {marqueeText}
                    </motion.h1>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
