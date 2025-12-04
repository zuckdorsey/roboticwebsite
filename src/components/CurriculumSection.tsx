'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardBody, Chip, ScrollShadow } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiAcademicCap,
  HiBookOpen,
  HiChevronRight,
  HiCode,
  HiLightningBolt,
  HiChip,
  HiBriefcase,
  HiGlobeAlt,
  HiUserGroup
} from 'react-icons/hi';
import { curriculumContent, Course } from '@/data/curriculum-content';

// --- Types & Helpers ---

const SEMESTER_THEMES = [
  { title: "Foundations", icon: HiBookOpen, color: "from-blue-500 to-cyan-500" },      // Sem 1
  { title: "Core Skills", icon: HiCode, color: "from-cyan-500 to-teal-500" },          // Sem 2
  { title: "Engineering", icon: HiLightningBolt, color: "from-teal-500 to-emerald-500" }, // Sem 3
  { title: "Advanced Systems", icon: HiChip, color: "from-emerald-500 to-green-500" },    // Sem 4
  { title: "Applications", icon: HiGlobeAlt, color: "from-green-500 to-lime-500" },      // Sem 5
  { title: "Specialization", icon: HiAcademicCap, color: "from-lime-500 to-yellow-500" }, // Sem 6
  { title: "Innovation", icon: HiUserGroup, color: "from-yellow-500 to-orange-500" },    // Sem 7
  { title: "Professional", icon: HiBriefcase, color: "from-orange-500 to-red-500" },      // Sem 8
];

const getTheme = (index: number) => SEMESTER_THEMES[index] || SEMESTER_THEMES[0];

// --- Components ---

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardBody className="p-5 flex flex-col h-full gap-4">
          {/* Header: Code, Credits, Type */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <Chip
                size="sm"
                variant="flat"
                classNames={{
                  base: "bg-polibatam-navy/5 border border-polibatam-navy/10",
                  content: "font-mono font-bold text-polibatam-navy text-xs"
                }}
              >
                {course.code}
              </Chip>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${course.type === 'mandatory'
                  ? 'bg-orange-50 text-orange-600 border-orange-100'
                  : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                {course.type}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
              <HiAcademicCap className="w-3 h-3" />
              <span>{course.credits} SKS</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-lg font-bold text-gray-900 leading-tight">
            {course.name}
          </h4>

          {/* Description - Full Visibility */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(0);
  const currentSemesterData = curriculumContent.semesters[activeSemester];
  const theme = getTheme(activeSemester);
  const ThemeIcon = theme.icon;

  // Auto-scroll the active button into view on mobile
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.children[activeSemester] as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSemester]);

  return (
    <section id="curriculum" className="py-20 relative bg-gray-50/50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-polibatam-peach/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-polibatam-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-polibatam-orange/10 text-polibatam-orange text-sm font-bold mb-4"
          >
            <HiBookOpen className="w-4 h-4" />
            <span>ACADEMIC ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Your Journey to <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-polibatam-orange to-pink-600">
              Robotics Mastery
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {curriculumContent.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN: Navigation (Stepper) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:h-fit">
            {/* Mobile Horizontal Scroll */}
            <div className="lg:hidden mb-8">
              <ScrollShadow orientation="horizontal" className="w-full pb-4">
                <div ref={scrollRef} className="flex gap-3 px-1">
                  {curriculumContent.semesters.map((sem, idx) => {
                    const isActive = activeSemester === idx;
                    return (
                      <button
                        key={sem.semester}
                        onClick={() => setActiveSemester(idx)}
                        className={`
                          shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border
                          ${isActive
                            ? 'bg-polibatam-navy text-white border-polibatam-navy shadow-lg shadow-polibatam-navy/20'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-polibatam-orange/50'
                          }
                        `}
                      >
                        Sem {sem.semester}
                      </button>
                    );
                  })}
                </div>
              </ScrollShadow>
            </div>

            {/* Desktop Vertical Stepper */}
            <div className="hidden lg:flex flex-col space-y-2">
              {curriculumContent.semesters.map((sem, idx) => {
                const isActive = activeSemester === idx;
                const semTheme = getTheme(idx);

                return (
                  <button
                    key={sem.semester}
                    onClick={() => setActiveSemester(idx)}
                    className={`
                      group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border-2
                      ${isActive
                        ? 'bg-white border-polibatam-orange shadow-xl shadow-polibatam-orange/10 scale-105 z-10'
                        : 'bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200 text-gray-500'
                      }
                    `}
                  >
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                      ${isActive ? 'bg-polibatam-orange text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-polibatam-orange/10 group-hover:text-polibatam-orange'}
                    `}>
                      <span className="font-bold text-lg">{sem.semester}</span>
                    </div>

                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${isActive ? 'text-polibatam-orange' : 'text-gray-400'}`}>
                        Semester {sem.semester}
                      </div>
                      <div className={`font-bold text-sm ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {semTheme.title}
                      </div>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto text-polibatam-orange"
                      >
                        <HiChevronRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSemester}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Semester Header Card */}
                <div className="mb-8 p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${theme.color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-linear-to-br ${theme.color} text-white shadow-lg`}>
                          <ThemeIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900">
                          {theme.title} Phase
                        </h3>
                      </div>
                      <p className="text-gray-600 max-w-xl">
                        Focusing on {currentSemesterData.courses.slice(0, 3).map(c => c.name).join(', ')} and more.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-center min-w-[100px]">
                        <div className="text-2xl font-black text-gray-900">
                          {currentSemesterData.courses.reduce((acc, curr) => acc + curr.credits, 0)}
                        </div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Credits</div>
                      </div>
                      <div className="px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-center min-w-[100px]">
                        <div className="text-2xl font-black text-gray-900">
                          {currentSemesterData.courses.length}
                        </div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Courses</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {currentSemesterData.courses.map((course, index) => (
                    <CourseCard key={course.code} course={course} index={index} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}