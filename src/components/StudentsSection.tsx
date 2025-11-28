'use client';

import { Card, CardHeader, CardBody, Chip } from '@heroui/react';
import { HiUsers } from 'react-icons/hi';
import { Student } from "@/types";

interface StudentsSectionProps {
  students: Student[];
  totalStudents?: number;
}

export default function StudentsSection({ students, totalStudents }: StudentsSectionProps) {
  return (
    <section id="students" className="py-16 bg-white">
      <div className="max-w-[1720px] mx-auto px-8 md:px-10 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          <HiUsers className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Students
        </h2>
        {totalStudents && (
          <div className="text-center mb-8">
            <Chip 
              color="warning" 
              size="lg" 
              className="text-xl py-2 px-4 bg-polibatam-orange text-white font-bold"
            >
              Total Students: {totalStudents}
            </Chip>
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {students.map((student, index) => (
            <Card key={index} className="max-w-sm border-l-4 border-polibatam-orange shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  {student.name}
                </h5>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="font-normal text-gray-700">
                  Year: {student.year}
                </p>
                <p className="font-normal text-gray-700">
                  Program: {student.program}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
