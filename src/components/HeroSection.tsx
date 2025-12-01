'use client';

import { HeroIllustration } from './HeroIllustration';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="bg-polibatam-light min-h-screen pt-20 relative overflow-visible">
      {/* Decorative Frame Elements - visible on all screens for consistency */}
      <div className="absolute top-40 left-6 w-44 h-44 border-t-4 border-l-4 border-polibatam-orange opacity-20 rounded-tl-3xl -rotate-3 hidden lg:block" />
      <div className="absolute top-52 left-20 w-28 h-28 border-t-2 border-l-2 border-polibatam-peach opacity-35 rounded-tl-2xl hidden lg:block" />
      <div className="absolute top-36 right-8 w-40 h-40 border-r-4 border-t-4 border-polibatam-navy opacity-18 rounded-tr-3xl rotate-6 hidden lg:block" />
      <div className="absolute top-48 right-28 w-24 h-24 border-r-2 border-t-2 border-polibatam-orange opacity-28 rounded-tr-2xl hidden lg:block" />
      <div className="absolute bottom-28 left-8 w-36 h-36 border-l-4 border-b-4 border-polibatam-orange opacity-22 rounded-bl-3xl rotate-3 hidden lg:block" />
      <div className="absolute bottom-40 left-24 w-20 h-20 border-l-2 border-b-2 border-polibatam-navy opacity-30 rounded-bl-2xl hidden lg:block" />
      <div className="absolute bottom-24 right-10 w-48 h-48 border-r-4 border-b-4 border-polibatam-navy opacity-25 rounded-br-3xl -rotate-2 hidden lg:block" />
      <div className="absolute bottom-36 right-32 w-24 h-24 border-r-2 border-b-2 border-polibatam-peach opacity-40 rounded-br-2xl rotate-12 hidden lg:block" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Responsive grid: stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 items-center md:items-end min-h-[60vh] md:min-h-[70vh]">
          {/* Left Content - centered on mobile, left-aligned on desktop */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center md:justify-end w-full text-center md:text-left pt-8 md:pt-0">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-polibatam-navy block mb-3 sm:mb-4"
                >
                  LEARN
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-linear-to-r from-polibatam-orange via-[#FF8F4C] to-polibatam-peach bg-clip-text text-transparent block mb-3 sm:mb-4"
                >
                  ROBOTICS TECHNOLOGY
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-polibatam-navy block"
                >
                  IN POLIBATAM
                </motion.span>
              </h1>

              {/* Accreditation buttons removed - restored original clean layout */}

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>

          {/* Right Illustration - large and prominent on mobile */}
          <div className="md:col-span-5 lg:col-span-6 flex items-center md:items-end justify-center w-full mt-8 md:mt-0">
            {/* Illustration wrapper - keeps outline fully inside viewport and scales responsively */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[85vw] sm:max-w-md md:max-w-full lg:max-w-2xl p-4 sm:p-6 mx-auto overflow-visible"
            >
              {/* Outline scales down on small screens and returns to full scale on md+; origin-center keeps it contained */}
              <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] border-2 sm:border-4 border-polibatam-orange/20 shadow-2xl shadow-polibatam-orange/10 pointer-events-none transform origin-center scale-95 sm:scale-100" />

              <div className="relative z-10 w-full h-auto overflow-hidden rounded-2xl sm:rounded-3xl transform hover:scale-[1.02] transition-transform duration-500">
                <HeroIllustration className="w-full h-auto object-contain block drop-shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
