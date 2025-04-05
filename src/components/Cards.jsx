import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const Cards = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen flex gap-5 items-center px-20'>
            <div className=' h-[60vh] w-1/2 '>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-[25vh]' src="https://static.vecteezy.com/system/resources/previews/024/658/918/large_2x/3d-male-character-thinking-and-working-on-a-laptop-free-png.png" alt="" />
                    <button className='absolute left-10 bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[2vh] rounded-full px-3 py-1'>1.5+ Years Experience</button>
                </div>
            </div>
            <div className=' flex gap-5 w-1/2 h-[60vh]  '>
                <div className='card relative rounded-xl  w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                    {[...Array(4)].map((_, index) => (
                        <MdOutlineStar key={index} className=" text-[#CDEA68]" />
                    ))}
                    <button className='absolute left-10 bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[2vh] rounded-full px-3 py-1'>5.0 Rating on Upwork</button>
                </div>
                <div className='card relative rounded-xl  w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                    <img className='w-[15vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute left-10 bottom-10 border-2 text-[#CDEA68] border-[#CDEA68] text-[2vh] rounded-full px-3 py-1'>React Expert Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards

// {
//     image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your logo or artwork
//         bgColor: '#004D43',
//             text: 'Crafting Code Since 2019',
//                 buttonText: '5+ Years Experience',
// },
// {
//     image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your logo or artwork
//         bgColor: '#212121',
//             text: 'Top-Rated Developer',
//                 buttonText: '5.0 Rating on Upwork',
// },
// {
//     image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your logo or artwork
//         bgColor: '#212121',
//             text: 'Certified Innovator',
//                 buttonText: 'React Expert Alumni',
// },