'use client';

import { Card, CardFooter, Button } from '@heroui/react';
import { HiOfficeBuilding, HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export interface GalleryItem {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    size?: 'small' | 'medium' | 'large';
}

interface GallerySectionProps {
    items: GalleryItem[];
}

export default function GallerySection({ items }: GallerySectionProps) {
    return (
        <section id="gallery" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
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
                        Explore our state-of-the-art laboratories and workspaces designed to foster innovation and hands-on learning.
                    </p>
                </div>

                {/* Mobile Carousel (Visible on Mobile) */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
                    {items.slice(0, 3).map((item) => (
                        <Card
                            key={item.id}
                            className="min-w-[85vw] snap-center w-full h-[320px] group cursor-pointer overflow-hidden border-none shadow-xl shrink-0"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60" />
                            </div>

                            {/* Content Overlay */}
                            <CardFooter className="absolute bottom-0 z-10 flex-col items-start p-6 w-full">
                                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                                    {item.title}
                                </h4>
                                <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}

                    {/* View All Card */}
                    <Link href="/facilities" className="min-w-[85vw] snap-center shrink-0">
                        <Card className="w-full h-[320px] bg-polibatam-navy group cursor-pointer border-none shadow-xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-polibatam-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="text-center z-10 p-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <HiArrowRight className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">View All Facilities</h4>
                                <p className="text-white/60 text-sm">Explore our complete infrastructure</p>
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* Desktop Masonry Grid (Hidden on Mobile) */}
                <motion.div
                    layout
                    className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence>
                        {items.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="break-inside-avoid"
                            >
                                <Card
                                    className={`w-full group cursor-pointer overflow-hidden border-none shadow-xl ${item.size === 'large' ? 'h-[500px]' : item.size === 'medium' ? 'h-[400px]' : 'h-[300px]'
                                        }`}
                                >
                                    {/* Image Background */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                                    </div>

                                    {/* Content Overlay */}
                                    <CardFooter className="absolute bottom-0 z-10 flex-col items-start p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                                        <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto">
                                            {item.description}
                                        </p>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
