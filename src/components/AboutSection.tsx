/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

'use client';

import Image from 'next/image';
import { HiAcademicCap, HiExternalLink, HiX, HiSparkles } from 'react-icons/hi';
import { useState } from 'react';
import { aboutContent } from '@/data/about-content';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-polibatam-orange/10 to-polibatam-peach/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-polibatam-navy/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0B1F4A 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-polibatam-orange/10 rounded-full border border-polibatam-orange/20 mb-6">
            <HiSparkles className="w-4 h-4 text-polibatam-orange" />
            <span className="text-sm font-semibold text-polibatam-orange">Tentang Program Studi</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-polibatam-navy via-polibatam-navy to-polibatam-orange bg-clip-text text-transparent">
            {aboutContent.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-polibatam-orange to-polibatam-peach mx-auto rounded-full" />
        </motion.div>

        {/* Accreditation Cards - Horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {aboutContent.accreditations.map((accreditation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-polibatam-orange/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Gradient accent top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-polibatam-orange via-polibatam-peach to-polibatam-orange" />

                  {/* Background decoration */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-polibatam-orange/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-polibatam-orange to-polibatam-peach flex items-center justify-center shadow-lg shadow-polibatam-orange/30 group-hover:scale-110 transition-transform">
                          <HiAcademicCap className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-polibatam-orange uppercase tracking-wider mb-1">
                            {accreditation.institution}
                          </p>
                          <h3 className="text-3xl md:text-4xl font-black text-polibatam-navy">
                            {accreditation.status}
                          </h3>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-100 border border-green-200">
                        <span className="text-xs font-bold text-green-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Active
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <p className="text-gray-700 font-medium mb-4">{accreditation.title}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{accreditation.description}</p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-100">
                        <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Grade</p>
                        <p className="text-2xl font-black text-polibatam-navy">{accreditation.grade}</p>
                      </div>
                      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-gray-100">
                        <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Program</p>
                        <p className="text-2xl font-black text-polibatam-navy">{accreditation.program}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => setSelectedCertificate(accreditation.certificateUrl)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-polibatam-navy/5 hover:bg-polibatam-navy text-polibatam-navy hover:text-white rounded-xl font-semibold transition-all duration-300 group/btn"
                    >
                      <span>Lihat Sertifikat</span>
                      <HiExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Content - Quote Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Quote decoration */}
            <div className="absolute -top-8 -left-4 md:-left-8 text-8xl md:text-9xl font-serif text-polibatam-orange/10 select-none leading-none">
              "
            </div>

            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-polibatam-navy text-center">
                {aboutContent.paragraphs[0]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Paragraphs */}
        {aboutContent.paragraphs.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 md:mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {aboutContent.paragraphs.slice(1).map((paragraph, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-polibatam-orange via-polibatam-peach to-transparent rounded-full" />
                  <p className="pl-6 text-gray-600 leading-relaxed text-justify">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* PEO Section */}
        {aboutContent.peo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Grid Layout */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left: CDIO & Title */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  {/* CDIO Logo */}
                  <div className="w-full max-w-[200px] aspect-video relative bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 overflow-hidden">
                    <Image
                      src="/cdio.png"
                      alt="CDIO Initiative"
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="px-4 py-1.5 bg-polibatam-orange/10 rounded-full inline-block mb-4 border border-polibatam-orange/20">
                    <span className="text-xs font-bold text-polibatam-orange uppercase tracking-wider">Program Objectives</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-polibatam-navy mb-4 leading-tight">
                    {aboutContent.peo.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {aboutContent.peo.introduction}
                  </p>

                  <div className="w-16 h-1 bg-gradient-to-r from-polibatam-orange to-polibatam-peach rounded-full mt-6" />
                </div>
              </div>

              {/* Right: Objectives List */}
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {aboutContent.peo.objectives.map((objective, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="group flex gap-5 md:gap-6 items-start p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-polibatam-orange/20 transition-all duration-300"
                    >
                      {/* Number */}
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-black text-polibatam-orange/20 group-hover:text-polibatam-orange/40 transition-colors">
                          {index + 1}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                          {objective.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
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
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <HiX className="w-6 h-6" />
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
        )}
      </AnimatePresence>
    </section>
  );
}
