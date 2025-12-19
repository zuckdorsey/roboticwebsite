/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link
} from '@heroui/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

type MenuItem = {
  label: string;
  href: string;
  id: string;
  type: 'anchor' | 'route';
};

const menuItems: MenuItem[] = [
  { label: 'HOME', href: '/#home', id: 'home', type: 'anchor' },
  { label: 'ABOUT', href: '/#about', id: 'about', type: 'anchor' },
  { label: 'CURRICULUM', href: '/#curriculum', id: 'curriculum', type: 'anchor' },
  { label: 'FACILITIES', href: '/#gallery', id: 'gallery', type: 'anchor' },
  { label: 'STUDENTS', href: '/students', id: 'students-route', type: 'route' },
  { label: 'FACULTY MEMBERS', href: '/#faculty', id: 'faculty', type: 'anchor' },
  { label: 'ALUMNI', href: '/#alumni', id: 'alumni', type: 'anchor' },
  { label: 'BLOG', href: '/blog', id: 'blog-route', type: 'route' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(() => (pathname === '/' ? 'home' : ''));

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const handleMenuItemPress = useCallback(
    (item: MenuItem) => {
      closeMenu();

      if (item.type === 'route') {
        router.push(item.href);
        return;
      }

      if (pathname !== '/') {
        router.push(item.href);
        return;
      }

      const target = document.getElementById(item.id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', item.href);
      } else {
        router.push(item.href);
      }
    },
    [closeMenu, pathname, router],
  );

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 10);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const item of menuItems) {
        if (item.type !== 'anchor') continue;
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const routeActive = useMemo(
    () =>
      new Map(
        menuItems
          .filter((item) => item.type === 'route')
          .map((item) => [
            item.id,
            pathname === item.href || pathname.startsWith(`${item.href}/`),
          ]),
      ),
    [pathname],
  );

  const showFloatingNavbar = scrolled && !isMenuOpen;

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`
          fixed z-50 transition-all duration-300 ease-out
          ${showFloatingNavbar
            ? 'top-3 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] md:max-w-7xl rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg'
            : 'top-0 left-0 right-0 w-full bg-gradient-to-b from-white/60 to-transparent'
          }
          ${isMenuOpen ? '!top-0 !left-0 !right-0 !w-full !translate-x-0 !rounded-none bg-white shadow-lg' : ''}
        `}
      >
        <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="relative w-28 md:w-36 h-10 md:h-12">
              <Image
                src="/logo.png"
                alt="Robotic Technology Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 112px, 144px"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const activeAnchor = pathname === '/' && activeSection === item.id;
              const activeRoute = item.type === 'route' && routeActive.get(item.id);
              const isActive = activeAnchor || Boolean(activeRoute);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                    ${isActive
                      ? 'text-white bg-polibatam-navy shadow-md'
                      : 'text-gray-600 hover:text-polibatam-navy hover:bg-gray-100'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-polibatam-navy/10 hover:bg-polibatam-navy/20 active:scale-95 transition-all"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-polibatam-navy" />
            ) : (
              <HiMenu className="w-6 h-6 text-polibatam-navy" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 bg-white shadow-xl rounded-b-3xl px-4 pb-6 pt-4 max-h-[80vh] overflow-y-auto md:hidden"
            >
              <div className="flex flex-col gap-2">
                {menuItems.map((item, index) => {
                  const activeAnchor = pathname === '/' && activeSection === item.id;
                  const activeRoute = item.type === 'route' && routeActive.get(item.id);
                  const isActive = activeAnchor || Boolean(activeRoute);

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      type="button"
                      className={`
                        w-full text-left
                        py-3.5 px-4 text-base font-semibold rounded-xl transition-all duration-200 flex items-center justify-between
                        ${isActive
                          ? 'text-white bg-gradient-to-r from-polibatam-navy to-polibatam-navy/90 shadow-lg'
                          : 'text-gray-700 bg-gray-50 hover:bg-gray-100 active:bg-gray-200'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => handleMenuItemPress(item)}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom decoration */}
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400">
                  Robotics Technology - Polibatam
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
