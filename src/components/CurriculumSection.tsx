'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiAcademicCap, HiBookOpen, HiChevronDown, HiChevronUp, HiCheckCircle, HiLightningBolt, HiSparkles, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { curriculumContent, Course } from '@/data/curriculum-content';

interface CourseCardProps {
  course: Course;
  index: number;
}

function CourseCard({ course, index }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = course.description.split(' ');
  const truncatedDescription = words.slice(0, 15).join(' ');
  const shouldTruncate = words.length > 15;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Mobile: Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-polibatam-orange via-polibatam-peach to-polibatam-orange/50 rounded-full md:hidden" />

      {/* Desktop: Timeline elements */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-polibatam-orange/50 via-polibatam-peach/30 to-transparent hidden md:block" style={{ left: '-24px' }} />
      <div className="absolute hidden md:flex items-center justify-center w-3 h-3 bg-gradient-to-br from-polibatam-orange to-polibatam-peach rounded-full shadow-md" style={{ left: '-29px', top: '20px' }}>
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>

      <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 active:border-polibatam-orange/40 md:hover:border-polibatam-orange/40 transition-all duration-300 overflow-hidden shadow-sm active:shadow-lg md:hover:shadow-lg p-4 md:p-5 ml-3 md:ml-0">
        {/* Top gradient bar - visible on mobile */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-polibatam-orange via-polibatam-peach to-polibatam-orange md:opacity-0 md:group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          {/* Header - Stacked on mobile */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
            {/* Course Code */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-polibatam-orange to-polibatam-peach text-white font-bold text-[10px] md:text-xs rounded-full shadow-sm">
              <HiSparkles className="w-2.5 h-2.5 md:w-3 md:h-3" />
              {course.code}
            </span>

            {/* Credits */}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 bg-polibatam-navy/10 text-polibatam-navy font-semibold text-[10px] md:text-xs rounded-full">
              <HiAcademicCap className="w-2.5 h-2.5 md:w-3 md:h-3" />
              {course.credits} SKS
            </span>

            {/* Type Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold rounded-full ${course.type === 'mandatory'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-blue-100 text-blue-700'
              }`}>
              {course.type === 'mandatory' ? (
                <>
                  <HiCheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  <span className="hidden xs:inline">Wajib</span>
                  <span className="xs:hidden">M</span>
                </>
              ) : (
                <>
                  <HiLightningBolt className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  <span className="hidden xs:inline">Pilihan</span>
                  <span className="xs:hidden">P</span>
                </>
              )}
            </span>
          </div>

          {/* Course Name */}
          <h4 className="text-sm md:text-lg font-bold text-polibatam-navy group-hover:text-polibatam-orange transition-colors duration-300 mb-2 leading-snug">
            {course.name}
          </h4>

          {/* Description */}
          <div className="relative">
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              {isExpanded ? course.description : truncatedDescription}
              {!isExpanded && shouldTruncate && '...'}
            </p>

            {/* Expand/Collapse Button - Larger touch target on mobile */}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-polibatam-orange active:text-polibatam-navy md:hover:text-polibatam-navy transition-colors py-1"
              >
                <span>{isExpanded ? 'Sembunyikan' : 'Selengkapnya'}</span>
                {isExpanded ? (
                  <HiChevronUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                ) : (
                  <HiChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentSemester = curriculumContent.semesters[activeSemester];
  const totalCredits = currentSemester.courses.reduce((sum, course) => sum + course.credits, 0);


  const goToPrevSemester = () => {
    if (activeSemester > 0) setActiveSemester(activeSemester - 1);
  };

  const goToNextSemester = () => {
    if (activeSemester < curriculumContent.semesters.length - 1) setActiveSemester(activeSemester + 1);
  };

  return (
    <section id="curriculum" className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background decorations - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-polibatam-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-polibatam-peach/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/10 to-blue-100/10 rounded-full blur-3xl" />
      </div>

      {/* Mobile background - Simpler */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/20 to-transparent md:hidden" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header - Compact on mobile */}
        <div className="text-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 md:gap-2 mb-3 md:mb-6 px-3 py-1.5 md:px-5 md:py-2.5 bg-gradient-to-r from-polibatam-orange/10 to-polibatam-peach/10 rounded-full border border-polibatam-orange/20"
          >
            <HiBookOpen className="w-4 h-4 md:w-5 md:h-5 text-polibatam-orange" />
            <span className="text-xs md:text-sm font-bold text-polibatam-orange uppercase tracking-wide">
              Kurikulum
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-4 bg-gradient-to-r from-polibatam-navy via-polibatam-navy to-polibatam-orange bg-clip-text text-transparent leading-tight"
          >
            {curriculumContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm md:text-xl text-polibatam-orange font-semibold mb-2 md:mb-4"
          >
            {curriculumContent.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed hidden md:block"
          >
            {curriculumContent.description}
          </motion.p>
        </div>

        {/* Mobile: Quick Semester Navigator */}
        <div className="flex md:hidden items-center justify-between mb-4 px-1">
          <button
            onClick={goToPrevSemester}
            disabled={activeSemester === 0}
            className="p-2 rounded-full bg-white shadow-md border border-gray-100 disabled:opacity-30 disabled:shadow-none active:scale-95 transition-all"
          >
            <HiChevronLeft className="w-5 h-5 text-polibatam-navy" />
          </button>

          <div className="text-center">
            <div className="text-lg font-black text-polibatam-navy">
              Semester {currentSemester.semester}
            </div>
            <div className="text-xs text-gray-500">
              {currentSemester.courses.length} mata kuliah • {totalCredits} SKS
            </div>
          </div>

          <button
            onClick={goToNextSemester}
            disabled={activeSemester === curriculumContent.semesters.length - 1}
            className="p-2 rounded-full bg-white shadow-md border border-gray-100 disabled:opacity-30 disabled:shadow-none active:scale-95 transition-all"
          >
            <HiChevronRight className="w-5 h-5 text-polibatam-navy" />
          </button>
        </div>

        {/* Mobile: Semester Dots Indicator */}
        <div className="flex md:hidden justify-center gap-1.5 mb-6">
          {curriculumContent.semesters.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSemester(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeSemester === index
                ? 'w-6 bg-gradient-to-r from-polibatam-orange to-polibatam-peach'
                : 'w-2 bg-gray-300'
                }`}
            />
          ))}
        </div>

        {/* Desktop: Semester Navigation - Pills Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 hidden md:block"
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-1 flex-wrap justify-center"
          >
            {curriculumContent.semesters.map((sem, index) => (
              <button
                key={sem.semester}
                onClick={() => setActiveSemester(index)}
                className={`
                  shrink-0 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap
                  ${activeSemester === index
                    ? 'bg-gradient-to-r from-polibatam-orange to-polibatam-peach text-white shadow-lg shadow-polibatam-orange/30 scale-105'
                    : 'bg-white text-gray-600 hover:text-polibatam-orange border border-gray-200 hover:border-polibatam-orange/40 hover:shadow-md'
                  }
                `}
              >
                Semester {sem.semester}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10 max-w-md mx-auto"
        >
          {/* Semester Number */}
          <div className="bg-gradient-to-br from-polibatam-navy to-polibatam-navy/90 rounded-xl md:rounded-2xl p-4 md:p-5 text-center shadow-lg">
            <div className="text-2xl md:text-4xl font-black text-white mb-0.5 md:mb-1">
              {currentSemester.semester}
            </div>
            <div className="text-xs md:text-sm text-white/70 font-medium">Semester</div>
          </div>

          {/* Total Credits */}
          <div className="bg-gradient-to-br from-polibatam-orange to-polibatam-peach rounded-xl md:rounded-2xl p-4 md:p-5 text-center shadow-lg">
            <div className="text-2xl md:text-4xl font-black text-white mb-0.5 md:mb-1">
              {totalCredits}
            </div>
            <div className="text-xs md:text-sm text-white/70 font-medium">Total SKS</div>
          </div>
        </motion.div>

        {/* Courses List */}
        <div className="relative md:pl-8">
          {/* Desktop: Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-polibatam-orange via-polibatam-peach to-transparent hidden md:block" style={{ left: '-1px' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSemester}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5"
            >
              {currentSemester.courses.map((course, index) => (
                <CourseCard key={course.code} course={course} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Info - Simplified on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white rounded-full border border-gray-100 shadow-md">
            <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
            <span className="text-xs md:text-sm text-gray-600">
              <span className="font-bold text-polibatam-navy">{currentSemester.courses.length}</span> mata kuliah tersedia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}