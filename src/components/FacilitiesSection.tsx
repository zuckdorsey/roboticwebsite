'use client';

import { Card, CardHeader, CardBody } from '@heroui/react';
import { HiOfficeBuilding } from 'react-icons/hi';
import { Facility } from "@/types";

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="py-16 bg-white">
      <div className="max-w-[1720px] mx-auto px-8 md:px-10 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiOfficeBuilding className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {facilities.map((facility, index) => (
            <Card key={index} className="max-w-sm border-l-4 border-polibatam-orange shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  {facility.name}
                </h5>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="font-normal text-gray-700">
                  {facility.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
