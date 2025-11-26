'use client';

import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    program: [
      { name: 'About Us', href: '#about' },
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Facilities', href: '#facilities' },
      { name: 'Faculty', href: '#faculty' },
    ],
    community: [
      { name: 'Students', href: '#students' },
      { name: 'Alumni', href: '#alumni' },
      { name: 'News & Events', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Admissions', href: '#' },
      { name: 'Career', href: '#' },
    ]
  };

  return (
    <footer className="relative bg-polibatam-navy text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-polibatam-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black/20 to-transparent" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-polibatam-peach/5 rounded-full blur-3xl" />
      </div>

      {/* Top Border Gradient */}
      <div className="h-1 w-full bg-linear-to-r from-polibatam-orange via-polibatam-peach to-polibatam-orange" />

      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-block group">
              <div className="flex items-center gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
              src="/logo.png" 
              alt="Polibatam Robotics Logo" 
              className="w-full h-full object-contain"
              />
              </div>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Pioneering the future of robotics technology education in Indonesia. 
              Empowering students with hands-on skills and innovation-driven learning.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-gray-300 group">
                <HiLocationMarker className="w-6 h-6 text-polibatam-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                  Jl. Ahmad Yani, Batam Kota,<br />
                  Kota Batam, Kepulauan Riau 29461
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group">
                <HiMail className="w-6 h-6 text-polibatam-orange shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@polibatam.ac.id" className="text-sm group-hover:text-white transition-colors">
                  info@polibatam.ac.id
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group">
                <HiPhone className="w-6 h-6 text-polibatam-orange shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+62778469858" className="text-sm group-hover:text-white transition-colors">
                  +62 778 469858
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Program Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-polibatam-orange rounded-full"></span>
                Program
              </h4>
              <ul className="space-y-4">
                {footerLinks.program.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-polibatam-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <HiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-polibatam-orange rounded-full"></span>
                Community
              </h4>
              <ul className="space-y-4">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-polibatam-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <HiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / Connect */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-polibatam-orange rounded-full"></span>
                Connect
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated with our latest news and achievements.
              </p>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: BsFacebook, href: '#', label: 'Facebook' },
                  { icon: BsTwitter, href: '#', label: 'Twitter' },
                  { icon: BsInstagram, href: '#', label: 'Instagram' },
                  { icon: BsLinkedin, href: '#', label: 'LinkedIn' },
                  { icon: BsYoutube, href: '#', label: 'YouTube' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-polibatam-orange text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} <span className="text-polibatam-orange font-semibold">Polibatam Robotics</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
