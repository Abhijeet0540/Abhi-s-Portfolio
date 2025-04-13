import React, { useEffect, useState } from 'react';

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">
            <div
                data-scroll
                data-scroll-speed="-.7"
                className="relative w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] bg-center bg-cover"
            >
                <div className="absolute flex gap-6 sm:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {[1, 2].map((_, index) => (
                        <div
                            key={index}
                            className="w-[30vw] sm:w-[18vw] md:w-[15vw] lg:w-[13vw] xl:w-[10vw] h-[30vw] sm:h-[18vw] md:h-[15vw] lg:h-[13vw] xl:h-[10vw] flex items-center justify-center bg-zinc-100 rounded-full"
                        >
                            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
                                <div
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                                    }}
                                    className="line w-full h-10 absolute top-1/2 left-1/2"
                                >
                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-100 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Eyes;
