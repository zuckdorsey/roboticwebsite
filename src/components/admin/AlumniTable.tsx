'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { AlumniStoryDTO } from "@/lib/alumni";

interface AlumniTableProps {
  stories: AlumniStoryDTO[];
}

export default function AlumniTable({ stories }: AlumniTableProps) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this alumni story?")) {
      return;
    }

    setBusyId(id);
    setError(null);

    try {
      const response = await fetch(`/api/alumni/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to delete story");
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
              <th className="px-4 py-3 font-medium text-gray-600">Name</th>
              <th className="px-4 py-3 font-medium text-gray-600">Role</th>
              <th className="px-4 py-3 font-medium text-gray-600">Graduation year</th>
              <th className="px-4 py-3 font-medium text-gray-600">Order</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {stories.map((story) => (
              <tr key={story.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-semibold text-polibatam-navy">{story.name}</td>
                <td className="px-4 py-3 text-gray-600">{story.role}</td>
                <td className="px-4 py-3 text-gray-500">{story.graduationYear}</td>
                <td className="px-4 py-3 text-gray-500">{story.displayOrder}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/alumni/${story.id}`}
                      className="rounded-full border border-polibatam-orange px-4 py-1 text-xs font-semibold text-polibatam-orange transition hover:bg-polibatam-orange hover:text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(story.id)}
                      disabled={busyId === story.id}
                      className="rounded-full border border-red-500 px-4 py-1 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {busyId === story.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {stories.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  No alumni stories found. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
