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

  useEffect(() => {
    setIsVisible(true);
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
          {/* <Badge color="warning" size="lg" className="mb-4 px-4 md:px-6 py-2 backdrop-blur-sm bg-polibatam-peach/60 border border-polibatam-peach">
            <HiSparkles className="mr-2 h-4 w-4 animate-pulse" />
            Discover Our Program
          </Badge> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent px-4">
            {aboutContent.title}
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-polibatam-orange to-polibatam-peach mx-auto rounded-full"></div>
        </div>

        {/* Highlights Grid with Modern Liquid Glass Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {aboutContent.highlights.map((highlight, index) => {
            const icons = [HiAcademicCap, HiLightBulb, HiCog];
            const Icon = icons[index % icons.length];
            const gradients = [
              'from-polibatam-orange to-polibatam-peach',
              'from-polibatam-peach to-polibatam-orange',
              'from-polibatam-orange/80 to-polibatam-peach/80'
            ];
            
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl bg-white/70 backdrop-blur-xl relative overflow-hidden transition-all duration-700 ease-out rounded-3xl">
                  {/* Liquid Glass Effect */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl"></div>
                  <div className={`absolute inset-0 bg-linear-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out rounded-3xl`}></div>
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${gradients[index]} opacity-20 group-hover:opacity-40 transition-all duration-700 ease-out blur-sm`}></div>
                  
                  <div className="flex flex-col items-center relative z-10 p-4 md:p-6">
                    {/* Icon with Gradient Background and Animation */}
                    <div className={`p-3 md:p-4 rounded-3xl bg-linear-to-br ${gradients[index]} mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out shadow-lg`}>
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-white transition-transform duration-700 ease-out group-hover:rotate-12" />
                    </div>
                    
                    <Badge color="gray" className="mb-2 md:mb-3 uppercase tracking-wider text-xs backdrop-blur-sm bg-polibatam-light/80 rounded-full transition-all duration-500 group-hover:scale-105">
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

        {/* Main Content with Timeline */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left: Timeline with Liquid Glass */}
            <Card className="lg:col-span-1 border-none shadow-xl bg-linear-to-br from-polibatam-navy to-gray-800 text-white backdrop-blur-xl relative overflow-hidden group rounded-3xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2">
            {/* Glass Effect Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent backdrop-blur-sm rounded-3xl"></div>
            
            <div className="relative z-10 p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 transition-all duration-500 group-hover:scale-105">
              <HiTrendingUp className="h-6 w-6 md:h-7 md:w-7 animate-bounce" />
              {aboutContent.journeyTitle}
              </h3>
              
              {/* Custom Timeline */}
              <div className="space-y-4 md:space-y-6">
              {aboutContent.timeline.map((item, index) => (
              <div key={index} className="flex gap-3 md:gap-4 group/item transition-all duration-500 hover:translate-x-2">
                <div className="flex flex-col items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-polibatam-orange flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-all duration-500 ease-out">
                  <HiCheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white transition-transform duration-500 group-hover/item:rotate-12" />
                </div>
                {index < aboutContent.timeline.length - 1 && (
                <div className="w-0.5 h-full bg-gray-600 mt-2 group-hover/item:bg-polibatam-orange transition-colors duration-500"></div>
                )}
                </div>
                <div className={index < aboutContent.timeline.length - 1 ? "pb-4 md:pb-6" : ""}>
                <p className="text-gray-300 text-xs md:text-sm mb-1 transition-all duration-300 group-hover/item:text-polibatam-peach">{item.year}</p>
                <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base transition-all duration-300 group-hover/item:text-polibatam-orange">{item.title}</h4>
                <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
              ))}
              </div>
            </div>
            </Card>

          {/* Right: Main Content with Liquid Glass */}
          <Card className="lg:col-span-2 border-none shadow-xl bg-white/60 backdrop-blur-2xl relative overflow-hidden group rounded-3xl transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2">
            {/* Glass Effect Layers */}
            <div className="absolute inset-0 bg-linear-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-3xl"></div>
            <div className="absolute inset-0 bg-linear-to-br from-polibatam-peach/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10 p-4 md:p-6 lg:p-8">
              <div className="space-y-4 md:space-y-6">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <div key={index} className="group/paragraph transition-all duration-500">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify group-hover/paragraph:text-gray-900 transition-all duration-500 ease-out">
                      {index === 0 && (
                        <span className="text-5xl md:text-6xl font-bold text-polibatam-orange float-left mr-3 md:mr-4 mt-1 md:mt-2 leading-none drop-shadow-lg transition-all duration-500 group-hover/paragraph:scale-110 group-hover/paragraph:rotate-3">
                          {paragraph.charAt(0)}
                        </span>
                      )}
                      {index === 0 ? paragraph.slice(1) : paragraph}
                    </p>
                    {index < aboutContent.paragraphs.length - 1 && (
                      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mt-4 md:mt-6 transition-all duration-500 group-hover/paragraph:via-polibatam-orange"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Stats Section with Liquid Glass Cards */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {aboutContent.stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 group/stat">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs md:text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover/stat:text-polibatam-orange">{stat.label}</span>
                        <span className="text-xs md:text-sm font-bold text-polibatam-orange transition-transform duration-300 group-hover/stat:scale-110">{stat.value}%</span>
                      </div>
                      <Progress progress={stat.value} size="lg" color="orange" className="animate-pulse transition-all duration-500" style={index === 1 ? { animationDelay: '0.5s' } : undefined} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision & Mission Cards with Liquid Glass */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="border-none shadow-xl bg-linear-to-br from-polibatam-light/80 to-polibatam-peach/50 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-3 relative overflow-hidden group rounded-3xl">
            {/* Liquid Glass Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent backdrop-blur-md rounded-3xl"></div>
            <div className="absolute inset-0 bg-linear-to-br from-polibatam-peach/0 to-polibatam-orange/0 group-hover:from-polibatam-peach/10 group-hover:to-polibatam-orange/10 transition-all duration-700 rounded-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 relative z-10 p-4 md:p-6">
              <div className="p-2.5 md:p-3 bg-linear-to-br from-polibatam-orange to-polibatam-peach rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
                <HiLightBulb className="h-6 w-6 md:h-8 md:w-8 text-white transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-polibatam-navy mb-2 md:mb-3 group-hover:text-polibatam-orange transition-all duration-500 ease-out group-hover:scale-105">{aboutContent.vision.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                  {aboutContent.vision.description}
                </p>
              </div>
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-polibatam-orange to-polibatam-peach opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out rounded-full"></div>
          </Card>

          <Card className="border-none shadow-xl bg-linear-to-br from-polibatam-peach/50 to-polibatam-light/80 backdrop-blur-xl hover:shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-3 relative overflow-hidden group rounded-3xl">
            {/* Liquid Glass Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/50 to-transparent backdrop-blur-md rounded-3xl"></div>
            <div className="absolute inset-0 bg-linear-to-br from-polibatam-orange/0 to-polibatam-peach/0 group-hover:from-polibatam-orange/10 group-hover:to-polibatam-peach/10 transition-all duration-700 rounded-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 relative z-10 p-4 md:p-6">
              <div className="p-2.5 md:p-3 bg-linear-to-br from-polibatam-peach to-polibatam-orange rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
                <HiCog className="h-6 w-6 md:h-8 md:w-8 text-white transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-polibatam-navy mb-2 md:mb-3 group-hover:text-polibatam-orange transition-all duration-500 ease-out group-hover:scale-105">{aboutContent.mission.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
                  {aboutContent.mission.description}
                </p>
              </div>
            </div>
            
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-polibatam-peach to-polibatam-orange opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out rounded-full"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}
