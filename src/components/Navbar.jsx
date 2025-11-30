import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Sermons', path: '/sermons' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="bg-white p-1 rounded-lg transform group-hover:scale-105 transition-transform">
                        <img
                            src="https://www.seekpng.com/png/detail/68-688463_assemblies-of-god-ghana-logo-ideas-assemblies-of.png"
                            alt="Assemblies of God Logo"
                            className="h-10 w-auto"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-wide text-white">
                        UPPER <span className="text-accent">ROOM</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-secondary relative group',
                                location.pathname === link.path ? 'text-secondary' : 'text-gray-300'
                            )}
                        >
                            {link.name}
                            <span className={clsx(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                                location.pathname === link.path ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    'md:hidden fixed inset-0 bg-primary/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out pt-24 px-6',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'text-2xl font-bold transition-colors hover:text-secondary',
                                location.pathname === link.path ? 'text-secondary' : 'text-white'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
