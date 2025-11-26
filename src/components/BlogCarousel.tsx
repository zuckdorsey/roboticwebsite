'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage: string;
}

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Dummy blog data - format siap untuk backend integration
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Membangun Robot Line Follower dengan Arduino',
      excerpt: 'Panduan lengkap untuk pemula dalam membuat robot line follower menggunakan Arduino dan sensor infrared.',
      slug: 'membangun-robot-line-follower',
      category: 'Tutorial',
      coverImage: '/images/blog/robot-line-follower.jpg',
    },
    {
      id: 2,
      title: 'Inovasi Robotika di Industri 4.0',
      excerpt: 'Eksplorasi peran robotika dalam transformasi digital industri manufaktur modern.',
      slug: 'inovasi-robotika-industri-4-0',
      category: 'Insights',
      coverImage: '/images/blog/industri-4.0.jpg',
    },
    {
      id: 3,
      title: 'Kompetisi Robotika Nasional 2025',
      excerpt: 'Mahasiswa Polibatam meraih juara dalam kompetisi robotika tingkat nasional dengan inovasi terbaru.',
      slug: 'kompetisi-robotika-nasional-2025',
      category: 'News',
      coverImage: '/images/blog/kompetisi-robotika.jpg',
    },
    {
      id: 4,
      title: 'Teknologi Computer Vision untuk Robot',
      excerpt: 'Implementasi machine learning dan computer vision dalam pengembangan robot otonom.',
      slug: 'teknologi-computer-vision-robot',
      category: 'Technology',
      coverImage: '/images/blog/computer-vision.jpg',
    },
    {
      id: 5,
      title: 'Peluang Karir di Bidang Robotika',
      excerpt: 'Prospek karir dan peluang pengembangan diri di industri robotika Indonesia dan global.',
      slug: 'peluang-karir-robotika',
      category: 'Career',
      coverImage: '/images/blog/karir-robotika.jpg',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, blogPosts.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const currentPost = blogPosts[currentIndex];

  return (
    <section className="py-16 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
      {/* Decorative Frame Elements - Abstract & Compact */}
      <div className="absolute top-6 left-6 w-32 h-32 border-t-3 border-l-3 border-polibatam-orange opacity-18 rounded-tl-3xl hidden lg:block -rotate-2"></div>
      <div className="absolute top-16 left-16 w-20 h-20 border-t-2 border-l-2 border-polibatam-peach opacity-35 rounded-tl-2xl hidden lg:block"></div>
      
      <div className="absolute top-12 right-4 w-28 h-28 border-r-3 border-t-3 border-polibatam-navy opacity-15 rounded-tr-3xl hidden lg:block rotate-3"></div>
      <div className="absolute top-6 right-20 w-16 h-16 border-r-2 border-t-2 border-polibatam-orange opacity-28 rounded-tr-2xl hidden lg:block"></div>
      
      <div className="absolute bottom-8 left-4 w-28 h-28 border-l-3 border-b-3 border-polibatam-orange opacity-22 rounded-bl-3xl hidden lg:block -rotate-3"></div>
      <div className="absolute bottom-20 left-14 w-14 h-14 border-l-2 border-b-2 border-polibatam-navy opacity-32 rounded-bl-2xl hidden lg:block"></div>
      
      <div className="absolute bottom-6 right-8 w-36 h-36 border-r-3 border-b-3 border-polibatam-navy opacity-18 rounded-br-3xl hidden lg:block rotate-2"></div>
      <div className="absolute bottom-18 right-28 w-18 h-18 border-r-2 border-b-2 border-polibatam-peach opacity-38 rounded-br-2xl hidden lg:block rotate-6"></div>
      
      {/* Abstract circles - smaller */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-polibatam-orange/18 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-polibatam-navy/22 rounded-full hidden lg:block"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-polibatam-navy mb-3">
            Latest Insights
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Explore articles, tutorials, and updates from the world of robotics and innovation.
          </p>
        </div>

        {/* Carousel Container - Higher with Image Background */}
        <div className="bg-white rounded-2xl shadow-md relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={currentPost.coverImage}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay - Only right 25% */}
            <div className="absolute inset-0 bg-linear-to-l from-polibatam-navy/85 via-polibatam-navy/50 via-25% to-transparent to-30%"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 min-h-[350px]">
              {/* Navigation Button - Left */}
              <button
                onClick={handlePrev}
                aria-label="Previous blog post"
                className="hidden md:flex w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md items-center justify-center transition-all hover:scale-110 hover:bg-white group self-center"
              >
                <ChevronLeft className="w-5 h-5 text-polibatam-navy group-hover:text-polibatam-orange transition-colors" />
              </button>

              {/* Blog Content - Center */}
              <div className="flex-1 space-y-4 text-center md:text-left flex flex-col justify-center">
                {/* Category Badge */}
                <div className="flex justify-center md:justify-start">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-polibatam-orange text-xs font-semibold rounded-full uppercase tracking-wide shadow-sm">
                    {currentPost.category}
                  </span>
                </div>

                {/* Title - White text for contrast */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  {currentPost.title}
                </h3>

                {/* Excerpt - White text with slight transparency */}
                <p className="text-white/95 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md">
                  {currentPost.excerpt}
                </p>

                {/* Read More Button */}
                <div>
                  <Link
                    href={`/blog/${currentPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-polibatam-orange rounded-full text-sm font-medium hover:bg-polibatam-orange hover:text-white transition-all hover:scale-105 shadow-md hover:shadow-lg group"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                  {blogPosts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`transition-all ${
                        index === currentIndex
                          ? 'w-8 h-2 bg-white shadow-md'
                          : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                      } rounded-full`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Button - Right */}
              <button
                onClick={handleNext}
                aria-label="Next blog post"
                className="hidden md:flex w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md items-center justify-center transition-all hover:scale-110 hover:bg-white group self-center"
              >
                <ChevronRight className="w-5 h-5 text-polibatam-navy group-hover:text-polibatam-orange transition-colors" />
              </button>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                aria-label="Previous blog post"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md flex items-center justify-center transition-all hover:scale-110 hover:bg-white group"
              >
                <ChevronLeft className="w-5 h-5 text-polibatam-navy group-hover:text-polibatam-orange transition-colors" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next blog post"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md flex items-center justify-center transition-all hover:scale-110 hover:bg-white group"
              >
                <ChevronRight className="w-5 h-5 text-polibatam-navy group-hover:text-polibatam-orange transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
