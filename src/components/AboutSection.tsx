'use client';

import { Card, Badge, Progress } from 'flowbite-react';
import { HiInformationCircle, HiLightBulb, HiAcademicCap, HiCog, HiSparkles, HiTrendingUp, HiCheckCircle } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { aboutContent } from '@/data/about-content';

interface AboutHighlight {
  title: string;
  value: string;
  description: string;
}

interface AboutSectionProps {
  // Props tidak diperlukan lagi karena data diambil dari about-content
}

export default function AboutSection({}: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate highlights every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % aboutContent.highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleHighlightSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setActiveHighlightIndex((prev) => (prev + 1) % aboutContent.highlights.length);
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setActiveHighlightIndex((prev) => (prev - 1 + aboutContent.highlights.length) % aboutContent.highlights.length);
    }
  };

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
          {/* <Badge color="warning" size="lg" className="mb-4 px-4 md:px-6 py-2 backdrop-blur-sm bg-polibatam-peach/60 border border-polibatam-peach">
            <HiSparkles className="mr-2 h-4 w-4 animate-pulse" />
            Discover Our Program
          </Badge> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent px-4">
            {aboutContent.title}
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-polibatam-orange to-polibatam-peach mx-auto rounded-full"></div>
        </div>

        {/* Highlights Section with Stacked Cards for Mobile */}
        {/* Mobile: Stacked Cards Layout with Swipe & Auto-rotate */}
        <div 
          className={`md:hidden relative mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{ height: `${aboutContent.highlights.length * 80 + 300}px` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleHighlightSwipe}
        >
          {/* Pagination Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            {aboutContent.highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveHighlightIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === activeHighlightIndex 
                    ? 'bg-polibatam-orange w-8' 
                    : 'bg-gray-300 hover:bg-polibatam-peach'
                }`}
              />
            ))}
          </div>

          {aboutContent.highlights.map((highlight, index) => {
            const icons = [HiAcademicCap, HiLightBulb, HiCog];
            const Icon = icons[index % icons.length];
            const gradients = [
              'from-polibatam-orange to-polibatam-peach',
              'from-polibatam-peach to-polibatam-orange',
              'from-polibatam-orange/80 to-polibatam-peach/80'
            ];
            
            const isActive = index === activeHighlightIndex;
            const stackOffset = Math.abs(index - activeHighlightIndex);
            
            // Calculate parallax offset based on scroll
            const parallaxOffset = (scrollY * 0.05 * (index + 1)) % 100;
            
            return (
              <div
                key={index}
                onClick={() => setActiveHighlightIndex(index)}
                className="absolute w-full group transition-all duration-700 ease-out cursor-pointer"
                style={{ 
                  top: isActive ? `${parallaxOffset}px` : `${stackOffset * 40 + parallaxOffset}px`,
                  transform: isActive 
                    ? `scale(1) translateY(0px) rotateX(0deg)` 
                    : `scale(${1 - stackOffset * 0.05}) translateY(${stackOffset * 15}px) rotateX(${stackOffset * 2}deg)`,
                  zIndex: isActive ? 100 : aboutContent.highlights.length - stackOffset,
                  transformOrigin: 'top center',
                  opacity: isActive ? 1 : 1 - stackOffset * 0.15,
                  filter: isActive ? 'none' : `blur(${stackOffset * 0.5}px)`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <Card className={`border-none shadow-lg bg-white/70 backdrop-blur-xl relative overflow-hidden transition-all duration-700 ease-out rounded-3xl ${isActive ? 'shadow-2xl' : ''}`}>
                  {/* Liquid Glass Effect */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl"></div>
                  <div className={`absolute inset-0 bg-linear-to-br ${gradients[index]} ${isActive ? 'opacity-20 animate-pulse' : 'opacity-0'} group-hover:opacity-10 transition-all duration-700 ease-out rounded-3xl`}></div>
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${gradients[index]} ${isActive ? 'opacity-50' : 'opacity-20'} group-hover:opacity-40 transition-all duration-700 ease-out blur-sm`}></div>
                  
                  {/* Shimmer Effect */}
                  {isActive && (
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-3xl"></div>
                  )}
                  
                  <div className="flex flex-col items-center relative z-10 p-4">
                    {/* Icon with Gradient Background and Animation */}
                    <div className={`p-3 rounded-3xl bg-linear-to-br ${gradients[index]} mb-3 ${isActive ? 'scale-110 rotate-6 animate-bounce' : ''} group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out shadow-lg`}>
                      <Icon className={`h-8 w-8 text-white ${isActive ? 'rotate-12 animate-spin-slow' : ''} transition-transform duration-700 ease-out group-hover:rotate-12`} />
                    </div>
                    
                    <Badge color="gray" className={`mb-2 uppercase tracking-wider text-xs backdrop-blur-sm bg-polibatam-light/80 rounded-full transition-all duration-500 ${isActive ? 'scale-110 animate-pulse' : ''} group-hover:scale-105`}>
                      {highlight.title}
                    </Badge>
                    
                    <p className={`text-3xl font-black mb-2 transition-all duration-700 ease-out ${isActive ? 'text-polibatam-orange scale-110 animate-pulse' : 'text-polibatam-navy'} group-hover:text-polibatam-orange group-hover:scale-110`}>
                      {highlight.value}
                    </p>
                    
                    <p className="text-sm text-gray-600 font-medium text-center transition-all duration-500 group-hover:text-gray-800">
                      {highlight.description}
                    </p>
                    
                    {/* Bottom Glow Effect */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-linear-to-r ${gradients[index]} ${isActive ? 'opacity-60' : 'opacity-0'} group-hover:opacity-60 transition-all duration-700 ease-out blur-sm rounded-full`}></div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Desktop: Grid Layout with Floating & Parallax Animation */}
        <div className={`hidden md:grid grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {aboutContent.highlights.map((highlight, index) => {
            const icons = [HiAcademicCap, HiLightBulb, HiCog];
            const Icon = icons[index % icons.length];
            const gradients = [
              'from-polibatam-orange to-polibatam-peach',
              'from-polibatam-peach to-polibatam-orange',
              'from-polibatam-orange/80 to-polibatam-peach/80'
            ];
            
            // Parallax effect for desktop - different speed per card
            const desktopParallax = scrollY * (0.02 + index * 0.01);
            
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 animate-float ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  animationDelay: `${index * 0.5}s`,
                  transform: `translateY(${desktopParallax}px)`
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl bg-white/70 backdrop-blur-xl relative overflow-hidden transition-all duration-700 ease-out rounded-3xl group-hover:animate-glow">
                  {/* Liquid Glass Effect */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl"></div>
                  <div className={`absolute inset-0 bg-linear-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out rounded-3xl`}></div>
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${gradients[index]} opacity-20 group-hover:opacity-40 transition-all duration-700 ease-out blur-sm`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-polibatam-orange/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-polibatam-peach/40 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute bottom-6 left-8 w-2.5 h-2.5 bg-polibatam-orange/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.6s' }}></div>
                  
                  <div className="flex flex-col items-center relative z-10 p-4 md:p-6">
                    {/* Icon with Gradient Background and Animation */}
                    <div className={`p-3 md:p-4 rounded-3xl bg-linear-to-br ${gradients[index]} mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out shadow-lg group-hover:shadow-2xl`}>
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:animate-spin-slow" />
                    </div>
                    
                    <Badge color="gray" className="mb-2 md:mb-3 uppercase tracking-wider text-xs backdrop-blur-sm bg-polibatam-light/80 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:animate-pulse">
                      {highlight.title}
                    </Badge>
                    
                    <p className="text-3xl md:text-4xl font-black text-polibatam-navy mb-2 group-hover:text-polibatam-orange transition-all duration-700 ease-out group-hover:scale-110">
                      {highlight.value}
                    </p>
                    
                    <p className="text-sm text-gray-600 font-medium text-center transition-all duration-500 group-hover:text-gray-800">
                      {highlight.description}
                    </p>
                    
                    {/* Bottom Glow Effect */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-linear-to-r ${gradients[index]} opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out blur-sm rounded-full`}></div>
                  </div>
                </Card>
              </div>
            );
          })}
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
                              {paragraph.charAt(0)}
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
                    {/* CDIO Image Logo */}
                    <div className="relative w-full h-full p-6 md:p-8">
                    <img 
                      src="cdio.png" 
                      alt="CDIO Initiative Logo"
                      className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform duration-500"
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
                              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-polibatam-peach/20 text-polibatam-orange font-black text-base md:text-lg rounded-xl border-2 border-polibatam-orange/30 group-hover/peo:bg-polibatam-orange/20 group-hover/peo:border-polibatam-orange/50 group-hover/peo:scale-105 transition-all duration-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-polibatam-orange" />
                                {objective.code}
                              </span>
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

        {/* Vision & Mission - No Card Layout */}
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: `translateY(${scrollY * 0.025}px)` }}
        >
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-20 w-80 h-80 bg-polibatam-orange/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-polibatam-peach/5 rounded-full blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Vision */}
              <div className="group/vision relative">
                {/* Side gradient accent */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-polibatam-orange/0 via-polibatam-orange/40 to-polibatam-orange/0 rounded-full" />
                
                <div className="relative pl-6">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-polibatam-orange to-polibatam-peach rounded-2xl shadow-xl group-hover/vision:scale-110 group-hover/vision:rotate-6 transition-all duration-500">
                      <HiLightBulb className="h-8 w-8 md:h-10 md:w-10 text-white transition-transform duration-500 group-hover/vision:rotate-12" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-polibatam-orange/40 rounded-2xl blur-xl opacity-0 group-hover/vision:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent group-hover/vision:scale-105 transition-transform duration-500 origin-left">
                    {aboutContent.vision.title}
                  </h3>
                  
                  {/* Decorative underline */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-16 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
                    <div className="h-1 w-8 bg-polibatam-peach/50 rounded-full" />
                    <div className="h-1 w-4 bg-polibatam-orange/30 rounded-full" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover/vision:text-gray-900 transition-colors duration-300">
                    {/* Highlight background on hover */}
                    <span className="relative">
                      <span className="absolute inset-0 bg-linear-to-r from-polibatam-peach/0 via-polibatam-peach/5 to-polibatam-peach/0 opacity-0 group-hover/vision:opacity-100 transition-opacity duration-500 -mx-2 px-2 rounded-lg" />
                      <span className="relative z-10">{aboutContent.vision.description}</span>
                    </span>
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 bg-linear-to-r from-polibatam-orange via-polibatam-peach to-transparent w-0 group-hover/vision:w-full transition-all duration-700 rounded-full" />
                </div>
              </div>
              
              {/* Mission */}
              <div className="group/mission relative">
                {/* Side gradient accent */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-polibatam-peach/0 via-polibatam-peach/40 to-polibatam-peach/0 rounded-full" />
                
                <div className="relative pl-6">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-polibatam-peach to-polibatam-orange rounded-2xl shadow-xl group-hover/mission:scale-110 group-hover/mission:rotate-6 transition-all duration-500">
                      <HiCog className="h-8 w-8 md:h-10 md:w-10 text-white transition-transform duration-500 group-hover/mission:rotate-180" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-polibatam-peach/40 rounded-2xl blur-xl opacity-0 group-hover/mission:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent group-hover/mission:scale-105 transition-transform duration-500 origin-left">
                    {aboutContent.mission.title}
                  </h3>
                  
                  {/* Decorative underline */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-16 bg-linear-to-r from-polibatam-peach to-polibatam-orange rounded-full" />
                    <div className="h-1 w-8 bg-polibatam-orange/50 rounded-full" />
                    <div className="h-1 w-4 bg-polibatam-peach/30 rounded-full" />
                  </div>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover/mission:text-gray-900 transition-colors duration-300">
                    {/* Highlight background on hover */}
                    <span className="relative">
                      <span className="absolute inset-0 bg-linear-to-r from-polibatam-orange/0 via-polibatam-orange/5 to-polibatam-orange/0 opacity-0 group-hover/mission:opacity-100 transition-opacity duration-500 -mx-2 px-2 rounded-lg" />
                      <span className="relative z-10">{aboutContent.mission.description}</span>
                    </span>
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 bg-linear-to-r from-polibatam-peach via-polibatam-orange to-transparent w-0 group-hover/mission:w-full transition-all duration-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
