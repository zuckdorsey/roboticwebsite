'use client';

import Image from 'next/image';
import { Card, CardBody, Chip, Button } from '@heroui/react';
import { HiAcademicCap, HiCog, HiExternalLink, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { aboutContent } from '@/data/about-content';
import { AnimatePresence, motion } from 'framer-motion';


export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
      {/* Gradient Separator from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-polibatam-light via-polibatam-peach/20 to-transparent -z-10"></div>

      {/* Animated Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-peach/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-orange/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-polibatam-peach/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent px-4">
            {aboutContent.title}
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-polibatam-orange to-polibatam-peach mx-auto rounded-full"></div>
        </div>

        {/* Accreditation Cards */}
        <div className={`grid md:grid-cols-2 gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {aboutContent.accreditations.map((accreditation, index) => (
            <div key={index} className="group relative h-full">
              {/* Card Container */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/50 shadow-xl shadow-polibatam-orange/5 hover:shadow-2xl hover:shadow-polibatam-orange/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-polibatam-peach/20 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-polibatam-orange/5 to-transparent rounded-tr-full -ml-12 -mb-12 transition-transform duration-700 group-hover:scale-110" />

                <div className="relative z-10 flex flex-col items-start h-full">
                  {/* Header: Icon & Badge */}
                  <div className="w-full flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-polibatam-orange to-polibatam-peach flex items-center justify-center shadow-lg shadow-polibatam-orange/20 group-hover:scale-110 transition-transform duration-500">
                      <HiAcademicCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-polibatam-orange/10 border border-polibatam-orange/20 text-polibatam-orange text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-polibatam-orange animate-pulse" />
                      Terakreditasi
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <p className="text-polibatam-orange font-bold text-sm tracking-wide uppercase mb-1 opacity-80">
                        {accreditation.institution}
                      </p>
                      <h3 className="text-4xl font-black text-polibatam-navy leading-none mb-2">
                        {accreditation.status}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">
                        {accreditation.title}
                      </p>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm">
                      {accreditation.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 rounded-xl bg-polibatam-light/50 border border-polibatam-peach/30">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Grade</p>
                        <p className="text-xl font-black text-polibatam-navy">{accreditation.grade}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-polibatam-light/50 border border-polibatam-peach/30">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Program</p>
                        <p className="text-xl font-black text-polibatam-navy">{accreditation.program}</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Action */}
                  <div className="w-full pt-4 border-t border-gray-100">
                    <Button
                      onPress={() => setSelectedCertificate(accreditation.certificateUrl)}
                      className="w-full bg-white text-polibatam-navy font-bold shadow-sm border border-gray-200 hover:border-polibatam-orange hover:text-polibatam-orange transition-all group/btn cursor-pointer"
                      endContent={<HiExternalLink className="group-hover/btn:translate-x-1 transition-transform" />}
                      size="lg"
                      radius="full"
                    >
                      View Certificate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content - Modern Magazine Layout */}
        <div
          className={`mb-16 md:mb-24 max-w-7xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="relative">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-12 -left-4 md:-left-12 text-[12rem] leading-none font-serif text-polibatam-orange/10 select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Lead Paragraph Container */}
            <div className="relative z-10 mb-16 md:mb-20">
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-white/60 shadow-sm">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-polibatam-navy text-center max-w-5xl mx-auto">
                  {aboutContent.paragraphs[0]}
                </p>
              </div>
              {/* Decorative bottom line */}
              <div className="w-24 h-1 bg-linear-to-r from-polibatam-orange to-polibatam-peach mx-auto mt-8 rounded-full" />
            </div>
          </div>

          {/* Remaining Paragraphs - 2 Column Grid with Divider */}
          {aboutContent.paragraphs.length > 1 && (
            <div className="relative grid md:grid-cols-2 gap-12 md:gap-20 text-lg text-gray-600 leading-relaxed text-justify">
              {/* Vertical Divider (Desktop) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-polibatam-navy/10 to-transparent hidden md:block -translate-x-1/2" />

              {aboutContent.paragraphs.slice(1).map((paragraph, index) => (
                <div key={index} className="group/text relative">
                  <p className="relative z-10 transition-colors duration-300 group-hover/text:text-gray-800">
                    <span className="float-left mr-4 mt-1 px-3 py-1 bg-polibatam-orange/10 text-polibatam-orange text-4xl font-black rounded-lg border border-polibatam-orange/20 group-hover/text:bg-polibatam-orange group-hover/text:text-white transition-all duration-300">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Program Educational Objectives (PEO) - Modern Magazine Layout */}
        {aboutContent.peo && (
          <div
            className={`mb-16 md:mb-24 max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Left Column: Title & Intro */}
              <div className="md:col-span-5">
                <div className="sticky top-24">
                  {/* CDIO Logo */}
                  <div className="mb-6 relative group/logo">
                    <div className="relative w-full aspect-video max-w-[280px] bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden hover:shadow-xl transition-all duration-500 group-hover/logo:-translate-y-1">
                      {/* Decorative background */}
                      <div className="absolute inset-0 bg-linear-to-br from-polibatam-orange/5 to-polibatam-peach/5 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                      <Image
                        src="/cdio.png"
                        alt="CDIO Initiative Logo"
                        fill
                        className="object-contain p-2 group-hover/logo:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 200px, 300px"
                      />
                    </div>
                  </div>

                  <div className="inline-block px-4 py-2 bg-polibatam-orange/10 rounded-full text-polibatam-orange font-bold text-sm tracking-widest uppercase mb-6">
                    Educational Framework
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-polibatam-navy mb-6 leading-tight">
                    {aboutContent.peo.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {aboutContent.peo.introduction}
                  </p>
                  <div className="w-20 h-1.5 bg-polibatam-orange rounded-full" />
                </div>
              </div>

              {/* Right Column: Objectives List */}
              <div className="md:col-span-7 space-y-8">
                {aboutContent.peo.objectives.map((objective, index) => (
                  <div key={index} className="group relative pl-8 md:pl-12 border-l-2 border-gray-100 hover:border-polibatam-orange transition-colors duration-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-gray-100 group-hover:border-polibatam-orange transition-colors duration-500" />

                    <div className="mb-2">
                      <span className="text-2xl font-black text-polibatam-navy group-hover:text-polibatam-orange transition-colors duration-300">
                        {objective.code}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {objective.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {
          selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <HiX className="w-6 h-6 text-gray-800" />
                </button>

                <div className="relative w-full h-[80vh]">
                  <Image
                    src={selectedCertificate}
                    alt="Certificate Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </section >
  );
}
