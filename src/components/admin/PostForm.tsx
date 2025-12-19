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

'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostEditor from "@/components/admin/PostEditor";
import { slugify } from "@/lib/slugify";

interface Author {
  id: string;
  name: string;
}

interface PostFormProps {
  mode: "create" | "edit";
  postId?: string;
  authors: Author[];
  initialData?: {
    title: string;
    description: string;
    content: string;
    coverImage: string;
    slug: string;
    authorId?: string | null;
  };
}

export default function PostForm({ mode, postId, initialData, authors }: PostFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");
  const [content, setContent] = useState(initialData?.content ?? "<p></p>");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [authorId, setAuthorId] = useState(initialData?.authorId ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initialData?.slug));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!slugTouched) {
      setSlug(slugify(title));
    }
  }, [title, slugTouched]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      title,
      description,
      content,
      coverImage,
      slug,
      authorId: authorId || null,
    };

    try {
      const endpoint = mode === "create" ? "/api/posts" : `/api/posts/${postId}`;
      const method = mode === "create" ? "POST" : "PUT";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to save post");
      }

      setSuccess(mode === "create" ? "Post created successfully" : "Post updated successfully");
      router.replace("/admin/posts");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to upload image");
      }

      const data = await response.json();
      setCoverImage(data.url);
      setSuccess("Image uploaded");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      {success && <p className="rounded-md bg-emerald-100 px-4 py-2 text-sm text-emerald-700">{success}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Title</span>
          <input
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Post title"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Slug</span>
          <input
            required
            value={slug}
            onChange={(event) => {
              setSlugTouched(true);
              setSlug(slugify(event.target.value));
            }}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="post-slug"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Author</span>
          <select
            value={authorId}
            onChange={(event) => setAuthorId(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          >
            <option value="">Select an author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Short description</span>
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Brief summary for previews"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Cover image URL</span>
          <input
            required
            value={coverImage}
            onChange={(event) => setCoverImage(event.target.value)}
            placeholder="https://example.com/cover.jpg"
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            type="url"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Upload image</span>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) {
                void handleImageUpload(file);
              }
            }}
            className="rounded-lg border border-dashed border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          />
          <span className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB. Current: {coverImage || 'not set'}</span>
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Content</span>
          {uploading && <span className="text-xs text-polibatam-orange">Uploading image...</span>}
        </div>
        <PostEditor value={content} onChange={setContent} />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          disabled={loading}
          onClick={() => router.push("/admin/posts")}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading || uploading}
          className="rounded-full bg-polibatam-orange px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-polibatam-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Saving..." : mode === "create" ? "Publish post" : "Update post"}
        </button>
      </div>
    </form>
  );
}
