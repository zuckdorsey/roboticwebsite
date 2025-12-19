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

import { HiOfficeBuilding, HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    createdAt: string;
}

export default function GallerySection() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch('/api/gallery');
                if (!res.ok) throw new Error('Failed to fetch images');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setImages(data);
                } else {
                    console.error('Gallery data is not an array:', data);
                    setImages([]);
                }
            } catch (error) {
                console.error('Failed to fetch gallery images', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const openLightbox = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const goToPrevious = useCallback(() => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    }, [currentIndex, images]);

    const goToNext = useCallback(() => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    }, [currentIndex, images]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, goToPrevious, goToNext]);

    // Bento grid pattern - define layout pattern for each position
    const getBentoClass = (index: number): string => {
        const pattern = index % 6;
        switch (pattern) {
            case 0: return 'md:col-span-2 md:row-span-2'; // Large square
            case 1: return 'md:col-span-1 md:row-span-1'; // Small
            case 2: return 'md:col-span-1 md:row-span-2'; // Tall
            case 3: return 'md:col-span-2 md:row-span-1'; // Wide
            case 4: return 'md:col-span-1 md:row-span-1'; // Small
            case 5: return 'md:col-span-1 md:row-span-1'; // Small
            default: return 'md:col-span-1 md:row-span-1';
        }
    };

    if (loading) {
        return (
            <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-center items-center py-20">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-polibatam-orange/20 rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-polibatam-orange rounded-full animate-spin" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (images.length === 0) {
        return (
            <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-polibatam-orange rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-polibatam-navy rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-gradient-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm">
                        <HiOfficeBuilding className="w-5 h-5 text-polibatam-orange" />
                        <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                            Campus Gallery
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
                        Our Facilities
                    </h2>
                    <p className="text-lg text-gray-500">
                        No gallery images yet. Upload images from the admin panel.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <>
            <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-polibatam-orange/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-polibatam-navy/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/20 to-blue-100/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm"
                        >
                            <HiOfficeBuilding className="w-5 h-5 text-polibatam-orange" />
                            <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                                Campus Gallery
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-polibatam-navy via-polibatam-navy to-polibatam-orange bg-clip-text text-transparent"
                        >
                            Our Facilities
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                        >
                            Explore our state-of-the-art laboratories and workspaces designed to foster innovation and hands-on learning.
                        </motion.p>
                    </div>

                    {/* Bento Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4"
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`${getBentoClass(index)} group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-200`}
                                onClick={() => openLightbox(image, index)}
                            >
                                {/* Image */}
                                <Image
                                    src={image.url}
                                    alt={image.caption || `Campus facility image ${index + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Glowing border effect on hover */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />

                                {/* Caption */}
                                {image.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white font-semibold text-lg leading-snug drop-shadow-lg">
                                            {image.caption}
                                        </p>
                                    </div>
                                )}

                                {/* Click indicator */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Image count indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm text-gray-500">
                            Showing <span className="font-semibold text-polibatam-orange">{images.length}</span> images from our campus
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <HiX className="w-6 h-6 text-white" />
                        </button>

                        {/* Navigation buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-4 md:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <HiChevronLeft className="w-8 h-8 text-white" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-4 md:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <HiChevronRight className="w-8 h-8 text-white" />
                        </button>

                        {/* Main image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-5xl w-full max-h-[80vh] aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.url}
                                alt={selectedImage.caption || 'Gallery image'}
                                fill
                                className="object-contain rounded-2xl"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>

                        {/* Caption and counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            {selectedImage.caption && (
                                <p className="text-white text-lg font-medium mb-2 drop-shadow-lg max-w-xl">
                                    {selectedImage.caption}
                                </p>
                            )}
                            <p className="text-white/60 text-sm">
                                {currentIndex + 1} / {images.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
