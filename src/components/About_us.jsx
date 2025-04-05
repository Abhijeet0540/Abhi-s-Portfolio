import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className='w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
            <div className='py-12 sm:py-32 px-6 '>
                <h1 className="font-['Neue Montreal'] text-[6vw] sm:text-[4vw] leading-[7vw] sm:leading-[4.5vw] tracking-tight">
                    I’m Abhijeet, a creative mind dedicated to{' '}
                    <span className="underline font-semibold">crafting stunning websites</span>,{' '}
                    <span className="underline font-semibold">solving complex challenges</span>, and{' '}
                    <div className='flex items-baseline justify-start gap-2 '>
                        <span className="underline font-semibold">bringing ideas to life</span>.
                        <img className='w-[2vw]' src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                    </div>
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-light text-zinc-800">
                    Web Developer | UI/UX Enthusiast | Creative Problem Solver
                </p>
            </div>


            <div className='border-t-2 border-[#2121] py-6 sm:py-4 px-6 sm:px-24 flex flex-col lg:flex-row items-start'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-4xl sm:text-5xl font-["NeueMontreal,400"] leading-tight sm:leading-none'>
                        Our approach: Turning visions into unforgettable stories.
                    </h1>
                    <button className='flex gap-4 sm:gap-10 items-center justify-between px-6 sm:px-9 py-3 sm:py-5 bg-zinc-900 mt-6 sm:mt-12 rounded-full text-white uppercase font-[Neue Montreal] transition-transform duration-300 hover:scale-105'>
                        Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>

                <div className='w-full lg:w-1/2 h-[40vh] sm:h-[70vh] bg-[#004D43] rounded-2xl mt-6 lg:mt-0 flex items-center justify-center'>
                    <p className="text-white text-lg sm:text-xl font-semibold">Crafting stories that leave a mark.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
