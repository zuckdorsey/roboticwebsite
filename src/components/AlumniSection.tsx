'use client';

import { Card, Badge } from 'flowbite-react';
import { HiStar } from 'react-icons/hi';
import { Alumni } from "@/types";

interface AlumniSectionProps {
  alumni: Alumni[];
}

export default function AlumniSection({ alumni }: AlumniSectionProps) {
  return (
    <section id="alumni" className="py-16 bg-polibatam-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiStar className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Alumni Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {alumni.map((alum, index) => (
            <Card key={index} className="max-w-sm">
              <div className="flex justify-between items-start">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {alum.name}
                </h5>
                <Badge color="warning" className="bg-polibatam-orange">Class of {alum.graduationYear}</Badge>
              </div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {alum.currentPosition}
              </p>
              {alum.company && (
                <p className="font-normal text-polibatam-orange dark:text-polibatam-orange">
                  {alum.company}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
