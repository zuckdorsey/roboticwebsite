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
        <div className="flex-1 w-full md:w-auto space-y-6 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 uppercase tracking-tight font-['Roboto_Slab']">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
          {subtitle}
          </p>
        )}
        </div>

        {/* Right Illustration */}
        <div className="flex-1 w-full md:w-auto flex items-center justify-center md:justify-end">
        <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <HeroIllustration />
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
