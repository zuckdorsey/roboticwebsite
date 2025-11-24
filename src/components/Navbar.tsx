'use client';

import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'FACULTY MEMBERS', href: '#faculty' },
    { label: 'STUDENTS', href: '#students' },
    { label: 'ALUMNI', href: '#alumni' },
  ];

  return (
    <nav className={`bg-polibatam-light w-full fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1720px] flex flex-wrap items-center justify-between mx-auto px-8 md:px-10 lg:px-12 py-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-polibatam-orange rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">RT</span>
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap text-polibatam-navy">
              Robotic Technology
            </span>
          </div>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-polibatam-navy rounded-lg md:hidden hover:bg-polibatam-peach focus:outline-none focus:ring-2 focus:ring-polibatam-orange transition-all duration-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile & Desktop Menu */}
        <div 
          className={`
            ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto 
            bg-polibatam-light md:bg-transparent 
            shadow-2xl md:shadow-none 
            transform md:transform-none 
            transition-transform duration-300 ease-in-out 
            z-50
          `}
        >
          {/* Close button for mobile */}
          <div className="flex justify-end p-4 md:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-polibatam-peach transition-colors"
            >
              <HiX className="w-6 h-6 text-polibatam-navy" />
            </button>
          </div>

          <ul className="flex flex-col md:flex-row p-6 md:p-0 pt-2 md:pt-0 space-y-2 md:space-y-0 md:space-x-8">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                className={`
                  transform transition-all duration-300
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 md:translate-x-0 md:opacity-100'}
                `}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 text-sm font-light rounded-lg hover:bg-polibatam-peach hover:text-polibatam-orange md:hover:bg-transparent md:border-0 md:p-0 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
