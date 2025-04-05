import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";

const LandingPage = () => {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className="w-full h-screen bg-zinc-900 pt-1"
        >
            {/* Hero Section */}
            <div className="mt-40 md:mt-52 px-6 md:px-20">
                <h3 className="font-['Founders Grotesk'] ">Transformative Designs by 'Abhijeet'</h3>
                {["we create", "eye-opening", "presentations"].map((item, index) => (
                    <div key={index} className="masker">
                        <div className="w-fit flex overflow-hidden">
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "10vw" }}
                                    transition={{
                                        ease: [0.76, 0, 0.24, 1],
                                        duration: 1.1,
                                    }}
                                    className="w-[30vw] md:w-[10vw] mr-[1vw] rounded-md h-[10vw] md:h-[5vw] relative top-[1vw] bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]"
                                ></motion.div>
                            )}
                            <h1 className="flex items-center uppercase text-[12vw] md:text-[7vw] h-full leading-[11vw] md:leading-[6.3vw] tracking-tighter font-['Founders Grotesk']">
                                {item}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Section */}
            <div className="border-t-[1px] border-zinc-800 mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center py-10 md:py-20 px-6 md:px-20 space-y-10 md:space-y-0">
                <div className="text-center md:text-left  w-full md:w-1/2 flex justify-between item-center ">
                    {['Web Developer & Designer', 'Crafting Digital Experiences'].map(
                        (item, index) => (
                            <p
                                key={index}
                                className="text-sm md:text-md font-light tracking-light leading-normal capitalize "
                            >
                                {item}
                            </p>
                        )
                    )}
                </div>
                <div className=" flex lg:mt-0 items-center gap-5 ">
                    <button className="px-5 py-2 text-sm md:text-md border-[1px] border-zinc-500 font-light uppercase rounded-full">
                        see our work
                    </button>
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                        <span className="rotate-[45deg]">
                            <IoIosArrowRoundUp size={16} mdSize={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;


