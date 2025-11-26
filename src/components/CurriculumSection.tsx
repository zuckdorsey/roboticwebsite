'use client';

import { useState, useRef } from 'react';
import { Badge } from 'flowbite-react';
import { HiAcademicCap, HiBookOpen, HiChevronDown, HiChevronUp, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { curriculumContent, Course } from '@/data/curriculum-content';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate description to first ~50 words
  const words = course.description.split(' ');
  const truncatedDescription = words.slice(0, 20).join(' ');
  const shouldTruncate = words.length > 20;
  
  return (
    <div className="group/course relative bg-white/60 backdrop-blur-xl rounded-xl md:rounded-2xl border-2 border-polibatam-peach/30 hover:border-polibatam-orange/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-polibatam-light/50 to-white/50 opacity-0 group-hover/course:opacity-100 transition-opacity duration-500" />
      
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-polibatam-orange via-polibatam-peach to-polibatam-orange opacity-60 group-hover/course:opacity-100 group-hover/course:w-1 md:group-hover/course:w-1.5 transition-all duration-500" />
      
      <div className="relative p-3 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 md:gap-4 mb-2 md:mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 md:gap-3 mb-1.5 md:mb-2 flex-wrap">
              {/* Course Code */}
              <span className="inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 bg-polibatam-orange/20 text-polibatam-orange font-bold text-xs md:text-sm rounded-md md:rounded-lg border border-polibatam-orange/30">
                {course.code}
              </span>
              
              {/* Credits */}
              <span className="inline-flex items-center gap-1 md:gap-1.5 px-2 py-0.5 md:px-3 md:py-1 bg-polibatam-peach/30 text-polibatam-orange font-semibold text-xs md:text-sm rounded-md md:rounded-lg">
                <HiAcademicCap className="w-3 h-3 md:w-4 md:h-4" />
                {course.credits} SKS
              </span>
              
              {/* Type Badge */}
              <Badge color={course.type === 'mandatory' ? 'warning' : 'info'} size="sm" className="text-xs">
                {course.type === 'mandatory' ? 'Mandatory' : 'Elective'}
              </Badge>
            </div>
            
            {/* Course Name */}
            <h4 className="text-sm md:text-lg lg:text-xl font-bold text-polibatam-navy group-hover/course:text-polibatam-orange transition-colors duration-300 leading-tight md:leading-normal">
              {course.name}
            </h4>
          </div>
        </div>
        
        {/* Description - Truncated or Full */}
        <div className="relative">
          <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-snug md:leading-relaxed">
            {isExpanded ? course.description : truncatedDescription}
            {!isExpanded && shouldTruncate && '...'}
          </p>
          
          {/* Expand/Collapse Button with Icon */}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-polibatam-orange/10 hover:bg-polibatam-orange/20 rounded-md md:rounded-lg transition-all duration-300 group/btn"
            >
              <span className="text-xs md:text-sm font-semibold text-polibatam-orange">
                {isExpanded ? 'Show less' : 'Read more'}
              </span>
              {isExpanded ? (
                <HiChevronUp className="w-3 h-3 md:w-4 md:h-4 text-polibatam-orange group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              ) : (
                <HiChevronDown className="w-3 h-3 md:w-4 md:h-4 text-polibatam-orange group-hover/btn:translate-y-0.5 transition-transform duration-300" />
              )}
            </button>
          )}
        </div>
      </div>
      
      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-polibatam-orange via-polibatam-peach to-polibatam-orange opacity-0 group-hover/course:opacity-60 transition-opacity duration-500 blur-sm" />
    </div>
  );
}

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const currentSemester = curriculumContent.semesters[activeSemester];
  const totalCredits = currentSemester.courses.reduce((sum, course) => sum + course.credits, 0);
  const mandatoryCourses = currentSemester.courses.filter(c => c.type === 'mandatory').length;
  const electiveCourses = currentSemester.courses.filter(c => c.type === 'elective').length;
  
  // Scroll functions for mobile tabs
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-linear-to-b from-white via-polibatam-light/20 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-polibatam-orange/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-polibatam-peach/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-polibatam-orange/10 to-polibatam-peach/10 rounded-full border border-polibatam-orange/30">
            <HiBookOpen className="w-5 h-5 text-polibatam-orange" />
            <span className="text-sm md:text-base font-bold text-polibatam-orange uppercase tracking-wide">
              Academic Program
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
            {curriculumContent.title}
          </h2>
          
          <p className="text-lg md:text-xl text-polibatam-orange font-semibold mb-4">
            {curriculumContent.subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
            <div className="h-1 w-10 bg-polibatam-peach/50 rounded-full" />
            <div className="h-1 w-5 bg-polibatam-orange/30 rounded-full" />
          </div>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {curriculumContent.description}
          </p>
        </div>
        
        {/* Semester Tabs - Horizontal Scroll on Mobile */}
        <div className="mb-8 md:mb-12 relative">
          {/* Left Arrow - Mobile Only */}
          <button
            onClick={scrollLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-polibatam-orange text-white rounded-full shadow-lg flex items-center justify-center hover:bg-polibatam-orange/80 active:scale-95 transition-all duration-300"
            aria-label="Scroll left"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Tabs Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:flex-wrap md:justify-center px-12 md:px-0"
          >
            {curriculumContent.semesters.map((sem, index) => (
              <button
                key={sem.semester}
                onClick={() => setActiveSemester(index)}
                className={`
                  shrink-0 px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300
                  ${activeSemester === index
                    ? 'bg-linear-to-r from-polibatam-orange to-polibatam-peach text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-xl text-gray-700 hover:bg-polibatam-peach/20 border-2 border-polibatam-peach/30 hover:border-polibatam-orange/50'
                  }
                `}
              >
                Semester {sem.semester}
              </button>
            ))}
          </div>
          
          {/* Right Arrow - Mobile Only */}
          <button
            onClick={scrollRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-polibatam-orange text-white rounded-full shadow-lg flex items-center justify-center hover:bg-polibatam-orange/80 active:scale-95 transition-all duration-300"
            aria-label="Scroll right"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Semester Info */}
        <div className="mb-8 bg-white/60 backdrop-blur-xl rounded-2xl border-2 border-polibatam-orange/30 p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent mb-2">
                Semester {currentSemester.semester}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Academic semester {currentSemester.semester} of 8
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              {/* Total Credits */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-linear-to-r from-polibatam-orange to-polibatam-peach bg-clip-text text-transparent">
                  {totalCredits}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Total Credits</div>
              </div>
              
              {/* Mandatory Courses */}
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-polibatam-orange">
                  {mandatoryCourses}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-semibold">Mandatory</div>
              </div>
              
              {/* Elective Courses */}
              {electiveCourses > 0 && (
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-polibatam-peach">
                    {electiveCourses}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-semibold">Elective</div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {currentSemester.courses.map((course, index) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-polibatam-light/50 rounded-full border border-polibatam-orange/20">
            <HiCheckCircle className="w-5 h-5 text-polibatam-orange" />
            <span className="text-sm md:text-base text-gray-700">
              <span className="font-bold text-polibatam-orange">{currentSemester.courses.length}</span> courses in Semester {currentSemester.semester}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

