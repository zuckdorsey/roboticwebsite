'use client';

import { Card, CardHeader, CardBody, CardFooter, Button } from '@heroui/react';
import { HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import { Facility } from "@/types";

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export default function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-linear-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm">
            <HiOfficeBuilding className="w-5 h-5 text-polibatam-orange" />
            <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
              Campus Facilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
            World-Class Infrastructure
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            State-of-the-art laboratories and workspaces designed to foster innovation and hands-on learning
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <Card key={index} className="w-full h-[400px] group cursor-pointer overflow-hidden border-none shadow-xl">
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                {facility.image ? (
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <HiOfficeBuilding className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Content Overlay */}
              <CardFooter className="absolute bottom-0 z-10 flex-col items-start p-8 w-full">
                <h4 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {facility.name}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 opacity-90 group-hover:opacity-100">
                  {facility.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button
                    variant="light"
                    className="p-0 text-polibatam-orange font-bold data-[hover=true]:bg-transparent"
                    endContent={<HiArrowRight className="group-hover:translate-x-1 transition-transform" />}
                  >
                    Explore Facility
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
