'use client';

import { HeroIllustration } from './HeroIllustration';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="bg-gradient-to-br from-polibatam-light via-white to-orange-50/30 min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-polibatam-orange/20 via-polibatam-peach/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-60 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-polibatam-navy/10 via-polibatam-peach/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/30 via-transparent to-blue-100/20 rounded-full blur-3xl" />

        {/* Floating geometric shapes - Top Left */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-12 hidden lg:block"
        >
          <div className="w-20 h-20 border-4 border-polibatam-orange/30 rounded-2xl" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 left-28 hidden lg:block"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-polibatam-peach/40 to-polibatam-orange/20 rounded-lg rotate-45" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-72 left-8 hidden lg:block"
        >
          <div className="w-4 h-4 bg-polibatam-orange/40 rounded-full" />
        </motion.div>

        {/* Floating geometric shapes - Top Right */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-28 right-16 hidden lg:block"
        >
          <div className="w-24 h-24 border-4 border-polibatam-navy/20 rounded-full" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-56 right-32 hidden lg:block"
        >
          <div className="w-12 h-12 border-4 border-dashed border-polibatam-orange/30 rounded-xl rotate-12" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-8 hidden lg:block"
        >
          <div className="w-6 h-6 bg-gradient-to-br from-polibatam-navy/30 to-polibatam-navy/10 rounded-md" />
        </motion.div>

        {/* Floating geometric shapes - Bottom Left */}
        <motion.div
          animate={{ rotate: 180, y: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-16 hidden lg:block"
        >
          <div className="w-16 h-16 border-4 border-polibatam-peach/40 rounded-2xl" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-48 left-8 hidden lg:block"
        >
          <div className="w-5 h-5 bg-polibatam-navy/30 rounded-full" />
        </motion.div>

        {/* Floating geometric shapes - Bottom Right */}
        <motion.div
          animate={{ rotate: -180 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 right-12 hidden lg:block"
        >
          <div className="w-28 h-28 border-4 border-polibatam-navy/15 rounded-3xl" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-44 right-36 hidden lg:block"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-polibatam-orange/30 to-polibatam-peach/20 rounded-xl rotate-12" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-60 right-20 hidden lg:block"
        >
          <div className="w-3 h-3 bg-polibatam-peach/50 rounded-full" />
        </motion.div>

        {/* Connecting lines / dots pattern */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-polibatam-navy/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Decorative curved lines */}
        <svg className="absolute top-20 left-0 w-64 h-64 hidden lg:block opacity-20" viewBox="0 0 200 200">
          <motion.path
            d="M 20,100 Q 100,20 180,100"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#FFB088" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute bottom-20 right-0 w-64 h-64 hidden lg:block opacity-20" viewBox="0 0 200 200">
          <motion.path
            d="M 20,100 Q 100,180 180,100"
            stroke="url(#gradient2)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B1F4A" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Responsive grid: stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center md:items-end min-h-[60vh] md:min-h-[70vh]">
          {/* Left Content - centered on mobile, left-aligned on desktop */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center md:justify-end w-full text-center md:text-left pt-8 md:pt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-polibatam-orange/20 shadow-lg shadow-polibatam-orange/5 mx-auto md:mx-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-polibatam-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-polibatam-orange" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-polibatam-navy">
                  Program Studi Pertama di Indonesia 🇮🇩
                </span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-3 mb-4 justify-center md:justify-start"
                >
                  <div className="hidden md:block h-1 w-12 bg-gradient-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-polibatam-navy/60 uppercase tracking-widest">
                    Learn
                  </span>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight"
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-polibatam-orange via-[#FF8F4C] to-polibatam-peach bg-clip-text text-transparent">
                      ROBOTICS
                    </span>
                    {/* Shimmer effect */}
                    <motion.span
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                  </span>
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-polibatam-navy leading-[1] tracking-tight mt-2"
                >
                  TECHNOLOGY
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-3 mt-4 justify-center md:justify-start"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-polibatam-navy/50">
                    in
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-polibatam-navy">
                    POLIBATAM
                  </span>
                  <div className="hidden md:block h-1 w-16 bg-gradient-to-r from-polibatam-navy/30 to-transparent rounded-full" />
                </motion.div>
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0"
                >
                  {subtitle}
                </motion.p>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              >
                <a
                  href="#about"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-polibatam-orange to-polibatam-peach text-white font-semibold rounded-xl shadow-lg shadow-polibatam-orange/30 hover:shadow-xl hover:shadow-polibatam-orange/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Program</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-polibatam-navy font-semibold rounded-xl border border-gray-200 hover:border-polibatam-orange/30 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>View Curriculum</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Illustration - large and prominent on mobile */}
          <div className="md:col-span-5 lg:col-span-6 flex items-center md:items-end justify-center w-full mt-8 md:mt-0">
            {/* Illustration wrapper with organic decorations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[85vw] sm:max-w-md md:max-w-full lg:max-w-2xl mx-auto group"
            >
              {/* Floating gradient orbs */}
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 w-20 h-20 bg-gradient-to-br from-polibatam-orange/30 to-polibatam-peach/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-6 w-24 h-24 bg-gradient-to-br from-polibatam-navy/20 to-polibatam-peach/15 rounded-full blur-xl"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-polibatam-peach/25 to-transparent rounded-full blur-lg hidden lg:block"
              />

              {/* Decorative floating dots */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 left-1/4 w-3 h-3 bg-polibatam-orange rounded-full shadow-lg shadow-polibatam-orange/30"
              />
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 right-1/4 w-2 h-2 bg-polibatam-navy rounded-full shadow-lg shadow-polibatam-navy/30"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-4 w-2 h-2 bg-polibatam-peach rounded-full hidden sm:block"
              />

              {/* Main image container */}
              <div className="relative">
                {/* Soft shadow/glow underneath */}
                <div className="absolute inset-x-4 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent rounded-b-3xl blur-xl" />

                {/* Image with clean rounded corners */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-gray-300/50 group-hover:shadow-3xl group-hover:shadow-polibatam-orange/20 transition-all duration-500 bg-white">
                  <HeroIllustration className="w-full h-auto object-contain block transform group-hover:scale-[1.02] transition-transform duration-700" />

                  {/* Subtle overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-polibatam-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Ring decoration */}
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-2 border-polibatam-orange/30 rounded-full hidden sm:block" />
                <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-polibatam-navy/20 rounded-full hidden sm:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
