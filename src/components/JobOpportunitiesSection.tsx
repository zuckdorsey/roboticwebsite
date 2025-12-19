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

import { useState } from 'react';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { jobOpportunities } from '@/data/job-opportunities';

export default function JobOpportunitiesSection() {
    const [selectedJobIndex, setSelectedJobIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const selectedJob = jobOpportunities[selectedJobIndex];

    // Reset expansion when changing jobs
    const handleJobChange = (index: number) => {
        setSelectedJobIndex(index);
        setIsExpanded(false);
    };

    const visibleDuties = isExpanded ? selectedJob.duties : selectedJob.duties.slice(0, 4);
    const hasMoreDuties = selectedJob.duties.length > 4;

    return (
        <section className="py-24 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-polibatam-peach/20 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-polibatam-orange/10 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-linear-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm"
                    >
                        <HiBriefcase className="w-5 h-5 text-polibatam-orange" />
                        <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                            Future Careers
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-linear-to-r from-polibatam-navy to-polibatam-orange bg-clip-text text-transparent"
                    >
                        Your Path After Graduation
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Our curriculum is designed to prepare you for these key roles in the robotics industry.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left Column: Job List (Desktop) / Accordion (Mobile) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {jobOpportunities.map((job, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleJobChange(index)}
                                className={`group relative p-6 text-left rounded-2xl transition-all duration-300 border ${selectedJobIndex === index
                                    ? 'bg-white text-polibatam-blue shadow-lg shadow-polibatam-blue/10 border-polibatam-blue ring-1 ring-polibatam-blue'
                                    : 'bg-white hover:bg-gray-50 text-gray-500 border-gray-100 hover:border-polibatam-blue/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <span className={`text-xl font-bold transition-colors ${selectedJobIndex === index ? 'text-polibatam-blue' : 'text-polibatam-navy group-hover:text-polibatam-blue'
                                        }`}>
                                        {job.title}
                                    </span>
                                    {selectedJobIndex === index && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="w-2 h-2 bg-polibatam-blue rounded-full"
                                        />
                                    )}
                                </div>

                                {/* Mobile Accordion Content */}
                                <div className="lg:hidden">
                                    <AnimatePresence>
                                        {selectedJobIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-3 mb-4 text-polibatam-blue">
                                                        <job.icon className="w-6 h-6" />
                                                        <span className="font-medium">Key Responsibilities</span>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {job.duties.map((duty, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                                                <HiCheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-polibatam-blue" />
                                                                <span>{duty}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Column: Details (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-7 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedJobIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                            >
                                {/* Decorative Background for Details */}
                                <div className="absolute -inset-8 bg-linear-to-br from-gray-50 to-white rounded-[3rem] -z-10 border border-gray-100/50"></div>

                                <div className="flex items-start gap-6 mb-8">
                                    <div className="p-4 bg-white rounded-2xl shadow-lg shadow-polibatam-blue/5 border border-gray-100">
                                        <selectedJob.icon className="w-12 h-12 text-polibatam-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-polibatam-navy mb-2">
                                            {selectedJob.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">
                                                Full-time
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="text-sm">High Demand</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                        What you will do
                                        <div className="h-px flex-1 bg-gray-100"></div>
                                    </h4>

                                    <ul className="grid grid-cols-1 gap-4">
                                        {visibleDuties.map((duty, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-300 group"
                                            >
                                                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-polibatam-blue/10 flex items-center justify-center group-hover:bg-polibatam-blue group-hover:text-white transition-colors">
                                                    <HiCheckCircle className="w-4 h-4 text-polibatam-blue group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="text-gray-600 leading-relaxed group-hover:text-gray-900">
                                                    {duty}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {hasMoreDuties && (
                                        <div className="flex justify-center pt-4">
                                            <button
                                                onClick={() => setIsExpanded(!isExpanded)}
                                                className="px-6 py-2 rounded-full bg-polibatam-blue/5 text-polibatam-blue font-bold text-sm hover:bg-polibatam-blue hover:text-white transition-all duration-300 flex items-center gap-2 group"
                                            >
                                                {isExpanded ? 'Show Less' : 'Read More'}
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
