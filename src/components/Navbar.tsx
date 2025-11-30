'use client';

import { useState, useEffect } from 'react';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from '@heroui/react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'HOME', href: '/#home', id: 'home' },
    { label: 'ABOUT', href: '/#about', id: 'about' },
    { label: 'CURRICULUM', href: '/#curriculum', id: 'curriculum' },
    { label: 'FACILITIES', href: '/#facilities', id: 'facilities' },
    { label: 'STUDENTS', href: '/students', id: 'students' },
    { label: 'FACULTY MEMBERS', href: '/#faculty', id: 'faculty' },
    { label: 'ALUMNI', href: '/#alumni', id: 'alumni' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 300;

      for (const item of menuItems) {
        if (!item.href.startsWith('/#')) continue;
        const sectionId = item.id;
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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      shouldHideOnScroll={false}
      className={`
        fixed z-50 navbar-glass-transition transition-all duration-300
        ${scrolled && !isMenuOpen
          ? 'top-4 md:top-6 left-0 right-0 mx-auto w-[92%] md:w-[90%] md:max-w-7xl rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg md:shadow-xl'
          : 'top-0 left-0 w-full bg-transparent border-transparent shadow-none'
        }
        ${isMenuOpen ? 'bg-white/100' : ''}
      `}
      classNames={{
        wrapper: `px-6 md:px-8 lg:px-12 h-16 md:h-20 ${scrolled ? '' : 'bg-gradient-to-b from-white/50 to-transparent md:from-transparent'}`,
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      {/* Mobile Brand (Left) */}
      <NavbarContent className="md:hidden" justify="start">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2" onPress={() => setIsMenuOpen(false)}>
            <div className="relative w-28 h-10">
              <Image
                src="/logo.png"
                alt="Robotic Technology Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Menu Toggle (Right) */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black dark:text-white"
        />
      </NavbarContent>

      {/* Desktop Brand */}
      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-36 h-12">
              <Image
                src="/logo.png"
                alt="Robotic Technology Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden md:flex gap-1" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.label} isActive={activeSection === item.id}>
            <Link
              href={item.href}
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                ${activeSection === item.id
                  ? 'text-white bg-polibatam-navy shadow-md'
                  : 'text-gray-600 hover:text-polibatam-navy hover:bg-gray-100'
                }
              `}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="fixed inset-0 z-40 w-full h-screen bg-white/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-4">
        <div className="flex flex-col gap-4 w-full">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.label}-${index}`}
              isActive={activeSection === item.id}
            >
              <Link
                href={item.href}
                className={`
                  w-full py-4 px-4 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-between group
                  ${activeSection === item.id
                    ? 'text-white bg-polibatam-navy shadow-lg shadow-polibatam-navy/20'
                    : 'text-gray-800 hover:bg-gray-100'
                  }
                `}
                onPress={() => setIsMenuOpen(false)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroNavbar>
  );
}