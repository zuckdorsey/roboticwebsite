import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { estimateReadingTime } from "@/lib/reading-time";
import { Calendar, Clock, User, Share2, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogImage = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}${post.coverImage}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.content);

  // Convert absolute URL to relative if it's from localhost/uploads
  // This ensures Next.js Image optimization works correctly without remotePatterns issues for local files
  const coverImageSrc = post.coverImage.replace(/^http:\/\/localhost:3000/, '');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={coverImageSrc}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16 md:pb-24">
              <div className="max-w-4xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Link>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-polibatam-orange text-white text-xs font-bold uppercase tracking-wider">
                    Robotics Insight
                  </span>
                  {/* Placeholder for tags if available in future */}
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                    Technology
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/60 uppercase tracking-wider">Author</span>
                      <span className="font-semibold">{post.author?.name || "Polibatam Team"}</span>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-white/20 hidden md:block" />

                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-polibatam-orange" />
                    <span>{formatDate(post.createdAt)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-polibatam-orange" />
                    <span>{readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 -mt-10 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-polibatam-navy
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:relative prose-h2:inline-block
                  prose-h2:after:content-[''] prose-h2:after:absolute prose-h2:after:-bottom-2 prose-h2:after:left-0 prose-h2:after:w-12 prose-h2:after:h-1 prose-h2:after:bg-polibatam-orange prose-h2:after:rounded-full
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-polibatam-orange prose-a:no-underline prose-a:border-b-2 prose-a:border-polibatam-orange/30 hover:prose-a:border-polibatam-orange hover:prose-a:text-polibatam-orange-dark prose-a:transition-colors
                  prose-blockquote:border-l-4 prose-blockquote:border-polibatam-orange prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-img:rounded-2xl prose-img:shadow-lg
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:marker:text-polibatam-orange
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:marker:text-polibatam-navy
                "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h3 className="text-lg font-bold text-polibatam-navy flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Share this article
                    </h3>
                    <div className="flex gap-4">
                      <button className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110">
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-110">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-polibatam-navy/5 flex items-center justify-center shrink-0 overflow-hidden relative">
                  {post.author?.photo ? (
                    <Image
                      src={post.author.photo}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-polibatam-navy" />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-polibatam-navy mb-2">
                    {post.author?.name || "Robotika Polibatam Team"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.author?.bio ||
                      "We are a dedicated team of students and faculty members passionate about robotics and technology. Our goal is to innovate and educate through practical applications and research."}
                  </p>
                  {!post.author && (
                    <Link
                      href="/#about"
                      className="text-polibatam-orange font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Learn more about us <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Newsletter Widget */}
              <div className="bg-polibatam-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-polibatam-orange/20 rounded-tr-full -ml-8 -mb-8" />

                <h3 className="text-xl font-bold mb-4 relative z-10">Stay Updated</h3>
                <p className="text-white/80 mb-6 relative z-10 text-sm">
                  Get the latest news and updates from our robotics team delivered to your inbox.
                </p>
                <form className="space-y-3 relative z-10">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
                  />
                  <button className="w-full py-3 rounded-xl bg-polibatam-orange font-bold hover:bg-white hover:text-polibatam-orange transition-all shadow-lg shadow-polibatam-orange/30">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Quick Links / Categories */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-lg font-bold text-polibatam-navy mb-6 border-b border-gray-100 pb-4">
                  Explore More
                </h3>
                <ul className="space-y-3">
                  {['Technology', 'Events', 'Achievements', 'Tutorials', 'Student Life'].map((category) => (
                    <li key={category}>
                      <Link href="#" className="flex items-center justify-between group text-gray-600 hover:text-polibatam-orange transition-colors">
                        <span>{category}</span>
                        <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-polibatam-orange/10 transition-colors">
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
