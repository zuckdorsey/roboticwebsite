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

import PostForm from "@/components/admin/PostForm";
import prisma from "@/lib/prisma";
import { getAuthors } from "@/lib/actions/authors";
import { notFound } from "next/navigation";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const [post, authors] = await Promise.all([
    prisma.post.findUnique({ where: { id } }),
    getAuthors(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Edit post</h1>
        <p className="text-sm text-gray-500">Update the content and metadata.</p>
      </div>
      <PostForm
        mode="edit"
        postId={post.id}
        authors={authors}
        initialData={{
          title: post.title,
          description: post.description,
          content: post.content,
          coverImage: post.coverImage,
          slug: post.slug,
          authorId: post.authorId,
        }}
      />
    </div>
  );
}
