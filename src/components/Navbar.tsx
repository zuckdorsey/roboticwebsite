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
        fixed z-50 navbar-glass-transition
        ${scrolled 
          ? 'top-6 left-0 right-0 mx-auto w-[90%] md:w-fit md:min-w-[600px] rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl' 
          : 'top-0 left-0 w-full bg-polibatam-light border-transparent shadow-none'
        }
      `}
      classNames={{
        wrapper: scrolled ? 'px-8 py-3' : 'max-w-[1720px] px-8 md:px-10 lg:px-12 py-5',
      }}
    >
      {/* Mobile Menu Toggle + Brand */}
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-polibatam-navy"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-13">
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
      <NavbarContent className="hidden md:flex gap-0" justify="center">
        {menuItems.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <NavbarItem isActive={activeSection === item.id}>
              <Link
                href={item.href}
                color={activeSection === item.id ? 'primary' : 'foreground'}
                className={`
                  py-3 px-4 text-sm rounded-lg transition-all duration-300
                  ${activeSection === item.id
                    ? 'text-polibatam-navy font-extrabold scale-105' 
                    : 'text-gray-500 font-medium hover:text-polibatam-navy'
                  }
                `}
              >
                {item.label}
              </Link>
            </NavbarItem>
            {index < menuItems.length - 1 && (
              <span className="w-1.5 h-1.5 bg-gray-300/50 rounded-full mx-6"></span>
            )}
          </div>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-polibatam-light/95 backdrop-blur-xl pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem 
            key={`${item.label}-${index}`}
            isActive={activeSection === item.id}
            className={`
              transform transition-all duration-300
              ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
            `}
            style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
          >
            <Link
              href={item.href}
              color={activeSection === item.id ? 'primary' : 'foreground'}
              className={`
                w-full py-3 px-4 text-sm rounded-lg transition-all duration-300 block
                ${activeSection === item.id
                  ? 'text-polibatam-navy font-extrabold bg-polibatam-peach/30' 
                  : 'text-gray-500 font-medium hover:text-polibatam-navy hover:bg-polibatam-peach/20'
                }
              `}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}