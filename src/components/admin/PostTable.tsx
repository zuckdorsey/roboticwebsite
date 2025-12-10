'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { estimateReadingTime } from "@/lib/reading-time";
import { formatDate } from "@/lib/format";

interface PostTableProps {
  posts: Array<{
    id: string;
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export default function PostTable({ posts }: PostTableProps) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) {
      return;
    }

    setBusyId(id);
    setError(null);

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to delete post");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-4">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium text-gray-600">Title</th>
              <th className="px-4 py-3 font-medium text-gray-600">Excerpt</th>
              <th className="px-4 py-3 font-medium text-gray-600">Created</th>
              <th className="px-4 py-3 font-medium text-gray-600">Reading</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-polibatam-navy">
                  <Link href={`/blog/${post.slug}`} className="hover:text-polibatam-orange">
                    {post.title}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-600">{post.description}</td>
                <td className="px-4 py-3 text-gray-500">{formatDate(post.createdAt)}</td>
                <td className="px-4 py-3 text-gray-500">{estimateReadingTime(post.content)} min</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="rounded-full border border-polibatam-orange px-4 py-1 text-xs font-semibold text-polibatam-orange transition hover:bg-polibatam-orange hover:text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={busyId === post.id}
                      className="rounded-full border border-red-500 px-4 py-1 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {busyId === post.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
