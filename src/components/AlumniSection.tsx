'use client';

import { useState, useEffect } from 'react';
import { HiArrowLeft, HiArrowRight, HiUserGroup } from 'react-icons/hi';
import { alumniContent } from '@/data/alumni-content';

export default function AlumniSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the 3rd item (center)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stories = alumniContent.stories;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, stories.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + stories.length) % stories.length;
    
    // Center card
    if (diff === 0) {
      return "z-20 scale-100 opacity-100 translate-x-0 bg-gray-800 border-polibatam-orange";
    }
    // Immediate Left
    if (diff === stories.length - 1) {
      return "z-10 scale-90 opacity-60 -translate-x-[15%] md:-translate-x-[60%] bg-gray-900 border-gray-700 blur-[1px]";
    }
    // Immediate Right
    if (diff === 1) {
      return "z-10 scale-90 opacity-60 translate-x-[15%] md:translate-x-[60%] bg-gray-900 border-gray-700 blur-[1px]";
    }
    // Others hidden
    return "z-0 scale-75 opacity-0 hidden";
  };

  return (
    <section id="alumni" className="py-20 md:py-28 bg-[#111827] relative overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-polibatam-orange/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <HiUserGroup className="w-5 h-5 text-polibatam-orange" />
            <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
              Our Alumni
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            {alumniContent.title}
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {alumniContent.description}
          </p>
        </div>

        {/* Avatars Row */}
        <div className="flex justify-center items-center gap-4 mb-16 flex-wrap">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`relative transition-all duration-500 ${
                index === activeIndex ? 'scale-125 mx-4' : 'scale-100 opacity-50 hover:opacity-100'
              }`}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 ${
                index === activeIndex ? 'border-polibatam-orange shadow-[0_0_20px_rgba(235,109,17,0.5)]' : 'border-transparent'
              }`}>
                {/* Placeholder for avatar if image fails or using abstract */}
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                  {story.name.charAt(0)}
                </div>
                {/* <img src={story.image} alt={story.name} className="w-full h-full object-cover" /> */}
              </div>
              {index === activeIndex && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-polibatam-orange rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative h-[500px] md:h-[400px] flex items-center justify-center perspective-1000">
          {stories.map((story, index) => {
            const style = getCardStyle(index);
            if (style.includes('hidden')) return null;

            return (
              <div
                key={story.id}
                className={`absolute w-full max-w-xl p-8 md:p-10 rounded-3xl border transition-all duration-700 ease-out flex flex-col justify-between h-full md:h-auto min-h-[350px] shadow-2xl ${style}`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-xl font-bold text-white border-2 border-white/10">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{story.name}</h4>
                      <p className="text-sm text-polibatam-orange font-medium">{story.role}</p>
                      <p className="text-xs text-gray-400">{story.company}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </blockquote>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2 py-1">
                    Specialization
                  </span>
                  {story.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-polibatam-orange border border-white/10 flex items-center justify-center transition-all duration-300 group"
          >
            <HiArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-polibatam-orange border border-white/10 flex items-center justify-center transition-all duration-300 group"
          >
            <HiArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
