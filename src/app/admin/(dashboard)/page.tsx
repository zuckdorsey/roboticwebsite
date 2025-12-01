import { getLatestPosts } from "@/lib/posts";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import { estimateReadingTime } from "@/lib/reading-time";
import type { Post } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [latestPosts, totalPosts] = await Promise.all([
    getLatestPosts(5),
    prisma.post.count(),
  ]);

  const averageReadingTime = latestPosts.length
    ? Math.round(
        latestPosts.reduce(
          (acc: number, post: Post) => acc + estimateReadingTime(post.content),
          0
        ) / latestPosts.length
      )
    : null;

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-polibatam-navy">Welcome back</h1>
          <p className="text-sm text-gray-500">Quick glance at the latest activity.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-polibatam-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-polibatam-navy"
        >
          Create new post
        </Link>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-polibatam-orange/10 p-6">
          <p className="text-sm font-medium text-polibatam-orange">Total posts</p>
          <p className="mt-2 text-3xl font-semibold text-polibatam-navy">{totalPosts}</p>
        </div>
        <div className="rounded-2xl bg-polibatam-navy/10 p-6">
          <p className="text-sm font-medium text-polibatam-navy">Latest publication</p>
          <p className="mt-2 text-lg font-semibold text-polibatam-navy">
            {latestPosts[0]?.title ?? "No posts yet"}
          </p>
        </div>
        <div className="rounded-2xl bg-polibatam-peach/20 p-6">
          <p className="text-sm font-medium text-polibatam-navy">Avg. reading time</p>
          <p className="mt-2 text-3xl font-semibold text-polibatam-navy">
            {typeof averageReadingTime === "number" ? `${averageReadingTime} min` : "--"}
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-polibatam-navy">Recent posts</h2>
          <Link href="/admin/posts" className="text-sm font-semibold text-polibatam-orange">
            View all
          </Link>
        </div>
        <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 bg-white">
          {latestPosts.length === 0 && (
            <p className="p-6 text-sm text-gray-500">No posts yet. Start by creating your first article.</p>
          )}
          {latestPosts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/admin/posts/${post.id}/edit`}
              className="flex flex-col gap-1 px-6 py-4 transition hover:bg-gray-50"
            >
              <span className="text-sm font-semibold text-polibatam-navy">{post.title}</span>
              <span className="text-xs text-gray-500">
                {formatDate(post.createdAt)} • {estimateReadingTime(post.content)} min read
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
