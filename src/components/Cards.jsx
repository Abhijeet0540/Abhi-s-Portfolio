import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const Cards = () => {
    return (
        <div className='w-full py-12 md:py-24 lg:py-32 px-4 sm:px-10 md:px-20'>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
                {/* First Card - Full width on mobile, half width on desktop */}
                <div className='w-full md:w-1/2 h-[30vh] sm:h-[40vh] md:h-[60vh] mb-5 md:mb-0'>
                    <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                        <img
                            className='w-[15vh] sm:w-[20vh] md:w-[25vh]'
                            src="https://static.vecteezy.com/system/resources/previews/024/658/918/large_2x/3d-male-character-thinking-and-working-on-a-laptop-free-png.png"
                            alt="Developer with laptop"
                        />
                        <button className='absolute left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[10px] sm:text-[14px] md:text-[16px] rounded-full px-3 py-1'>
                            1.5+ Years Experience
                        </button>
                    </div>
                </div>

                {/* Second Section - Contains two smaller cards */}
                <div className='flex flex-col sm:flex-row md:w-1/2 gap-5 h-[60vh] sm:h-[40vh] md:h-[60vh]'>
                    {/* Rating Card */}
                    <div className='card relative rounded-xl w-full sm:w-1/2 h-[30vh] sm:h-full bg-[#212121] flex flex-col items-center justify-center'>
                        <div className='flex mb-2'>
                            {[...Array(4)].map((_, index) => (
                                <MdOutlineStar key={index} className="text-[#CDEA68] text-2xl sm:text-3xl md:text-4xl" />
                            ))}
                        </div>
                        <button className='absolute left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[10px] sm:text-[14px] md:text-[16px] rounded-full px-3 py-1'>
                            5.0 Rating on Upwork
                        </button>
                    </div>

                    {/* Expert Card */}
                    <div className='card relative rounded-xl w-full sm:w-1/2 h-[30vh] sm:h-full bg-[#212121] flex items-center justify-center mt-5 sm:mt-0'>
                        <img
                            className='w-[10vh] sm:w-[12vh] md:w-[15vh]'
                            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                            alt="Logo"
                        />
                        <button className='absolute left-4 sm:left-6 md:left-10 bottom-4 sm:bottom-6 md:bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[10px] sm:text-[14px] md:text-[16px] rounded-full px-3 py-1'>
                            React Expert Alumni
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;