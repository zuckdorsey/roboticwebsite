'use client';

import Image from 'next/image';
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
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sheet */}
      <div 
          className={`
            fixed left-0 right-0 z-40 w-full 
            bg-white/90 backdrop-blur-2xl 
            md:hidden
            transform transition-transform duration-500 cubic-bezier(0.32,0.72,0,1)
            ${scrolled 
              ? `bottom-0 rounded-t-[2.5rem] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-white/50 ${isOpen ? 'translate-y-0' : 'translate-y-[110%]'}`
              : `top-0 rounded-b-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-b border-white/50 ${isOpen ? 'translate-y-0' : '-translate-y-[110%]'}`
            }
          `}
          style={{ 
            paddingBottom: scrolled ? '100px' : '2rem', 
            paddingTop: scrolled ? '2rem' : '100px' 
          }}
      >
          <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />
          <ul className="flex flex-col items-center space-y-2">
            {menuItems.map((item) => (
               <li key={item.label} className="w-full px-6">
                 <a href={item.href} onClick={() => setIsOpen(false)} 
                    className={`block w-full text-center py-3 rounded-xl transition-all ${activeSection === item.href.substring(1) ? 'bg-polibatam-peach/30 text-polibatam-navy font-bold' : 'text-gray-600 font-medium'}`}>
                    {item.label}
                 </a>
               </li>
            ))}
          </ul>
      </div>

      <nav 
        suppressHydrationWarning
        className={`
          fixed z-50 md:transition-all md:duration-500 md:ease-in-out left-0 right-0 mx-auto
          /* Mobile Positioning */
          ${scrolled 
            ? 'bottom-6 top-auto w-[90%] rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg' 
            : 'top-0 bottom-auto w-full bg-polibatam-light border-b border-transparent shadow-none'
          }
          /* Desktop Positioning */
          md:bottom-auto
          ${scrolled 
            ? 'md:top-6 md:w-fit md:min-w-[500px] md:rounded-full md:bg-white/70 md:border md:shadow-xl' 
            : 'md:top-0 md:w-full md:bg-polibatam-light md:border-transparent md:shadow-none'
          }
        `}
      >
      <div className={`
        flex flex-wrap items-center justify-between mx-auto md:transition-all md:duration-500 md:ease-in-out
        ${scrolled ? 'px-6 py-2 justify-center' : 'max-w-[1720px] px-4 py-3 md:px-10 lg:px-12 md:py-5'}
      `}>
        <a href="/" className={`flex items-center space-x-3 rtl:space-x-reverse transition-all duration-500 ${scrolled ? 'md:hidden' : 'md:flex'}`}>
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-32 md:h-32 transition-all duration-500">
              <Image 
                src="/logo.png" 
                alt="Robotic Technology Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-polibatam-navy rounded-full md:hidden hover:bg-black/5 focus:outline-none transition-all duration-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ease-in-out origin-center ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ease-in-out origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex flex-row items-center">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                className="flex items-center"
              >
                <a
                  href={item.href}
                  className={`
                    block py-3 px-4 text-sm rounded-lg transition-all duration-300
                    bg-transparent hover:bg-transparent
                    ${activeSection === item.href.substring(1) 
                      ? 'text-polibatam-navy font-extrabold scale-105' 
                      : 'text-gray-500 font-medium hover:text-polibatam-navy'
                    }
                  `}
                >
                  {item.label}
                </a>
                
                {/* Middle Logo (Only visible when scrolled) */}
                {index === 2 && (
                  <div className={`flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-20 opacity-100 mx-2' : 'w-0 opacity-0 mx-0 overflow-hidden'}`}>
                    <div className="relative w-14 h-14">
                      <Image 
                        src="/logo.png" 
                        alt="Robotic Technology Logo" 
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Separator Shape */}
                {index < menuItems.length - 1 && (
                  <span className={`block w-1.5 h-1.5 bg-gray-300/50 rounded-full mx-6 transition-all duration-500 ${index === 2 && scrolled ? 'w-0 mx-0 opacity-0' : 'w-1.5 mx-6 opacity-100'}`}></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
