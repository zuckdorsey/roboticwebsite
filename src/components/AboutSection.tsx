'use client';

import { Card } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

interface AboutSectionProps {
  description: string;
}

export default function AboutSection({ description }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiInformationCircle className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          About Program
        </h2>
        <Card className="max-w-4xl mx-auto border-polibatam-peach">
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </Card>
      </div>
    </section>
  );
}
