'use client';

import { Card, CardFooter } from '@heroui/react';
import { HiOfficeBuilding } from 'react-icons/hi';
import Image from 'next/image';
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
                        Explore our state-of-the-art laboratories and workspaces designed to foster innovation and hands-on learning.
                    </p>
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
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
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
