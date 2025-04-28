import React from 'react';
const Footer = () => {
    
    return (
        <div className='w-full bg-zinc-900 px-6 sm:px-10 md:px-20 py-10 sm:py-10 text-white relative'>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    {/* Updated Heading */}
                    <div className="heading flex flex-col ">
                        <h1 className='text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] uppercase font-bold leading-none'>
                            eye-
                        </h1>
                        <h1 className='text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] uppercase font-bold leading-none'>
                            opening
                        </h1>
                    </div>

                    <div className='py-6 sm:py-10 w-full lg:w-1/2 flex items-center justify-center'>
                        <img
                            className='max-w-full h-auto max-h-[30vh]'
                            src="https://static.vecteezy.com/system/resources/thumbnails/042/352/490/small_2x/ai-generated-3d-rendering-of-a-cartoon-of-young-man-wearing-big-glasses-on-transparent-background-ai-generated-png.png"
                            alt="Cartoon with glasses"
                        />
                    </div>

                    <div className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]'>
                        <img src="/logo.png" alt="Logo" className='w-full h-full object-contain' />
                    </div>
                </div>


                {/* Right Column */}
                <div className="w-full lg:w-1/2">
                    <h1 className='text-[8vw] sm:text-[6vw] md:text-[5vw] uppercase font-bold tracking-tight leading-tight'>presentations</h1>

                    <div className='mt-8 sm:mt-10'>
                        <div className='w-full lg:w-1/2 flex flex-col justify-between gap-8 sm:gap-12'>
                            {/* Social Links */}
                            <div className="flex flex-col gap-2">
                                <span className="underline text-base sm:text-lg font-medium">S.</span>
                                {[
                                    { label: 'Instagram', url: 'https://instagram.com/yourusername' },
                                    { label: 'Facebook', url: 'https://facebook.com/yourusername' },
                                    { label: 'Github', url: 'https://github.com/Abhijeet0540' },
                                    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abhijeet-dongre-838359296/' },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-[#CDEA68] transition-colors text-sm sm:text-base"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            {/* Email */}
                            <div >
                                <span className="underline text-base sm:text-lg font-medium">E.</span>
                                {["abhijeed439@gmail.com"].map((item, index) => (
                                    <a key={index} className='flex underline hover:text-[#CDEA68] transition-colors' href="https://gemail.com">{item}</a>
                                ))}
                            </div>

                            {/* Copyright */}
                            <div>
                                <p className='text-xs sm:text-sm'>&copy; design 2024 legal terms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
