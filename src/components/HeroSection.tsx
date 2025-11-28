'use client';

import { HeroIllustration } from './HeroIllustration';

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

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
        {/* Responsive grid: stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Left Content - centered on mobile, left-aligned on desktop */}
          <div className="md:col-span-6 flex flex-col justify-end w-full text-center md:text-left">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 uppercase tracking-tight font-['Roboto_Slab']">
                {title}
              </h1>

              {/* Accreditation buttons removed - restored original clean layout */}

              {subtitle && (
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Illustration - large and prominent on mobile */}
          <div className="md:col-span-6 flex items-end justify-center w-full">
            {/* Illustration wrapper - keeps outline fully inside viewport and scales responsively */}
            <div className="relative w-full max-w-[90vw] sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl p-4 sm:p-6 mx-auto overflow-visible">
              {/* Outline scales down on small screens and returns to full scale on md+; origin-center keeps it contained */}
              <div className="absolute inset-0 rounded-3xl border-2 sm:border-4 md:border-6 border-polibatam-orange/20 shadow-lg pointer-events-none transform origin-center scale-90 sm:scale-95 md:scale-100" />

              <div className="relative z-10 w-full h-auto overflow-hidden rounded-2xl">
                <HeroIllustration className="w-full h-auto object-contain block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
