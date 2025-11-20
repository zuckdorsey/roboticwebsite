'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-polibatam-light w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-4">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-polibatam-navy rounded-lg md:hidden hover:bg-polibatam-peach focus:outline-none focus:ring-2 focus:ring-polibatam-orange"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 px-3 text-gray-600 text-sm font-light rounded hover:text-polibatam-orange md:hover:bg-transparent md:border-0 md:p-0 transition-colors"
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
