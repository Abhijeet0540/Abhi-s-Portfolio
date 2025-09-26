import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscThreeBars, VscChromeClose } from 'react-icons/vsc';

// Navigation links data
const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact', highlight: true },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full px-6  md:px-20  flex items-center justify-between font-['Neue Montreal'] z-[99] bg-zinc-900/80 backdrop-filter backdrop-blur-lg border-b border-zinc-800/50 shadow-lg">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
                <img className='w-[6vh]' src="./logo" alt="Portfolio Logo" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-10">
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        className={({ isActive }) =>
                            `text-sm lg:text-lg capitalize font-light transition-colors duration-300
                            ${isActive ? 'text-[#CDEA68]' : 'text-white hover:text-[#CDEA68]'}
                            ${link.highlight ? 'ml-16 lg:ml-32' : ''}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden cursor-pointer " onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <VscChromeClose size={24} /> : <VscThreeBars size={24} />}
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 py-4 md:hidden shadow-lg z-50">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className={({ isActive }) =>
                                `block py-3 px-6 text-lg capitalize font-light transition-colors duration-300
                                ${isActive ? 'text-[#CDEA68]' : 'text-white hover:text-[#CDEA68]'}`
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;