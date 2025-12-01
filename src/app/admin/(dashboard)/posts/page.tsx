import PostTable from "@/components/admin/PostTable";
import prisma from "@/lib/prisma";
import Link from "next/link";
import type { Post } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const posts: Post[] = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-polibatam-navy">Posts</h1>
          <p className="text-sm text-gray-500">Manage and update blog content.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-polibatam-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-polibatam-navy"
        >
          Create post
        </Link>
      </div>

      <PostTable
        posts={posts.map((post: Post) => ({
          ...post,
          createdAt: post.createdAt.toISOString(),
          updatedAt: post.updatedAt.toISOString(),
        }))}
      />
    </div>
  );
}
