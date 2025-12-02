'use client';

import { useRef, useState, useMemo } from 'react';
import { Card, CardBody, Chip, Button } from '@heroui/react';
import { HiAcademicCap, HiBookOpen, HiChevronDown, HiChevronUp, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type SectionCourse = {
  id: string;
  code: string;
  name: string;
  credits: number;
  description: string;
  type: 'mandatory' | 'elective';
};

type SectionSemester = {
  semester: number;
  courses: SectionCourse[];
};

interface CurriculumSectionProps {
  title: string;
  subtitle: string;
  description: string;
  semesters: SectionSemester[];
}

interface CourseCardProps {
  course: SectionCourse;
}

function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate description to first ~50 words
  const words = course.description.split(' ');
  const truncatedDescription = words.slice(0, 20).join(' ');
  const shouldTruncate = words.length > 20;
  
  return (
    <Card className="group/course relative bg-white/60 backdrop-blur-xl rounded-xl md:rounded-2xl border-2 border-polibatam-peach/30 hover:border-polibatam-orange/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-polibatam-light/50 to-white/50 opacity-0 group-hover/course:opacity-100 transition-opacity duration-500" />
      
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-polibatam-orange via-polibatam-peach to-polibatam-orange opacity-60 group-hover/course:opacity-100 group-hover/course:w-1 md:group-hover/course:w-1.5 transition-all duration-500" />
      
      <CardBody className="relative p-3 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 md:gap-4 mb-2 md:mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 md:gap-3 mb-1.5 md:mb-2 flex-wrap">
              {/* Course Code */}
              <Chip 
                className="px-2 py-0.5 md:px-3 md:py-1 bg-polibatam-orange/20 text-polibatam-orange font-bold text-xs md:text-sm rounded-md md:rounded-lg border border-polibatam-orange/30"
                size="sm"
              >
                {course.code}
              </Chip>
              
              {/* Credits */}
              <Chip 
                className="px-2 py-0.5 md:px-3 md:py-1 bg-polibatam-peach/30 text-polibatam-orange font-semibold text-xs md:text-sm rounded-md md:rounded-lg"
                size="sm"
                startContent={<HiAcademicCap className="w-3 h-3 md:w-4 md:h-4" />}
              >
                {course.credits} SKS
              </Chip>
              
              {/* Type Badge */}
              <Chip 
                color={course.type === 'mandatory' ? 'warning' : 'primary'} 
                size="sm" 
                variant="flat"
                className="text-xs"
              >
                {course.type === 'mandatory' ? 'Mandatory' : 'Elective'}
              </Chip>
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
            <Button
              onPress={() => setIsExpanded(!isExpanded)}
              className="mt-2 md:mt-3 bg-polibatam-orange/10 hover:bg-polibatam-orange/20 rounded-md md:rounded-lg"
              size="sm"
              variant="flat"
              endContent={
                isExpanded ? (
                  <HiChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                ) : (
                  <HiChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                )
              }
            >
              <span className="text-xs md:text-sm font-semibold text-polibatam-orange">
                {isExpanded ? 'Show less' : 'Read more'}
              </span>
            </Button>
          )}
        </div>
      </CardBody>
      
      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-polibatam-orange via-polibatam-peach to-polibatam-orange opacity-0 group-hover/course:opacity-60 transition-opacity duration-500 blur-sm" />
    </Card>
  );
}

export default function CurriculumSection({ title, subtitle, description, semesters }: CurriculumSectionProps) {
  const [activeSemester, setActiveSemester] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const safeActiveSemester = useMemo(() => {
    if (semesters.length === 0) {
      return 0;
    }
    return Math.min(activeSemester, semesters.length - 1);
  }, [activeSemester, semesters.length]);

  const currentSemester = semesters[safeActiveSemester];
  const courses = currentSemester?.courses ?? [];
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const mandatoryCourses = courses.filter((course) => course.type === 'mandatory').length;
  const electiveCourses = courses.filter((course) => course.type === 'elective').length;
  
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
  <section id="curriculum" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-linear-to-b from-white via-polibatam-light/20 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-polibatam-orange/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-polibatam-peach/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
  <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
  <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-polibatam-orange/10 to-polibatam-peach/10 rounded-full border border-polibatam-orange/30">
            <HiBookOpen className="w-5 h-5 text-polibatam-orange" />
            <span className="text-sm md:text-base font-bold text-polibatam-orange uppercase tracking-wide">
              Academic Program
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-polibatam-orange font-semibold mb-2 sm:mb-3 md:mb-4">
            {subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-1 w-20 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
            <div className="h-1 w-10 bg-polibatam-peach/50 rounded-full" />
            <div className="h-1 w-5 bg-polibatam-orange/30 rounded-full" />
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Semester Tabs - Horizontal Scroll on Mobile */}
  <div className="mb-6 sm:mb-8 md:mb-12 relative">
          {/* Left Arrow - Mobile Only */}
          <Button
            isIconOnly
            onPress={scrollLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-polibatam-orange text-white rounded-full shadow-lg"
            size="sm"
          >
            <HiChevronLeft className="w-6 h-6" />
          </Button>
          
          {/* Tabs Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:flex-wrap md:justify-center px-4 sm:px-8 md:px-0"
          >
            {semesters.map((sem: SectionSemester, index: number) => (
              <Button
                key={sem.semester}
                onPress={() => setActiveSemester(index)}
                className={`
                  shrink-0 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300
                  ${safeActiveSemester === index
                    ? 'bg-linear-to-r from-polibatam-orange to-polibatam-peach text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-xl text-gray-700 border-2 border-polibatam-peach/30 hover:border-polibatam-orange/50'
                  }
                `}
              >
                Semester {sem.semester}
              </Button>
            ))}
          </div>
          
          {/* Right Arrow - Mobile Only */}
          <Button
            isIconOnly
            onPress={scrollRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-polibatam-orange text-white rounded-full shadow-lg"
            size="sm"
          >
            <HiChevronRight className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Semester Info */}
  {currentSemester ? (
          <Card className="mb-6 sm:mb-8 bg-white/60 backdrop-blur-xl border-2 border-polibatam-orange/30 shadow-xl">
            <CardBody className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent mb-1 sm:mb-2">
                    Semester {currentSemester.semester}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    Academic semester {currentSemester.semester} of 8
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-6">
                  {/* Total Credits */}
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black bg-linear-to-r from-polibatam-orange to-polibatam-peach bg-clip-text text-transparent">
                      {totalCredits}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-semibold">Total Credits</div>
                  </div>
                  
                  {/* Mandatory Courses */}
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-polibatam-orange">
                      {mandatoryCourses}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-semibold">Mandatory</div>
                  </div>
                  
                  {/* Elective Courses */}
                  {electiveCourses > 0 && (
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-black text-polibatam-peach">
                        {electiveCourses}
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-semibold">Elective</div>
                    </div>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ) : (
          <Card className="mb-6 sm:mb-8 bg-white/60 backdrop-blur-xl border-2 border-dashed border-polibatam-orange/30 shadow-xl">
            <CardBody className="p-4 sm:p-6 text-center text-gray-600">
              Curriculum courses will appear here once you add them in the admin dashboard.
            </CardBody>
          </Card>
        )}
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id ?? course.code} course={course} />
          ))}
        </div>
        
        {/* Bottom Note */}
        {currentSemester && (
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-polibatam-light/50 rounded-full border border-polibatam-orange/20">
              <HiCheckCircle className="w-5 h-5 text-polibatam-orange" />
              <span className="text-sm md:text-base text-gray-700">
                <span className="font-bold text-polibatam-orange">{courses.length}</span> courses in Semester {currentSemester.semester}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}