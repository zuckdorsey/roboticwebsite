'use client';

import HeroIllustration from './HeroIllustration';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="bg-polibatam-light min-h-[calc(100vh-80px)]">
      <div className="max-w-screen-xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none text-gray-900 uppercase tracking-tighter">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs md:text-sm text-gray-900 font-normal tracking-wider uppercase">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Content - Illustration (SVG component) */}
          <div className="flex-1 relative">
            <div className="w-full h-full">
              {/* Use the HeroIllustration SVG component for the flat vector */}
              <div className="max-w-[520px] mx-auto">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
