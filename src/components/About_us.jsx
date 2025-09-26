import React from 'react';
import { motion } from 'framer-motion';


const AboutUs = () => {
    return (
        <div className='w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
            <div className='py-12 sm:py-32 px-6 '>
                <h1 className="font-['Bolgota'] text-[3vw] sm:text-[4vw] leading-[7vw] sm:leading-[4.5vw] tracking-tight">
                    I’m Abhijeet – turning coffee, code{' '}
                    <span className="underline font-semibold">and creativity into pixel-perfect websites</span>,{' '}
                    <span className="underline font-semibold">killer UIs</span>, and{' '}
                    <div className='flex items-baseline justify-start gap-2 '>
                        <span className="underline font-semibold">smart solutions.</span>.
                        <img className='w-[2vw]' src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
                    </div>
                </h1>
                <p className="mt-4 text-lg sm:text-xl font-light text-zinc-800">
                    Web Developer | UI/UX Aficionado | Digital Problem Slayer
                </p>
            </div>


            <div className='border-t-2 border-[#2121] py-6 sm:py-4 px-6 sm:px-24 flex flex-col lg:flex-row items-start'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-4xl sm:text-5xl font-["NeueMontreal,400"] leading-tight sm:leading-none'>
                        Our mantra: Build bold. Design sharp. Disrupt ordinary.
                    </h1>
                    <button className='flex gap-4 sm:gap-10 items-center justify-between px-6 sm:px-9 py-3 sm:py-5 bg-zinc-900 mt-6 sm:mt-12 rounded-full text-white uppercase font-[Neue Montreal] transition-transform duration-300 hover:scale-105'>
                        Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full transition-transform duration-300 hover:scale-150'></div>
                    </button>
                </div>

                <div className='w-full lg:w-1/2 h-[40vh] sm:h-[50vh] bg-[#004D43] rounded-2xl mt-6 lg:mt-0 flex flex-col items-center justify-center relative overflow-hidden'>
                    {/* <p className="text-white text-lg sm:text-xl font-semibold z-10 mb-6">Crafting stories that leave a mark.</p> */}
                    <div
                        className="hole group"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '260px',
                            height: '260px',
                            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                        }}
                    >
                        {[...Array(10)].map((_, idx) => (
                            <i
                                key={idx}
                                className="bubble"
                                style={{
                                    display: 'block',
                                    position: 'absolute',
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '140px',
                                    opacity: 0,
                                    animationName: 'scale',
                                    animationDuration: '3s',
                                    animationIterationCount: 'infinite',
                                    animationTimingFunction: 'linear',
                                    animationDelay: `${0.3 * (idx + 1)}s`,
                                    background: 'rgba(255,255,255,0.10)',
                                    boxShadow: '0px 0px 80px rgba(255,255,255,0.5)',
                                    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                                }}
                            />
                        ))}
                        {/* Keyframes for animation and hover effect */}
                        <style>
                            {`
                                @keyframes scale {
                                    0% {
                                        transform: scale(2.5);
                                        opacity: 0;
                                        box-shadow: 0px 0px 80px rgba(255, 255, 255, 0.5);
                                    }
                                    50% {
                                        transform: scale(1.2) translate(0px, -10px);
                                        opacity: 1;
                                        box-shadow: 0px 16px 40px rgba(255, 255, 255, 0.5);
                                    }
                                    100% {
                                        transform: scale(0.2) translate(0px, 10px);
                                        opacity: 0;
                                        box-shadow: 0px 20px 40px rgba(255, 255, 255, 0);
                                    }
                                }
                                .hole:hover {
                                    transform: scale(1.15);
                                }
                                .hole:active {
                                    transform: scale(1.08);
                                }
                                .hole .bubble {
                                    will-change: transform;
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
