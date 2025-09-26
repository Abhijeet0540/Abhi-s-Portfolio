import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

const RootLayout = () => {
  // Removed LocomotiveScroll initialization as it might be causing issues
  React.useEffect(() => {
    // Initialize any global effects here if needed
  }, []);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Cursor />
      <Navbar />
      <main className="pt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
