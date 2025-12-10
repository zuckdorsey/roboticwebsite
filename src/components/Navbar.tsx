'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link
} from '@heroui/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

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
  { label: 'FACILITIES', href: '/#facilities', id: 'facilities', type: 'anchor' },
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

    const rafId = requestAnimationFrame(() => closeMenu());
    return () => cancelAnimationFrame(rafId);
  }, [pathname, isMenuOpen, closeMenu]);

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

  const navbarClassName = [
    'fixed z-50 transition-all duration-300 ease-out',
    showFloatingNavbar
      ? 'top-3 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] md:max-w-7xl rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg md:shadow-xl'
      : 'top-0 left-0 right-0 w-full translate-x-0 bg-transparent border-transparent shadow-none',
    isMenuOpen
      ? 'top-0 left-0 right-0 mx-0 w-full rounded-none border-b border-white/30 bg-white/85 backdrop-blur-xl shadow-lg h-full max-h-screen transform-none'
      : '',
  ].join(' ');

  return (
    <>
      <HeroNavbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        shouldHideOnScroll={false}
        className={navbarClassName}
        classNames={{
          wrapper: `px-6 md:px-8 lg:px-12 h-16 md:h-20 transition-colors duration-300 ${
            showFloatingNavbar || isMenuOpen
              ? 'bg-transparent'
              : 'bg-gradient-to-b from-white/40 via-white/10 to-transparent'
          }`,
          item: [
            'flex',
            'relative',
            'h-full',
            'items-center',
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
        <NavbarContent className="md:hidden z-50" justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2" onPress={closeMenu}>
              <div className="relative w-28 h-10">
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
          </NavbarBrand>
        </NavbarContent>

        {/* Mobile Menu Toggle (Right) */}
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-black dark:text-white z-50"
          />
        </NavbarContent>

        {/* Desktop Brand */}
        <NavbarContent className="hidden md:flex" justify="start">
          <NavbarBrand>
            <Link href="/" className="flex items-center gap-2" onPress={closeMenu}>
              <div className="relative w-36 h-12">
                <Image
                  src="/logo.png"
                  alt="Robotic Technology Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="144px"
                />
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-1" justify="end">
          {menuItems.map((item) => {
            const activeAnchor = pathname === '/' && activeSection === item.id;
            const activeRoute = item.type === 'route' && routeActive.get(item.id);
            const isActive = activeAnchor || Boolean(activeRoute);

            return (
              <NavbarItem key={item.label} isActive={isActive}>
                <Link
                  href={item.href}
                  className={`
                  px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${
                    isActive
                      ? 'text-white bg-polibatam-navy shadow-md'
                      : 'text-gray-600 hover:text-polibatam-navy hover:bg-gray-100'
                  }
                `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </HeroNavbar>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-70 bg-white/90 backdrop-blur-xl px-6 pb-12 pt-24 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => {
                const activeAnchor = pathname === '/' && activeSection === item.id;
                const activeRoute = item.type === 'route' && routeActive.get(item.id);
                const isActive = activeAnchor || Boolean(activeRoute);

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`
                      w-full text-left
                      py-4 px-4 text-lg font-semibold rounded-2xl transition-all duration-300 flex items-center justify-between group
                      ${
                        isActive
                          ? 'text-white bg-polibatam-navy shadow-lg shadow-polibatam-navy/20'
                          : 'text-gray-800/80 bg-white/40 backdrop-blur-sm hover:bg-white/60'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleMenuItemPress(item)}
                  >
                    {item.label}
                    {isActive && <span className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
