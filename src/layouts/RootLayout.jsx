import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const RootLayout = () => {
  React.useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
