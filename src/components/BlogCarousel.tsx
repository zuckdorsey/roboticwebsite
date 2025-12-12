'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage: string;
}

const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Membangun Robot Line Follower dengan Arduino',
    excerpt: 'Panduan lengkap untuk pemula dalam membuat robot line follower menggunakan Arduino dan sensor infrared.',
    slug: 'membangun-robot-line-follower',
    category: 'Tutorial',
    coverImage: '/images/blog/robot-line-follower.jpg',
  },
  {
    id: '2',
    title: 'Inovasi Robotika di Industri 4.0',
    excerpt: 'Eksplorasi peran robotika dalam transformasi digital industri manufaktur modern.',
    slug: 'inovasi-robotika-industri-4-0',
    category: 'Insights',
    coverImage: '/images/blog/industri-4.0.jpg',
  },
  {
    id: '3',
    title: 'Kompetisi Robotika Nasional 2025',
    excerpt: 'Mahasiswa Polibatam meraih juara dalam kompetisi robotika tingkat nasional dengan inovasi terbaru.',
    slug: 'kompetisi-robotika-nasional-2025',
    category: 'News',
    coverImage: '/images/blog/kompetisi-robotika.jpg',
  },
  {
    id: '4',
    title: 'Teknologi Computer Vision untuk Robot',
    excerpt: 'Implementasi machine learning dan computer vision dalam pengembangan robot otonom.',
    slug: 'teknologi-computer-vision-robot',
    category: 'Technology',
    coverImage: '/images/blog/computer-vision.jpg',
  },
  {
    id: '5',
    title: 'Peluang Karir di Bidang Robotika',
    excerpt: 'Prospek karir dan peluang pengembangan diri di industri robotika Indonesia dan global.',
    slug: 'peluang-karir-robotika',
    category: 'Career',
    coverImage: '/images/blog/karir-robotika.jpg',
  },
];

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);

  useEffect(() => {
    let isMounted = true;

    const fetchLatestPosts = async () => {
      try {
        const response = await fetch('/api/posts/latest?limit=5', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });

        if (!response.ok) return;

        const data = (await response.json()) as Array<{
          id: string;
          title: string;
          description: string;
          slug: string;
          coverImage: string;
        }>;

        if (!Array.isArray(data) || data.length === 0) return;

        if (isMounted) {
          const formatted: BlogPost[] = data.map((post) => ({
            id: post.id,
            title: post.title,
            excerpt: post.description,
            slug: post.slug,
            category: 'Blog',
            coverImage: post.coverImage,
          }));

          setPosts(formatted);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error('Failed to load latest posts', error);
      }
    };

    void fetchLatestPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const currentPost = posts[currentIndex];
  const coverImageSrc = currentPost.coverImage.replace(/^http:\/\/localhost:3000/, '');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-polibatam-orange/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-polibatam-navy/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-polibatam-orange/10 rounded-full border border-polibatam-orange/20 mb-4">
              <Sparkles className="w-4 h-4 text-polibatam-orange" />
              <span className="text-sm font-semibold text-polibatam-orange">Blog & Artikel</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-polibatam-navy">
              Latest Insights & Updates
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-polibatam-navy hover:bg-polibatam-navy hover:text-white hover:border-polibatam-navy transition-all duration-300 shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-polibatam-navy hover:bg-polibatam-navy hover:text-white hover:border-polibatam-navy transition-all duration-300 shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[400px] md:min-h-[450px]">
              {/* Image */}
              <div className="relative h-[250px] md:h-[300px] lg:h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPost.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={coverImageSrc}
                      alt={currentPost.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
                  </motion.div>
                </AnimatePresence>

                {/* Category badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs md:text-sm font-bold text-polibatam-navy shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-polibatam-orange animate-pulse" />
                    {currentPost.category}
                  </span>
                </div>

                {/* Slide indicators - Mobile only */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
                  {posts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/50 hover:bg-white/70'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Post number */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl md:text-6xl font-black text-polibatam-orange/10">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-polibatam-orange/20 to-transparent" />
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-polibatam-navy mb-4 leading-tight">
                      <Link href={`/blog/${currentPost.slug}`} className="hover:text-polibatam-orange transition-colors">
                        {currentPost.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                      {currentPost.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/blog/${currentPost.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-polibatam-orange to-polibatam-peach text-white rounded-xl font-semibold text-sm shadow-lg shadow-polibatam-orange/20 hover:shadow-xl hover:shadow-polibatam-orange/30 transition-all duration-300 group"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/blog"
                        className="text-polibatam-navy font-semibold text-sm hover:text-polibatam-orange transition-colors"
                      >
                        Lihat Semua →
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                  <motion.div
                    className="h-full bg-gradient-to-r from-polibatam-orange to-polibatam-peach"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / posts.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop slide indicators */}
          <div className="hidden lg:flex justify-center gap-2 mt-6">
            {posts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                    ? 'w-8 bg-polibatam-orange'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
