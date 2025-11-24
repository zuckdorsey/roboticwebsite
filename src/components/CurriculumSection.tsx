'use client';

import { Card } from 'flowbite-react';
import { HiAcademicCap, HiClock } from 'react-icons/hi';
import { Course } from "@/types";

interface CurriculumSectionProps {
  courses: Course[];
}

export default function CurriculumSection({ courses }: CurriculumSectionProps) {
  return (
    <section id="curriculum" className="py-16 bg-polibatam-light">
      <div className="max-w-[1720px] mx-auto px-8 md:px-10 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiAcademicCap className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Curriculum
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="max-w-sm">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {course.description}
              </p>
              {course.duration && (
                <div className="flex items-center text-sm text-gray-500">
                  <HiClock className="mr-2 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
