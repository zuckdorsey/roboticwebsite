'use client';

import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

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
    <footer className="bg-white py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden">
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
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 lg:p-16">
          {/* Top Section: Logo, Description, Social */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Logo & Description */}
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-polibatam-navy mb-4">
                  Robotika Polibatam
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
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

              {/* Navigation Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {/* Program Column */}
                <div>
                  <h3 className="text-sm font-semibold text-polibatam-navy uppercase tracking-wider mb-4">
                    Program
                  </h3>
                  <ul className="space-y-3">
                    {navigation.program.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-polibatam-orange transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Community Column */}
                <div>
                  <h3 className="text-sm font-semibold text-polibatam-navy uppercase tracking-wider mb-4">
                    Community
                  </h3>
                  <ul className="space-y-3">
                    {navigation.community.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-polibatam-orange transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Column */}
                <div>
                  <h3 className="text-sm font-semibold text-polibatam-navy uppercase tracking-wider mb-4">
                    Support
                  </h3>
                  <ul className="space-y-3">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-600 hover:text-polibatam-orange transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Copyright & Legal Links */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
              <p>© {currentYear} Robotika Polibatam. All rights reserved.</p>
              <div className="flex flex-wrap gap-2 md:gap-6">
                <Link href="#" className="hover:text-polibatam-orange transition-colors">
                  Privacy Policy
                </Link>
                <span className="hidden md:inline">–</span>
                <Link href="#" className="hover:text-polibatam-orange transition-colors">
                  Terms of Service
                </Link>
                <span className="hidden md:inline">–</span>
                <Link href="#" className="hover:text-polibatam-orange transition-colors">
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
