import React from 'react';
import { MdOutlineStar } from 'react-icons/md';
import MernStackLogo from './MernStackLogo';

const Cards = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="flex flex-col md:flex-row gap-6 w-full ">

                {/* First Card */}
                <div className="w-full md:w-[40%] h-[300px] sm:h-[350px] md:h-[300px] lg:h-[400px] relative">
                    <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
                        <img
                            className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px] h-auto object-contain"
                            src="https://static.vecteezy.com/system/resources/previews/024/658/918/large_2x/3d-male-character-thinking-and-working-on-a-laptop-free-png.png"
                            alt="Developer with laptop"
                        />
                    </div>
                    <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10">
                        <button className="border-2 text-[#CDEA68] border-[#CDEA68] text-xs sm:text-sm md:text-base rounded-full px-4 py-1.5">
                            1.5+ Years Experience
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[60%] flex flex-col sm:flex-row gap-6">

                    {/* Rating Card */}
                    <div className="w-full  h-[300px] sm:h-[350px] md:h-[300px] lg:h-[400px] relative">
                        <div className="card w-full h-full bg-[#212121] rounded-xl flex flex-col items-center justify-center">
                            <div className="flex mb-2">
                                {[...Array(4)].map((_, index) => (
                                    <MdOutlineStar key={index} className="text-[#CDEA68] text-2xl sm:text-3xl md:text-4xl" />
                                ))}
                            </div>
                        </div>
                        <div className="absolute left-4 sm:left-6 md:left-4  lg:left-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10">
                            <button className="border-2 text-[#CDEA68] border-[#CDEA68] text-xs sm:text-sm md:text-xs rounded-full px-4 py-1.5">
                                5.0 Rating on Upwork
                            </button>
                        </div>
                    </div>

                    {/* Expert Card */}
                    <div className="w-full  h-[300px] sm:h-[350px] md:h-[300px] lg:h-[400px] relative">
                        <div className="card w-full h-full bg-[#0c1527] rounded-xl flex items-center justify-center overflow-hidden relative">

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="tech-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0,20 L40,20 M20,0 L20,40" stroke="#61DAFB" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#tech-grid-pattern)" />
                                </svg>
                            </div>

                            {/* Radial Overlay */}
                            <div className="absolute inset-0" style={{
                                background: "radial-gradient(circle, rgba(12,21,39,0.5) 0%, rgba(12,21,39,0.8) 70%, rgba(12,21,39,0.95) 100%)"
                            }} />

                            {/* Center Content */}
                            <div className="relative z-10 flex items-center justify-center">
                                <MernStackLogo />
                            </div>

                            {/* Button */}
                            <div className="absolute left-4 sm:left-6 md:left-4 lg:left-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 z-20">
                                <button className="border-2 text-[#CDEA68] border-[#CDEA68] text-xs sm:text-sm md:text-xs rounded-full px-4 py-1.5">
                                    Full Stack Developer
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Cards;