'use client';

import { useState, useEffect } from 'react';
import { Twitter, Instagram, Linkedin, Github, ChevronDown } from 'lucide-react';
import { Link } from '@heroui/react';

interface FooterSectionProps {
  title: string;
  links: { name: string; href: string }[];
}

function FooterSection({ title, links }: FooterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleOpen = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="border-b border-gray-100 md:border-none last:border-none">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between py-4 md:py-0 md:mb-4 group text-left"
        disabled={!isMobile}
      >
        <h3 className="text-sm font-semibold text-polibatam-navy uppercase tracking-wider">
          {title}
        </h3>
        <ChevronDown
          className={`w-4 h-4 text-polibatam-navy transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:h-auto md:opacity-100 ${isOpen ? 'max-h-64 opacity-100 mb-4' : 'max-h-0 opacity-0 md:max-h-none md:mb-0'
          }`}
      >
        <ul className="space-y-3 pb-2 md:pb-0">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-600 hover:text-polibatam-orange transition-colors text-sm block py-1 md:py-0"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const navigation = {
    program: [
      { name: 'About Us', href: '#about' },
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Facilities', href: '#facilities' },
      { name: 'Faculty', href: '#faculty' },
    ],
    community: [
      { name: 'Students', href: '#students' },
      { name: 'Alumni', href: '#alumni' },
      { name: 'News & Events', href: '#blog' },
      { name: 'Partners', href: '#partners' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Admissions', href: '#admissions' },
      { name: 'Career', href: '#career' },
    ],
  };

  return (
    <footer className="bg-white py-12 md:py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative Frame Elements - Abstract & Dynamic */}
      <div className="absolute top-6 left-6 w-48 h-48 border-t-4 border-l-4 border-polibatam-orange opacity-15 rounded-tl-3xl hidden lg:block -rotate-2"></div>
      <div className="absolute top-16 left-24 w-28 h-28 border-t-2 border-l-2 border-polibatam-navy opacity-25 rounded-tl-2xl hidden lg:block"></div>

      <div className="absolute top-10 right-8 w-40 h-40 border-r-4 border-t-4 border-polibatam-navy opacity-20 rounded-tr-3xl hidden lg:block rotate-3"></div>
      <div className="absolute top-6 right-28 w-24 h-24 border-r-2 border-t-2 border-polibatam-peach opacity-35 rounded-tr-2xl hidden lg:block"></div>

      <div className="absolute bottom-6 left-10 w-36 h-36 border-l-4 border-b-4 border-polibatam-orange opacity-20 rounded-bl-3xl hidden lg:block rotate-6"></div>
      <div className="absolute bottom-16 left-28 w-20 h-20 border-l-2 border-b-2 border-polibatam-peach opacity-40 rounded-bl-2xl hidden lg:block -rotate-3"></div>

      <div className="absolute bottom-8 right-6 w-52 h-52 border-r-4 border-b-4 border-polibatam-navy opacity-15 rounded-br-3xl hidden lg:block"></div>
      <div className="absolute bottom-24 right-24 w-24 h-24 border-r-2 border-b-2 border-polibatam-orange opacity-30 rounded-br-2xl hidden lg:block rotate-12"></div>

      {/* Abstract circles and dots */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-polibatam-peach/30 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-polibatam-orange/20 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-polibatam-navy/15 rounded-full hidden lg:block"></div>

      <div className="max-w-[1720px] mx-auto relative z-10">
        {/* Main Footer Container */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12 lg:p-16">
          {/* Top Section: Logo, Description, Social */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
              {/* Logo & Description */}
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-polibatam-navy mb-4">
                  Robotika Polibatam
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  Membentuk generasi inovator teknologi robotika yang unggul dan berdaya saing global melalui pendidikan berkualitas dan praktik industri terkini.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-polibatam-light hover:bg-polibatam-peach flex items-center justify-center transition-all hover:scale-110 group"
                    >
                      <social.icon className="w-5 h-5 text-polibatam-navy group-hover:text-polibatam-orange transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Columns - Accordion on Mobile */}
              <div className="w-full lg:w-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 lg:gap-12">
                <FooterSection title="Program" links={navigation.program} />
                <FooterSection title="Community" links={navigation.community} />
                <FooterSection title="Support" links={navigation.support} />
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal Links */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
              <p className="text-center md:text-left">© {currentYear} Robotika Polibatam. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                <Link href="#" className="hover:text-polibatam-orange transition-colors text-sm">
                  Privacy Policy
                </Link>
                <span className="hidden md:inline">–</span>
                <Link href="#" className="hover:text-polibatam-orange transition-colors text-sm">
                  Terms of Service
                </Link>
                <span className="hidden md:inline">–</span>
                <Link href="#" className="hover:text-polibatam-orange transition-colors text-sm">
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
