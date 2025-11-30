'use client';

import Image from 'next/image';
import { Card, CardBody, Chip, Button } from '@heroui/react';
import { HiAcademicCap, HiCog, HiExternalLink } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { aboutContent } from '@/data/about-content';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  return (
    <section id="about" className="py-16 md:py-24 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
      {/* Gradient Separator from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-polibatam-light via-polibatam-peach/20 to-transparent -z-10"></div>

      {/* Animated Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-peach/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-orange/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-polibatam-peach/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent px-4">
            {aboutContent.title}
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-polibatam-orange to-polibatam-peach mx-auto rounded-full"></div>
        </div>

        {/* Accreditation Cards */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {aboutContent.accreditations.map((accreditation, index) => (
            <div key={index} className="relative group w-full">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative w-full h-full border-none shadow-2xl overflow-hidden bg-transparent">
                {/* Background Image & Gradient */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={accreditation.certificateUrl}
                    alt={`${accreditation.institution} Certificate`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-polibatam-orange/90 to-polibatam-peach/90 backdrop-blur-sm"></div>
                </div>

                {/* Background Decorations */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 rounded-full bg-white/10 blur-3xl animate-pulse z-0"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-white/10 blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>

                <CardBody className="p-6 md:p-8 relative z-10">
                  <div className="flex flex-col items-center text-center gap-6">
                    {/* Icon Section */}
                    <div className="relative shrink-0">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin-slow dashed"></div>
                        <div className="absolute inset-4 border-4 border-white/30 rounded-full animate-reverse-spin dashed"></div>

                        {/* Center Circle */}
                        <div className="absolute inset-6 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <HiAcademicCap className="w-12 h-12 text-white drop-shadow-md" />
                        </div>

                        {/* Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-polibatam-orange text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          TERAKREDITASI
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-4 w-full">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs tracking-wider uppercase mb-2 backdrop-blur-sm">
                          {accreditation.institution}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-sm">
                          {accreditation.status}
                        </h2>
                        <p className="text-lg font-medium text-white/90 mt-1">
                          {accreditation.title}
                        </p>
                      </div>

                      <p className="text-sm text-white/80 leading-relaxed">
                        {accreditation.description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                            A
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-white/70 uppercase font-bold">Grade</p>
                            <p className="text-xs font-bold text-white">{accreditation.grade}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                            <HiCog className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] text-white/70 uppercase font-bold">Program</p>
                            <p className="text-xs font-bold text-white">{accreditation.program}</p>
                          </div>
                        </div>
                      </div>

                      {/* Softcopy Button */}
                      <div className="pt-2">
                        <Button
                          as="a"
                          href={accreditation.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-polibatam-orange font-bold shadow-lg hover:scale-105 transition-transform"
                          endContent={<HiExternalLink />}
                          size="sm"
                          radius="full"
                        >
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        {/* Main Content - Creative No-Card Layout */}
        <div
          className={`mb-12 md:mb-16 max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-10 w-72 h-72 bg-polibatam-orange/5 rounded-full blur-3xl animate-float" />
            <div className="absolute top-1/2 -left-10 w-64 h-64 bg-polibatam-peach/10 rounded-full blur-2xl" />

            {/* Content wrapper with gradient border */}
            <div className="relative border-l-4 border-polibatam-orange/30 pl-8 md:pl-16 space-y-12 md:space-y-16">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="relative group/para"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Paragraph number - large decorative */}
                  <div className="absolute -left-8 md:-left-16 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                    <div className="relative">
                      {/* Rotating ring */}
                      <div className="absolute inset-0 border-2 border-polibatam-orange/20 rounded-full group-hover/para:border-polibatam-orange/40 transition-all duration-500 group-hover/para:rotate-180 group-hover/para:scale-110" />

                      {/* Number */}
                      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold bg-linear-to-br from-polibatam-orange to-polibatam-peach bg-clip-text text-transparent">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-polibatam-orange/20 rounded-full blur-xl opacity-0 group-hover/para:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </div>

                  {/* Paragraph content with alternating layouts */}
                  <div className={`
                    relative
                    ${index % 2 === 0 ? 'pr-0 md:pr-20' : 'pl-0 md:pl-20'}
                  `}>
                    {/* Drop cap for first paragraph */}
                    {index === 0 && (
                      <div className="float-left mr-4 mb-2">
                        <div className="relative">
                          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-linear-to-br from-polibatam-orange to-polibatam-peach rounded-2xl shadow-lg group-hover/para:shadow-polibatam-orange/50 transition-all duration-500 group-hover/para:rotate-6">
                            <span className="text-4xl md:text-5xl font-bold text-white">
                              &quot;{paragraph.charAt(0)}&quot;
                            </span>
                          </div>
                          {/* Decorative corner accent */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-polibatam-orange rounded-tr-lg opacity-0 group-hover/para:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    )}

                    {/* Paragraph text */}
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 relative">
                      {/* Background highlight on hover */}
                      <span className="absolute inset-0 bg-linear-to-r from-polibatam-peach/0 via-polibatam-peach/5 to-polibatam-peach/0 rounded-lg opacity-0 group-hover/para:opacity-100 transition-opacity duration-500 -m-2 p-2" />

                      <span className="relative z-10">
                        {index === 0 ? paragraph.slice(1) : paragraph}
                      </span>
                    </p>

                    {/* Decorative quote or accent for alternating paragraphs */}
                    {index % 2 === 1 && (
                      <div className="absolute -right-4 top-0 text-6xl md:text-8xl font-serif text-polibatam-orange/10 leading-none hidden md:block">
                        "
                      </div>
                    )}

                    {/* Side accent line */}
                    <div className={`
                      absolute top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-polibatam-orange/30 to-transparent
                      opacity-0 group-hover/para:opacity-100 transition-opacity duration-500
                      ${index % 2 === 0 ? '-right-8 md:-right-12' : '-left-8 md:-left-12'}
                    `} />
                  </div>

                  {/* Connector line between paragraphs */}
                  {index < aboutContent.paragraphs.length - 1 && (
                    <div className="mt-10 md:mt-12 flex items-center gap-4">
                      {/* Animated dots */}
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-polibatam-orange animate-pulse" style={{ animationDelay: '0s' }} />
                        <div className="w-2 h-2 rounded-full bg-polibatam-peach animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 rounded-full bg-polibatam-orange/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>

                      {/* Gradient line */}
                      <div className="flex-1 h-px bg-linear-to-r from-polibatam-orange/30 via-polibatam-peach/50 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Program Educational Objectives (PEO) - No Card Layout */}
        {aboutContent.peo && (
          <div
            className={`mb-12 md:mb-16 max-w-6xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.018}px)` }}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-20 w-96 h-96 bg-polibatam-peach/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-polibatam-orange/5 rounded-full blur-3xl animate-pulse" />

              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left side - CDIO Logo - Sticky on desktop */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
                  {/* CDIO Logo Container - Sticky */}
                  <div className="relative group/logo w-full md:sticky md:top-8">
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-linear-to-br from-polibatam-orange/20 to-polibatam-peach/20 rounded-3xl blur-2xl opacity-50 group-hover/logo:opacity-75 transition-opacity duration-500" />

                    {/* Logo box */}
                    <div className="relative w-48 h-48 md:w-full md:h-auto md:aspect-square mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl flex items-center justify-center overflow-hidden border-2 border-polibatam-orange/30 group-hover/logo:border-polibatam-orange/50 transition-all duration-500 group-hover/logo:scale-105">

                      <div className="relative w-full h-full p-6 md:p-8">
                        <Image
                          src="/cdio.png"
                          alt="CDIO Initiative Logo"
                          fill
                          className="object-contain group-hover/logo:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 200px, (max-width: 1024px) 320px, 384px"
                          priority={false}
                        />
                      </div>

                      {/* Decorative corner accents */}
                      <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-polibatam-orange rounded-tl-2xl opacity-40 group-hover/logo:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-polibatam-orange rounded-br-2xl opacity-40 group-hover/logo:opacity-100 transition-opacity duration-300" />

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/logo:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </div>
                </div>

                {/* Right side - PEO Content */}
                <div className="md:col-span-8">
                  {/* Section Badge & Title */}
                  <div className="mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-polibatam-orange/10 to-polibatam-peach/10 rounded-full border border-polibatam-orange/30">
                      <div className="w-2 h-2 rounded-full bg-polibatam-orange animate-pulse" />
                      <span className="text-sm md:text-base font-bold text-polibatam-orange uppercase tracking-wide">
                        Educational Framework
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
                      {aboutContent.peo.title}
                    </h2>

                    {/* Decorative underline */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-20 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
                      <div className="h-1 w-10 bg-polibatam-peach/50 rounded-full" />
                      <div className="h-1 w-5 bg-polibatam-orange/30 rounded-full" />
                    </div>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {aboutContent.peo.introduction}
                    </p>
                  </div>

                  {/* PEO Objectives List - No Card Style */}
                  <div className="space-y-8 md:space-y-10">
                    {aboutContent.peo.objectives.map((objective, index) => (
                      <div
                        key={index}
                        className="group/peo relative"
                      >
                        {/* Vertical connector line */}
                        {index > 0 && (
                          <div className="absolute -top-4 left-8 w-0.5 h-4 bg-linear-to-b from-polibatam-orange/50 to-transparent" />
                        )}

                        <div className="flex gap-5 items-start relative">
                          {/* Decorative side accent */}
                          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-linear-to-b from-polibatam-orange/0 via-polibatam-orange/30 to-polibatam-orange/0 opacity-0 group-hover/peo:opacity-100 transition-opacity duration-500 rounded-full" />

                          {/* Number badge */}
                          <div className="relative shrink-0 pt-1">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br from-polibatam-orange to-polibatam-peach flex items-center justify-center shadow-xl group-hover/peo:scale-110 group-hover/peo:rotate-6 transition-all duration-500">
                              <span className="text-white font-black text-2xl md:text-3xl drop-shadow-lg">
                                {index + 1}
                              </span>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-polibatam-orange/50 rounded-2xl blur-xl opacity-0 group-hover/peo:opacity-100 transition-opacity duration-500 -z-10" />

                            {/* Corner accent */}
                            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-polibatam-orange rounded-tr-xl opacity-0 group-hover/peo:opacity-100 transition-opacity duration-300" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-2">
                            {/* PEO Code */}
                            <div className="mb-3">
                              <Chip
                                className="px-4 py-1.5 bg-polibatam-peach/20 text-polibatam-orange font-black text-base md:text-lg rounded-xl border-2 border-polibatam-orange/30 group-hover/peo:bg-polibatam-orange/20 group-hover/peo:border-polibatam-orange/50 group-hover/peo:scale-105 transition-all duration-300"
                                startContent={<div className="w-1.5 h-1.5 rounded-full bg-polibatam-orange" />}
                              >
                                {objective.code}
                              </Chip>
                            </div>

                            {/* Description */}
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover/peo:text-gray-900 transition-colors duration-300">
                              {/* Highlight effect on hover */}
                              <span className="relative">
                                <span className="absolute inset-0 bg-linear-to-r from-polibatam-peach/0 via-polibatam-peach/10 to-polibatam-peach/0 opacity-0 group-hover/peo:opacity-100 transition-opacity duration-500 -mx-2 px-2 rounded-lg" />
                                <span className="relative z-10">{objective.description}</span>
                              </span>
                            </p>

                            {/* Bottom accent line */}
                            <div className="mt-4 h-0.5 bg-linear-to-r from-polibatam-orange via-polibatam-peach to-transparent w-0 group-hover/peo:w-full transition-all duration-700 rounded-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom decorative elements */}
                  <div className="mt-10 flex items-center gap-4">
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full bg-polibatam-orange animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-px bg-linear-to-r from-polibatam-orange/40 via-polibatam-peach/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
