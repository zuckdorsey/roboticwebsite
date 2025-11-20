'use client';

import { Card, Badge } from 'flowbite-react';
import { HiUsers } from 'react-icons/hi';
import { Student } from "@/types";

interface StudentsSectionProps {
  students: Student[];
  totalStudents?: number;
}

export default function StudentsSection({ students, totalStudents }: StudentsSectionProps) {
  return (
    <section id="students" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiUsers className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Students
        </h2>
        {totalStudents && (
          <div className="text-center mb-8">
            <Badge color="warning" size="lg" className="text-xl py-2 px-4 bg-polibatam-orange">
              Total Students: {totalStudents}
            </Badge>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {students.map((student, index) => (
            <Card key={index} className="max-w-sm border-l-4 border-polibatam-orange">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {student.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Year: {student.year}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Program: {student.program}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
