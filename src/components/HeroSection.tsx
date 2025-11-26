'use client';

import { HeroIllustration } from './HeroIllustration';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="bg-polibatam-light min-h-screen pt-20">
      <div className="max-w-[1720px] mx-auto px-8 md:px-10 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="contents md:flex flex-1 lg:flex-[0.8] w-full md:w-auto md:space-y-6 md:flex-col md:justify-center">
          <div className="order-1 md:order-0 space-y-6 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 uppercase tracking-tight font-['Roboto_Slab'] animate-fade-in-up drop-shadow-sm">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl animate-fade-in-up-delay">
              {subtitle}
              </p>
            )}
          </div>

          {/* Accreditation Buttons */}
          <div className="order-3 md:order-0 flex flex-wrap gap-4 pt-4 animate-fade-in-up-delay w-full" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center px-8 py-3 bg-polibatam-navy text-white rounded-full font-medium hover:scale-105 transition-transform cursor-default shadow-lg">
              Akreditasi Unggul
            </div>
            <div className="flex items-center justify-center px-8 py-3 bg-white text-polibatam-navy border border-gray-200 rounded-full font-medium hover:scale-105 transition-transform cursor-default shadow-sm hover:shadow-md">
              Akreditasi Internasional
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="order-2 md:order-0 flex-1 lg:flex-[1.5] w-full md:w-auto flex items-center justify-center md:justify-end">
          <div className="w-[calc(100%+4rem)] -mx-8 md:w-full md:mx-0 max-w-none md:max-w-4xl lg:max-w-6xl xl:max-w-360 lg:-mr-32 md:-mt-16 lg:-mt-32">
            <HeroIllustration />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}