'use client';

import { useState } from 'react';
import { facilitiesContent, Facility } from '@/data/facilities-content';
import { HiCube, HiCheckCircle, HiX } from 'react-icons/hi';

export default function FacilitiesSection() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Facilities' },
    { id: 'lab', label: 'Laboratories' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'studio', label: 'Studios' },
    { id: 'equipment', label: 'Equipment' }
  ];

  const filteredFacilities = filter === 'all' 
    ? facilitiesContent.facilities 
    : facilitiesContent.facilities.filter(f => f.category === filter);

  return (
    <section id="facilities" className="py-16 md:py-24 bg-linear-to-b from-white via-polibatam-peach/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-polibatam-orange/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-polibatam-peach/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-linear-to-r from-polibatam-orange/10 to-polibatam-peach/10 rounded-full border border-polibatam-orange/30">
            <HiCube className="w-5 h-5 text-polibatam-orange animate-spin-slow" />
            <span className="text-sm md:text-base font-bold text-polibatam-orange uppercase tracking-wide">
              Infrastructure
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
            {facilitiesContent.title}
          </h2>
          
          <p className="text-lg md:text-xl text-polibatam-orange font-semibold mb-4">
            {facilitiesContent.subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-linear-to-r from-polibatam-orange to-polibatam-peach rounded-full" />
            <div className="h-1 w-10 bg-polibatam-peach/50 rounded-full" />
            <div className="h-1 w-5 bg-polibatam-orange/30 rounded-full" />
          </div>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {facilitiesContent.description}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-linear-to-r from-polibatam-orange to-polibatam-peach text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-xl text-gray-700 hover:bg-polibatam-peach/20 border-2 border-polibatam-peach/30 hover:border-polibatam-orange/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Abstract Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredFacilities.map((facility, index) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Abstract Background Pattern */}
              <div className={`absolute inset-0 bg-linear-to-br ${
                facility.category === 'lab' ? 'from-blue-500/80 to-purple-600/80' :
                facility.category === 'workshop' ? 'from-orange-500/80 to-red-600/80' :
                facility.category === 'studio' ? 'from-green-500/80 to-teal-600/80' :
                'from-polibatam-orange/80 to-polibatam-peach/80'
              }`} />
              
              {/* Geometric Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white/30 rounded-full blur-xl animate-float" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white/40 rotate-45 animate-spin-slow" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-3 md:p-6">
                {/* Category Badge */}
                <div className="absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs md:text-sm font-bold text-gray-700 capitalize">
                    {facility.category}
                  </span>
                </div>

                {/* Facility Number - Abstract */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm md:text-xl font-black text-white">
                    {facility.id}
                  </span>
                </div>

                {/* Facility Name */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm md:text-xl lg:text-2xl font-black text-white mb-1 md:mb-2 leading-tight drop-shadow-lg">
                    {facility.name}
                  </h3>
                  
                  {/* Features Count - Hidden on mobile */}
                  <div className="hidden md:flex items-center gap-2 text-white/90 text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <HiCheckCircle className="w-4 h-4" />
                    <span>{facility.features.length} Features</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Click Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-3 border-white animate-ping" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {selectedFacility && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedFacility(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`relative p-6 md:p-8 bg-linear-to-br ${
              selectedFacility.category === 'lab' ? 'from-blue-500 to-purple-600' :
              selectedFacility.category === 'workshop' ? 'from-orange-500 to-red-600' :
              selectedFacility.category === 'studio' ? 'from-green-500 to-teal-600' :
              'from-polibatam-orange to-polibatam-peach'
            } text-white`}>
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:rotate-90"
              >
                <HiX className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
                  <span className="text-2xl font-black">{selectedFacility.id}</span>
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-bold capitalize">{selectedFacility.category}</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2">
                {selectedFacility.name}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {selectedFacility.description}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold text-polibatam-navy mb-4 flex items-center gap-2">
                <HiCheckCircle className="w-6 h-6 text-polibatam-orange" />
                Key Features
              </h4>
              
              <div className="space-y-3">
                {selectedFacility.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 md:p-4 bg-polibatam-light/30 rounded-xl hover:bg-polibatam-peach/20 transition-colors duration-300"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-polibatam-orange/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-polibatam-orange">{index + 1}</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
