'use client';

import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'FACULTY MEMBERS', href: '#faculty' },
    { label: 'ALUMNI', href: '#alumni' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      
      const scrollPosition = window.scrollY + 300; 

      for (const item of menuItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
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


  return (
    <nav 
      className={`
        fixed z-50 navbar-glass-transition
        ${scrolled 
          ? 'top-6 left-0 right-0 mx-auto w-[90%] md:w-fit md:min-w-[600px] rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl' 
          : 'top-0 left-0 w-full bg-polibatam-light border-transparent shadow-none'
        }
      `}
    >
      <div className={`
        flex flex-wrap items-center justify-between mx-auto navbar-glass-transition
        ${scrolled ? 'px-8 py-3' : 'max-w-[1720px] px-8 md:px-10 lg:px-12 py-5'}
      `}>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-2">
            <img 
              src="logo.png" 
              alt="Robotic Technology Logo" 
              className="w-32 h-13 object-contain"
            />
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

          <ul className="flex flex-col md:flex-row p-6 md:p-0 pt-2 md:pt-0 space-y-2 md:space-y-0 md:items-center">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                className={`
                  transform transition-all duration-300 flex items-center
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 md:translate-x-0 md:opacity-100'}
                `}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              >
                <a
                  href={item.href}
                  className={`
                    block py-3 px-4 text-sm rounded-lg transition-all duration-300
                    md:p-0 md:bg-transparent md:hover:bg-transparent
                    ${activeSection === item.href.substring(1) 
                      ? 'text-polibatam-navy font-extrabold md:scale-105' 
                      : 'text-gray-500 font-medium hover:text-polibatam-navy'
                    }
                    hover:bg-polibatam-peach md:hover:bg-transparent
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
                {/* Separator Shape */}
                {index < menuItems.length - 1 && (
                  <span className="hidden md:block w-1.5 h-1.5 bg-gray-300/50 rounded-full mx-6"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
