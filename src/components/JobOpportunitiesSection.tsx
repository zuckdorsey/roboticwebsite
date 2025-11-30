'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { HiChevronLeft, HiChevronRight, HiBriefcase } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { jobOpportunities } from '@/data/job-opportunities';

export default function JobOpportunitiesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    // Auto-slide every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying || isExpanded) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % jobOpportunities.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, isExpanded]);

    const handlePrev = () => {
        setIsAutoPlaying(false);
        setIsExpanded(false);
        setCurrentIndex((prev) => (prev - 1 + jobOpportunities.length) % jobOpportunities.length);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setIsExpanded(false);
        setCurrentIndex((prev) => (prev + 1) % jobOpportunities.length);
    };

    const currentJob = jobOpportunities[currentIndex];
    const visibleDuties = isExpanded ? currentJob.duties : currentJob.duties.slice(0, 4);

    return (
        <section className="py-20 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-peach/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-polibatam-orange/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-linear-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm">
                        <HiBriefcase className="w-5 h-5 text-polibatam-orange" />
                        <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                            Career Paths
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
                        Graduate Job Opportunities
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        After attending lectures for 8 semesters, it is hoped that graduates will be able to fill the following work positions:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Buttons - Desktop */}
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 w-14 h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 items-center justify-center text-polibatam-blue hover:text-white hover:bg-polibatam-blue hover:scale-110 transition-all duration-300 group"
                        aria-label="Previous job"
                    >
                        <HiChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 w-14 h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 items-center justify-center text-polibatam-blue hover:text-white hover:bg-polibatam-blue hover:scale-110 transition-all duration-300 group"
                        aria-label="Next job"
                    >
                        <HiChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="px-4 py-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <Card className="relative overflow-hidden border-none shadow-2xl bg-white/80 backdrop-blur-xl min-h-[450px] rounded-3xl group">
                                    {/* Card Background Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-br from-white via-white to-polibatam-light/50 opacity-50"></div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-polibatam-blue/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-polibatam-orange/5 rounded-tr-full -ml-6 -mb-6 transition-transform duration-700 group-hover:scale-150"></div>

                                    <CardHeader className="relative flex flex-col md:flex-row gap-8 px-8 pt-8 pb-6 border-b border-gray-100/50">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-polibatam-blue/20 blur-xl rounded-full"></div>
                                            <div className="relative p-5 bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                                                <currentJob.icon className="w-12 h-12 text-polibatam-blue" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-3xl md:text-4xl font-black text-polibatam-navy mb-2 tracking-tight">
                                                {currentJob.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className="px-3 py-1 rounded-full bg-polibatam-blue/10 text-polibatam-blue text-sm font-bold uppercase tracking-wider">
                                                    Career Opportunity
                                                </span>
                                                <div className="h-px flex-1 bg-polibatam-blue/20"></div>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardBody className="relative px-8 py-8">
                                        <ul className="grid gap-4">
                                            {visibleDuties.map((duty, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-4 group/item"
                                                >
                                                    <div className="mt-1.5 relative shrink-0">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-polibatam-blue/20 group-hover/item:bg-polibatam-orange/20 transition-colors duration-300"></div>
                                                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-polibatam-blue group-hover/item:bg-polibatam-orange scale-50 group-hover/item:scale-100 transition-all duration-300"></div>
                                                    </div>
                                                    <span className="text-lg text-gray-600 leading-relaxed group-hover/item:text-polibatam-navy transition-colors duration-300">
                                                        {duty}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {currentJob.duties.length > 4 && (
                                            <div className="mt-6 flex justify-center">
                                                <button
                                                    onClick={() => {
                                                        setIsExpanded(!isExpanded);
                                                        setIsAutoPlaying(false);
                                                    }}
                                                    className="text-polibatam-blue font-bold hover:text-polibatam-orange transition-colors duration-300 flex items-center gap-1 group/btn"
                                                >
                                                    {isExpanded ? 'Show Less' : 'Read More'}
                                                    <HiChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'rotate-90 group-hover/btn:translate-y-1'}`} />
                                                </button>
                                            </div>
                                        )}
                                    </CardBody>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {jobOpportunities.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                    ? 'bg-polibatam-blue w-12 shadow-lg shadow-polibatam-blue/30'
                                    : 'bg-gray-300 w-2 hover:bg-polibatam-blue/50 hover:scale-125'
                                    }`}
                                aria-label={`Go to job ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden justify-center gap-8 mt-8">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-polibatam-blue active:bg-polibatam-blue active:text-white transition-all active:scale-95 border border-gray-100"
                        >
                            <HiChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-polibatam-blue active:bg-polibatam-blue active:text-white transition-all active:scale-95 border border-gray-100"
                        >
                            <HiChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
