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

import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import type { Post } from "@prisma/client";

export type PaginatedPostsResult = {
  posts: Post[];
  totalPosts: number;
  totalPages: number;
};

export async function getLatestPosts(limit = 5): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

import { Prisma } from "@prisma/client";

export type PostWithAuthor = Prisma.PostGetPayload<{
  include: { author: true };
}>;

export async function getPostBySlug(slug: string): Promise<PostWithAuthor | null> {
  const normalized = slug?.trim();

  if (!normalized) {
    return null;
  }

  return prisma.post.findUnique({
    where: { slug: normalized },
    include: { author: true },
  });
}

export async function getPostById(id: string): Promise<Post | null> {
  return prisma.post.findUnique({ where: { id } });
}

export async function getPaginatedPosts(
  page: number,
  pageSize: number
): Promise<PaginatedPostsResult> {
  const skip = (page - 1) * pageSize;

  const [posts, totalPosts] = await Promise.all([
    prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    }),
    prisma.post.count(),
  ]);

  return {
    posts,
    totalPosts,
    totalPages: Math.max(1, Math.ceil(totalPosts / pageSize)),
  };
}

export async function generateUniqueSlug(
  title: string,
  preferredSlug?: string,
  existingId?: string
): Promise<string> {
  const base = slugify(preferredSlug ?? title);
  let uniqueSlug = base;
  let increment = 1;

  while (true) {
    const existing = await prisma.post.findUnique({ where: { slug: uniqueSlug } });

    if (!existing || existing.id === existingId) {
      return uniqueSlug;
    }

    uniqueSlug = `${base}-${increment}`;
    increment += 1;
  }
}

export async function createPost(data: {
  title: string;
  description: string;
  content: string;
  coverImage: string;
  slug?: string;
  authorId?: string | null;
}): Promise<Post> {
  const slug = await generateUniqueSlug(data.title, data.slug);

  return prisma.post.create({
    data: {
      ...data,
      slug,
    },
  });
}

export async function updatePost(
  id: string,
  data: {
    title: string;
    description: string;
    content: string;
    coverImage: string;
    slug?: string;
    authorId?: string | null;
  }
): Promise<Post> {
  const slug = await generateUniqueSlug(data.title, data.slug, id);

  return prisma.post.update({
    where: { id },
    data: {
      ...data,
      slug,
    },
  });
}

export async function deletePost(id: string): Promise<void> {
  await prisma.post.delete({ where: { id } });
}
