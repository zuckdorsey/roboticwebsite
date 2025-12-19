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

import { useState, useEffect } from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <div className="border-b border-gray-100/50 md:border-none last:border-none">
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 md:py-0 md:mb-4 group text-left"
        disabled={!isMobile}
      >
        <h3 className="text-sm font-bold text-polibatam-navy uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-polibatam-orange to-polibatam-peach" />
          {title}
        </h3>
        <ChevronDown
          className={`w-4 h-4 text-polibatam-orange transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:h-auto md:opacity-100 ${isOpen ? 'max-h-64 opacity-100 mb-3' : 'max-h-0 opacity-0 md:max-h-none md:mb-0'}`}>
        <ul className="space-y-2.5">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-600 hover:text-polibatam-orange transition-all duration-300 text-sm flex items-center gap-2 group/link py-0.5"
              >
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-polibatam-orange" />
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">{item.name}</span>
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
    { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-purple-500 via-pink-500 to-orange-400' },
    { icon: Youtube, href: '#', label: 'YouTube', gradient: 'from-red-500 to-red-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', gradient: 'from-sky-400 to-sky-600' },
  ];

  const navigation = {
    program: [
      { name: 'About Us', href: '/#about' },
      { name: 'Curriculum', href: '/#curriculum' },
      { name: 'Facilities', href: '/#gallery' },
      { name: 'Faculty', href: '/#faculty' },
    ],
    community: [
      { name: 'Students', href: '/students' },
      { name: 'Alumni', href: '/#alumni' },
      { name: 'News & Events', href: '/blog' },
      { name: 'Partners', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Admissions', href: '#' },
      { name: 'Career', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-16 md:pt-20 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-polibatam-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-polibatam-navy/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-polibatam-peach/5 to-transparent rounded-full blur-3xl" />

        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-polibatam-orange/10 rounded-2xl rotate-12 hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-polibatam-navy/10 rounded-full hidden lg:block" />
        <div className="absolute top-40 left-1/3 w-3 h-3 bg-polibatam-orange/20 rounded-full hidden lg:block" />
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-polibatam-peach/30 rounded-full hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/50 p-6 md:p-10 lg:p-12 mb-8">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 mb-10 lg:mb-12">
            {/* Brand Section */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-14 h-14 bg-gradient-to-br from-polibatam-orange to-polibatam-peach rounded-2xl p-0.5 shadow-lg shadow-polibatam-orange/20">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Robotika Polibatam"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black bg-gradient-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
                    Teknik Robotika
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">Politeknik Negeri Batam</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Membentuk generasi inovator teknologi robotika yang unggul dan berdaya saing global melalui pendidikan berkualitas dan praktik industri terkini.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative w-11 h-11 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <FooterSection title="Program" links={navigation.program} />
              <FooterSection title="Community" links={navigation.community} />
              <FooterSection title="Support" links={navigation.support} />
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-polibatam-orange/30 hover:shadow-lg hover:shadow-polibatam-orange/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-polibatam-orange to-polibatam-peach flex items-center justify-center shrink-0 shadow-lg shadow-polibatam-orange/20 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium mb-0.5">Address</p>
                <p className="text-sm text-gray-800 font-semibold truncate">Jl. Ahmad Yani, Batam</p>
              </div>
            </a>

            <a
              href="tel:+627784698858"
              className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-polibatam-orange/30 hover:shadow-lg hover:shadow-polibatam-orange/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-polibatam-navy to-polibatam-navy/80 flex items-center justify-center shrink-0 shadow-lg shadow-polibatam-navy/20 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium mb-0.5">Phone</p>
                <p className="text-sm text-gray-800 font-semibold">+62 778 469858</p>
              </div>
            </a>

            <a
              href="mailto:robotika@polibatam.ac.id"
              className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-polibatam-orange/30 hover:shadow-lg hover:shadow-polibatam-orange/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-polibatam-peach to-polibatam-orange flex items-center justify-center shrink-0 shadow-lg shadow-polibatam-orange/20 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium mb-0.5">Email</p>
                <p className="text-sm text-gray-800 font-semibold truncate">robotika@polibatam.ac.id</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {currentYear} <span className="font-semibold text-polibatam-navy">Teknik Robotika Polibatam</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-polibatam-orange transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a href="#" className="hover:text-polibatam-orange transition-colors">Terms of Service</a>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <a
              href="https://polibatam.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-polibatam-orange transition-colors font-medium"
            >
              Polibatam.ac.id ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
