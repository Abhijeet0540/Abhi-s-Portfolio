import React from 'react'

const Footer = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='footer flex gap-5  w-full h-screen bg-zinc-900 px-10 py-5'>
            <div className="w-1/2 h-full flex flex-col items-start justify-between font-['Neue Montreal'] font-bold ">
                <div className="heading">
                    <h1 className='text-[8vw] uppercase leading-non -mb-[5vw]'>eye-</h1>
                    <h1 className='text-[8vw] uppercase leading-non '>opening</h1>
                </div>
                <div className='w-1/2 h-full flex items-start justify-center'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/042/352/490/small_2x/ai-generated-3d-rendering-of-a-cartoon-of-young-man-wearing-big-glasses-on-transparent-background-ai-generated-png.png" alt="" />
                </div>
                <div className='w-[6vh]'>
                    <img src="./logo.png" alt="" />
                </div>
            </div>
            <div className="w-1/2 ">
                <h1 className='text-[5vw] uppercase font-["Founders_Grotesk "] Tracking-non -leading-[8vw]  font-bold'>presentations</h1>
                <div className='mt-10  font-["Neue Montreal"]  capitalize '>
                    <div className='w-1/2 h-[70vh]  flex flex-col justify-between font-["Neue Montreal"] font-bold '>
                        <div className="flex flex-col gap-2">
                            <span className="underline">S.</span>
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
                                    className="underline hover:text-[#CDEA68] transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                        {/* <div>
                            {["l:", "202-1965 w 4th ave", "vancouver,canada", "lviv,ukraine"].map((item, index) => (
                                <a key={index} className='flex underline' href="https://facebook.com">{item}</a>
                            ))}
                        </div> */}
                        <div >
                            {["e:", "abhijeed439@gmail.com"].map((item, index) => (
                                <a key={index} className='flex underline hover:text-[#CDEA68] transition-colors' href="https://gemail.com">{item}</a>
                            ))}
                        </div>
                        <div >
                            {["&copy design 2024 legal.terms"].map((item, index) => (
                                <a key={index} className='flex underline hover:text-[#CDEA68] transition-colors' href="#">{item}</a>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
