'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchLatestPosts = async () => {
      try {
        const response = await fetch('/api/posts/latest?limit=5', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as Array<{
          id: string;
          title: string;
          description: string;
          slug: string;
          coverImage: string;
        }>;

        if (!Array.isArray(data) || data.length === 0) {
          return;
        }

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

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, posts.length]);

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    changeSlide((currentIndex - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    changeSlide((currentIndex + 1) % posts.length);
  };

  const currentPost = posts[currentIndex];
  // Fix for local images
  const coverImageSrc = currentPost.coverImage.replace(/^http:\/\/localhost:3000/, '');

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-polibatam-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-polibatam-navy/5 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-polibatam-orange font-bold uppercase tracking-wider text-sm mb-2 block">
              From the Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-polibatam-navy">
              Latest Insights & Updates
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-polibatam-navy hover:bg-polibatam-navy hover:text-white hover:border-polibatam-navy transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-polibatam-navy hover:bg-polibatam-navy hover:text-white hover:border-polibatam-navy transition-all duration-300 shadow-sm hover:shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full overflow-hidden group">
              <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${isAnimating ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}>
                <Image
                  src={coverImageSrc}
                  alt={currentPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-sm font-bold text-polibatam-navy shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-polibatam-orange animate-pulse" />
                  {currentPost.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 right-8 text-polibatam-light/30 hidden lg:block">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.313 13.533 17.257 12.963C18.201 12.393 19.261 12.108 20.437 12.108V7C19.063 7 17.813 7.428 16.687 8.284C15.561 9.14 14.673 10.276 14.023 11.692C13.373 13.108 13.048 14.716 13.048 16.516H14.017V21ZM5.017 21L5.017 18C5.017 16.896 5.321 15.923 5.929 15.081C6.537 14.239 7.313 13.533 8.257 12.963C9.201 12.393 10.261 12.108 11.437 12.108V7C10.063 7 8.813 7.428 7.687 8.284C6.561 9.14 5.673 10.276 5.023 11.692C4.373 13.108 4.048 14.716 4.048 16.516H5.017V21Z" />
                </svg>
              </div>

              <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-polibatam-orange" />
                    <span>Latest Post</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-polibatam-orange" />
                    <span>5 min read</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-polibatam-navy mb-6 leading-tight">
                  <Link href={`/blog/${currentPost.slug}`} className="hover:text-polibatam-orange transition-colors">
                    {currentPost.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                  {currentPost.excerpt}
                </p>

                <div className="flex items-center gap-6">
                  <Link
                    href={`/blog/${currentPost.slug}`}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-polibatam-navy text-white rounded-full font-semibold hover:bg-polibatam-orange transition-all duration-300 shadow-lg hover:shadow-polibatam-orange/30 group"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/blog"
                    className="text-polibatam-navy font-semibold hover:text-polibatam-orange transition-colors"
                  >
                    View All Posts
                  </Link>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                <div
                  className="h-full bg-polibatam-orange transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / posts.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
