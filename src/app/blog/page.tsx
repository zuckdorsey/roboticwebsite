import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import type { Post } from "@prisma/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPaginatedPosts } from "@/lib/posts";
import { estimateReadingTime } from "@/lib/reading-time";
import { formatDate } from "@/lib/format";
import { buildAbsoluteUrl, getSiteUrl, toIsoString } from "@/lib/seo";

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const params = await searchParams;
  const currentPage = Number(params?.page ?? "1");
  const page = Number.isFinite(currentPage) && currentPage > 0 ? currentPage : 1;

  const siteUrl = getSiteUrl();
  const canonicalPath = page > 1 ? `/blog?page=${page}` : "/blog";
  const pageTitle = page > 1 ? `Blog - Page ${page}` : "Blog";

  return {
    title: pageTitle,
    description: "Latest stories, tutorials, and updates from the Polibatam Robotics community.",
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: "Polibatam Robotics Blog",
      description: "Explore the latest research highlights, project tutorials, and inspiring stories from our robotics innovators.",
      url: `${siteUrl}${canonicalPath}`,
      type: "website",
      images: [
        {
          url: buildAbsoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: "Polibatam Robotics Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Polibatam Robotics Blog",
      description: "Latest stories, tutorials, and updates from the Polibatam Robotics community.",
      images: [buildAbsoluteUrl("/og-image.jpg")],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface BlogPageProps {
  searchParams?: Promise<{ page?: string }>;
}

const PAGE_SIZE = 6;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params?.page ?? "1");
  const page = Number.isFinite(currentPage) && currentPage > 0 ? currentPage : 1;

  const { posts, totalPages, totalPosts } = await getPaginatedPosts(page, PAGE_SIZE);
  const siteUrl = getSiteUrl();
  const canonicalUrl = page > 1 ? `${siteUrl}/blog?page=${page}` : `${siteUrl}/blog`;

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    url: canonicalUrl,
    name: "Polibatam Robotics Blog",
    description: "Latest stories, tutorials, and updates from the Polibatam Robotics community.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Polibatam Robotics",
      logo: {
        "@type": "ImageObject",
        url: buildAbsoluteUrl("/logo.png"),
      },
    },
    blogPost: posts.map((post: Post, index: number) => {
      const sanitizedCover = post.coverImage.replace(/^https?:\/\/localhost:3000/, "");
      const coverImage = buildAbsoluteUrl(sanitizedCover);
      const postUrl = `${siteUrl}/blog/${post.slug}`;

      return {
        "@type": "BlogPosting",
        "@id": `${postUrl}#blog-post`,
        mainEntityOfPage: postUrl,
        headline: post.title,
        description: post.description,
        image: coverImage,
  datePublished: toIsoString(post.createdAt),
  dateModified: toIsoString(post.updatedAt ?? post.createdAt),
        author: {
          "@type": "Organization",
          name: "Polibatam Robotics Team",
        },
        position: index + 1,
        url: postUrl,
      };
    }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page > 1 ? `Blog (Page ${page})` : "Blog",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="relative bg-polibatam-navy pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-polibatam-orange/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-polibatam-blue/10 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">
            Our Stories & Updates
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Robotics <span className="text-polibatam-orange">Insights</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Explore the latest research highlights, project tutorials, and inspiring stories from our robotics innovators.
          </p>

          {/* Search Bar Placeholder */}
          <div className="mt-10 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
              placeholder="Search articles..."
            />
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-polibatam-navy">Latest Articles</h2>
            <span className="text-sm text-gray-500 font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              {totalPosts} articles available
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => {
              // Fix for local images
              const coverImageSrc = post.coverImage.replace(/^http:\/\/localhost:3000/, '');

              return (
                <article
                  key={post.id}
                  className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={coverImageSrc}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-polibatam-orange text-xs font-bold uppercase tracking-wider shadow-sm">
                        Insight
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-polibatam-orange" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-polibatam-orange" />
                        <span>{estimateReadingTime(post.content)} min read</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-polibatam-navy mb-3 line-clamp-2 group-hover:text-polibatam-orange transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                      {post.description}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-polibatam-navy group-hover:text-polibatam-orange transition-colors mt-auto"
                    >
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {posts.length === 0 && (
            <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-white p-16 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">We couldn&apos;t find any posts at the moment. Please check back later.</p>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="mt-16 flex items-center justify-center gap-4">
              <Link
                aria-disabled={page <= 1}
                href={`/blog?page=${page - 1}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${page <= 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-polibatam-navy border border-gray-200 hover:border-polibatam-orange hover:text-polibatam-orange hover:shadow-md"
                  }`}
              >
                Previous
              </Link>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/blog?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all ${p === page
                        ? "bg-polibatam-orange text-white shadow-lg shadow-polibatam-orange/30"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-polibatam-orange hover:text-polibatam-orange"
                      }`}
                  >
                    {p}
                  </Link>
                ))}
              </div>

              <Link
                aria-disabled={page >= totalPages}
                href={`/blog?page=${page + 1}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${page >= totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-polibatam-navy border border-gray-200 hover:border-polibatam-orange hover:text-polibatam-orange hover:shadow-md"
                  }`}
              >
                Next
              </Link>
            </nav>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
