'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CurriculumCourseDTO } from "@/lib/curriculum";

interface CurriculumFormProps {
  mode: "create" | "edit";
  courseId?: string;
  initialData?: CurriculumCourseDTO;
}

export default function CurriculumForm({ mode, courseId, initialData }: CurriculumFormProps) {
  const router = useRouter();
  const [semester, setSemester] = useState(String(initialData?.semester ?? 1));
  const [code, setCode] = useState(initialData?.code ?? "");
  const [name, setName] = useState(initialData?.name ?? "");
  const [credits, setCredits] = useState(String(initialData?.credits ?? 3));
  const [type, setType] = useState<"mandatory" | "elective">(
    (initialData?.type as "mandatory" | "elective") ?? "mandatory"
  );
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [displayOrder, setDisplayOrder] = useState(String(initialData?.displayOrder ?? 0));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      semester: Number.isFinite(Number(semester)) ? Number(semester) : 1,
      code,
      name,
      credits: Number.isFinite(Number(credits)) ? Number(credits) : 0,
      type,
      description,
      displayOrder: Number.isFinite(Number(displayOrder)) ? Number(displayOrder) : 0,
    };

    try {
      const endpoint = mode === "create" ? "/api/curriculum" : `/api/curriculum/${courseId}`;
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
        throw new Error(body?.message ?? "Failed to save course");
      }

      setSuccess(mode === "create" ? "Course created successfully" : "Course updated successfully");
      router.replace("/admin/curriculum");
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

      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Semester</span>
          <input
            type="number"
            min={1}
            value={semester}
            onChange={(event) => setSemester(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Course code</span>
          <input
            required
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="RE101"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Credits</span>
          <input
            type="number"
            min={0}
            value={credits}
            onChange={(event) => setCredits(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Course name</span>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Introduction to Robotics"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Description</span>
        <textarea
          required
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Describe the course objectives and outcomes"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Course type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value as "mandatory" | "elective")}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          >
            <option value="mandatory">Mandatory</option>
            <option value="elective">Elective</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Display order</span>
          <input
            type="number"
            min={0}
            value={displayOrder}
            onChange={(event) => setDisplayOrder(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="0"
          />
        </label>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          disabled={loading}
          onClick={() => router.push("/admin/curriculum")}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-polibatam-orange px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-polibatam-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Saving..." : mode === "create" ? "Create course" : "Update course"}
        </button>
      </div>
    </form>
  );
}
