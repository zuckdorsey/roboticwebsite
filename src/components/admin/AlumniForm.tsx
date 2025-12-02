'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { AlumniStoryDTO } from "@/lib/alumni";

interface AlumniFormProps {
  mode: "create" | "edit";
  storyId?: string;
  initialData?: AlumniStoryDTO;
}

export default function AlumniForm({ mode, storyId, initialData }: AlumniFormProps) {
  const router = useRouter();
  const [name, setName] = useState(initialData?.name ?? "");
  const [role, setRole] = useState(initialData?.role ?? "");
  const [company, setCompany] = useState(initialData?.company ?? "");
  const [image, setImage] = useState(initialData?.image ?? "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [quote, setQuote] = useState(initialData?.quote ?? "");
  const [rating, setRating] = useState(String(initialData?.rating ?? 5));
  const [tagsInput, setTagsInput] = useState((initialData?.tags ?? []).join(", "));
  const [graduationYear, setGraduationYear] = useState(initialData?.graduationYear ?? "");
  const [displayOrder, setDisplayOrder] = useState(String(initialData?.displayOrder ?? 0));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const tags = tagsInput
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => tag.length > 0);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("company", company);
    formData.append("quote", quote);
    formData.append("rating", rating);
    formData.append("graduationYear", graduationYear);
    formData.append("displayOrder", displayOrder);
    formData.append("tags", JSON.stringify(tags));

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (image) {
      formData.append("image", image);
    }

    try {
      const endpoint = mode === "create" ? "/api/alumni" : `/api/alumni/${storyId}`;
      const method = mode === "create" ? "POST" : "PUT";

      const response = await fetch(endpoint, {
        method,
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to save alumni story");
      }

      setSuccess(mode === "create" ? "Alumni story created successfully" : "Alumni story updated successfully");
      router.replace("/admin/alumni");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      {success && <p className="rounded-md bg-emerald-100 px-4 py-2 text-sm text-emerald-700">{success}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Full name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Role</span>
          <input
            required
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Current role"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Company</span>
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Company"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Graduation year</span>
          <input
            required
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="2024"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Quote</span>
        <textarea
          required
          value={quote}
          onChange={(event) => setQuote(event.target.value)}
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Inspirational quote"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Rating (1-5)</span>
          <input
            type="number"
            min={1}
            max={5}
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Display order</span>
          <input
            type="number"
            min={0}
            value={displayOrder}
            onChange={(event) => setDisplayOrder(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Image</span>
          <div className="flex flex-col gap-2">
            {image && typeof image === 'string' && (
              <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-200">
                <img src={image} alt="Preview" className="h-full w-full object-cover" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                }
              }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-polibatam-orange/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-polibatam-orange hover:file:bg-polibatam-orange/20"
            />
          </div>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Tags (comma separated)</span>
        <input
          value={tagsInput}
          onChange={(event) => setTagsInput(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Robotics, AI"
        />
      </label>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          disabled={loading}
          onClick={() => router.push("/admin/alumni")}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-polibatam-orange px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-polibatam-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Saving..." : mode === "create" ? "Create story" : "Update story"}
        </button>
      </div>
    </form>
  );
}
